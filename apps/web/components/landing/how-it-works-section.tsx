"use client";

import React from "react";
import { GitBranch, Database, Globe, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Connect Your Repository",
    description:
      "Link your GitHub or GitLab repository with one click, or deploy from our pre-configured production templates (Next.js, Remix, FastAPI, Go, Docker).",
    icon: GitBranch,
    highlight: "Zero YAML or Dockerfile required",
  },
  {
    step: "02",
    title: "Auto-Provision BaaS Resources",
    description:
      "CodeDeploy automatically detects your stack, provisions serverless Postgres databases, mounts Redis queues, and generates secure environment secrets.",
    icon: Database,
    highlight: "Zero-copy database branching",
  },
  {
    step: "03",
    title: "Go Live Globally at the Edge",
    description:
      "Your microVM containers spin up in isolated clusters across 32 edge locations with free automatic SSL, CDN caching, and sub-20ms latency worldwide.",
    icon: Globe,
    highlight: "99.99% Guaranteed SLA uptime",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative py-20 lg:py-28 px-4 sm:px-6 bg-[#FAF9FD] dark:bg-[#120E2C] border-t border-slate-200/80 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#673DE6] dark:text-[#b89eff]">
            Seamless Onboarding
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mt-2">
            From Code to Live Production in{" "}
            <span className="text-[#673DE6]">3 Simple Steps</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            No complex DevOps configurations. Deploy your web applications in under 60 seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-3xl p-8 bg-white dark:bg-[#1A1438] border border-slate-200 dark:border-white/10 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#673DE6]/10 text-[#673DE6] flex items-center justify-center font-black group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-200 dark:text-white/10 font-mono">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center gap-2 text-xs font-semibold text-[#00B090]">
                  <Check className="w-4 h-4 stroke-[2.5]" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#673DE6] hover:bg-[#5025D1] text-white text-sm font-bold shadow-md shadow-[#673DE6]/25 transition-all"
          >
            <span>Start Deploying Free Today</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
