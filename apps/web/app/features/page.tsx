"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  Server,
  Terminal,
  Cpu,
  ShieldCheck,
  Globe2,
  GitBranch,
  RefreshCw,
  Layers,
  ArrowRight,
  Database,
  Lock,
} from "lucide-react";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import { CardContainer, CardBody, CardItem } from "@/components/ui/card-3d-effect";

const baasFeatures = [
  {
    icon: GitBranch,
    title: "Git-Native Autonomous CI/CD",
    tag: "Core Engine",
    description:
      "Connect your GitHub repositories in seconds. Every git commit, branch push, or pull request triggers isolated containerized pipeline builds.",
    color: "from-violet-500 to-indigo-600",
  },
  {
    icon: Terminal,
    title: "Real-Time WebSocket Log Streams",
    tag: "Observability",
    description:
      "Watch build logs stream live directly to your browser over low-latency WebSockets. Instantly catch compiler warnings, dependency errors, and runtime failures.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Cpu,
    title: "Turborepo & Micro-Service Worker Nodes",
    tag: "Worker Cluster",
    description:
      "Dedicated background worker processes managed through high-throughput Redis queues. Automatic resource scaling, intelligent caching, and multi-tenant isolation.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Globe2,
    title: "Global Multi-Region Edge Proxy",
    tag: "Traffic Routing",
    description:
      "Dynamically route incoming traffic across geographically distributed clusters. Automatic TLS termination, instant SSL cert provisioning, and zero downtime updates.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Database,
    title: "Supabase & Postgres State Persistence",
    tag: "State Management",
    description:
      "Built-in metadata registry, audit log persistence, and live table change broadcasts powered by Supabase Realtime synchronization.",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Trust Sandboxed Execution",
    tag: "Security",
    description:
      "Every build executes within unprivileged, ephemeral container sandboxes with network namespace isolation and automated vulnerability screening.",
    color: "from-blue-500 to-indigo-600",
  },
];

export default function FeaturesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#030712] text-white">
      <SiteHeader />

      <div className="flex-1">
        {/* Header Hero */}
        <section className="relative pt-36 pb-20 px-4 sm:px-6 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-violet-600/20 via-cyan-500/15 to-transparent blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs font-semibold text-cyan-300 mb-6"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Platform Capabilities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black tracking-tight"
            >
              Engineered for Developers.{" "}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                Architected for Scale.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-[#94a3b8] max-w-2xl mx-auto leading-relaxed"
            >
              CodeDeploy replaces cumbersome DevOps pipelines with an autonomous cloud platform. Explore our feature stack designed for modern web applications.
            </motion.p>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="relative px-4 sm:px-6 pb-28 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {baasFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="rounded-3xl border border-white/[0.08] bg-[#070b14]/70 p-7 backdrop-blur-xl hover:border-violet-500/40 hover:bg-[#070b14]/90 transition-all duration-300 flex flex-col justify-between group shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feat.color} p-[1px] shadow-lg`}
                      >
                        <div className="w-full h-full bg-[#030712] rounded-[15px] flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-[#94a3b8] bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-full">
                        {feat.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-[#94a3b8] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs font-semibold text-violet-400 group-hover:text-cyan-400 transition-colors">
                    <span>Learn how it works</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Interactive 3D Showcase Card */}
          <div className="mt-20">
            <CardContainer className="w-full" containerClassName="py-0">
              <CardBody className="w-full h-auto rounded-3xl border border-violet-500/30 bg-gradient-to-b from-[#0e1322] to-[#05070f] p-8 sm:p-12 backdrop-blur-2xl shadow-[0_20px_80px_rgba(99,102,241,0.15)] text-center relative overflow-hidden">
                <CardItem translateZ={40} className="max-w-2xl mx-auto">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    Ready to modernize your infrastructure?
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4">
                    Deploy your first production build in under 60 seconds
                  </h2>
                  <p className="text-sm sm:text-base text-[#94a3b8] mb-8">
                    No credit card required. Free tier includes multi-tenant builds, real-time logging, and global edge routing.
                  </p>
                </CardItem>

                <CardItem translateZ={80} className="flex justify-center">
                  <Link
                    href="/dashboard"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:scale-105 transition-all"
                  >
                    <span>Launch Free Dashboard</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
