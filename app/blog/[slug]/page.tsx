import BlogPostContent from '../../../src/views/BlogPost';
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
            publishedTime: post.date, // Assuming format 'October 1, 2023', might need normalization if ISO required strict
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

export default function Page({ params }: Props) {
    return <BlogPostContent slug={params.slug} />;
}
