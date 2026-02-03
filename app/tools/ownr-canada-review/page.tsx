import React from 'react';
import type { Metadata } from 'next';
import ToolPageView from '@/views/ToolPageView';

export const metadata: Metadata = {
    title: 'Ownr Review 2026: The Cheapest Way to Incorporate in Canada?',
    description: 'CPA review of Ownr.co. We verify if the $300 RBC cash back offer is real, compare pricing vs lawyers, and show you exactly how to incorporate in minutes.',
    openGraph: {
        title: 'Ownr Review 2026: The Cheapest Way to Incorporate in Canada?',
        description: 'CPA review of Ownr.co. We verify if the $300 RBC cash back offer is real, compare pricing vs lawyers, and show you exactly how to incorporate in minutes.',
        url: 'https://ledgerlogic.ca/tools/ownr-canada-review',
        siteName: 'LedgerLogic',
        locale: 'en_CA',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ownr Review 2026: The Cheapest Way to Incorporate in Canada?',
        description: 'Save $1,500+ on incorporation fees? We tested Ownr vs Lawyers.',
    },
    keywords: ['ownr review', 'ownr.co review', 'incorporate in canada', 'ownr vs lawyer', 'incorporation ontario', 'incorporation bc', 'ownr coupon', 'rbc ownr deal'],
    alternates: {
        canonical: '/tools/ownr-canada-review'
    }
};

