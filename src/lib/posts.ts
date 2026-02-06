// src/lib/posts.ts
import "server-only";
import path from "node:path";
import fs from "node:fs";

import { blogPosts as blogData } from "@/data/blogData";

export type BlogPostMeta = {
    slug: string;
    title: string;
    description?: string;
    excerpt?: string;
    date: string; // ISO or YYYY-MM-DD
    tags?: string[];
    category?: string;
    image?: string; // keep if you use it in cards
};

function safeReadJson<T>(filePath: string): T | null {
    try {
        const raw = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(raw) as T;
    } catch {
        return null;
    }
}

export function getAllPosts(): BlogPostMeta[] {
    // Prefer blogData as the source of truth for listings (fast + typed)
    // Casting to unknown first to avoid partial overlap issues if types diverge slightly
    const posts = (blogData as unknown as BlogPostMeta[]).slice();

    // Optional: enrich from JSON backups (only if you want)
    // e.g., ensure description/excerpt exists if missing in blogData
    const postsDir = path.join(process.cwd(), "src", "data", "posts");
    return posts
        .map((p) => {
            // JSON files might contain specific overrides or extra metadata
            const json = safeReadJson<Partial<BlogPostMeta>>(
                path.join(postsDir, `${p.slug}.json`)
            );
            return { ...p, ...json, slug: p.slug };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function filterPosts(posts: BlogPostMeta[], q?: string) {
    if (!q) return posts;

    const needle = q.toLowerCase().trim();
    return posts.filter((p) => {
        const hay = [
            p.title,
            p.description,
            p.excerpt,
            p.category,
            ...(p.tags ?? []),
            p.slug,
        ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

        return hay.includes(needle);
    });
}
