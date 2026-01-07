import React from 'react';
import type { Metadata } from 'next';
import ToolPageView from '@/views/ToolPageView';

export const metadata: Metadata = {
    title: 'QuickBooks vs Xero in Canada (2026): Which One Fits You?',
    description: 'The honest comparison for Canadian business owners. Price, bank feeds, GST/HST, and why Xero usually wins for modern companies.',
    alternates: {
        canonical: '/tools/quickbooks-vs-xero-canada'
    }
};

const DATA = {
    slug: 'quickbooks-vs-xero-canada',
    affiliateUrl: '{{AFFILIATE_XERO_URL}}', // Prefer Xero as affiliate
    hero: {
        title: 'QuickBooks vs Xero in Canada (2026): The Verdict',
        subtitle: 'The two giants of cloud accounting. One is the industry standard (QBO); the other is the modern challenger (Xero). Here is how they stack up for Canadian SMEs.',
        primaryCtaText: 'Try Xero (Our Pick)',
        verdict: {
            bestFor: 'Xero is best for digital/service/ecommerce brands. QBO is best for construction & traditional retail.',
            notFor: 'Don\'t pick QBO just because "everyone uses it" if you hate the interface.',
            ourTake: 'We support both, but 80% of our new clients prefer Xero for its cleaner UI and lack of in-app ads.'
        }
    },
    recommendation: {
        title: 'Recommended Choice (Fast Answer)',
        desc: 'If you run a digital service, agency, or e-commerce business, choose Xero. It is cleaner, faster, and includes receipt capture for free.',
        cta: 'Start Xero Trial'
    },
    pricing: {
        content: `**Xero Pricing:**
        - Simpler tiers (Starter, Standard, Premium).
        - **Unlimited users** on all plans (Huge value).
        - Includes Hubdoc receipt capture ($0).
        
        **QuickBooks Online Pricing:**
        - Tiers: EasyStart, Essentials, Plus, Advanced.
        - **Strict user limits** (e.g. Essentials = 3 users).
        - Aggressive "50% off for 3 months" promos, but regular price is often higher.
        
        *Winner:* Xero wins on long-term value.`
    },
    prosCons: {
        pros: [
            'Xero: Unlimited users and cleaner dashboard = happier team.',
            'QBO: Better mobile app and class/location tracking for enterprise.',
            'Xero: Hubdoc is included. QBO makes you pay extra for decent OCR.',
            'Both: Handle GST/HST perfectly for Canada.'
        ],
        cons: [
            'Xero: Bank feeds can be finicky with some credit unions.',
            'QBO: Interface is cluttered with "Get Capital" and upsell ads.',
            'QBO: Customer support can be difficult to reach.',
            'Xero: Reporting customization has a steeper learning curve.'
        ]
    },
    comparisonTable: {
        headers: ['Feature', 'Xero', 'QuickBooks Online'],
        rows: [
            ['Users', 'Unlimited (All Plans)', 'Capped (3-5-25)'],
            ['Receipt Capture', 'Hubdoc Included (Free)', 'Built-in (Decent)'],
            ['Mobile App', 'Good (Standard)', 'Excellent (Industry Best)'],
            ['Support', 'Ticket-based', 'Phone/Chat (Mixed Quality)']
        ]
    },
    implementation: {
        steps: [
            { title: 'Needs Assessment', desc: 'Do you need multi-currency? Inventory? Job costing? This decides the winner instantly.' },
            { title: 'Migration Strategy', desc: 'Moving from one to the other is messy. We usually recommend a "clean break" at fiscal year-end.' },
            { title: 'Bank Feed Testing', desc: 'We verify if your specific credit union connects better to QBO or Xero.' },
            { title: 'Staff Training', desc: 'If your team knows QBO, the cost of switching to Xero might exceed the software savings.' }
        ]
    },
    pitfalls: [
        'Switching software mid-year (creates a tax nightmare).',
        'Buying the cheapest tier and realizing it lacks multi-currency (both have this trap).',
        'Assuming data migrates perfectly (it almost never does without expert help).',
        'Paying for "Payroll" add-ons inside the software (use Wagepoint or Knit instead).'
    ],
    faq: [
        {
            question: "Which one is cheaper?",
            answer: "They are very comparable. Xero often wins on value because it includes Hubdoc and unlimited users. QBO looks cheaper on promo, but the regular price is similar."
        },
        {
            question: "Can I migrate my data from QBO to Xero?",
            answer: "Yes, there are conversion tools (like Movemybooks), but they aren't perfect. You usually lose receipt images. We recommend a fresh start at year-end."
        },
        {
            question: "Do accountants prefer one?",
            answer: "Traditional accountants love QBO because it mimics old desktop software. Cloud-forward CPAs (like us) often prefer Xero for its speed and API."
        }
    ],
    related: ['xero', 'qbo', 'dext']
};

export default function QboVsXeroPage() {
    return <ToolPageView data={DATA} />;
}
