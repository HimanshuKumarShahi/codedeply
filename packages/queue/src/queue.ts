import type { DeploymentJob } from "@codedeply/types";
import { connectRedis, redis } from "./redis.js";

const QUEUE_KEY = "codedeply:deployment-jobs";

export async function enqueueDeployment(
  job: DeploymentJob,
): Promise<void> {
  await connectRedis();

  await redis.rPush(
    QUEUE_KEY,
    JSON.stringify(job),
  );

  console.log(
    "Deployment added to Redis queue:",
    job.deploymentId,
  );
}

export async function dequeueDeployment(): Promise<
  DeploymentJob | undefined
> {
  await connectRedis();

  const value = await redis.lPop(QUEUE_KEY);

  if (!value) {
    return undefined;
  }

  return JSON.parse(value) as DeploymentJob;
}

export async function getQueueSize(): Promise<number> {
  await connectRedis();

  return redis.lLen(QUEUE_KEY);
}