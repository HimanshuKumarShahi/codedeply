import PromoBanner from "@/components/layout/promo-banner";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import HeroSection from "@/components/landing/hero-section";
import StatsSection from "@/components/landing/stats-section";
import PricingGridSection from "@/components/landing/pricing-grid-section";
import SpeedComparisonSection from "@/components/landing/speed-comparison-section";
import CloudPanelShowcase from "@/components/landing/cloud-panel-showcase";
import HowItWorksSection from "@/components/landing/how-it-works-section";
import FeaturesSection from "@/components/landing/features-section";
import CodeShowcaseSection from "@/components/landing/code-showcase-section";
import TestimonialsSection from "@/components/landing/testimonials-section";
import FaqSection from "@/components/landing/faq-section";
import CtaSection from "@/components/landing/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodeDeploy — Everything You Need to Deploy, Host & Scale Web Apps",
  description:
    "Up to 5x faster deployment speeds, Git-native CI/CD, managed serverless Postgres, and Redis queues with 99.99% uptime SLA and 24/7 dedicated support.",
  openGraph: {
    title: "CodeDeploy — Hostinger-Grade Cloud & BaaS Platform",
    description:
      "Push code. We handle the rest. Instant microVM deploys, serverless Postgres with DB branching, and 32 global edge locations.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-200">
      {/* Hostinger Signature Flash Sale Countdown Banner */}
      <PromoBanner />

      {/* Modern Hostinger-Style Sticky Header with Currency Selector */}
      <SiteHeader />

      {/* Hero Section with Deal Box, Live Countdown & Trust Badges */}
      <HeroSection />

      {/* Real-time Uptime SLA & Performance Stats */}
      <StatsSection />

      {/* Hostinger-Style 3-Tier Pricing Comparison Grid with INR/USD Toggle */}
      <PricingGridSection />

      {/* Up to 5x Faster Speed Benchmark & NVMe Pillars */}
      <SpeedComparisonSection />

      {/* Intuitive Cloud Control Panel (hPanel-inspired showcase) */}
      <CloudPanelShowcase />

      {/* Deploy in 3 Simple Steps */}
      <HowItWorksSection />

      {/* Deep Dive Platform Architecture Features */}
      <FeaturesSection />

      {/* Interactive Code & CLI Showcase */}
      <CodeShowcaseSection />

      {/* Verified Developer Reviews with Trustpilot Rating */}
      <TestimonialsSection />

      {/* Frequently Asked Questions (Hostinger Smooth Accordion) */}
      <FaqSection />

      {/* 1-Click Quick Deploy Box */}
      <CtaSection />

      {/* Hostinger Midnight Purple Footer with Payment Icons & Guarantees */}
      <SiteFooter />
    </main>
  );
}
