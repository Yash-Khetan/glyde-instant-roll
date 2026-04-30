import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Footprints, Zap, RotateCcw } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = { icon: LucideIcon; title: string; desc: string; step: string };

const steps: Step[] = [
  { step: "01", icon: Footprints, title: "Wear it", desc: "Looks and feels like any premium sneaker." },
  { step: "02", icon: Zap, title: "Tap your heel", desc: "Wheels deploy in under 0.3 seconds." },
  { step: "03", icon: RotateCcw, title: "Tap again", desc: "Retract instantly. Back to walking." },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineScale = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

  return (
    <section id="how" className="relative py-40 px-6 border-t border-border">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-24"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-5">— How it works</p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tighter leading-[1.05]">
            Three taps <span className="italic text-gradient-brand">change everything.</span>
          </h2>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          <motion.div
            aria-hidden
            style={{ scaleX: lineScale }}
            className="absolute top-0 left-0 right-0 h-px bg-gradient-brand origin-left"
          />
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-background p-10 min-h-[280px] flex flex-col justify-between transition-colors hover:bg-card/40"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-sm text-muted-foreground tabular-nums">{s.step}</span>
                <s.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-3xl font-semibold mb-3 tracking-tight">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}