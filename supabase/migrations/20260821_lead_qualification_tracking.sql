alter table if exists public.leads
  add column if not exists budget text,
  add column if not exists timeline text,
  add column if not exists landing_page text,
  add column if not exists referrer text,
  add column if not exists utm_source text,
  add column if not exists utm_medium text,
  add column if not exists utm_campaign text,
  add column if not exists gclid text;

create index if not exists leads_service_idx on public.leads (service);
create index if not exists leads_source_idx on public.leads (source);
