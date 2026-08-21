alter table if exists public.leads
  add column if not exists status text not null default 'new',
  add column if not exists estimated_value numeric,
  add column if not exists notes text,
  add column if not exists first_contacted_at timestamptz,
  add column if not exists updated_at timestamptz not null default now();

update public.leads
set status = 'new'
where status is null or status = '';

alter table public.leads
  drop constraint if exists leads_status_check;

alter table public.leads
  add constraint leads_status_check
  check (status in ('new', 'contacted', 'estimate_scheduled', 'estimate_sent', 'won', 'lost'));

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);
