---
title: "Remove Scratches from Old Photos: AI vs Manual Guide"
description: "Scratched photos don't have to stay scratched. I tested every method — Photoshop, AI tools, and even analog tricks — to find what actually works in 2026."
publishedAt: "2026-02-16"
author: "James Morrison"
authorRole: "Professional Photo Restorer"
authorBio: "James has been restoring photographs professionally for 12 years, working with museums, families, and archives. He's seen every kind of photo damage imaginable and has developed his own AI-augmented workflow."
category: "Guides"
tags: ["Remove Scratches", "Photo Restoration", "Photo Repair", "AI", "Photoshop Alternative"]
image: "/blog/before-after-examples.jpg"
coverColor: "from-orange-500 via-amber-600 to-yellow-700"
coverEmoji: "🖼️"
faq:
  - question: "Can AI restoration handle remove scratches from old photos?"
    answer: "Yes. AI restoration via GFPGAN (face) + Real-ESRGAN (upscale) handles most cases of remove scratches from old photos effectively. Upload, wait ~60 seconds, download. For severe cases (large missing areas, catastrophic damage), AI fills with plausible content but cannot invent fully lost detail."
  - question: "How much does it cost?"
    answer: "ArtImageHub: $4.99 one-time for unlimited HD restoration. Compared to professional retouching ($50-300 per photo) or DIY Photoshop (2-10 hours per photo), AI is the cost-effective path for finite family-history projects."
  - question: "What scan resolution should I use?"
    answer: "1200 DPI minimum for standard 4x6 prints. 2400 DPI for small-format originals where face detail recovery is essential. Color mode preserves natural tones even on B&W photos. Save the unmodified scan as your archival record."
  - question: "How long does the workflow take?"
    answer: "AI restoration: 30-90 seconds per photo. Manual workflow: 30 min to several hours per photo depending on damage and skill. Professional retoucher: 3-7 days turnaround. For finite family-history projects (50-300 photos), AI is the only path that completes in reasonable time."
  - question: "When should I seek professional conservation?"
    answer: "For irreplaceable historical artifacts (museum-grade items, daguerreotypes, photos with verified monetary value above ~$500), professional conservation is recommended. For most family photos with typical age-related damage, AI restoration produces results equivalent to or better than $150-300 professional retouching at a fraction of the cost."
---

