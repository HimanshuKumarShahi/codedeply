"use client";

import { useState } from "react";
import { deleteProject } from "@/app/dashboard/projects/actions";
import { Trash2, Loader2, AlertTriangle } from "lucide-react";

type Props = {
  projectId: string;
};

export default function DeleteProjectButton({ projectId }: Props) {
  const [loading, setLoading] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDelete() {
    setLoading(true);
    setError(null);

    try {
      await deleteProject(projectId);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to delete project",
      );
      setConfirming(false);
    } finally {
      setLoading(false);
    }
  }

  if (confirming) {
    return (
      <div className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-red-500/10 border border-red-500/30 text-xs">
        <span className="text-red-300 font-medium px-1 flex items-center gap-1">
          <AlertTriangle className="w-3 h-3 text-red-400" />
          Delete?
        </span>
        <button
          type="button"
          onClick={handleDelete}
          disabled={loading}
          className="px-2 py-1 rounded-lg bg-red-500/20 text-red-300 hover:bg-red-500/30 font-semibold transition-colors disabled:opacity-50"
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
        className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-xs font-semibold text-[#94a3b8] hover:text-red-400 hover:border-red-500/30 hover:bg-red-500/10 transition-all"
      >
        <Trash2 className="w-3.5 h-3.5" />
        <span>Delete</span>
      </button>

      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}