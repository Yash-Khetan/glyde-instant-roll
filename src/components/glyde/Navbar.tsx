import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl font-bold tracking-tight">
          GLY<span className="text-gradient-brand">DE</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#waitlist" className="hover:text-foreground transition-colors">Waitlist</a>
        </nav>
        <Button
          asChild
          className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-[0_0_24px_var(--glyde-blue)] rounded-full px-5"
        >
          <a href="#waitlist">Join Waitlist</a>
        </Button>
      </div>
    </motion.header>
  );
}