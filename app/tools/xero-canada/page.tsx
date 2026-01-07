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
    affiliateUrl: '{{AFFILIATE_XERO_URL}}',
    hero: {
        title: 'Xero for Canadian Businesses (2026): The Modern Standard',
        subtitle: 'The cloud accounting favorite for Canadian startups, agencies, and ecommerce brands. Cleaner design, better app ecosystem, and included receipt capture.',
        primaryCtaText: 'Start Xero (Free Trial)',
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
        content: `**Which Xero plan should you pick?**
        
        **Starter:** Good for side hustles (<20 invoices/month).
        **Standard (Recommended):** Unlimited invoices and bill entry. Perfect for 90% of businesses.
        **Premium:** Mandatory if you have multi-currency needs (USD/EUR cards or bank accounts).
        
        *Note: Payroll in Canada is an add-on. We generally recommend Wagepoint instead of Xero Payroll.*`
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
            { title: 'Historical Import', desc: 'If moving from Excel, we import your opening balances as of your last year-end.' },
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
    related: ['qbo', 'dext', 'venn']
};

export default function XeroCanadaPage() {
    return <ToolPageView data={DATA} />;
}
