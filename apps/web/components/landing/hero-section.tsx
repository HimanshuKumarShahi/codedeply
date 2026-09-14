"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  ArrowRight,
  Terminal,
  Sparkles,
  Check,
  Copy,
  ShieldCheck,
  Activity,
  Globe2,
} from "lucide-react";
import LoginButton from "@/components/auth/login-button";
import LiveStudioDemo from "./live-studio-demo";

export default function HeroSection() {
  const [copiedCli, setCopiedCli] = useState(false);

  const handleCopyCli = () => {
    navigator.clipboard.writeText("npm i -g codeply && codeply deploy");
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  return (
    <section className="relative pt-32 sm:pt-36 pb-20 px-4 sm:px-6 flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-500/20 via-violet-500/15 to-cyan-500/15 dark:from-indigo-600/25 dark:via-violet-600/20 dark:to-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-2/3 left-1/4 w-[350px] h-[250px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-30 dark:opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Top Product Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/features"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 dark:border-indigo-500/40 bg-indigo-500/10 dark:bg-indigo-500/15 backdrop-blur-md mb-8 group hover:border-indigo-500/60 transition-all duration-300 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-200 tracking-wide">
              CodeDeploy 2.0 • Autonomous Serverless BaaS & Edge Deploys
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] max-w-4xl"
        >
          Deploy at the{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 dark:from-indigo-400 dark:via-violet-300 dark:to-cyan-400 bg-clip-text text-transparent">
            Speed of Light.
          </span>
          <br />
          <span className="text-slate-800 dark:text-slate-100">Build on Autonomous BaaS.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          Push your git repository. CodeDeploy automatically spins up isolated microVM containers, provisions serverless Postgres databases, coordinates Redis job queues, and routes global traffic with sub-20ms latency.
        </motion.p>

        {/* Action Buttons & CLI Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
        >
          <LoginButton />

          <Link
            href="/features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/[0.05] hover:bg-slate-100 dark:hover:bg-white/[0.1] text-sm font-semibold text-slate-800 dark:text-white backdrop-blur-md transition-all duration-200 group shadow-sm"
          >
            <span>Explore Architecture</span>
            <ArrowRight className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </Link>
        </motion.div>

        {/* One-click CLI Copy Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-5 inline-flex items-center gap-3 px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-slate-900/60 backdrop-blur-md text-xs font-mono text-slate-700 dark:text-slate-300 shadow-sm"
        >
          <span className="text-indigo-500 font-bold">$</span>
          <span>npm i -g codeply &amp;&amp; codeply deploy</span>
          <button
            onClick={handleCopyCli}
            className="ml-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            title="Copy command to clipboard"
          >
            {copiedCli ? (
              <span className="text-emerald-500 font-semibold flex items-center gap-1 font-sans">
                <Check className="w-3.5 h-3.5" /> Copied
              </span>
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </motion.div>

        {/* Live Studio Demo Component */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="w-full"
        >
          <LiveStudioDemo />
        </motion.div>

        {/* Key Platform Highlights Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>99.99% Guaranteed SLA</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Zero Config CI/CD</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Activity className="w-4 h-4 text-indigo-500" />
            <span>Live WebSocket Telemetry</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Globe2 className="w-4 h-4 text-cyan-500" />
            <span>32 Global Edge Locations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
