import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Footprints, Zap, RotateCcw } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = { icon: LucideIcon; title: string; desc: string; step: string };

const steps: Step[] = [
  { step: "01", icon: Footprints, title: "Wear it", desc: "Looks and feels like any premium sneaker." },
  { step: "02", icon: Zap, title: "Tap your heel", desc: "Wheels deploy in under 0.3 seconds." },
  { step: "03", icon: RotateCcw, title: "Tap again", desc: "Retract instantly. Back to walking." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">How it works</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Three taps <span className="text-gradient-brand">change everything</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
            >
              <Card className="group relative h-full p-8 bg-card/60 border-border rounded-2xl overflow-hidden transition-all hover:border-primary/40 hover:shadow-[0_0_40px_color-mix(in_oklab,var(--glyde-blue)_25%,transparent)]">
                <div
                  aria-hidden
                  className="absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity"
                  style={{ background: "var(--gradient-brand)" }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <div className="h-14 w-14 rounded-xl bg-gradient-brand flex items-center justify-center glow-blue">
                      <s.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <span className="font-display text-5xl font-bold text-muted-foreground/20">{s.step}</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}