interface PersonSchemaProps {
    name: string;
    jobTitle?: string;
    url?: string;
}

export default function PersonSchema({ name, jobTitle, url }: PersonSchemaProps) {
    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: name,
        ...(jobTitle && { jobTitle: jobTitle }),
        ...(url && { url: url }),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
    );
}
