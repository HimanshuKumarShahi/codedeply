import DeployButton from "@/components/projects/deploy-button";
import DeploymentHistory from "@/components/projects/deployment-history";
import { getDeployments } from "@/lib/deployments/queries";
import DeleteProjectButton from "@/components/projects/delete-project-button";
import DisconnectGitHubButton from "@/components/projects/disconnect-github-button";
import { FolderGit2, Activity, Calendar } from "lucide-react";

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
  const latestDeployment = deployments[0];

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d1117]/80 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_10px_40px_rgba(99,102,241,0.15)] flex flex-col justify-between">
      {/* Top subtle glow line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      {/* Project Header */}
      <div className="p-6 border-b border-white/[0.06]">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5 min-w-0">
            {/* Gradient Icon Badge */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 p-[1px] shrink-0 shadow-md">
              <div className="w-full h-full bg-[#0d1117] rounded-[11px] flex items-center justify-center font-bold text-sm text-violet-300">
                {project.name.charAt(0).toUpperCase()}
              </div>
            </div>

            <div className="min-w-0">
              <h4 className="truncate text-base font-bold text-[#f1f5f9] group-hover:text-violet-300 transition-colors">
                {project.name}
              </h4>
              <p className="mt-0.5 text-xs text-[#64748b] flex items-center gap-1.5">
                <Calendar className="w-3 h-3 text-[#64748b]" />
                {new Date(project.created_at).toLocaleString("en-IN", {
                  timeZone: "Asia/Kolkata",
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          <span className="shrink-0 rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-1 text-[11px] font-semibold text-violet-300">
            Active
          </span>
        </div>

        {/* Action Controls */}
        <div className="mt-5 flex items-center gap-2 flex-wrap">
          <DeployButton projectId={project.id} />
          <DisconnectGitHubButton projectId={project.id} />
          <DeleteProjectButton projectId={project.id} />
        </div>
      </div>

      {/* Deployment History Section */}
      <div className="bg-white/[0.01] p-6 flex-1 flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <h5 className="text-xs uppercase font-bold tracking-wider text-[#94a3b8] flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            Build Telemetry
          </h5>

          <span className="text-xs text-[#64748b] font-mono">
            {deployments.length} {deployments.length === 1 ? "run" : "runs"}
          </span>
        </div>

        <DeploymentHistory deployments={deployments} />
      </div>
    </div>
  );
}
