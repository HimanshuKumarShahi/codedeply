import { rm } from "node:fs/promises";
export async function cleanupWorkspace(workspacePath) {
    try {
        await rm(workspacePath, {
            recursive: true,
            force: true,
        });
        console.log(`Workspace cleaned up: ${workspacePath}`);
    }
    catch (error) {
        console.error(`Failed to clean workspace: ${workspacePath}`, error);
    }
}
