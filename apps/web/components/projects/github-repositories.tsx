"use client";

import { useState } from "react";
import { getGitHubRepositories } from "@/app/dashboard/github/actions";
import { connectGitHubRepository } from "@/app/dashboard/github/connect-action";

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
  const [selectedProject, setSelectedProject] = useState("");

  async function handleConnect(repository: Repository) {
    if (!selectedProject) {
      return;
    }

    await connectGitHubRepository({
      projectId: selectedProject,
      githubRepoId: repository.id,
      githubOwner: repository.owner,
      githubRepo: repository.name,
      githubBranch: repository.defaultBranch,
    });
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
    <div className="mt-10 rounded-lg border p-6">
      <h3 className="text-lg font-semibold">Connect GitHub repository</h3>

      <p className="mt-1 text-sm text-muted-foreground">
        Select a project and then choose the GitHub repository it should deploy.
      </p>

      <div className="mt-6 space-y-4">
        <select
          value={selectedProject}
          onChange={(event) => setSelectedProject(event.target.value)}
          className="w-full max-w-md rounded-md border px-3 py-2 text-sm"
        >
          <option value="">Select a project</option>

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
          className="rounded-md bg-black px-4 py-2 text-sm text-white disabled:opacity-50"
        >
          {loading ? "Loading..." : "Load repositories"}
        </button>
      </div>

      {repositories.length > 0 && (
        <div className="mt-6 space-y-3">
          {repositories.map((repository) => (
            <div
              key={repository.id}
              className="flex items-center justify-between rounded-md border p-4"
            >
              <div>
                <p className="font-medium">{repository.fullName}</p>

                <p className="text-sm text-muted-foreground">
                  Branch: {repository.defaultBranch}
                </p>

                <p className="text-xs text-muted-foreground">
                  {repository.private ? "Private" : "Public"}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleConnect(repository)}
                className="rounded-md border px-3 py-2 text-sm"
              >
                Connect
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
