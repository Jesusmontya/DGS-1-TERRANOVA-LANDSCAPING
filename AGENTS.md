# TerraNova Landscaping Website

## Start here

- Read `docs/PROJECT_CONTEXT.md` before changing public pages, SEO, lead capture, or analytics.
- This repository is the public TerraNova Landscaping website. The internal recommendation queue lives in the separate DevGroup Studio control-center repository.

## Safety and publishing

- Never expose, commit, log, or copy credentials, private keys, or customer/personal data.
- Keep all public claims, service coverage, project imagery, and testimonials truthful and supportable.
- Do not create doorway pages, keyword stuffing, fake reviews, synthetic traffic, fake leads, or spammy backlinks.
- A branch/PR is not permission to deploy. Do not publish production changes, change ad spend, or contact leads unless the user explicitly asks for that specific external action.

## Development

- Install dependencies with `npm install`.
- Validate relevant changes with `npm run build` before committing.
- Preserve existing lead-form validation, anti-spam behavior, and server-side handling.
- Put database changes in a new ordered migration under `supabase/migrations/`; never edit an applied migration.

## SEO work

- Prefer improving the most relevant existing page over creating near-duplicate location/service pages.
- Use a clear search intent, helpful local detail, internal links, a visible call to action, and accurate metadata.
- Verify the final rendered page, title, heading structure, canonical behavior, and lead path before proposing a PR.
