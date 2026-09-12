import Link from "next/link";
import { Zap, Disc as Discord, Heart } from "lucide-react";
import { GithubIcon, TwitterIcon } from "@/components/ui/icons";

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-[#02050b] text-[#94a3b8] overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-violet-600/10 via-transparent to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-[#030712] rounded-[11px] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-violet-400 fill-violet-400" />
                </div>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                Code<span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Deploy</span>
              </span>
            </Link>
            <p className="text-sm text-[#64748b] max-w-sm leading-relaxed">
              The next-generation Backend-as-a-Service and autonomous deployment engine. Push code, watch it build, scale automatically to zero latency.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-violet-500/40 hover:bg-violet-500/10 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all"
                aria-label="Discord"
              >
                <Discord className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Column 1: Product */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#f1f5f9] mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  Autonomous Builds
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  Real-time Logs
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  Zero Config CI/CD
                </Link>
              </li>
              <li>
                <span className="inline-flex items-center gap-1.5 text-xs text-cyan-400 font-medium bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full mt-1">
                  v2.0 Beta
                </span>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Platform */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#f1f5f9] mb-4">Platform</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/dashboard" className="hover:text-white transition-colors">
                  Deploy Dashboard
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Architecture
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Enterprise SLA
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About the Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Legal & Resources */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#f1f5f9] mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  GitHub Repos
                </a>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748b]">
          <p>© {new Date().getFullYear()} CodeDeploy Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered for high-frequency cloud deployments
          </p>
        </div>
      </div>
    </footer>
  );
}
