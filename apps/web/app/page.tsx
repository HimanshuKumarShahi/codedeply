import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import HeroSection from "@/components/landing/hero-section";
import FeaturesSection from "@/components/landing/features-section";
import StatsSection from "@/components/landing/stats-section";
import TestimonialsSection from "@/components/landing/testimonials-section";
import CtaSection from "@/components/landing/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodeDeploy — Deploy at the Speed of Thought",
  description:
    "The deployment platform built for modern developers. Push your code, we handle the rest. Instant deploys, real-time logs, zero config.",
  openGraph: {
    title: "CodeDeploy — Deploy at the Speed of Thought",
    description:
      "Push your code. We handle the rest. Instant deploys, real-time logs, zero config.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#030712]">
      <SiteHeader />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
