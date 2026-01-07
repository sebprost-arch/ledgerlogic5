import React from 'react';
import type { Metadata } from 'next';
import ToolPageView from '@/views/ToolPageView';

export const metadata: Metadata = {
    title: 'Shopify Accounting Apps for Canada (2026): Who It’s For + Pricing + Setup',
    description: 'The best tools to connect Shopify to Xero or QuickBooks in Canada. A2X vs Synder. Handle COGS, payouts, and GST/HST automatically.',
    alternates: {
        canonical: '/tools/shopify-accounting-apps'
    }
};

const DATA = {
    slug: 'shopify-accounting-apps',
    affiliateUrl: '{{AFFILIATE_A2X_URL}}',
    hero: {
        title: 'Shopify Accounting Apps: The Canadian Ecosystem',
        subtitle: 'Shopify is a sales beast, but its native connection to accounting software is often weak. Here are the connector apps you need to keep your books investor-ready.',
        primaryCtaText: 'Get A2X (Best for Shopify)',
        verdict: {
            bestFor: 'Any Shopify store doing >$5k/month.',
            notFor: 'Hobby stores (manual entry is fine).',
            ourTake: 'Do not use the native free "Shopify to QBO" integration. It attempts to sync every order individually and clogs your books. Use A2X to sync summarized journals.'
        }
    },
    recommendation: {
        title: 'Recommended Choice',
        desc: 'A2X is the industry standard for Shopify. It handles COGS (Cost of Goods Sold) better than any other connector. It is worth the monthly fee.',
        cta: 'Try A2X Free'
    },
    pricing: {
        content: `**Connector App Pricing:**
        
        **A2X (Recommended):** Starts ~$29/mo. Essential for inventory-heavy stores.
        **Synder:** Starts ~$20/mo. Good for multi-channel (Stripe + Shopify).
        **LinkMyBooks:** Good alternative, similar features.
        
        *Value:* They save ~10 hours of manual reconciliation per month. The cost is negligible compared to a bookkeeper's hourly rate.`
    },
    prosCons: {
        pros: [
            'Summarizes daily sales into one clean journal entry (keeps books fast).',
            'Separates Gift Cards, Tax, Shipping, and Returns accurately.',
            'Matches payouts from Shopify Payments perfectly.',
            'Calculates COGS based on sold inventory (A2X specifically).',
            'Prevents "system bloat" from thousands of individual invoices.'
        ],
        cons: [
            'Another monthly subscription to pay.',
            'Initial setup requires accounting knowledge (Chart of Accounts mapping).',
            'If settings are wrong, it replicates errors thousands of times.'
        ]
    },
    comparisonTable: {
        headers: ['Feature', 'A2X', 'Native Sync'],
        rows: [
            ['Data Method', 'Summarized Journals (Clean)', 'Individual Invoices (Messy)'],
            ['COGS Tracking', 'Yes (Accurate)', 'No'],
            ['Payout Matching', 'Automated', 'Manual'],
            ['Tax Handling', 'Advanced Mapping', 'Basic']
        ]
    },
    implementation: {
        steps: [
            { title: 'Disconnect Native Sync', desc: 'Stop the native Shopify-QBO/Xero sync immediately to prevent duplicates.' },
            { title: 'Tax Mapping', desc: 'Map Shopify tax lines to specific GST/HST/PST codes in your accounting software.' },
            { title: 'Payout Clearing', desc: 'Direct the app to post entries to a "Shopify Clearing" account, not the bank directly.' },
            { title: 'COGS Configuration', desc: 'Upload your landed costs so the app can calculate accurate gross margin per day.' },
            { title: 'Reconciliation', desc: 'Match the bank deposit to the journal entry. Zero discrepancy is the goal.' }
        ]
    },
    pitfalls: [
        'Syncing every single $50 order as a separate invoice (slows down Xero/QBO).',
        'Forgetting to map Liability accounts for Gift Cards.',
        'Ignoring PayPal sales (Shopify Payments and PayPal are separate payouts!).',
        'Not handling "Refunds" correctly, leading to overstated revenue.'
    ],
    faq: [
        {
            question: "What is the best app for Shopify Canada?",
            answer: "We prefer A2X for pure Shopify/Amazon sellers due to its COGS engine. Synder is great if you use Stripe/Square heavily alongside Shopify."
        },
        {
            question: "Why do I need a connector app?",
            answer: "Because Shopify payouts do not match your daily sales. Refunds, fees, and reserve holds make the cash deposit different from the gross sales. The connector bridges this math gap."
        }
    ],
    related: ['synder', 'xero', 'dext']
};

export default function ShopifyAccountingAppsPage() {
    return <ToolPageView data={DATA} />;
}
