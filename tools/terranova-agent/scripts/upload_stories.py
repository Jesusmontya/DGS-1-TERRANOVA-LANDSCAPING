#!/usr/bin/env python3
"""Create or publish reviewed Instagram-story candidates through Meta Graph API.

Stories require a public image URL. Interactive location and sticker capability varies
by API/version/account, so this script does not falsely claim to add them.
"""

from __future__ import annotations

import argparse
import json
import os
from datetime import datetime, timezone
from pathlib import Path

import requests
from dotenv import load_dotenv

ROOT = Path(__file__).resolve().parents[1]
STORIES = ROOT / "campañas-listas" / "1080x1920"
REPORTS = ROOT / "reportes"
GRAPH_API = "https://graph.facebook.com/v22.0"


def eligible_manifests() -> list[Path]:
    manifests = []
    for manifest in sorted(STORIES.glob("*.json"), reverse=True):
        data = json.loads(manifest.read_text())
        job = data.get("job", {})
        if data.get("approved") is True and job.get("source_usage") == "client_owned":
            image = manifest.with_suffix(".png")
            if image.exists():
                manifests.append(manifest)
    return manifests[:3]


def public_image_url(image: Path) -> str:
    base = os.environ.get("PUBLIC_ASSET_BASE_URL", "").rstrip("/")
    if not base:
        raise RuntimeError("PUBLIC_ASSET_BASE_URL is required by Meta for local image assets")
    return f"{base}/{image.name}"


def publish_story(image: Path) -> str:
    token = os.environ["META_ACCESS_TOKEN"]
    ig_user = os.environ["IG_USER_ID"]
    create = requests.post(f"{GRAPH_API}/{ig_user}/media", data={"image_url": public_image_url(image), "media_type": "STORIES", "access_token": token}, timeout=60)
    create.raise_for_status()
    container_id = create.json().get("id")
    if not container_id:
        raise RuntimeError("Meta did not return a story container id")
    publish = requests.post(f"{GRAPH_API}/{ig_user}/media_publish", data={"creation_id": container_id, "access_token": token}, timeout=60)
    publish.raise_for_status()
    return str(publish.json().get("id", "published"))


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--publish", action="store_true", help="Publish only when ALLOW_META_PUBLISH=true and reviewed assets are available.")
    parser.add_argument("--dry-run", action="store_true", help="Print planned story candidates without network writes.")
    args = parser.parse_args()
    load_dotenv(ROOT / ".env")
    REPORTS.mkdir(parents=True, exist_ok=True)
    manifests = eligible_manifests()
    result = {"timestamp": datetime.now(timezone.utc).isoformat(), "selected": [path.name for path in manifests], "published": [], "notes": ["Location Reno and FREE ESTIMATE sticker are not asserted because Graph API support must be verified for the connected account."]}
    if not manifests:
        result["notes"].append("No approved client-owned 1080x1920 story assets found.")
    elif args.publish and not args.dry_run:
        if os.getenv("ALLOW_META_PUBLISH", "false").lower() != "true":
            result["notes"].append("Publishing blocked: ALLOW_META_PUBLISH is not true.")
        elif not os.getenv("META_ACCESS_TOKEN") or not os.getenv("IG_USER_ID"):
            result["notes"].append("Publishing blocked: missing Meta credentials.")
        else:
            for manifest in manifests:
                try:
                    result["published"].append({"asset": manifest.with_suffix(".png").name, "id": publish_story(manifest.with_suffix(".png"))})
                except (requests.RequestException, RuntimeError) as error:
                    result["notes"].append(f"{manifest.name}: {error}")
    else:
        result["notes"].append("Dry run only; no Meta API write requested.")
    report = REPORTS / f"stories_{datetime.now().date().isoformat()}.json"
    report.write_text(json.dumps(result, indent=2) + "\n")
    print(json.dumps(result, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
