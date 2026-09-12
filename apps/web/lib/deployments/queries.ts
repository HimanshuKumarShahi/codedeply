import { createClient } from "@/lib/supabase/server";

export async function getDeployments(projectId: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return [];
  }

  const { data, error } = await supabase
    .from("deployments")
    .select(
      "id, status, branch, commit_sha, error_message, deployment_url, created_at",
    )
    .eq("project_id", projectId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch deployments:", error);
    throw new Error("Failed to fetch deployments");
  }

  return data;
}
