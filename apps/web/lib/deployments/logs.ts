import { createClient } from "@/lib/supabase/server";

export async function getDeploymentLogs(
  deploymentId: string,
) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return [];
  }

  const { data, error } = await supabase
    .from("deployment_logs")
    .select(
      "id, deployment_id, stream, message, created_at",
    )
    .eq("deployment_id", deploymentId)
    .order("created_at", { ascending: true })
    .order("id", { ascending: true });

  if (error) {
    console.error(
      "Failed to fetch deployment logs:",
      error,
    );

    throw new Error("Failed to fetch deployment logs");
  }

  return data;
}
