"use client";

import { useState } from "react";
import { deleteProject } from "@/app/dashboard/projects/actions";

type Props = {
  projectId: string;
};

export default function DeleteProjectButton({
  projectId,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project? This will also delete its deployments and logs.",
    );

    if (!confirmed) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await deleteProject(projectId);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to delete project",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={handleDelete}
        disabled={loading}
        className="rounded-md border border-red-200 px-4 py-2 text-sm text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Deleting..." : "Delete Project"}
      </button>

      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}