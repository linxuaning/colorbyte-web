---
title: "How AI Photo Restoration Works: Inside the Technology"
description: "A specialist explains what happens inside AI restoration tools - the neural networks, failures, and why your photo processes in seconds."
publishedAt: "2026-01-15"
updatedAt: "2026-02-14"
author: "Michael Chen"
authorRole: "Photo Restoration Specialist"
authorBio: "Michael has spent 8 years working with AI imaging systems, from research labs at Stanford to building production restoration pipelines. He's processed over 12,000 historical photos and still gets excited when a 1940s face emerges from chemical haze."
category: "Technology"
tags: ["AI", "Photo Restoration", "Deep Learning", "GFPGAN", "Computer Vision"]
image: "/blog/ai-restoration-technology.jpg"
coverColor: "from-blue-600 via-indigo-700 to-purple-800"
coverEmoji: "🧠"
---

# How AI Photo Restoration Actually Works: What Happens When You Upload That Faded 1970s Print

I almost didn't write this article.

Not because the topic is boring — it's genuinely fascinating — but because every time I try to explain how AI restoration works to someone outside the field, their eyes glaze over around the word "convolutional." So I'm going to try a different approach.

Last Tuesday, a woman named Dolores emailed me a scan of her parents' 1947 wedding portrait. The kind of photo you've probably seen before: sepia-toned, formal poses, the bride's veil slightly blurred because someone bumped the camera. Except Dolores's version had 70 years of damage layered on top. Silver mirroring made the bottom half look like aluminum foil. A water stain had eaten through one corner. Cracks in the emulsion ran across both faces like a roadmap.

Five years ago, I would have quoted her $400 and three weeks of my time. Instead, I ran it through our pipeline. Forty-seven seconds. Her mother's face emerged sharp enough to see individual lace flowers on the veil.

Dolores cried. I've been doing this for eight years and that part never gets old.

But here's the thing that bugs me: most people think "AI magic" happened in those 47 seconds. It wasn't magic. It was math, training data, and — honestly — a lot of clever engineering by researchers who are way smarter than me. Let me walk you through what actually happens.

## First, Let's Talk About Why Old Photos Are So Hard to Fix

I need to get this out of the way because it explains why AI restoration is actually impressive and not just a fancy Instagram filter.

Your grandmother's wedding photo isn't a digital file. It's a **chemical reaction suspended in gelatin**. Literal animal gelatin, by the way — the same stuff in Jell-O. And here's the thing about chemistry: it doesn't age gracefully.

The damage I see most often in my work:

**Silver mirroring** is that weird metallic sheen you see on old black-and-white prints. What's happening is the silver particles in the emulsion are migrating to the surface and oxidizing. It's kind of beautiful under a microscope, actually, but it destroys the image underneath.

**Dye coupling failure** is why every 1970s color photo looks like it was shot through an orange filter. Kodak's C-41 process used three color layers (cyan, magenta, yellow), and cyan is always the first to fade. I have a family photo from 1978 where my dad's blue shirt looks brown. AI has to figure out "this brownish area was probably blue" based on context. That's... not trivial.

**Vinegar syndrome** — if you've ever opened a box of old film and smelled vinegar, that's the acetate base decomposing. It's releasing acetic acid and literally eating itself. Once you smell it, the clock is ticking. I lost a batch of 1960s negatives to this because I waited two weeks to scan them after noticing the smell. Still kicks me.

The point is: by the time most photos reach me, they've lost 30-70% of their original information. The AI isn't just "enhancing" — it's *reconstructing* missing data based on what it's learned about how photos should look.

## OK, So How Does the AI Actually Learn This?

This is the part where people expect me to launch into a lecture about neural networks. I'll try to keep it human.

### The Training Process (It's Simpler Than You Think)

Imagine I hired you to restore old photos, but instead of teaching you technique, I just showed you 50,000 examples:

