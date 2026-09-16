"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ShieldCheck, ArrowRight, Zap, Sparkles, HelpCircle } from "lucide-react";

interface Plan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  popular?: boolean;
  priceInr: {
    annual: number;
    monthly: number;
    regular: number;
    discountPercent: number;
  };
  priceUsd: {
    annual: number;
    monthly: number;
    regular: number;
    discountPercent: number;
  };
  features: string[];
}

const plans: Plan[] = [
  {
    id: "premium",
    name: "Premium Cloud",
    tagline: "Perfect for indie hackers, side-projects & growing apps.",
    priceInr: {
      annual: 149,
      monthly: 399,
      regular: 599,
      discountPercent: 75,
    },
    priceUsd: {
      annual: 2.49,
      monthly: 6.99,
      regular: 9.99,
      discountPercent: 75,
    },
    features: [
      "100 MicroVM deployments",
      "Managed Postgres DB (5 GB storage)",
      "Redis job queue (50,000 jobs/mo)",
      "Free Custom Domain + Lifetime SSL",
      "Automated weekly backups",
      "Unlimited bandwidth & edge routing",
      "Git CI/CD (GitHub & GitLab)",
      "24/7 Global customer support",
    ],
  },
  {
    id: "business",
    name: "Business Cloud",
    tagline: "Most popular choice for fast-growing production products.",
    badge: "MOST POPULAR",
    popular: true,
    priceInr: {
      annual: 249,
      monthly: 599,
      regular: 999,
      discountPercent: 75,
    },
    priceUsd: {
      annual: 3.99,
      monthly: 9.99,
      regular: 15.99,
      discountPercent: 75,
    },
    features: [
      "Unlimited MicroVM deployments & domains",
      "5 Serverless Postgres databases (25 GB)",
      "Zero-copy database branching for PRs",
      "High-throughput Redis queues (500k jobs/mo)",
      "Automated daily backups with 1-click restore",
      "Free Custom Domain + Wildcard SSL",
      "Enhanced microVM performance (Up to 5x faster)",
      "99.99% Edge Uptime SLA agreement",
      "Priority 24/7 live support (< 2 min wait)",
    ],
  },
  {
    id: "cloud-startup",
    name: "Cloud Startup",
    tagline: "Dedicated resources & enterprise performance for scale.",
    badge: "MAX PERFORMANCE",
    priceInr: {
      annual: 599,
      monthly: 1299,
      regular: 1999,
      discountPercent: 70,
    },
    priceUsd: {
      annual: 9.99,
      monthly: 21.99,
      regular: 32.99,
      discountPercent: 70,
    },
    features: [
      "Dedicated vCPU & RAM compute allocation",
      "Multi-region Postgres with read-replicas (100 GB)",
      "Unlimited Redis queue throughput",
      "Dedicated IP address & custom VPC peering",
      "Enterprise DDoS mitigation & WAF rules",
      "Audit logs & SOC-2 compliance support",
      "Automated real-time continuous backups",
      "99.99% Financially-backed Uptime SLA",
      "Dedicated Customer Success Manager",
    ],
  },
];

