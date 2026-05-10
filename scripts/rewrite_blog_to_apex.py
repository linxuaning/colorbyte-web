#!/usr/bin/env python3
"""
Rewrite /blog/artimagehub-vs-{remini,myheritage,photomyne,vivid-pix,yodayo}
→ /artimagehub-vs-{remini,myheritage,photomyne,vivid-pix,yodayo}

Scope: per founder 5-10 trigger after seo agent shipped 8 apex comparison
pages (d894965 + 35dbc89 + fed265d + 869f80c). Only the 5 slugs above have
apex equivalents LIVE in main; other vs-* slugs (adobe-*, topaz-*,
deep-nostalgia, etc.) keep /blog/* until their apex pages exist.

Idempotent: safe to re-run, no-op on already-rewritten files.

Patterns rewritten (with word boundary to avoid clobbering similar slugs):
  /blog/artimagehub-vs-remini       (NOT artimagehub-vs-remini-app)
  /blog/artimagehub-vs-myheritage
  /blog/artimagehub-vs-photomyne
  /blog/artimagehub-vs-vivid-pix
  /blog/artimagehub-vs-yodayo

Word boundary = next char must be NON-slug (e.g., ), ], /, ", whitespace, EOL).
"""
import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
SRC = REPO / "src"

# Slugs that have LIVE apex versions per founder 5-10 trigger
APEX_SLUGS = ["remini", "myheritage", "photomyne", "vivid-pix", "yodayo"]

# Build regex: /blog/artimagehub-vs-(slug) followed by non-slug char + non-dot
# Slug-char = [a-z0-9-]; exclude dot to avoid clobbering image paths like
# `/blog/artimagehub-vs-remini.webp` (lives in /public/blog/, NOT /public/)
SLUG_PATTERNS = [
    (re.compile(rf"/blog/artimagehub-vs-{slug}(?![a-z0-9.-])"), f"/artimagehub-vs-{slug}")
    for slug in APEX_SLUGS
]


def rewrite_file(path: Path) -> tuple[int, list[str]]:
    """Return (count_changes, sample_changes_for_log)."""
    text = path.read_text()
    new_text = text
    total = 0
    samples = []
    for pat, repl in SLUG_PATTERNS:
        matches = list(pat.finditer(new_text))
        if matches:
            for m in matches[:2]:  # log up to 2 samples
                samples.append(f"  - '{m.group(0)}' → '{repl}'")
            total += len(matches)
            new_text = pat.sub(repl, new_text)
    if total > 0:
        path.write_text(new_text)
    return total, samples


def main():
    # Find all candidate files
    candidates = []
    for ext in ("*.md", "*.tsx", "*.ts"):
        candidates.extend(SRC.rglob(ext))

    total_files = 0
    total_changes = 0
    for path in sorted(candidates):
        # Quick filter: skip if no /blog/artimagehub-vs- substring
        text = path.read_text()
        if "/blog/artimagehub-vs-" not in text:
            continue
        # Quick filter: skip if none of our 5 apex slugs present
        if not any(f"/blog/artimagehub-vs-{s}" in text for s in APEX_SLUGS):
            continue
        n, samples = rewrite_file(path)
        if n > 0:
            total_files += 1
            total_changes += n
            rel = path.relative_to(REPO)
            print(f"REWRITE  {rel}  ({n} occurrences)")
            for s in samples[:1]:  # print 1 sample per file to keep log readable
                print(s)

    print(f"\nTotal: {total_files} files, {total_changes} occurrences rewritten")


if __name__ == "__main__":
    main()
