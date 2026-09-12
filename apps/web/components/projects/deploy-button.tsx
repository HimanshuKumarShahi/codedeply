"use client";

import { useState } from "react";
import { createDeployment } from "@/app/dashboard/deployments/actions";
import { Rocket, Loader2, AlertCircle } from "lucide-react";

type Props = {
  projectId: string;
};

export default function DeployButton({ projectId }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDeploy() {
    setLoading(true);
    setError(null);

    try {
      await createDeployment(projectId);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to create deployment",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="inline-block">
      <button
        type="button"
        onClick={handleDeploy}
        disabled={loading}
        className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md shadow-violet-500/20 hover:shadow-lg hover:shadow-violet-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {loading ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
        ) : (
          <Rocket className="w-3.5 h-3.5" />
        )}
        <span>{loading ? "Deploying..." : "Trigger Deploy"}</span>
      </button>

      {error && (
        <div className="mt-2 flex items-center gap-1.5 text-xs text-red-400 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-lg">
          <AlertCircle className="w-3 h-3 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}