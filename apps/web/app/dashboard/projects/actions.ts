"use server";

import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

const execFileAsync = promisify(execFile);

async function cleanupDeploymentDockerResources(
  deploymentId: string,
): Promise<void> {
  const containerName = `codedeply-${deploymentId}`;
  const imageName = `codedeply-deployment:${deploymentId}`;

  // Stop and remove container if it exists.
  try {
    await execFileAsync("docker", [
      "rm",
      "-f",
      containerName,
    ]);

    console.log(
      `Docker container removed: ${containerName}`,
    );
  } catch (error) {
    console.log(
      `Docker container not found or already removed: ${containerName}`,
    );
  }

  // Remove deployment image if it exists.
  try {
    await execFileAsync("docker", [
      "image",
      "rm",
      imageName,
    ]);

    console.log(
      `Docker image removed: ${imageName}`,
    );
  } catch (error) {
    console.log(
      `Docker image not found or already removed: ${imageName}`,
    );
  }
}

export async function deleteProject(
  projectId: string,
) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  // Get the project's deployments before deleting the project.
  const { data: deployments, error: deploymentsError } =
    await supabase
      .from("deployments")
      .select("id")
      .eq("project_id", projectId);

  if (deploymentsError) {
    console.error(
      "Failed to fetch project deployments:",
      deploymentsError,
    );

    throw new Error(
      "Failed to prepare project deletion",
    );
  }

  // Clean up Docker resources belonging to this project.
  for (const deployment of deployments ?? []) {
    await cleanupDeploymentDockerResources(
      deployment.id,
    );
  }

  // Delete the project.
  // RLS ensures the project belongs to the authenticated user.
  const { error } = await supabase
    .from("projects")
    .delete()
    .eq("id", projectId);

  if (error) {
    console.error(
      "Failed to delete project:",
      error,
    );

    throw new Error("Failed to delete project");
  }

  revalidatePath("/dashboard");
}