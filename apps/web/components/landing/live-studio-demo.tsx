"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Database,
  Cpu,
  Lock,
  Play,
  RotateCw,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check,
  Eye,
  EyeOff,
  Server,
  Activity,
  Layers,
  Sparkles,
} from "lucide-react";

type TabType = "deploy" | "database" | "queue" | "secrets";

export function LiveStudioDemo() {
  const [activeTab, setActiveTab] = useState<TabType>("deploy");
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployStep, setDeployStep] = useState(4);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [showSecrets, setShowSecrets] = useState(false);
  const [queryRunning, setQueryRunning] = useState(false);
  const [queryResultCount, setQueryResultCount] = useState(4);

  // Deploy simulation trigger
  const triggerRedeploy = () => {
    if (isDeploying) return;
    setIsDeploying(true);
    setDeployStep(1);

    setTimeout(() => setDeployStep(2), 600);
    setTimeout(() => setDeployStep(3), 1300);
    setTimeout(() => {
      setDeployStep(4);
      setIsDeploying(false);
    }, 2100);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const runSampleQuery = () => {
    setQueryRunning(true);
    setTimeout(() => {
      setQueryRunning(false);
      setQueryResultCount((prev) => (prev === 4 ? 6 : 4));
    }, 450);
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-12 rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-950/70 backdrop-blur-2xl shadow-2xl shadow-indigo-500/5 dark:shadow-[0_20px_70px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-300">
      {/* Top Window Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-slate-200/80 dark:border-white/[0.08] bg-slate-50/80 dark:bg-slate-900/50">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/40" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/40" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40" />
          </div>
          <div className="h-4 w-px bg-slate-200 dark:bg-white/10 mx-1 hidden sm:block" />
          <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-300">
            <Server className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
            <span className="font-semibold text-slate-800 dark:text-white">codedeply-core</span>
            <span className="text-slate-400">/</span>
            <span>prod-iad-cluster</span>
          </div>
        </div>

        {/* Live status badge */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            32 Edge Regions Active
          </span>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 hidden md:inline-block">
            18.2ms p95
          </span>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex overflow-x-auto no-scrollbar border-b border-slate-200/80 dark:border-white/[0.08] bg-slate-100/50 dark:bg-slate-900/30 px-3 sm:px-6 pt-2 gap-1 sm:gap-2">
        <button
          onClick={() => setActiveTab("deploy")}
          className={`relative flex items-center gap-2 px-3.5 py-2.5 text-xs sm:text-sm font-semibold rounded-t-xl transition-all whitespace-nowrap ${
            activeTab === "deploy"
              ? "text-indigo-600 dark:text-white bg-white dark:bg-slate-950/80 shadow-sm border-t border-x border-slate-200/80 dark:border-white/10"
              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/40 dark:hover:bg-white/[0.03]"
          }`}
        >
          <Terminal className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
          <span>Edge Deployments</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 font-mono">
            SaaS
          </span>
        </button>

        <button
          onClick={() => setActiveTab("database")}
          className={`relative flex items-center gap-2 px-3.5 py-2.5 text-xs sm:text-sm font-semibold rounded-t-xl transition-all whitespace-nowrap ${
            activeTab === "database"
              ? "text-cyan-600 dark:text-white bg-white dark:bg-slate-950/80 shadow-sm border-t border-x border-slate-200/80 dark:border-white/10"
              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/40 dark:hover:bg-white/[0.03]"
          }`}
        >
          <Database className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
          <span>Serverless Postgres</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 font-mono">
            BaaS
          </span>
        </button>

        <button
          onClick={() => setActiveTab("queue")}
          className={`relative flex items-center gap-2 px-3.5 py-2.5 text-xs sm:text-sm font-semibold rounded-t-xl transition-all whitespace-nowrap ${
            activeTab === "queue"
              ? "text-violet-600 dark:text-white bg-white dark:bg-slate-950/80 shadow-sm border-t border-x border-slate-200/80 dark:border-white/10"
              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/40 dark:hover:bg-white/[0.03]"
          }`}
        >
          <Cpu className="w-4 h-4 text-violet-500 dark:text-violet-400" />
          <span>Redis Job Queue</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-violet-500/10 text-violet-600 dark:text-violet-300 font-mono">
            Worker
          </span>
        </button>

        <button
          onClick={() => setActiveTab("secrets")}
          className={`relative flex items-center gap-2 px-3.5 py-2.5 text-xs sm:text-sm font-semibold rounded-t-xl transition-all whitespace-nowrap ${
            activeTab === "secrets"
              ? "text-emerald-600 dark:text-white bg-white dark:bg-slate-950/80 shadow-sm border-t border-x border-slate-200/80 dark:border-white/10"
              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/40 dark:hover:bg-white/[0.03]"
          }`}
        >
          <Lock className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
          <span>Secrets & Config</span>
        </button>
      </div>

      {/* Main Studio Body */}
      <div className="p-4 sm:p-6 bg-slate-950 text-slate-100 font-mono text-xs sm:text-sm min-h-[360px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {/* TAB 1: EDGE DEPLOY */}
          {activeTab === "deploy" && (
            <motion.div
              key="deploy"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="space-y-4"
            >
              {/* Deploy Controls Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <span className="px-2 py-0.5 rounded bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 font-mono text-[11px]">
                    branch: main
                  </span>
                  <span className="text-slate-400">commit:</span>
                  <span className="text-cyan-300 font-mono">9d2a4f1</span>
                  <span className="text-slate-400 hidden sm:inline">
                    &quot;feat: optimize edge SSR caching&quot;
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={triggerRedeploy}
                    disabled={isDeploying}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-sans text-xs font-semibold shadow-sm transition-all"
                  >
                    <RotateCw className={`w-3.5 h-3.5 ${isDeploying ? "animate-spin" : ""}`} />
                    <span>{isDeploying ? "Building..." : "Trigger Redeploy"}</span>
                  </button>
                </div>
              </div>

              {/* Streaming Log Steps */}
              <div className="space-y-2 text-slate-300 font-mono text-xs sm:text-sm leading-relaxed">
                <div className="flex items-start gap-2.5 text-slate-400">
                  <span className="text-indigo-400">[00:01.02]</span>
                  <span className="text-emerald-400">✔</span>
                  <span>Received GitHub Webhook push event from repository &apos;codedeply/app&apos;</span>
                </div>

                {deployStep >= 2 && (
                  <div className="flex items-start gap-2.5 text-slate-400">
                    <span className="text-indigo-400">[00:03.45]</span>
                    <span className="text-emerald-400">✔</span>
                    <span>Turborepo pipeline restored 12 build outputs from edge cache (0.42s)</span>
                  </div>
                )}

                {deployStep >= 3 && (
                  <div className="flex items-start gap-2.5 text-slate-400">
                    <span className="text-indigo-400">[00:09.80]</span>
                    <span className="text-cyan-400">⚡</span>
                    <span>Compiling Next.js Server Components, static routes, and BaaS workers</span>
                  </div>
                )}

                {deployStep >= 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-start gap-2.5 text-emerald-400 font-semibold"
                  >
                    <span className="text-indigo-400 font-normal">[00:14.20]</span>
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                    <span>Deployment live across 32 edge regions • Container isolation confirmed</span>
                  </motion.div>
                )}
              </div>

              {/* Live Preview Card */}
              <div className="mt-4 p-3.5 rounded-xl border border-slate-800 bg-slate-900/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white font-sans text-xs sm:text-sm">
                        https://codedeply-app-production.codedeply.app
                      </span>
                      <button
                        onClick={() => handleCopy("https://codedeply-app-production.codedeply.app")}
                        className="text-slate-400 hover:text-white transition-colors"
                        title="Copy deployment URL"
                      >
                        {copiedUrl ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono mt-0.5">
                      <span>Status: 200 OK</span>
                      <span>•</span>
                      <span>Latency: 14.2ms</span>
                      <span>•</span>
                      <span>SSL: Auto TLS 1.3</span>
                    </div>
                  </div>
                </div>

                <a
                  href="/dashboard"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-all"
                >
                  <span>Open Console</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          )}

          {/* TAB 2: SERVERLESS POSTGRES */}
          {activeTab === "database" && (
            <motion.div
              key="database"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Database className="w-4 h-4 text-cyan-400" />
                  <span className="text-white font-semibold">Postgres v16.3</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">Connection Pooler: PgBouncer (10,000 max conn)</span>
                </div>
                <button
                  onClick={runSampleQuery}
                  disabled={queryRunning}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-sans text-xs font-semibold transition-all disabled:opacity-50"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>{queryRunning ? "Executing..." : "Execute SQL"}</span>
                </button>
              </div>

              {/* SQL Query Editor */}
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs sm:text-sm">
                <p className="text-cyan-400 font-semibold">
                  SELECT <span className="text-indigo-300">id, project_name, status, p95_latency_ms</span>
                </p>
                <p className="text-cyan-400 font-semibold">
                  FROM <span className="text-indigo-300">deployments</span>
                </p>
                <p className="text-cyan-400 font-semibold">
                  WHERE <span className="text-indigo-300">environment = &apos;production&apos;</span>{" "}
                  ORDER BY <span className="text-indigo-300">created_at DESC LIMIT {queryResultCount}</span>;
                </p>
              </div>

              {/* Query Results Table */}
              <div className="overflow-x-auto rounded-lg border border-slate-800">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                    <tr>
                      <th className="px-3 py-2">ID</th>
                      <th className="px-3 py-2">PROJECT</th>
                      <th className="px-3 py-2">STATUS</th>
                      <th className="px-3 py-2">P95 LATENCY</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 bg-slate-950/60">
                    <tr>
                      <td className="px-3 py-2 text-slate-400">dep_98a1</td>
                      <td className="px-3 py-2 text-white font-medium">ai-workflow-engine</td>
                      <td className="px-3 py-2 text-emerald-400">● ACTIVE</td>
                      <td className="px-3 py-2 text-cyan-300">12.4 ms</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-slate-400">dep_74f2</td>
                      <td className="px-3 py-2 text-white font-medium">ecommerce-storefront</td>
                      <td className="px-3 py-2 text-emerald-400">● ACTIVE</td>
                      <td className="px-3 py-2 text-cyan-300">16.8 ms</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-slate-400">dep_33c9</td>
                      <td className="px-3 py-2 text-white font-medium">auth-microservice</td>
                      <td className="px-3 py-2 text-emerald-400">● ACTIVE</td>
                      <td className="px-3 py-2 text-cyan-300">9.1 ms</td>
                    </tr>
                    {queryResultCount > 4 && (
                      <tr>
                        <td className="px-3 py-2 text-slate-400">dep_11b5</td>
                        <td className="px-3 py-2 text-white font-medium">websocket-gateway</td>
                        <td className="px-3 py-2 text-emerald-400">● ACTIVE</td>
                        <td className="px-3 py-2 text-cyan-300">11.0 ms</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* TAB 3: REDIS JOB QUEUE */}
          {activeTab === "queue" && (
            <motion.div
              key="queue"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-violet-400" />
                  <span className="text-white font-semibold">Redis BullMQ Cluster</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-emerald-400">1,480 ops/sec</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <span>Concurrency: 32x</span>
                </div>
              </div>

              {/* Workers Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/60">
                  <div className="text-slate-400 text-xs">Worker us-east-1a</div>
                  <div className="text-sm font-semibold text-white mt-1">4 / 8 Active Threads</div>
                  <div className="text-[11px] text-emerald-400 mt-0.5">99.99% success rate</div>
                </div>

                <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/60">
                  <div className="text-slate-400 text-xs">Worker eu-west-1b</div>
                  <div className="text-sm font-semibold text-white mt-1">6 / 8 Active Threads</div>
                  <div className="text-[11px] text-violet-400 mt-0.5">42ms avg execution</div>
                </div>

                <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/60">
                  <div className="text-slate-400 text-xs">Queue Backlog</div>
                  <div className="text-sm font-semibold text-white mt-1">0 Pending Jobs</div>
                  <div className="text-[11px] text-cyan-400 mt-0.5">Drain rate: 0.02s</div>
                </div>
              </div>

              {/* Live Worker Task Stream */}
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1.5 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-emerald-400">✔ job #9084 [docker-image-compress]</span>
                  <span className="text-slate-500">completed in 28ms</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-emerald-400">✔ job #9085 [generate-preview-screenshot]</span>
                  <span className="text-slate-500">completed in 44ms</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-cyan-400">⚡ job #9086 [dispatch-edge-purge-cache]</span>
                  <span className="text-cyan-300">running (12ms)</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: SECRETS & CONFIG */}
          {activeTab === "secrets" && (
            <motion.div
              key="secrets"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span className="text-white font-semibold">Environment Variables (Zero-Trust)</span>
                </div>
                <button
                  onClick={() => setShowSecrets(!showSecrets)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
                >
                  {showSecrets ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{showSecrets ? "Mask Secrets" : "Reveal Secrets"}</span>
                </button>
              </div>

              {/* Secrets List */}
              <div className="space-y-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-emerald-400 font-semibold">DATABASE_URL</span>
                  <span className="text-slate-300 font-mono">
                    {showSecrets ? "postgresql://postgres:p9x7z!@iad.db.codedeply.com:5432/main" : "••••••••••••••••••••••••••••••••••••••••"}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300">Production</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-emerald-400 font-semibold">SUPABASE_SERVICE_ROLE_KEY</span>
                  <span className="text-slate-300 font-mono">
                    {showSecrets ? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." : "••••••••••••••••••••••••••••••••••••••••"}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300">Encrypted</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-emerald-400 font-semibold">REDIS_URL</span>
                  <span className="text-slate-300 font-mono">
                    {showSecrets ? "rediss://default:token@cluster-iad.queue.codedeply.com:6379" : "••••••••••••••••••••••••••••••••••••••••"}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300">Edge Sync</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Interactive CLI command bar */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-indigo-400 font-bold">$</span>
            <span className="text-slate-200">npx codeply deploy --prod --turbo</span>
            <button
              onClick={() => handleCopy("npx codeply deploy --prod --turbo")}
              className="text-slate-500 hover:text-white transition-colors"
              title="Copy deploy command"
            >
              {copiedUrl ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-[11px]">
            <span>Auto TLS • MicroVM Sandbox • Instant Rollback</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveStudioDemo;
