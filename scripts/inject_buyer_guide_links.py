#!/usr/bin/env python3
"""
Task A — inject buyer-guide internal links into 26 tutorial blog posts.

Each post gets a "## Compare AI Photo Restoration Tools" section appended
before the existing "## Related Articles" / "## Frequently Asked Questions"
section (or at end if neither present), containing:
  - one primary link to /best-photo-restoration-software (varied anchor)
  - one contextual link to a topic-relevant /blog/artimagehub-vs-* page

Idempotent: skips files that already contain the sentinel comment.

Per founder 5-10 P1 dispatch (Task A):
  - destinations: /best-photo-restoration-software + 8 new comparison pages
  - anchor text MUST vary across the 26 posts (avoid "comparison" × 25)
"""
from __future__ import annotations
from pathlib import Path
import sys

REPO = Path(__file__).resolve().parent.parent
BLOG = REPO / "src" / "content" / "blog"
SENTINEL = "<!-- buyer-guide-internal-link-injected -->"

# (slug, primary anchor, contextual destination url, contextual anchor)
POSTS = [
    # 11 ai-photo-restoration-*
    ("ai-photo-restoration-chatgpt-recommendations-2026",
     "Compare top photo restoration tools →",
     "/blog/artimagehub-vs-remini",
     "Compare ArtImageHub vs Remini for face restoration →"),
    ("ai-photo-restoration-cost-comparison",
     "See the 2026 photo restoration software pricing comparison →",
     "/blog/artimagehub-vs-myheritage",
     "$4.99 once vs $99/year — see ArtImageHub vs MyHeritage →"),
    ("ai-photo-restoration-for-adoption-searches",
     "Find the right tool for genealogy-grade restoration →",
     "/blog/artimagehub-vs-myheritage",
     "ArtImageHub vs MyHeritage — which works better for adoption photo searches? →"),
    ("ai-photo-restoration-for-beginners",
     "Browse the 2026 buyer's guide for AI photo restoration tools →",
     "/blog/artimagehub-vs-remini",
     "ArtImageHub vs Remini — beginner-friendly comparison →"),
    ("ai-photo-restoration-for-church-directories",
     "See which AI tool wins for batch directory photos →",
     "/blog/artimagehub-vs-myheritage",
     "ArtImageHub vs MyHeritage for genealogy & directory photos →"),
    ("ai-photo-restoration-for-genealogy-societies",
     "Read the in-depth photo restoration buyer's guide →",
     "/blog/artimagehub-vs-myheritage",
     "ArtImageHub vs MyHeritage for genealogy societies →"),
    ("ai-photo-restoration-for-historical-societies",
     "Compare 5 leading AI photo restoration apps →",
     "/blog/artimagehub-vs-adobe-lightroom",
     "ArtImageHub vs Adobe Lightroom for archival workflows →"),
    ("ai-photo-restoration-for-museums",
     "Get our 2026 photo restoration software comparison →",
     "/blog/artimagehub-vs-adobe-photoshop",
     "ArtImageHub vs Photoshop for museum-grade restoration →"),
    ("ai-photo-restoration-for-senior-living",
     "Find the best photo restoration tool for senior care projects →",
     "/blog/artimagehub-vs-remini",
     "ArtImageHub vs Remini — accessibility & ease comparison →"),
    ("ai-photo-restoration-limitations",
     "Read the full AI photo restoration buyer guide →",
     "/blog/artimagehub-vs-topaz-gigapixel",
     "ArtImageHub vs Topaz Gigapixel — when each one wins →"),
    ("ai-photo-restoration-vs-photoshop",
     "Compare AI photo tools by face, color, and sharpness →",
     "/blog/artimagehub-vs-adobe-photoshop-neural-filters",
     "ArtImageHub vs Photoshop Neural Filters — pure AI comparison →"),

    # 2 photo-colorization-*
    ("photo-colorization-accuracy-guide",
     "Browse AI restoration software ranked by colorization accuracy →",
     "/blog/artimagehub-vs-myheritage",
     "ArtImageHub vs MyHeritage — colorization accuracy compared →"),
    ("photo-colorization-tutorial",
     "Compare top photo colorization tools side-by-side →",
     "/blog/artimagehub-vs-deep-nostalgia",
     "ArtImageHub vs Deep Nostalgia — colorization & animation →"),

    # 1 amazon-photos-restoration
    ("amazon-photos-restoration",
     "See the 2026 AI photo restoration software rankings →",
     "/blog/artimagehub-vs-remini",
     "ArtImageHub vs Remini for cloud photo cleanup →"),

    # 12 how-to-restore-* (mix of high-traffic + topic spread)
    ("how-to-restore-faded-color-photos",
     "Find the right tool for faded color photos →",
     "/blog/artimagehub-vs-myheritage",
     "ArtImageHub vs MyHeritage for color recovery →"),
    ("how-to-restore-blurry-old-photos",
     "Which AI tool sharpens blurry photos best? See the rankings →",
     "/blog/artimagehub-vs-remini",
     "ArtImageHub vs Remini for blur & face sharpening →"),
    ("how-to-restore-black-and-white-photos",
     "Compare ArtImageHub against Remini, Topaz, MyHeritage →",
     "/blog/artimagehub-vs-myheritage",
     "ArtImageHub vs MyHeritage for B&W to color conversions →"),
    ("how-to-restore-childhood-photos",
     "Read the photo restoration software shootout →",
     "/blog/artimagehub-vs-remini",
     "ArtImageHub vs Remini for childhood photo memories →"),
    ("how-to-restore-1970s-photos",
     "View the buyer's guide to AI photo restoration →",
     "/blog/artimagehub-vs-myheritage",
     "ArtImageHub vs MyHeritage for 1970s era photos →"),
    ("how-to-restore-1950s-photos",
     "Compare professional vs consumer restoration tools →",
     "/blog/artimagehub-vs-adobe-lightroom",
     "ArtImageHub vs Adobe Lightroom for mid-century photos →"),
    ("how-to-restore-Victorian-era-cabinet-cards",
     "Get the photo restoration tool ranking →",
     "/blog/artimagehub-vs-myheritage",
     "ArtImageHub vs MyHeritage for Victorian-era restoration →"),
    ("how-to-restore-fire-damaged-photos",
     "Which restoration tool gives the best results on heavy damage? →",
     "/blog/artimagehub-vs-topaz-gigapixel",
     "ArtImageHub vs Topaz Gigapixel for severe damage recovery →"),
    ("how-to-restore-glass-plate-negatives",
     "Read the in-depth photo restoration tool comparison →",
     "/blog/artimagehub-vs-adobe-lightroom",
     "ArtImageHub vs Adobe Lightroom for archival negatives →"),
    ("how-to-restore-graduation-photos",
     "Compare AI restoration apps by photo type →",
     "/blog/artimagehub-vs-remini",
     "ArtImageHub vs Remini for portrait & face photos →"),
    ("how-to-restore-immigration-document-photos",
     "Find your match: photo restoration tool comparison →",
     "/blog/artimagehub-vs-myheritage",
     "ArtImageHub vs MyHeritage for immigration & genealogy documents →"),
    ("how-to-restore-baptism-and-christening-photos",
     "Compare ArtImageHub against alternatives →",
     "/blog/artimagehub-vs-myheritage",
     "ArtImageHub vs MyHeritage for family ceremony photos →"),
]

