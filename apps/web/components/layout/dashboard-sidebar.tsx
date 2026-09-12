"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Rocket, GitBranch, Settings, LogOut, Zap } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/projects", label: "Projects", icon: Rocket },
  { href: "/dashboard/deployments", label: "Deployments", icon: GitBranch },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

type Props = {
  username: string;
};

export default function DashboardSidebar({ username }: Props) {
  const pathname = usePathname();
  const supabase = createClient();

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  const initials = username
    .split(/[\s_-]/)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-screen w-[240px] flex-col bg-[#0a0a10]/80 backdrop-blur-xl border-r border-white/[0.06] z-50">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-5 border-b border-white/[0.06]">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shrink-0">
          <Zap className="h-4 w-4 text-white" />
        </div>
        <span className="text-sm font-bold gradient-text">CodeDeploy</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive =
            pathname === href ||
            (href !== "/dashboard" && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={[
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150",
                isActive
                  ? "bg-violet-600/20 text-white border border-violet-500/20"
                  : "text-[#64748b] hover:text-[#f1f5f9] hover:bg-white/[0.04] border border-transparent",
              ].join(" ")}
            >
              <Icon
                className={[
                  "h-4 w-4 shrink-0",
                  isActive ? "text-violet-400" : "text-current",
                ].join(" ")}
              />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* User section */}
      <div className="border-t border-white/[0.06] p-3 space-y-2">
        <div className="flex items-center gap-3 px-2 py-2 rounded-lg">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
            {initials}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-[#f1f5f9] truncate">{username}</p>
            <p className="text-[10px] text-[#64748b]">GitHub account</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="w-full flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-[#64748b] hover:text-[#f1f5f9] hover:bg-white/[0.04] transition-all duration-150"
        >
          <LogOut className="h-3.5 w-3.5" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
