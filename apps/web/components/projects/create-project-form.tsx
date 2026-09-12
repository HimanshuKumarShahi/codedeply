"use client";

import { useState } from "react";
import { createProject } from "@/app/dashboard/actions";
import { Plus, FolderPlus, AlertCircle, Loader2 } from "lucide-react";

export default function CreateProjectForm() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setError(null);
    setLoading(true);

    try {
      await createProject(formData);
      // Reset input form
      const form = document.getElementById("create-project-form") as HTMLFormElement | null;
      form?.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <form
        id="create-project-form"
        action={handleSubmit}
        className="flex items-center gap-2 bg-[#0d1117]/80 border border-white/[0.08] p-1.5 rounded-2xl backdrop-blur-md shadow-inner focus-within:border-violet-500/50 transition-all max-w-md"
      >
        <div className="flex items-center gap-2 pl-3 flex-1">
          <FolderPlus className="w-4 h-4 text-violet-400 shrink-0" />
          <input
            name="name"
            type="text"
            placeholder="e.g. nextjs-cloud-api"
            required
            maxLength={100}
            className="w-full bg-transparent text-sm text-[#f1f5f9] placeholder:text-[#64748b] focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-violet-500/20 hover:shadow-violet-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 shrink-0"
        >
          {loading ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <Plus className="w-3.5 h-3.5" />
          )}
          <span>{loading ? "Creating..." : "New Project"}</span>
        </button>
      </form>

      {error && (
        <div className="flex items-center gap-1.5 text-xs text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-1.5 rounded-xl">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}