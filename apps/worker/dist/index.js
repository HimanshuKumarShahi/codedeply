import { dequeueDeployment } from "@codedeply/queue";
import { supabase } from "./supabase.js";
import { runDockerBuild } from "./docker/build.js";
import { downloadRepositorySource } from "./github/source.js";
import { cleanupWorkspace } from "./workspace/cleanup.js";
import { detectProjectRoot } from "./project/detect.js";
async function updateDeploymentStatus(deploymentId, status, errorMessage) {
    const { error } = await supabase
        .from("deployments")
        .update({
        status,
        error_message: errorMessage ?? null,
        updated_at: new Date().toISOString(),
    })
        .eq("id", deploymentId);
    if (error) {
        throw new Error(`Failed to update deployment status: ${error.message}`);
    }
}
async function main() {
    console.log("Worker started");
    console.log("Waiting for deployment jobs...");
    while (true) {
        const job = await dequeueDeployment();
        if (!job) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            continue;
        }
        console.log("Received deployment job:");
        console.log(`Deployment: ${job.deploymentId}`);
        console.log(`Repository: ${job.repositoryOwner}/${job.repositoryName}`);
        console.log(`Branch: ${job.branch}`);
        console.log(`Commit: ${job.commitSha}`);
        let workspacePath;
        try {
            await updateDeploymentStatus(job.deploymentId, "building");
            console.log(`Deployment ${job.deploymentId} is now building`);
            workspacePath = await downloadRepositorySource({
                owner: job.repositoryOwner,
                repo: job.repositoryName,
                commitSha: job.commitSha,
                accessToken: job.githubAccessToken,
                deploymentId: job.deploymentId,
            });
            const projectRoot = await detectProjectRoot(workspacePath);
            console.log(`Detected project root: ${projectRoot}`);
            await runDockerBuild({
                workspacePath: projectRoot,
                deploymentId: job.deploymentId,
            });
            await updateDeploymentStatus(job.deploymentId, "ready");
            console.log(`Deployment ${job.deploymentId} is ready`);
        }
        catch (error) {
            console.error("Deployment processing failed:", error);
            try {
                const errorMessage = error instanceof Error
                    ? error.message
                    : "Deployment failed for an unknown reason";
                await updateDeploymentStatus(job.deploymentId, "failed", errorMessage);
            }
            catch (statusError) {
                console.error("Failed to mark deployment as failed:", statusError);
            }
        }
        finally {
            if (workspacePath) {
                await cleanupWorkspace(workspacePath);
            }
        }
    }
}
main().catch((error) => {
    console.error("Worker failed:", error);
    process.exitCode = 1;
});
