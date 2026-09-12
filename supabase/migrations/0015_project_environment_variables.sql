create table public.project_environment_variables (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  key text not null,
  value text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  unique (project_id, key)
);

alter table public.project_environment_variables
enable row level security;

create policy "Users can view their own project environment variables"
on public.project_environment_variables
for select
to authenticated
using (
  exists (
    select 1
    from public.projects
    where projects.id = project_environment_variables.project_id
      and projects.user_id = auth.uid()
  )
);

create policy "Users can create their own project environment variables"
on public.project_environment_variables
for insert
to authenticated
with check (
  exists (
    select 1
    from public.projects
    where projects.id = project_environment_variables.project_id
      and projects.user_id = auth.uid()
  )
);

create policy "Users can update their own project environment variables"
on public.project_environment_variables
for update
to authenticated
using (
  exists (
    select 1
    from public.projects
    where projects.id = project_environment_variables.project_id
      and projects.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.projects
    where projects.id = project_environment_variables.project_id
      and projects.user_id = auth.uid()
  )
);

create policy "Users can delete their own project environment variables"
on public.project_environment_variables
for delete
to authenticated
using (
  exists (
    select 1
    from public.projects
    where projects.id = project_environment_variables.project_id
      and projects.user_id = auth.uid()
  )
);