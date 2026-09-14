"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Code, Check, Copy, Sparkles, Cpu, Layers } from "lucide-react";

type CodeTab = "cli" | "typescript" | "python" | "curl";

const codeSnippets: Record<CodeTab, { title: string; filename: string; language: string; code: string }> = {
  cli: {
    title: "Terminal CLI",
    filename: "terminal",
    language: "bash",
    code: `# 1. Install CodeDeploy CLI globally
npm install -g codeply

# 2. Link your existing Git repo & BaaS resources
codeply link --project my-awesome-saas

# 3. Deploy instantly to global edge with zero config
codeply deploy --prod

# Output:
# ✔ Uploaded bundle (1.4MB) in 0.18s
# ✔ Provisioned isolated microVM container
# ✔ Migrated PostgreSQL database schema
# 🚀 Live URL: https://my-awesome-saas.codedeply.app [18ms]`,
  },
  typescript: {
    title: "TypeScript SDK",
    filename: "server.ts",
    language: "typescript",
    code: `import { CodeDeployClient } from "@codedeply/sdk";

// Initialize the client with your project API token
const cloud = new CodeDeployClient({
  apiKey: process.env.CODEDELPY_API_KEY!,
  region: "auto", // auto-selects closest edge cluster
});

// Trigger an autonomous deployment with custom environment
const deployment = await cloud.deployments.create({
  repository: "github.com/my-org/backend-service",
  branch: "main",
  env: {
    DATABASE_URL: cloud.secrets.get("DATABASE_URL"),
    NODE_ENV: "production",
  },
  scaling: { minInstances: 1, maxInstances: 10 },
});

console.log(\`Live at: \${deployment.url} (p95: \${deployment.latency}ms)\`);`,
  },
  python: {
    title: "Python SDK",
    filename: "app.py",
    language: "python",
    code: `from codedeply import CodeDeploy, BaaSQueue
import os

# Initialize BaaS client
client = CodeDeploy(api_key=os.getenv("CODEDELPY_API_KEY"))

# Push a background job to the high-throughput Redis cluster
queue = BaaSQueue("media-encoder", client=client)
job = queue.enqueue(
    task="transcode_video",
    payload={"source": "s3://bucket/raw.mp4", "codec": "av1"},
    priority="high"
)

# Stream live container logs over WebSockets
for log_line in client.logs.stream(service="worker-cluster-01"):
    print(f"[Edge Log] {log_line}")`,
  },
  curl: {
    title: "cURL / REST API",
    filename: "bash",
    language: "bash",
    code: `curl -X POST https://api.codedeply.com/v1/deployments \\
  -H "Authorization: Bearer cdp_live_98a72b14e" \\
  -H "Content-Type: application/json" \\
  -d '{
    "repository": "HimanshuKumarShahi/codedeply",
    "branch": "main",
    "framework": "nextjs",
    "features": {
      "serverlessPostgres": true,
      "redisQueue": true,
      "edgeWaf": true
    }
  }'`,
  },
};

export function CodeShowcaseSection() {
  const [activeTab, setActiveTab] = useState<CodeTab>("cli");
  const [copied, setCopied] = useState(false);

  const activeSnippet = codeSnippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden bg-background">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Context & Features */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Developer-First Architecture</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              One command to deploy.{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
                Full API control.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Whether you deploy from your terminal, GitHub actions, or programmatically through our TypeScript and Python SDKs, CodeDeploy gives you unified control over compute, storage, and networking.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Terminal className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">Zero-Config CLI</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Automatically detects package managers, build flags, and environment variables.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Code className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">Typed SDKs for Any Stack</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Full TypeScript, Python, and Go SDKs with complete autocompletion and error types.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">Instant Webhook CI/CD</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Push to any GitHub or GitLab branch to spin up preview environments with isolated DB forks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Code Window */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 shadow-2xl shadow-indigo-500/5 dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden backdrop-blur-xl">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-200 dark:border-white/[0.08] bg-slate-50/90 dark:bg-slate-900/60">
                {/* Tabs */}
                <div className="flex items-center gap-1 sm:gap-2">
                  {(["cli", "typescript", "python", "curl"] as CodeTab[]).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                        activeTab === tab
                          ? "bg-indigo-600 text-white shadow-sm"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/5"
                      }`}
                    >
                      {codeSnippets[tab].title}
                    </button>
                  ))}
                </div>

                {/* Copy button */}
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-xs font-medium transition-colors"
                  title="Copy code"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Display Area */}
              <div className="p-4 sm:p-6 bg-slate-950 text-slate-200 font-mono text-xs sm:text-sm overflow-x-auto min-h-[300px]">
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={activeTab}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="leading-relaxed"
                  >
                    <code>{activeSnippet.code}</code>
                  </motion.pre>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CodeShowcaseSection;
