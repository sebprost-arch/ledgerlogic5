import { MetadataRoute } from 'next';
import { blogPosts } from '../src/data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://ledgerlogic.ca';

    // Static pages
    const routes = [
        '',
        '/pricing',
        // '/contact', // Check if contact is a page or modal - looks like directory exists
        // '/blog', // Check if blog index exists - directory 'blog' exists
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
