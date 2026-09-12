create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (
    id,
    username,
    full_name,
    avatar_url
  )
  values (
    new.id,
    new.raw_user_meta_data ->> 'user_name',
    new.raw_user_meta_data ->> 'full_name',
    new.raw_user_meta_data ->> 'avatar_url'
  );

  return new;
end;
$$;

-- Backfill the existing user's username.
update public.profiles p
set username = u.raw_user_meta_data ->> 'user_name',
    full_name = u.raw_user_meta_data ->> 'full_name',
    avatar_url = u.raw_user_meta_data ->> 'avatar_url',
    updated_at = now()
from auth.users u
where p.id = u.id
  and p.username is null;