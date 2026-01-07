import React from 'react';
import type { Metadata } from 'next';
import ToolPageView from '@/views/ToolPageView';

export const metadata: Metadata = {
    title: 'Dext for Canadian Businesses (2026): Who It’s For + Pricing + Setup',
    description: 'Stop chasing receipts. Dext (formerly Receipt Bank) is the gold standard for Canadian bookkeeping automation. See pricing and why we use it.',
    alternates: {
        canonical: '/tools/dext-canada'
    }
};

const DATA = {
    slug: 'dext-canada',
    affiliateUrl: '{{AFFILIATE_DEXT_URL}}',
    hero: {
        title: 'Dext for Canadian Businesses: Audit-Proof Your Expenses',
        subtitle: 'The gold standard for receipt capture and data extraction. Snap a photo, email a bill, and Dext does the data entry for you.',
        primaryCtaText: 'Try Dext Today',
        verdict: {
            bestFor: 'High-volume businesses (50+ bills/mo), construction, and anyone who hates data entry.',
            notFor: 'Micro-businesses with <5 expenses/month (Xero/QBO built-in tools are fine).',
            ourTake: 'Dext is non-negotiable for our larger clients. The OCR accuracy is superior to Hubdoc, and the "supplier rules" feature saves hours of coding time.'
        }
    },
    recommendation: {
        title: 'Recommended Choice',
        desc: 'If you have more than 50 receipts a month or bills from utility portals (Hydro, Rogers), Dext is mandatory. It pays for itself in time saved.',
        cta: 'See Dext Plans'
    },
    pricing: {
        content: `**Dext Pricing Model:**
        It charges based on monthly document volume.
        
        **Business Plans:** Start around $20-30/month for basic volume.
        **Premium:** Adds line-item extraction (CRITICAL for Walmart/Amazon receipts with mixed personal/business or tax codes).
        
        *Tip: LedgerLogic clients often get Dext included in their monthly packages at a preferred rate.*`
    },
    prosCons: {
        pros: [
            '99% accuracy on Canadian tax extraction (GST/HST split).',
            'Fetches bills from utility sites (Hydro, Rogers, Bell) automatically.',
            'Line-item extraction allows splitting one receipt into multiple categories.',
            'Keeps a digital archive for 7 years (CRA compliant).',
            'Mobile app is extremely fast and reliable.'
        ],
        cons: [
            'More expensive than Hubdoc (which is free with Xero).',
            'User interface can feel dense with features initially.',
            'Per-user pricing on some legacy plans.'
        ]
    },
    comparisonTable: {
        headers: ['Feature', 'Dext', 'Hubdoc (Free)'],
        rows: [
            ['Line Item Split', 'Yes (Excellent)', 'Basic'],
            ['Fetch Connections', 'Robust (Many Sites)', 'Unreliable / Broken'],
            ['OCR Accuracy', '99% (Machine Learning)', 'Good'],
            ['Approval Workflow', 'Advanced', 'None']
        ]
    },
    implementation: {
        steps: [
            { title: 'Account Integration', desc: 'Connect Dext to Xero/QBO to sync your Chart of Accounts and Tax Rates.' },
            { title: 'Email-in Address', desc: 'Create your unique @dext.cc email. Auto-forward all digital invoices here.' },
            { title: 'Supplier Rules', desc: 'Teach Dext that "Shell" always means "Travel - Fuel" and "Adobe" is "Software".' },
            { title: 'Fetch Setup', desc: 'Connect utility and telecom accounts to auto-download monthly bills.' },
            { title: 'Team Training', desc: 'Get your staff to install the app and snap receipts immediately after purchase.' }
        ]
    },
    pitfalls: [
        'Uploading blurry photos (garbage in, garbage out).',
        'Not reviewing the data before hitting "Publish" to accounting.',
        'Ignoring the "Inbox" for months until year-end.',
        'Not setting up tax rules, forcing manual GST calculation every time.',
        'Paying for it but only using it for 10 receipts a month.'
    ],
    faq: [
        {
            question: "Is Dext CRA compliant?",
            answer: "Yes. The CRA accepts digital images of receipts as long as they are legible and preserved. Dext acts as your secure digital archive."
        },
        {
            question: "Why pay for Dext if Hubdoc is free with Xero?",
            answer: "Hubdoc is great, but Dext is smarter. Dext handles 'Line Item' extraction better and has 'Fetch' (auto-download) for more Canadian suppliers. If you have high volume, Dext pays for itself."
        }
    ],
    related: ['xero', 'qbo']
};

export default function DextCanadaPage() {
    return <ToolPageView data={DATA} />;
}
