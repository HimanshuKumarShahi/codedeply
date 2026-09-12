import DeploymentLogs from "@/lib/deployments/deployment-logs";
import { getDeploymentLogs } from "@/lib/deployments/logs";
import DeploymentStatus from "@/components/deployments/deployment-status";

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
      <div className="mt-4 rounded-md border p-4">
        <p className="text-sm text-muted-foreground">No deployments yet.</p>
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-2">
      {await Promise.all(
        deployments.map(async (deployment) => {
          const logs = await getDeploymentLogs(deployment.id);

          return (
            <div key={deployment.id} className="rounded-md border p-4">
              <div className="flex items-center justify-between">
                <DeploymentStatus
                  deploymentId={deployment.id}
                  initialStatus={deployment.status}
                  initialErrorMessage={deployment.error_message}
                />

                <p className="text-xs text-muted-foreground">
                  {new Date(deployment.created_at).toLocaleString("en-IN", {
                    timeZone: "Asia/Kolkata",
                  })}
                </p>
              </div>

              <p className="mt-1 text-sm text-muted-foreground">
                Branch: {deployment.branch ?? "unknown"}
              </p>

              {deployment.commit_sha && (
                <p className="mt-1 text-xs text-muted-foreground">
                  Commit: {deployment.commit_sha.slice(0, 7)}
                </p>
              )}
              {deployment.deployment_url && (
                <div className="mt-4 rounded-md border bg-background p-3">
                  <p className="text-xs font-medium text-muted-foreground">
                    Live deployment
                  </p>

                  <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <a
                      href={deployment.deployment_url}
                      target="_blank"
                      rel="noreferrer"
                      className="break-all text-sm font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800"
                    >
                      {deployment.deployment_url}
                    </a>

                    <a
                      href={deployment.deployment_url}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 rounded-md bg-black px-3 py-2 text-center text-sm text-white hover:bg-gray-800"
                    >
                      Visit Deployment
                    </a>
                  </div>
                </div>
              )}
              <div className="mt-4">
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
