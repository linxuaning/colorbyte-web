---
title: "How to Fix Creased and Folded Old Photos: Remove Fold Lines with AI"
description: "Conservation-based guide to fixing creased and folded old photos: how to flatten safely, why white crack lines appear along folds, and what AI restoration can reconstruct versus what is physically lost."
publishedAt: "2026-06-24"
updatedAt: "2026-06-24"
author: "Sarah Nakamura"
authorRole: "Paper Conservation Specialist"
authorBio: "Sarah Nakamura works in paper and photograph conservation, advising archives, historical societies, and private collectors on stabilizing and digitizing damaged photographic materials. She has handled flood-recovery collections and estate archives across the Pacific Northwest."
category: "How-To"
tags: ["Creased Photos", "Folded Photos", "Fold Lines", "Old Photos", "Photo Restoration"]
image: "/blog/before-after-examples.jpg"
coverColor: "from-indigo-500 via-violet-600 to-purple-700"
coverEmoji: "📐"
faq:
  - question: "Can AI remove crease and fold lines from old photos?"
    answer: "Yes, AI restoration removes most crease and fold lines effectively, with results depending on whether the fold merely marked the surface or cracked the emulsion. A light crease — a fold that bent the print without breaking the image layer — restores nearly invisibly, because the image information is intact and the AI only smooths a faint tonal line. A deep fold that cracked the emulsion shows a white or light line where the image layer split and flaked, exposing the paper base beneath; here the AI reconstructs the missing sliver using surrounding detail, which works well for moderate cracks and leaves a faint trace on severe ones. ArtImageHub's Old Photo Restoration handles surface creases and moderate emulsion cracks in a single pass. The honest rule: a crease that only bent the print disappears; a fold that physically cracked and lost emulsion is reconstructed convincingly but not perfectly. The repair is entirely digital, so the original is never flexed or stressed further."
  - question: "Should I try to flatten a folded photo before scanning?"
    answer: "Yes, gentle flattening before scanning improves the result, but it must be done slowly and without force. A folded print that won't lie flat scans with shadows and uneven focus along the fold, which compounds the visible damage. To flatten safely, place the print between two clean sheets of acid-free or plain paper, then under a flat, heavy weight such as a large book, and leave it for 24 to 48 hours. This relaxes moderate folds gradually. Never try to force a fold flat in one motion, never refold or flex the print to 'work it loose,' and never apply heat or moisture to speed flattening — heat and water can crack the emulsion further or bond it to surfaces. If a fold is sharp and the emulsion has already cracked, accept that the print may not fully flatten; scan it as flat as it safely goes and let the AI handle the residual line. A fragile, brittle fold that resists gentle pressure is a job for a conservator, not home flattening."
  - question: "What causes the white lines along a crease in an old photo?"
    answer: "The white lines along a crease are places where the photographic emulsion — the image-bearing layer — cracked and flaked away, exposing the lighter paper base underneath. When a print is folded, the image layer on the outside of the fold is stretched and the layer on the inside is compressed; if the fold is sharp enough, the brittle emulsion fractures along the crease and small flakes detach, leaving a thin light line with no image information. This is why a deep fold leaves a visible white streak even after you flatten the print: the bend is gone, but the lost emulsion is not. AI restoration addresses these lines by reconstructing the missing sliver from the intact image on either side, which works well when the gap is thin and the surrounding content is predictable. A wide white line through unique detail, like a face, is harder, because the AI must invent rather than infer. ArtImageHub's Old Photo Restoration reduces most crease lines substantially in one pass."
  - question: "Can AI fix a photo that is folded across a face?"
    answer: "AI can fix a fold across a face, and how well depends on whether the crease cracked the emulsion over the facial features. A light crease bending across a cheek or forehead restores cleanly, because the AI infers skin tone and texture from the large intact areas around the thin line. A deep fold that cracked the emulsion directly across eyes, nose, or mouth is the hardest case: those features carry unique, irreplaceable detail, and where emulsion flaked away the AI rebuilds a plausible feature rather than the exact original. ArtImageHub's Old Photo Restoration includes face-aware processing that handles surface creases over faces well and reduces deeper cracks substantially. For a severe fold that destroyed emulsion across a key feature on an irreplaceable portrait, review the reconstructed result carefully against your memory of the person, and consider a manual restorer working from other photos if the rebuild does not match. As always, the digital work never stresses the fragile original further."
  - question: "How do I scan a creased or folded photo for the best result?"
    answer: "First flatten the print gently under weight for 24 to 48 hours, then scan it as flat as it will safely lie at 600 DPI minimum, or 1200 DPI for small prints or fine detail, saving as a lossless TIFF or PNG. Flattening matters more for creases than for most other damage, because a residual ridge casts a shadow line in the scan that adds to the visible crease and can fool the AI into treating shadow as additional damage. Press the print as flat against the scanner glass as you safely can — for a stubborn fold, the closed scanner lid adds gentle even pressure during the scan. Avoid forcing a brittle fold flat just to scan it; a safe scan of a partly-folded print is better than a cracked print scanned perfectly flat. Save lossless rather than JPEG so compression artifacts do not stack onto the crease line, and upload to [Old Photo Restoration](/old-photo-restoration) for reconstruction."
---

> **Tools used in this guide**: [Old Photo Restoration](/old-photo-restoration) — the primary tool for creased and folded vintage prints. Additional tools useful for creased scans: [Photo Denoiser](/photo-denoiser) for grain along the fold, [JPEG Artifact Remover](/jpeg-artifact-remover) for compressed scans, [Photo Enhancer](/photo-enhancer) for upscaling the repaired result. Also available: [Photo Deblurrer](/photo-deblurrer) · [Photo Colorizer](/photo-colorizer). Each tool: $4.99 one-time.

