---
title: "How to Restore Military Service Photos from WWII, Korea, and Vietnam"
description: "Restore WWII, Korea, and Vietnam military photos — unit group shots, Dog Tags, water damage from overseas shipping. GFPGAN face recovery and technical guidance."
publishedAt: "2026-05-08"
updatedAt: "2026-05-08"
author: "Maya Chen"
authorRole: "Photo Restoration Specialist"
authorBio: "Maya Chen has spent over a decade helping families recover and preserve their most treasured photo memories using the latest AI restoration technology."
category: "Guide"
tags: ["military photos restoration", "WWII photos", "GFPGAN face restoration", "old photo repair"]
image: "/images/blog/how-to-restore-military-service-photos.jpg"
coverColor: "#f5f0eb"
coverEmoji: "🎖️"
faq:
  - question: "How can I identify the era of an undated military photo from uniform details?"
    answer: "Several uniform features serve as reliable period identifiers in American military photos. For World War II Army images, the M1941 field jacket with its straight front zipper and the M1 steel helmet with its distinctive wide brim are reliable markers. The Class A service uniform with its chest pockets and the Ike jacket introduced in 1944 help narrow dating further within the war years. Korean War era photos typically show the M1951 field jacket with its improved closure system and the distinctive M1 helmet with steel shell and liner. Vietnam era Army photos show the OG-107 (olive green) utility uniform introduced in the late 1950s, transitioning to the four-pocket jungle fatigue jacket by the mid-1960s. Branch insignia placement, collar rank versus shoulder rank, and arm patch positioning all changed with specific regulations during each conflict. The National Archives and unit history websites maintained by veterans organizations can help cross-reference uniform details with known photographs to confirm period."
  - question: "Can GFPGAN recover individual faces in large military unit group photos?"
    answer: "GFPGAN's face recovery capability depends heavily on the pixel count of each face in the uploaded image. Large military unit photos — a full company formation of 100 or more soldiers — present individual faces at very small sizes, often below 20x20 pixels in a standard scan. At that resolution, GFPGAN cannot reliably detect facial geometry for guided reconstruction. The critical preparation step is scanning at 1200 DPI rather than 300 DPI before uploading. This increases the pixel count of each face by a factor of sixteen, moving many faces into GFPGAN's reliable working range of 50x50 pixels or above. Smaller group shots of 10 to 30 individuals show markedly better face recovery results. Squad photos — typically 8 to 12 people shot at close range — often show excellent restoration with individual faces recovering recognizable features. For the largest company and battalion formation photos, realistic expectations are improved clarity with partial face recovery on front-row figures and limited recovery on those further back."
  - question: "What film types were used by military photographers and how does that affect restoration?"
    answer: "Military photographers during World War II and Korea used primarily Kodak Plus-X (medium speed, fine grain) and Super-XX (faster, more grain) black-and-white panchromatic negative film. Signal Corps photographers working in the field used Speed Graphic cameras and medium-format rollfilm. Combat photographers frequently used the Kodak Medalist or Speed Graphic with sheet film. The resulting negatives have excellent tonal range when processed properly, but decades of storage in suboptimal conditions — often in cardboard boxes, metal tins, or paper envelopes — produced characteristic yellowing, edge cracking, and emulsion crazing. Vietnam era photography introduced 35mm color negative film widely, with photographers using Kodacolor-X and Ektacolor under field conditions that frequently resulted in uneven development, color cast, and grain from field processing labs. NAFNet addresses the grain of fast field films, while Real-ESRGAN handles the upscaling and detail recovery across all of these source formats."
  - question: "Is Dog Tag text legible after AI restoration of military photos?"
    answer: "Dog Tag legibility in restored military photos depends on the source resolution and the size of the tags in the original photo. Dog Tags in the United States military have measured roughly 2 inches by 1 inch since the World War II era, with embossed text at approximately 1/8 inch height. In a standard portrait photograph, the tags may occupy 50 to 100 pixels of width in a 300 DPI scan, making individual letters 5 to 10 pixels tall — below reliable legibility threshold. At 1200 DPI scan resolution, the same tags occupy 200 to 400 pixels of width, and letters become 20 to 40 pixels tall, approaching the range where Real-ESRGAN can recover letter forms. GFPGAN specifically targets faces and does not apply its hallucination approach to text. For Dog Tag legibility, the realistic expectation is that improved scan resolution combined with Real-ESRGAN upscaling may reveal partial text — first name and initial, sometimes a service number — in close-range portrait shots where the tags are prominently featured. In full-body shots at distance, tags will not be legible regardless of restoration."
  - question: "How does water damage from overseas shipping affect military photos and what can AI fix?"
    answer: "Photos shipped overseas or returned from service through military mail systems were vulnerable to saltwater humidity during ocean transit, condensation during air transport, and direct water exposure from leaking packaging. Water damage to photographic prints causes several distinct problems. Tide lines — the wave-like staining patterns left when water partially wets a print and then dries — are the most common result and appear as brown or gray irregular borders across the image. Active water immersion can cause the gelatin emulsion to swell and potentially separate or crack when drying. Long-term humidity exposure promotes mold growth that consumes the gelatin and leaves characteristic fuzzy brown colonies across the image surface. AI restoration handles mild tideline staining reasonably well when the staining does not cross critical image areas at high contrast. Mold damage that consumed the emulsion represents permanent information loss — Real-ESRGAN fills those areas with synthesized content. The preview step at ArtImageHub is particularly useful for water-damaged military photos because it reveals immediately whether the damage is in the category of correctable discoloration or actual emulsion loss."
