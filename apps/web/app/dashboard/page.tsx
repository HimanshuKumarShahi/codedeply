import { redirect } from "next/navigation";
import LogoutButton from "@/components/auth/logout-button";
import CreateProjectForm from "@/components/projects/create-project-form";
import { getProjects } from "@/lib/projects/queries";
import GitHubRepositories from "@/components/projects/github-repositories";
import ProjectCard from "@/components/projects/project-card";
import { createClient } from "@/lib/supabase/server";

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

  return (
    <main className="min-h-screen">
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold">CodeDeploy</h1>

          <LogoutButton />
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">Welcome, {username}</h2>

        <p className="mt-2 text-muted-foreground">Your deployment dashboard</p>

        <div className="mt-8"> <h3 className="text-xl font-semibold"> Projects </h3> <CreateProjectForm /> <GitHubRepositories projects={projects} /> {projects.length === 0 ? ( <div className="mt-8 rounded-xl border border-dashed p-8 text-center"> <p className="font-medium"> No projects yet </p> <p className="mt-2 text-sm text-muted-foreground"> Create your first project above. </p> </div> ) : ( <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3"> {projects.map((project) => ( <ProjectCard key={project.id} project={project} /> ))} </div> )} </div>
      </section>
    </main>
  );
}
