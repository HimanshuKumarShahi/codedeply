"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

type ConnectRepositoryInput = {
  projectId: string;
  githubRepoId: number;
  githubOwner: string;
  githubRepo: string;
  githubBranch: string;
};

export async function connectGitHubRepository(
  input: ConnectRepositoryInput,
) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const { data: project, error: projectError } = await supabase
    .from("projects")
    .select("id")
    .eq("id", input.projectId)
    .single();

  if (projectError || !project) {
    throw new Error("Project not found");
  }

  const { error } = await supabase
    .from("projects")
    .update({
      github_repo_id: input.githubRepoId,
      github_owner: input.githubOwner,
      github_repo: input.githubRepo,
      github_branch: input.githubBranch,
    })
    .eq("id", input.projectId);

  if (error) {
  console.error("Failed to connect GitHub repository:", error);
  throw new Error(error.message);
}

  revalidatePath("/dashboard");
}

export async function disconnectGitHubRepository(
  projectId: string,
) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const { data: project, error: projectError } =
    await supabase
      .from("projects")
      .select("id")
      .eq("id", projectId)
      .single();

  if (projectError || !project) {
    throw new Error("Project not found");
  }

  const { error } = await supabase
    .from("projects")
    .update({
      github_connection_id: null,
      github_repo_id: null,
      github_owner: null,
      github_repo: null,
      github_branch: null,
    })
    .eq("id", projectId);

  if (error) {
    console.error(
      "Failed to disconnect GitHub repository:",
      error,
    );

    throw new Error(
      "Failed to disconnect GitHub repository",
    );
  }

  revalidatePath("/dashboard");
}