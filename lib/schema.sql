-- Tabla de leads
create table if not exists leads (
  id          uuid default gen_random_uuid() primary key,
  created_at  timestamptz default now(),
  name        text not null,
  phone       text not null,
  email       text,
  city        text not null,
  service     text not null,
  message     text,
  status      text default 'new' check (status in ('new','contacted','quoted','closed','lost')),
  source      text default 'website' check (source in ('website','google_ads','maps','referral'))
);

-- Index para ordenar por fecha
create index if not exists leads_created_at_idx on leads(created_at desc);

-- Index para filtrar por status
create index if not exists leads_status_idx on leads(status);

-- Row Level Security
alter table leads enable row level security;

-- Solo el service role puede leer y escribir (API routes)
create policy "Service role full access"
  on leads
  using (true)
  with check (true);
