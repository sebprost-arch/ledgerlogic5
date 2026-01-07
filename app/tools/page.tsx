import { Metadata } from 'next';
import ToolsView from '../../src/views/ToolsView';

export const metadata: Metadata = {
    title: 'Best Accounting Tools for Canadian Business | LedgerLogic',
    description: 'A curated list of the best accounting software, corporate cards, and financial tools for Canadian startups and SMEs. Curated by CPAs.',
    openGraph: {
        title: 'Best Accounting Tools for Canadian Business | LedgerLogic',
        description: 'Stop guessing which tools to use. See the exact tech stack we recommend for Canadian growth companies.',
        url: 'https://ledgerlogic.ca/tools',
        type: 'website',
        images: ['/images/og-image.png'],
    },
};

export default function Page() {
    return <ToolsView />;
}
