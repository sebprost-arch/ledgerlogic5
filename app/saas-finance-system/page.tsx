import React from 'react';
import type { Metadata } from 'next';
import SaasFinanceSystemView from '../../src/views/SaasFinanceSystemView';
import ServiceSchema from '@/components/ServiceSchema';

export const metadata: Metadata = {
    title: 'Investor-Ready SaaS Accounting (Canada)',
    description: 'Investor-ready monthly close, SaaS metrics, GST/HST, and year-end tax—built as a finance system for Canadian SaaS. Book a 15-min fit call.'
};

export default function SaasFinanceSystemPage() {
    return (
        <>
            <ServiceSchema
                serviceName="SaaS Finance System"
                description="Investor-ready SaaS accounting for Canadian software companies. Monthly financial close, SaaS metrics tracking, revenue recognition, and GST/HST compliance."
                serviceType="FinancialService"
            />
            <SaasFinanceSystemView />
        </>
    );
}
