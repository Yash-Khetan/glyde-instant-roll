import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { db, waitlistTable, initDb } from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ==========================================
// SECURITY MIDDLEWARES
// ==========================================

// Helmet sets various HTTP headers for security (protects against XSS, clickjacking, etc.)
app.use(helmet());

// CORS configuration - only allow requests from your frontend
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['POST', 'GET'],
}));

// Parse incoming JSON requests
app.use(express.json());

// Rate Limiting
// Why is it required? Waitlist forms are common targets for bot spam. 
// A bot could submit thousands of fake emails per minute, flooding your database, 
// using up your Neon DB free tier, and getting your email domain blacklisted for spam.
const waitlistLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes window
  max: 5, // Limit each IP to 5 requests per window
  message: { error: 'Too many requests from this IP, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// ==========================================
// ROUTES
// ==========================================

// home route
app.get("/", (req, res) => {
  res.send("the backend api is up and running!");
})

// Waitlist Submission Endpoint
app.post('/api/waitlist', waitlistLimiter, async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required.' });
  }

  try {
    // Insert email into Neon DB using Drizzle ORM
    const result = await db.insert(waitlistTable).values({ email }).returning();
    res.status(201).json({ message: 'Successfully joined the waitlist!', data: result[0] });
  } catch (error) {
    // Handle unique constraint violation (code 23505 in PostgreSQL)
    if (error.code === '23505') {
      return res.status(409).json({ error: 'This email is already on the waitlist.' });
    }
    console.error('Waitlist error:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Basic health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// ==========================================
// START SERVER
// ==========================================
app.listen(PORT, async () => {
  await initDb(); // Ensures table exists on startup
  console.log(`Server is running on port ${PORT}`);
});
