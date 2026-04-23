#!/usr/bin/env python3
"""
LLM-only translation pipeline per spec v0.3.
Translates EN blog posts into locale-specific .md files with 4 hard constraints.

Usage:
    # Sanity check 1 post
    python scripts/translate_llm_only.py --slug wedding-photo-restoration --locale es

    # Batch translate top-N posts per locale
    python scripts/translate_llm_only.py --slugs-file docs/phase1a-top20-fallback.txt \\
        --locales es,pt-BR

    # Full site (long-running; respect --skip-existing)
    python scripts/translate_llm_only.py --all --locales es,pt-BR,fr,de,ja,ko --skip-existing

Requires ANTHROPIC_API_KEY in environment.
"""
from __future__ import annotations

import argparse
import os
import re
import sys
import time
from pathlib import Path
from typing import Optional

try:
    from anthropic import Anthropic
except ImportError:
    print("ERROR: anthropic package not installed. Run: pip install anthropic", file=sys.stderr)
    sys.exit(1)

REPO = Path(__file__).resolve().parent.parent
BLOG_ROOT = REPO / "src" / "content" / "blog"

LOCALE_NAME = {
    "es": "Spanish (Latin America)",
    "pt-BR": "Portuguese (Brazil)",
    "fr": "French",
    "de": "German",
    "ja": "Japanese",
    "ko": "Korean",
}

SYSTEM_PROMPT = """You are a professional translator and editor producing high-quality, natural localized content for ArtImageHub, an AI photo restoration web app.

Source language: English
Target language: {LOCALE_NAME}

Task: translate the provided English content into {LOCALE_NAME}. Produce idiomatic, fluent prose that matches the warm, empathetic tone of the source (family memories, nostalgia, photo restoration emotional stakes). Preserve semantic fidelity. Do NOT add information not in the source. Do NOT remove information.

HARD CONSTRAINTS (must all hold — violations = rejection):

1. BRAND NAMES: "ArtImageHub", "PhotoFix", "Old Photo Restoration", "Photo Colorizer", "Photo Enhancer" — keep as English proper nouns. Do NOT translate, do NOT transliterate, do NOT add katakana/hiragana or any non-Latin variant.

2. SCHEMA.ORG VOCABULARY: any tokens like @type, @context, itemListElement, aggregateRating, SoftwareApplication, FAQPage, HowTo, Article, Question — keep in English JSON-LD syntax.

3. PRICE: "$4.99" — keep literal dollar amount. Do NOT convert to local currency, do NOT round, do NOT translate "$".

4. PAY-FIRST MESSAGING: If source contains phrases like "pay first", "after payment", "unlock after $4.99", "pay before upload", "one-time payment unlocks" — you MUST preserve this meaning exactly. You MAY NOT substitute with "free preview", "try free", "upload for free", or any phrasing implying the core photo restoration flow is free or has a free tier. The product requires payment before the user can use it for restoration.

TONE: Match the warm, empathetic tone of the English source. Avoid overly formal register unless source is formal.

PLACEHOLDERS: Any tokens like [[LDJSON_N]] MUST be copied verbatim into the output. Do not translate or modify them.

OUTPUT FORMAT: Return ONLY the translated content. No preamble, no commentary. Preserve original Markdown structure (headings, lists, bold, italic, links). Do not change link URLs. Do not change image paths."""

LDJSON_RE = re.compile(
    r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>',
    re.DOTALL,
)

FRONTMATTER_RE = re.compile(r'^---\s*\n(.*?)\n---\s*\n', re.DOTALL)

# Frontmatter fields to translate (user-facing text)
TRANSLATE_FIELDS = {"title", "description", "excerpt"}
# Frontmatter fields to preserve verbatim
PRESERVE_FIELDS = {
    "slug", "date", "publishedAt", "updatedAt", "tags", "author", "authorRole",
    "authorBio", "image", "heroImage", "coverImage", "category", "coverColor",
    "coverEmoji", "featured",
}

# Forbidden phrases in translated output (pay-first drift)
FORBIDDEN_EN_PHRASES = [
    r"\bfree\s+preview\b",
    r"\btry\s+(?:it\s+)?free\b",
    r"\bupload\s+for\s+free\b",
    r"\bfree\s+trial\b",
]


def extract_ldjson(content: str) -> tuple[str, list[str]]:
    blocks: list[str] = []

    def _sub(m):
        idx = len(blocks)
        blocks.append(m.group(0))
        return f"[[LDJSON_{idx}]]"

    return LDJSON_RE.sub(_sub, content), blocks


def restore_ldjson(content: str, blocks: list[str]) -> str:
    for idx, block in enumerate(blocks):
        content = content.replace(f"[[LDJSON_{idx}]]", block)
    return content


def split_frontmatter(raw: str) -> tuple[Optional[str], str]:
    m = FRONTMATTER_RE.match(raw)
    if not m:
        return None, raw
    return m.group(1), raw[m.end():]


def parse_yaml_simple(yaml_text: str) -> dict[str, str]:
    """Minimal YAML parser for frontmatter (key: value pairs, no nesting)."""
    out: dict[str, str] = {}
    for line in yaml_text.splitlines():
        stripped = line.strip()
        if not stripped or stripped.startswith("#"):
            continue
        if ":" in stripped:
            k, _, v = stripped.partition(":")
            out[k.strip()] = v.strip()
    return out


def llm_translate(client: Anthropic, text: str, locale: str, model: str = "claude-sonnet-4-6") -> str:
    """Single LLM call: translate + polish + enforce constraints."""
    system = SYSTEM_PROMPT.replace("{LOCALE_NAME}", LOCALE_NAME[locale])
    resp = client.messages.create(
        model=model,
        max_tokens=8192,
        system=system,
        messages=[{"role": "user", "content": text}],
    )
    return resp.content[0].text


