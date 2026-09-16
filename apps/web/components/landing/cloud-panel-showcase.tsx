"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  Database,
  Cpu,
  Globe,
  Terminal,
  Check,
  ExternalLink,
  ShieldCheck,
  RefreshCw,
  GitBranch,
  Play,
  Copy,
  Layers,
} from "lucide-react";

type PanelTab = "deployments" | "database" | "queues" | "domains";

export default function CloudPanelShowcase() {
  const [activeTab, setActiveTab] = useState<PanelTab>("deployments");
  const [copied, setCopied] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <section id="panel-showcase" className="relative py-20 lg:py-28 px-4 sm:px-6 bg-white dark:bg-[#0D091F] transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#673DE6]/20 bg-[#673DE6]/10 text-xs font-bold text-[#673DE6] dark:text-[#b89eff] mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Intuitive Cloud Control Panel</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Simple, Powerful &amp; Easy to Use
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Say goodbye to overly complex AWS consoles or outdated cPanel. CodeDeploy gives you a clean, unified dashboard to manage deployments, serverless databases, queues, and domains.
          </p>
        </div>

        {/* Panel Tabs (Hostinger hPanel style) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-8">
          <button
            onClick={() => setActiveTab("deployments")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "deployments"
                ? "bg-[#673DE6] text-white shadow-md shadow-[#673DE6]/25"
                : "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
            }`}
          >
            <GitBranch className="w-4 h-4" />
            <span>Git Deployments</span>
          </button>

          <button
            onClick={() => setActiveTab("database")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "database"
                ? "bg-[#673DE6] text-white shadow-md shadow-[#673DE6]/25"
                : "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
            }`}
          >
            <Database className="w-4 h-4" />
            <span>Serverless Postgres</span>
          </button>

          <button
            onClick={() => setActiveTab("queues")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "queues"
                ? "bg-[#673DE6] text-white shadow-md shadow-[#673DE6]/25"
                : "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Redis Job Queues</span>
          </button>

          <button
            onClick={() => setActiveTab("domains")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "domains"
                ? "bg-[#673DE6] text-white shadow-md shadow-[#673DE6]/25"
                : "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Domains &amp; SSL</span>
          </button>
        </div>

        {/* Panel Container Mockup */}
        <div className="rounded-3xl border-2 border-slate-200 dark:border-white/10 bg-white dark:bg-[#150F33] shadow-2xl p-6 sm:p-8 max-w-5xl mx-auto overflow-hidden">
          {/* Top Panel Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 ml-2">
                CodeDeploy Panel v2.4 • Production Cluster (Mumbai BOM-01)
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleRefresh}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-500"
                title="Refresh Status"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin text-[#673DE6]" : ""}`} />
              </button>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00B090]/15 text-[#00B090] text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-[#00B090] animate-pulse" />
                All Systems Operational
              </span>
            </div>
          </div>

          {/* Interactive Tab Contents */}
          <div className="pt-6">
            {activeTab === "deployments" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <div className="text-xs text-slate-500 dark:text-slate-400">Current Production Build</div>
                    <div className="text-lg font-black text-slate-900 dark:text-white mt-1 flex items-center gap-2">
                      <span>v1.8.4</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#00B090]/15 text-[#00B090]">
                        Active
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 font-mono">commit #8f31b2 • main</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <div className="text-xs text-slate-500 dark:text-slate-400">Build Latency</div>
                    <div className="text-lg font-black text-[#673DE6] mt-1">14.2 seconds</div>
                    <div className="text-[11px] text-[#00B090] mt-1 font-bold">✓ Zero-downtime hot swap</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <div className="text-xs text-slate-500 dark:text-slate-400">Production URL</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mt-1 truncate">
                      https://app.codedeply.app
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#00B090]" /> Valid SSL (Let&apos;s Encrypt)
                    </div>
                  </div>
                </div>

                {/* Deployment history rows */}
                <div className="rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden">
                  <div className="px-4 py-2.5 bg-slate-100 dark:bg-white/5 text-xs font-bold text-slate-600 dark:text-slate-300 flex justify-between">
                    <span>Recent Git Deploys</span>
                    <span>Status</span>
                  </div>
                  <div className="divide-y divide-slate-100 dark:divide-white/5 text-xs">
                    <div className="px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <GitBranch className="w-4 h-4 text-[#673DE6]" />
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white">feat: optimize Postgres queries</span>
                          <span className="text-slate-400 ml-2 font-mono text-[11px]">main (12 mins ago)</span>
                        </div>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#00B090]/15 text-[#00B090] font-bold text-[11px]">
                        Ready (12.4s)
                      </span>
                    </div>

                    <div className="px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <GitBranch className="w-4 h-4 text-slate-400" />
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white">chore: update Tailwind CSS v4</span>
                          <span className="text-slate-400 ml-2 font-mono text-[11px]">pr-42 (2 hours ago)</span>
                        </div>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-500 font-bold text-[11px]">
                        Preview Live
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "database" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <Database className="w-5 h-5 text-[#00B090]" />
                      <h4 className="text-base font-black text-slate-900 dark:text-white">
                        production-db-postgres-16
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Serverless Postgres • Connection Pooling (PgBouncer) • 25GB NVMe Storage
                    </p>
                  </div>
                  <button
                    onClick={() => handleCopy("postgresql://user:pass@db.codedeply.app:5432/main")}
                    className="px-3.5 py-2 rounded-xl bg-white dark:bg-[#1F1642] border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 flex items-center gap-1.5 shadow-sm"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#00B090]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Connection URI Copied!" : "Copy URI"}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10">
                    <div className="text-slate-400">Database Size</div>
                    <div className="text-lg font-black text-slate-900 dark:text-white mt-1">2.4 GB / 25 GB</div>
                    <div className="h-1.5 rounded-full bg-slate-100 dark:bg-white/10 mt-2 overflow-hidden">
                      <div className="h-full bg-[#673DE6] rounded-full w-[10%]" />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10">
                    <div className="text-slate-400">Active Connections</div>
                    <div className="text-lg font-black text-slate-900 dark:text-white mt-1">14 / 200 Pooled</div>
                    <div className="text-[#00B090] font-semibold mt-1">✓ PgBouncer active</div>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10">
                    <div className="text-slate-400">Automated Backup</div>
                    <div className="text-lg font-black text-slate-900 dark:text-white mt-1">Every 6 Hours</div>
                    <div className="text-[#00B090] font-semibold mt-1">✓ Last snapshot 42m ago</div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "queues" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        Distributed BullMQ &amp; Redis Cluster
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Managing asynchronous background jobs, emails, and video encoders
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#00B090]/15 text-[#00B090] text-xs font-bold">
                    Running (4 Workers)
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10">
                    <div className="text-xs text-slate-400">Jobs Processed</div>
                    <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">42,891</div>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10">
                    <div className="text-xs text-slate-400">Waiting</div>
                    <div className="text-2xl font-black text-[#673DE6] mt-1">3</div>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10">
                    <div className="text-xs text-slate-400">Success Rate</div>
                    <div className="text-2xl font-black text-[#00B090] mt-1">99.98%</div>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10">
                    <div className="text-xs text-slate-400">Avg Job Time</div>
                    <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">48ms</div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "domains" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Globe className="w-6 h-6 text-[#673DE6]" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        custom-domain.com
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        CNAME points to edge.codedeply.app • HTTP/3 enabled
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#00B090]/15 text-[#00B090] text-xs font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> SSL Certificate Active
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/5 font-mono text-xs text-slate-700 dark:text-slate-300">
                  <div className="text-slate-400 mb-1 text-[11px]">DNS Configuration:</div>
                  <div>CNAME @ → cname.codedeply.app (TTL 300)</div>
                  <div>TXT @ → codedeply-verification=8921fa0c12</div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
