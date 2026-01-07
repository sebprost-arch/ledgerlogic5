import React from 'react';
import type { Metadata } from 'next';
import ToolPageView from '@/views/ToolPageView';

export const metadata: Metadata = {
    title: 'Stripe Accounting for Canadian Businesses (2026): Who It’s For + Pricing + Setup',
    description: 'How to automate Stripe bookkeeping in Canada. Handle fees, refunds, and multi-currency payouts correctly in Xero or QBO.',
    alternates: {
        canonical: '/tools/stripe-accounting'
    }
};

const DATA = {
    slug: 'stripe-accounting',
    affiliateUrl: '{{AFFILIATE_SYNDER_URL}}', // Linking to Synder/Connector as the solution
    hero: {
        title: 'Stripe Accounting for Canadian Businesses',
        subtitle: 'Stripe is easy to use but hard to reconcile. We help you automate the flow of gross sales, fees, and net payouts so your books actually match your bank account.',
        primaryCtaText: 'Automate Stripe (with Synder)',
        verdict: {
            bestFor: 'SaaS, Agencies, and E-commerce brands using Stripe as a processor.',
            notFor: 'Brick & mortar retail (you likely use a terminal processor).',
            ourTake: 'Never treat Stripe deposits as just "Sales". You must account for the fees and refunds, or you will overpay taxes. Automation tools are mandatory here.'
        }
    },
    recommendation: {
        title: 'Recommended Choice',
        desc: 'Do not do this manually. Use Synder to bridge Stripe to Xero/QBO. It handles the fees, refunds, and tax splits automatically.',
        cta: 'Try Synder'
    },
    pricing: {
        content: `**The Hidden Cost of Stripe:**
        Manual entry of 500 transactions/month = 5-10 hours of bookkeeping.
        
        **Automation Cost:**
        Synder/A2X: ~$20-$50/month.
        
        *Verdict:* Investing in an automation tool is almost always cheaper than paying a bookkeeper to match transactions manually.`
    },
    prosCons: {
        pros: [
            'Best developer experience in the world.',
            'Seamless checkout flow increases conversion.',
            'Exports separate tax reports for GST/HST/PST.',
            'Handles global currencies automatically.',
            'Synder integration makes bookkeeping 100% hands-off.'
        ],
        cons: [
            'Payouts are "Net" (Sales minus Fees), causing bookkeeping headaches.',
            'Holds funds for 7 days initially.',
            'Dispute/Chargeback protection costs extra.'
        ]
    },
    comparisonTable: { // Comparing Manual vs Auto
        headers: ['Method', 'Speed', 'Accuracy'],
        rows: [
            ['Manual Entry', 'Slow (Hrs/Month)', 'Low (Prone to errors)'],
            ['Native Sync', 'Medium', 'Medium (Often misses fees)'],
            ['Synder/A2X', 'Instant', 'High (Matches Penny-Perfect)']
        ]
    },
    implementation: {
        steps: [
            { title: 'Clearing Account Setup', desc: 'Create a "Stripe Clearing" bank account in Xero/QBO to hold funds in transit.' },
            { title: 'Connect Synder', desc: 'Connect the Synder app to fetch data securely from Stripe.' },
            { title: 'Map Tax Codes', desc: 'Ensure Canadian sales map to GST/HST collected, and US sales map to Exempt/Zero-rated.' },
            { title: 'Fee Recognition', desc: 'Configure the tool to expense Stripe Fees separately automatically.' },
            { title: 'Payout Matching', desc: 'Reconcile the bank deposit against the clearing account balance.' }
        ]
    },
    pitfalls: [
        'Booking the net deposit as "Sales" (Under-reporting revenue and missing deductions).',
        'Ignoring processing fees (Stripe fees are a valid business expense!).',
        'Double counting sales (once from invoice, once from Stripe deposit).',
        'Losing track of the "Ending Balance" held in Stripe at month-end.'
    ],
    faq: [
        {
            question: "Why don't my Stripe deposits match my sales?",
            answer: "Because Stripe takes their fee BEFORE sending you the money. If you sell for $100 and the fee is $3, you get $97. You need to record $100 Sales and $3 Expense."
        },
        {
            question: "Should I use the built-in Xero/Stripe feed?",
            answer: "It's okay for low volume. For high volume (100+ transactions), it often breaks. We prefer Synder."
        }
    ],
    related: ['synder', 'xero', 'qbo']
};

export default function StripeAccountingPage() {
    return <ToolPageView data={DATA} />;
}