export default function PricingGridSection() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-20 lg:py-28 px-4 sm:px-6 bg-white dark:bg-[#0D091F] transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Hostinger Style */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#673DE6]/20 bg-[#673DE6]/10 text-xs font-bold text-[#673DE6] dark:text-[#b89eff] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hostinger-Grade Value • Transparent Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Choose the Best Plan for Your App
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Scale seamlessly with all-in-one cloud microVM compute, serverless Postgres, and instant edge CDN. 
            All plans include a 30-day money-back guarantee.
          </p>

          {/* Interactive Controls: Currency & Billing Cycle Switchers */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {/* Currency Selector */}
            <div className="inline-flex p-1 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5">
              <button
                onClick={() => setCurrency("INR")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currency === "INR"
                    ? "bg-white dark:bg-[#1A1438] text-slate-900 dark:text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                }`}
              >
                🇮🇳 INR (₹)
              </button>
              <button
                onClick={() => setCurrency("USD")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currency === "USD"
                    ? "bg-white dark:bg-[#1A1438] text-slate-900 dark:text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                }`}
              >
                🌐 USD ($)
              </button>
            </div>

            {/* Billing Cycle Toggle */}
            <div className="inline-flex p-1 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5">
              <button
                onClick={() => setIsAnnual(true)}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  isAnnual
                    ? "bg-[#673DE6] text-white shadow-md shadow-[#673DE6]/25"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                }`}
              >
                <span>Annual (Best Value)</span>
                <span className="px-1.5 py-0.5 rounded bg-[#EB0052] text-white text-[10px] font-black uppercase">
                  Save 75%
                </span>
              </button>
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  !isAnnual
                    ? "bg-white dark:bg-[#1A1438] text-slate-900 dark:text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                }`}
              >
                Monthly Billing
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid - Hostinger Signature Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {plans.map((plan) => {
            const pricing = currency === "INR" ? plan.priceInr : plan.priceUsd;
            const currentPrice = isAnnual ? pricing.annual : pricing.monthly;
            const regularPrice = pricing.regular;
            const currSymbol = currency === "INR" ? "₹" : "$";

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "border-2 border-[#673DE6] bg-white dark:bg-[#1A1438] shadow-2xl shadow-[#673DE6]/15 lg:-translate-y-3"
                    : "border border-slate-200 dark:border-white/10 bg-white dark:bg-[#150F33] shadow-md hover:shadow-xl hover:border-slate-300 dark:hover:border-white/20"
                }`}
              >
                {/* Hostinger Popular Purple Ribbon Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-[#673DE6] text-white text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 fill-current" /> {plan.badge}
                    </span>
                  </div>
                )}

                {!plan.popular && plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-0.5 rounded-full border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200 text-[11px] font-bold uppercase tracking-wider">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Title & Tagline */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                      {plan.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 min-h-[32px]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    {/* Discount & Strike-through */}
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold line-through text-slate-400">
                        {currSymbol}{regularPrice}/mo
                      </span>
                      {isAnnual && (
                        <span className="px-2 py-0.5 rounded-full bg-[#EB0052]/10 text-[#EB0052] font-black text-[11px]">
                          SAVE {pricing.discountPercent}%
                        </span>
                      )}
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
                        {currSymbol}{currentPrice}
                      </span>
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                        /month
                      </span>
                    </div>

                    {isAnnual ? (
                      <p className="mt-2 text-[11px] font-semibold text-[#00B090]">
                        ✓ + 3 Months Free included in first term
                      </p>
                    ) : (
                      <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">
                        Renews monthly at {currSymbol}{pricing.monthly}/mo
                      </p>
                    )}
                  </div>

                  {/* Primary CTA Button */}
                  <Link
                    href="/dashboard"
                    className={`w-full py-3.5 px-6 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                      plan.popular
                        ? "bg-[#673DE6] hover:bg-[#5025D1] text-white shadow-[#673DE6]/30 hover:scale-[1.01]"
                        : "bg-slate-900 hover:bg-slate-800 dark:bg-white/10 dark:hover:bg-white/20 text-white"
                    }`}
                  >
                    <span>Choose {plan.name}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </Link>

                  <div className="h-px bg-slate-200/80 dark:bg-white/10 my-6" />

                  {/* Feature Checklist with Hostinger Green Checks */}
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                      Plan Highlights:
                    </div>
                    <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-[#00B090]/15 text-[#00B090] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footnote */}
                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-white/5 text-center">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    🛡️ 30-Day Money-Back Guarantee
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hostinger 30-Day Guarantee Banner */}
        <div className="mt-16 rounded-2xl border border-[#673DE6]/30 bg-[#673DE6]/5 dark:bg-[#673DE6]/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#00B090]/15 text-[#00B090] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                30-Day Full Money-Back Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Deploy your websites and apps completely risk-free. If CodeDeploy doesn&apos;t exceed your performance expectations, simply request a refund within 30 days. No hassles, no questions asked.
              </p>
            </div>
          </div>

          <Link
            href="/dashboard"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#673DE6] hover:bg-[#5025D1] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
          >
            Start Risk-Free Trial
          </Link>
        </div>
      </div>
    </section>
  );
}