> **Editorial trust notice**: This guide is published by [ArtImageHub](/about), an AI photo restoration service charging $4.99 one-time. Technical claims rest on peer-reviewed research: face restoration via [GFPGAN](https://arxiv.org/abs/2101.04061) (Wang et al., Tencent ARC Lab 2021); upscaling via [Real-ESRGAN](https://arxiv.org/abs/2107.10833) (Wang et al. 2021).

My client David didn't say much when he handed me the envelope. He just watched my face as I pulled out the photograph.

> **⚡ Quick path**: For most users, [ArtImageHub](/old-photo-restoration) handles this automatically in 60 seconds — **$4.99 one-time, no subscription, no watermark on HD download**. The detailed manual workflow follows below for technical users or curious readers.

It was a 5×7 portrait of his grandfather in dress uniform — British Army, Second World War, from the stiffness of the pose probably taken right before deployment. The kind of photograph that gets passed down in a family not just as a memory but as proof: this man existed, this man mattered, this man went. The only portrait of him that survived.

Straight across the grandfather's face, from just above the right eye down through the jaw, ran a deep scratch. Not a surface scuff — a proper gouge, the kind made by something sharp dragged across the emulsion with force. Someone had stored it under something heavy, or it had gotten pressed against a metal frame edge for decades. Either way, the damage was severe. Half the man's face was interrupted by a white line that your eye couldn't stop finding.

"Can you fix it?" David asked.

That question — the short version, delivered flat, from someone trying not to hope too much — is why I've spent twelve years learning every method available for removing scratches from old photographs. This is what I know.

Want quick AI-powered scratch removal? Try our [free scratch remover](/remove-scratches-from-photos)—AI removes scratches instantly, no Photoshop skills required. 3 photos free per day.

<h2>Understanding Photo Scratches: Not All Damage Is the Same</h2>

<p>Before you choose a removal method, you need to understand what you're actually dealing with. I see clients mix these up constantly, and it matters because each type responds differently to treatment.</p>

<h3>Surface Scratches</h3>

<p>Surface scratches affect the protective coating or the face of the print, not the image-forming layer underneath. Hold the photo at a raking angle under a lamp — if you see the scratch as a reflective line but the underlying image looks intact beneath it, you're dealing with a surface scratch. These are the easiest to handle. On the physical print, a conservator can sometimes reduce their visibility with polyethylene glycol or Paraloid B-72 applied under magnification. In a digital scan, surface scratches often read as bright white or dark lines depending on the print surface, and AI tools handle them exceptionally well because the underlying pixel information is intact.</p>

<h3>Emulsion Scratches</h3>

<p>This is what David's grandfather had. Emulsion scratches cut through the gelatin-silver layer — the actual image-forming material — down to (or through) the paper base. There is no underlying information to recover. Whatever was there is physically gone. When you scan an emulsion scratch, you're not capturing a line over intact data. You're capturing a void. This is a fundamentally harder problem because the information needs to be reconstructed from context, not revealed from beneath damage.</p>

<p>The telltale sign: hold the print at that raking angle again. If the scratch catches light differently than the surface — if it looks like a groove or channel in the paper — you're dealing with emulsion damage.</p>

<h3>Chemical Damage That Looks Like Scratches</h3>

<p>I have to mention this because I've had clients come in convinced they had a scratched photo and discovered something more complex. Silver mirroring can appear as streaks or lines. Chemical spills or developer accidents from darkroom mishandling can leave linear marks. Tape residue removal can strip emulsion in strips. These look like scratches in a scan but respond differently to treatment — AI tools trained on mechanical scratch patterns may misidentify chemical streaks and produce odd results. If your "scratches" follow a pattern that doesn't look mechanically plausible (too perfectly straight, at chemically interesting locations like edges or under old tape) get a second look before committing to a restoration approach.</p>

<h3>Why This Matters for Your Restoration Method</h3>

<p>Surface scratches: AI tools and Photoshop both work extremely well. The underlying data is there. <br>
Emulsion scratches: Both methods are now genuinely usable, but with different tradeoffs. AI is faster but invents detail; manual is slower but gives you control over what gets invented. <br>
Chemical damage: Test carefully before committing. AI may over-correct; manual with reference photos is often better.</p>

<h2>Method 1: AI Restoration (The Fast Way)</h2>

<p>I resisted AI tools for longer than I should have. Twelve years of manual restoration work will make you protective of craft, and the early AI results I saw around 2018–2019 were genuinely bad — the waxy, plastic look that made portraits look like department store mannequins. But the 2021–2023 model generation changed everything, and I've now rebuilt my workflow around AI as the primary tool with manual work as the refinement pass.</p>

<h3>How AI Identifies and Repairs Scratch Patterns</h3>

<p>Modern restoration models are trained on paired datasets — damaged photos alongside their clean originals — and they learn to recognize scratch signatures by the characteristic patterns scratches create: bright linear artifacts at specific angles, the absence of texture continuity, the way surrounding pixels predict what the damaged area should contain. The AI doesn't "see" a scratch the way we do. It identifies a region of low-probability pixels (pixels that don't match what the surrounding context predicts) and uses inpainting — filling missing regions based on contextual inference — to reconstruct plausible content.</p>

<p>For photographs with multiple scratches, this matters enormously. A professional restorer working manually on a photo with thirty fine scratches across a background might spend two hours just on that background. The same photo through a good AI pipeline takes 45 seconds and produces background scratch removal that's largely indistinguishable from manual work.</p>

<h3>Best For: Multiple Scratches, Faded Damage, Faces</h3>

<p>AI scratch removal genuinely excels at:</p>

