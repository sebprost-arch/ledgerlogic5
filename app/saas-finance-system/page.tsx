import React from 'react';
import type { Metadata } from 'next';
import SaasFinanceSystemView from '../../src/views/SaasFinanceSystemView';

export const metadata: Metadata = {
    title: 'Investor-Ready SaaS Accounting (Canada)',
    description: 'Investor-ready monthly close, SaaS metrics, GST/HST, and year-end tax—built as a finance system for Canadian SaaS. Book a 15-min fit call.'
};

export default function SaasFinanceSystemPage() {
    return <SaasFinanceSystemView />;
}
