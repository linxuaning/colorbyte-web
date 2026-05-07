---
title: "How to Restore Fire-Damaged and Smoke-Damaged Photos"
description: "Heat melts emulsions, smoke leaves patina, soot embeds in paper fibers. Learn how to stabilize fire-damaged photos before scanning, and how GFPGAN and Real-ESRGAN recover faces and detail from rescue scans."
publishedAt: "2026-05-08"
author: "Maya Chen"
tags: ["Photo Restoration", "Fire Damage", "Disaster Recovery", "AI Tools"]
coverEmoji: "📸"
---

House fires destroy approximately 360,000 homes in the United States each year. Among the losses families report as most irreplaceable are photographs. Unlike furniture or electronics, photos cannot be replaced by insurance settlement. But fire-damaged photos are frequently recoverable to a meaningful degree -- and the window for stabilizing them before further deterioration closes quickly. This guide covers the physical nature of fire and smoke damage, what to do in the hours immediately after recovery, and how AI restoration can recover faces and detail from photos that look unsalvageable.

## What Is the Difference Between Heat, Smoke, and Soot Damage?

These three damage types look superficially similar but are physically distinct. Treating them the same way is the first mistake most people make, and the wrong treatment can cause irreversible additional damage.

**Heat damage** attacks the photographic emulsion directly. Modern color prints have a gelatin emulsion layer bonded to a paper or resin base. At approximately 150 degrees Fahrenheit (65 degrees Celsius), the gelatin begins to soften. At higher temperatures it melts, flows, and fuses. Photos recovered from a fire that reached significant temperatures may show a characteristic rippled or bubbly surface texture where the emulsion deformed before cooling. In severe cases the emulsion fuses to adjacent photos in the stack or to the album cover material. The paper substrate may also char or ash at the edges. Heat-damaged emulsion that has re-hardened is extremely fragile and will not tolerate moisture or pressure.

**Smoke damage** deposits a thin, oily patina across the photo surface. This patina is chemically complex -- it contains combustion byproducts including volatile organic compounds, fine carbon particles, and, in structure fires, a range of synthetic materials from burning plastics and furnishings. The patina is not always visible to the naked eye but causes ongoing chemical degradation if left untreated. It may also produce a persistent odor that is difficult to remove from prints without professional conservation treatment.

**Soot damage** is distinct from the smoke patina. Soot is the coarser particulate matter -- partially combusted carbon particles -- that settles on surfaces during and after a fire. It appears as a black or gray powdery deposit that may obscure significant portions of the photo surface. Soot is not bonded to the emulsion the way the smoke patina is. This is critical: soot can be removed, but only by dry mechanical methods.

The critical rule that follows from this distinction: **do not wet-wipe soot from photographs**. Water or cleaning solutions activate soot's fine particles, driving them into the emulsion fibers and creating a stain that is far more difficult to address than the original surface deposit. Many family members instinctively try to wipe or wash a sooty photo and inadvertently cause permanent damage that would not have been there otherwise.

## What Is the Right Way to Stabilize Fire-Damaged Photos?

In the hours immediately after recovering photos from a fire, the priorities are separating, drying (if water damage from firefighting efforts is also present), and minimizing handling.

For soot removal, use a soft sable or camel-hair brush (photography conservation suppliers stock these) to gently sweep loose soot from the surface with short strokes, working from the center outward. Do not scrub. Do not use tissue or paper towel, which will smear the particles. For photos with heavier soot deposits, a soft gum eraser applied very lightly can lift particles, but this requires experience and a steady hand -- the emulsion surface of a heat-stressed print is much more fragile than a healthy one.

Fused photos -- where the emulsion has melted and bonded adjacent prints or the print to its album page -- should not be separated by hand. Professional conservators use specialized techniques including controlled humidity chambers to soften the adhesion gradually without tearing the emulsion. Attempting to peel fused photos apart at home destroys them.

For capturing the image before any further conservation treatment, the choice of capture method matters.

**Scanner vs. DSLR copy for fragile charred prints:** A flatbed scanner places the document against the glass platen under slight pressure. For heat-stressed, warped, or partially charred prints, this pressure can crack or crumble fragile areas. A DSLR copy station -- camera mounted on a copy stand or tripod, pointed straight down at the print laid flat on a clean surface -- allows capture without any contact pressure. The quality of a careful DSLR copy at a moderate ISO can match or exceed a flatbed scan for fragile subjects. If a scanner is the only option, use the highest resolution setting available and place the print gently without pressing the lid down.

## How Does GFPGAN Recover Faces From Soot-Obscured Photos?

GFPGAN (Generative Facial Prior GAN) is the face restoration model at the core of ArtImageHub's restoration pipeline. It was developed at Tencent ARC Lab and trained on a large dataset of high-quality face images, giving it a strong generative prior for human facial features.

When soot deposits or smoke patina obscure a face in a photo, GFPGAN approaches the problem as a face super-resolution task with incomplete input. It identifies the facial region, estimates the underlying facial geometry from whatever pixel information survives, and uses the generative prior to fill in obscured regions with high-frequency detail -- skin texture, eye structure, lip definition -- that is consistent with a plausible face of the apparent age and orientation in the photo.

