"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Terminal,
  Globe,
  Database,
  Cpu,
  Lock,
  GitBranch,
  ShieldCheck,
  Layers,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface FeatureCard {
  icon: React.ElementType;
  badge: string;
  category: "SaaS" | "BaaS" | "Edge";
  title: string;
  description: string;
  gradient: string;
  span?: string;
  previewSnippet?: string;
}

const features: FeatureCard[] = [
  {
    icon: GitBranch,
    badge: "CI/CD Pipeline",
    category: "SaaS",
    title: "Git-Native Instant Deploys",
    description:
      "Push code to GitHub or GitLab. CodeDeploy automatically detects your framework, restores cached dependencies, and spins up isolated microVM containers in seconds.",
    gradient: "from-indigo-500 to-violet-600",
    span: "lg:col-span-2",
    previewSnippet: "git push origin main → https://app.codedeply.app (14.2s)",
  },
  {
    icon: Database,
    badge: "State & Storage",
    category: "BaaS",
    title: "Serverless Postgres & DB Branching",
    description:
      "Provision dedicated PostgreSQL databases with built-in PgBouncer connection pooling. Create zero-copy database branches for staging and preview pull requests.",
    gradient: "from-cyan-500 to-blue-600",
    span: "lg:col-span-1",
  },
  {
    icon: Cpu,
    badge: "Worker Cluster",
    category: "BaaS",
    title: "Distributed Redis Job Queues",
    description:
      "Execute asynchronous compute jobs without managing servers. Powered by Redis and BullMQ with concurrency controls, automatic retry backoffs, and dead-letter queues.",
    gradient: "from-violet-500 to-purple-600",
    span: "lg:col-span-1",
  },
  {
    icon: Terminal,
    badge: "Real-time Telemetry",
    category: "SaaS",
    title: "Live WebSocket Log Streaming",
    description:
      "Tail container build logs and server runtime console outputs with sub-millisecond latency. Search, filter by severity, and export metrics to Datadog or Prometheus.",
    gradient: "from-emerald-500 to-teal-600",
    span: "lg:col-span-2",
    previewSnippet: "ws://stream.codedeply.com/logs/deploy-98a12 • live tailing",
  },
  {
    icon: Globe,
    badge: "Traffic Routing",
    category: "Edge",
    title: "32-Region Anycast Edge Proxy",
    description:
      "Route visitors to the nearest compute cluster. Features automatic Let's Encrypt SSL certificates, HTTP/3 protocol negotiation, and custom domain CNAME routing.",
    gradient: "from-amber-500 to-orange-600",
    span: "lg:col-span-1",
  },
  {
    icon: Lock,
    badge: "Security & Secrets",
    category: "BaaS",
    title: "Zero-Trust Environment Vault",
    description:
      "Encrypt application secrets with hardware HSM keys. Synchronize environment variables safely across local dev, staging branches, and production with one click.",
    gradient: "from-rose-500 to-pink-600",
    span: "lg:col-span-2",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-28 sm:py-36 px-4 sm:px-6 overflow-hidden bg-background">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-xs text-indigo-600 dark:text-indigo-300 font-semibold mb-5 shadow-sm">
            <Layers className="w-3.5 h-3.5" />
            <span>SaaS + BaaS Platform Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 dark:from-indigo-400 dark:via-violet-300 dark:to-cyan-400 bg-clip-text text-transparent">
              build, deploy &amp; scale
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Stop stitching together five different vendors. CodeDeploy merges instant Git deployments with full-stack Backend-as-a-Service capabilities in a single unified control plane.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group relative rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 hover:border-indigo-400/50 dark:hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between ${
                  feature.span || ""
                }`}
              >
                <div>
                  {/* Card Header: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-md text-white`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300">
                        {feature.category}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        {feature.badge}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Optional Terminal Preview Snippet */}
                  {feature.previewSnippet && (
                    <div className="mt-4 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 font-mono text-[11px] text-slate-700 dark:text-slate-300 flex items-center gap-2">
                      <span className="text-indigo-500">▶</span>
                      <span className="truncate">{feature.previewSnippet}</span>
                    </div>
                  )}
                </div>

                {/* Card footer / learn more */}
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  <span>Explore documentation</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Feature CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-xs sm:text-sm font-semibold text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm transition-all"
          >
            <span>View all 24+ platform features</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
