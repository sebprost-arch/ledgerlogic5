import React from 'react';
import type { Metadata } from 'next';
import EcommerceFinanceSystemView from '@/views/EcommerceFinanceSystemView';

export const metadata: Metadata = {
    title: 'E-commerce Accounting for Canadian Shopify & Amazon Sellers | LedgerLogic',
    description: 'Accurate e-commerce bookkeeping + tax for Canadian brands. Clean payout reconciliation, inventory/COGS clarity, GST/HST handled, and monthly reporting you can trust. Book a 15-min fit call.'
};

export default function EcommerceFinanceSystemPage() {
    return <EcommerceFinanceSystemView />;
}