For photos where the soot covers a portion of the face but leaves enough geometric structure visible (the overall head shape, the hairline, the general position of features), GFPGAN's recovery is often remarkable. The model effectively sees through the deposit to the underlying face structure. For photos where soot has covered the face completely or where heat damage has physically deformed the emulsion across the face area, the model generates a plausible but approximate face rather than recovering the specific person's features.

## What Can Real-ESRGAN Do With Low-Quality Rescue Scans?

Fire-damaged photo recovery often happens under difficult conditions -- a scanner borrowed from a neighbor, a phone camera in poor light, a 10-year-old consumer flatbed at 300 DPI. The resulting scan is low resolution, may have significant noise from the scanner's light source interacting with the damaged print surface, and may show JPEG compression artifacts if saved in a lossy format.

Real-ESRGAN handles this compound degradation effectively. The model was trained on a blind degradation pipeline designed to simulate the kinds of compounded quality problems that real-world damaged photos produce: low resolution, noise, blur, and compression artifacts at once. Running a low-quality rescue scan through Real-ESRGAN in ArtImageHub's pipeline produces a higher-resolution output with reduced noise and sharper edge definition. The model will not add information that was never in the scan, but it can make the information that is present much more usable.

For faces in low-quality rescue scans, the pipeline combines Real-ESRGAN's upscaling pass with GFPGAN's face restoration, which means the face regions get additional attention from the specialized face model on top of the general upscaling treatment.

## Should You Preview Before Paying?

ArtImageHub uses a preview-first workflow. You upload the damaged photo, the AI pipeline runs, and you see the restored result before deciding whether to download. For fire-damaged photos, the degree of recovery varies greatly depending on the extent of the damage, so the preview step is particularly useful. You may find that a photo that looked unrecoverable produces a meaningful restoration -- or you may find that the damage was simply too severe for useful AI recovery. Either way, you are not charged the $4.99 one-time fee until you choose to download. And that $4.99 unlocks high-resolution downloads for unlimited photos, not just the one you are previewing.

---

## Frequently Asked Questions

## Can AI restore faces that are completely covered by soot in a fire-damaged photo?

GFPGAN can recover faces from soot-obscured photos when enough of the underlying facial geometry is still visible through the deposit. If the soot layer is opaque and covers the entire face, the model works with whatever edge information and tonal variation survives at the soot layer surface. In these cases the output face is plausible -- it will look like a person of the appropriate age and orientation -- but it may not accurately represent the specific individual's features. Partial soot coverage produces much better results: the model uses the visible portions to constrain the reconstruction of the obscured regions. For genealogical or archival use where the specific person's identity matters, AI-recovered faces from total occlusion should be clearly noted as approximate reconstructions rather than documented appearances.

## Is it safe to use water to clean soot off a fire-damaged photograph?

No. This is the most critical caution for fire-damaged photo handling. Wet-wiping soot drives fine carbon particles and combustion byproducts into the emulsion fibers, creating a permanent stain that is far more difficult to address than the original surface deposit. Soot should always be removed by dry methods: a soft natural-hair brush sweeping gently from center outward, or a soft gum eraser used with very light pressure. If the soot deposit is heavy or the photo is too fragile for any mechanical treatment, the best option is to capture the image digitally first using a DSLR copy station without contact pressure, then treat the original separately or bring it to a professional conservator.

## Will a scanner damage a heat-stressed fire-damaged photo?

Consumer flatbed scanners apply light pressure to keep documents flush against the glass platen for even focus. For healthy prints, this pressure is harmless. For heat-stressed, warped, or partially charred prints, the pressure can crack or crumble fragile areas of the emulsion or substrate. The safer option for fragile fire-damaged prints is a DSLR copy station: camera on a tripod pointing straight down, print lying flat without any contact pressure from the capture device. If you must use a scanner, use the highest resolution setting, lower the lid gently without pressing it down, and scan with the original face-up rather than face-down if the scanner supports that orientation. Capture first, conservation treatment after.

## How long after a fire is it still possible to restore photos?

The window for stabilizing photos before further deterioration varies with storage conditions after recovery. Smoke patina continues its chemical degradation process as long as the compounds remain on the photo surface. In a cool, dry storage environment away from light, further deterioration is slow and photos may be in usable condition weeks or months after recovery. High humidity accelerates mold growth on smoke-affected prints dramatically -- mold can establish on a damaged print within 24 to 48 hours in warm, humid conditions. If the photos were also wetted by firefighting water, the urgency is much higher: wet, smoke-affected prints should be separated and air-dried within hours. AI restoration can work from a good scan taken at any point, so digitizing the photos -- even from a phone camera -- as soon as they are safe to handle is always the right first step.

## What types of fire damage cannot be recovered by AI restoration?

AI models face hard limits when the photographic information itself has been destroyed rather than obscured. Emulsion that has melted and re-solidified in a distorted form has physically rearranged the image information it contained -- no model can recover the original arrangement. Charred paper that has lost its structural integrity cannot be scanned in any useful way. Prints that have fused together and been separated by force, tearing the emulsion layer, have gaps where no information survives. Real-ESRGAN and GFPGAN can fill these gaps with synthesized texture and plausible faces, but the output in destroyed regions is generative rather than restorative. ArtImageHub's preview-first workflow lets you assess the actual AI output before the $4.99 download payment, so you can evaluate what level of recovery was possible for your specific photo.
