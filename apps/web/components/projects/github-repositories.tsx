"use client";

import { useState } from "react";
import { getGitHubRepositories } from "@/app/dashboard/github/actions";
import { connectGitHubRepository } from "@/app/dashboard/github/connect-action";
import { GitBranch, Lock, Globe2, Loader2, Check, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

type Repository = {
  id: number;
  name: string;
  fullName: string;
  owner: string;
  defaultBranch: string;
  private: boolean;
};

type Project = {
  id: string;
  name: string;
};

type Props = {
  projects: Project[];
};

export default function GitHubRepositories({ projects }: Props) {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);
  const [connectingId, setConnectingId] = useState<number | null>(null);
  const [connectedIds, setConnectedIds] = useState<number[]>([]);
  const [selectedProject, setSelectedProject] = useState("");

  async function handleConnect(repository: Repository) {
    if (!selectedProject) return;

    setConnectingId(repository.id);
    try {
      await connectGitHubRepository({
        projectId: selectedProject,
        githubRepoId: repository.id,
        githubOwner: repository.owner,
        githubRepo: repository.name,
        githubBranch: repository.defaultBranch,
      });
      setConnectedIds((prev) => [...prev, repository.id]);
    } finally {
      setConnectingId(null);
    }
  }

  async function loadRepositories() {
    setLoading(true);

    try {
      const data = await getGitHubRepositories();
      setRepositories(data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#0d1117]/80 p-6 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white">
          <GithubIcon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-bold text-[#f1f5f9]">Connect GitHub Repositories</h3>
          <p className="text-xs text-[#64748b]">
            Link a repository to enable autonomous builds upon git push
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-xl">
        <select
          value={selectedProject}
          onChange={(event) => setSelectedProject(event.target.value)}
          className="rounded-xl border border-white/[0.08] bg-[#030712] px-3.5 py-2.5 text-xs text-[#f1f5f9] focus:outline-none focus:border-violet-500/50 flex-1"
        >
          <option value="">Select target project...</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={loadRepositories}
          disabled={loading || !selectedProject}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-violet-500/20 hover:shadow-violet-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {loading ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <GithubIcon className="w-3.5 h-3.5" />
          )}
          <span>{loading ? "Fetching..." : "Fetch Repos"}</span>
        </button>
      </div>

      {repositories.length > 0 && (
        <div className="mt-6 grid gap-3 max-h-96 overflow-y-auto pr-1">
          {repositories.map((repository) => {
            const isConnected = connectedIds.includes(repository.id);
            const isConnecting = connectingId === repository.id;

            return (
              <div
                key={repository.id}
                className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#070b14]/70 p-3.5 hover:border-violet-500/30 transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center shrink-0">
                    {repository.private ? (
                      <Lock className="w-3.5 h-3.5 text-[#94a3b8]" />
                    ) : (
                      <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-[#f1f5f9]">
                      {repository.fullName}
                    </p>
                    <p className="text-[11px] text-[#64748b] flex items-center gap-1 mt-0.5">
                      <GitBranch className="w-3 h-3 text-cyan-400" />
                      {repository.defaultBranch} • {repository.private ? "Private" : "Public"}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleConnect(repository)}
                  disabled={isConnecting || isConnected}
                  className={`shrink-0 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                    isConnected
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : "bg-white/[0.05] hover:bg-violet-600 hover:text-white border border-white/[0.08] text-[#cbd5e1]"
                  }`}
                >
                  {isConnecting ? (
                    <Loader2 className="w-3 h-3 animate-spin" />
                  ) : isConnected ? (
                    <Check className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <ArrowRight className="w-3 h-3" />
                  )}
                  <span>{isConnected ? "Linked" : isConnecting ? "Linking..." : "Connect"}</span>
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
