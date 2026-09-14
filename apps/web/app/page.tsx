import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import HeroSection from "@/components/landing/hero-section";
import FeaturesSection from "@/components/landing/features-section";
import CodeShowcaseSection from "@/components/landing/code-showcase-section";
import StatsSection from "@/components/landing/stats-section";
import TestimonialsSection from "@/components/landing/testimonials-section";
import CtaSection from "@/components/landing/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodeDeploy — Autonomous Cloud BaaS & Instant Deploys",
  description:
    "The deployment platform and Backend-as-a-Service built for modern developers. Serverless Postgres, Redis queues, instant git deploys, and real-time telemetry.",
  openGraph: {
    title: "CodeDeploy — Deploy at the Speed of Light",
    description:
      "Push your code. We handle the rest. Instant deploys, serverless Postgres, Redis worker queues, and zero config.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-200">
      <SiteHeader />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <CodeShowcaseSection />
      <TestimonialsSection />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
