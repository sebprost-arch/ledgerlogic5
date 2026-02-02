
import { type LucideIcon, FileText, Globe, CreditCard, PieChart, Receipt, Layers, Briefcase } from 'lucide-react';

export interface AffiliateTool {
    id: string;
    name: string;
    logo: string;
    initials: string;
    brandColor: string;
    category: string;
    bestFor: string;
    summary: string;
    affiliateUrl: string;
    learnMoreUrl?: string; // Internal guide

    // Result Card Specifics
    resultHeadline: string;
    resultBullets: string[];
    affiliateOffer: string; // Text for the button e.g. "Get 20% Off"

    // Social Proof & Credibility (Optional)
    stats?: {
        usageCount?: string; // e.g., "200+ businesses", "1,000+ users"
        rating?: number; // 1-5 star rating
        reviewCount?: number; // Number of reviews
        reviewSource?: string; // e.g., "G2", "Capterra", "Trustpilot"
    };
    industryBadges?: string[]; // e.g., ["Popular with SaaS", "Best for E-commerce"]

    // Tags for Quiz Logic
    tags: {
        stage: ('starting' | 'operating' | 'switching')[];
        entity: ('corp' | 'sole' | 'unknown')[];
        industry: ('service' | 'ecommerce' | 'both')[];
        team: ('me' | 'team')[];
        pain: ('receipts' | 'cash' | 'spend' | 'setup')[];
    };
}

