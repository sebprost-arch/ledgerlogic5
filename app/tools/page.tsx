import { Metadata } from 'next';
import ToolsView from '../../src/views/ToolsView';

export const metadata: Metadata = {
    title: 'Best Accounting Tools for Canadian Business',
    description: 'A curated list of the best accounting software, corporate cards, and financial tools for Canadian startups and SMEs. Curated by CPAs.',
    openGraph: {
        title: 'Best Accounting Tools for Canadian Business',
        description: 'A curated list of the best accounting software, corporate cards, and financial tools for Canadian startups and SMEs. Curated by CPAs.',
        images: ['/images/tools-hero.jpg'], // Make sure this image exists or use a default
    },
    alternates: {
        canonical: '/tools',
    },
};

export default function Page() {
    return <ToolsView />;
}
