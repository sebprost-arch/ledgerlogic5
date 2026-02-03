---
description: Standard workflow for generating and applying LedgerLogic blog hero images.
---

# Blog Image Generation Workflow

Follow this process to ensure all blog images match the "Friendly Professional" aesthetic (Avalon style).

## 1. Style Guidelines
- **Style**: "The Friendly Professional". Flat vector art, approachable, human-centric or organic abstract.
- **Vibe**: Warm, clean, professional but not corporate-stock.
- **Colors**: **DIVERSE PALETTE**. Start with the base Navy/Charcoal, but vary the accents. Use **Teal**, **Lavender**, **Mustard**, **Burgundy**, **Amethyst**, etc. Avoid repeating Terracotta/Sage too often.
- **Texture**: Subtle grain or noise overlay is good.
- **Avoid**: 3D renders, glossy glass, neon lights, hyper-realism.

## 2. Prompt Template
Use this prompt structure:
> "A friendly, flat vector illustration of [Subject]. Features [Human Element or Organic Symbol]. Colors: Terracotta, Sage, Navy Blue. Clean lines, organic shapes, textured grain finish. Approachable professional aesthetic, similar to modern tech editorial illustrations."

## 3. Implementation Steps
1.  **Check Context**: Read the blog post title and content to choose a relevant Subject.
2.  **Generate Image**: Create the image using the prompt template.
3.  **Save Image**: Save to `public/images/blog-heroes/hero_ledgerlogic_[slug_keyword].png`. (Note: Remove color suffix if standardizing).
4.  **Update Data**:
    -   Update `src/data/blogData.ts`: Find the post entry and update the `"image"` field.
    -   Update `src/data/post_images_map.json`: Update/Add the mapping key.

## 4. Verification
-   Ensure the new image style matches `style_preview.md` samples.
-   Verify on localhost that the image appears on the blog post.
