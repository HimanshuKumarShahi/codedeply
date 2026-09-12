"use server";

import { createClient } from "@/lib/supabase/server";

export async function getGitHubRepositories() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.provider_token) {
    throw new Error("GitHub access token is not available");
  }

  const response = await fetch(
    "https://api.github.com/user/repos?sort=updated&per_page=100",
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
    console.error(
      "GitHub API error:",
      response.status,
      await response.text(),
    );

    throw new Error("Failed to fetch GitHub repositories");
  }

  const repositories = await response.json();

  return repositories.map(
    (repository: {
      id: number;
      name: string;
      full_name: string;
      owner: {
        login: string;
      };
      default_branch: string | null;
      private: boolean;
    }) => ({
      id: repository.id,
      name: repository.name,
      fullName: repository.full_name,
      owner: repository.owner.login,
      defaultBranch: repository.default_branch ?? "main",
      private: repository.private,
    }),
  );
}