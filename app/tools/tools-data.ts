import { Check, X } from 'lucide-react';

export interface Tool {
    id: string;
    name: string;
    logo: string; // Keep for fallback text
    initials: string; // 1-2 chars for logo placeholder
    brandColor: string; // Hex code for background
    iconName?: string; // Optional lucide icon name
    slug?: string; // Internal guide page slug
    summary: string;
    bestFor: string;
    benefits: string[];
    watchouts: string[];
    integrations: string[];
    affiliateUrl: string;
    categoryIds: string[];
    detailAnchor: string;
    detailContent: {
        whoFor: string;
        setupTime: string;
        notes: string;
        pitfalls: string[];
        tip: string;
    }
}

export interface Category {
    id: string;
    title: string;
    description?: string;
}

export interface Stack {
    id: string;
    title: string;
    description: string;
    toolIds: string[];
}

export const CATEGORIES: Category[] = [
    { id: 'start', title: 'Start & Incorporate' },
    { id: 'banking', title: 'Business Banking & Spend' },
    { id: 'accounting', title: 'Accounting Software' },
    { id: 'receipts', title: 'Receipts & Bill Capture' },
    { id: 'ecommerce', title: 'Ecommerce Automation' },
];

export const TOOLS: Tool[] = [
    {
        id: 'ownr',
        name: 'Ownr',
        logo: 'Ownr',
        initials: 'Ow',
        brandColor: '#2C5282', // Indigo/Blue
        summary: 'The easiest way to register or incorporate a business in Canada.',
        bestFor: 'New founders & sole props upgrading to a corp.',
        benefits: [
            'Automates minute book creation',
            'Cheaper than a lawyer for simple setups',
            'Integrates with RBC for cash back',
            'Handles annual return filings'
        ],
        watchouts: [
            'Not for complex share structures (family trusts, etc.)',
            'Federal & Ontario/BC/Alberta focused'
        ],
        integrations: ['RBC'],
        affiliateUrl: '{{AFFILIATE_OWNR_URL}}',
        categoryIds: ['start'],
        detailAnchor: 'tool-ownr',
        detailContent: {
            whoFor: 'Simple incorporations (1-3 shareholders) in ON, BC, AB, or Federal.',
            setupTime: '15-20 minutes',
            notes: 'Exports documents easily for your accountant.',
            pitfalls: ['Forgetting to file the initial return (Ownr reminds you though).'],
            tip: 'Use their "RBC money back" offer to cover the incorporation cost.'
        }
    },
    {
        id: 'venn',
        name: 'Venn',
        logo: 'Venn',
        initials: 'Ve',
        brandColor: '#000000', // Black branding
        summary: 'Modern corporate cards & expense management designed for Canadian SMEs.',
        bestFor: 'Teams needing agile spending without personal guarantees.',
        benefits: [
            'No personal guarantee required',
            'Unlimited virtual cards',
            'Syncs receipts to QBO/Xero',
            'Earns cash back on CAD/USD spend'
        ],
        watchouts: [
            'Pre-funded (like a debit/credit hybrid) initially',
            'Newer player than big banks'
        ],
        integrations: ['QuickBooks Online', 'Xero', 'NetSuite'],
        affiliateUrl: '{{AFFILIATE_VENN_URL}}',
        categoryIds: ['start', 'banking'],
        detailAnchor: 'tool-venn',
        detailContent: {
            whoFor: 'Startups & Agencies who hate bank visits.',
            setupTime: '1-3 days (approval pending)',
            notes: 'Great integration with QBO/Xero feeds.',
            pitfalls: ['Not loading enough funds for big ad spend weekends.'],
            tip: 'Issue a separate virtual card for every subscription to kill zombies easily.'
        }
    },
    {
        id: 'float',
        name: 'Float',
        logo: 'Float',
        initials: 'Fl',
        brandColor: '#EF4444', // Red branding usually, or dark blue. Let's go with Red/Orange to distinguish to avoid generic blue blue blue. Actually Float is often reddish.
        summary: 'Canada’s #1 corporate card and spend management platform.',
        bestFor: 'Growing teams (10-100+) needing serious controls.',
        benefits: [
            'High yield (4%+) on idle cash',
            'Strict approval workflows',
            'Physical & virtual cards',
            'Receipt matching via text/email'
        ],
        watchouts: [
            'Pre-funded model',
            'Minimum balance requirements for some tiers'
        ],
        integrations: ['QuickBooks Online', 'Xero', 'NetSuite'],
        affiliateUrl: 'https://welcome.floatfinancial.com/?eid=NNodPIIg',
        categoryIds: ['banking'],
        detailAnchor: 'tool-float',
        detailContent: {
            whoFor: 'Scaling companies with multiple spenders and departments.',
            setupTime: '2-4 days',
            notes: 'The audit trail on approvals is CPA-approved.',
            pitfalls: ['ignoring the text-to-match receipt feature.'],
            tip: 'Use their "Yield" account to park tax money and earn interest.'
        }
    },
    {
        id: 'ramp',
        name: 'Ramp',
        logo: 'Ramp',
        initials: 'Ra',
        brandColor: '#F59E0B', // Yellow/Gold for distinction (Ramp is actually green/yellow/black depending on era, let's use Yellow/Amber)
        summary: 'Global corporate cards with unmatched automation features.',
        bestFor: 'Cross-border businesses with significant USD spend.',
        benefits: [
            'Incredible UI and automation',
            'Price matching/negotiation services',
            'Global card issuance',
            'Deep accounting integration'
        ],
        watchouts: [
            'Strict underwriting (often need strong cash balance)',
            'Primarily USD focused (check current CAD support)'
        ],
        integrations: ['QuickBooks Online', 'Xero', 'NetSuite', 'Sage'],
        affiliateUrl: '{{AFFILIATE_RAMP_URL}}',
        categoryIds: ['banking'],
        detailAnchor: 'tool-ramp',
        detailContent: {
            whoFor: 'Tech-forward companies with US operations.',
            setupTime: '2-5 days',
            notes: 'Best-in-class UI.',
            pitfalls: ['Assuming it works identical to a Canadian bank card for CRA payments.'],
            tip: 'Use their software discounts section—it pays for itself.'
        }
    },
    {
        id: 'xero',
        name: 'Xero',
        logo: 'Xero',
        initials: 'Xe',
        brandColor: '#06B6D4', // Cyan/Blue
        summary: 'Beautiful cloud accounting software intended for small business owners.',
        bestFor: 'Agencies, Ecommerce, and Design-led founders.',
        benefits: [
            'User-friendly interface',
            'Strong app ecosystem (Hubdoc included)',
            'Unlimited users on most plans',
            'Great reconciliation dashboard'
        ],
        watchouts: [
            'Payroll module in Canada is weak (use Wagepoint)',
            'Price increases annually'
        ],
        integrations: ['Everything'],
        affiliateUrl: '{{AFFILIATE_XERO_URL}}',
        slug: 'xero-canada',
        categoryIds: ['accounting'],
        detailAnchor: 'tool-xero',
        detailContent: {
            whoFor: 'DIY founders who want cleaner design.',
            setupTime: '1 hour (to start)',
            notes: 'Comes with Hubdoc for free.',
            pitfalls: ['Breaking the bank feeds by changing passwords often.'],
            tip: 'Use "Find & Recode" (or ask us to) to fix bulk errors instantly.'
        }
    },
    {
        id: 'qbo',
        name: 'QuickBooks Online',
        logo: 'QBO',
        initials: 'QB',
        brandColor: '#10B981', // Green
        summary: 'The industry standard for cloud accounting in North America.',
        bestFor: 'Businesses working with traditional accountants.',
        benefits: [
            'Most accountants know it perfectly',
            'Powerful reporting features',
            'Robust mobile app',
            'Scales well to mid-market'
        ],
        watchouts: [
            'Customer support can be difficult',
            'Pricey for advanced features (Classes/Locations)'
        ],
        integrations: ['Everything'],
        affiliateUrl: '{{AFFILIATE_QBO_URL}}',
        slug: 'quickbooks-vs-xero-canada',
        categoryIds: ['accounting'],
        detailAnchor: 'tool-qbo',
        detailContent: {
            whoFor: 'General small businesses.',
            setupTime: '1 hour',
            notes: 'The "standard" for a reason.',
            pitfalls: ['Mixing personal expenses (it gets messy fast).'],
            tip: 'Use the mobile app to snap receipts immediately.'
        }
    },
    {
        id: 'dext',
        name: 'Dext',
        logo: 'Dext',
        initials: 'Dx',
        brandColor: '#F97316', // Orange
        summary: 'The gold standard for receipt and invoice data extraction.',
        bestFor: 'High-volume businesses (50+ bills/month).',
        benefits: [
            '99% accuracy on OCR',
            'Fetches bills from utility sites automatically',
            'Line-item extraction',
            'Archive keeps CRA happy'
        ],
        watchouts: [
            'Per-user/volume pricing can add up',
            'Overkill for micro-businesses'
        ],
        integrations: ['Xero', 'QuickBooks Online'],
        affiliateUrl: '{{AFFILIATE_DEXT_URL}}',
        slug: 'dext-canada',
        categoryIds: ['receipts'],
        detailAnchor: 'tool-dext',
        detailContent: {
            whoFor: 'Anyone tired of chasing paper receipts.',
            setupTime: '30 mins',
            notes: 'Supplier rules automate 80% of bookkeeping.',
            pitfalls: ['Uploading duplicates (Dext catches most, but not all).'],
            tip: 'Give every employee the Dext email address to forward invoices directly.'
        }
    },
    {
        id: 'synder',
        name: 'Synder',
        logo: 'Synder',
        initials: 'Sy',
        brandColor: '#8B5CF6', // Purple/Violet
        summary: 'Automated sync for Stripe, Shopify, PayPal, and Square.',
        bestFor: 'Ecommerce & SaaS with high transaction volume.',
        benefits: [
            'Reconciles processor fees automatically',
            'Handles multi-currency correctly',
            'Prevents "deposit mismatch" headaches',
            'Sales tax breakdown sync'
        ],
        watchouts: [
            'Review settings carefully to avoid duplicating sales',
            'Can be complex to configure initially'
        ],
        integrations: ['Shopify', 'Stripe', 'PayPal', 'Square', 'Xero', 'QBO'],
        affiliateUrl: '{{AFFILIATE_SYNDER_URL}}',
        slug: 'shopify-accounting-apps',
        categoryIds: ['ecommerce'],
        detailAnchor: 'tool-synder',
        detailContent: {
            whoFor: 'Shopify/Stripe merchants doing $10k+/month.',
            setupTime: '1-2 hours',
            notes: 'A lifesaver for matching net deposits to gross sales.',
            pitfalls: ['Syncing historical data without checking for duplicates.'],
            tip: 'Use the "Daily Summary" mode to keep your books clean instead of syncing every $5 sale individually.'
        }
    }
];

