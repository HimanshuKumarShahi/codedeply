import DeploymentLogs from "@/lib/deployments/deployment-logs";
import { getDeploymentLogs } from "@/lib/deployments/logs";
import DeploymentStatus from "@/components/deployments/deployment-status";
import { GitBranch, GitCommit, ExternalLink, Globe2 } from "lucide-react";

type Deployment = {
  id: string;
  status: string;
  branch: string | null;
  commit_sha: string | null;
  error_message: string | null;
  deployment_url: string | null;
  created_at: string;
};

type Props = {
  deployments: Deployment[];
};

export default async function DeploymentHistory({ deployments }: Props) {
  if (deployments.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-white/[0.08] p-4 text-center">
        <p className="text-xs text-[#64748b]">No active deployments found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {await Promise.all(
        deployments.map(async (deployment) => {
          const logs = await getDeploymentLogs(deployment.id);

          return (
            <div
              key={deployment.id}
              className="rounded-xl border border-white/[0.06] bg-[#070b14]/70 p-4 transition-all hover:border-white/[0.12]"
            >
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <DeploymentStatus
                  deploymentId={deployment.id}
                  initialStatus={deployment.status}
                  initialErrorMessage={deployment.error_message}
                />

                <p className="text-[11px] font-mono text-[#64748b]">
                  {new Date(deployment.created_at).toLocaleString("en-IN", {
                    timeZone: "Asia/Kolkata",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>

              {/* Git Meta Chips */}
              <div className="mt-2.5 flex items-center gap-2 flex-wrap text-[11px]">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border border-white/[0.06] bg-white/[0.02] text-[#94a3b8]">
                  <GitBranch className="w-3 h-3 text-cyan-400" />
                  {deployment.branch ?? "main"}
                </span>

                {deployment.commit_sha && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border border-white/[0.06] bg-white/[0.02] font-mono text-[#94a3b8]">
                    <GitCommit className="w-3 h-3 text-violet-400" />
                    {deployment.commit_sha.slice(0, 7)}
                  </span>
                )}
              </div>

              {/* Live URL Pill */}
              {deployment.deployment_url && (
                <div className="mt-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Globe2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <a
                      href={deployment.deployment_url}
                      target="_blank"
                      rel="noreferrer"
                      className="truncate text-xs font-mono font-medium text-emerald-300 hover:text-emerald-200 underline underline-offset-2"
                    >
                      {deployment.deployment_url}
                    </a>
                  </div>

                  <a
                    href={deployment.deployment_url}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-300 transition-colors"
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

              {/* Realtime Logs Console */}
              <div className="mt-3">
                <DeploymentLogs
                  deploymentId={deployment.id}
                  initialLogs={logs}
                />
              </div>
            </div>
          );
        }),
      )}
    </div>
  );
}
