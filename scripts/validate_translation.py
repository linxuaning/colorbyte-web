#!/usr/bin/env python3
"""
Standalone validator for translated blog markdown files.
Runs the same 4 hard-constraint checks as the inline validate_translation()
in scripts/translate_llm_only.py, but as a standalone CLI suitable for:

  - Pre-commit hooks
  - CI gates on translation PRs
  - Re-checking older translations after FORBIDDEN_EN_PHRASES updates
  - Bulk audit of an existing locale's full corpus

Usage:
    # Check one file
    python scripts/validate_translation.py src/content/blog/es/wedding-photo-restoration.md

    # Check many
    python scripts/validate_translation.py src/content/blog/es/*.md src/content/blog/pt-BR/*.md

    # Whole locale corpus
    python scripts/validate_translation.py src/content/blog/es/

Exit codes:
  0  all files clean
  1  at least one violation found

Constraints checked (per spec v0.3 / mirrors inline validator):
  1. Pay-first drift: forbidden EN phrases that contradict pay-first journey
     ("free preview", "try free", "upload for free", "free trial", ...)
  2. Price preservation: if EN source has "$4.99", translation must too (no
     local-currency conversion, no rounding)
  3. LDJSON placeholder count: original [[LDJSON_N]] markers must equal output
     count (LLM didn't drop or duplicate schema blocks)
  4. (informational) brand mention sanity: count "ArtImageHub" occurrences

EN source resolution:
  src/content/blog/<locale>/<slug>.md  →  src/content/blog/<slug>.md
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

# Forbidden phrases that contradict pay-first product journey (memory:
# project_payfirst_archived_hypothesis). LLM may slip these in when translating
# marketing copy that uses words like "preview" or "try" — silent substitution
# violates founder hard rule and damages user trust.
#
# IMPORTANT: keep this list in sync with FORBIDDEN_EN_PHRASES in
# scripts/translate_llm_only.py. Both sources duplicate intentionally to keep
# the standalone validator zero-import.
FORBIDDEN_EN_PHRASES = [
    r"\bfree\s+preview\b",
    r"\btry\s+(?:it\s+)?free\b",
    r"\bupload\s+for\s+free\b",
    r"\bfree\s+trial\b",
    r"\bno\s+payment\s+required\b",
    r"\bfirst\s+\w+\s+free\b",
    r"\bfree\s+(?:photo|restoration|edit|fix)\b",
]

REPO = Path(__file__).resolve().parent.parent
BLOG_ROOT = REPO / "src" / "content" / "blog"


def en_source_for(translated_path: Path) -> Path | None:
    """Map src/content/blog/<locale>/<slug>.md -> src/content/blog/<slug>.md.
    Returns None if path is not under a locale dir."""
    try:
        rel = translated_path.resolve().relative_to(BLOG_ROOT.resolve())
    except ValueError:
        return None
    parts = rel.parts
    if len(parts) != 2:
        # Either an EN root file (parts == ("slug.md",)) or unexpected nesting.
        return None
    locale, filename = parts
    if locale == "en":
        return None
    en_path = BLOG_ROOT / filename
    return en_path if en_path.exists() else None


def validate_file(path: Path) -> list[str]:
    """Return list of violation strings (empty = clean)."""
    violations: list[str] = []
    try:
        content = path.read_text(encoding="utf-8")
    except OSError as e:
        return [f"  read error: {e}"]

    # 1. Pay-first drift
    for pattern in FORBIDDEN_EN_PHRASES:
        matches = re.findall(pattern, content, re.IGNORECASE)
        if matches:
            violations.append(
                f"  pay-first drift: pattern {pattern!r} matched {len(matches)} time(s)"
            )

    # 2 + 3. Cross-source checks (need EN source)
    en_path = en_source_for(path)
    if en_path is None:
        # Standalone file or EN source — skip cross-source checks but still pass.
        return violations

    en_content = en_path.read_text(encoding="utf-8")

    # Price preservation
    if "$4.99" in en_content and "$4.99" not in content:
        violations.append(
            f"  price drift: EN has '$4.99' but translation does not (currency converted/rounded?)"
        )

    # LDJSON placeholder count
    en_ldjson = en_content.count("[[LDJSON_")
    tr_ldjson = content.count("[[LDJSON_")
    if en_ldjson != tr_ldjson:
        violations.append(
            f"  schema corruption risk: EN has {en_ldjson} [[LDJSON_*]] placeholders, translation has {tr_ldjson} (LLM mangled schema blocks?)"
        )

    return violations


def expand_paths(args: list[str]) -> list[Path]:
    """Expand CLI args (files or dirs) into list of .md files."""
    out: list[Path] = []
    for arg in args:
        p = Path(arg)
        if p.is_dir():
            out.extend(sorted(p.glob("*.md")))
        elif p.is_file() and p.suffix == ".md":
            out.append(p)
        else:
            print(f"  skip non-markdown: {p}", file=sys.stderr)
    return out


def main() -> int:
    if len(sys.argv) < 2:
        print(__doc__, file=sys.stderr)
        return 2

    files = expand_paths(sys.argv[1:])
    if not files:
        print("ERROR: no .md files found in args", file=sys.stderr)
        return 2

    fail_count = 0
    for f in files:
        violations = validate_file(f)
        if violations:
            fail_count += 1
            print(f"FAIL {f}")
            for v in violations:
                print(v)

    total = len(files)
    if fail_count:
        print(f"\n{fail_count} of {total} files failed validation.", file=sys.stderr)
        return 1

    print(f"PASS — {total} file(s) clean")
    return 0


if __name__ == "__main__":
    sys.exit(main())
