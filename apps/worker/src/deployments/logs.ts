import { supabase } from "../supabase.js";

type LogStream = "stdout" | "stderr";

export async function saveDeploymentLog(
  deploymentId: string,
  stream: LogStream,
  message: string,
): Promise<void> {
  const { error } = await supabase
    .from("deployment_logs")
    .insert({
      deployment_id: deploymentId,
      stream,
      message,
    });

  if (error) {
    console.error(
      `Failed to save deployment log: ${error.message}`,
    );
  }
}
