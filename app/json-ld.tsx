export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'AccountingService',
        name: 'LedgerLogic',
        image: 'https://ledgerlogic.ca/images/logo.png', // Fallback or update if we have a specific URL
        '@id': 'https://ledgerlogic.ca',
        url: 'https://ledgerlogic.ca',
        telephone: '(514) 123-4567', // Placeholder, needs verification if there's a number
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'CA',
            addressRegion: 'QC', // Assuming Quebec based on "Quebec Tax" focus
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 45.5017, // Montreal coordinates as a secure default for "Quebec" focus
            longitude: -73.5673,
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
            // Add other social profiles here
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
