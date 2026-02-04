import { Metadata } from 'next';
import HomeContent from '../src/views/Home';
import HomeJsonLd from './home-json-ld';

export const metadata: Metadata = {
    title: 'Modern Accounting & Virtual CFO for Canadian Businesses',
    description: 'Fixed monthly pricing, automated bookkeeping, strategic tax planning. Licensed CPA firm serving 50+ Canadian growth companies. Book your free discovery call today.',
    openGraph: {
        title: 'LedgerLogic | Financial Operating System for Canadian Growth',
        description: 'Stop stressing about your books. Get strategic tax & accounting guidance from real CPAs. Fixed pricing, modern tech stack, zero surprises.',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'LedgerLogic | Modern Accounting & Virtual CFO',
        description: 'Automated accounting and strategic tax guidance for Canadian businesses. Fixed monthly pricing. Book a free discovery call.',
    },
    alternates: {
        canonical: 'https://ledgerlogic.ca',
    },
};

export default function Page() {
    return (
        <>
            <HomeJsonLd />
            <HomeContent />
        </>
    );
}
