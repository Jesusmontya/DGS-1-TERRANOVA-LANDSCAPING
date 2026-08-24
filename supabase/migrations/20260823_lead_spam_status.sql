alter table public.leads
  drop constraint if exists leads_status_check;

alter table public.leads
  add constraint leads_status_check
  check (status in ('new', 'contacted', 'estimate_scheduled', 'estimate_sent', 'won', 'lost', 'spam'));

create index if not exists leads_status_idx on public.leads (status);
