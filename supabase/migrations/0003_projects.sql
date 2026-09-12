create table public.projects (
  id uuid primary key default gen_random_uuid(),

  user_id uuid not null references public.profiles(id) on delete cascade,

  name text not null,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.projects enable row level security;

create policy "Users can view their own projects"
on public.projects
for select
to authenticated
using (auth.uid() = user_id);

create policy "Users can create their own projects"
on public.projects
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Users can update their own projects"
on public.projects
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Users can delete their own projects"
on public.projects
for delete
to authenticated
using (auth.uid() = user_id);