def validate_translation(translated: str, original: str) -> list[str]:
    """Return list of constraint violations."""
    errors = []
    for pattern in FORBIDDEN_EN_PHRASES:
        if re.search(pattern, translated, re.IGNORECASE):
            errors.append(f"forbidden pay-first phrase matched: {pattern}")
    if "$4.99" in original and "$4.99" not in translated:
        errors.append("price '$4.99' missing from translation (source had it)")
    if original.count("[[LDJSON_") != translated.count("[[LDJSON_"):
        errors.append("LDJSON placeholder count mismatch — LLM may have mangled schema")
    return errors


def translate_one(
    client: Anthropic,
    slug: str,
    locale: str,
    *,
    skip_existing: bool = True,
    dry_run: bool = False,
) -> tuple[bool, str]:
    """Returns (success, message)."""
    en_path = BLOG_ROOT / f"{slug}.md"
    if not en_path.exists():
        return False, f"EN source not found: {en_path}"

    locale_dir = BLOG_ROOT / locale
    out_path = locale_dir / f"{slug}.md"
    if skip_existing and out_path.exists():
        return True, f"SKIP existing: {out_path.relative_to(REPO)}"

    raw = en_path.read_text(encoding="utf-8")
    fm_text, body = split_frontmatter(raw)
    if fm_text is None:
        return False, f"no frontmatter in {slug}"

    # Step 0: extract LDJSON
    protected_body, ldjson_blocks = extract_ldjson(body)

    if dry_run:
        return True, f"WOULD translate {slug} → {locale} ({len(raw)} chars, {len(ldjson_blocks)} LDJSON blocks)"

    # Step 1: LLM translate body
    print(f"  [{slug} → {locale}] translating body ({len(protected_body)} chars)...")
    translated_body = llm_translate(client, protected_body, locale)

    # Step 1b: translate frontmatter values
    fm = parse_yaml_simple(fm_text)
    new_fm = dict(fm)  # copy
    for field in TRANSLATE_FIELDS:
        if field in fm and fm[field].strip():
            val = fm[field].strip().strip('"').strip("'")
            if val:
                translated_val = llm_translate(client, val, locale).strip().strip('"')
                new_fm[field] = f'"{translated_val}"'
    new_fm["language"] = f'"{locale}"'

    # Step 1.5: restore LDJSON
    final_body = restore_ldjson(translated_body, ldjson_blocks)

    # Step 2: validate
    errors = validate_translation(final_body, raw)
    if errors:
        err_msg = "; ".join(errors)
        return False, f"validation failed: {err_msg}"

    # Reassemble
    new_fm_text = "\n".join(f"{k}: {v}" for k, v in new_fm.items())
    final_content = f"---\n{new_fm_text}\n---\n\n{final_body}"

    locale_dir.mkdir(parents=True, exist_ok=True)
    out_path.write_text(final_content, encoding="utf-8")
    return True, f"WROTE {out_path.relative_to(REPO)}"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--slug", help="translate single slug")
    ap.add_argument("--slugs-file", help="file with one slug per line")
    ap.add_argument("--all", action="store_true", help="translate all posts")
    ap.add_argument("--locales", required=True, help="comma-separated locale codes (es,pt-BR,...)")
    ap.add_argument("--skip-existing", action="store_true", default=True, help="skip posts already translated (default: true)")
    ap.add_argument("--force", action="store_true", help="overwrite existing translations")
    ap.add_argument("--dry-run", action="store_true", help="print what would be translated without calling API")
    ap.add_argument("--model", default="claude-sonnet-4-6")
    args = ap.parse_args()

    if not (args.slug or args.slugs_file or args.all):
        ap.error("must specify one of --slug / --slugs-file / --all")

    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key and not args.dry_run:
        print("ERROR: ANTHROPIC_API_KEY not set. Either set it or use --dry-run.", file=sys.stderr)
        return 1

    client = Anthropic(api_key=api_key) if api_key else None

    slugs: list[str] = []
    if args.slug:
        slugs = [args.slug]
    elif args.slugs_file:
        slugs = [line.strip() for line in Path(args.slugs_file).read_text().splitlines() if line.strip() and not line.startswith("#")]
    elif args.all:
        slugs = [p.stem for p in BLOG_ROOT.glob("*.md")]

    locales = [loc.strip() for loc in args.locales.split(",") if loc.strip()]
    for loc in locales:
        if loc not in LOCALE_NAME:
            print(f"ERROR: unknown locale '{loc}'. Supported: {sorted(LOCALE_NAME.keys())}", file=sys.stderr)
            return 1

    ok = 0
    skip = 0
    fail = 0
    start = time.time()
    for slug in slugs:
        for locale in locales:
            success, msg = translate_one(
                client,
                slug,
                locale,
                skip_existing=not args.force,
                dry_run=args.dry_run,
            )
            tag = "OK" if success else "FAIL"
            print(f"  [{tag}] {msg}")
            if success:
                if "SKIP" in msg:
                    skip += 1
                else:
                    ok += 1
            else:
                fail += 1
            # Light rate limit — tune per API tier
            if not args.dry_run:
                time.sleep(0.5)

    elapsed = time.time() - start
    print(f"\nSummary: {ok} translated, {skip} skipped, {fail} failed ({elapsed:.1f}s)")
    if not args.dry_run and ok > 0:
        print("\n*** REVIEW OUTPUT BEFORE MERGING. ***")
        print("*** Sample 5 translations per locale minimum. Check tone, pay-first integrity, brand preservation, no $ drift. ***")
    return 0 if fail == 0 else 2


if __name__ == "__main__":
    sys.exit(main())
