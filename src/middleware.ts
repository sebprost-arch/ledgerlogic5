import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check for WordPress style blog URLs: /YYYY/MM/DD/slug
    // Regex matches /4-digits/2-digits/2-digits/anything...
    const wordpressPostPattern = /^\/(\d{4})\/(\d{2})\/(\d{2})\/(.+)/;
    const match = pathname.match(wordpressPostPattern);

    if (match) {
        // match[1] = year, match[2] = month, match[3] = day, match[4] = slug (potentially with trailing slash)
        let slug = match[4];

        // Remove trailing slash if present in the captured slug
        if (slug.endsWith('/')) {
            slug = slug.slice(0, -1);
        }

        // Construct the new URL: /blog/slug
        const newUrl = new URL(`/blog/${slug}`, request.url);

        // Return 308 Permanent Redirect
        return NextResponse.redirect(newUrl, { status: 308 });
    }

    // Specific fix for the old numbered ID post if needed (though the regex above might catch it if it had date format)
    // If the old ID 5653 was accessed as /blog/5653
    if (pathname === '/blog/5653') {
        return NextResponse.redirect(new URL('/blog/how-to-use-float-credit-cards', request.url), { status: 308 });
    }

    return NextResponse.next();
}


