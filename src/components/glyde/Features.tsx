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
    <section id="features" className="relative py-40 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-24"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-5">— Specs</p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tighter leading-[1.05]">
            Built <span className="italic text-gradient-brand">different.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-background p-8 min-h-[180px] flex flex-col justify-between transition-colors hover:bg-card/40"
            >
              <f.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" strokeWidth={1.5} />
              <div className="mt-10">
                <h3 className="font-display text-2xl font-semibold tracking-tight">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}