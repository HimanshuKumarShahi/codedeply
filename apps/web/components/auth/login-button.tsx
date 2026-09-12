"use client";

import { createClient } from "@/lib/supabase/client";

export default function LoginButton() {
  const supabase = createClient();

  async function signInWithGitHub() {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  }

  return (
    <button
      type="button"
      onClick={signInWithGitHub}
      className="rounded-md bg-black px-4 py-2 text-white"
    >
      Continue with GitHub
    </button>
  );
}