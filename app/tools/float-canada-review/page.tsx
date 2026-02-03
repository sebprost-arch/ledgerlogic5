import React from 'react';
import type { Metadata } from 'next';
import ToolPageView from '@/views/ToolPageView';

export const metadata: Metadata = {
    title: 'Float Card Review 2026: The Best Corporate Card for Canadian Teams?',
    description: 'CPA review of the Float Card. We test the 4% yield, receipt capture apps, and expense approvals. See why it is the default choice for Canadian SMEs.',
    openGraph: {
        title: 'Float Card Review 2026: The Best Corporate Card for Canadian Teams?',
        description: 'CPA review of the Float Card. Is it better than a traditional bank card? We verify the fees, yield, and accounting integrations.',
        url: 'https://ledgerlogic.ca/tools/float-canada-review',
        siteName: 'LedgerLogic',
        locale: 'en_CA',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Float Review 2026: Canada’s #1 Corporate Card?',
        description: 'Why 3,000+ Canadian businesses use Float to manage team spending.',
    },
    keywords: ['float card review', 'float corporate card', 'canadian spend management', 'float vs ramp', 'float vs amex'],
    alternates: {
        canonical: '/tools/float-canada-review'
    }
};

const DATA = {
    slug: 'float-canada-review',
    affiliateUrl: 'https://welcome.floatfinancial.com/?eid=NNodPIIg',
    hero: {
        title: 'Float Review: Canada\'s #1 Spend Management Platform',
        subtitle: 'Eliminate expense reports, earn 4% yield on your cash, and issue unlimited cards to your team with zero monthly fees.',
        primaryCtaText: 'Open Free Account',
        secondaryCtaText: 'Book Spend Setup',
        verdict: {
            bestFor: 'Canadian SMEs (5-100 employees) looking to control team spending.',
            notFor: 'Sole Proprietorships, or businesses looking for travel rewards/points (Float offers Yield/Cashback instead).',
            ourTake: 'Float is the default "modern" choice for Canadian scaling companies. It bridges the gap between a bank account and accounting software perfectly.'
        },
        tags: ['Corporate Cards', 'Expense Automations', 'High Yield'],
        worksWith: ['Xero', 'QuickBooks', 'NetSuite']
    },
    recommendation: {
        title: 'CPA Recommended',
        desc: 'We install Float for almost every client with more than 3 employees. The ability to issue a card instantly with a $500 limit for a specific software purchase is a game changer for security and speed.',
        cta: 'See Float Features'
    },
    pricing: {
        title: 'Simple, Scalable Pricing',
        subtitle: 'Start for free, upgrade for advanced controls.',
        plans: [
            {
                name: 'Essentials',
                price: '$0',
                period: '/ month',
                description: 'For teams getting started.',
                badge: 'Most Popular',
                features: [
                    'Unlimited virtual cards',
                    '5 Physical cards',
                    'Direct accounting sync (QBO/Xero)',
                    '4% interest on balances',
                    'Text-to-submit receipts'
                ]
            },
            {
                name: 'Professional',
                price: '$10',
                period: '/ month / user',
                description: 'For growing finance teams.',
                badge: null,
                features: [
                    'Advanced approval policies',
                    'Unlimited physical cards',
                    'SAML / SSO Enforcement',
                    'Department tags',
                    'Slack integration'
                ]
            },
            {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                description: 'For complex organizations.',
                badge: 'Scale',
                features: [
                    'Dedicated Account Manager',
                    'NetSuite Integration',
                    'API Access',
                    'Multi-entity management',
                    'Custom onboarding'
                ]
            }
        ],
        note: '**Note:** Float also offers "Float Yield" which pays ~4% interest on your CAD balance, making it one of the highest-yield business accounts available.',
        content: ''
    },
    prosCons: {
        pros: [
            'Earn high interest (up to 4%) on your idle cash balances.',
            'Issue physical or virtual cards in seconds (no bank visits).',
            'Text-message receipt capture is the fastest workflow we have tested.',
            'Smart Rules allow you to auto-approve expenses under a certain threshold.',
            'No personal guarantee required (Prepaid model).'
        ],
        cons: [
            'Prepaid model means you must fund the account before spending (no credit float).',
            'FX rates (1.5%) are good but not as low as specialized FX brokers.',
            'Not available for Sole Proprietorships.',
            'Stricter approval process than some "instant" online tools due to FINTRAC.'
        ]
    },
    comparisonTable: {
        headers: ['Feature', 'Float', 'Big 5 Bank Card'],
        rows: [
            ['Monthly Fee', '$0 (Essentials)', '$100+ / year'],
            ['Card Issuance', 'Instant (Virtual)', '2 weeks (Mail)'],
            ['Receipt Matching', 'Automated via SMS/Email', 'None (Shoebox)'],
            ['Interest on Cash', 'Up to 4%', '0%'],
            ['Accounting Sync', 'Direct & Reliable', 'Bank Feed (Often Breaks)']
        ]
    },
    implementation: {
        steps: [
            { title: 'Sign Up', desc: 'Create your account online. You will need corporate documents and ID verification.' },
            { title: 'Connect Bank', desc: 'Link your primary business bank account to fund your Float balance.' },
            { title: 'Create Cards', desc: 'Issue your first virtual card for immediate software subscriptions.' },
            { title: 'Set Policies', desc: 'Configure "Spend Policies" (e.g. Travel, Software) to auto-categorize expenses.' },
            { title: 'Invite Team', desc: 'Send invites to employees so they can request their own cards.' }
        ]
    },
    stackSetup: {
        title: 'Float Implementation Sprint',
        subtitle: "We'll deploy Float across your team, set up approval policies, and ensure every transaction syncs to Xero/QBO perfectly.",
        included: [
            'Account Verification Support',
            'Spend Policy Configuration',
            'Employee Onboarding Webinar',
            'Accounting Sync Setup'
        ],
        deliverables: [
            'Active Corporate Cards',
            'Automated Receipt Workflow',
            'SOP for Staff Spending',
            'Clean Bank Feeds'
        ],
        cta: 'Book Float Setup'
    },
    pitfalls: [
        'Treating it like a credit card (transactions will decline if not funded).',
        'Not using the "Text to Receipt" feature (it is the best feature!).',
        'Giving "Admin" access to too many employees.',
        'Forgetting to map tax codes in the accounting settings.'
    ],
    faq: [
        {
            question: "Is Float a credit card?",
            answer: "Technically, no. It is a prepaid corporate card. You load funds onto Float from your bank account, and then spend against that balance. This allows for higher limits and no personal liability."
        },
        {
            question: "Is my money safe?",
            answer: "Yes. Float creates a segregated bank account for your funds at a Tier 1 Canadian Schedule 1 Bank. Your funds are kept separate from Float's operating capital."
        },
        {
            question: "Does it integrate with Xero and QuickBooks?",
            answer: "Yes, the integration is excellent. Transactions sync automatically, and you can even push receipts directly into the accounting software."
        },
        {
            question: "How does the 4% yield work?",
            answer: "Float pays interest on the funds you hold in your account. Rates vary based on the Bank of Canada rate, but generally hover around 4% for CAD balances."
        },
        {
            question: "Can I use it for USD spend?",
            answer: "Yes, Float offers USD cards and accounts. You can fund it with USD to avoid FX fees, or spend on CAD cards with competitive FX rates."
        }
    ],
    related: ['ramp', 'venn', 'dext'],
    lastUpdated: 'February 2026',
    jsonLd: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Float Card",
        "description": "Smart corporate card and spend management software for Canadian businesses.",
        "brand": {
            "@type": "Brand",
            "name": "Float"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "CAD",
            "price": "0",
            "priceValidUntil": "2026-12-31",
            "url": "https://floatcard.com"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "850",
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
            "reviewBody": "Float is the single most effective tool for controlling decentralized team spending. The 'requests' workflow eliminates the need for shared credit cards."
        }
    }
};

export default function FloatReviewPage() {
    return (
        <>
            <ToolPageView data={DATA} />
        </>
    );
}
