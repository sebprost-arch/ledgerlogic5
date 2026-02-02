import React from 'react';
import type { Metadata } from 'next';
import ToolPageView from '@/views/ToolPageView';

export const metadata: Metadata = {
    title: 'Ramp Canada Review 2026: The Ultimate Corporate Card for USD Spend',
    description: 'CPA review of Ramp in Canada. Is the 1.5% cashback real? specific benefits for Canadian startups with high USD expenses and global teams.',
    openGraph: {
        title: 'Ramp Canada Review 2026: The Ultimate Corporate Card for USD Spend',
        description: 'CPA review of Ramp in Canada. We test the 1.5% cashback, FX handling, and NetSuite/Xero integrations.',
        url: 'https://ledgerlogic.ca/tools/ramp-canada-review',
        siteName: 'LedgerLogic',
        locale: 'en_CA',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ramp Canada Review: Best Corporate Card for Tech Companies?',
        description: 'See why Canadian tech companies are switching to Ramp for USD spend management.',
    },
    keywords: ['ramp canada review', 'ramp corporate card', 'ramp vs float', 'ramp vs brex canada', 'usd corporate card canada'],
    alternates: {
        canonical: '/tools/ramp-canada-review'
    }
};

const DATA = {
    slug: 'ramp-canada-review',
    affiliateUrl: 'https://ramp.com/?rc=PJS4H3',
    hero: {
        title: 'Ramp Review: Global Spend Management for Canadian Tech',
        subtitle: 'The corporate card built for scale. Save an average of 3.5% with zero-touch expenses, 1.5% cashback, and industry-leading FX rates.',
        primaryCtaText: 'Apply Now',
        secondaryCtaText: 'Book Spend Setup',
        verdict: {
            bestFor: 'VC-backed startups, Cross-border businesses (CAD/USD), and rapidly scaling teams.',
            notFor: 'Small local service businesses, Sole Proprietorships, or companies with low monthly spend (<$10k).',
            ourTake: 'Ramp is the best-in-class solution for Canadian companies with significant USD expenses. The integration with NetSuite and Xero is flawless.'
        },
        tags: ['Corporate Cards', 'Global Expense Mgmt', 'USD Specialist'],
        worksWith: ['NetSuite', 'Xero', 'QuickBooks', 'Slack']
    },
    recommendation: {
        title: 'CPA Recommended',
        desc: 'For our clients with US operations or high software spend, Ramp pays for itself. The 1.5% cashback on USD ads and software is unmatched in Canada.',
        cta: 'See Ramp Features'
    },
    pricing: {
        title: 'Growth-Friendly Pricing',
        subtitle: 'Core platform is free. Scale with Ramp Plus.',
        plans: [
            {
                name: 'Ramp Core',
                price: '$0',
                period: '/ user / month',
                description: 'Everything you need to control spend.',
                badge: 'Most Popular',
                features: [
                    'Unlimited virtual & physical cards',
                    '1.5% Cashback on spend',
                    'Automated receipt matching',
                    'Xero, QBO, NetSuite Integration',
                    'G2 Highest Rated Ease of Use'
                ]
            },
            {
                name: 'Ramp Plus',
                price: '$15',
                period: '/ user / month',
                description: 'For complex approval workflows.',
                badge: 'Enterprise',
                features: [
                    'Advanced procurement',
                    'Multi-entity support',
                    'Global reimbursement',
                    'Smart policy enforcement',
                    'Dedicated account support'
                ]
            }
        ],
        note: '**Note:** Ramp earns revenue from interchange fees (paid by merchants), which allows them to keep the core platform free for businesses.',
        content: ''
    },
    prosCons: {
        pros: [
            'Industry-leading 1.5% unlimited cashback.',
            'Best-in-class multi-currency support (CAD, USD, GBP, EUR).',
            'Automated receipt matching via SMS/Email is 99% accurate.',
            'Direct integration with NetSuite (rare for free tools).',
            'No personal guarantee required (based on cash balance).'
        ],
        cons: [
            'Requires $75k+ USD in bank balance for approval (typically).',
            'Strictly for corporations (no Sole Props).',
            'Physical card delivery can take longer in Canada than US.',
            'Cashback rates can vary based on custom enterprise agreements.'
        ]
    },
    comparisonTable: {
        headers: ['Feature', 'Ramp', 'Traditional Bank Card'],
        rows: [
            ['Annual Fee', '$0', '$120 - $150 / card'],
            ['FX Fees', 'Low / Competitive', '2.5% on every transaction'],
            ['Cashback', '1.5% Unlimited', '0.5% - 1% (Capped)'],
            ['Receipts', 'Automatic Matching', 'Manual Submission'],
            ['Limits', 'Dynamic (Based on Cash)', 'Fixed Credit Limit']
        ]
    },
    implementation: {
        steps: [
            { title: 'Apply Online', desc: 'Link your business bank account for real-time underwriting. Approval often takes < 24 hours.' },
            { title: 'Issue Virtual Cards', desc: 'Instantly create cards for your software stack (AWS, Google Ads, HubSpot) to earn immediate cashback.' },
            { title: 'Invite Team', desc: 'Add employees and set individual spend limits. No more sharing generic credit card numbers.' },
            { title: 'Configure Policies', desc: 'Set up automated rules (e.g., "Software under $100 requires no approval").' },
            { title: 'Sync Accounting', desc: 'Map your chart of accounts to Ramp once, and let the autopilot handle the rest.' }
        ]
    },
    stackSetup: {
        title: 'Spend Control Sprint',
        subtitle: "We'll configure Ramp to automate your accounts payable and expense reporting, saving your finance team 10+ hours/week.",
        included: [
            'Expense Policy Design',
            'Approval Workflow Configuration',
            'GL Code Mapping (Xero/NetSuite)',
            'Vendor Card Migration'
        ],
        deliverables: [
            'Automated Receipt Collection System',
            'Real-Time Spend Dashboard',
            'Employee Training Guide',
            '1-Month Optimization Check-in'
        ],
        cta: 'Book Spend Setup'
    },
    pitfalls: [
        'Not having sufficient cash balance (Ramp is a charge card, paid in full monthly).',
        'Ignoring the virtual card features (using one physical card for everything risks security).',
        'Forgetting to map tax codes correctly in the integration settings.',
        'Not using the "Savings Insights" to cancel unused software subscriptions.'
    ],
    faq: [
        {
            question: "Is Ramp available to Canadian companies?",
            answer: "Yes, Ramp is available to Canadian corporations. They support CAD and USD spending and have specific features designed for cross-border businesses."
        },
        {
            question: "How does the credit limit work?",
            answer: "Ramp uses 'dynamic limits' based on your company's cash balance (connected via baking API). This typically allows for much higher limits than traditional banks, often 10-20x higher."
        },
        {
            question: "Do I need a personal guarantee?",
            answer: "No. Ramp underwrites the business based on its health and cash flow, not the founder's personal credit score. There is no personal guarantee required."
        },
        {
            question: "Does it work with NetSuite?",
            answer: "Yes, Ramp has one of the best NetSuite integrations on the market, automating bill pay, expense reporting, and closing the books faster. This is usually a feature only found in expensive enterprise tools."
        },
        {
            question: "Can I pay international vendors?",
            answer: "Yes, Ramp Bill Pay allows you to pay vendors in over 175 countries and 40 currencies, often with better rates than bank wires."
        }
    ],
    related: ['float', 'venn', 'xero'],
    lastUpdated: 'February 2026',
    jsonLd: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Ramp",
        "description": "Corporate card and spend management platform for finance automation.",
        "brand": {
            "@type": "Brand",
            "name": "Ramp"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "0",
            "priceValidUntil": "2026-12-31",
            "url": "https://ramp.com"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "2500",
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": {
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": "Seb Prost",
                "jobTitle": "CPA",
                "affiliation": "LedgerLogic",
                "sameAs": ["https://ledgerlogic.ca/about-us", "https://www.linkedin.com/in/sebastienprost/"]
            },
            "datePublished": "2026-02-01",
            "dateModified": "2026-02-01",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "1"
            },
            "reviewBody": "Ramp is unmatched for companies with serious USD spend. The improved cash flow visibility, lack of personal guarantees, and automated receipt matching make it an essential tool for high-growth Canadian startups."
        }
    }
};

export default function RampReviewPage() {
    return (
        <>
            <ToolPageView data={DATA} />
        </>
    );
}
