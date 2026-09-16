"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  ArrowRight,
  Check,
  Clock,
  ShieldCheck,
  Star,
  Activity,
  Globe2,
  Server,
  Copy,
  Cpu,
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
  const [copiedCli, setCopiedCli] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 36,
    seconds: 48,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCli = () => {
    navigator.clipboard.writeText("npm i -g codeply && codeply deploy");
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="relative pt-8 pb-16 lg:py-20 px-4 sm:px-6 bg-[#FAF9FD] dark:bg-[#0D091F] border-b border-slate-200/80 dark:border-white/10 overflow-hidden transition-colors">
      {/* Background Soft Purple Ambient Glows */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#673DE6]/15 via-[#673DE6]/5 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Hostinger Signature Value Proposition & Deal Box */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Top Deal Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#673DE6]/30 bg-[#673DE6]/10 text-xs font-bold text-[#673DE6] dark:text-[#b89eff] mb-5 shadow-sm"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EB0052] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EB0052]" />
              </span>
              <span>Hostinger-Grade Infrastructure • Save up to 75%</span>
            </motion.div>

            {/* Big Bold Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]"
            >
              Everything You Need to Deploy, Host &amp;{" "}
              <span className="text-[#673DE6] relative">
                Scale Web Apps
              </span>
            </motion.h1>

            {/* Punchy Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal"
            >
              Up to <strong className="text-slate-900 dark:text-white font-bold">5x faster deployment speeds</strong>, Git-native CI/CD, dedicated microVM compute, serverless Postgres with DB branching, and 24/7 dedicated engineering support.
            </motion.p>

            {/* Feature Checklist with Emerald Checks */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full text-xs sm:text-sm text-slate-700 dark:text-slate-200"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#00B090]/15 text-[#00B090] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Free Lifetime SSL</strong> &amp; DDoS Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#00B090]/15 text-[#00B090] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Serverless Postgres</strong> &amp; Redis Queues</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#00B090]/15 text-[#00B090] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Automated Backups</strong> &amp; 99.99% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#00B090]/15 text-[#00B090] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>24/7 Priority Support</strong> in &lt; 3 mins</span>
              </div>
            </motion.div>

            {/* ================= HOSTINGER HERO DEAL BOX ================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 w-full max-w-xl rounded-2xl sm:rounded-3xl border-2 border-[#673DE6] bg-white dark:bg-[#1A1438] p-5 sm:p-7 shadow-xl shadow-[#673DE6]/10 relative"
            >
              {/* Discount Badge */}
              <div className="absolute -top-3.5 left-6">
                <span className="px-3.5 py-1 rounded-full bg-[#EB0052] text-white text-xs font-black uppercase tracking-wider shadow-md">
                  Save 75% Deal
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                {/* Price Display */}
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs sm:text-sm text-slate-500 line-through font-semibold">₹599/mo</span>
                    <span className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
                      ₹149<span className="text-base sm:text-lg font-bold text-slate-500 dark:text-slate-400">/mo</span>
                    </span>
                  </div>
                  <p className="text-xs text-[#00B090] font-bold mt-0.5">
                    + 3 Months Free included in Cloud Plan
                  </p>
                </div>

                {/* Countdown Timer Tiles */}
                <div className="flex flex-col items-start sm:items-end">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#673DE6]" /> Offer Ends In:
                  </span>
                  <div className="flex items-center gap-1 font-mono text-xs font-bold text-slate-800 dark:text-white">
                    <div className="flex flex-col items-center">
                      <span className="bg-slate-100 dark:bg-white/10 px-2 py-1 rounded border border-slate-200 dark:border-white/10 font-black">
                        {pad(timeLeft.days)}
                      </span>
                      <span className="text-[9px] text-slate-400">Days</span>
                    </div>
                    <span className="pb-3">:</span>
                    <div className="flex flex-col items-center">
                      <span className="bg-slate-100 dark:bg-white/10 px-2 py-1 rounded border border-slate-200 dark:border-white/10 font-black">
                        {pad(timeLeft.hours)}
                      </span>
                      <span className="text-[9px] text-slate-400">Hours</span>
                    </div>
                    <span className="pb-3">:</span>
                    <div className="flex flex-col items-center">
                      <span className="bg-slate-100 dark:bg-white/10 px-2 py-1 rounded border border-slate-200 dark:border-white/10 font-black">
                        {pad(timeLeft.minutes)}
                      </span>
                      <span className="text-[9px] text-slate-400">Mins</span>
                    </div>
                    <span className="pb-3">:</span>
                    <div className="flex flex-col items-center">
                      <span className="bg-[#673DE6] text-white px-2 py-1 rounded font-black">
                        {pad(timeLeft.seconds)}
                      </span>
                      <span className="text-[9px] text-slate-400">Secs</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-5 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="#pricing"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#673DE6] hover:bg-[#5025D1] text-white text-center font-black text-sm sm:text-base shadow-lg shadow-[#673DE6]/30 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <span>Claim Deal Now</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
                <Link
                  href="/features"
                  className="w-full sm:w-auto py-3.5 px-5 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-800 dark:text-white text-center font-bold text-sm transition-all"
                >
                  Explore Tech
                </Link>
              </div>

              {/* Guarantee Footnote */}
              <div className="mt-3.5 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#00B090]" />
                <span>30-Day Money-Back Guarantee • Zero Risk • Cancel Anytime</span>
              </div>
            </motion.div>

            {/* Trustpilot & Rating Strips (Hostinger Signature Trust Bar) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-slate-400"
            >
              {/* Trustpilot */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5 text-[#00B090]">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-[#00B090] rounded-[2px] flex items-center justify-center text-white text-[10px]">
                      ★
                    </div>
                  ))}
                </div>
                <div className="font-bold text-slate-800 dark:text-slate-200">
                  Trustpilot <span className="text-[#00B090]">4.8/5</span>
                </div>
              </div>

              <div className="h-4 w-px bg-slate-300 dark:bg-white/20 hidden sm:block" />

              {/* Google Reviews */}
              <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                <span className="text-amber-500">★★★★★</span>
                <span>Google 4.8/5</span>
              </div>

              <div className="h-4 w-px bg-slate-300 dark:bg-white/20 hidden sm:block" />

              {/* HostAdvice */}
              <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                <span className="text-[#673DE6]">●</span>
                <span>HostAdvice 4.7/5</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Interactive High-Speed Visual & MicroVM Dashboard */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full relative"
            >
              {/* Floating Speed Score Widget */}
              <div className="absolute -top-4 -left-4 z-20 rounded-2xl bg-white dark:bg-[#1C1640] border border-slate-200 dark:border-white/10 p-3.5 shadow-xl flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-[#00B090] flex items-center justify-center font-black text-sm">
                  99
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">PageSpeed Score</div>
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <Check className="w-3 h-3 stroke-[3]" /> Sub-20ms TTFB
                  </div>
                </div>
              </div>

              {/* Main Preview Card */}
              <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#161033] shadow-2xl p-6 overflow-hidden">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
                      app.codedeply.app
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00B090]/15 text-[#00B090] text-[11px] font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#00B090] animate-pulse" />
                    Live • Active
                  </span>
                </div>

                {/* MicroVM Stats Preview */}
                <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/70 dark:border-white/5">
                    <div className="text-slate-400 text-[11px] mb-1">Compute Environment</div>
                    <div className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-[#673DE6]" />
                      <span>Dedicated MicroVM</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/70 dark:border-white/5">
                    <div className="text-slate-400 text-[11px] mb-1">Serverless Database</div>
                    <div className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-[#00B090]" />
                      <span>Postgres 16 + Branching</span>
                    </div>
                  </div>
                </div>

                {/* Global Edge Node Map indicator */}
                <div className="mt-4 p-4 rounded-xl bg-[#673DE6]/5 dark:bg-[#673DE6]/10 border border-[#673DE6]/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe2 className="w-5 h-5 text-[#673DE6]" />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        Global Anycast Network
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        32 edge locations active (Mumbai, Singapore, Frankfurt, US)
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-[#673DE6]">
                    18ms
                  </span>
                </div>

                {/* CLI Deployment Bar */}
                <div className="mt-4 p-3 rounded-xl bg-slate-900 text-white font-mono text-xs flex items-center justify-between">
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-[#673DE6] font-bold">$</span>
                    <span className="truncate">npm i -g codeply &amp;&amp; codeply deploy</span>
                  </div>
                  <button
                    onClick={handleCopyCli}
                    className="text-slate-400 hover:text-white ml-2 shrink-0 p-1"
                    title="Copy command"
                  >
                    {copiedCli ? (
                      <span className="text-[#00B090] text-[11px] font-bold font-sans flex items-center gap-1">
                        <Check className="w-3 h-3" /> Copied
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Floating SLA Badge */}
              <div className="absolute -bottom-4 -right-2 z-20 rounded-2xl bg-white dark:bg-[#1C1640] border border-slate-200 dark:border-white/10 p-3 shadow-xl flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#00B090]" />
                <div className="text-xs">
                  <div className="font-extrabold text-slate-900 dark:text-white">99.99% Guaranteed SLA</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Automated multi-region failover</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
