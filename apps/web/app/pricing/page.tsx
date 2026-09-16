"use client";

import { useState } from "react";
import { Check, ChevronDown, Zap, ArrowRight, Sparkles, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PromoBanner from "@/components/layout/promo-banner";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";

const plans = [
  {
    name: "Premium Cloud",
    description: "Ideal for personal projects, indie hackers & prototypes.",
    priceInr: { annual: 149, monthly: 399, regular: 599, save: 75 },
    priceUsd: { annual: 2.49, monthly: 6.99, regular: 9.99, save: 75 },
    features: [
      "100 MicroVM deployments",
      "1 Production custom domain",
      "Dedicated microVM compute (1GB RAM)",
      "Serverless Postgres (5GB storage)",
      "Redis job queue (50,000 jobs/mo)",
      "Automated weekly backups",
      "Community Discord & Email support",
      "Automatic Let's Encrypt SSL",
    ],
    cta: "Claim Deal",
    highlighted: false,
    badge: null,
  },
  {
    name: "Business Cloud",
    description: "Most popular choice for fast-growing production applications.",
    priceInr: { annual: 249, monthly: 599, regular: 999, save: 75 },
    priceUsd: { annual: 3.99, monthly: 9.99, regular: 15.99, save: 75 },
    features: [
      "Unlimited deployments & custom domains",
      "Enhanced microVM compute (4GB RAM, 2 vCPUs)",
      "5 Serverless Postgres DBs (25GB + daily backups)",
      "High-throughput Redis queue (500,000 jobs/mo)",
      "Zero-copy database branching for PRs",
      "Priority 24/7 live support (< 2 min response)",
      "Real-time logs (30d retention + export)",
      "Automatic edge DDoS protection & WAF",
      "Team collaboration (up to 10 seats)",
    ],
    cta: "Claim Deal",
    highlighted: true,
    badge: "MOST POPULAR",
  },
  {
    name: "Cloud Startup / Enterprise",
    description: "Dedicated resources & enterprise SLA for scaling teams.",
    priceInr: { annual: 599, monthly: 1299, regular: 1999, save: 70 },
    priceUsd: { annual: 9.99, monthly: 21.99, regular: 32.99, save: 70 },
    features: [
      "Everything in Business with unlimited team seats",
      "99.99% Edge Uptime SLA agreement with credits",
      "Dedicated multi-region Postgres clusters (100GB)",
      "Unlimited Redis queue throughput & worker nodes",
      "Audit logging & SOC-2 compliance reports",
      "SAML / Okta / Azure AD Single Sign-On",
      "Dedicated Technical Account Manager",
      "Custom VPC peering & isolated dedicated IPs",
    ],
    cta: "Choose Enterprise",
    highlighted: false,
    badge: null,
  },
];

const faqs = [
  {
    q: "How does the 30-day money-back guarantee work?",
    a: "All CodeDeploy plans include an unconditional 30-day money-back guarantee. If you are not completely satisfied with our platform speeds or features within 30 days of signing up, contact our support team for an immediate 100% refund.",
  },
  {
    q: "Can I switch plans or cancel at any time?",
    a: "Yes. You can upgrade, downgrade, or cancel your subscription at any time directly from your control panel. Upgrades take effect immediately with prorated billing.",
  },
  {
    q: "What is included with Serverless Postgres?",
    a: "Every project receives a high-availability PostgreSQL database with integrated PgBouncer connection pooling, automated backups, and zero-copy branching for staging pull requests.",
  },
  {
    q: "Which payment methods do you accept in India and globally?",
    a: "We accept all major credit and debit cards (Visa, Mastercard, RuPay, Amex), UPI (Google Pay, PhonePe, Paytm), Net Banking, and PayPal. All transactions are securely processed with 256-bit encryption.",
  },
];

export default function PricingPage() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const currSymbol = currency === "INR" ? "₹" : "$";

  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-200">
      <PromoBanner />
      <SiteHeader />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-12 pb-16 px-4 sm:px-6 overflow-hidden bg-[#FAF9FD] dark:bg-[#0D091F]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#673DE6]/20 bg-[#673DE6]/10 text-xs font-bold text-[#673DE6] dark:text-[#b89eff] mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Hostinger-Grade Value • Save up to 75%</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
                Predictable, Transparent{" "}
                <span className="text-[#673DE6]">Cloud Pricing</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
                Deploy at lightning speed with generous microVM compute &amp; database allowances. All plans backed by our 30-day money-back guarantee.
              </p>

              {/* Currency & Billing Cycle Toggles */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* Currency Switcher */}
                <div className="inline-flex p-1 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm">
                  <button
                    onClick={() => setCurrency("INR")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      currency === "INR"
                        ? "bg-[#673DE6] text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    🇮🇳 INR (₹)
                  </button>
                  <button
                    onClick={() => setCurrency("USD")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      currency === "USD"
                        ? "bg-[#673DE6] text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    🌐 USD ($)
                  </button>
                </div>

                {/* Billing Switcher */}
                <div className="inline-flex p-1 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm">
                  <button
                    onClick={() => setIsAnnual(true)}
                    className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                      isAnnual
                        ? "bg-[#673DE6] text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    <span>Annual Billing</span>
                    <span className="px-1.5 py-0.5 rounded bg-[#EB0052] text-white text-[10px] font-black uppercase">
                      Save 75%
                    </span>
                  </button>
                  <button
                    onClick={() => setIsAnnual(false)}
                    className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                      !isAnnual
                        ? "bg-[#673DE6] text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    Monthly Billing
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="relative px-4 sm:px-6 py-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, i) => {
              const pricing = currency === "INR" ? plan.priceInr : plan.priceUsd;
              const currentPrice = isAnnual ? pricing.annual : pricing.monthly;
              const regularPrice = pricing.regular;

              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                    plan.highlighted
                      ? "border-2 border-[#673DE6] bg-white dark:bg-[#1A1438] shadow-2xl shadow-[#673DE6]/15 md:-translate-y-2"
                      : "border border-slate-200 dark:border-white/10 bg-white dark:bg-[#150F33] shadow-md hover:shadow-xl"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 text-xs font-black uppercase tracking-wider rounded-full bg-[#673DE6] text-white shadow-md flex items-center gap-1">
                        <Zap className="w-3 h-3 fill-current" /> {plan.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 min-h-[32px]">
                        {plan.description}
                      </p>

                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold line-through text-slate-400">
                            {currSymbol}{regularPrice}/mo
                          </span>
                          {isAnnual && (
                            <span className="px-2 py-0.5 rounded-full bg-[#EB0052]/10 text-[#EB0052] font-black text-[11px]">
                              SAVE {pricing.save}%
                            </span>
                          )}
                        </div>

                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-black text-slate-900 dark:text-white">
                            {currSymbol}{currentPrice}
                          </span>
                          <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                            /month
                          </span>
                        </div>

                        {isAnnual && (
                          <p className="text-[11px] text-[#00B090] font-bold mt-1">
                            ✓ + 3 Months Free included in first term
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Primary CTA */}
                    <Link
                      href="/dashboard"
                      className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-black transition-all mb-6 ${
                        plan.highlighted
                          ? "bg-[#673DE6] hover:bg-[#5025D1] text-white shadow-md shadow-[#673DE6]/30"
                          : "bg-slate-900 hover:bg-slate-800 dark:bg-white/10 dark:hover:bg-white/20 text-white"
                      }`}
                    >
                      <span>{plan.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <div className="h-px bg-slate-100 dark:bg-white/[0.06] mb-6" />

                    {/* Feature Checklist */}
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                      Included Features:
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-[#00B090]/15 text-[#00B090] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-snug">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-white/5 text-center text-[11px] text-slate-400">
                    🛡️ 30-Day Money-Back Guarantee
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* 30-Day Guarantee Banner */}
          <div className="mt-14 rounded-2xl border border-[#673DE6]/30 bg-[#673DE6]/5 dark:bg-[#673DE6]/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00B090]/15 text-[#00B090] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  30-Day Risk-Free Money-Back Guarantee
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                  Try CodeDeploy without hesitation. If you aren&apos;t completely satisfied, get a full refund within 30 days.
                </p>
              </div>
            </div>

            <Link
              href="/dashboard"
              className="shrink-0 px-5 py-2.5 rounded-xl bg-[#673DE6] hover:bg-[#5025D1] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
            >
              Start Free Trial
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-16 px-4 sm:px-6 border-t border-slate-200/80 dark:border-white/10 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Clear answers about plans, billing, and serverless infrastructure.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#161033] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      openFaq === i ? "rotate-180 text-[#673DE6]" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
