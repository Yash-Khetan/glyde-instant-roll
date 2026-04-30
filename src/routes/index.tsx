import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/glyde/Navbar";
import { Hero } from "@/components/glyde/Hero";
import { HowItWorks } from "@/components/glyde/HowItWorks";
import { Features } from "@/components/glyde/Features";
import { Waitlist } from "@/components/glyde/Waitlist";
import { Footer } from "@/components/glyde/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glyde — Walk. Tap. Roll." },
      {
        name: "description",
        content:
          "Glyde: the world's first tap-activated retractable wheel shoe. Switch between walking and skating in 0.3 seconds. Join the waitlist.",
      },
      { property: "og:title", content: "Glyde — Walk. Tap. Roll." },
      {
        property: "og:description",
        content: "Tap-activated retractable wheel shoes. Premium streetwear-tech.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Waitlist />
      <Footer />
    </main>
  );
}
