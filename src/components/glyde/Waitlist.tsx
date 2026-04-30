import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check } from "lucide-react";

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const value = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString()),
    });
    return () => controls.stop();
  }, [inView, to, value]);

  return <span ref={ref}>{display}</span>;
}

export function Waitlist() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="relative py-40 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="gradient-border p-10 md:p-16 text-center overflow-hidden relative"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{ background: "radial-gradient(ellipse at top, color-mix(in oklab, var(--glyde-blue) 18%, transparent), transparent 60%)" }}
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-50"
            style={{ background: "radial-gradient(ellipse at bottom right, color-mix(in oklab, var(--glyde-violet) 18%, transparent), transparent 60%)" }}
          />

          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Be the first <span className="text-gradient-brand">to roll.</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              Drop your email. We'll reach out before anyone else.
            </p>

            <form
              onSubmit={onSubmit}
              className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
            >
              <Input
                type="email"
                required
                placeholder="you@domain.com"
                disabled={submitted}
                className="h-12 rounded-full bg-background/60 border-border px-5 text-base placeholder:text-muted-foreground/60 focus-visible:ring-primary"
              />
              <Button
                type="submit"
                disabled={submitted}
                className="h-12 rounded-full px-7 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-[0_0_28px_var(--glyde-blue)]"
              >
                {submitted ? (
                  <>
                    <Check className="mr-2 h-4 w-4" /> You're in
                  </>
                ) : (
                  <>
                    Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-10 inline-flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[
                  "var(--glyde-blue)",
                  "var(--glyde-violet)",
                  "color-mix(in oklab, var(--glyde-blue) 60%, var(--glyde-violet))",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-background"
                    style={{ background: bg }}
                  />
                ))}
              </div>
              <span>
                <span className="font-semibold text-foreground tabular-nums">
                  <Counter to={1247} />
                </span>{" "}
                people already waiting
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}