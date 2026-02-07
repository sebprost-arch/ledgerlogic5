export default function LocalBusinessSchema() {
    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://ledgerlogic.ca/#localbusiness',
        name: 'LedgerLogic',
        image: 'https://ledgerlogic.ca/images/og-image.png',
        url: 'https://ledgerlogic.ca',
        telephone: '+1-XXX-XXX-XXXX', // Update with actual phone number if available
        email: 'info@ledgerlogic.ca',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '', // Virtual office/remote - leave empty
            addressLocality: 'Vancouver',
            addressRegion: 'BC',
            postalCode: '',
            addressCountry: 'CA',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 49.2827,
            longitude: -123.1207,
        },
        areaServed: {
            '@type': 'Country',
            name: 'Canada',
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
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Accounting Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Monthly Bookkeeping',
                        description: 'Automated monthly bookkeeping and financial reporting for Canadian businesses.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Virtual CFO Services',
                        description: 'Strategic financial planning, budgeting, and cash flow forecasting.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Tax Planning & Filing',
                        description: 'Year-round tax optimization and corporate tax filing for Canadian corporations.',
                    },
                },
            ],
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
    );
}
