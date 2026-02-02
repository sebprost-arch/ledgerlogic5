import React from 'react';
import type { Metadata } from 'next';
import ToolPageView from '@/views/ToolPageView';

export const metadata: Metadata = {
    title: 'Xero for Canadian Businesses (2026): Who It’s For + Pricing + Setup',
    description: 'The complete guide to using Xero in Canada. Pricing, GST/HST setup, and why we recommend it as the best cloud accounting software for Canadian SMEs.',
    alternates: {
        canonical: '/tools/xero-canada'
    }
};

const DATA = {
    slug: 'xero-canada',
    affiliateUrl: 'https://referrals.xero.com/qp622xbmjhis-q1e71',
    specialOffer: '90% off for 6 months',
    hero: {
        title: 'Xero for Canadian Businesses (2026): The Modern Standard',
        subtitle: 'The cloud accounting favorite for Canadian startups, agencies, and ecommerce brands. Cleaner design, better app ecosystem, and included receipt capture.',
        primaryCtaText: 'Get 90% Off (6 Months)',
        verdict: {
            bestFor: 'Agencies, Startups, and Ecommerce (Shopify/Amazon/Stripe).',
            notFor: 'Construction with heavy job costing (use QBO or Procore).',
            ourTake: 'We default to Xero for 90% of our clients. The user interface promotes cleaner data entry, and Hubdoc is included for free.'
        }
    },
    recommendation: {
        title: 'Recommended Choice (Fast Answer)',
        desc: 'For most Canadian small businesses, the "Standard" plan gives you the best value. Only upgrade to Premium if you hold USD/EUR bank accounts.',
        cta: 'Try Xero Standard Free'
    },
    pricing: {
        title: 'Xero Canada Pricing (2026)',
        subtitle: 'Choose the plan that fits your business needs',
        plans: [
            {
                name: 'Starter',
                price: '$25',
                period: '/month',
                description: 'Perfect for side hustles',
                badge: null,
                features: [
                    'Up to 20 invoices/month',
                    'Bank reconciliation',
                    'Hubdoc included',
                    'Unlimited users'
                ]
            },
            {
                name: 'Standard',
                price: '$55',
                period: '/month',
                description: 'Best for most businesses',
                badge: 'Recommended',
                features: [
                    'Unlimited invoices & bills',
                    'Bank reconciliation',
                    'Hubdoc included',
                    'Unlimited users',
                    'Bulk reconciliation'
                ]
            },
            {
                name: 'Premium',
                price: '$75',
                period: '/month',
                description: 'For multi-currency needs',
                badge: null,
                features: [
                    'Everything in Standard',
                    'Multi-currency support',
                    'Project tracking',
                    'Expense claims'
                ]
            }
        ],
        note: '**Special Offer:** [Get 90% off for your first 6 months](https://referrals.xero.com/qp622xbmjhis-q1e71). Prices in CAD before taxes.',
        content: '' // Keep for backward compatibility
    },
    prosCons: {
        pros: [
            'Includes Hubdoc free for receipt capture (saves ~$20/mo).',
            'Unlimited users on all plans (don\'t pay extra for your team).',
            'Superior "Find & Recode" tool lets us fix generic bookkeeping errors instantly.',
            'Cleanest minimalist interface = less clutter.',
            'Best-in-class integration with Shopify, Stripe, and Dext.'
        ],
        cons: [
            'Bank feeds can be finicky with smaller Canadian credit unions.',
            'Reporting is powerful but requires initial setup to look good.',
            'Multi-currency is locked behind the most expensive tier.'
        ]
    },
    comparisonTable: {
        headers: ['Feature', 'Why it matters', 'Our Take'],
        rows: [
            ['Bank Feeds', 'Syncs transaction data automatically', 'Xero uses Yodlee/Flinks. Connects to RBC/TD/BMO well.'],
            ['Receipt Capture', 'Audit-proofing your expenses', 'Included (Hubdoc). No need to pay extra.'],
            ['User Limits', 'How many staff can access it', 'Unlimited on ALL plans. Huge win over QBO.']
        ]
    },
    implementation: {
        steps: [
            { title: 'Chart of Accounts', desc: 'We tailor the category list to your industry (e.g., separating "SaaS Costs" from "Office Supplies").' },
            { title: 'Bank Connection', desc: 'Securely connect your banks. If you rely on OTP, we might set up a read-only feed.' },
            { title: 'Hubdoc Setup', desc: 'We configure your custom email address so bills flow straight to Xero automatically.' },
            { title: 'Invoice Branding', desc: 'Add your logo + Interac e-Transfer payment instructions clearly.' },
            { title: 'Data Migration & Import', desc: 'Migrating from QBO, Sage, or Wave? We handle the conversion. From Excel? We import your opening balances as of your last year-end.' },
        ]
    },
    pitfalls: [
        'Connecting the bank feed but never reconciling the lines (creates duplicate data).',
        'Not publishing receipts from Hubdoc (they just sit there).',
        'Mixing USD and CAD transactions without the Premium plan.',
        'Using the default "General Expenses" category for everything.',
        'Forgetting to lock the period after filing GST/HST.'
    ],
    faq: [
        {
            question: "Does Xero handle GST, HST, and PST/QST?",
            answer: "Yes, fully. Xero has a robust Canadian sales tax module that tracks federal and provincial taxes on every transaction and generates your return report."
        },
        {
            question: "Is Xero better than QuickBooks Online?",
            answer: "For most modern digital businesses, we say yes. It's user-friendly, has unlimited users, and fewer 'upsell' ads. However, QBO is better for complex inventory or if your accountant refuses to use anything else."
        },
        {
            question: "Can I do my own bookkeeping in Xero?",
            answer: "Absolutely. We often set it up for clients, train them for 1 hour, and then they handle the monthly coding while we just review it quarterly."
        }
    ],
    related: ['qbo', 'dext', 'venn'],
    lastUpdated: 'February 2026',
    jsonLd: {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Xero",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Cloud-based",
        "description": "Cloud accounting software for Canadian businesses.",
        "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "25.00",
            "highPrice": "75.00",
            "priceCurrency": "CAD"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "1250"
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
            "reviewBody": "We default to Xero for 90% of our clients. The user interface promotes cleaner data entry, and Hubdoc is included for free."
        }
    }
};

export default function XeroCanadaPage() {
    return <ToolPageView data={DATA} />;
}
