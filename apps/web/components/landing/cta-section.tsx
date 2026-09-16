"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, GitBranch, Sparkles, CheckCircle2, Shield } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CtaSection() {
  const [repoUrl, setRepoUrl] = useState("");
  const router = useRouter();

  const handleQuickDeploy = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <section className="relative py-28 sm:py-36 px-4 sm:px-6 overflow-hidden bg-background">
      {/* Background radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-cyan-500/15 dark:from-indigo-600/20 dark:via-violet-600/20 dark:to-cyan-500/15 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Container Card */}
        <div className="relative rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl p-8 sm:p-14 shadow-2xl shadow-indigo-500/5 dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">
          {/* Top glowing line */}
          <div className="absolute top-0 inset-x-12 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-70" />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-xs text-indigo-600 dark:text-indigo-300 font-semibold mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Cloud Setup</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-5 leading-tight">
              Ready to ship with{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 dark:from-indigo-400 dark:via-violet-300 dark:to-cyan-400 bg-clip-text text-transparent">
                zero friction?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
              Connect your GitHub repository, configure your BaaS resources, and deploy your production stack in minutes.
            </p>

            {/* Quick Deploy Input Box */}
            <form onSubmit={handleQuickDeploy} className="max-w-xl mx-auto mb-8">
              <div className="relative flex flex-col sm:flex-row items-center gap-2 p-1.5 rounded-2xl border border-slate-300 dark:border-white/15 bg-white dark:bg-slate-950/90 shadow-sm focus-within:border-indigo-500 transition-all">
                <div className="flex items-center gap-2.5 px-3 w-full sm:w-auto flex-1 text-slate-400">
                  <GitBranch className="w-4 h-4 text-indigo-500 shrink-0" />
                  <input
                    type="text"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    placeholder="https://github.com/organization/repo"
                    className="w-full bg-transparent text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none font-mono py-1.5"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#673DE6] hover:bg-[#5025D1] text-white font-sans text-xs sm:text-sm font-bold shadow-md shadow-[#673DE6]/25 transition-all shrink-0"
                >
                  <span>Deploy in 1-Click</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {/* Perks */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00B090]" />
                <span>30-Day Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00B090]" />
                <span>No credit card required to start</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#673DE6]" />
                <span>Free SSL &amp; custom domains</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
