import { redirect } from "next/navigation";
import LogoutButton from "@/components/auth/logout-button";
import CreateProjectForm from "@/components/projects/create-project-form";
import { getProjects } from "@/lib/projects/queries";
import GitHubRepositories from "@/components/projects/github-repositories";
import ProjectCard from "@/components/projects/project-card";
import { createClient } from "@/lib/supabase/server";
import DashboardSidebar from "@/components/layout/dashboard-sidebar";
import { Rocket, FolderOpen, Clock } from "lucide-react";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/");
  }

  const username =
    user.user_metadata?.user_name ??
    user.user_metadata?.preferred_username ??
    "GitHub user";

  const projects = await getProjects();

  const lastProject = projects[0];
  const lastDeployDate = lastProject
    ? new Date(lastProject.created_at).toLocaleDateString("en-IN", {
        timeZone: "Asia/Kolkata",
        month: "short",
        day: "numeric",
      })
    : "—";

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <DashboardSidebar username={username} />

      {/* Main content — offset by sidebar width on md+ */}
      <div className="flex-1 flex flex-col min-w-0 md:pl-[240px]">
        {/* Top header */}
        <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-background/80 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <h1 className="text-xl font-semibold text-[#f1f5f9]">Dashboard</h1>
              <p className="text-sm text-[#64748b]">Welcome back, {username}</p>
            </div>
            <LogoutButton />
          </div>
        </header>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-6 py-6">
          {/* Total projects */}
          <div className="rounded-2xl border border-white/[0.07] bg-[#0d1117]/80 backdrop-blur-sm p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-600/20 border border-violet-500/20 flex items-center justify-center shrink-0">
              <FolderOpen className="h-5 w-5 text-violet-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#f1f5f9]">{projects.length}</p>
              <p className="text-xs text-[#64748b] mt-0.5">Total Projects</p>
            </div>
          </div>

          {/* Active deployments (placeholder — shown as 0 if no live logic) */}
          <div className="rounded-2xl border border-white/[0.07] bg-[#0d1117]/80 backdrop-blur-sm p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center shrink-0">
              <Rocket className="h-5 w-5 text-cyan-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#f1f5f9]">{projects.length > 0 ? "—" : "0"}</p>
              <p className="text-xs text-[#64748b] mt-0.5">Active Deployments</p>
            </div>
          </div>

          {/* Last deploy */}
          <div className="rounded-2xl border border-white/[0.07] bg-[#0d1117]/80 backdrop-blur-sm p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-600/20 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <Clock className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#f1f5f9]">{lastDeployDate}</p>
              <p className="text-xs text-[#64748b] mt-0.5">Last Project Created</p>
            </div>
          </div>
        </div>

        {/* Projects section */}
        <section className="px-6 pb-8">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div>
              <h2 className="text-lg font-semibold text-[#f1f5f9]">Your Projects</h2>
              <p className="text-sm text-[#64748b]">{projects.length} project{projects.length !== 1 ? "s" : ""}</p>
            </div>
            <CreateProjectForm />
          </div>

          <GitHubRepositories projects={projects} />

          {projects.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-dashed border-white/[0.08] bg-[#0d1117]/40 p-12 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-indigo-600/20 border border-violet-500/20 flex items-center justify-center mb-5">
                <Rocket className="h-8 w-8 text-violet-400" />
              </div>
              <h3 className="text-lg font-semibold text-[#f1f5f9] mb-2">No projects yet</h3>
              <p className="text-sm text-[#64748b] max-w-sm">
                Create your first project to start deploying. It only takes a few seconds to get up and running.
              </p>
            </div>
          ) : (
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
