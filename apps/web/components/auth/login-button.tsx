"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { ArrowRight, Loader2 } from "lucide-react";

export default function LoginButton() {
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  async function signInWithGitHub() {
    setLoading(true);
    try {
      await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
    } catch {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={signInWithGitHub}
      disabled={loading}
      className="relative group overflow-hidden rounded-xl p-[1px] shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] transition-all duration-300 active:scale-[0.98] disabled:opacity-50"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 rounded-xl transition-all duration-300 group-hover:opacity-100 opacity-90" />
      <span className="relative flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-[#030712] rounded-[11px] transition-all duration-300 group-hover:bg-opacity-80">
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
        ) : (
          <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        )}
        <span>{loading ? "Redirecting to GitHub..." : "Continue with GitHub"}</span>
        <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
      </span>
    </button>
  );
}
