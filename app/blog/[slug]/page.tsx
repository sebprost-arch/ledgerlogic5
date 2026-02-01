// Import the BlogPost component (which we will convert to a client component for interactivity or keep as server if no interaction needed)
// Actually, BlogPost.tsx needs to be split. The main layout can be server, but interactive bits (shortcodes, share buttons) should be client.
// For now, let's keep BlogPost.tsx as the main view and pass data to it.
import BlogPost from '../../../src/views/BlogPost';
import { Metadata } from 'next';
import { blogPosts } from '../../../src/data/blogData';

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        return {
            title: 'Blog | LedgerLogic',
            description: 'Insights and resources for Canadian business owners.',
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            url: `https://ledgerlogic.ca/blog/${post.slug}`,
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
            publishedTime: post.date,
            authors: [post.author],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

import BlogJsonLd from '../../../src/components/BlogJsonLd';
import { injectInternalLinks } from '../../../src/lib/internalLinks';

export default async function Page({ params }: Props) {
    const postMetadata = blogPosts.find((p) => p.slug === params.slug);

    if (!postMetadata) {
        return <div>Post not found</div>;
    }

    let content = postMetadata.content || '';

    // If content is missing in blogData.ts, try loading from JSON
    if (!content) {
        try {
            const postData = await import(`../../../src/data/posts/${params.slug}.json`);
            content = postData.content;
        } catch (err) {
            console.error("Failed to load post content:", err);
            content = "<p>Failed to load content.</p>";
        }
    }

    // Inject internal links
    content = injectInternalLinks(content);

    // Find related posts (same category, excluding current)
    const relatedPosts = blogPosts
        .filter(p => p.category === postMetadata.category && p.slug !== params.slug)
        .slice(0, 3);

    // If we don't have enough same-category posts, fill with recent ones
    if (relatedPosts.length < 3) {
        const recent = blogPosts
            .filter(p => p.slug !== params.slug && !relatedPosts.find(r => r.slug === p.slug))
            .slice(0, 3 - relatedPosts.length);
        relatedPosts.push(...recent);
    }

    return (
        <>
            <BlogJsonLd post={postMetadata} />
            <BlogPost
                post={{ ...postMetadata, content }}
                relatedPosts={relatedPosts}
            />
        </>
    );
}
