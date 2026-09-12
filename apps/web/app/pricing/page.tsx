"use client";
import { useState } from "react";
import { Check, ChevronDown, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";

const plans = [
  {
    name: "Hobby",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Perfect for personal projects and learning.",
    features: [
      "3 deployments/month",
      "1 custom domain",
      "Shared compute",
      "Community support",
      "codedeply.app subdomain",
      "Basic logs (24h retention)",
    ],
    cta: "Get Started Free",
    highlighted: false,
    badge: null,
  },
  {
    name: "Pro",
    monthlyPrice: 12,
    annualPrice: 10,
    description: "For professionals who need more power.",
    features: [
      "Unlimited deployments",
      "10 custom domains",
      "Priority compute",
      "Priority support",
      "5 team members",
      "Real-time logs (30d retention)",
      "Deploy previews",
      "Environment variables",
    ],
    cta: "Start Pro Trial",
    highlighted: false,
    badge: null,
  },
  {
    name: "Team",
    monthlyPrice: 39,
    annualPrice: 32,
    description: "For teams shipping at scale.",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "99.9% Uptime SLA",
      "Dedicated support",
      "Advanced analytics",
      "Audit logs",
      "SSO / SAML",
      "Custom integrations",
      "Priority build queue",
    ],
    cta: "Start Team Trial",
    highlighted: true,
    badge: "Most Popular",
  },
];

const faqs = [
  {
    q: "Can I change my plan later?",
    a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated.",
  },
  {
    q: "What counts as a deployment?",
    a: "A deployment is any time you push code and CodeDeploy builds and serves your app. Preview deployments for PRs also count.",
  },
  {
    q: "Do you offer a free trial for paid plans?",
    a: "Yes, all paid plans come with a 14-day free trial. No credit card required to start.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, Mastercard, Amex) and PayPal. Enterprise customers can pay by invoice.",
  },
  {
    q: "Is there a discount for open-source projects?",
    a: "Absolutely! Open-source projects with public repositories qualify for our Pro plan at no cost. Apply through our GitHub integration.",
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="flex flex-col min-h-screen bg-[#030712]">
      <SiteHeader />

      <div className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.2) 0%, transparent 60%)' }} />
          <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/10 text-xs text-violet-300 font-medium mb-6">
                Pricing
              </div>
              <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-4">
                <span className="text-[#f1f5f9]">Simple, transparent</span>
                <br />
                <span style={{ background: 'linear-gradient(135deg, #a5b4fc, #818cf8, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>pricing</span>
              </h1>
              <p className="text-lg text-[#64748b] mb-10">
                Start free, scale as you grow. No surprise bills.
              </p>

              {/* Toggle */}
              <div className="flex items-center justify-center gap-4">
                <span className={`text-sm ${!isAnnual ? 'text-[#f1f5f9]' : 'text-[#64748b]'}`}>Monthly</span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                    isAnnual ? 'bg-violet-600' : 'bg-white/[0.1]'
                  }`}
                >
                  <div className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white transition-transform duration-300 ${
                    isAnnual ? 'translate-x-7' : 'translate-x-0'
                  }`} />
                </button>
                <span className={`text-sm ${isAnnual ? 'text-[#f1f5f9]' : 'text-[#64748b]'}`}>Annual</span>
                <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">Save 20%</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="relative px-4 sm:px-6 pb-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative"
              >
                {plan.highlighted && (
                  <div
                    className="absolute -inset-px rounded-2xl"
                    style={{
                      background: 'linear-gradient(-45deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)',
                      backgroundSize: '400% 400%',
                      animation: 'gradient-rotate 4s ease infinite',
                    }}
                  />
                )}

                <div className={`relative h-full rounded-2xl p-6 flex flex-col ${
                  plan.highlighted
                    ? 'bg-[#030712] border-0'
                    : 'backdrop-blur-xl bg-white/[0.04] border border-white/[0.07]'
                }`}>
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-[#f1f5f9] mb-1">{plan.name}</h3>
                    <p className="text-sm text-[#64748b] mb-4">{plan.description}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-[#f1f5f9]">
                        {plan.monthlyPrice === 0 ? 'Free' : `$${isAnnual ? plan.annualPrice : plan.monthlyPrice}`}
                      </span>
                      {plan.monthlyPrice > 0 && (
                        <span className="text-[#64748b] text-sm">/month</span>
                      )}
                    </div>
                    {isAnnual && plan.monthlyPrice > 0 && (
                      <p className="text-xs text-emerald-400 mt-1">Billed annually — save ${(plan.monthlyPrice - plan.annualPrice) * 12}/yr</p>
                    )}
                  </div>

                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#94a3b8]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/auth/sign-in"
                    className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]'
                        : 'bg-white/[0.06] text-[#f1f5f9] border border-white/[0.1] hover:bg-white/[0.1]'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="relative py-24 px-4 sm:px-6 border-t border-white/[0.07]">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-black text-[#f1f5f9] mb-3">Frequently asked questions</h2>
              <p className="text-[#64748b]">Everything you need to know about CodeDeploy pricing.</p>
            </motion.div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.07] rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="text-sm font-semibold text-[#f1f5f9]">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#64748b] transition-transform duration-200 flex-shrink-0 ml-4 ${
                        openFaq === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-4 text-sm text-[#64748b] leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
