interface ServiceSchemaProps {
    serviceName: string;
    description: string;
    serviceType?: string;
    areaServed?: string;
    offers?: {
        name: string;
        price?: string;
        priceCurrency?: string;
        description?: string;
    }[];
}

export default function ServiceSchema({
    serviceName,
    description,
    serviceType = 'FinancialService',
    areaServed = 'Canada',
    offers = [],
}: ServiceSchemaProps) {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceName,
        description: description,
        serviceType: serviceType,
        provider: {
            '@type': 'Organization',
            name: 'LedgerLogic',
            url: 'https://ledgerlogic.ca',
        },
        areaServed: {
            '@type': 'Country',
            name: areaServed,
        },
        ...(offers.length > 0 && {
            offers: offers.map((offer) => ({
                '@type': 'Offer',
                name: offer.name,
                description: offer.description,
                ...(offer.price && {
                    price: offer.price,
                    priceCurrency: offer.priceCurrency || 'CAD',
                }),
            })),
        }),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
    );
}
