create table public.deployments (
  id uuid primary key default gen_random_uuid(),

  project_id uuid not null
    references public.projects(id)
    on delete cascade,

  status text not null default 'queued'
    check (status in (
      'queued',
      'building',
      'ready',
      'failed'
    )),

  commit_sha text,
  branch text,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.deployments enable row level security;

create policy "Users can view deployments of their own projects"
on public.deployments
for select
to authenticated
using (
  exists (
    select 1
    from public.projects
    where projects.id = deployments.project_id
      and projects.user_id = auth.uid()
  )
);

create policy "Users can create deployments for their own projects"
on public.deployments
for insert
to authenticated
with check (
  exists (
    select 1
    from public.projects
    where projects.id = deployments.project_id
      and projects.user_id = auth.uid()
  )
);