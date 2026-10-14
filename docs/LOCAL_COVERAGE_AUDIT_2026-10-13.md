# Local Coverage Audit — Reno, Sparks, and Nearby Areas

**Review date:** 2026-10-13<br>
**Scope:** Public-site copy and assets in this repository only. No Google Business Profile, ad account, lead, or production changes were made.

## Decision

Do not create or expand public location/service pages from this review. The repository consistently represents Reno and Sparks as TerraNova service areas and lists several nearby communities, but it does not contain owner-confirmed service records or project records with a city, scope, and permission to publish. Existing portfolio photos therefore cannot substantiate a new city-specific page or a new city-plus-service claim.

This is an intentional no-publication outcome: it avoids treating internal site copy as independent proof of coverage.

## Evidence reviewed

| Evidence | What it establishes | Limitation |
| --- | --- | --- |
| `components/ServiceAreaMap.tsx` | The current site calls Reno, Sparks, Sun Valley, Verdi, Washoe County, Lake Tahoe / Incline Village, and Spanish Springs the typical service area. The checker already asks visitors to confirm availability by property and scope. | This is an existing site assertion, not an owner record or project-location record. |
| `app/landscaping-reno-nv/page.tsx` | Reno is the primary landscaping page. Its service list and quote form establish the services currently marketed by the site. | Portfolio images are labeled as Northern Nevada or TerraNova work, not as Reno projects. |
| `app/locations/sparks/page.tsx` | Sparks has an existing location page, service schema, a quote path, and explicit scope/scheduling qualification. | The page says Sparks-specific project details still need to be verified before they are labeled by location and scope. |
| `app/page.tsx` | The home page presents the current service categories and shows actual cleanup imagery. | It does not tie any photo or completed job to a city. |
| `app/locations/verdi/page.tsx` and `app/locations/lake-tahoe/page.tsx` | Existing nearby-area pages expressly state that location-specific projects must be verified before being labeled. | Those statements confirm the absence of locality-level project evidence in this repository. |
| `docs/PROJECT_CONTEXT.md` and `AGENTS.md` | The project requires evidence-backed local work, prioritizes relevant existing pages, and requires owner confirmation for new claims. | No owner-confirmed coverage/project source is included in the repository. |

## Coverage matrix

Status labels:

- **Existing claim only:** present in current public copy, but not independently verified by repository records.
- **Do not expand:** no new page, new city/service combination, or stronger public claim from this audit.
- **Confirm per project:** retain the existing scope/scheduling qualification where it already appears.

| Area | Current repository treatment | Project-location evidence in repository | Audit decision |
| --- | --- | --- | --- |
| Reno | Primary landscaping page and home-page service focus. | Portfolio is described generally; no city-tagged project record was found. | Existing claim only; do not create additional Reno service pages from this audit. Improve an existing page only after owner-confirmed service/project evidence is supplied. |
| Sparks | Dedicated `/locations/sparks` page, service schema, home-page and service-area mentions. | No Sparks-tagged project record was found; the page explicitly defers location labels pending verification. | Existing claim only; keep the current page and its availability qualification. Do not add Sparks service pages or label portfolio work as Sparks. |
| Sun Valley | Listed in the service-area component and checker. | None found. | Do not create a page or add city-specific service copy. |
| Spanish Springs | Accepted by the service-area checker and named in its map caption. | None found. | Do not create a page or add city-specific service copy. |
| Verdi | Existing location page and service-area mention. | No Verdi-tagged project record was found; the page explicitly says location details still need verification. | Do not expand or create service pages. |
| Washoe County | Existing umbrella-area mention and schema value. | No project record tied to the county was found. | Keep as an umbrella claim only; do not use it to imply universal availability. |
| Lake Tahoe / Incline Village | Existing location page and service-area mention. | No Tahoe- or Incline-tagged project record was found; the page explicitly requires location and scope verification. | Do not expand or create service pages. |

## Services supported by current site implementation

The live site currently markets backyard/landscape design, pavers, concrete, hardscape, retaining walls, fencing, artificial turf, xeriscaping, irrigation, masonry, seasonal yard cleanup, and snow cleanup. These are implementation-level claims visible in the current service cards and quote-form options; they are not a basis for adding a new city/service page without the locality evidence below.

## Required evidence before any future local-page change

For each proposed city/service claim, obtain and retain all of the following before editing public copy:

1. Owner confirmation that TerraNova currently accepts that service in that city, including any scope or seasonal limits.
2. At least one completed project record for the city: city (not necessarily street address), service scope, completion timing, and approval to describe or show it publicly.
3. Photo provenance for any image used: project association, consent/usage approval, and an accurate caption. Do not infer the city from landscape appearance.
4. The exact existing page that should be improved. Prefer that page over a new route unless the evidence supports a distinct, useful local intent.
5. A final review of title, H1, canonical URL, schema, internal links, and the estimate path; keep availability qualified when it depends on scope or scheduling.

## Follow-up recommendation

When the required evidence is available, start with a small update to the existing Reno or Sparks page rather than creating a new route. A suitable update would identify a verified local project by city and scope without publishing a customer address or personal information. Re-run this audit before adding any nearby-area page.

## Rollback

This change adds internal documentation only. Reverting the commit that adds this file fully restores the previous repository state; no public page, lead handling, analytics, or deployment configuration changed.
