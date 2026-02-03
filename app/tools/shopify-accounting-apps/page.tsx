import React from 'react';
import type { Metadata } from 'next';
import ToolPageView from '@/views/ToolPageView';

export const metadata: Metadata = {
    title: 'A2X Review 2026: The Best Shopify Accounting App for Canadian Sellers?',
    description: 'CPA review of A2X for Shopify. We break down the pricing, features for Canada (GST/HST handling), and why it beats manual data entry.',
    openGraph: {
        title: 'A2X Review 2026: The Best Shopify Accounting App for Canadian Sellers?',
        description: 'CPA review of A2X for Shopify. We break down the pricing, GST/HST handling, and QBO/Xero integration.',
        url: 'https://ledgerlogic.ca/tools/shopify-accounting-apps',
        siteName: 'LedgerLogic',
        locale: 'en_CA',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'A2X Review: Essential Shopify Accounting App',
        description: 'Stop doing manual data entry. See how A2X automates Shopify accounting for Canadian sellers.',
    },
    keywords: ['a2x review', 'shopify accounting app', 'ecommerce accounting canada', 'a2x vs manual', 'shopify gst hst'],
    alternates: {
        canonical: '/tools/shopify-accounting-apps'
    }
};

const DATA = {
    slug: 'shopify-accounting-apps',
    affiliateUrl: 'https://www.a2xaccounting.com/',
    hero: {
        title: 'A2X Review: The Gold Standard for Shopify Accounting',
        subtitle: 'If you sell on Shopify, you need A2X. It automatically posts summarized journals to Xero/QuickBooks, matching your bank deposits to the penny.',
        primaryCtaText: 'Start Free Trial',
        secondaryCtaText: 'Book Ecommerce Setup',
        verdict: {
            bestFor: 'Shopify, Amazon, and Walmart sellers doing >50 orders/month.',
            notFor: 'Brand new stores with <10 orders/month (manual entry is fine initially).',
            ourTake: 'A2X is non-negotiable for our e-commerce clients. Without it, matching Shopify payouts to bank deposits is a nightmare of fee calculations and tax guessing.'
        },
        tags: ['Ecommerce Accounting', 'Shopify Automation', 'GST/HST Ready'],
        worksWith: ['Shopify', 'Amazon', 'Xero', 'QuickBooks']
    },
    recommendation: {
        title: 'CPA Recommended',
        desc: 'Manual entry of Shopify sales is the #1 cause of messy books we see. A2X solves this by separating sales, shipping, fees, and taxes automatically.',
        cta: 'Try A2X Free'
    },
    pricing: {
        title: 'Scale-Friendly Pricing',
        subtitle: 'Pricing based on order volume. All plans include 3 sales channels.',
        plans: [
            {
                name: 'Mini',
                price: '$29',
                period: '/ month',
                description: 'For smaller stores.',
                badge: 'Starter',
                features: [
                    'Up to 200 orders/month',
                    'Shopify integration',
                    'Standard support',
                    '1-day reconciliation',
                    'Basic tax mapping'
                ]
            },
            {
                name: 'Basic',
                price: '$49',
                period: '/ month',
                description: 'For growing brands.',
                badge: 'Most Popular',
                features: [
                    'Up to 1,000 orders/month',
                    'History (6 months)',
                    'Accurate COGS',
                    'Priority support',
                    'Product type grouping'
                ]
            },
            {
                name: 'Professional',
                price: '$69',
                period: '/ month',
                description: 'For established sellers.',
                badge: 'High Volume',
                features: [
                    'Up to 10,000 orders/month',
                    'Unlimited history',
                    'Multi-location inventory',
                    'FBA inventory valuation',
                    'Dedicated onboarding'
                ]
            }
        ],
        note: '**Note:** Pricing is in USD. Annual billing available for ~20% discount.',
        content: ''
    },
    prosCons: {
        pros: [
            'Automated reconciliation of Shopify Payouts (matches bank deposits exactly).',
            'Separates GST/HST, PST, and QST correctly for tax filing.',
            'Calculates Cost of Goods Sold (COGS) automatically.',
            'Supports multi-currency handling (great for selling in USD).',
            'Prevents your accounting software from getting clogged with thousands of individual invoices.'
        ],
        cons: [
            'Pricing is in USD, which is an extra cost for Canadian sellers.',
            'Slight learning curve to set up the tax mapping initially.',
            'Overkill for stores with very low volume (<50 orders/mo).'
        ]
    },
    comparisonTable: {
        headers: ['Feature', 'A2X', 'Manual Entry / Native Sync'],
        rows: [
            ['Reconciliation', '1-Click Match', 'Manual Calculation Required'],
            ['Tax Handling', 'Precise Split (GST/PST/HST)', 'Often Incorrect / Blended'],
            ['Data Volume', 'Summary Journal (Clean)', 'Individual Invoices (Cluttered)'],
            ['Fees', 'Separates Gateway Fees', 'Often Missed / Lumped in'],
            ['COGS', 'Automated per SKU', 'Manual Spreadsheets']
        ]
    },
    implementation: {
        steps: [
            { title: 'Connect Store', desc: 'Link your Shopify, Amazon, or Walmart seller accounts to A2X.' },
            { title: 'Connect Accounting', desc: 'Authorize A2X to access your Xero or QuickBooks Online file.' },
            { title: 'Map Accounts', desc: 'Map your sales, fees, and tax lines to your chart of accounts (we help with this).' },
            { title: 'Test Post', desc: 'Review a historical payout to ensure the journal entry matches the bank deposit exactly.' },
            { title: 'Enable Autopilot', desc: 'Turn on auto-posting settings so your books are updated every time Shopify pays you.' }
        ]
    },
    stackSetup: {
        title: 'Ecommerce Finance Sprint',
        subtitle: "We'll build your entire financial backend, connecting Shopify -> A2X -> Xero -> Dext for a fully automated system.",
        included: [
            'Chart of Accounts for Ecommerce',
            'A2X Tax Mapping & COGS Config',
            'Sales Tax Settings Review',
            'Inventory & Margin Analysis'
        ],
        deliverables: [
            'Automated Revenue Recognition',
            'Accurate Gross Profit Reports',
            'Sales Tax Filing Readiness',
            'Cash Flow Forecast Setup'
        ],
        cta: 'Book Ecommerce Setup'
    },
    pitfalls: [
        'Mapping all sales to a generic "Sales" account instead of separating Shipping and Gift Cards.',
        'Ignoring the "Fee" lines (Shopify Payments fees need to be an expense to balance the deposit).',
        'Not setting up the tax rates in A2X to match your Xero/QBO tax codes.',
        'Trying to sync every single order individually (this slows down Xero/QBO significantly).'
    ],
    faq: [
        {
            question: "Does A2X handle Canadian sales tax correctly?",
            answer: "Yes. A2X reads the tax data directly from Shopify. If Shopify charged GST/HST, A2X will report it. You just need to map the tax lines in A2X to your GST/HST liability account in Xero/QBO."
        },
        {
            question: "Why not just use the native Shopify integration?",
            answer: "The native integration often syncs every single order as a separate invoice. If you do 1,000 orders a month, this clogs up your accounting software and makes reconciliation slow. A2X posts a 'daily summary' instead, which is cleaner and faster."
        },
        {
            question: "Does it work with Amazon too?",
            answer: "Yes, A2X started as an Amazon tool. It handles Amazon FBA settlements better than anything else, separating the dozens of confusing Amazon fees automatically."
        },
        {
            question: "Is it worth the cost for small stores?",
            answer: "If you are processing more than 50 orders a month, the time saved on manual reconciliation is worth far more than the $29/month fee. For very small hobby stores, you might manage without it for a while."
        },
        {
            question: "Can I use it for COGS?",
            answer: "Yes, on the Basic plan and above, A2X tracks inventory changes and calculates Cost of Goods Sold for every payout, giving you accurate gross margins."
        }
    ],
    related: ['shopify', 'xero', 'dext'],
    lastUpdated: 'February 2026',
    jsonLd: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "A2X",
        "description": "Ecommerce accounting automation for Shopify and Amazon sellers.",
        "brand": {
            "@type": "Brand",
            "name": "A2X"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "29.00",
            "priceValidUntil": "2026-12-31",
            "url": "https://a2xaccounting.com"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1200",
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
            "reviewBody": "For Shopify sellers, A2X is the difference between accounting chaos and clarity. It perfectly bridges the gap between e-commerce platforms and accounting ledgers."
        }
    }
};

export default function A2XReviewPage() {
    return (
        <>
            <ToolPageView data={DATA} />
        </>
    );
}
