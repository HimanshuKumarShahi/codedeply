"use client";

import { useState } from "react";
import { createDeployment } from "@/app/dashboard/deployments/actions";

type Props = {
  projectId: string;
};

export default function DeployButton({ projectId }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDeploy() {
    setLoading(true);
    setError(null);

    try {
      await createDeployment(projectId);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to create deployment",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={handleDeploy}
        disabled={loading}
        className="rounded-md bg-black px-4 py-2 text-sm text-white disabled:opacity-50"
      >
        {loading ? "Deploying..." : "Deploy"}
      </button>

      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}