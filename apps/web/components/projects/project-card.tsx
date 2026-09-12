import DeployButton from "@/components/projects/deploy-button";
import DeploymentHistory from "@/components/projects/deployment-history";
import { getDeployments } from "@/lib/deployments/queries";
import DeleteProjectButton from "@/components/projects/delete-project-button";
import DisconnectGitHubButton from "@/components/projects/disconnect-github-button";

type Project = {
  id: string;
  name: string;
  created_at: string;
};

type Props = {
  project: Project;
};

export default async function ProjectCard({ project }: Props) {
  const deployments = await getDeployments(project.id);

  return (
    <div className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md">
      {/* Project header */}
      <div className="border-b p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h4 className="truncate text-lg font-semibold">
              {project.name}
            </h4>

            <p className="mt-1 text-xs text-muted-foreground">
              Created{" "}
              {new Date(project.created_at).toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata",
              })}
            </p>
          </div>

          <span className="shrink-0 rounded-full border bg-muted px-2.5 py-1 text-xs font-medium">
            Project
          </span>
        </div>

        {/* Deploy action */}
        <div className="mt-5">
          <DeployButton projectId={project.id} />
          <DeleteProjectButton projectId={project.id} />
          <DisconnectGitHubButton projectId={project.id}/>
        </div>
      </div>

      {/* Deployment history */}
      <div className="bg-muted/20 p-5">
        <div className="flex items-center justify-between">
          <h5 className="text-sm font-semibold">
            Deployment history
          </h5>

          <span className="text-xs text-muted-foreground">
            {deployments.length}{" "}
            {deployments.length === 1 ? "deployment" : "deployments"}
          </span>
        </div>

        <DeploymentHistory deployments={deployments} />
      </div>
    </div>
  );
}
