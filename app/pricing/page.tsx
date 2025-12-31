import PricingContent from '../../src/views/Pricing';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing Packages | LedgerLogic',
    description: 'Transparent accounting and bookkeeping pricing for Canadian businesses. No lock-in contracts. Choose from Genesis, Momentum, or Summit plans.',
};

export default function Page() {
    return <PricingContent />;
}
