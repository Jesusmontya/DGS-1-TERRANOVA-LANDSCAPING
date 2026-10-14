# TerraNova Landscaping Website — Project Context

## Purpose

This is the public marketing and lead-capture website for TerraNova Landscaping. Its role in the growth system is to earn qualified local organic visits and convert interested visitors into legitimate estimate requests.

## Related systems

- Public-site source repository: `Jesusmontya/DGS-1-TERRANOVA-LANDSCAPING`.
- Internal operations console: `Jesusmontya/terranova-menuready-snapshot`, at `https://www.devgroupstudio.xyz/terranova`.
- The console reads Search Console and GA4 signals and produces approval-gated improvement tasks for this repository.
- A task approved in the console still requires a reviewed website PR. It never automatically edits or deploys this site.

## Organic-growth operating model

1. Search Console identifies real queries, impressions, clicks, CTR, and ranking opportunities.
2. GA4 helps identify which pages and paths lead to estimate requests.
3. The console proposes a small, evidence-backed improvement.
4. A person approves the task and gives Codex its generated website-PR prompt.
5. Codex makes only the scoped, truthful site change, validates it, and opens a PR.
6. A human reviews and merges; performance is measured in later scans.

This process optimizes for qualified demand. It does not promise rankings or generate artificial visitors.

## Current priorities (2026-10-13)

- Improve relevant existing pages for local landscaping and landscape-design intent in the Reno/Sparks service area when evidence supports it.
- Improve page titles, primary headings, local service copy, internal links, FAQs, and estimate-request calls to action before creating new pages.
- Review the conversion baseline: the lead form must remain usable, trustworthy, and protected from spam.
- Review service-area coverage only where the business genuinely serves those locations.

## Technical expectations

- Next.js application; use `npm run build` as the baseline validation.
- Lead forms and analytics are production-sensitive. Keep anti-spam controls and event semantics intact unless a task explicitly changes them.
- Use real project photos and accurate service information; confirm any new claims with the owner before publication.

## Fast handoff prompt

Use this at the start of a fresh Codex chat:

> Read `AGENTS.md` and `docs/PROJECT_CONTEXT.md`. Implement only the approved TerraNova website task, preserve truthful local SEO and lead-form safety, validate with `npm run build`, and prepare a PR without publishing it.
