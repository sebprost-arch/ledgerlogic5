# LedgerLogic WordPress → Antigravity Export

This folder was generated from your WordPress WXR export XML.

## What's inside
- `posts/` : published posts, each in its own folder: `posts/<slug>/index.md`
- `drafts/` : non-published posts (draft/private/etc.) in the same structure
- `posts_manifest.csv` : index of all exported posts
- `media_manifest.csv` : list of image/file URLs referenced inside posts (WordPress XML usually references media rather than bundling it)

## How to use with an Antigravity-built site
Antigravity is typically used to build a code-based website (e.g., Next.js, Astro). Most of these blogs can ingest Markdown files from a `content/` folder.

Common patterns Antigravity can adapt to:
- Folder-per-post: `content/posts/<slug>/index.md`  ✅ (this export matches this pattern)
- Flat files: `content/posts/<slug>.md` (can be auto-converted if needed)

If you tell me what framework your Antigravity project uses (Next.js / Astro / something else) and where it expects posts, I can produce a second export that matches it exactly.

## Notes
- If Markdown conversion wasn't available in this environment, your post bodies may still be HTML inside the `.md` files. That still works for many setups, or Antigravity can convert them during integration.
