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
  Layers,
  ArrowRight,
  Database,
  Lock,
} from "lucide-react";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PromoBanner from "@/components/layout/promo-banner";

const baasFeatures = [
  {
    icon: GitBranch,
    title: "Git-Native Autonomous CI/CD",
    tag: "Core Engine",
    description:
      "Connect your GitHub repositories in seconds. Every git commit, branch push, or pull request triggers isolated containerized pipeline builds.",
    color: "from-indigo-500 to-violet-600",
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
    title: "Turborepo & MicroVM Worker Nodes",
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
      "Dynamically route incoming traffic across 32 geographically distributed edge clusters. Automatic TLS termination, instant SSL cert provisioning, and zero downtime updates.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Database,
    title: "Serverless Postgres & DB Branching",
    tag: "State Management",
    description:
      "Dedicated PostgreSQL databases with connection pooling, automated zero-copy branching for preview pull requests, and live table change broadcasts.",
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
    <main className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-200">
      <PromoBanner />
      <SiteHeader />

      <div className="flex-1">
        {/* Header Hero */}
        <section className="relative pt-36 pb-20 px-4 sm:px-6 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-500/15 via-cyan-500/10 to-transparent blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-xs font-semibold text-indigo-600 dark:text-indigo-300 mb-6 shadow-sm"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Full Platform Capabilities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white"
            >
              Engineered for Developers.{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 dark:from-indigo-400 dark:via-violet-300 dark:to-cyan-400 bg-clip-text text-transparent">
                Architected for Scale.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
              CodeDeploy replaces cumbersome DIY DevOps pipelines with a unified SaaS and BaaS cloud engine. Explore our complete architectural feature stack.
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 p-7 backdrop-blur-xl hover:border-indigo-400/50 dark:hover:border-indigo-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feat.color} flex items-center justify-center text-white shadow-md`}
                      >
                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2.5 py-1 rounded-full">
                        {feat.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/[0.06] flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    <span>Learn how it works</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA Card */}
          <div className="mt-16 rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 p-8 sm:p-12 backdrop-blur-2xl shadow-xl text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20">
                Ready to modernize your infrastructure?
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-3">
                Deploy your first production build in under 60 seconds
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8">
                No credit card required. Free tier includes multi-tenant builds, serverless Postgres, and global edge routing.
              </p>

              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#673DE6] hover:bg-[#5025D1] text-white font-bold text-sm shadow-md shadow-[#673DE6]/25 transition-all"
              >
                <span>Launch Free Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