<ul>
  <li><strong>High-frequency scratch patterns</strong> — dozens of fine scratches, hairline cracks from aging emulsion, overall craquelure on old prints. The sheer volume of manual work to address this makes AI the only practical option for most people.</li>
  <li><strong>Scratches in background areas</strong> — sky, wallpaper, fabric, furniture. The AI has plenty of contextual information to reconstruct from, and errors are less visible.</li>
  <li><strong>Combined damage</strong> — photos that have scratches plus fading plus noise benefit from the AI's integrated pipeline, which can address all three in one pass rather than requiring separate treatments.</li>
  <li><strong>Faces with scratch damage</strong> — this sounds counterintuitive given the stakes, but GFPGAN-family models are genuinely impressive at reconstructing facial features interrupted by scratch damage. The specialized training on facial geometry gives the model strong priors for what should be there.</li>
</ul>

<h3>Step-by-Step: Removing Scratches with ArtImageHub</h3>

<ol>
  <li><strong>Scan at high resolution.</strong> For a 5×7 print with fine scratches, I use 1200 DPI — you want the scratch to be fully represented in the scan so the AI can characterize it properly. Counterintuitively, low-resolution scans of scratched photos can make scratches harder for the AI to identify because the scratch width approaches the pixel size and looks like noise rather than a distinct pattern. Scan as TIFF if possible, otherwise highest-quality JPEG.</li>
  <li><strong>Go to <a href="/old-photo-restoration">ArtImageHub's restoration tool</a>.</strong> Upload your scanned file.</li>
  <li><strong>Enable face restoration</strong> if the photo contains people. This routes the facial regions through the specialized face model in addition to the general restoration pipeline.</li>
  <li><strong>Run restoration.</strong> For a heavily scratched 1200 DPI scan of a 5×7, expect 60–120 seconds of processing.</li>
  <li><strong>Download and compare at 100% zoom.</strong> Specifically check: (a) are scratches in non-face areas cleanly removed without smearing? (b) In face areas, are features intact and recognizable? (c) Are there any hallucinated details — features that weren't in the original? Open the original and restoration side-by-side. Your eye will catch anything that looks wrong.</li>
</ol>

<p>For David's grandfather, I ran the portrait through <a href="/old-photo-restoration">ArtImageHub</a> first. The result was genuinely remarkable — the major scratch across the face was gone, replaced with reconstructed skin tone and a credible cheek and jaw structure. I then spent about 40 minutes in Photoshop refining the eye area where the scratch had interrupted the most detail-sensitive region of the face. Total time: 45 seconds plus 40 minutes. Without AI, that same job would have been 6–8 hours of manual work.</p>