export const STACKS: Stack[] = [
    {
        id: 'saas',
        title: 'SaaS Starter Stack',
        description: 'Perfect for subscription businesses needing recurring billing and low touch.',
        toolIds: ['ownr', 'venn', 'xero']
    },
    {
        id: 'ecommerce',
        title: 'Ecommerce Stack',
        description: 'Automate high-volume sales, inventory, and cross-border spending.',
        toolIds: ['ownr', 'float', 'synder', 'xero', 'dext']
    },
    {
        id: 'lean',
        title: 'Lean Ops Stack',
        description: 'The minimal viable setup for service businesses and consultancies.',
        toolIds: ['ownr', 'venn', 'qbo']
    }
];

export const FAQS = [
    {
        question: "Are these tools available in Canada?",
        answer: "Yes. Every tool listed here supports Canadian tax rules (GST/HST), Canadian banking feeds, and CAD currency. We specifically exclude tools that only work well in the US."
    },
    {
        question: "Do I need to pay for all of these?",
        answer: "Most have monthly fees, but many offer free trials or free tiers. The time you save on bookkeeping usually pays for the software 10x over."
    },
    {
        question: "Can I switch from QBO to Xero (or vice versa)?",
        answer: "Yes, but it can be tricky depending on how much historical data you have. We recommend doing a 'clean break' at your fiscal year-end if possible."
    },
    {
        question: "Why do you recommend Ownr for incorporation?",
        answer: "For simple structures (1-3 shareholders), it's 80% cheaper than a lawyer and generates a perfect minute book. We use it for almost all our startup clients."
    },
    {
        question: "Is having a corporate card really necessary?",
        answer: "Absolutely. Mixing personal funds with business expenses is the #1 reason bookkeeping gets expensive and messy. A separated card is mandatory for clean books."
    },
    {
        question: "What if I use a different bank than the ones listed?",
        answer: "That's fine! Dext and Xero/QBO integrate with all major Canadian banks (RBC, TD, Scotiabank, BMO, CIBC). The cards we listed (Venn, Float) just offer better software features."
    },
    {
        question: "Do you get paid if I click these links?",
        answer: "We may earn a small commission from some partners, but it never increases your cost. In fact, our partner links often unlock extended trials or discounts for you."
    }
];
