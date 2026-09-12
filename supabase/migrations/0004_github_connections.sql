create table public.github_connections (
  id uuid primary key default gen_random_uuid(),

  user_id uuid not null references public.profiles(id) on delete cascade,

  github_user_id bigint not null,
  github_username text not null,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  unique(user_id),
  unique(github_user_id)
);

alter table public.github_connections enable row level security;

create policy "Users can view their own GitHub connection"
on public.github_connections
for select
to authenticated
using (auth.uid() = user_id);

create policy "Users can create their own GitHub connection"
on public.github_connections
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Users can update their own GitHub connection"
on public.github_connections
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Users can delete their own GitHub connection"
on public.github_connections
for delete
to authenticated
using (auth.uid() = user_id);