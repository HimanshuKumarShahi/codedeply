import { spawn } from "node:child_process";
import { resolve } from "node:path";
import { saveDeploymentLog } from "../deployments/logs.js";

type DockerBuildOptions = {
  workspacePath: string;
  deploymentId: string;
};

export function runDockerBuild({
  workspacePath,
  deploymentId,
}: DockerBuildOptions): Promise<string> {
  return new Promise((resolvePromise, reject) => {
    const absoluteWorkspacePath = resolve(
      workspacePath,
    );

    const dockerfilePath = resolve(
      process.cwd(),
      "src/docker/nextjs.Dockerfile",
    );

    const imageName =
      `codedeply-deployment:${deploymentId}`;

    console.log(
      `Starting Docker image build: ${imageName}`,
    );

    const docker = spawn("docker", [
      "build",

      "-f",
      dockerfilePath,

      "-t",
      imageName,

      absoluteWorkspacePath,
    ]);

    docker.stdout.on("data", (data: Buffer) => {
      const message = data.toString();

      process.stdout.write(`[docker] ${message}`);

      void saveDeploymentLog(
        deploymentId,
        "stdout",
        message,
      );
    });

    docker.stderr.on("data", (data: Buffer) => {
      const message = data.toString();

      process.stderr.write(`[docker] ${message}`);

      void saveDeploymentLog(
        deploymentId,
        "stderr",
        message,
      );
    });

    docker.on("error", (error) => {
      reject(error);
    });

    docker.on("close", (code) => {
      if (code === 0) {
        console.log(
          `Docker image created: ${imageName}`,
        );

        resolvePromise(imageName);
        return;
      }

      reject(
        new Error(
          `Docker image build failed with exit code ${code}`,
        ),
      );
    });
  });
}