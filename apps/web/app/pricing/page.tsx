"use client";

import { useState } from "react";
import { Check, ChevronDown, Zap, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";

const plans = [
  {
    name: "Hobby",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Ideal for personal projects, indie hackers & prototypes.",
    features: [
      "Unlimited preview deployments",
      "1 Production custom domain",
      "Shared microVM compute (512MB RAM)",
      "Serverless Postgres (500MB storage)",
      "Redis job queue (10,000 jobs/mo)",
      "Community Discord support",
      "Real-time logs (24h retention)",
      "Automatic Let's Encrypt SSL",
    ],
    cta: "Start Free Forever",
    highlighted: false,
    badge: null,
  },
  {
    name: "Pro",
    monthlyPrice: 19,
    annualPrice: 15,
    description: "For professionals and fast-growing production applications.",
    features: [
      "Unlimited deployments & domains",
      "Dedicated microVM compute (2GB RAM)",
      "Serverless Postgres (10GB + automated backups)",
      "Redis job queue (500,000 jobs/mo)",
      "Zero-copy database branching",
      "Priority email & Slack support",
      "Real-time logs (30d retention + export)",
      "Automatic edge DDoS protection",
      "Team seats (up to 5 members)",
    ],
    cta: "Start 14-Day Pro Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Team & Enterprise",
    monthlyPrice: 59,
    annualPrice: 48,
    description: "For scaling engineering teams requiring compliance & SLA.",
    features: [
      "Everything in Pro with unlimited team seats",
      "99.99% Edge Uptime SLA agreement",
      "Dedicated multi-region Postgres clusters",
      "Unlimited Redis queue throughput",
      "Audit logging & SOC-2 compliance reports",
      "SAML / Okta / Azure AD Single Sign-On",
      "Dedicated Solutions Architect",
      "Custom VPC peering & isolated IPs",
    ],
    cta: "Contact Enterprise",
    highlighted: false,
    badge: null,
  },
];

const faqs = [
  {
    q: "Can I switch plans or cancel at any time?",
    a: "Yes. You can upgrade, downgrade, or cancel your subscription at any time directly from the console settings. Upgrades take effect immediately with prorated billing.",
  },
  {
    q: "What is included in the serverless BaaS database?",
    a: "Every project gets a managed PostgreSQL instance with integrated PgBouncer connection pooling, automated backups, and instant database branching for pull request previews.",
  },
  {
    q: "How does CodeDeploy compare to Vercel or Supabase?",
    a: "CodeDeploy uniquely combines Vercel's zero-config git deployment engine with Supabase's backend capabilities (managed Postgres, Redis queues, and real-time WebSocket telemetry) into one cohesive platform.",
  },
  {
    q: "Do you offer open source or non-profit discounts?",
    a: "Yes! Open-source projects with public repositories qualify for our Pro plan at no cost. Apply directly inside your dashboard by linking your GitHub repository.",
  },
  {
    q: "What payment methods are supported?",
    a: "We support all major credit cards (Visa, Mastercard, American Express), Apple Pay, and Google Pay through Stripe. Enterprise plans can also pay via ACH or invoice.",
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-200">
      <SiteHeader />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-36 pb-20 px-4 sm:px-6 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/15 dark:bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-xs font-semibold text-indigo-600 dark:text-indigo-300 mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Transparent SaaS &amp; BaaS Pricing</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
                Predictable pricing for{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 dark:from-indigo-400 dark:via-violet-300 dark:to-cyan-400 bg-clip-text text-transparent">
                  modern developers
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
                Start for free with generous compute &amp; database allowances. Scale up seamlessly as your application grows.
              </p>

              {/* Billing Cycle Toggle */}
              <div className="inline-flex items-center justify-center gap-3 p-1.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-slate-900/60 backdrop-blur-md shadow-sm">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                    !isAnnual
                      ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Monthly Billing
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                    isAnnual
                      ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <span>Annual Billing</span>
                  <span className="px-1.5 py-0.2 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                    Save 20%
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="relative px-4 sm:px-6 pb-24 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  plan.highlighted
                    ? "border-2 border-indigo-500 bg-white dark:bg-slate-900/90 shadow-2xl shadow-indigo-500/10 dark:shadow-[0_20px_50px_rgba(99,102,241,0.2)] md:-translate-y-2"
                    : "border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl shadow-sm hover:shadow-lg"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{plan.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-slate-900 dark:text-white">
                        {plan.monthlyPrice === 0 ? "Free" : `$${isAnnual ? plan.annualPrice : plan.monthlyPrice}`}
                      </span>
                      {plan.monthlyPrice > 0 && (
                        <span className="text-slate-500 text-xs font-semibold">/month</span>
                      )}
                    </div>
                    {isAnnual && plan.monthlyPrice > 0 && (
                      <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-1">
                        Billed annually ($
                        {(isAnnual ? plan.annualPrice : plan.monthlyPrice) * 12}
                        /yr)
                      </p>
                    )}
                  </div>

                  <div className="h-px bg-slate-100 dark:bg-white/[0.06] mb-6" />

                  {/* Feature Checklist */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                        <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/dashboard"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-md shadow-indigo-500/25"
                      : "border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 hover:bg-slate-200/80 dark:hover:bg-white/10 text-slate-900 dark:text-white"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 px-4 sm:px-6 border-t border-slate-200/80 dark:border-white/10 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-2">
              Frequently asked questions
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Everything you need to know about CodeDeploy plans and infrastructure billing.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ml-4 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/[0.04] pt-3">
                        {faq.a}
                      </p>
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