INSERT_TEMPLATE = """
## Compare AI Photo Restoration Tools

Choosing the right tool depends on your photos, your budget, and how much DIY work you want to do.

- **[{primary_anchor}](/best-photo-restoration-software)** — independent ranking of 17 AI photo restoration tools tested in 2026, with pricing, success rates by damage type, and recommendations by user level.
- **[{contextual_anchor}]({contextual_url})** — feature-by-feature breakdown for this specific use case.

{sentinel}
"""

def find_insert_point(text: str) -> int:
    """Return char offset to insert before. Prefers '## Related Articles', then
    '## Frequently Asked Questions', then EOF."""
    for marker in ("\n## Related Articles", "\n## Frequently Asked Questions", "\n## FAQ"):
        idx = text.find(marker)
        if idx != -1:
            return idx
    return len(text.rstrip()) + 1


def inject(slug: str, primary_anchor: str, contextual_url: str, contextual_anchor: str) -> str:
    path = BLOG / f"{slug}.md"
    if not path.exists():
        return f"MISSING {slug}"
    text = path.read_text()
    if SENTINEL in text:
        return f"SKIP   {slug} (already injected)"
    section = INSERT_TEMPLATE.format(
        primary_anchor=primary_anchor,
        contextual_url=contextual_url,
        contextual_anchor=contextual_anchor,
        sentinel=SENTINEL,
    )
    insert_at = find_insert_point(text)
    new_text = text[:insert_at] + section + text[insert_at:]
    path.write_text(new_text)
    return f"OK     {slug}"


def main():
    results = [inject(*p) for p in POSTS]
    for r in results:
        print(r)
    print(f"\nTotal: {len(results)} | OK: {sum(1 for r in results if r.startswith('OK'))} | "
          f"SKIP: {sum(1 for r in results if r.startswith('SKIP'))} | "
          f"MISSING: {sum(1 for r in results if r.startswith('MISSING'))}")


if __name__ == "__main__":
    main()
