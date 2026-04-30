import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-10">
      <div className="h-px w-full bg-gradient-brand opacity-60" />
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#top" className="font-display text-xl font-bold tracking-tight">
          GLY<span className="text-gradient-brand">DE</span>
        </a>
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Move different.</p>
        <a
          href="https://instagram.com/glyde.official"
          target="_blank"
          rel="noreferrer"
          aria-label="Glyde on Instagram"
          className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:shadow-[0_0_20px_var(--glyde-blue)] transition-all"
        >
          <Instagram className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}