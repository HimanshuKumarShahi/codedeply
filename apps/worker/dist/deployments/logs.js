import { supabase } from "../supabase.js";
export async function saveDeploymentLog(deploymentId, stream, message) {
    const { error } = await supabase
        .from("deployment_logs")
        .insert({
        deployment_id: deploymentId,
        stream,
        message,
    });
    if (error) {
        console.error(`Failed to save deployment log: ${error.message}`);
    }
}
