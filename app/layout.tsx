import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import '../src/index.css';
import '../src/views/Home.css';
import '../src/views/Pricing.css';
import '../src/views/Blog.css';
import '../src/views/BlogPost.css';
import '../src/components/HeroBackground.css';
import Layout from '../src/components/Layout';

import JsonLd from './json-ld';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
    metadataBase: new URL('https://ledgerlogic.ca'),
    title: {
        template: '%s | LedgerLogic',
        default: 'LedgerLogic | Modern Accounting & Virtual CFO for Canadian Business',
    },
    description: 'LedgerLogic provides modern, automated accounting and Virtual CFO services for Canadian growth companies. Fixed monthly pricing, dedicated CPA support, and zero stress.',
    keywords: ['Canadian CPA', 'Virtual CFO', 'Online Accountant Canada', 'Xero Accounting', 'Corporate Tax Quebec', 'Small Business Accounting'],
    authors: [{ name: 'Sebastien Prost, CPA' }],
    creator: 'LedgerLogic',
    publisher: 'LedgerLogic',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: 'LedgerLogic | Modern Accounting & Virtual CFO',
        description: 'Stop stressing about your books. Get strategic tax & accounting guidance from a real team of experts. Licensed Canadian CPA firm.',
        url: 'https://ledgerlogic.ca',
        siteName: 'LedgerLogic',
        images: [
            {
                url: '/images/og-image.png', // We should ensure this exists or use a robust fallback
                width: 1200,
                height: 630,
                alt: 'LedgerLogic - Financial Operating System for Canadian Growth',
            },
        ],
        locale: 'en_CA',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'LedgerLogic | Modern Accounting & Virtual CFO',
        description: 'Automated accounting and strategic tax guidance for Canadian businesses.',
        creator: '@ledgerlogic', // Assuming handle, can be generic if unknown
        images: ['/images/og-image.png'],
    },
    alternates: {
        canonical: '/',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <body>
                <JsonLd />
                <Layout>
                    {children}
                </Layout>
            </body>
        </html>
    );
}
