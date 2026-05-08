---
title: "How Do You Restore Photos for Self-Published Family History Books?"
description: "Restore old photos for family history books and print-on-demand photo books. Covers resolution, layout, print-on-demand services, and getting publish-ready files."
publishedAt: "2026-05-08"
updatedAt: "2026-05-08"
author: "Maya Chen"
authorRole: "Photo Restoration Specialist"
authorBio: "Maya Chen has spent over a decade helping families recover and preserve their most treasured photo memories using the latest AI restoration technology."
category: "Guide"
tags: ["Family History Books", "Old Photo Restoration", "Print-on-Demand", "Photo Books"]
image: "/images/blog/how-to-restore-photos-for-family-history-books.jpg"
coverColor: "#f5f0eb"
coverEmoji: "📚"
---

A family history book — whether a printed genealogy, a photo memoir, a multi-generational pictorial, or a commemorative book for a reunion — lives or dies on the quality of its photographs. Historical photographs that are faded, damaged, or too small to reproduce well at book dimensions have historically been the limiting factor in self-published family history projects. AI photo restoration changes this constraint entirely, making it practical to include sharp, detailed versions of photographs that were previously too degraded or too small to print at book quality.

This guide covers the complete workflow: preparing photographs for book publication, understanding print-on-demand platform requirements, laying out pages that use restored photographs effectively, and what to realistically expect from the restoration process.

## What Print Resolution Do Family History Books Actually Require?

Print-on-demand family history books are typically printed at 300 DPI (dots per inch), which is the standard for high-quality photographic reproduction. Understanding what this means in pixels helps you assess whether your source photographs can produce print-ready files.

At 300 DPI:
- A **half-page image** at 5x7 inches requires 1500x2100 pixels
- A **full-page image** at 8x10 inches (in a standard US trade book) requires 2400x3000 pixels
- A **quarter-page image** at 3.5x5 inches requires 1050x1500 pixels
- A **thumbnail image** at 2x2 inches requires 600x600 pixels

Most print-on-demand platforms — Blurb, Artifact Uprising, Shutterfly, Chatbooks — alert you during the layout process if an image falls below the platform's minimum resolution for a given layout slot. These alerts are calibrated to catch obvious problems, but they are not fine-grained enough to catch borderline cases where an image will print softly without triggering a warning.

