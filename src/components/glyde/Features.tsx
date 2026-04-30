import { motion } from "framer-motion";
import { Gauge, Shield, Palette, Smartphone, Wind, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = { icon: LucideIcon; title: string; desc: string };

const features: Feature[] = [
  { icon: Gauge, title: "0.3s Deploy", desc: "Instant wheel extension" },
  { icon: Shield, title: "Weight-Rated", desc: "Supports up to 120kg" },
  { icon: Palette, title: "3 Colorways", desc: "Black, White, Volt" },
  { icon: Smartphone, title: "No App Needed", desc: "Pure mechanical tap system" },
  { icon: Wind, title: "Street-Ready", desc: "Grip wheels for urban terrain" },
  { icon: Star, title: "Limited Drop", desc: "First batch: 500 pairs only" },
];

export function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">Specs</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Built <span className="text-gradient-brand">different.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl bg-card/60 border border-border p-6 overflow-hidden transition-all hover:border-secondary/40 hover:shadow-[0_0_36px_color-mix(in_oklab,var(--glyde-violet)_22%,transparent)]"
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--glyde-blue) 8%, transparent), transparent 60%)" }}
              />
              <div className="relative flex items-start gap-4">
                <div className="shrink-0 h-11 w-11 rounded-lg bg-background border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <f.icon className="h-5 w-5 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}