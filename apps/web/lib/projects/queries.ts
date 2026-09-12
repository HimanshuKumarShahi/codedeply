import { createClient } from "@/lib/supabase/server";

export async function getProjects() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return [];
  }

  const { data, error } = await supabase
    .from("projects")
    .select("id, name, created_at, updated_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch projects:", error);
    throw new Error("Failed to fetch projects");
  }

  return data;
}