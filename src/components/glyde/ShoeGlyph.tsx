import { motion } from "framer-motion";

export function ShoeGlyph() {
  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto w-full max-w-xl"
    >
      {/* radial glow behind */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 blur-3xl opacity-70"
        style={{ background: "var(--gradient-radial-glow)" }}
      />
      <svg
        viewBox="0 0 600 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full drop-shadow-[0_20px_60px_color-mix(in_oklab,var(--glyde-blue)_40%,transparent)]"
      >
        <defs>
          <linearGradient id="shoeStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.62 0.22 260)" />
            <stop offset="100%" stopColor="oklch(0.62 0.24 295)" />
          </linearGradient>
          <linearGradient id="shoeFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.22 0 0)" />
            <stop offset="100%" stopColor="oklch(0.14 0 0)" />
          </linearGradient>
        </defs>

        {/* shoe silhouette */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M60 180
             C 80 130, 130 110, 180 110
             L 360 110
             C 420 110, 470 125, 510 150
             C 540 168, 552 180, 540 196
             L 90 196
             C 70 196, 56 192, 60 180 Z"
          fill="url(#shoeFill)"
          stroke="url(#shoeStroke)"
          strokeWidth="2"
        />
        {/* lace lines */}
        {[0, 1, 2, 3].map((i) => (
          <motion.line
            key={i}
            x1={210 + i * 32}
            y1={120}
            x2={230 + i * 32}
            y2={150}
            stroke="oklch(0.62 0.22 260)"
            strokeWidth="1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.8 + i * 0.1 }}
          />
        ))}
        {/* sole accent */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, delay: 0.4 }}
          d="M70 196 L540 196"
          stroke="url(#shoeStroke)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* wheels (pulse glow) */}
        {[150, 300, 450].map((cx, i) => (
          <motion.g
            key={cx}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          >
            <circle cx={cx} cy={216} r="14" fill="oklch(0.18 0 0)" stroke="url(#shoeStroke)" strokeWidth="1.5" />
            <circle cx={cx} cy={216} r="5" fill="url(#shoeStroke)" />
          </motion.g>
        ))}
      </svg>
    </motion.div>
  );
}