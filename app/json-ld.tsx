export default function JsonLd() {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': 'https://ledgerlogic.ca/#organization',
        name: 'LedgerLogic',
        url: 'https://ledgerlogic.ca',
        logo: 'https://ledgerlogic.ca/images/LedgerLogic/ledgerlogic_150x150.png',
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

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
    );
}
