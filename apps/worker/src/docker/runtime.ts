import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { randomInt } from "node:crypto";
import { createServer } from "node:net";

const execFileAsync = promisify(execFile);

const MIN_PORT = 31000;
const MAX_PORT = 31999;

async function getUsedDockerPorts(): Promise<Set<number>> {
  const usedPorts = new Set<number>();

  try {
    const { stdout } = await execFileAsync("docker", [
      "ps",
      "--format",
      "{{.Ports}}",
    ]);

    const lines = stdout
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);

    for (const line of lines) {
      const matches = line.matchAll(
        /(?:0\.0\.0\.0:|\[::\]:|127\.0\.0\.1:)(\d+)->/g,
      );

      for (const match of matches) {
        const port = Number(match[1]);

        if (port >= MIN_PORT && port <= MAX_PORT) {
          usedPorts.add(port);
        }
      }
    }
  } catch (error) {
    throw new Error(
      `Failed to inspect Docker ports: ${
        error instanceof Error ? error.message : "unknown error"
      }`,
    );
  }

  return usedPorts;
}

async function isHostPortAvailable(
  port: number,
): Promise<boolean> {
  return new Promise((resolve) => {
    const server = createServer();

    server.once("error", () => {
      resolve(false);
    });

    server.once("listening", () => {
      server.close(() => {
        resolve(true);
      });
    });

    server.listen(port, "127.0.0.1");
  });
}

async function findAvailablePort(): Promise<number> {
  const usedDockerPorts = await getUsedDockerPorts();

  const availablePorts: number[] = [];

  for (
    let port = MIN_PORT;
    port <= MAX_PORT;
    port++
  ) {
    if (usedDockerPorts.has(port)) {
      continue;
    }

    if (await isHostPortAvailable(port)) {
      availablePorts.push(port);
    }
  }

  if (availablePorts.length === 0) {
    throw new Error(
      `No available deployment ports between ${MIN_PORT} and ${MAX_PORT}.`,
    );
  }

  const randomIndex = randomInt(
    0,
    availablePorts.length,
  );

  return availablePorts[randomIndex];
}

type StartRuntimeOptions = {
  imageName: string;
  deploymentId: string;
  containerPort: number;
};

type RuntimeResult = {
  containerId: string;
  hostPort: number;
  url: string;
};

export async function startRuntimeContainer({
  imageName,
  deploymentId,
  containerPort,
}: StartRuntimeOptions): Promise<RuntimeResult> {
  const hostPort = await findAvailablePort();

  const containerName = `codedeply-${deploymentId}`;

  console.log(
    `Starting runtime container ${containerName}`,
  );

  console.log(
    `Port mapping: ${hostPort}:${containerPort}`,
  );

  try {
    const { stdout } = await execFileAsync("docker", [
      "run",
      "-d",
      "--name",
      containerName,
      "-p",
      `${hostPort}:${containerPort}`,
      imageName,
    ]);

    const containerId = stdout.trim();

    if (!containerId) {
      throw new Error(
        "Docker did not return a container ID.",
      );
    }

    const url = `http://localhost:${hostPort}`;

    console.log(
      `Runtime container started: ${containerId}`,
    );

    console.log(
      `Deployment URL: ${url}`,
    );

    return {
      containerId,
      hostPort,
      url,
    };
  } catch (error) {
    // Docker can create the container before
    // failing to configure its network.
    try {
      await execFileAsync("docker", [
        "rm",
        "-f",
        containerName,
      ]);
    } catch {
      // Container may not have been created.
    }

    throw error;
  }
}

export async function waitForDeployment(
  url: string,
): Promise<void> {
  const maxAttempts = 30;

  for (
    let attempt = 1;
    attempt <= maxAttempts;
    attempt++
  ) {
    try {
      const response = await fetch(url);

      if (response.ok) {
        console.log(
          `Deployment is healthy: ${url}`,
        );

        return;
      }
    } catch {
      // Container may still be starting.
    }

    console.log(
      `Waiting for deployment to become healthy... (${attempt}/${maxAttempts})`,
    );

    await new Promise((resolve) =>
      setTimeout(resolve, 1000),
    );
  }

  throw new Error(
    `Deployment did not become healthy within ${maxAttempts} seconds.`,
  );
}
