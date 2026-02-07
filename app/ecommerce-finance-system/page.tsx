import React from 'react';
import type { Metadata } from 'next';
import EcommerceFinanceSystemView from '@/views/EcommerceFinanceSystemView';
import ServiceSchema from '@/components/ServiceSchema';

export const metadata: Metadata = {
    title: 'E-commerce Accounting for Canadian Shopify & Amazon Sellers | LedgerLogic',
    description: 'Accurate e-commerce bookkeeping + tax for Canadian brands. Clean payout reconciliation, inventory/COGS clarity, GST/HST handled, and monthly reporting you can trust. Book a 15-min fit call.'
};

export default function EcommerceFinanceSystemPage() {
    return (
        <>
            <ServiceSchema
                serviceName="E-commerce Finance System"
                description="Specialized accounting and bookkeeping for Canadian e-commerce businesses on Shopify and Amazon. Automated payout reconciliation, accurate COGS tracking, and GST/HST filing."
                serviceType="FinancialService"
            />
            <EcommerceFinanceSystemView />
        </>
    );
}
