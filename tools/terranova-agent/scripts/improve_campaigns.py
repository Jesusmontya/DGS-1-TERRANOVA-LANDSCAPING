#!/usr/bin/env python3
"""Turn Meta CSV results into local creative decisions without mutating Meta.

Losers are archived locally, not deleted. Winners receive five hook briefs for owner
review; the script never duplicates an ad set or changes spend.
"""

from __future__ import annotations

import csv
import json
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REPORTS = ROOT / "reportes"
INSIGHTS = REPORTS / "meta_insights.csv"
ARCHIVE = ROOT / "campañas-listas" / "archive"
WINNING_HOOKS = (
    "Free estimate for your outdoor project",
    "Make the yard easier to use this season",
    "From cleanup to a fresh outdoor space",
    "Plan rock, pavers, and landscape work together",
    "Reno-area landscaping built around your property",
)


def percent(value: str) -> float:
    return float(value.strip().replace("%", ""))


def number(value: str) -> float:
    return float(value.strip().replace("$", "").replace(",", ""))


def main() -> int:
    REPORTS.mkdir(parents=True, exist_ok=True)
    ARCHIVE.mkdir(parents=True, exist_ok=True)
    if not INSIGHTS.exists():
        print(f"No insights file at {INSIGHTS}. Expected columns: Creative, CTR, CPC, Leads.")
        return 0

    decisions = []
    with INSIGHTS.open(newline="", encoding="utf-8-sig") as file:
        for row in csv.DictReader(file):
            creative = (row.get("Creative") or row.get("creative") or "unnamed-creative").strip()
            try:
                ctr, cpc, leads = percent(row.get("CTR") or row.get("ctr") or "0"), number(row.get("CPC") or row.get("cpc") or "0"), number(row.get("Leads") or row.get("leads") or "0")
            except ValueError:
                decisions.append({"creative": creative, "action": "needs_clean_data", "row": row})
                continue
            result = {"creative": creative, "ctr_percent": ctr, "cpc": cpc, "leads": leads}
            if ctr < 1:
                result.update({"action": "archive_style_for_review", "reason": "CTR below 1%; no Meta change made"})
            elif ctr > 2:
                result.update({"action": "prepare_five_hook_variations", "reason": "CTR above 2%; owner approval required before any duplication", "hooks": WINNING_HOOKS})
            else:
                result.update({"action": "keep_collecting_data", "reason": "CTR is between 1% and 2%"})
            decisions.append(result)

    report_path = REPORTS / f"daily_{date.today().isoformat()}.md"
    lines = ["# Meta creative decision report", "", "No Meta campaign, budget, or ad was changed by this script.", ""]
    for decision in decisions:
        lines.append(f"- **{decision['creative']}** — `{decision['action']}`. {decision.get('reason', '')}")
        for hook in decision.get("hooks", []):
            lines.append(f"  - Draft hook: {hook}")
    report_path.write_text("\n".join(lines) + "\n")
    (REPORTS / f"campaign_decisions_{date.today().isoformat()}.json").write_text(json.dumps(decisions, indent=2) + "\n")
    print(f"Wrote {len(decisions)} campaign decisions to {report_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
