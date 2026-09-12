"use client";

import Link from "next/link";
import { useState } from "react";
import { Zap, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LoginButton from "@/components/auth/login-button";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 sm:px-6 pointer-events-none">
      <div className="w-full max-w-6xl rounded-2xl border border-white/[0.08] bg-[#030712]/70 backdrop-blur-2xl px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center justify-between pointer-events-auto transition-all duration-300">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 p-[1px] shadow-[0_0_20px_rgba(99,102,241,0.5)]">
            <div className="w-full h-full bg-[#030712] rounded-[11px] flex items-center justify-center">
              <Zap className="w-4 h-4 text-violet-400 fill-violet-400 group-hover:scale-110 group-hover:text-cyan-400 group-hover:fill-cyan-400 transition-all duration-300" />
            </div>
          </div>
          <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1">
            Code<span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Deploy</span>
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 hidden sm:inline-block">
            BaaS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.02] border border-white/[0.05] rounded-full px-3 py-1">
          <Link
            href="/features"
            className="px-3.5 py-1.5 text-xs font-medium text-[#94a3b8] hover:text-white rounded-full hover:bg-white/[0.05] transition-colors"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="px-3.5 py-1.5 text-xs font-medium text-[#94a3b8] hover:text-white rounded-full hover:bg-white/[0.05] transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="px-3.5 py-1.5 text-xs font-medium text-[#94a3b8] hover:text-white rounded-full hover:bg-white/[0.05] transition-colors"
          >
            About
          </Link>
          <Link
            href="/dashboard"
            className="px-3.5 py-1.5 text-xs font-medium text-[#94a3b8] hover:text-white rounded-full hover:bg-white/[0.05] transition-colors"
          >
            Dashboard
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/dashboard"
            className="text-xs font-semibold text-[#cbd5e1] hover:text-white transition-colors px-3 py-1.5"
          >
            Sign In
          </Link>
          <Link
            href="/dashboard"
            className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-xl transition-all duration-300 group-hover:opacity-90 opacity-80" />
            <span className="relative flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#030712] rounded-[11px] transition-all duration-300 group-hover:bg-transparent">
              <span>Start Deploying</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#94a3b8] hover:text-white hover:bg-white/[0.06] transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-50 rounded-2xl border border-white/[0.1] bg-[#030712]/95 backdrop-blur-2xl p-6 shadow-2xl flex flex-col gap-4 pointer-events-auto md:hidden"
          >
            <Link
              href="/features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#cbd5e1] hover:text-white py-2 border-b border-white/[0.05]"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#cbd5e1] hover:text-white py-2 border-b border-white/[0.05]"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#cbd5e1] hover:text-white py-2 border-b border-white/[0.05]"
            >
              About
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#cbd5e1] hover:text-white py-2"
            >
              Dashboard
            </Link>
            <div className="pt-2">
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold text-sm"
              >
                <span>Start Free</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
