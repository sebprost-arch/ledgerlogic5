import React from 'react';
import type { Metadata } from 'next';
import XeroCanadaView from '@/views/XeroCanadaView';

export const metadata: Metadata = {
    title: 'Xero Accounting Canada: The Complete 2026 Guide for SMEs',
    description: 'Everything Canadian businesses need to know about Xero — pricing, GST/HST compliance, setup, integrations, and how it compares to QuickBooks. By Sebastien Prost, CPA.',
    keywords: ['xero accounting canada', 'xero canada pricing', 'xero gst hst', 'xero vs quickbooks canada', 'best accounting software canada', 'xero shopify integration canada'],
    alternates: {
        canonical: '/xero-accounting-canada',
    },
    openGraph: {
        title: 'Xero Accounting Canada: The Complete 2026 Guide for SMEs',
        description: 'Pricing, GST/HST compliance, integrations, and expert setup advice for Canadian SMEs.',
        url: 'https://ledgerlogic.ca/xero-accounting-canada',
        type: 'article',
        locale: 'en_CA',
        siteName: 'LedgerLogic',
        images: [
            {
                url: 'https://ledgerlogic.ca/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Xero Accounting Canada Guide by LedgerLogic',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Xero Accounting Canada: The Complete 2026 Guide for SMEs',
        description: 'Pricing, GST/HST compliance, integrations, and expert setup advice for Canadian SMEs.',
    },
};

export default function XeroAccountingCanadaPage() {
    return (
        <>
            <XeroCanadaJsonLd />
            <XeroCanadaView />
        </>
    );
}

// JSON-LD Schema for SEO
function XeroCanadaJsonLd() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Xero Accounting Canada: The Complete 2026 Guide for Canadian Small Businesses',
        description: 'Everything Canadian businesses need to know about Xero — pricing, GST/HST compliance, setup, integrations, and how it compares to QuickBooks.',
        image: 'https://ledgerlogic.ca/images/og-image.png',
        datePublished: '2026-02-06',
        dateModified: '2026-02-06',
        author: {
            '@type': 'Person',
            '@id': 'https://ledgerlogic.ca/#sebastien-prost',
            name: 'Sebastien Prost',
            jobTitle: 'CPA, Founder',
            description: 'Licensed Canadian CPA with 10+ years of CRA experience',
            worksFor: {
                '@type': 'Organization',
                name: 'LedgerLogic',
                url: 'https://ledgerlogic.ca',
            },
        },
        publisher: {
            '@type': 'Organization',
            name: 'LedgerLogic',
            url: 'https://ledgerlogic.ca',
            logo: {
                '@type': 'ImageObject',
                url: 'https://ledgerlogic.ca/images/LedgerLogic/ledgerlogic_150x150.png',
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://ledgerlogic.ca/xero-accounting-canada',
        },
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Is Xero available in Canada?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Xero is fully available in Canada with Canadian-dollar pricing, CRA-compliant GST/HST and provincial sales tax reporting, direct bank feeds from all major Canadian banks, and integrations with Canadian payroll providers like Wagepoint and Rise People.',
                },
            },
            {
                '@type': 'Question',
                name: 'How much does Xero cost in Canada in 2026?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Xero offers three plans: Starter at $25 CAD/month, Standard at $55 CAD/month, and Premium at $75 CAD/month. All plans include unlimited users and Hubdoc. Standard and Premium prices are increasing from April 1, 2026.',
                },
            },
            {
                '@type': 'Question',
                name: 'Can Xero handle GST/HST filing for my Canadian business?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Xero generates GST/HST return reports in CRA-approved format. It also supports provincial tax reports for BC PST, Manitoba RST, Saskatchewan PST, and Québec QST. Tax calculations are automatic based on your configured rates.',
                },
            },
            {
                '@type': 'Question',
                name: 'Is Xero better than QuickBooks for Canadian businesses?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'It depends on your priorities. Xero offers unlimited users, a cleaner interface, and strong integration options. QuickBooks has built-in payroll and phone support. For e-commerce and tech companies, we typically recommend Xero. For businesses wanting built-in payroll and live support, QuickBooks may be the better fit.',
                },
            },
            {
                '@type': 'Question',
                name: 'Can I migrate from QuickBooks to Xero?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Xero provides built-in data conversion tools, and most CPAs can handle the migration including chart of accounts mapping and historical data transfer. LedgerLogic offers a full migration service.',
                },
            },
            {
                '@type': 'Question',
                name: 'Does Xero work with Canadian banks?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Xero supports automatic bank feeds from RBC, TD, BMO, Scotiabank, CIBC, National Bank, Desjardins, and most other Canadian financial institutions. Transactions import daily for reconciliation.',
                },
            },
            {
                '@type': 'Question',
                name: 'Does Xero integrate with Shopify?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Xero connects with Shopify through apps like A2X and Synder, which automatically post sales summaries, fees, taxes, and payouts to the correct Xero accounts — including proper GST/HST mapping.',
                },
            },
            {
                '@type': 'Question',
                name: 'Can Xero handle multi-province sales tax?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Yes. Xero's place-of-supply rules and configurable tax rates let you charge the correct GST/HST/PST/QST based on your customer's province. This is critical for e-commerce businesses shipping across Canada.",
                },
            },
        ],
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://ledgerlogic.ca',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Resources',
                item: 'https://ledgerlogic.ca/resources',
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: 'Xero Accounting Canada',
                item: 'https://ledgerlogic.ca/xero-accounting-canada',
            },
        ],
    };

    const howToSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Set Up Xero for a Canadian Business',
        description: 'Step-by-step guide to setting up Xero accounting software for Canadian small and medium businesses.',
        totalTime: 'PT2H',
        estimatedCost: {
            '@type': 'MonetaryAmount',
            currency: 'CAD',
            value: '0',
        },
        step: [
            {
                '@type': 'HowToStep',
                position: 1,
                name: 'Choose Your Plan and Set Your Region',
                text: 'Select Canada as your country and set your fiscal year end when creating your Xero organization. This loads the correct chart of accounts template, tax rates, and base currency (CAD).',
                url: 'https://ledgerlogic.ca/xero-accounting-canada#setup',
            },
            {
                '@type': 'HowToStep',
                position: 2,
                name: 'Connect Your Bank Accounts',
                text: 'Xero supports automatic bank feeds from all major Canadian banks. Transactions import daily and queue up for reconciliation. Connect every business bank account and credit card.',
                url: 'https://ledgerlogic.ca/xero-accounting-canada#setup',
            },
            {
                '@type': 'HowToStep',
                position: 3,
                name: 'Configure GST/HST and Provincial Tax Settings',
                text: 'Verify your GST/HST registration number is entered correctly. Set default tax codes for your common revenue and expense accounts. If you operate in Québec, configure QST separately.',
                url: 'https://ledgerlogic.ca/xero-accounting-canada#setup',
            },
            {
                '@type': 'HowToStep',
                position: 4,
                name: 'Customize Your Chart of Accounts',
                text: "Xero's default Canadian chart of accounts is a starting point. Customize it to match your specific revenue streams, cost categories, and expense types.",
                url: 'https://ledgerlogic.ca/xero-accounting-canada#setup',
            },
            {
                '@type': 'HowToStep',
                position: 5,
                name: 'Invite Your Team and Accountant',
                text: "Add your bookkeeper, CPA, and team members. Use Xero's role-based permissions to control access: admin, standard, invoice-only, or read-only.",
                url: 'https://ledgerlogic.ca/xero-accounting-canada#setup',
            },
            {
                '@type': 'HowToStep',
                position: 6,
                name: 'Activate Hubdoc',
                text: 'Hubdoc is included free with every Xero plan. It captures bills, receipts, and bank statements automatically and feeds them into Xero for processing.',
                url: 'https://ledgerlogic.ca/xero-accounting-canada#setup',
            },
        ],
    };

    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': 'https://ledgerlogic.ca/#sebastien-prost',
        name: 'Sebastien Prost',
        jobTitle: 'CPA, Founder',
        description: 'Licensed Canadian CPA with 10+ years of CRA experience. Sebastien has helped dozens of Canadian SMEs set up, migrate to, and optimize Xero.',
        worksFor: {
            '@type': 'Organization',
            name: 'LedgerLogic',
            url: 'https://ledgerlogic.ca',
        },
        url: 'https://ledgerlogic.ca/about',
    };

    const combinedSchema = {
        '@context': 'https://schema.org',
        '@graph': [articleSchema, faqSchema, breadcrumbSchema, howToSchema, personSchema],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
        />
    );
}