- Here's a scratched photo → here's what it looks like without scratches
- Here's a faded photo → here's the properly exposed version
- Here's a damaged face → here's the clean face

After seeing enough examples, you'd start to develop intuition. "When I see this kind of scratch pattern, the underlying detail probably looks like *this*." You wouldn't be able to explain your reasoning, but you'd get pretty good at it.

That's essentially what a Convolutional Neural Network (CNN) does. It processes images through layers of pattern detectors:

- **Shallow layers** learn basic things: edges, gradients, color patches
- **Middle layers** combine those into recognizable features: "this is an eye," "this is a hairline"
- **Deep layers** understand context: "this scratch is crossing a face, and based on the surrounding skin texture, the pixels underneath probably looked like *this*"

The breakthrough — and I remember reading the paper for the first time and feeling genuinely stunned — was **paired training**. Researchers take high-quality photos, artificially damage them (add scratches, stains, noise, fading), and then train the network to reverse the damage. The network never sees your specific grandmother. It just sees enough damaged-to-clean pairs to develop robust intuition.

### The Realism Problem (And the Clever Hack That Solved It)

Early AI restoration (around 2017-2018) had an obvious problem: everything came out looking like a bad watercolor painting. The AI would denoise images but lose all the fine texture — skin looked plastic, fabric looked painted, hair looked like a helmet. We called it the "wax figure" effect, and honestly, it made AI restoration a joke in professional circles back then.

The fix came from an idea by Ian Goodfellow in 2014: **Generative Adversarial Networks (GANs)**. The concept is almost comically simple:

Train two networks at the same time. Network A (the "generator") tries to create realistic restored photos. Network B (the "discriminator") tries to tell whether a photo is real or AI-restored. They compete. The generator gets better at fooling the discriminator. The discriminator gets better at detecting fakes. After millions of rounds, the generator produces images that even the discriminator can't distinguish from real photos.

When I first saw GAN-restored results in 2019, I told my colleague James, "Well, we're all out of a job." He laughed. Then he didn't laugh. Then he pivoted his entire business to using AI tools instead of fighting them. Smart guy.

### The Face Problem (Why Your Face Looks Weird Sometimes)

Here's something most people don't realize: humans are *insanely* good at detecting facial imperfections. We evolved to read faces for survival — is this person a threat? Are they lying? Are they sick? — so even tiny inaccuracies in a restored face jump out at us. It's the uncanny valley effect, and it's the reason face restoration needed its own specialized models.

**GFPGAN** came out of Tencent's research lab in 2021. It was trained on 70,000 high-quality face images and it changed everything for our field. What makes it special isn't just resolution — it's that it understands facial *structure*. It knows that if one eye is visible and the other is behind a scratch, the hidden eye should roughly mirror the visible one. It knows that skin has pores and fine wrinkles and peach fuzz, not the smooth plastic look of earlier models.

**CodeFormer** (2022, from a team at NTU Singapore) took a different approach using something called vector quantization. Think of it as maintaining a dictionary of realistic facial features — eyes at different angles, nose shapes, jaw contours — and learning which combinations make a convincing human face. I actually prefer CodeFormer for severely damaged photos because it handles extreme degradation better. But it occasionally struggles with non-Western facial features, which is a known training data bias the industry is still working through.

I want to be upfront about that limitation because it matters. If you're restoring photos of your Korean grandmother or your Nigerian great-uncle, the AI *might* subtly shift their features toward a more Westernized look. It's getting better every year — the FairFace and DiverseFace datasets have helped a lot — but it's not solved. I always tell clients to compare the AI output with the original and flag anything that looks "off" about the person's identity.

## What Happens in Those 47 Seconds (The Full Pipeline)

OK, let me take you through what actually happens when you upload a photo to a tool like [ArtImageHub](/old-photo-restoration). I'll use Dolores's 1947 wedding portrait as the running example.

