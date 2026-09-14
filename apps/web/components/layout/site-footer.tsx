"use client";

import Link from "next/link";
import { Zap, Disc as Discord, ShieldCheck } from "lucide-react";
import { GithubIcon, TwitterIcon } from "@/components/ui/icons";
import ThemeToggle from "@/components/theme/theme-toggle";

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-slate-200/80 dark:border-white/10 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-200/80 dark:border-white/[0.08]">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1px] shadow-sm">
                <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-indigo-600 dark:text-cyan-400 fill-indigo-600/30 dark:fill-cyan-400/30" />
                </div>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">
                Code<span className="bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">Deploy</span>
              </span>
            </Link>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              The next-generation autonomous deployment platform and Backend-as-a-Service. Git-native instant CI/CD, serverless Postgres, and Redis queues on edge infrastructure.
            </p>

            {/* Live Operational Status Pill */}
            <div className="pt-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                All 32 Edge Regions Operational
              </span>
            </div>

            {/* Social Icons & Theme Switcher */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-indigo-500 transition-all shadow-sm"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500 transition-all shadow-sm"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-indigo-500 transition-all shadow-sm"
                aria-label="Discord"
              >
                <Discord className="w-4 h-4" />
              </a>
              <div className="ml-2">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Links Column 1: Product */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-900 dark:text-white mb-4">
              Product (SaaS)
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/features" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  Git-Native Deploys
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  Live WebSocket Logs
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  Pricing &amp; Plans
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  Edge Anycast Network
                </Link>
              </li>
              <li>
                <span className="inline-flex items-center gap-1.5 text-xs text-indigo-600 dark:text-cyan-400 font-semibold bg-indigo-500/10 dark:bg-cyan-500/10 border border-indigo-500/20 dark:border-cyan-500/20 px-2 py-0.5 rounded-full">
                  v2.0 Production
                </span>
              </li>
            </ul>
          </div>

          {/* Links Column 2: BaaS Services */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-900 dark:text-white mb-4">
              BaaS Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/features" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  Serverless Postgres
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  Redis BullMQ Queue
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  Secrets Vault
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  MicroVM Isolation
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  Database Branching
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Platform */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-900 dark:text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  Cloud Console
                </Link>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  GitHub Organization
                </a>
              </li>
              <li>
                <span className="text-xs text-slate-400">SOC-2 Type II Certified</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} CodeDeploy Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/about" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
