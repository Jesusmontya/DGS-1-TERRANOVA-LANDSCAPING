# TerraNova creative-operations scaffold

This scaffold keeps creative sourcing, creative preparation, campaign analysis, and story publishing separate from the public website. It does not publish a site, change an ad account, or post to Instagram unless the matching safety flag is explicitly enabled.

## Setup

```bash
cd tools/terranova-agent
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
```

Add API keys to `.env`; never commit that file. The requested minimum variables are `PEXELS_API_KEY`, `UNSPLASH_ACCESS_KEY`, `META_ACCESS_TOKEN`, `META_AD_ACCOUNT_ID`, `IG_USER_ID`, and `BLOOM_MCP_URL`.

## Source-of-truth rules

- Use `fotos-reales-cliente/` for claims that an image shows TerraNova work, a Reno project, an installed feature, or a before/after.
- Files downloaded into `fotos-scout-internet/` are licensed illustrative references. Their JSON sidecars retain source URLs and must not be described as TerraNova work.
- No automated classifier can prove an image is not AI. The scout creates a human-review queue instead of certifying an image as real.
- A creative is eligible for Instagram publishing only when its manifest says `approved: true` and its source is `client_owned`.

## Run the workflow

```bash
python3 scripts/scout_real_images.py
python3 scripts/generate_ads.py
python3 scripts/improve_campaigns.py
python3 scripts/upload_stories.py --dry-run
```

`upload_stories.py` is deliberately dry-run by default. The Meta Graph API requires a public asset URL; set `PUBLIC_ASSET_BASE_URL` and `ALLOW_META_PUBLISH=true` only for a reviewed, owner-approved publishing run. Location and interactive sticker support must be confirmed for the connected Meta account before publishing; the script will not claim to add them when the API cannot.

The owner-requested supervisor command is:

```bash
codex --agent terranova --loop
```

Run it only from an environment where the `terranova` agent configuration exists. This repository does not install or configure Codex globally.

## Reports and rollback

Scripts write manifests and daily decisions to `reportes/`. They archive losing creative locally instead of deleting it. Remove a generated asset or revert the scaffold commit to roll back; no website, campaign, or story is changed by default.
