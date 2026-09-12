import { createClient } from "redis";

const redisUrl = process.env.REDIS_URL;

if (!redisUrl) {
  throw new Error("REDIS_URL is not configured");
}

export const redis = createClient({
  url: redisUrl,
});

redis.on("error", (error: Error) => {
  console.error("Redis error:", error);
});

let connectionPromise: Promise<unknown> | null = null;

export async function connectRedis(): Promise<void> {
  if (redis.isOpen) {
    return;
  }

  if (!connectionPromise) {
    connectionPromise = redis.connect();
  }

  await connectionPromise;
}