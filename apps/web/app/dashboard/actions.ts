"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function createProject(formData: FormData) {
  const name = formData.get("name");

  if (typeof name !== "string") {
    throw new Error("Project name is required");
  }

  const trimmedName = name.trim();

  if (!trimmedName) {
    throw new Error("Project name is required");
  }

  if (trimmedName.length > 100) {
    throw new Error("Project name must be 100 characters or less");
  }

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const { error } = await supabase.from("projects").insert({
    user_id: user.id,
    name: trimmedName,
  });

  if (error) {
    console.error("Failed to create project:", error);
    throw new Error("Failed to create project");
  }

  revalidatePath("/dashboard");
}