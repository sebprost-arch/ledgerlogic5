
import React from 'react';
import { Metadata } from 'next';
import ResourcesThankYouView from '../../../src/views/ResourcesThankYouView';

export const metadata: Metadata = {
    title: 'Order Confirmed | LedgerLogic CPA',
    description: 'Thank you for your purchase. Your digital resources are on the way.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function ResourcesThankYouPage() {
    return <ResourcesThankYouView />;
}