---

A creased or folded photograph carries the marks of how it was stored — tucked in a wallet, folded into a letter, pressed at the bottom of a box. The fold line can range from a faint bend that barely touched the image to a deep crack that split the emulsion and left a white scar. The good news is that creases, like scratches, are usually thin lines of damage over an otherwise intact image, and digital restoration bridges most of them well.

## What Creases and Folds Look Like on Old Photos

The severity of a fold determines how completely it can be removed.

**Light creases** are bends that stressed the print without breaking the image layer. They appear as a faint tonal line and restore nearly invisibly, since the underlying image is intact.

**Deep folds with emulsion cracking** show a white or light line where the image layer fractured and flaked along the bend, exposing the paper base. These reduce well but may leave a faint trace, because the AI reconstructs the lost sliver rather than smoothing an intact surface.

**Spider-web or multi-line creasing** appears on prints that were crumpled rather than folded once — a network of fine crack lines. The restoration model treats these together as a field of linear damage.

**Folds splitting into tears** are creases that have begun to separate the print. Treat these as tears: handle gently, avoid any further flexing, and align the splitting edges when scanning.

**Residual ridges** are the physical bumps that remain even after the visible crease — they cast shadow lines in a scan, which is why flattening before scanning matters.

## Physical Handling Before You Scan

Creases are about careful flattening — never forcing.

- **Flatten gradually under weight.** Place the print between two clean sheets of paper, then under a heavy flat book, for 24–48 hours. This relaxes moderate folds safely.
- **Never refold or flex the print** to "work the crease loose." Each bend risks cracking more emulsion.
- **Do not use heat or moisture** to speed flattening. Both can crack the emulsion further or bond it to adjacent surfaces.
- **Do not force a brittle fold flat.** If the print resists gentle pressure, stop — a forced flatten can snap it into pieces. Scan it as flat as it safely goes.
- **Handle by the edges** with clean dry hands; flexing along an existing crease is the main risk.

The reconstruction happens digitally — flattening only needs to reduce the shadow ridge for a cleaner scan.

## Scanning Creased Prints

Flatten first, then scan at 600 DPI minimum, 1200 DPI for small prints. Save as lossless TIFF or PNG.

Press the print as flat against the glass as it safely allows — a residual ridge casts a shadow line that adds to the crease and can be mistaken for extra damage. The closed scanner lid provides gentle, even pressure during the scan. Save lossless so JPEG artifacts do not stack onto the fold line, giving [Old Photo Restoration](/old-photo-restoration) the cleanest input.

## Step-by-Step Digital Restoration Workflow

**Step 1 — Assess the scan**
View at 100% zoom. Identify the crease type: light bend, cracked emulsion with white line, crumple network, fold splitting to tear. This sets realistic expectations.

**Step 2 — Run Old Photo Restoration**
Upload your flattened, lossless scan to [ArtImageHub Old Photo Restoration](/old-photo-restoration). The pipeline runs damage detection, crease-line reconstruction, denoising via NAFNet, and upscaling via Real-ESRGAN, with face-aware processing for portraits. For surface creases with intact image, this single pass removes them cleanly.

**Step 3 — Evaluate the result**
Download and compare at 100% zoom. Check the former fold path: Are light creases gone? Are white emulsion-crack lines reduced? Is surrounding detail preserved?

**Step 4 — Address residual issues**
If grain traces the former fold, run the result through the [Photo Denoiser](/photo-denoiser). If the original was a JPEG, clean compression artifacts with the [JPEG Artifact Remover](/jpeg-artifact-remover).

**Step 5 — Upscale if needed**
For printing or large display, run the cleaned result through the [Photo Enhancer](/photo-enhancer) for a final upscale pass.

## What AI Can and Cannot Fix

| Crease Type | AI Restoration Result |
|---|---|
| Light crease, emulsion intact | Excellent — bends smooth nearly invisibly |
| Deep fold, thin emulsion crack over background | Good to excellent — line reconstructed from surroundings |
| Crumple network of fine creases | Good — treated as a field, substantial reduction |
| White crack line across a face (surface) | Good — face-aware reconstruction |
| Deep crack with wide emulsion loss through a feature | Limited — plausible rebuild, may differ from original |
| Fold splitting into a tear, pieces aligned | Good — bridges break when aligned at scan time |
| Wide band where emulsion fully flaked away | Partial — reconstructs, cannot recover lost detail |

The honest summary: AI restoration removes creases wherever the image still exists beneath or beside the fold, which covers most creased prints. Where a deep fold physically cracked and lost emulsion, it reconstructs convincingly but not truthfully along that line. The advantage over physical attempts is safety — the original is never flexed, heated, or forced.

## When to Consult a Conservator

Most creased prints are fully handled by digital restoration. Consider a conservator when:
- The print is brittle and cracking further when handled
- A deep fold destroyed emulsion across an irreplaceable face and reference photos exist for manual rebuild
- The original needs physical flattening and stabilization for archival framing
- The photograph has historical or legal significance requiring documented treatment

For most families with folded, wallet-worn, and creased prints, digital repair via [Old Photo Restoration](/old-photo-restoration) removes fold lines and restores a clean image within minutes — without ever forcing the fragile original flat.

---

*Guide reflects paper conservation practice as of 2026. Crease recoverability varies by photograph era, process type (gelatin silver, chromogenic, resin-coated), and how much emulsion cracked along the fold.*
