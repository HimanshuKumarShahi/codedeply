"use client";

import Link from "next/link";
import { useState } from "react";
import { Zap, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/theme/theme-toggle";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3.5 px-4 sm:px-6 pointer-events-none">
      <div className="w-full max-w-6xl rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl px-4 sm:px-6 py-2.5 shadow-lg shadow-indigo-500/5 dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center justify-between pointer-events-auto transition-colors duration-200">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-cyan-400 p-[1px] shadow-sm">
            <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[11px] flex items-center justify-center">
              <Zap className="w-4 h-4 text-indigo-600 dark:text-cyan-400 fill-indigo-600/30 dark:fill-cyan-400/30 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
            Code<span className="bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">Deploy</span>
          </span>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 hidden sm:inline-block">
            SaaS &amp; BaaS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/[0.06] rounded-full px-3 py-1">
          <Link
            href="/features"
            className="px-3.5 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white rounded-full transition-colors"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="px-3.5 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white rounded-full transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="px-3.5 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white rounded-full transition-colors"
          >
            About
          </Link>
          <Link
            href="/dashboard"
            className="px-3.5 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white rounded-full transition-colors"
          >
            Dashboard
          </Link>
        </nav>

        {/* Right Actions: Theme Toggle + Auth / CTA */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Interactive Dark / White Mode Toggle */}
          <ThemeToggle />

          <Link
            href="/dashboard"
            className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors px-3 py-1.5"
          >
            Sign In
          </Link>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-sm shadow-indigo-500/25 transition-all"
          >
            <span>Deploy Free</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu and toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="fixed top-20 left-4 right-4 z-50 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl p-5 shadow-2xl flex flex-col gap-3 pointer-events-auto md:hidden"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/[0.08]">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Theme</span>
              <ThemeToggle showLabel />
            </div>

            <Link
              href="/features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white py-2 border-b border-slate-100 dark:border-white/[0.06]"
            >
              Features &amp; Architecture
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white py-2 border-b border-slate-100 dark:border-white/[0.06]"
            >
              Pricing &amp; Plans
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white py-2 border-b border-slate-100 dark:border-white/[0.06]"
            >
              About CodeDeploy
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white py-2"
            >
              Console Dashboard
            </Link>
            <div className="pt-2">
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-sm shadow-md"
              >
                <span>Start Deploying Free</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
