"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Gauge, Server, Globe, Check, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";

export default function SpeedComparisonSection() {
  return (
    <section id="speed" className="relative py-20 lg:py-28 px-4 sm:px-6 bg-[#F8F7FC] dark:bg-[#120E2C] border-y border-slate-200/80 dark:border-white/10 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#673DE6]/20 bg-[#673DE6]/10 text-xs font-bold text-[#673DE6] dark:text-[#b89eff] mb-4">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>High Performance Cloud Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Maximize Speed with Up to{" "}
            <span className="text-[#673DE6]">5x Faster Performance</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Slow load times kill conversions. CodeDeploy is engineered from the ground up with NVMe storage, isolated microVM compute, HTTP/3, and 32 global edge points of presence.
          </p>
        </div>

        {/* Speed Comparison Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {/* Card 1: TTFB (Time to First Byte) */}
          <div className="rounded-3xl p-7 bg-white dark:bg-[#1A1438] border border-slate-200 dark:border-white/10 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Response Latency</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#00B090]/15 text-[#00B090] text-xs font-black">
                91% Faster
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Time to First Byte (TTFB)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Instant DNS resolution &amp; edge microVM routing minimizes wait time for visitors.
            </p>

            {/* Comparison Bars */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-[#673DE6] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#673DE6]" /> CodeDeploy Edge
                  </span>
                  <span className="text-[#673DE6] font-black">18 ms</span>
                </div>
                <div className="h-3 rounded-full bg-slate-100 dark:bg-white/5 overflow-hidden">
                  <div className="h-full bg-[#673DE6] rounded-full w-[15%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
                  <span>Standard Cloud Hosting</span>
                  <span>210 ms</span>
                </div>
                <div className="h-3 rounded-full bg-slate-100 dark:bg-white/5 overflow-hidden">
                  <div className="h-full bg-slate-400 dark:bg-slate-600 rounded-full w-[85%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Git Deploy Speed */}
          <div className="rounded-3xl p-7 bg-white dark:bg-[#1A1438] border-2 border-[#673DE6] shadow-xl shadow-[#673DE6]/10 relative">
            <div className="absolute -top-3.5 right-6">
              <span className="px-3 py-0.5 rounded-full bg-[#EB0052] text-white text-[11px] font-black uppercase">
                34x Faster Deploys
              </span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">CI/CD Pipeline</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#00B090]/15 text-[#00B090] text-xs font-black">
                14 Seconds
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Instant Git Deployment
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Turborepo distributed caching restores node_modules in 100ms.
            </p>

            {/* Comparison Bars */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-[#673DE6] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#673DE6]" /> CodeDeploy Turbo
                  </span>
                  <span className="text-[#673DE6] font-black">14 s</span>
                </div>
                <div className="h-3 rounded-full bg-slate-100 dark:bg-white/5 overflow-hidden">
                  <div className="h-full bg-[#673DE6] rounded-full w-[12%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
                  <span>Traditional Jenkins / Docker</span>
                  <span>480 s (8 min)</span>
                </div>
                <div className="h-3 rounded-full bg-slate-100 dark:bg-white/5 overflow-hidden">
                  <div className="h-full bg-slate-400 dark:bg-slate-600 rounded-full w-[95%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Google PageSpeed Score */}
          <div className="rounded-3xl p-7 bg-white dark:bg-[#1A1438] border border-slate-200 dark:border-white/10 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">SEO &amp; Vitals</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#00B090]/15 text-[#00B090] text-xs font-black">
                99 / 100
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Google Core Web Vitals
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Pass Core Web Vitals automatically with Brotli compression and HTTP/3.
            </p>

            {/* Comparison Bars */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-[#00B090] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00B090]" /> CodeDeploy Stack
                  </span>
                  <span className="text-[#00B090] font-black">99 / 100</span>
                </div>
                <div className="h-3 rounded-full bg-slate-100 dark:bg-white/5 overflow-hidden">
                  <div className="h-full bg-[#00B090] rounded-full w-[99%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
                  <span>Legacy Shared Web Hosts</span>
                  <span>58 / 100</span>
                </div>
                <div className="h-3 rounded-full bg-slate-100 dark:bg-white/5 overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full w-[58%]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Infrastructure Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white dark:bg-[#161033] border border-slate-200/80 dark:border-white/5">
            <div className="w-10 h-10 rounded-xl bg-[#673DE6]/10 text-[#673DE6] flex items-center justify-center shrink-0">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">NVMe SSD Storage</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Up to 7,000 MB/s read/write speed for instant disk I/O.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white dark:bg-[#161033] border border-slate-200/80 dark:border-white/5">
            <div className="w-10 h-10 rounded-xl bg-[#00B090]/10 text-[#00B090] flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">32 Edge Locations</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Low-latency POPs across Asia, Europe, and Americas.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white dark:bg-[#161033] border border-slate-200/80 dark:border-white/5">
            <div className="w-10 h-10 rounded-xl bg-[#EB0052]/10 text-[#EB0052] flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">HTTP/3 &amp; QUIC</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Modern UDP-based protocol with zero handshake delay.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white dark:bg-[#161033] border border-slate-200/80 dark:border-white/5">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Automated WAF &amp; DDoS</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Edge filtering blocks malicious layer 7 attacks instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
