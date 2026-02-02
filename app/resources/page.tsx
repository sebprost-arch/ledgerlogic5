
import React from 'react';
import { Metadata } from 'next';
import ResourcesView from '../../src/views/ResourcesView';
import { RESOURCES, FAQS } from '../../src/data/resources';

export const metadata: Metadata = {
    title: 'DIY Accounting Templates & Kits for Canadians | LedgerLogic CPA',
    description: 'Buy ready-to-use bookkeeping templates, chart of accounts packs, and DIY accounting guides built for Canadian founders. Instant download via secure checkout.',
};

export default function ResourcesPage() {
    // JSON-LD Schema
    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": RESOURCES.map((resource, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Product",
                "name": resource.title,
                "description": resource.description,
                "offers": {
                    "@type": "Offer",
                    "price": resource.priceValue,
                    "priceCurrency": "CAD",
                    "availability": "https://schema.org/InStock"
                }
            }
        }))
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <ResourcesView />
        </>
    );
}
