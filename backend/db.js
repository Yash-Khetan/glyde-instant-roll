import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core';
import dotenv from 'dotenv';

dotenv.config();

// ==========================================
// DRIZZLE SCHEMA
// ==========================================
export const waitlistTable = pgTable('waitlist', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

// ==========================================
// DATABASE CONNECTION
// ==========================================
// Use Neon's serverless HTTP driver (extremely fast for single queries / edge)
if (!process.env.DATABASE_URL) {
  console.warn("WARNING: DATABASE_URL is not set in environment variables");
}

const sql = neon(process.env.DATABASE_URL || 'postgresql://user:pass@host/db');
export const db = drizzle(sql);

// Initialize database table on startup
export const initDb = async () => {
  try {
    // We execute a raw SQL query through neon to ensure the table exists
    // (In production, you'd typically use drizzle-kit for migrations)
    await sql`
      CREATE TABLE IF NOT EXISTS waitlist (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('Database initialized: waitlist table is ready.');
  } catch (err) {
    console.error('Error initializing database:', err);
  }
};
