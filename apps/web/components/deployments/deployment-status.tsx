"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Loader2, CheckCircle2, AlertCircle, Clock } from "lucide-react";

type Props = {
  deploymentId: string;
  initialStatus: string;
  initialErrorMessage: string | null;
};

export default function DeploymentStatus({
  deploymentId,
  initialStatus,
  initialErrorMessage,
}: Props) {
  const [status, setStatus] = useState(initialStatus);
  const [errorMessage, setErrorMessage] = useState(initialErrorMessage);

  useEffect(() => {
    const supabase = createClient();

    const channel = supabase
      .channel(`deployment-status-${deploymentId}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "deployments",
          filter: `id=eq.${deploymentId}`,
        },
        (payload) => {
          const deployment = payload.new as {
            status: string;
            error_message: string | null;
          };

          setStatus(deployment.status);
          setErrorMessage(deployment.error_message);
        },
      )
      .subscribe();

    return () => {
      void supabase.removeChannel(channel);
    };
  }, [deploymentId]);

  function renderBadge() {
    switch (status) {
      case "queued":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-amber-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            <span>Queued</span>
          </span>
        );

      case "building":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-cyan-300">
            <Loader2 className="w-3 h-3 animate-spin text-cyan-400" />
            <span>Building Container...</span>
          </span>
        );

      case "ready":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Live in Production</span>
          </span>
        );

      case "failed":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-red-300">
            <AlertCircle className="w-3 h-3 text-red-400" />
            <span>Build Failed</span>
          </span>
        );

      default:
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-semibold text-[#94a3b8] capitalize">
            <Clock className="w-3 h-3 text-[#94a3b8]" />
            <span>{status}</span>
          </span>
        );
    }
  }

  return (
    <div className="inline-block">
      {renderBadge()}

      {status === "failed" && errorMessage && (
        <div className="mt-2.5 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-left">
          <p className="text-[11px] font-bold text-red-300 flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5" />
            Runtime Failure Diagnostic
          </p>
          <p className="mt-1 font-mono text-[11px] text-red-200/80 break-words">
            {errorMessage}
          </p>
        </div>
      )}
    </div>
  );
}