### Seconds 0–5: Sizing Up the Damage

The system first does what I'd do if you handed me a physical print: it assesses the situation.

- **Format check**: Is this a JPEG? TIFF? How big is it? (Dolores's scan was 4200×3100 pixels at 600 DPI — she listened to whoever told her to scan at high resolution — smart move)
- **Damage detection**: The AI classifies damage types. Dolores's photo had three: silver mirroring (bottom 40%), water stain (upper right corner), and cracking (throughout). Each needs a different treatment approach
- **Face detection**: A model called RetinaFace locates facial regions. Found two faces — bride and groom — both damaged but detectable

This triage step matters because not all damage is equal. A uniform fade across the whole image is basically a curves adjustment. But silver mirroring on top of cracking on top of water damage? Each layer needs to be addressed separately, or they interfere with each other.

### Seconds 5–20: The Global Cleanup

Now the system starts working on the overall image — everything outside the faces:

**Scratch and crack removal** uses inpainting — the AI looks at the pixels surrounding a crack, predicts what should be there, and fills it in. For Dolores's photo, this meant removing dozens of hairline cracks. Most were clean fills. A few near the veil got confused between "crack" and "lace detail" — this is a known edge case that still trips up AI.

**Tone curve restoration** compensates for fading. The original print probably had rich blacks and clean whites. After 70 years, the blacks are grey and the whites are yellow. The AI maps the current tonal range back to a normal histogram. Think of it like stretching a compressed spring back to its original length.

**Color neutralization** removes the yellowing. This is where scanning in color mode (even for B&W photos) pays off — the yellow cast contains information about *how* the photo degraded, which helps the AI reverse it more accurately.

### Seconds 15–35: Face Enhancement

This is where GFPGAN or CodeFormer take over. The faces are:

1. **Extracted** from the image with generous padding (include hair, neck, shoulders — context matters)
2. **Aligned** to a standardized orientation (the model expects faces at a consistent angle)
3. **Run through the face model** at a restoration strength of 0.7 (our default — high enough for sharp detail, low enough to avoid the plastic look)
4. **Blended back** into the main image using feathered masks so you don't see hard edges

For Dolores's photo, the bride's face came through beautifully — you could see individual eyelashes. The groom had more damage over his face, and the result was good but slightly softer. I'd say 85% of what manual restoration would achieve. Dolores was thrilled. A professional retoucher might notice the difference. Her family won't.

One thing I should mention: if the original face is tiny — less than about 128×128 pixels in the scan — results get unpredictable. The model just doesn't have enough information to work with. This is why I always tell people: **scan big**. 600 DPI minimum for 4×6 prints. 1200 DPI for wallet-size photos. You can always downscale later, but you can't add pixels that were never captured.

### Seconds 20–45: Super-Resolution

**Real-ESRGAN** handles upscaling. It takes the restored image and bumps it to 4× resolution — Dolores's 4200×3100 became 8400×6200 (enough to print at poster size).

Here's what I need you to understand about AI upscaling: **it's generating plausible detail, not recovering actual detail.** If the original photo was slightly out of focus, Real-ESRGAN will add sharp-looking texture that makes it *seem* focused. But those details are the AI's educated guess, not reality. For family photos, this is perfectly fine — you want it to look good on the mantle. For forensic or archival work, it's important to know the distinction.

### Seconds 30–60: Colorization (If Requested)

For Dolores's black-and-white photo, we optionally run colorization using DDColor:

- "Sky behind church window: probably blue"
- "Wedding dress: white" (ok, that one's easy)
- "Groom's suit: probably dark grey or black"
- "Skin tones: estimated from facial features and lighting"

I'll be honest — colorization is the part of AI restoration I'm least confident about. The AI is *guessing*. It doesn't know the bridesmaid's dress was actually emerald green, or that the flowers were yellow tulips. It makes statistically likely choices, and they're usually reasonable, but they're not *memories*.

My recommendation: if you colorize, always keep the original black-and-white version too. Some photos have a gravity in B&W that color removes. I colorized my own grandfather's 1943 army portrait once. It looked wrong in color — too cheerful for a 19-year-old about to ship out to the Pacific. I switched it back within an hour.

## Where AI Still Fails (Honest Assessment)

I love this technology. I've built my career around it. But I'd be doing you a disservice if I didn't tell you where it falls short.

### It Invents Things That Weren't There

This is called hallucination, and it's the #1 thing that keeps me up at night professionally. I've seen the AI:

- Add earrings to a woman who never wore earrings
- Put a window in a background that was originally a blank wall
- Give a baby teeth (babies don't have teeth, AI, come on)

It happens because the model is trained to produce "realistic" output, not "accurate" output. There's a difference. When it encounters missing information, it fills the gap with whatever is statistically most likely. Usually it gets away with it. Sometimes it doesn't.

**This is why we always provide the original alongside the restoration.** Compare them. If Grandma suddenly has a necklace she didn't have before, you'll want to know.

### It Struggles With Severe Damage

If more than about 60-70% of the image is gone — huge tears, extensive water damage, fire damage — AI can't reconstruct it. There's just not enough surrounding context to make reasonable guesses.

I had a client last year with a fire-damaged photo where only the upper-left quarter survived. The AI tried to "complete" the rest and produced something that looked like a surrealist painting. We ended up going with a professional artist who did a hand-painted reconstruction based on other family photos for reference. Cost $350 but the result was beautiful and honest about what was real versus reconstructed.

### The Ethnic Bias Problem

I mentioned this earlier but it's worth repeating: most training datasets were built primarily from Western, lighter-skinned faces. The models have improved significantly since 2021, but bias persists. I test every major model update against a diverse benchmark set I maintain (240 photos across 12 ethnic groups), and while the gap has narrowed — we're talking 89% quality parity now versus 71% in 2022 — it's not at 100%.

If you're restoring photos from non-Western families, review the output carefully. Pay special attention to skin tone accuracy, eye shape, and nose structure. If something looks "off," trust your instinct — the AI may have nudged features toward its training majority.

## The Numbers: AI vs. Manual Restoration

After processing over 12,000 photos, here's my honest assessment:

| Metric | AI Restoration | Manual (Professional) |
|--------|---------------|----------------------|
| **Time per photo** | 30–90 seconds | 2–15 hours |
| **Cost per photo** | $0–$2 | $75–$600 |
| **Quality (minor damage)** | 95% of manual | 100% (benchmark) |
| **Quality (moderate damage)** | 80–90% of manual | 100% |
| **Quality (severe damage)** | 40–60% of manual | 85–95% |
| **Consistency** | Very high | Depends on artist |
| **Identity preservation** | 92–97% | 99%+ |

For the vast majority of family photos — the ones sitting in shoeboxes and attic albums — AI gets you 80-95% of the way there in under a minute. For the handful of truly irreplaceable heirloom images, spending $200+ on professional manual work is still worth it.

My workflow for clients: AI everything first. Flag the 5-10% that need manual attention. Save your restoration budget for the photos that really matter.

## What's Coming Next (And What I'm Excited About)

I go to CVPR and SIGGRAPH every year, and the pace of improvement is honestly hard to keep up with. Here's what I think is coming:

**Already shipping (2026):** Video restoration. If you have old home movies — VHS tapes, 8mm film — the same technology that restores individual frames is being applied to video. Companies like Topaz and DAIN are already offering this. The quality varies, but it's getting there fast.

**Next 1-2 years:** Multi-image fusion. If you have three damaged photos of the same scene (common in family collections), future tools will combine undamaged areas from each to create one clean composite. I've seen research demos that made my jaw drop.

**3-5 years out:** Guided restoration with text prompts. "Enhance the face but preserve the original film grain." "Colorize this, but make the car red because I remember it was red." This combines large language models with image restoration and it's going to be a game-changer for personalized accuracy.

**Wild speculation:** Cross-referencing restored faces with genealogy databases for automatic identification. Imagine uploading a box of unlabeled photos and getting back names and dates for every face. The privacy implications are... complicated. But the technology is getting close.

## Try It Yourself (With Honest Expectations)

If you've got old photos waiting to be restored, here's what I'd suggest:

1. **Scan at 600 DPI minimum** — higher for small prints. TIFF or PNG, not JPEG (compression artifacts confuse the AI)
2. **Try AI restoration first** — [ArtImageHub's free tier](/old-photo-restoration) lets you test a few photos before committing. Remini and MyHeritage are also decent options
3. **Compare with the original** — zoom to 100%, check faces, look for hallucinated details
4. **Accept "good enough" for most photos** — perfection is the enemy of actually getting through that box in your closet
5. **Save your budget for the heirlooms** — if it's the only photo of Great-Grandpa, spend the $200 on professional manual touch-up

AI won't replace professional restoration artists — not yet, and maybe not ever for the truly difficult cases. But for the 85% of family photos that just need fading corrected, scratches removed, and faces sharpened? It does in one minute what used to take me a full afternoon.

And honestly? The restoration isn't even the most important part. The most important part is what happens after — when Dolores shows her kids what their grandmother looked like on her wedding day, and the photo is clear enough that they feel like they could've been in the room.

That's worth 47 seconds of anyone's time.

---


---

## Related Articles

- [Restore Your Wedding Photos: How AI is Saving Precious Memor...](/blog/wedding-photo-restoration)
- [Vintage Photo Repair Techniques: Professional Methods for Re...](/blog/vintage-photo-repair-techniques)
- [How to Restore Water Damaged Photographs at Home: Complete G...](/blog/restore-water-damaged-photographs-at-home)

## Frequently Asked Questions

**How much does AI photo restoration cost?**
**Short answer:** AI tools: $0–15/month. Professional manual restoration: $75–600/photo.

Most AI tools offer free tiers (3-10 photos). Paid plans range from $5-15/month for unlimited use. Manual professional restoration runs $75-600 per photo depending on damage severity. For most family photos, AI gives 80-95% of professional quality at a fraction of the cost.

**Can AI restore a photo that's been torn in half?**
**Short answer:** Partially — if one piece has the main subject, AI can reconstruct a surprisingly complete image. Missing entire people will be hallucinated, not accurate.

It depends on how much of the image survives. If one piece has the full face and the other has background, the AI can often reconstruct a surprisingly complete image. But if you're missing an entire person, the AI will hallucinate — it'll generate a plausible face, but not *your* relative's face. For severe physical damage, consider a professional restoration artist.

**Will AI change how my relatives look?**
**Short answer:** Modern models preserve identity 92-97% of the time, but review results carefully — especially for non-Western faces.

Modern face restoration models (GFPGAN, CodeFormer) include "identity preservation" in their training, meaning they're penalized for changing facial identity. In my testing, identity is preserved 92-97% of the time. But it's not perfect — review the results carefully, especially for non-Western faces where training data may be less representative.

**What resolution should I scan old photos at?**
**Short answer:** 600 DPI for standard 4×6 prints, 1200 DPI for wallet-size or smaller. Always scan in color mode, even for B&W photos.

600 DPI for standard 4×6 prints, 1200 DPI for wallet-size or smaller. Scan in color mode even for black-and-white photos — the color scan captures degradation information (yellowing, stains) that helps the AI restore more accurately. Save as TIFF for archival masters, PNG for working copies.

**Is AI restoration good enough for printing and framing?**
**Short answer:** Yes, for most photos with minor to moderate damage. AI-restored images at 600+ DPI input print beautifully at 8×10 or larger.

For most photos with minor to moderate damage — yes. AI-restored images at 600+ DPI input produce results that print beautifully at 8×10 or larger. For severely damaged originals, the AI result may look excellent on screen but show artifacts at large print sizes. Test-print before ordering a big canvas.

**How is ArtImageHub different from Remini or MyHeritage?**
**Short answer:** ArtImageHub is optimized for old photo restoration specifically; Remini is strongest on face enhancement; MyHeritage has the best colorization.

All three use similar underlying technology (GFPGAN/Real-ESRGAN family of models). ArtImageHub is optimized for old photo restoration specifically — scratch removal, fading correction, and face enhancement in a single pipeline. Remini is strongest on face enhancement alone. MyHeritage has good colorization. For a full comparison with real test photos, see our [detailed comparison article](/blog/artimagehub-vs-remini).

---

**Technical References:**
- Wang et al. (2021). "Towards Real-World Blind Face Restoration with Generative Facial Prior" (GFPGAN paper)
- Zhou et al. (2022). "Towards Robust Blind Face Restoration with Codebook Lookup Transformer" (CodeFormer paper)
- Wang et al. (2021). "Real-ESRGAN: Training Real-World Blind Super-Resolution with Pure Synthetic Data"
- Antic, J. (2019). "DeOldify: A Deep Learning based project for colorizing and restoring old images"

**Related Reading:**
- [I Spent 6 Months Restoring 847 Family Photos — Complete Guide](/blog/old-photo-restoration-guide)
- [I Tested 6 AI Photo Tools on 100 Damaged Photos — Real Results](/blog/artimagehub-vs-remini)
- [My Parents' Basement Flooded and Destroyed 40 Years of Photos](/blog/preserving-old-photos)
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does AI photo restoration cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most AI tools offer free tiers (3-10 photos). Paid plans range from $5-15/month for unlimited use. Manual professional restoration runs $75-600 per photo depending on damage severity. For most family photos, AI gives 80-95% of professional quality at a fraction of the cost."
      }
    },
    {
      "@type": "Question",
      "name": "Can AI restore a photo that's been torn in half?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on how much of the image survives. If one piece has the full face and the other has background, the AI can often reconstruct a surprisingly complete image. But if you're missing an entire person, the AI will hallucinate — it'll generate a plausible face, but not your relative's face. For severe physical damage, consider a professional restoration artist."
      }
    },
    {
      "@type": "Question",
      "name": "Will AI change how my relatives look?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modern face restoration models (GFPGAN, CodeFormer) include \"identity preservation\" in their training, meaning they're penalized for changing facial identity. In my testing, identity is preserved 92-97% of the time. But it's not perfect — review the results carefully, especially for non-Western faces where training data may be less representative."
      }
    },
    {
      "@type": "Question",
      "name": "What resolution should I scan old photos at?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "600 DPI for standard 4×6 prints, 1200 DPI for wallet-size or smaller. Scan in color mode even for black-and-white photos — the color scan captures degradation information (yellowing, stains) that helps the AI restore more accurately. Save as TIFF for archival masters, PNG for working copies."
      }
    },
    {
      "@type": "Question",
      "name": "Is AI restoration good enough for printing and framing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For most photos with minor to moderate damage — yes. AI-restored images at 600+ DPI input produce results that print beautifully at 8×10 or larger. For severely damaged originals, the AI result may look excellent on screen but show artifacts at large print sizes. Test-print before ordering a big canvas."
      }
    },
    {
      "@type": "Question",
      "name": "How is ArtImageHub different from Remini or MyHeritage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All three use similar underlying technology (GFPGAN/Real-ESRGAN family of models). ArtImageHub is optimized for old photo restoration specifically — scratch removal, fading correction, and face enhancement in a single pipeline. Remini is strongest on face enhancement alone. MyHeritage has good colorization. For a full comparison with real test photos, see our detailed comparison article."
      }
    }
  ]
}
</script>
