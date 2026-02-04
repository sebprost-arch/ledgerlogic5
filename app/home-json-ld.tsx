export default function HomeJsonLd() {
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
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
    );
}
