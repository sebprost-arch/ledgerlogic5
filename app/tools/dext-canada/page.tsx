import React from 'react';
import type { Metadata } from 'next';
import ToolPageView from '@/views/ToolPageView';

export const metadata: Metadata = {
    title: 'Dext Canada Review 2026: Pricing, Setup Guide + Is It Worth It?',
    description: 'Expert CPA review of Dext for Canadian businesses. Compare pricing, see real-world setup guide, pros/cons vs Hubdoc, and whether it\'s worth it. Updated 2026.',
    alternates: {
        canonical: '/tools/dext-canada'
    }
};

const DATA = {
    slug: 'dext-canada',
    affiliateUrl: 'https://join.dext.com/pbtm26786g10',
    specialOffer: 'Free 14-day trial',
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
        content: `** Dext Pricing Model:**
    It charges based on monthly document volume.
        
        ** Business Plans:** Start around $20 - 30 / month for basic volume.
        ** Premium:** Adds line - item extraction(CRITICAL for Walmart / Amazon receipts with mixed personal / business or tax codes).
        
        * Tip: LedgerLogic clients often get Dext included in their monthly packages at a preferred rate.* `
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
            answer: "Yes. The CRA accepts digital images of receipts as long as they are legible and preserved. Dext acts as your secure digital archive and stores receipts for 7+ years, meeting all CRA record-keeping requirements."
        },
        {
            question: "Why pay for Dext if Hubdoc is free with Xero?",
            answer: "Hubdoc is great, but Dext is smarter. Dext handles 'Line Item' extraction better and has 'Fetch' (auto-download) for more Canadian suppliers. If you have high volume, Dext pays for itself in time saved."
        },
        {
            question: "How much does Dext cost in Canada?",
            answer: "Dext uses volume-based pricing starting around $20-30/month for basic plans. Premium plans with line-item extraction (critical for detailed expense categorization) cost more but are worth it for businesses processing 50+ receipts monthly. Many accountants bundle Dext into their service packages at preferred rates."
        },
        {
            question: "Can I use Dext with QuickBooks Online or Xero?",
            answer: "Yes. Dext integrates seamlessly with both QuickBooks Online and Xero. It syncs your Chart of Accounts, tax codes (GST/HST), and pushes coded transactions directly into your accounting system. Setup takes about 15 minutes."
        },
        {
            question: "Does Dext work with Canadian receipts and GST/HST?",
            answer: "Absolutely. Dext's OCR is specifically trained on Canadian receipts and accurately extracts GST/HST amounts 99% of the time. It recognizes Canadian tax formats and can split combined GST/HST/PST on a single receipt."
        },
        {
            question: "What's the difference between Dext and Hubdoc?",
            answer: "Dext offers superior line-item extraction (split one Walmart receipt into multiple categories), more reliable Canadian supplier auto-fetch, and advanced approval workflows. Hubdoc is free with Xero but has basic OCR and frequently broken fetch connections. For high-volume businesses, Dext is worth the investment."
        },
        {
            question: "How long does it take to set up Dext for my Canadian business?",
            answer: "Initial setup takes 30-60 minutes: connect to Xero/QBO, create your @dext.cc email forwarding address, and set up 3-5 supplier rules. Training your team to use the mobile app adds another 15 minutes. Most businesses are fully operational within one business day."
        },
        {
            question: "Can Dext automatically pull bills from Canadian utility companies?",
            answer: "Yes. Dext's 'Fetch' feature connects to major Canadian providers like Hydro One, Rogers, Bell, Telus, and Enbridge. Once connected, it automatically downloads monthly bills without you lifting a finger. This is a huge time-saver compared to manual downloads."
        },
        {
            question: "Is Dext worth it for small businesses in Canada?",
            answer: "It depends on your volume. If you process fewer than 20 receipts/month, Xero or QBO's built-in tools may suffice. But if you're doing 50+ transactions monthly, dealing with utility auto-downloads, or need line-item splits, Dext pays for itself in 2-3 hours of saved bookkeeping time per month."
        },
        {
            question: "How do I train my team to use Dext effectively?",
            answer: "Start with the mobile app: snap receipt immediately after purchase, don't wait. Set up supplier rules so common vendors auto-code (e.g., Shell = Fuel, Staples = Office Supplies). Create a 1-page SOP with your @dext.cc email address and basic rules. Most teams are proficient within a week."
        }
    ],
    related: ['xero', 'qbo'],
    lastUpdated: 'February 2026',
    jsonLd: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Dext",
        "description": "Receipt capture and data extraction software for Canadian businesses. Automates bookkeeping and expense management.",
        "brand": {
            "@type": "Brand",
            "name": "Dext"
        },
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "CAD",
            "lowPrice": "20",
            "highPrice": "100",
            "offerCount": "3"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "1",
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
                "ratingValue": "4.8",
                "bestRating": "5",
                "worstRating": "1"
            },
            "reviewBody": "Dext is non-negotiable for our high-volume clients. The OCR accuracy for Canadian GST/HST is unmatched, and the time savings are measurable within the first month."
        }
    }
};

export default function DextCanadaPage() {
    return (
        <>
            <ToolPageView data={DATA} />
        </>
    );
}
