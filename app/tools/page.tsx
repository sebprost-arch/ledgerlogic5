
import AffiliateToolsView from '../../src/views/AffiliateToolsView';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Best Accounting Software & Tools for Canadian Small Businesses (2026)',
    description: 'Compare CPA-verified accounting software, banking, and automation tools for Canadian corporations. Get a personalized tool stack in 60 seconds. Free quiz + special offers on Xero, Venn, Ramp & more.',
    keywords: 'Canadian accounting software, Xero Canada, QuickBooks Canada, Canadian business banking, Venn, business tools Canada, GST HST software, Canadian startup tools',
    openGraph: {
        title: 'Best Accounting Software & Tools for Canadian Businesses (2026)',
        description: 'CPA-curated accounting software, banking, and automation tools for Canadian SMBs. Take our free quiz to get your personalized stack with exclusive offers.',
        images: ['/images/tools-hero.jpg'],
        type: 'website',
        locale: 'en_CA',
    },
    alternates: {
        canonical: '/tools',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Page() {
    return <AffiliateToolsView />;
}
