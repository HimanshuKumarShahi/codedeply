import { connectRedis, redis } from "./redis.js";
const QUEUE_KEY = "codedeply:deployment-jobs";
export async function enqueueDeployment(job) {
    await connectRedis();
    await redis.rPush(QUEUE_KEY, JSON.stringify(job));
    console.log("Deployment added to Redis queue:", job.deploymentId);
}
export async function dequeueDeployment() {
    await connectRedis();
    const value = await redis.lPop(QUEUE_KEY);
    if (!value) {
        return undefined;
    }
    return JSON.parse(value);
}
export async function getQueueSize() {
    await connectRedis();
    return redis.lLen(QUEUE_KEY);
}
