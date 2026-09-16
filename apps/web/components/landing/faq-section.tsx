"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: "How does the 30-day money-back guarantee work?",
    a: "All CodeDeploy plans include an unconditional 30-day money-back guarantee. If you are not completely satisfied with our performance, build speeds, or support within 30 days of signing up, simply contact support or cancel directly in your billing panel for a full 100% refund. No questions asked.",
  },
  {
    q: "Can I migrate my existing web applications and databases for free?",
    a: "Yes! CodeDeploy includes free automatic migration tools. Connect your existing Git repository or import PostgreSQL dumps with our one-click database migration assistant. Our engineering team is also available 24/7 to assist with large-scale zero-downtime database migrations.",
  },
  {
    q: "What makes CodeDeploy up to 5x faster than traditional hosting?",
    a: "CodeDeploy runs on ultra-fast NVMe SSD storage, isolated Linux microVM containers, and Turborepo distributed layer caching. Incoming requests are routed over our 32-location Anycast global edge network with HTTP/3 protocol support, cutting response latency (TTFB) down to under 20ms worldwide.",
  },
  {
    q: "What is included with the Serverless Postgres BaaS?",
    a: "Every project gets a managed PostgreSQL database with built-in PgBouncer connection pooling, automated zero-copy database branching for pull request previews, real-time change feeds, and automated daily backups with one-click point-in-time recovery.",
  },
  {
    q: "Which payment methods do you accept in India and globally?",
    a: "We accept all major credit and debit cards (Visa, Mastercard, RuPay, American Express), UPI (Google Pay, PhonePe, Paytm), Net Banking, and PayPal. All transactions are securely processed with 256-bit encryption.",
  },
  {
    q: "Can I upgrade, downgrade, or cancel my plan at any time?",
    a: "Yes, you have complete control over your subscription. You can upgrade to higher microVM compute or add more database storage directly from your control panel. Upgrades take effect immediately with prorated billing.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 lg:py-28 px-4 sm:px-6 bg-white dark:bg-[#0D091F] border-t border-slate-200/80 dark:border-white/10 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#673DE6]/20 bg-[#673DE6]/10 text-xs font-bold text-[#673DE6] dark:text-[#b89eff] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Got Questions? We&apos;ve Got Answers.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Everything you need to know about CodeDeploy plans, migration, and infrastructure.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-[#161033] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-slate-100/50 dark:hover:bg-white/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-200/70 dark:bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#673DE6] text-white" : "text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* 30-Day Guarantee Callout */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
          <ShieldCheck className="w-4 h-4 text-[#00B090]" />
          <span>Still have questions? Our support team is online 24/7 to help you deploy.</span>
        </div>
      </div>
    </section>
  );
}
