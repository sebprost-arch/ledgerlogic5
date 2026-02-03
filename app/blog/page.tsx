import { Suspense } from 'react';
import BlogContent from '../../src/views/Blog';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Resources & Insights | LedgerLogic',
    description: 'Expert guides on Canadian tax, cloud accounting, and financial strategy for growing businesses.',
    openGraph: {
        title: 'LedgerLogic Insights | Canadian Tax & Accounting Blog',
        description: 'Actionable financial advice for Canadian entrepreneurs. Tax tips, software guides, and growth strategies.',
        url: 'https://ledgerlogic.ca/blog',
        type: 'website',
        // images: ['/images/blog-index-og.png'], // Ideal to have a specific one, or falls back to global
    },
};

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BlogContent />
        </Suspense>
    );
}