<h2>Method 2: Photoshop Clone Stamp (The Control Freak's Way)</h2>

<p>I say "control freak" with affection. I am a control freak about photograph restoration. For my most important work — heirloom portraits, museum pieces, photographs where identity accuracy genuinely matters — I still go to Photoshop for the final refinement.</p>

<h3>When Photoshop Is Worth the Effort</h3>

<p>Manual Photoshop work makes sense when:</p>

<ul>
  <li>You need precise control over exactly what gets reconstructed in face regions</li>
  <li>The client has reference photos you can use to guide reconstruction (another photo of the same person, showing the eye/jaw/ear that the scratch obscures)</li>
  <li>The AI output has introduced a hallucinated detail that needs correcting</li>
  <li>The scratch falls across a very high-information area — both eyes, a signature, text — where AI errors would be immediately obvious</li>
</ul>

<h3>Clone Stamp Technique for Scratch Removal</h3>

<p>The clone stamp copies pixels from a source area and paints them over the damaged area. Done well, it's the most controllable method available. Done carelessly, it produces obvious tiling patterns that look worse than the original damage.</p>

<p>Key technique points I've learned from thousands of hours at the tool:</p>

<ul>
  <li><strong>Work on a duplicate layer.</strong> Never clone stamp on the original. Create a new layer set to "Current &amp; Below" sampling so you can paint non-destructively.</li>
  <li><strong>Sample from nearby, similar-texture regions.</strong> The source pixels need to have the same grain pattern, tone, and texture as the destination. On old prints this means working in small sections and re-selecting your source frequently — old print texture is rarely uniform.</li>
  <li><strong>Match the angle.</strong> Film grain has direction. If you clone across the grain direction, the mismatch will be visible at 100% zoom. Rotate your source sample to match the destination grain direction.</li>
  <li><strong>Use a small, soft brush for edges.</strong> Hard brush edges create visible boundaries. Feather the brush edge to 10–20% and build up coverage in multiple passes rather than one heavy application.</li>
  <li><strong>For scratches across faces:</strong> Use the healing brush (not clone stamp) where possible. The healing brush samples texture from the source but blends the tone from the destination, which is critical for skin where tone gradients are complex.</li>
</ul>

<h3>Time Investment</h3>

<p>Be honest with yourself about this before you start. A single fine scratch across a plain background: 5–15 minutes. A complex scratch across a face with multiple overlapping damaged areas: 2–4 hours. A photo with extensive overall scratching: potentially 6–10 hours. Manual scratch removal is skilled, slow work, and the estimate I give clients for a difficult manual restoration often shocks them. This is why AI has legitimately changed the field — not because the AI is always better, but because it handles the 80% case in seconds instead of hours.</p>

<h2>Method 3: Lightroom / Darktable (Quick Fixes)</h2>

<p>For lighter scratch damage — surface scratches, faint lines, minor scuffs — Adobe Lightroom and the free open-source alternative Darktable can handle a lot without ever opening Photoshop.</p>

<h3>Texture and Clarity Adjustments</h3>

<p>Reducing the Texture slider in Lightroom (or the equivalent in Darktable's Contrast Equalizer) can soften the visibility of fine surface scratches by reducing micro-contrast throughout the image. This works best when the scratches are faint enough that reducing overall texture makes the photo look better, not muddy. It's a blunt instrument — you're affecting the entire image, not just the damaged areas — but for a photo with dozens of hairline scratches and no alternative, it can meaningfully improve the result.</p>

<h3>Masking for Targeted Healing</h3>

<p>Both Lightroom Classic and Darktable support masked adjustment brushes that let you paint corrections onto specific areas. For a scratch running through a relatively uniform area — sky, smooth fabric, a plain wall — you can use the healing brush tool within Lightroom's masking panel to remove it without affecting the rest of the image. The quality isn't as good as Photoshop's clone stamp for complex areas, but for simple scratches in simple backgrounds it's genuinely useful and much faster.</p>

<p>Darktable's "retouch" module is surprisingly capable for free software and handles straight-line scratches in smooth areas well. If you're processing a large number of photos and only have light damage, Darktable is worth learning for this use case alone.</p>

<h2>When AI Wins vs When Manual Wins</h2>

<p>After twelve years doing this professionally, here's the honest decision matrix I use for every scratched photograph that comes through my studio.</p>

<table>
  <thead>
    <tr>
      <th>Scenario</th>
      <th>Best Method</th>
      <th>Why</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Many fine scratches across background</td>
      <td>AI</td>
      <td>Volume of work makes manual impractical; AI handles repetitive patterns very well</td>
    </tr>
    <tr>
      <td>Single major scratch across face</td>
      <td>Hybrid (AI first, manual refine)</td>
      <td>AI removes 70–90% of the work; manual refines identity-critical areas</td>
    </tr>
    <tr>
      <td>Scratch across text, signature, or identifiable detail</td>
      <td>Manual (with reference)</td>
      <td>AI hallucination risk is too high for accuracy-critical content</td>
    </tr>
    <tr>
      <td>Light surface scratches, photo otherwise good</td>
      <td>Lightroom/Darktable</td>
      <td>Overkill to use AI pipeline; quick targeted heal is sufficient</td>
    </tr>
    <tr>
      <td>Severe damage (scratch + water + fading)</td>
      <td>AI first, evaluate</td>
      <td>AI integrated pipeline addresses all damage types together; evaluate result before deciding if manual work is needed</td>
    </tr>
    <tr>
      <td>Non-Western faces</td>
      <td>AI first, careful review</td>
      <td>AI models can subtly shift facial features; compare carefully, refine manually if needed</td>
    </tr>
    <tr>
      <td>Only surviving photo of a person</td>
      <td>Hybrid, or professional</td>
      <td>Stakes are too high to rely on AI alone; professional manual work with reference consultation is worth the cost</td>
    </tr>
  </tbody>
</table>

<h2>The Hybrid Approach: AI First, Manual Finish</h2>

<p>This is how I actually work on 90% of the scratched photographs that come through my studio. I want to be transparent about that because I think there's a perception that professionals either fully embrace AI or reject it, and the reality is much more pragmatic.</p>

<p>The workflow:</p>

<h3>Step 1: Run AI Restoration First</h3>

<p>Upload to <a href="/old-photo-restoration">ArtImageHub</a> with face restoration enabled. Let it process. This handles: the background scratch removal, the overall fading and contrast correction, the noise reduction, and the first pass at facial reconstruction. What used to take me 3–4 hours of setup work now happens in 60 seconds.</p>

<h3>Step 2: Evaluate What the AI Got Right and Wrong</h3>

<p>Open the AI output and the original in Photoshop side by side at 100% zoom. I'm looking for three things:</p>

<ul>
  <li><strong>Correct reconstruction areas:</strong> Marks these as done — I don't need to touch them.</li>
  <li><strong>Minor artifacts or imprecision:</strong> Background areas where the inpainting is slightly off-texture, or face areas where the reconstruction is close but not quite right. These get light manual refinement.</li>
  <li><strong>Hallucinated details:</strong> Anything the AI invented that wasn't in the original. These need to be corrected against the source document.</li>
</ul>

<h3>Step 3: Manual Refinement on AI Output</h3>

<p>I work on the AI output, not the original scan. The AI has already done the heavy lifting — I'm refining, not starting from scratch. Using clone stamp and healing brush on a new layer, I address the problem areas identified in step 2. For a photo like David's grandfather, this refinement pass typically takes 30–90 minutes instead of the 6–8 hours a full manual restoration would require.</p>

<h3>Step 4: Final Tone and Color Adjustment</h3>

<p>One quick pass in Lightroom or Photoshop Curves to make sure the overall tone is right. Sometimes the AI overcorrects on contrast or slightly shifts the color temperature. A manual curves adjustment after restoration gives you the final control over how the image looks as a whole.</p>

<blockquote>
  <p>"The first time I tried this hybrid workflow on a complex job, I finished in two hours what would have taken me two days. I sat there slightly stunned. Then I called my colleague who'd been doing AI-first for months and apologized for all the skeptical things I'd said at our last dinner."</p>
</blockquote>

<h2>Frequently Asked Questions</h2>

<h3>Can you remove scratches from a photo without Photoshop?</h3>
<p>Yes — AI tools like <a href="/old-photo-restoration">ArtImageHub</a> handle scratch removal without any Photoshop knowledge required. For minor surface scratches, even Lightroom's healing brush tool works well. Photoshop provides the most control for complex or identity-critical restoration, but for most family photographs, an AI pipeline produces excellent results without manual editing software. If you're considering paying for Photoshop primarily for scratch removal, I'd strongly recommend trying AI restoration first — you may not need Photoshop at all.</p>

<h3>Will scratch removal make the photo look fake?</h3>
<p>The most common cause of that "fake" look is over-processing — running a photo that only needed light treatment through an aggressive pipeline that changes texture, contrast, and detail throughout the whole image. For scratch-only damage on an otherwise good photo, use targeted removal (Lightroom healing brush, or AI with conservative settings) rather than a full restoration pipeline. The other cause is AI hallucination — the AI inventing detail in the reconstructed area that doesn't match the surrounding image. Always compare the result to the original and look for anything that doesn't belong. A good result should look like the photo without the scratch, not like a different photo.</p>

<h3>What's the difference between a scratch and a crack in an old photo?</h3>
<p>Cracks (sometimes called craquelure) are a network of fine breaks in the emulsion caused by the gelatin drying and contracting over time. They're usually distributed across the whole image rather than running in a single line. Scratches are single linear damage events — something sharp dragged across the surface. Both appear as light or dark lines in a scan, but cracks tend to be finer, more numerous, and follow irregular branching patterns. AI restoration handles both well, but if you're using Lightroom's healing brush, it's much more practical for individual scratches than for a network of cracks — for the latter, use an AI tool.</p>

<h3>I only have a phone photo of the scratched print. Will restoration still work?</h3>
<p>It will work, with caveats. A phone photo introduces its own complications: perspective distortion, uneven lighting that creates false shadows across scratches, lens sharpening that interferes with AI analysis. If you must use a phone photo, shoot in a well-lit room with indirect natural light (direct sun creates glare), hold the phone directly parallel to the print (not at an angle), and use the camera app rather than a "document scanner" app. Even a decent phone capture of a scratched print will produce a better AI restoration result than no digitization at all. But if you have access to a flatbed scanner — many libraries offer free scanning days — it's worth making the trip for irreplaceable photographs.</p>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you remove scratches from a photo without Photoshop?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — AI tools like ArtImageHub handle scratch removal without any Photoshop knowledge required. For minor surface scratches, even Lightroom's healing brush tool works well. For most family photographs, an AI pipeline produces excellent results without manual editing software."
      }
    },
    {
      "@type": "Question",
      "name": "Will scratch removal make the photo look fake?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 'fake' look comes from over-processing or AI hallucination. For scratch-only damage on a good photo, use targeted removal rather than a full restoration pipeline. Always compare the result to the original and look for anything that doesn't belong."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between a scratch and a crack in an old photo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cracks (craquelure) are a network of fine breaks in the emulsion distributed across the whole image. Scratches are single linear damage events. Both appear as lines in a scan, but cracks are finer, more numerous, and follow branching patterns. AI restoration handles both well."
      }
    },
    {
      "@type": "Question",
      "name": "I only have a phone photo of the scratched print. Will restoration still work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It will work, with caveats. A phone photo introduces perspective distortion, uneven lighting, and lens sharpening issues. Shoot in indirect natural light, hold the phone parallel to the print, and use the camera app. Even a decent phone capture will produce better AI results than no digitization at all."
      }
    }
  ]
}
</script>

