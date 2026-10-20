#!/usr/bin/env python3
"""Create Bloom MCP overlay jobs from real, provenance-tracked source photos.

Bloom is never asked to create or replace the base photo. It receives a local source
path plus text-overlay directions only. Without --execute-bloom, this script writes
reviewable job manifests and does not make any network call to Bloom.
"""

from __future__ import annotations

import argparse
import base64
import json
import os
import sys
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Any

import requests
from dotenv import load_dotenv

ROOT = Path(__file__).resolve().parents[1]
CLIENT_PHOTOS = ROOT / "fotos-reales-cliente"
SCOUT_PHOTOS = ROOT / "fotos-scout-internet"
OUTPUT = ROOT / "campañas-listas"
REPORTS = ROOT / "reportes"
SIZES = {"1080x1080": (1080, 1080), "1080x1920": (1080, 1920), "1200x628": (1200, 628)}


@dataclass(frozen=True)
class Template:
    slug: str
    text: str
    requires_client_photo: bool = False


TEMPLATES = (
    Template("yard-clean-ups", "YARD CLEAN UPS • DEBRIS REMOVAL • WEED CONTROL • TREE & SHRUB REMOVAL • CLEAN FRESH LOOK • BEFORE/AFTER", True),
    Template("rock-work", "ROCK WORK - Retaining Walls - Boulders - Custom Designs"),
    Template("pavers", "PAVERS & CONCRETE - From Simple Upgrades To Full Transformations"),
    Template("offer", "Projects $1,000-$10,000 • FREE ESTIMATES"),
)
BRAND = {"name": "TERRA NOVA", "background": "#000000", "accent": "#7ED957", "phone": "775-870-7224", "service_area": "Reno • Sparks • Verdi • Washoe", "mark": "mountain logo"}


def sidecar_for(path: Path) -> dict[str, Any]:
    metadata_path = path.with_suffix(path.suffix + ".json")
    if metadata_path.exists():
        return json.loads(metadata_path.read_text())
    if path.parent == CLIENT_PHOTOS:
        return {"usage": "client_owned", "review_status": "needs_human_review", "source": "client_owned"}
    return {"usage": "unknown", "review_status": "blocked", "source": "unknown"}


def photo_candidates() -> list[tuple[Path, dict[str, Any]]]:
    candidates: list[tuple[Path, dict[str, Any]]] = []
    for folder in (CLIENT_PHOTOS, SCOUT_PHOTOS):
        for path in sorted(folder.glob("*")):
            if path.suffix.lower() not in {".jpg", ".jpeg", ".png", ".webp"}:
                continue
            metadata = sidecar_for(path)
            if metadata.get("review_status") == "approved":
                candidates.append((path, metadata))
    return candidates


def select_source(template: Template, candidates: list[tuple[Path, dict[str, Any]]], offset: int) -> tuple[Path, dict[str, Any]] | None:
    eligible = [(path, meta) for path, meta in candidates if not template.requires_client_photo or meta.get("usage") == "client_owned"]
    return eligible[offset % len(eligible)] if eligible else None


def job_payload(source: Path, source_metadata: dict[str, Any], template: Template, size_name: str) -> dict[str, Any]:
    width, height = SIZES[size_name]
    return {
        "operation": "text_overlay_only",
        "source_image_path": str(source),
        "source_image_sha256_prefix": source_metadata.get("sha256_prefix"),
        "source_usage": source_metadata.get("usage"),
        "template": template.slug,
        "canvas": {"width": width, "height": height},
        "brand": BRAND,
        "copy": template.text,
        "constraints": [
            "Do not generate, replace, retouch, expand, or alter the base photograph.",
            "Apply only text, brand color blocks, phone number, service area, and a mountain-logo placeholder.",
            "Keep the source photo visibly intact and leave its content unaltered.",
        ],
    }


def call_bloom(job: dict[str, Any], destination: Path) -> None:
    """Call a configurable MCP JSON-RPC tool and save an image result.

    The exact tool name is account-specific. This adapter fails loudly instead of
    silently falling back to AI image generation or local photo alteration.
    """
    endpoint = os.environ["BLOOM_MCP_URL"]
    tool_name = os.getenv("BLOOM_OVERLAY_TOOL", "add_text_overlay")
    source_bytes = Path(job["source_image_path"]).read_bytes()
    arguments = {**job, "source_image_base64": base64.b64encode(source_bytes).decode("ascii")}
    payload = {"jsonrpc": "2.0", "id": destination.stem, "method": "tools/call", "params": {"name": tool_name, "arguments": arguments}}
    response = requests.post(endpoint, json=payload, timeout=120)
    response.raise_for_status()
    body = response.json()
    if body.get("error"):
        raise RuntimeError(body["error"])
    result = body.get("result", {})
    image_base64 = result.get("image_base64")
    image_url = result.get("image_url")
    if image_base64:
        destination.write_bytes(base64.b64decode(image_base64))
    elif image_url:
        image = requests.get(image_url, timeout=120)
        image.raise_for_status()
        destination.write_bytes(image.content)
    else:
        raise RuntimeError("Bloom response did not contain image_base64 or image_url")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--execute-bloom", action="store_true", help="Send reviewed overlay jobs to Bloom MCP.")
    args = parser.parse_args()
    load_dotenv(ROOT / ".env")
    for folder in (CLIENT_PHOTOS, SCOUT_PHOTOS, OUTPUT, REPORTS):
        folder.mkdir(parents=True, exist_ok=True)
    candidates = photo_candidates()
    if not candidates:
        print("No approved source photos. Mark sidecar review_status as approved before generating ads.", file=sys.stderr)
        return 0

    created: list[str] = []
    skipped: list[str] = []
    for index, template in enumerate(TEMPLATES):
        selected = select_source(template, candidates, index)
        if not selected:
            skipped.append(f"{template.slug}: requires approved client-owned photo")
            continue
        source, metadata = selected
        for size_name in SIZES:
            folder = OUTPUT / size_name
            folder.mkdir(parents=True, exist_ok=True)
            stem = f"{datetime.now().date().isoformat()}-{template.slug}-{size_name}"
            job = job_payload(source, metadata, template, size_name)
            manifest = folder / f"{stem}.json"
            manifest.write_text(json.dumps({"approved": False, "status": "draft", "job": job}, indent=2) + "\n")
            if args.execute_bloom:
                try:
                    call_bloom(job, folder / f"{stem}.png")
                except (requests.RequestException, RuntimeError, ValueError) as error:
                    manifest.write_text(json.dumps({"approved": False, "status": "bloom_failed", "error": str(error), "job": job}, indent=2) + "\n")
                    skipped.append(f"{stem}: {error}")
                    continue
            created.append(str(manifest.relative_to(ROOT)))

    report = REPORTS / f"generate_ads_{datetime.now().date().isoformat()}.json"
    report.write_text(json.dumps({"created_drafts": created, "skipped": skipped, "bloom_executed": args.execute_bloom}, indent=2) + "\n")
    print(f"Prepared {len(created)} reviewable overlay jobs; Bloom executed: {args.execute_bloom}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
