alter table public.projects
add column github_connection_id uuid
references public.github_connections(id)
on delete set null;

alter table public.projects
add column github_owner text;

alter table public.projects
add column github_repo text;

alter table public.projects
add column github_branch text not null default 'main';