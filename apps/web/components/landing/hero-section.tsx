"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  Rocket,
  ArrowRight,
  Terminal,
  Activity,
  CheckCircle2,
  Server,
  Sparkles,
  GitBranch,
} from "lucide-react";
import LoginButton from "@/components/auth/login-button";
import { CardContainer, CardBody, CardItem } from "@/components/ui/card-3d-effect";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-violet-600/25 via-indigo-500/20 to-cyan-400/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-2/3 left-1/4 w-[400px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Futuristic Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-md mb-8 group hover:border-violet-500/60 transition-all duration-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          <span className="text-xs font-semibold text-violet-200 tracking-wide">
            Autonomous Cloud BaaS • Zero Config CI/CD
          </span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.08] max-w-4xl"
        >
          Deploy at the{" "}
          <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
            Speed of Light
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-[#94a3b8] max-w-2xl mx-auto leading-relaxed"
        >
          Push your repository. CodeDeploy provisions isolated containers, streams real-time build telemetry, and serves your applications on global edge infrastructure.
        </motion.p>

        {/* CTA Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <LoginButton />

          <Link
            href="/features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/[0.2] text-sm font-semibold text-[#f1f5f9] backdrop-blur-md transition-all duration-300 group"
          >
            <span>Platform Overview</span>
            <ArrowRight className="w-4 h-4 text-[#94a3b8] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </Link>
        </motion.div>

        {/* 3D Application Preview Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 w-full max-w-4xl"
        >
          <CardContainer className="w-full" containerClassName="py-4">
            <CardBody className="relative w-full h-auto rounded-3xl border border-white/[0.12] bg-[#070b14]/90 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.8),0_0_50px_rgba(99,102,241,0.15)] group/card">
              {/* Card top accent line */}
              <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

              {/* 3D Depth Layer 1: App Header */}
              <CardItem
                translateZ={50}
                className="flex items-center justify-between pb-6 border-b border-white/[0.07]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/70 border border-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/70 border border-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/70 border border-emerald-500" />
                  </div>
                  <div className="h-4 w-px bg-white/[0.1] mx-1" />
                  <span className="text-xs font-mono text-[#94a3b8] flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-cyan-400" />
                    us-east-cluster-01.codedeply.internal
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Systems Healthy
                  </span>
                </div>
              </CardItem>

              {/* 3D Depth Layer 2: Live Metrics Grid */}
              <CardItem
                translateZ={70}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6"
              >
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-left">
                  <div className="flex items-center justify-between text-[#64748b] text-xs">
                    <span>Deploy Latency</span>
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <p className="text-xl font-bold text-white mt-1">18.4s</p>
                  <span className="text-[11px] text-emerald-400 font-medium">94% faster than standard</span>
                </div>

                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-left">
                  <div className="flex items-center justify-between text-[#64748b] text-xs">
                    <span>Edge CDN Uptime</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <p className="text-xl font-bold text-white mt-1">99.99%</p>
                  <span className="text-[11px] text-violet-400 font-medium">Zero packet drop</span>
                </div>

                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-left">
                  <div className="flex items-center justify-between text-[#64748b] text-xs">
                    <span>Active Clusters</span>
                    <Rocket className="w-3.5 h-3.5 text-violet-400" />
                  </div>
                  <p className="text-xl font-bold text-white mt-1">14,290</p>
                  <span className="text-[11px] text-cyan-400 font-medium">Across 32 edge regions</span>
                </div>
              </CardItem>

              {/* 3D Depth Layer 3: Simulated Live Build Stream */}
              <CardItem
                translateZ={90}
                className="rounded-2xl border border-white/[0.08] bg-[#03060d] p-4 text-left font-mono text-xs overflow-hidden shadow-inner"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-[#64748b]">
                  <span className="flex items-center gap-1.5 text-[#cbd5e1]">
                    <Terminal className="w-3.5 h-3.5 text-violet-400" />
                    <span>deploy-worker-runner.sh</span>
                  </span>
                  <span className="text-[11px] text-[#64748b] flex items-center gap-1">
                    <GitBranch className="w-3 h-3 text-cyan-400" /> main • 4f1a92e
                  </span>
                </div>

                <div className="space-y-1.5 pt-3 text-[#94a3b8]">
                  <p className="flex items-center gap-2">
                    <span className="text-violet-400">⚡</span>
                    <span className="text-[#f1f5f9]">[00:01] Initiating build snapshot via GitHub Webhook...</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-cyan-400">📦</span>
                    <span>[00:06] Resolving Turborepo workspace packages (4 total cached)</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-amber-400">⚙️</span>
                    <span>[00:12] Compiling Next.js Server & Client bundles with Tailwind v4</span>
                  </p>
                  <p className="flex items-center gap-2 text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>[00:18] Deployment Ready → https://codedeply.app/production/live</span>
                  </p>
                </div>
              </CardItem>

              {/* 3D Depth Layer 4: Interactive Floating Action Pill */}
              <CardItem
                translateZ={110}
                className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.06]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-500 to-cyan-400 p-[1px]">
                    <div className="w-full h-full bg-[#070b14] rounded-full flex items-center justify-center">
                      <Zap className="w-4 h-4 text-cyan-400" />
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-white">Automated Healthchecks</p>
                    <p className="text-[11px] text-[#64748b]">Realtime container failover in 250ms</p>
                  </div>
                </div>

                <Link
                  href="/dashboard"
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all flex items-center gap-1.5"
                >
                  <span>Open Live Cloud Console</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>
      </div>
    </section>
  );
}
