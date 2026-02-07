// Map of keywords to their target URLs
// This includes both Service/Tool pages AND other Blog Posts
export const keywordMap: Record<string, string> = {
    // --- Tools & Services ---
    'Xero': '/xero-accounting-canada',
    'QuickBooks': '/tools/quickbooks-vs-xero-canada', // Redirects to /tools/quickbooks-vs-xero-canada? Or is it a separate tool? "quickbooks-vs-xero-canada" exists. Let's use xero-canada and general tools if unsure.
    // I see 'xero-canada' and 'quickbooks-vs-xero-canada' in tools.
    // Let's stick to safe bets.
    'QuickBooks Online': '/tools/quickbooks-vs-xero-canada', // Mapping to comparison as it's a high value page
    'Tax Planning': '/services/tax-planning', // Assuming standard URL structure or will verify
    'Bookkeeping': '/services/bookkeeping',
    'CFO': '/services/cfo',
    'Virtual CFO': '/services/cfo',
    'Incorporation': '/services/incorporation',
    'Holding Company': '/services/holding-company',
    'Personal Tax': '/services/personal-tax',
    'Corporate Tax': '/services/corporate-tax',

    // --- Cornerstone Blog Posts (Cross-linking) ---
    // Cluster A: Cloud Accounting & Xero
    'Is Xero Easy': '/blog/is-xero-easy-to-use',
    'Xero Review': '/blog/is-xero-easy-to-use',
    'Switch to Xero': '/blog/should-i-switch-to-xero',
    'Xero Pricing': '/blog/xero-pricing-for-canadian-businesses-what-you-need-to-know-before-subscribing',
    'Learn Xero': '/blog/how-long-does-it-take-to-learn-xero',
    'Xero Invoicing': '/blog/streamline-your-invoicing-how-xero-transforms-the-process-for-canadian-companies',
    'QuickBooks vs Xero': '/blog/quickbooks-vs-xero-a-comparative-analysis-for-canadian-smes',

    // Cluster B: Incorporation & Structuring
    'Incorporating in Canada': '/blog/tax-benefits-and-disadvantages-of-incorporating-in-canada',
    'Benefits of Incorporation': '/blog/tax-benefits-and-disadvantages-of-incorporating-in-canada',
    'Section 85 Rollover': '/blog/transferring-personal-assets-from-proprietorship-to-a-corporation-in-canada-section-85-rollover',
    'Small Business Tax Rate': '/blog/small-business-tax-rate-canada',
    'Corporate Tax Filing': '/blog/corporate-tax-planning-strategies-in-canada',
    'Ontario Annual Return': '/blog/how-to-file-ontario-annual-return',

    // Cluster C: Holding Companies & Tax Planning
    'Holding Company Definition': '/blog/what-is-a-holding-company-in-canada', // Renamed to avoid collision with Service page
    'Holding Company Benefits': '/blog/what-is-a-holding-company-in-canada',
    'Capital Dividend Account': '/blog/taxation-of-investment-income-in-a-canadian-corporation',
    'CDA': '/blog/taxation-of-investment-income-in-a-canadian-corporation',
    'Investment Income Tax': '/blog/taxation-of-investment-income-in-a-canadian-corporation',
    'Tax on Dividends': '/blog/are-dividends-taxable-in-canada',

    // Cluster D: CRA Audits & Compliance
    'Tax Deadlines': '/blog/year-end-checklist-for-small-business-canada',
    'CRA Penalties': '/blog/cra-audit-penalties',
    'CRA Audit': '/blog/how-do-you-deal-with-a-cra-audit',
    'Audit Chances': '/blog/chances-of-getting-audited-by-cra',
    'Bank Audit': '/blog/does-cra-audit-your-bank-account',

    // General
    'GST/HST': '/blog/gst-hst-tips-for-small-business-owners',
    'Sales Tax': '/blog/gst-hst-tips-for-small-business-owners',
    'Payroll Taxes': '/blog/managing-payroll-taxes-in-canadian-small-businesses',
    'Payroll': '/blog/managing-payroll-taxes-in-canadian-small-businesses',

    // --- High Volume Opportunities (Round 2 Expansion) ---
    'E-commerce': '/blog/accounting-best-practices-for-canadian-e-commerce',
    'Shopify': '/tools/shopify-accounting-apps',
    'Amazon FBA': '/blog/how-to-know-if-a-product-on-amazon-is-profitable',
    'Cash Flow': '/blog/10-key-strategies-for-improving-cash-flow-and-forecasting-in-canadian-businesses',
    'Cash Flow Forecasting': '/blog/10-key-strategies-for-improving-cash-flow-and-forecasting-in-canadian-businesses',
    'Dividends': '/blog/are-dividends-taxable-in-canada',
    'Tax Deductions': '/blog/tax-write-offs-for-small-business-canada',
    'Business Expenses': '/blog/tax-write-offs-for-small-business-canada',
    'Startups': '/blog/the-importance-of-accounting-for-startups-in-canada',
    'Startup Accounting': '/blog/the-importance-of-accounting-for-startups-in-canada',
    'Cloud Accounting': '/blog/benefits-of-outsourcing-your-small-business-controller-position-to-a-cloud-accountant-in-canada',
};

/**
 * Injects internal links into the provided HTML content based on the keywordMap.
 * - Links only the first occurrence of each keyword.
 * - Avoids replacing text inside existing HTML tags (links, headers, attributes).
 * - Sorts keywords by length to prioritize longer, more specific phrases.
 */
export function injectInternalLinks(content: string): string {
    if (!content) return '';

    // 1. Sort keywords by length descending to match longest phrases first
    const keywords = Object.keys(keywordMap).sort((a, b) => b.length - a.length);

    let newContent = content;
    const placedKeywords = new Set<string>();

    keywords.forEach(keyword => {
        // Skip if we already placed a link for this specific keyword (though distinct keywords pointing to same URL is fine)
        if (placedKeywords.has(keyword)) return;

        const url = keywordMap[keyword];

        // Regex explanation:
        // (?![^<]*>|[^<>]*<\/): Negative lookahead to ensure we are NOT inside a tag
        // \b: Word boundary start
        // keyword: The keyword to match
        // \b: Word boundary end
        // i: Case insensitive flag
        const regex = new RegExp(`(?![^<]*>|[^<>]*<\/)\\b(${escapeRegExp(keyword)})\\b`, 'i');

        let matchFound = false;
        newContent = newContent.replace(regex, (match) => {
            if (matchFound) return match; // Already replaced one instance of this keyword
            matchFound = true;
            // Use the matched text for the link text to preserve original casing
            return `<a href="${url}" class="text-teal-600 hover:text-teal-800 underline decoration-teal-200 underline-offset-2 transition-colors duration-200" title="Learn more about ${match}">${match}</a>`;
        });

        if (matchFound) {
            placedKeywords.add(keyword);
        }
    });

    return newContent;
}

function escapeRegExp(string: string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
