
export interface ResourceProduct {
    id: string;
    title: string;
    description: string;
    price: string;
    priceValue: number;
    stripeLink: string;
    category: 'template' | 'guide' | 'system' | 'bundle';
    format: 'Spreadsheet' | 'PDF' | 'Notion' | 'Video' | 'Bundle';
    bestFor: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    outcome: string;
    timeToImplement: string;
    features: string[];
    longDescription?: string;
    whoIsItFor?: string[];
    notFor?: string[];
    whatIsInside?: string[];
    faq?: { question: string; answer: string }[];
    isBestSeller?: boolean;
    isNew?: boolean;
    image?: string; // Placeholder for now
}

export const RESOURCES: ResourceProduct[] = [
    {
        id: 'coa-pro',
        title: 'Chart of Accounts Pro',
        description: 'The exact GL structure we use for 8-figure SaaS & Agency clients. Cleaner reporting, fewer uncategorized expenses.',
        price: '$49',
        priceValue: 49,
        stripeLink: 'https://buy.stripe.com/test_coa_pro', // Placeholder
        category: 'template',
        format: 'Spreadsheet',
        bestFor: 'SaaS, Agencies, E-commerce',
        difficulty: 'Beginner',
        outcome: 'Investor-ready reporting structure',
        timeToImplement: '30 mins',
        features: [
            'Separate COGS vs. OpEx correctly',
            'SaaS-specific revenue categories (MRR, Setup Fees)',
            'Agency-specific cost centers',
            'Easy import CSV for Xero/QBO'
        ],
        isBestSeller: true,
        longDescription: "Stop using the default 'Standard' chart of accounts that lumps everything into 'General Expenses'. This kit gives you the granular, professional-grade GL structure we use for high-growth startups.",
        whoIsItFor: ["Founders doing their own books", "Startups preparing for due diligence", "Businesses with messy reporting"],
        whatIsInside: ["Xero Import CSV", "QBO Import CSV", "Google Sheets Reference Guide", " Loom Video Walkthrough (10 mins)"]
    },
    {
        id: 'month-end-pack',
        title: 'Month-End Close Checklist',
        description: 'Stop dreading the first of the month. A step-by-step SOP to close your books in under 2 hours.',
        price: '$29',
        priceValue: 29,
        stripeLink: 'https://buy.stripe.com/test_month_end',
        category: 'guide',
        format: 'Notion',
        bestFor: 'Founders & Bookkeepers',
        difficulty: 'Intermediate',
        outcome: 'Close books 3x faster with confidence',
        timeToImplement: '60 mins setup',
        features: [
            'Reconciliation workflow',
            'Pre-paid expense amortization calculator',
            'Accrual adjustments template',
            'Management report template'
        ],
        isBestSeller: true
    },
    {
        id: 'gst-workflow',
        title: 'GST/HST Workflow Kit',
        description: 'Never overpay or under-claim again. A complete system for tracking ITC\'s and filing accurately.',
        price: '$39',
        priceValue: 39,
        stripeLink: 'https://buy.stripe.com/test_gst_workflow',
        category: 'system',
        format: 'PDF',
        bestFor: 'Canadian Business Owners',
        difficulty: 'Intermediate',
        outcome: 'Audit-proof sales tax filings',
        timeToImplement: '45 mins',
        features: [
            'ITC eligibility cheat sheet (Meals vs. Travel)',
            'Digital filing calendar',
            'Quick Method vs. Regular Method calculator',
            'CRA correspondence templates'
        ]
    },
    {
        id: 'clean-books-setup',
        title: 'Clean Books Setup System',
        description: 'Starting from scratch? Do it right the first time. Bank rules, tracking categories, and software settings.',
        price: '$59',
        priceValue: 59,
        stripeLink: 'https://buy.stripe.com/test_setup',
        category: 'system',
        format: 'Video',
        bestFor: 'New Incorporations',
        difficulty: 'Beginner',
        outcome: 'Automated bookkeeping foundation',
        timeToImplement: '90 mins',
        features: [
            'Bank Feed Rule Library (100+ common vendors)',
            'Receipt capture setup guide (Dext/Hubdoc)',
            'Payroll integration checklist',
            'Shareholder loan tracking template'
        ]
    },
    {
        id: 'year-end-kit',
        title: 'Year-End Ready Kit',
        description: 'Save thousands in accounting fees by handing over a clean file. The ultimate checklist before sending to your tax accountant.',
        price: '$69',
        priceValue: 69,
        stripeLink: 'https://buy.stripe.com/test_year_end',
        category: 'bundle',
        format: 'Bundle',
        bestFor: 'Any Corp with a Dec 31 Yearend',
        difficulty: 'Intermediate',
        outcome: 'Zero back-and-forth with your accountant',
        timeToImplement: '2-3 hours',
        features: [
            '10-point trial balance health check',
            'Fixed asset register template',
            'Digital document folder structure',
            'Accountant handoff email template'
        ],
        isBestSeller: false,
        isNew: true
    },
    {
        id: 'saas-kpi',
        title: 'SaaS KPI Snapshot',
        description: 'Track MRR, Churn, LTV, and CAC correctly. A simple, powerful model for subscription businesses.',
        price: '$49',
        priceValue: 49,
        stripeLink: 'https://buy.stripe.com/test_kpi',
        category: 'template',
        format: 'Spreadsheet',
        bestFor: 'SaaS Founders',
        difficulty: 'Advanced',
        outcome: 'Board-ready metrics',
        timeToImplement: '60 mins',
        features: [
            'Revenue recognition waterfall',
            'Cohort retention dashboard',
            'Unit economics calculator',
            'Burn rate & runway projector'
        ]
    },
    {
        id: 'diy-sops',
        title: 'DIY Bookkeeping SOPs',
        description: 'Delegate your bookkeeping to an assistant or VA with confidence. Complete process documentation.',
        price: '$79',
        priceValue: 79,
        stripeLink: 'https://buy.stripe.com/test_sops',
        category: 'guide',
        format: 'Notion',
        bestFor: 'Delegators',
        difficulty: 'Beginner',
        outcome: 'Business runs without you',
        timeToImplement: '15 mins',
        features: [
            'Weekly/Monthly/Quarterly task lists',
            'Security & Access protocols',
            'Quality assurance checklist',
            'Common error troubleshooting guide'
        ]
    },
    {
        id: 'finance-system-bundle',
        title: 'Finance System in a Weekend',
        description: 'Get everything. The full operating system for your business finances. COA + Month-End + GST + Setup.',
        price: '$149',
        priceValue: 149,
        stripeLink: 'https://buy.stripe.com/test_bundle',
        category: 'bundle',
        format: 'Bundle',
        bestFor: 'Serious Founders',
        difficulty: 'Intermediate',
        outcome: 'Total financial clarity',
        timeToImplement: 'Weekend Project',
        features: [
            'Everything in Chart of Accounts Pro',
            'Month-End Close Checklist',
            'GST/HST Workflow Kit',
            'Clean Books Setup System',
            'Bonus: 30-min strategy loom review'
        ],
        isBestSeller: true
    }
];

