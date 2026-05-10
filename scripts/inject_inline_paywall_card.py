#!/usr/bin/env python3
"""
Task C — inject inline ranked-card pay_first CTA into top-10 organic landings.

Source: GA4 30d (4/10–5/9) sessionMedium=organic top landings, excluding
homepage, /old-photo-restoration hub, and the buyer-guide page itself.

Per founder 5-10 P1 spec:
  - entry_variant = buyer_guide
  - checkout_source = inline_card
  - cta_slot = ranked_card_pay_first (inferred to match existing buyer-guide naming)
  - landing_page = URL-encoded source-page path
  - URL: /subscription?landing_page=<enc>&cta_slot=ranked_card_pay_first&entry_variant=buyer_guide&checkout_source=inline_card

Insertion point: after the FIRST H2 (most engaged readers see this), so the
CTA sits after the article's lede / opening section.

Idempotent via sentinel comment.
"""
from pathlib import Path
from urllib.parse import quote

REPO = Path(__file__).resolve().parent.parent
BLOG = REPO / "src" / "content" / "blog"
SENTINEL = "<!-- inline-paywall-card-injected -->"

# GA4 30d organic top-10 (excl /, /old-photo-restoration, /best-photo-restoration-software)
SLUGS = [
    "fix-photos-stuck-together",                    # 60 sess
    "fix-mold-damage-pictures",                     # 14 sess
    "restore-glass-negatives-complete-guide",       # 14 sess
    "enhance-old-newspaper-photos",                 # 12 sess
    "remove-tape-marks-from-photographs",           # 11 sess
    "how-to-scan-old-photos-properly",              # 10 sess
    "remove-ink-stains-from-old-photos",            # 8 sess
    "restore-water-damaged-photos",                 # 7 sess
    "restore-daguerreotype-images",                 # 6 sess
    "restore-photos-gimp-tutorial",                 # 6 sess (0% bounce!)
]

CARD_TEMPLATE = """
> **🏆 Top-Ranked Tool 2026 — ArtImageHub** \\
> Tested against Remini, Topaz, MyHeritage, and 14 other tools on 500 damaged photos. **Highest overall quality + lowest price** in the category.
>
> ✓ One-time **$4.99**, no subscription, no watermark \\
> ✓ Auto fixes scratches, fading, blur, color shift in 15–30 seconds \\
> ✓ HD download included; photos auto-deleted in 24h
>
> **[Restore your photo for $4.99 →](/subscription?landing_page={enc_path}&cta_slot=ranked_card_pay_first&entry_variant=buyer_guide&checkout_source=inline_card)**
>
> Or browse the [full 17-tool comparison](/best-photo-restoration-software) before deciding.

{sentinel}
"""

def find_first_h2_position(text: str) -> int:
    """Find char offset of the END of the FIRST '## ' line that appears AFTER frontmatter."""
    # Skip past frontmatter (--- ... ---)
    if text.startswith("---"):
        end_fm = text.find("\n---", 3)
        if end_fm == -1:
            return -1
        scan_from = end_fm + 4
    else:
        scan_from = 0
    # Find the first ## heading
    idx = text.find("\n## ", scan_from)
    if idx == -1:
        return -1
    # Find end of that line
    eol = text.find("\n", idx + 1)
    if eol == -1:
        return -1
    return eol + 1


def inject(slug: str) -> str:
    path = BLOG / f"{slug}.md"
    if not path.exists():
        return f"MISSING {slug}"
    text = path.read_text()
    if SENTINEL in text:
        return f"SKIP   {slug} (already injected)"
    enc_path = quote(f"/blog/{slug}", safe="")
    card = CARD_TEMPLATE.format(enc_path=enc_path, sentinel=SENTINEL)
    insert_at = find_first_h2_position(text)
    if insert_at == -1:
        # Fallback: insert after frontmatter
        if text.startswith("---"):
            end_fm = text.find("\n---", 3)
            insert_at = end_fm + 4 if end_fm != -1 else 0
        else:
            insert_at = 0
    new_text = text[:insert_at] + card + text[insert_at:]
    path.write_text(new_text)
    return f"OK     {slug}"


def main():
    results = [inject(s) for s in SLUGS]
    for r in results:
        print(r)
    print(f"\nTotal: {len(results)} | OK: {sum(1 for r in results if r.startswith('OK'))} | "
          f"SKIP: {sum(1 for r in results if r.startswith('SKIP'))} | "
          f"MISSING: {sum(1 for r in results if r.startswith('MISSING'))}")


if __name__ == "__main__":
    main()
