import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/admin/'], // Minimal disallow
        },
        sitemap: 'https://ledgerlogic.ca/sitemap.xml',
    };
}
