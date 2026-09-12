"use client";

import { useState } from "react";
import { disconnectGitHubRepository } from "@/app/dashboard/github/connect-action";

type Props = {
  projectId: string;
};

export default function DisconnectGitHubButton({
  projectId,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDisconnect() {
    const confirmed = window.confirm(
      "Disconnect this GitHub repository from the project?",
    );

    if (!confirmed) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await disconnectGitHubRepository(projectId);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to disconnect repository",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleDisconnect}
        disabled={loading}
        className="rounded-md border px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading
          ? "Disconnecting..."
          : "Disconnect Repository"}
      </button>

      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}