export const FREE_RESOURCES = [
    {
        id: 'month-end-mini',
        title: 'Month-End Mini Checklist',
        description: 'The 5 essential tasks you must do every month to keep your books safe.',
        downloadLink: '#',
        format: 'PDF'
    },
    {
        id: 'gst-cheat-sheet',
        title: 'GST/HST Basics Cheat Sheet',
        description: 'Quick reference guide for tax rates, deadlines, and what you can claim.',
        downloadLink: '#',
        format: 'PDF'
    },
    {
        id: 'year-end-mini',
        title: 'Year-End Ready Mini Checklist',
        description: 'A simple one-pager to make sure you aren\'t missing anything big before tax season.',
        downloadLink: '#',
        format: 'PDF'
    }
];

export const FAQS = [
    {
        question: "Will these templates work with my software?",
        answer: "Yes. All our templates are designed specifically for Xero and QuickBooks Online (the two industry leaders in Canada). Spreadsheets come in Google Sheets and Excel formats."
    },
    {
        question: "Is this really specific to Canada?",
        answer: "100%. We are a Canadian CPA firm. All tax rates, GST/HST rules, and compliance checklists are built for Canadian corporations. No generic US advice here."
    },
    {
        question: "What if I buy it and hate it?",
        answer: "We have a 7-day money-back guarantee on all digital products. If you feel it didn't save you at least 10x the cost in time or accounting fees, just email us for a full refund."
    },
    {
        question: "Can I just hire you to do this for me instead?",
        answer: "Absolutely. These kits are for the 'DIY' founder. If you want us to handle everything, check out our 'Services' page for our monthly done-for-you packages."
    },
    {
        question: "How do I access the files?",
        answer: "Immediately after purchase, you'll receive an email with a secure download link. You can save the files to your own computer or Google Drive forever."
    },
    {
        question: "Does this include 1-on-1 support?",
        answer: "These are self-serve products, so they don't include custom email support or consulting. However, the instructions are extremely detailed. If you need specific advice, you can book a paid consultation."
    },
    {
        question: "I have multiple companies. Do I need multiple licenses?",
        answer: "Our standard license allows you to use the templates for all businesses you personally own or operate. If you are a bookkeeper/accountant using them for clients, please contact us for a commercial license."
    },
    {
        question: "My books are a disaster. Where do I start?",
        answer: "Start with the 'Clean Books Setup System' to fix the foundation, then use the 'Month-End Close Pack' to keep them clean going forward."
    }
];