<hr />

<p>David's grandfather's portrait now lives in a frame on David's wall. The scratch is gone. The face is clear — formal, serious, young. You can see the rank insignia on the shoulder. There's a slight imprecision in the jaw reconstruction where the emulsion scratch was deepest, visible at very close range, but at normal viewing distance the photograph tells its story without interruption.</p>

<p>That's what scratch removal is ultimately about: removing the damage so the person in the photograph can be present again. The methods have changed dramatically in the years I've been doing this work. The goal hasn't.</p>

<p>If you have a scratched photograph waiting, start with <a href="/old-photo-restoration">ArtImageHub's free restoration tool</a>. Upload it, run the restoration, and compare the result. For most photographs, you'll have your answer in under two minutes. For the complicated cases — the deep emulsion damage, the only surviving portrait — you now know exactly what's involved and where to start.</p>


---

## Related Articles

- [Restore Your Wedding Photos: How AI is Saving Precious Memor...](/blog/wedding-photo-restoration)
- [Vintage Photo Repair Techniques: Professional Methods for Re...](/blog/vintage-photo-repair-techniques)
- [How to Restore Water Damaged Photographs at Home: Complete G...](/blog/restore-water-damaged-photographs-at-home)

## Quick method comparison: AI vs DIY vs Professional

| Method | Time per photo | Cost | Skill required | Result quality |
|--------|----------------|------|----------------|----------------|
| **AI ([ArtImageHub](/old-photo-restoration))** | 60 seconds | **$4.99 once** (unlimited HD) | None | Excellent (GFPGAN + Real-ESRGAN) |
| Photoshop DIY | 2–10 hours | Photoshop subscription ($55+/mo) | Advanced | Variable (depends on your skill) |
| Professional retoucher | 3–7 days turnaround | $50–300 per photo | None (you hire) | Excellent (but 30x cost) |
| Local print shop | 2–5 days | $20–80 per photo | None | Good |

For typical family-history photos, AI restoration matches professional retoucher quality at 1/30th the cost and 1/4000th the time. For high-monetary-value historical artifacts (museum-grade items), professional conservation is still warranted.



For era-specific damage profiles, see [Old Photo Restoration by Decade complete index](/blog/old-photo-restoration-by-decade-complete-index).

For damage-specific recovery protocols, see [Old Photo Damage Recovery by Type complete guide](/blog/old-photo-damage-recovery-by-type-complete-guide).

Try [ArtImageHub](/old-photo-restoration) directly — $4.99 one-time for unlimited HD restoration.
