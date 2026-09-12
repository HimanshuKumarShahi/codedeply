import { spawn } from "node:child_process";
import { resolve } from "node:path";
import { saveDeploymentLog } from "../deployments/logs.js";
export function runDockerBuild({ workspacePath, deploymentId, }) {
    return new Promise((resolvePromise, reject) => {
        const absoluteWorkspacePath = resolve(workspacePath);
        console.log(`Starting Docker build with workspace: ${absoluteWorkspacePath}`);
        const docker = spawn("docker", [
            "run",
            "--rm",
            "--memory=2g",
            "--cpus=2",
            "-v",
            `${absoluteWorkspacePath}:/app`,
            "-v",
            "/app/node_modules",
            "-w",
            "/app",
            "node:22-alpine",
            "sh",
            "-c",
            "npm install && npm run build",
        ]);
        docker.stdout.on("data", (data) => {
            const message = data.toString();
            process.stdout.write(`[docker] ${message}`);
            void saveDeploymentLog(deploymentId, "stdout", message);
        });
        docker.stderr.on("data", (data) => {
            const message = data.toString();
            process.stderr.write(`[docker] ${message}`);
            void saveDeploymentLog(deploymentId, "stderr", message);
        });
        docker.on("error", (error) => {
            reject(error);
        });
        docker.on("close", (code) => {
            if (code === 0) {
                resolvePromise();
                return;
            }
            reject(new Error(`Docker build failed with exit code ${code}`));
        });
    });
}
