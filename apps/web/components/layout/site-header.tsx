"use client";

import Link from "next/link";
import { useState } from "react";
import { Zap, Menu, X, ArrowRight, Globe, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/theme/theme-toggle";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [currencyOpen, setCurrencyOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-[#120E2C]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo - Hostinger Clean Style */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#673DE6] text-white shadow-md shadow-indigo-600/20 group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 fill-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white flex items-center leading-none">
              Code<span className="text-[#673DE6]">Deploy</span>
            </span>
            <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase mt-0.5">
              Cloud &amp; BaaS Platform
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            href="/features"
            className="px-3.5 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#673DE6] dark:hover:text-[#a58bf8] transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-white/5"
          >
            Features
          </Link>
          <Link
            href="#panel-showcase"
            className="px-3.5 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#673DE6] dark:hover:text-[#a58bf8] transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-white/5"
          >
            Cloud Panel
          </Link>
          <Link
            href="#speed"
            className="px-3.5 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#673DE6] dark:hover:text-[#a58bf8] transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-white/5"
          >
            Speed &amp; Edge
          </Link>
          <Link
            href="#pricing"
            className="px-3.5 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#673DE6] dark:hover:text-[#a58bf8] transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 flex items-center gap-1.5"
          >
            <span>Pricing</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-[#EB0052] text-white leading-none">
              Save 75%
            </span>
          </Link>
          <Link
            href="/about"
            className="px-3.5 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#673DE6] dark:hover:text-[#a58bf8] transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-white/5"
          >
            About
          </Link>
        </nav>

        {/* Right Actions: Currency + Theme + Auth + Hostinger CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Currency / Region Selector (Hostinger India feature) */}
          <div className="relative">
            <button
              onClick={() => setCurrencyOpen(!currencyOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              title="Select Region & Currency"
            >
              <span className="text-sm">{currency === "INR" ? "🇮🇳" : "🌐"}</span>
              <span>{currency === "INR" ? "INR (₹)" : "USD ($)"}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {currencyOpen && (
              <div className="absolute right-0 mt-1.5 w-36 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#1A1336] shadow-xl p-1.5 z-50 text-xs font-medium">
                <button
                  onClick={() => {
                    setCurrency("INR");
                    setCurrencyOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg transition-colors ${
                    currency === "INR"
                      ? "bg-[#673DE6]/10 text-[#673DE6] font-bold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>🇮🇳</span> INR (₹)
                  </span>
                  {currency === "INR" && <Check className="w-3.5 h-3.5 text-[#673DE6]" />}
                </button>
                <button
                  onClick={() => {
                    setCurrency("USD");
                    setCurrencyOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg transition-colors ${
                    currency === "USD"
                      ? "bg-[#673DE6]/10 text-[#673DE6] font-bold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>🌐</span> USD ($)
                  </span>
                  {currency === "USD" && <Check className="w-3.5 h-3.5 text-[#673DE6]" />}
                </button>
              </div>
            )}
          </div>

          <ThemeToggle />

          <Link
            href="/dashboard"
            className="text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-[#673DE6] dark:hover:text-white px-3 py-2 transition-colors"
          >
            Log in
          </Link>

          {/* Hostinger Signature CTA Button */}
          <Link
            href="#pricing"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#673DE6] hover:bg-[#5025D1] shadow-md shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Claim Deal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#150F33] px-6 py-5 shadow-2xl flex flex-col gap-3 lg:hidden"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Currency</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrency("INR")}
                  className={`px-2.5 py-1 rounded text-xs font-bold ${
                    currency === "INR" ? "bg-[#673DE6] text-white" : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300"
                  }`}
                >
                  🇮🇳 INR (₹)
                </button>
                <button
                  onClick={() => setCurrency("USD")}
                  className={`px-2.5 py-1 rounded text-xs font-bold ${
                    currency === "USD" ? "bg-[#673DE6] text-white" : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300"
                  }`}
                >
                  🌐 USD ($)
                </button>
              </div>
            </div>

            <Link
              href="/features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-[#673DE6] py-1.5"
            >
              Features &amp; Architecture
            </Link>
            <Link
              href="#panel-showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-[#673DE6] py-1.5"
            >
              Cloud Panel Preview
            </Link>
            <Link
              href="#speed"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-[#673DE6] py-1.5"
            >
              Speed &amp; Edge Performance
            </Link>
            <Link
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-[#673DE6] py-1.5 flex items-center justify-between"
            >
              <span>Pricing &amp; Plans</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EB0052] text-white">
                Save 75%
              </span>
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-[#673DE6] py-1.5"
            >
              About CodeDeploy
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-[#673DE6] py-1.5"
            >
              Sign In to Console
            </Link>

            <div className="pt-2">
              <Link
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#673DE6] hover:bg-[#5025D1] text-white font-bold text-sm shadow-md"
              >
                <span>Claim Flash Deal (Save 75%)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
