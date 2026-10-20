#!/usr/bin/env python3
"""Download licensed landscaping references with provenance sidecars.

This script does not certify that an image is a real Reno project or TerraNova work.
It accepts only Pexels/Unsplash photo records, applies conservative metadata heuristics,
and sends every accepted file to a human-review queue.
"""

from __future__ import annotations

import hashlib
import json
import os
import re
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

import requests
from dotenv import load_dotenv

ROOT = Path(__file__).resolve().parents[1]
DESTINATION = ROOT / "fotos-scout-internet"
REPORTS = ROOT / "reportes"
QUERIES = [
    "reno nevada landscaping paver patio",
    "rock retaining wall desert backyard",
    "yard clean up landscaping before after",
    "xeriscaping turf reno sparks",
]
TROPICAL_TERMS = {
    "tropical", "palm", "beach", "ocean", "jungle", "rainforest", "resort",
    "poolside", "hawaii", "caribbean", "florida",
}
SUSPECT_TERMS = {"ai", "generated", "render", "3d", "cgi", "illustration", "concept art"}
RENO_SIGNALS = {"reno", "nevada", "desert", "dry", "rock", "stone", "paver", "xeriscape", "retaining"}


def metadata_text(item: dict[str, Any]) -> str:
    fields = ("alt", "description", "query", "photographer", "location")
    return " ".join(str(item.get(field, "")) for field in fields).lower()


def is_realistic(item: dict[str, Any]) -> tuple[bool, list[str]]:
    """Conservative metadata screen, not an AI detector.

    A visual reviewer must approve every returned image. The result rejects records with
    obvious tropical/render terms, missing provenance, or no downloadable photo URL.
    """
    notes: list[str] = []
    source = item.get("source")
    text = metadata_text(item)
    if source not in {"pexels", "unsplash"}:
        notes.append("unapproved_source")
    if not item.get("download_url") or not item.get("source_url"):
        notes.append("missing_provenance")
    if any(term in text for term in TROPICAL_TERMS):
        notes.append("tropical_context")
    if any(re.search(rf"\\b{re.escape(term)}\\b", text) for term in SUSPECT_TERMS):
        notes.append("possible_render_or_ai_metadata")
    if not any(term in text for term in RENO_SIGNALS):
        notes.append("no_reno_style_signal")
    blockers = {"unapproved_source", "missing_provenance", "tropical_context", "possible_render_or_ai_metadata"}
    return not any(note in blockers for note in notes), notes


def pexels_results(api_key: str, query: str) -> list[dict[str, Any]]:
    response = requests.get(
        "https://api.pexels.com/v1/search",
        params={"query": query, "per_page": 15, "orientation": "landscape"},
        headers={"Authorization": api_key}, timeout=30,
    )
    response.raise_for_status()
    results = []
    for photo in response.json().get("photos", []):
        results.append({
            "source": "pexels", "provider_id": str(photo["id"]), "query": query,
            "alt": photo.get("alt", ""), "photographer": photo.get("photographer", ""),
            "source_url": photo.get("url"), "download_url": photo.get("src", {}).get("large2x"),
            "license_note": "Pexels license; review current terms and attribution requirements before use.",
        })
    return results


def unsplash_results(access_key: str, query: str) -> list[dict[str, Any]]:
    response = requests.get(
        "https://api.unsplash.com/search/photos",
        params={"query": query, "per_page": 15, "orientation": "landscape"},
        headers={"Authorization": f"Client-ID {access_key}"}, timeout=30,
    )
    response.raise_for_status()
    results = []
    for photo in response.json().get("results", []):
        user = photo.get("user", {})
        results.append({
            "source": "unsplash", "provider_id": str(photo["id"]), "query": query,
            "alt": photo.get("alt_description") or photo.get("description") or "",
            "photographer": user.get("name", ""), "source_url": photo.get("links", {}).get("html"),
            "download_url": photo.get("urls", {}).get("regular"),
            "license_note": "Unsplash license; follow API hotlinking/attribution requirements and review current terms before use.",
        })
    return results


def download_candidate(candidate: dict[str, Any]) -> Path | None:
    accepted, notes = is_realistic(candidate)
    if not accepted:
        return None
    response = requests.get(candidate["download_url"], timeout=60)
    response.raise_for_status()
    content_type = response.headers.get("content-type", "")
    if not content_type.startswith("image/") or len(response.content) < 20_000:
        return None
    digest = hashlib.sha256(response.content).hexdigest()[:16]
    extension = {"image/jpeg": ".jpg", "image/png": ".png", "image/webp": ".webp"}.get(content_type.split(";")[0], ".jpg")
    image_path = DESTINATION / f"{candidate['source']}-{candidate['provider_id']}-{digest}{extension}"
    if image_path.exists():
        return image_path
    image_path.write_bytes(response.content)
    sidecar = {
        **candidate, "downloaded_at": datetime.now(timezone.utc).isoformat(), "sha256_prefix": digest,
        "usage": "licensed_illustrative_only", "review_status": "needs_human_review",
        "screening_notes": notes,
        "prohibited_claims": ["TerraNova project", "Reno project", "before/after", "customer work"],
    }
    image_path.with_suffix(image_path.suffix + ".json").write_text(json.dumps(sidecar, indent=2) + "\n")
    return image_path


def main() -> int:
    load_dotenv(ROOT / ".env")
    DESTINATION.mkdir(parents=True, exist_ok=True)
    REPORTS.mkdir(parents=True, exist_ok=True)
    providers = []
    if os.getenv("PEXELS_API_KEY"):
        providers.append(("pexels", pexels_results, os.environ["PEXELS_API_KEY"]))
    if os.getenv("UNSPLASH_ACCESS_KEY"):
        providers.append(("unsplash", unsplash_results, os.environ["UNSPLASH_ACCESS_KEY"]))
    if not providers:
        print("No image API key configured; nothing downloaded.", file=sys.stderr)
        return 0

    downloaded: list[str] = []
    seen: set[tuple[str, str]] = set()
    for query in QUERIES:
        for _, search, key in providers:
            try:
                candidates = search(key, query)
            except requests.RequestException as error:
                print(f"Search failed for {query!r}: {error}", file=sys.stderr)
                continue
            for candidate in candidates:
                identity = (candidate["source"], candidate["provider_id"])
                if identity in seen or len(downloaded) >= 20:
                    continue
                seen.add(identity)
                try:
                    path = download_candidate(candidate)
                except requests.RequestException as error:
                    print(f"Download failed for {identity}: {error}", file=sys.stderr)
                    continue
                if path:
                    downloaded.append(path.name)
            if len(downloaded) >= 20:
                break
        if len(downloaded) >= 20:
            break

    report = REPORTS / f"scout_{datetime.now().date().isoformat()}.json"
    report.write_text(json.dumps({"downloaded": downloaded, "count": len(downloaded), "review_required": True}, indent=2) + "\n")
    print(f"Downloaded {len(downloaded)} licensed illustrative references; human review required.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
