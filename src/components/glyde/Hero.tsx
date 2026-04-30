import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import shoeImg from "@/assets/glyde-shoe.jpg";

const headline = ["Walk.", "Tap.", "Roll."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: shoe moves slower than scroll, fades + scales
  const shoeY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const shoeScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const shoeOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Subtle mouse-driven tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 18 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 120, damping: 18 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden"
    >
      <motion.div style={{ y: textY, opacity: textOpacity }} className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-10"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          First drop · 500 pairs
        </motion.div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-[9rem] font-semibold leading-[0.95] tracking-tighter">
          {headline.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.3 + i * 0.18, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={`inline-block mr-3 md:mr-6 ${i === 1 ? "text-gradient-brand italic" : ""}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 max-w-xl mx-auto text-base md:text-lg text-muted-foreground"
        >
          A tap-activated retractable wheel shoe. Switch between walking and skating in 0.3 seconds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-7 h-12"
          >
            <a href="#waitlist">
              Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="rounded-full px-7 h-12 text-muted-foreground hover:text-foreground hover:bg-transparent"
          >
            <a href="#how">See how it works</a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Product photo with parallax */}
      <motion.div
        style={{ y: shoeY, scale: shoeScale, opacity: shoeOpacity, rotateX, rotateY }}
        className="relative mt-16 w-full max-w-4xl"
      >
        <motion.img
          src={shoeImg}
          alt="Glyde retractable wheel sneaker, side profile"
          width={1600}
          height={1200}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-auto select-none pointer-events-none"
          draggable={false}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-3 w-3" />
        </motion.div>
      </motion.div>
    </section>
  );
}
