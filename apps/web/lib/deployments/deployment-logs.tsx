"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type DeploymentLog = {
  id: number;
  deployment_id: string;
  stream: "stdout" | "stderr";
  message: string;
  created_at: string;
};

type Props = {
  deploymentId: string;
  initialLogs: DeploymentLog[];
};

export default function DeploymentLogs({
  deploymentId,
  initialLogs,
}: Props) {
  const [logs, setLogs] =
    useState<DeploymentLog[]>(initialLogs);

  useEffect(() => {
    const supabase = createClient();

    const channel = supabase
      .channel(`deployment-logs-${deploymentId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "deployment_logs",
          filter: `deployment_id=eq.${deploymentId}`,
        },
        (payload) => {
          const newLog =
            payload.new as DeploymentLog;

          setLogs((currentLogs) => {
            if (
              currentLogs.some(
                (log) => log.id === newLog.id,
              )
            ) {
              return currentLogs;
            }

            return [...currentLogs, newLog];
          });
        },
      )
      .subscribe();

    return () => {
      void supabase.removeChannel(channel);
    };
  }, [deploymentId]);

  if (logs.length === 0) {
    return (
      <div className="rounded-lg border bg-muted/30 p-4">
        <p className="text-sm text-muted-foreground">
          No build logs available.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border bg-black text-sm text-white">
      <div className="border-b border-white/10 px-4 py-2">
        <span className="text-xs text-white/60">
          Build logs
        </span>
      </div>

      <div className="max-h-96 overflow-y-auto p-4">
        <pre className="whitespace-pre-wrap break-words font-mono text-xs leading-5">
          {logs.map((log) => (
            <span key={log.id}>
              {log.message}
            </span>
          ))}
        </pre>
      </div>
    </div>
  );
}
