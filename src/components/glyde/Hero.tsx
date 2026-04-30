import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ShoeGlyph } from "./ShoeGlyph";

const headline = ["Walk.", "Tap.", "Roll."];

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden"
    >
      {/* background grid */}
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      {/* ambient blobs */}
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full blur-3xl"
        style={{ background: "color-mix(in oklab, var(--glyde-blue) 35%, transparent)" }}
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ background: "color-mix(in oklab, var(--glyde-violet) 35%, transparent)" }}
      />

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          First drop · 500 pairs
        </motion.div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.95] tracking-tighter">
          {headline.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.3 + i * 0.18, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`inline-block mr-3 md:mr-6 ${i === 1 ? "text-gradient-brand" : ""}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground"
        >
          The world's first tap-activated retractable wheel shoe. Switch between walking and skating
          in under 0.3 seconds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-7 h-12 transition-all hover:shadow-[0_0_32px_var(--glyde-blue)]"
          >
            <a href="#waitlist">
              Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-7 h-12 border-border bg-transparent hover:bg-card hover:border-primary/50 transition-all"
          >
            <a href="#how">
              <Play className="mr-2 h-4 w-4" /> See How It Works
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-16"
        >
          <ShoeGlyph />
        </motion.div>
      </div>
    </section>
  );
}