AI upscaling with Real-ESRGAN, the model used in [ArtImageHub](https://artimagehub.com), can typically produce files that meet 300 DPI requirements at half-page or full-page size from source material as small as a wallet-sized print scanned at 600 DPI.

## How Should You Scan Source Photographs for Family History Book Use?

The scanning step determines the upper bound of what AI restoration can produce. Underinvesting in scan quality limits the final result regardless of how sophisticated the AI processing is.

**Scan at 600 DPI for prints up to 4x6 inches.** This produces source files with enough pixel data for AI restoration to deliver half-page or full-page output at 300 DPI.

**Scan at 400 DPI for prints larger than 4x6 inches.** Larger prints already have more pixel data relative to their physical damage, so scanning at 400 DPI is usually sufficient and produces more manageable file sizes.

**Use TIFF format for archival scans.** TIFF preserves all pixel data without compression. For working copies and book layout, JPEG at 95% quality is practical. Preserve at least one archival TIFF of each important photograph.

**Scan in 24-bit color, even for black-and-white photographs.** Color scans of monochrome prints preserve more tonal information than grayscale scans. The AI restoration pipeline uses the full color information even for black-and-white photographs, and the output can be converted to grayscale after restoration if needed.

**Handle old prints at the edges and dust the surface before scanning.** Fingerprint oils can damage the surface of vintage prints, and dust at 600 DPI scan resolution produces visible spots that create artifacts in the restoration output.

## How Do You Prepare a Large Collection for a Book Project?

Family history books typically draw from a large collection: photographs from multiple family branches, covering multiple generations, often donated by different family members who digitized their portions independently. Managing this collection before beginning restoration and layout is essential.

**Create a systematic file naming convention before restoration.** Name source scan files with a consistent scheme: `[family-branch]_[year-approx]_[subject-description]_[unique-id].tiff`. This naming makes it possible to sort, search, and batch-process the collection and match restored files back to their sources. After restoration, add `_restored` to the filename to distinguish the AI output from the source scan.

**Group photographs by book chapter before restoration.** A family history book is typically organized by family branch, generation, or chronological period. Grouping photographs by the chapter where they will appear before restoration allows you to focus restoration effort on the photographs that are actually going to be used and to identify gaps in visual coverage by chapter.

**Assess the restoration need for each photograph before uploading.** Not every photograph in a family collection needs AI restoration. Photographs from the 1980s onward that were well-preserved and are already in good digital condition may not benefit meaningfully from processing. Reserve AI restoration for photographs where the improvement will be significant: pre-1980 photographs with visible fading, grain, or scratching; any photograph that needs to be upscaled for large layout positions; and portraits where facial detail is important to the narrative.

## What Are the Differences Between Print-on-Demand Platforms for Photo Books?

Not all print-on-demand platforms are equal for family history books with restored historical photographs.

**Blurb** is the most flexible platform for complex book layouts, offering a dedicated desktop layout application (BookWright) that gives precise control over image placement, text wrapping, and page design. Blurb prints via Ingram, which uses high-quality offset printing for larger runs and excellent inkjet printing for short runs. It is the best choice for books with complex layouts mixing text and photographs.

**Artifact Uprising** produces the highest print quality among consumer-facing platforms, using premium paper stocks and printing processes. The trade-off is limited layout flexibility and higher per-book cost. For a photo-forward family pictorial where the visual quality of the photographs is the primary product, Artifact Uprising is often the right choice.

**Shutterfly and Chatbooks** provide easy-to-use browser-based layout tools with good results at accessible price points. They work well for standard photo book formats but offer less design control than Blurb or Artifact Uprising.

**Amazon KDP** (Kindle Direct Publishing) handles text-heavy books with photographs better than it handles primarily visual books. Resolution requirements are slightly lower than professional photo book platforms, which makes it a reasonable option for genealogy books where text is primary and photographs are supplementary.

**Color profiles matter.** Most print-on-demand platforms expect RGB images in sRGB color space. Converting files to CMYK before upload — sometimes recommended for offset printing — can actually degrade color in print-on-demand workflows because the platforms perform their own RGB-to-CMYK conversion. Upload in sRGB.

## How Do You Layout Pages That Use Restored Historical Photographs Effectively?

The layout of a page containing restored historical photographs significantly affects how the photographs read and how the restoration quality is perceived.

**Use white space generously around portrait photographs.** A single restored portrait on a page with generous margins looks more like a gallery presentation and less like a scrapbook. The white space focuses attention on the subject and creates visual breathing room.

**Pair before-and-after presentations thoughtfully.** Showing a damaged original alongside its restored version can be powerful context in a family history book — it demonstrates the restoration process and the value of the recovered information. This works best at specific points in the narrative rather than applied uniformly to every photograph.

**Match print resolution to layout position.** Full-page and half-page images will be viewed closely and require the full 300 DPI resolution. Quarter-page thumbnails and small inline images are viewed at smaller size and can work well at 200 DPI. Use your highest-quality restorations in the most prominent layout positions.

**Captions are essential context.** A restored photograph without a caption identifying the subject, approximate date, and provenance is a beautiful image without genealogical value. The standard caption format for family history books: Subject name(s), approximate date, location if known, source collection.

## What Limitations Should You Account for When Planning Your Book?

AI restoration cannot manufacture information that was physically destroyed in the original photograph. Planning your book with realistic expectations about what restoration can and cannot achieve prevents surprises at the layout stage.

**Small faces in group photographs have lower restoration quality.** GFPGAN produces excellent results when the face fills at least 10-15% of the frame. In group photographs where individuals occupy a small portion of the frame, face quality in the restored version may be adequate for small layout positions but not for featured display.

**Very small source photographs have resolution ceilings.** A photograph smaller than a wallet-sized print — a photobooth strip, a locket photograph, or a small thumbnail — may not produce enough source data for full-page quality even after AI upscaling. Plan these photographs for quarter-page or smaller layout positions.

**Originally blurry photographs remain soft after restoration.** AI restoration can recover detail that degradation obscured, but it cannot recover sharpness that was never present in the original capture. If the source photograph was taken with camera motion blur or a soft lens, the restored version will be cleaner and better-colored but not sharper than the original.

## Frequently Asked Questions

## How many photographs should a typical family history book include?

A well-paced family history book averages one to two photographs per two-page spread — roughly one photograph every two pages of text. For a 100-page book, this means 50-75 photographs total. More photographs than this can feel like a catalog rather than a narrative; fewer can make the book feel text-heavy for readers who are primarily interested in the visual family record. Photo-forward formats like Artifact Uprising books work best with higher photograph density — up to one or two photographs per page — while text-primary genealogy books work well with fewer images used as visual anchors for the narrative.

## Should I convert restored black-and-white photos to color for a family history book?

Colorization adds emotional warmth to historical photographs and makes subjects feel more contemporary and real. Whether to colorize depends on the overall visual treatment of the book. If your book includes both color photographs (from the 1960s onward) and black-and-white photographs from earlier decades, colorizing the black-and-white photographs creates a more visually consistent book. If your book focuses on a specific historical period and the black-and-white aesthetic is integral to the tone, preserve the monochrome versions. A common approach: restore all photographs, colorize photographs from the 1940s and earlier that will appear prominently, and leave smaller or supporting photographs in their original monochrome form.

## What is the minimum number of copies I need to order from print-on-demand platforms?

Most print-on-demand platforms allow orders of a single copy, which is useful for proof printing before distributing to the broader family. Blurb, Artifact Uprising, and Shutterfly all support single-copy orders. The per-book cost at single-copy quantities is high — a 100-page hardcover photo book typically runs $60-120 depending on the platform and paper choice. Per-book costs decrease meaningfully at 10+ copies. For family reunions and distribution to multiple family branches, ordering 20-50 copies brings the per-book cost to a practical range.

## How do I handle photographs where I do not know who the subjects are?

Unidentified photographs are a reality in any family collection. The standard approach in family history books is to include important unidentified photographs with a caption that notes the uncertainty: "Unidentified woman, approximately 1920s. Donated by the Smith family collection." Including these photographs invites family readers to identify subjects and creates opportunities for post-publication research collaboration. Genealogy societies recommend never discarding photographs because they are unidentified — the identification may come years later through a descendent who recognizes a face.

## Does AI restoration work on photographs that have been digitized from microfilm or photocopies?

Yes, with caveats. Photographs digitized from microfilm have a characteristic grain and contrast range different from direct photographic prints, and the AI models can address this. The limitation is that microfilm introduces a resolution ceiling — the film grain itself limits the fine detail that can be recovered. Photocopies of photographs have even more significant limitations: the halftone printing pattern used in photocopy machines creates a dot pattern in the image that the AI can partially mitigate but not fully remove. Direct scans of original prints always produce better restoration results than scans of reproductions; use microfilm and photocopy sources only when the original print is unavailable.
