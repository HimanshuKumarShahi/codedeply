"use client";

import Link from "next/link";
import { Zap, ShieldCheck, Headphones, Globe2, ArrowRight } from "lucide-react";
import { GithubIcon, TwitterIcon } from "@/components/ui/icons";

export default function SiteFooter() {
  return (
    <footer className="relative bg-[#1F1449] text-white overflow-hidden border-t border-white/10">
      {/* Top Value Strip */}
      <div className="border-b border-white/10 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#00B090]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">30-Day Money-Back Guarantee</div>
              <div className="text-xs text-indigo-200">100% risk-free testing with instant refund</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#673DE6]">
              <Headphones className="w-5 h-5 text-indigo-300" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">24/7/365 Dedicated Live Support</div>
              <div className="text-xs text-indigo-200">Average response time under 2 minutes</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-400">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">99.99% Uptime Guarantee</div>
              <div className="text-xs text-indigo-200">32 Anycast global edge microVM clusters</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#673DE6] text-white shadow-md">
                <Zap className="w-4 h-4 fill-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Code<span className="text-[#a78bfa]">Deploy</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-indigo-200 leading-relaxed max-w-sm">
              The high-performance autonomous cloud platform and BaaS for modern developers. Instant Git deploys, serverless Postgres, and Redis queues with 99.99% uptime.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#00B090]/20 text-[#00B090] border border-[#00B090]/30">
                <span className="w-2 h-2 rounded-full bg-[#00B090] animate-pulse" />
                All 32 Global Edge Regions Online
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Column 1: Hosting & Cloud */}
          <div>
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white mb-4">
              Cloud Hosting
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-indigo-200">
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  Git MicroVM Deploys
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Cloud Pricing (Save 75%)
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  Anycast Edge CDN
                </Link>
              </li>
              <li>
                <Link href="#speed" className="hover:text-white transition-colors">
                  NVMe Speed Tech
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: BaaS & Databases */}
          <div>
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white mb-4">
              BaaS &amp; Databases
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-indigo-200">
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  Serverless Postgres
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  Redis BullMQ Queues
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  Zero-Copy DB Branching
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  Hardware Secrets Vault
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Domains & SSL */}
          <div>
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white mb-4">
              Domains &amp; SSL
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-indigo-200">
              <li>
                <Link href="#panel-showcase" className="hover:text-white transition-colors">
                  Free Lifetime SSL
                </Link>
              </li>
              <li>
                <Link href="#panel-showcase" className="hover:text-white transition-colors">
                  Custom Domain CNAME
                </Link>
              </li>
              <li>
                <Link href="#panel-showcase" className="hover:text-white transition-colors">
                  HTTP/3 &amp; QUIC Routing
                </Link>
              </li>
              <li>
                <Link href="#panel-showcase" className="hover:text-white transition-colors">
                  Automated DDoS Shield
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 4: Company */}
          <div>
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-indigo-200">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About CodeDeploy
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white transition-colors">
                  Cloud Dashboard
                </Link>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Open Source SDK
                </a>
              </li>
              <li>
                <span className="text-[11px] text-emerald-400 font-bold">
                  SOC-2 Type II Certified
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Hostinger-Style Payment Methods Strip */}
        <div className="py-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 text-xs">
          <div className="text-indigo-200">
            <span className="font-bold text-white mr-3">Secure Payment Methods:</span>
            <span>Visa • Mastercard • RuPay • UPI (Google Pay, PhonePe, Paytm) • PayPal • Net Banking</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-white/10 text-white font-mono font-bold text-[11px]">
              🔒 256-Bit SSL Encrypted
            </span>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-indigo-300">
          <p>© {new Date().getFullYear()} CodeDeploy Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              Refund Policy
            </Link>
            <span className="text-indigo-400">🇮🇳 English (India)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