export const AFFILIATE_TOOLS: AffiliateTool[] = [
    {
        id: 'ownr',
        name: 'Ownr',
        logo: 'Ownr',
        initials: 'Ow',
        brandColor: '#2C5282',
        category: 'Incorporation',
        bestFor: 'Sole Props & New Founders',
        summary: 'The easiest way to register or incorporate your business in Canada.',
        affiliateUrl: 'https://partners.ownr.co/22i4xm6tugb4',
        learnMoreUrl: '/tools/ownr-canada-review',
        resultHeadline: 'Incorporate in minutes, not weeks.',
        resultBullets: [
            'Get $300 back when opening an RBC account',
            'Automated minute book creation',
            'Cheaper than a lawyer'
        ],
        affiliateOffer: '15% off',
        stats: {
            usageCount: "500+ incorporations"
        },
        industryBadges: ["Popular with Startups", "Fast Setup"],
        tags: {
            stage: ['starting'], // Only for non-incorporated
            entity: ['sole', 'unknown'], // Not for corps (already incorporated)
            industry: ['service', 'ecommerce', 'both'],
            team: ['me', 'team'],
            pain: ['setup']
        }
    },
    {
        id: 'venn',
        name: 'Venn',
        logo: 'Venn',
        initials: 'Ve',
        brandColor: '#1A202C',
        category: 'Business Banking',
        bestFor: 'Multi-Currency Businesses',
        summary: 'Business bank account with low FX fees, multi-currency support, and easy accountant access.',
        affiliateUrl: 'https://app.venn.ca/signup?referral=+iyhnv37f8',
        learnMoreUrl: '/tools/venn-canada-review',
        resultHeadline: 'Your business bank account.',
        resultBullets: [
            'Up to $500 when spending $50,000',
            'Low FX fees + multi-currency support',
            'Easy access for your accountant'
        ],
        affiliateOffer: 'Up to $500 Bonus',
        stats: {
            usageCount: "300+ businesses"
        },
        industryBadges: ["No Personal Guarantee", "Best for Agencies"],
        tags: {
            stage: ['starting', 'operating', 'switching'],
            entity: ['corp', 'sole', 'unknown'],
            industry: ['service', 'ecommerce', 'both'],
            team: ['me', 'team'],
            pain: ['spend', 'cash']
        }
    },
    {
        id: 'float',
        name: 'Float',
        logo: 'Float',
        initials: 'Fl',
        brandColor: '#EF4444',
        category: 'Spend Management',
        bestFor: 'Scaling Teams (10-50+)',
        summary: 'Canada’s #1 spend management platform for high-growth teams.',
        affiliateUrl: 'https://get.floatcard.com/2gxqi90xp1lq',
        learnMoreUrl: '/tools/float-canada-review',
        resultHeadline: 'Control team spending at scale.',
        resultBullets: [
            'Float professional for 12 months',
            'Earn 4% yield on your cash balance',
            'Automated receipt matching via text/email'
        ],
        affiliateOffer: 'Float professional for 12 months',
        tags: {
            stage: ['operating'], // Smaller/newer businesses with teams
            entity: ['corp'],
            industry: ['service', 'ecommerce', 'both'],
            team: ['team'], // Must have a team
            pain: ['spend', 'cash']
        }
    },
    {
        id: 'ramp',
        name: 'Ramp',
        logo: 'Ramp',
        initials: 'Ra',
        brandColor: '#F59E0B',
        category: 'Global Spend',
        bestFor: 'Cross-Border & Tech',
        summary: 'The ultimate finance automation platform for USD-heavy businesses.',
        affiliateUrl: 'https://ramp.com/?rc=PJS4H3',
        learnMoreUrl: '/tools/ramp-canada-review',
        resultHeadline: 'Automate your cross-border expenses.',
        resultBullets: [
            'Spend $1,000 on Ramp, receive $500 on us',
            'Best-in-class multi-currency handling',
            'Smart insights to cut SaaS costs'
        ],
        affiliateOffer: 'Spend $1,000, receive $500',
        stats: {
            usageCount: "1,000+ companies"
        },
        industryBadges: ["Scale-Ups Favorite", "Top for Tech"],
        tags: {
            stage: ['operating', 'switching'], // More established businesses
            entity: ['corp'],
            industry: ['service', 'ecommerce', 'both'],
            team: ['team'], // Must have a team
            pain: ['spend']
        }
    },
    {
        id: 'xero',
        name: 'Xero',
        logo: 'Xero',
        initials: 'Xe',
        brandColor: '#06B6D4',
        category: 'Accounting Software',
        bestFor: 'Modern Service Businesses',
        summary: 'Beautiful accounting software that keeps your financials clean.',
        affiliateUrl: 'https://referrals.xero.com/qp622xbmjhis-q1e71',
        learnMoreUrl: '/tools/xero-canada',
        resultHeadline: 'The cleanest financial view for founders.',
        resultBullets: [
            'Get 90% off for 6 months',
            'Includes Hubdoc for free receipt capture',
            'Beautiful dashboard for cash flow'
        ],
        affiliateOffer: '90% off for 6 months',
        stats: {
            usageCount: "600+ businesses"
        },
        industryBadges: ["Receipt Hero", "Time-Saver"],
        tags: {
            stage: ['starting', 'operating'],
            entity: ['corp', 'sole'],
            industry: ['service'],
            team: ['me', 'team'],
            pain: ['setup', 'cash']
        }
    },
    {
        id: 'qbo',
        name: 'QuickBooks Online',
        logo: 'QBO',
        initials: 'QB',
        brandColor: '#10B981',
        category: 'Accounting Software',
        bestFor: 'Complex/Legacy Needs',
        summary: 'The industry standard for accounting flexibility and scale.',
        affiliateUrl: '{{AFFILIATE_QBO_URL}}',
        learnMoreUrl: '/blog/quickbooks-vs-xero-canada',
        resultHeadline: 'Scalable accounting for complex needs.',
        resultBullets: [
            'Recognized by every accountant',
            'Robust inventory and project tracking',
            'Top-rated mobile app'
        ],
        affiliateOffer: 'Get 70% Off for 3 Months',
        tags: {
            stage: ['switching'], // Logic will prefer QBO for switching/complex/ecom
            entity: ['corp', 'sole'],
            industry: ['ecommerce', 'both'],
            team: ['me', 'team'],
            pain: ['setup', 'receipts']
        }
    },
    {
        id: 'dext',
        name: 'Dext',
        logo: 'Dext',
        initials: 'Dx',
        brandColor: '#F97316',
        category: 'Receipt Management',
        bestFor: 'Heavy Paperwork',
        summary: 'Stop chasing receipts. Snap a photo and let OCR do the work.',
        affiliateUrl: 'https://join.dext.com/pbtm26786g10',
        learnMoreUrl: '/tools/dext-canada',
        resultHeadline: 'Never type data from a receipt again.',
        resultBullets: [
            'Free 14-day trial',
            '99% accuracy on receipt data extraction',
            'Fetches bills from utility portals automatically'
        ],
        affiliateOffer: 'Start Free Trial',
        tags: {
            stage: ['starting', 'operating', 'switching'],
            entity: ['corp', 'sole'],
            industry: ['service', 'ecommerce', 'both'],
            team: ['me', 'team'],
            pain: ['receipts']
        }
    },
    {
        id: 'a2x',
        name: 'A2X',
        logo: 'A2X',
        initials: 'A2',
        brandColor: '#1e3a8a', // Dark Blue
        category: 'Ecommerce Sync',
        bestFor: 'Shopify/Amazon Sellers',
        summary: 'Accurate accrual accounting for your ecommerce sales channels.',
        affiliateUrl: 'https://www.a2xaccounting.com/',
        learnMoreUrl: '/tools/shopify-accounting-apps',
        resultHeadline: 'Match your deposits to the penny.',
        resultBullets: [
            'Separates sales, fees, and taxes automatically',
            'Prevents "messy books" from daily payouts',
            'Integrates perfectly with Shopify & Amazon'
        ],
        affiliateOffer: 'Start Free Trial',
        tags: {
            stage: ['starting', 'operating', 'switching'],
            entity: ['corp', 'sole'],
            industry: ['ecommerce', 'both'],
            team: ['me', 'team'],
            pain: ['setup', 'cash']
        }
    },
    {
        id: 'synder',
        name: 'Synder',
        logo: 'Synder',
        initials: 'Sy',
        brandColor: '#7c3aed', // Violet
        category: 'Payment Sync',
        bestFor: 'High Volume Stripe/Square',
        summary: 'Synchronize payment processor data with granular detail.',
        affiliateUrl: 'https://partnerstack.synder.com/v7cwzyta7164',
        learnMoreUrl: '/tools/synder-review',
        resultHeadline: 'Sync Stripe & Square with zero errors.',
        resultBullets: [
            'Handles multi-currency transactions smoothly',
            'Detailed product mapping',
            'Great for high transaction volume'
        ],
        affiliateOffer: 'Start Free Trial',
        tags: {
            stage: ['operating', 'switching'],
            entity: ['corp', 'sole'],
            industry: ['ecommerce', 'both'], // Secondary ecom recommendation
            team: ['me', 'team'],
            pain: ['receipts']
        }
    }
];
