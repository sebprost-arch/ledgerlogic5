import PricingContent from '../../src/views/Pricing';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing Packages',
    description: 'Transparent accounting and bookkeeping pricing for Canadian businesses. No lock-in contracts. Choose from Genesis, Momentum, or Summit plans.',
    alternates: {
        canonical: '/pricing',
    },
    openGraph: {
        title: 'Simple, Fixed Monthly Pricing',
        description: 'Transparent accounting and bookkeeping pricing for Canadian businesses. No lock-in contracts.',
        images: ['/images/pricing-hero.jpg'],
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
