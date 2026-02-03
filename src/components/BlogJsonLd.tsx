import { BlogPost } from '../data/blogData';

export default function BlogJsonLd({ post }: { post: BlogPost }) {
    const siteUrl = 'https://ledgerlogic.ca';
    // Ensure image is absolute for Schema.org
    const imageUrl = post.image.startsWith('http') ? post.image : `${siteUrl}${post.image}`;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        image: [imageUrl],
        datePublished: post.date,
        dateModified: post.date, // Ideally track modifications, but initial publish date is safe fallback
        author: [{
            '@type': 'Person',
            name: post.author,
            url: `${siteUrl}/about` // Optional: Link to about/team page if exists
        }],
        publisher: {
            '@type': 'Organization',
            name: 'LedgerLogic',
            logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/logo.png` // Using root logo path, verify existence or use standard path
            }
        },
        description: post.excerpt,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${siteUrl}/blog/${post.slug}`
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
