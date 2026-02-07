import { MetadataRoute } from 'next';
import { blogPosts } from '../src/data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://ledgerlogic.ca';

    // Static pages
    const routes = [
        '',
        '/pricing',
        '/tools',
        '/blog',
        '/contact',
        '/ecommerce-finance-system',
        '/faqs',
        '/regulation-105-refund',
        '/resources',
        '/saas-finance-system',
        '/scorecard',
        // Tool Reviews / Pages
        '/tools/dext-canada',
        '/tools/float-canada-review',
        '/tools/ownr-canada-review',
        '/tools/quickbooks-vs-xero-canada',
        '/tools/ramp-canada-review',
        '/tools/shopify-accounting-apps',
        '/tools/stripe-accounting',
        '/tools/synder-review',
        '/tools/venn-canada-review',
        '/xero-accounting-canada',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic blog posts
    const posts = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date).toISOString().split('T')[0], // Assuming post.date is parseable
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...routes, ...posts];
}
