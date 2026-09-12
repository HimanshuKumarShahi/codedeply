"use client";

import { useState } from "react";
import { disconnectGitHubRepository } from "@/app/dashboard/github/connect-action";
import { Unlink, Loader2 } from "lucide-react";

type Props = {
  projectId: string;
};

export default function DisconnectGitHubButton({ projectId }: Props) {
  const [loading, setLoading] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDisconnect() {
    setLoading(true);
    setError(null);

    try {
      await disconnectGitHubRepository(projectId);
      setConfirming(false);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to disconnect repository",
      );
    } finally {
      setLoading(false);
    }
  }

  if (confirming) {
    return (
      <div className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs">
        <span className="text-amber-300 font-medium px-1">Unlink?</span>
        <button
          type="button"
          onClick={handleDisconnect}
          disabled={loading}
          className="px-2 py-1 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 font-semibold transition-colors disabled:opacity-50"
        >
          {loading ? <Loader2 className="w-3 h-3 animate-spin" /> : "Yes"}
        </button>
        <button
          type="button"
          onClick={() => setConfirming(false)}
          disabled={loading}
          className="px-2 py-1 rounded-lg bg-white/[0.05] text-[#94a3b8] hover:text-white transition-colors"
        >
          No
        </button>
      </div>
    );
  }

  return (
    <div className="inline-block">
      <button
        type="button"
        onClick={() => setConfirming(true)}
        className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-xs font-semibold text-[#94a3b8] hover:text-white hover:border-white/[0.2] hover:bg-white/[0.05] transition-all"
      >
        <Unlink className="w-3.5 h-3.5 text-cyan-400" />
        <span>Unlink Git</span>
      </button>

      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}