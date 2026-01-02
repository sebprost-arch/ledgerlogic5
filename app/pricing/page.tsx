import PricingContent from '../../src/views/Pricing';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing Packages | LedgerLogic',
    description: 'Transparent accounting and bookkeeping pricing for Canadian businesses. No lock-in contracts. Choose from Genesis, Momentum, or Summit plans.',
    openGraph: {
        title: 'Simple, Fixed Monthly Pricing | LedgerLogic',
        description: 'No hourly billing. No surprise fees. Just expert Canadian accounting support at a predictable rate.',
        url: 'https://ledgerlogic.ca/pricing',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'See Our Fixed Monthly Packages',
        description: 'Scalable accounting plans for Canadian startups and growth companies.',
    },
};

export default function Page() {
    return <PricingContent />;
}
