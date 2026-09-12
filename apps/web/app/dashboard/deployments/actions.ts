"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { enqueueDeployment } from "@codedeply/queue";

export async function createDeployment(projectId: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const { data: project, error: projectError } = await supabase
    .from("projects")
    .select("id, github_repo_id, github_owner, github_repo, github_branch")
    .eq("id", projectId)
    .single();

  if (projectError || !project) {
    throw new Error("Project not found");
  }

  if (
    !project.github_repo_id ||
    !project.github_owner ||
    !project.github_repo
  ) {
    throw new Error("Connect a GitHub repository first");
  }

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.provider_token) {
    throw new Error("GitHub access token is not available");
  }

  const response = await fetch(
    `https://api.github.com/repos/${project.github_owner}/${project.github_repo}/commits/${project.github_branch}`,
    {
      headers: {
        Authorization: `Bearer ${session.provider_token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    console.error("GitHub API error:", response.status, await response.text());

    throw new Error("Failed to fetch latest GitHub commit");
  }

  const commit = await response.json();

  const { data: deployment, error } = await supabase
    .from("deployments")
    .insert({
      project_id: project.id,
      status: "queued",
      branch: project.github_branch,
      commit_sha: commit.sha,
    })
    .select("id, project_id, status, branch, commit_sha, created_at")
    .single();

  if (error) {
    console.error("Failed to create deployment:", error);
    throw new Error(error.message);
  }

  await enqueueDeployment({
  deploymentId: deployment.id,
  projectId: project.id,
  repositoryOwner: project.github_owner,
  repositoryName: project.github_repo,
  branch: project.github_branch,
  commitSha: commit.sha,
  githubAccessToken: session.provider_token,
});

  revalidatePath("/dashboard");

  return deployment;
}