---

> **Preserve a service record**: Upload a military photo to [ArtImageHub](https://artimagehub.com/old-photo-restoration) and preview the restored version before any payment — $4.99 one-time for the full-resolution download.

Military service photographs hold a particular kind of historical weight. They are records of individuals at a defined moment of national service — often the only formal portrait a young soldier sat for before deployment. Restoring them requires understanding both the technical characteristics of how those photos were made and the damage patterns that decades of storage created.

## How Do You Identify the Period of an Undated Military Photo?

Families frequently inherit military photographs with no date written on the back. Identifying the period from uniform details is often possible with attention to specific features.

**World War II (1941–1945)**:
The U.S. Army standard uniform in this period included the M1937 (HBT) utility uniform and the Class A service uniform with its distinctive four-button front. The M1 steel helmet with its wide brim and rear curl is one of the most identifiable markers. The Eisenhower jacket (Ike jacket), introduced in 1944, appears in late-war and postwar photos. Branch insignia appear on the collar for enlisted personnel. Rank chevrons appear on the upper sleeve.

**Korean War (1950–1953)**:
The M1951 field jacket replaced earlier patterns with an improved front closure system and hood attachments. The M1 helmet continued in use. Officer rank shifted progressively from collar to shoulder in this period, and theater-specific patches provide dating clues when identifiable.

**Vietnam War (1955–1975)**:
The OG-107 (olive green) cotton utility uniform is the dominant marker from the late 1950s onward. The four-pocket jungle fatigue jacket became standard in the mid-1960s and is one of the most recognizable Vietnam-era uniform elements. The M1 helmet gave way to the Personnel Armor System for Ground Troops (PASGT) in the early 1980s, after the Vietnam conflict, so its presence confirms pre-1980 dating.

For unit patches, the Quartermaster Corps of the National Archives maintains photographic records that can help identify patch designs and their associated units and periods.

## How Does GFPGAN Restore Faces in Military Group Photos?

The military unit photograph — a formal lineup of a squad, platoon, or company — is one of the most commonly requested military photo restorations. It is also one of the most technically demanding because of the face-size problem at scale.

Consider the physics: a platoon photograph of 40 soldiers arranged in three rows and photographed at 15 feet produces individual faces measuring approximately 0.3 inches on a 4x6 print. At 300 DPI scan resolution, each face occupies roughly 18x18 pixels. GFPGAN requires a minimum of approximately 40x40 pixels to achieve reliable facial geometry reconstruction — 18x18 pixels is below that threshold.

**The single most effective preparation step is scanning at 1200 DPI.** At 1200 DPI, the same 18x18 pixel face becomes a 72x72 pixel face — well within GFPGAN's reliable range. The difference in face recovery between a 300 DPI and 1200 DPI scan of the same military group photo is consistently dramatic.

**Expected results by photo type**:

| Photo Type | Typical Face Size at 300 DPI | GFPGAN Recovery |
|---|---|---|
| Full company formation (100+) | 8-15 pixels | Limited; front row only |
| Platoon photo (30-40 soldiers) | 15-25 pixels | Partial at 300 DPI; good at 1200 DPI |
| Squad photo (8-12 soldiers) | 40-70 pixels | Good to excellent |
| Individual portrait | 200+ pixels | Excellent |

For the largest formation photographs, it is worth obtaining a high-resolution professional scan of the original negative if one survives. Military photographers often gave negatives to subjects or filed them with unit records. The National Personnel Records Center in St. Louis maintains some unit photography records from this era.

## What Film Did Military Photographers Use?

Understanding the source film type helps calibrate restoration expectations.

**World War II**: Signal Corps photographers used Kodak Plus-X (ASA 100) and Super-XX (ASA 200) panchromatic black-and-white negative film in Speed Graphic 4x5 and Medalist medium-format cameras. The 4x5 sheet film negatives produce excellent tonal range when processed properly. The relatively large negative size means more original detail per face in group photos. However, 40+ years of storage in paper envelopes or metal tins causes characteristic edge yellowing, emulsion crazing, and occasional mold damage.

**Korean War**: Similar film stocks continued in use, with the introduction of faster ASA 400 stocks for combat photography. Medium-format 120 rollfilm became more common alongside sheet film.

**Vietnam**: Color photography became standard in this era. Military photographers used Kodacolor-X and Ektacolor negative film under field conditions. Field processing laboratories operated by the services produced prints with variable quality depending on temperature control and chemical freshness. Many Vietnam-era prints show color casts from inconsistent field processing — typically a green or magenta shift from inaccurate chemistry dilution. ArtImageHub's pipeline normalizes these casts as part of the restoration workflow.

For Vietnam-era color prints, NAFNet addresses the grain from fast field film stocks, and Real-ESRGAN handles upscaling and detail recovery.

## What Happened to Photos Shipped Overseas or Through Military Mail?

Military photos traveled through several hazardous transit environments that left characteristic damage patterns.

**Ocean transit**: Packages traveling by ship were exposed to saltwater humidity and temperature fluctuations during transit — typically 2 to 4 weeks crossing the Pacific or Atlantic. High ambient humidity caused photographs sealed in envelopes or packages to absorb moisture, promoting early stages of gelatin swelling. Prints that arrived intact but spent time in high humidity before storage often show tideline patterns at their edges from repeated moisture cycles.

**Direct water immersion**: Photographs in duffle bags, footlockers, or personal effects that were stored below decks on ships or in field conditions with rain exposure sometimes experienced direct water contact. Water immersion causes gelatin to swell dramatically and adhere to adjacent surfaces. When dried, the gelatin can crack, flake, or remain stuck to whatever surface it contacted. Separating a stuck print from its backing without further damage requires physical conservation techniques beyond digital restoration.

**Long-term storage in inadequate conditions**: Many returned soldiers stored photographs in cardboard boxes in basements, garages, or attics — environments with temperature extremes and humidity fluctuations. This causes the characteristic damage package of yellowing, brittleness, and mold that affects so many military prints presented for restoration.

---

> **Preserve what remains**: [ArtImageHub](https://artimagehub.com/old-photo-restoration) previews the restored result before any payment. For military photos with water damage, the preview reveals exactly what the AI can recover from your specific print.

---

## How Should You Prepare Military Photos for Best Restoration Results?

Before uploading to ArtImageHub:

**Scan at 1200 DPI**. This is especially important for group formation photos where face recovery is the primary goal. The improvement in face legibility between 300 DPI and 1200 DPI uploads is the largest single variable in restoration quality.

**Handle with cotton gloves**. Finger oils accelerate deterioration and can create pressure marks on aged emulsions. If the print is brittle, support it from underneath rather than bending it toward the scanner glass.

**If the print is stuck to glass or another surface**, do not force separation. Scan through the glass if possible, or digitize with a camera rather than risking damage. Physical conservation of stuck prints requires a conservator.

**Save the original unmodified scan**. The restored version is a new derived file. Your original scan is the archival record of the print's condition before restoration.

**Review the preview carefully**. ArtImageHub shows a full restoration preview before any payment. For military photos with water damage or mold, the preview tells you immediately whether the damage is in the correctable range or represents emulsion loss that the AI is filling with synthesized content.

The $4.99 one-time download fee means you can verify the result meets your needs before committing.

---

*Restoring a military service photo? [Start with ArtImageHub's free preview](https://artimagehub.com/old-photo-restoration) — upload the photo, confirm the AI can recover what matters, then download the full-resolution restored version for $4.99 one-time.*