const DATA = {
    slug: 'ownr-canada-review',
    affiliateUrl: 'https://partners.ownr.co/22i4xm6tugb4',
    specialOffer: '$300 Cash Back w/ RBC',
    hero: {
        title: 'Ownr.co Review: Incorporate Your Canadian Business in Minutes',
        subtitle: 'Skip the expensive law firm. Register, incorporate, and manage your legal compliance online for a fraction of the cost.',
        primaryCtaText: 'Start Your Business',
        secondaryCtaText: 'Book Incorporation',
        verdict: {
            bestFor: 'Solopreneurs, Consultants, E-commerce sellers, and simple corporations.',
            notFor: 'Complex corporate structures (HoldCos), multi-class share structures requiring custom legal drafting.',
            ourTake: 'Ownr is the default recommendation for 95% of our new clients. It is cheaper, faster, and integrates directly with RBC for instant business banking.'
        },
        tags: ['Business Incorporation', 'Legal Documents', 'RBC Integrated'],
        worksWith: ['RBC', 'CRA']
    },
    recommendation: {
        title: 'CPA Recommended',
        desc: 'For simple incorporations, paying a lawyer $1,500+ is unnecessary. Ownr handles the government filings, Minute Book, and share issuance instantly.',
        cta: 'See Ownr Plans'
    },
    pricing: {
        title: 'Simple, Transparent Pricing',
        subtitle: 'Choose the structure that fits your business stage.',
        plans: [
            {
                name: 'Sole Proprietorship',
                price: '$49 - $89',
                period: 'one-time',
                description: 'Best for freelancers and side-hustles.',
                badge: null,
                features: [
                    'Business Registration Number',
                    'Business Name Search',
                    'Registration Documents',
                    'Unlimited Name Searches'
                ]
            },
            {
                name: 'Incorporation',
                price: '$600 - $800',
                period: 'one-time',
                description: 'Best for startups and liability protection.',
                badge: 'Most Popular',
                features: [
                    'Articles of Incorporation',
                    'Digital Minute Book',
                    'Shareholder Resolutions',
                    'Company Bylaws',
                    '$300 RBC Cash Back Eligible'
                ]
            },
            {
                name: 'Managed Corp',
                price: '$499',
                period: '/ year',
                description: 'Best for ongoing compliance and peace of mind.',
                badge: 'Automation',
                features: [
                    'Annual Return Filings',
                    'Minute Book Updates',
                    'Director / Officer Changes',
                    'Unlimited Support',
                    'GST/HST Registration'
                ]
            }
        ],
        note: '**Note:** Implementation prices include estimated government fees which vary by province. The $300 RBC Cash Back offer significantly reduces the net cost of incorporation.',
        content: '' // Fallback empty string if needed by type, though mostly unused if plans exist
    },
    prosCons: {
        pros: [
            'Significantly cheaper than a traditional law firm ($1k+ savings).',
            'Get up to $300 back when opening an RBC business account.',
            'Digital Minute Book included (say goodbye to the dusty physical binder).',
            'Automated GST/HST Program account registration.',
            'Generates all initial legal docs: Bylaws, Shareholder Resolutions, Director Consents.'
        ],
        cons: [
            'Not suitable for complex structures (e.g., Family Trusts, complex HoldCos).',
            'Limited ability to create custom share classes without legal help.',
            'Customer support is online-only (no phone support).'
        ]
    },
    comparisonTable: {
        headers: ['Feature', 'Ownr', 'Appointed Lawyer'],
        rows: [
            ['Cost (Incorporation)', '$600 - $800 (One-time)', '$1,500 - $2,500+'],
            ['Time to Complete', '15 Minutes (Instant Filing)', '1 - 2 Weeks'],
            ['Minute Book', 'Digital & Auto-updated', 'Physical Binder (Extra cost)'],
            ['Banking Integration', 'Instant RBC Setup + $300 Cash Back', 'Manual Paperwork'],
            ['Post-Incorp Support', 'Automated Annual Filings', 'Billable Hours ($300+/hr)']
        ]
    },
    implementation: {
        steps: [
            { title: 'Name Search (Nuans)', desc: 'Run a free name search directly on Ownr to see if your business name is available.' },
            { title: 'Select Structure', desc: 'Choose between Sole Proprietorship (simpler) or Incorporation (liability protection + tax deferral).' },
            { title: 'Company Details', desc: 'Enter your business address and director details. Ownr auto-generates the Articles of Incorporation.' },
            { title: 'Sign & Pay', desc: 'Digitally sign the documents. Pay the one-time fee (remember the RBC rebate applies later).' },
            { title: 'Get Your Minute Book', desc: 'Instantly receive your Certificate of Incorporation and access your digital Minute Book.' },
            { title: 'Claim $300 Rebate', desc: 'Click the link in your dashboard to open your RBC account and trigger the cash back refund.' }
        ]
    },
    stackSetup: {
        title: 'Incorporation Sprint',
        subtitle: "We'll handle your entire incorporation process, from name search to minute book, ensuring you're legally set up in 48 hours.",
        included: [
            'Business Name Search & Reservation',
            'Federal or Provincial Incorporation',
            'RBC Business Account Setup',
            'GST/HST Program Registration'
        ],
        deliverables: [
            'Certificate of Incorporation',
            'Articles of Incorporation',
            'Digital Minute Book',
            'Organizational Resolutions'
        ],
        cta: 'Start Incorporation'
    },
    pitfalls: [
        'Incorporating federally but forgetting to register extra-provincially (Ownr handles this, but pay attention).',
        'Selecting the wrong share structure (Start with standard 1-class if you are solo).',
        'Forgetting to file the Initial Return (Ownr reminds you, but you must do it).',
        'Not converting to a "Managed Corp" plan if you want them to handle Annual Returns automatically.'
    ],
    faq: [
        {
            question: "Is Ownr cheaper than a lawyer?",
            answer: "Yes, significantly. A lawyer typically charges $1,500 to $2,500 for a standard incorporation. Ownr costs roughly $600-$800 (including government fees), and the $300 RBC rebate can bring the net cost down even further."
        },
        {
            question: "Is My Ownr incorporation legally valid?",
            answer: "100%. Ownr generates the exact same government forms (Articles of Incorporation) that a lawyer would file. Your business is registered directly with the federal or provincial government."
        },
        {
            question: "How does the $300 RBC cash back work?",
            answer: "After you pay for incorporation on Ownr, you'll get a special link to open an RBC business bank account. Once the account is open and verified (usually within 60 days), RBC credits your account with $300, effectively reimbursing the Ownr service fee."
        },
        {
            question: "Can I use Ownr for a Holding Company?",
            answer: "You can, but proceed with caution. Ownr's standard templates are designed for operating companies. If you need complex share structures for tax purification or family trusts, we recommend consulting a tax lawyer first."
        },
        {
            question: "Does Ownr handle GST/HST registration?",
            answer: "Yes. During the workflow, you can opt to have Ownr register your business for a CRA Business Number and GST/HST  program account automatically."
        },
        {
            question: "What is the 'Managed Corp' plan?",
            answer: "This is an optional subscription (approx $499/year) where Ownr acts as your virtual legal department. They handle your Annual Return filings, Minute Book updates, and allow unlimited changes to directors/officers without extra legal fees."
        }
    ],
    related: ['xero', 'quickbooks'],
    lastUpdated: 'February 2026',
    jsonLd: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Ownr",
        "description": "Online business incorporation and registration platform for Canadian entrepreneurs.",
        "brand": {
            "@type": "Brand",
            "name": "Ownr / RBC Ventures"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "CAD",
            "price": "600",
            "priceValidUntil": "2026-12-31",
            "url": "https://ownr.co"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "reviewCount": "532",
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
            "reviewBody": "Ownr is the most efficient way for Canadian small business owners to incorporate. The integration with RBC and the digital minute book features solve two of the biggest pain points for new founders."
        }
    }
};

export default function OwnrReviewPage() {
    return (
        <>
            <ToolPageView data={DATA} />
        </>
    );
}
