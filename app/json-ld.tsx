export default function JsonLd() {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': 'https://ledgerlogic.ca/#organization',
        name: 'LedgerLogic',
        url: 'https://ledgerlogic.ca',
        logo: 'https://ledgerlogic.ca/images/logo.png',
        image: 'https://ledgerlogic.ca/images/og-image.png',
        description: 'Modern accounting and Virtual CFO services for Canadian growth companies. Fixed monthly pricing, automated bookkeeping, strategic tax planning.',

        // Founder information for E-A-T signals
        founder: {
            '@type': 'Person',
            name: 'Sebastien Prost',
            jobTitle: 'Founder & CEO, CPA',
            description: '10+ years of CRA experience, cloud accounting expert, dedicated to providing strategic financial support to Canadian businesses.',
        },

        // Service area
        areaServed: {
            '@type': 'Country',
            name: 'Canada',
        },

        // Services offered
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Accounting Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Process Optimization',
                        description: 'Workflow review and automation to streamline business operations from payments to bill processing.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Modern Tech Stack Implementation',
                        description: 'Implementation of best-in-class tools like Xero, Ramp, and Dext for real-time financial data.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Bookkeeping & Tax Services',
                        description: 'Monthly bookkeeping and year-round tax optimization for Canadian businesses.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Virtual CFO & Advisory',
                        description: 'Strategic budgeting, cash flow forecasting, and financial planning to fuel business growth.',
                    },
                },
            ],
        },

        address: {
            '@type': 'PostalAddress',
            addressCountry: 'CA',
            addressRegion: 'BC',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 49.2827,
            longitude: -123.1207,
        },
        priceRange: '$$$',
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '17:00',
            },
        ],
        sameAs: [
            'https://www.linkedin.com/company/ledgerlogic',
        ],
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'How does the monthly fixed price work?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We assess your transaction volume and complexity to create a flat monthly rate. You get unlimited support and no surprise bills at year-end.',
                },
            },
            {
                '@type': 'Question',
                name: 'Do I need to switch my accounting software?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We work exclusively with modern cloud tools like Xero and QBO. If you\'re on desktop tech, we\'ll handle the migration for you.',
                },
            },
            {
                '@type': 'Question',
                name: 'Is it easy to switch to LedgerLogic?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. We have a streamlined onboarding process. We contact your previous accountant to get the files, so you don\'t have to have awkward conversations.',
                },
            },
            {
                '@type': 'Question',
                name: 'Will I get a dedicated CPA?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Absolutely. You\'ll be matched with a dedicated account manager who knows your business inside out. No call centers, ever.',
                },
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}
