"use client";

import { useState } from "react";
import { createProject } from "@/app/dashboard/actions";

export default function CreateProjectForm() {
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setError(null);

    try {
      await createProject(formData);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong",
      );
    }
  }

  return (
    <form action={handleSubmit} className="mt-6 flex max-w-md gap-2">
      <input
        name="name"
        type="text"
        placeholder="my-project"
        required
        maxLength={100}
        className="flex-1 rounded-md border px-3 py-2 text-sm"
      />

      <button
        type="submit"
        className="rounded-md bg-black px-4 py-2 text-sm text-white"
      >
        Create
      </button>

      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}
    </form>
  );
}