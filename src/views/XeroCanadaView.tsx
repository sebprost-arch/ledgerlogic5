'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import dynamic from 'next/dynamic';

// Lazy load OnboardingModal
const OnboardingModal = dynamic(() => import('../components/OnboardingModal'), {
    ssr: false,
    loading: () => null
});

export default function XeroCanadaView() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [showMobileCTA, setShowMobileCTA] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const firstCTA = document.getElementById('first-cta');
            if (firstCTA) {
                const rect = firstCTA.getBoundingClientRect();
                setShowMobileCTA(rect.bottom < 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <OnboardingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <main className="font-body text-slate-900 bg-white">
                {/* HERO SECTION */}
                <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24 lg:pt-40 lg:pb-32 text-white">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1A365D] to-[#38B2AC] opacity-90 z-0" />
                    <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay opacity-20 z-0" />

                    <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                        <div className="max-w-4xl mb-12">
                            <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-teal-200 text-sm font-semibold mb-6 border border-white/20">
                                Accounting Software Guide
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
                                Xero Accounting Canada: <span className="text-teal-300">The Complete 2026 Guide</span>
                            </h1>

                            {/* Author Block for E-E-A-T */}
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 mb-8">
                                <p className="text-sm text-slate-100 mb-1">
                                    <strong className="text-white">Written by Sebastien Prost, CPA</strong> — Founder of LedgerLogic, licensed Canadian CPA with 10+ years of CRA experience. Sebastien has helped dozens of Canadian SMEs set up, migrate to, and optimize Xero.
                                </p>
                                <p className="text-xs text-slate-300">
                                    Reviewed by: LedgerLogic CPA Team | Last fact-checked: February 2026
                                </p>
                            </div>

                            {/* Intro Paragraphs */}
                            <div className="mb-8">
                                <p className="text-lg text-slate-100 leading-relaxed mb-4">
                                    Xero accounting in Canada has become the platform of choice for thousands of small and medium-sized businesses that need real-time financial visibility without the complexity of legacy desktop software. Whether you sell on Shopify, run a SaaS startup, or manage a professional services firm, Xero gives you invoicing, bank reconciliation, GST/HST compliance, and multi-currency transactions from one cloud-based dashboard.
                                </p>
                                <p className="text-lg text-slate-100 leading-relaxed">
                                    This guide covers everything Canadian business owners need to know — from Xero pricing in Canada and CRA-compliant tax features to key integrations and an honest comparison with QuickBooks Online.
                                </p>
                            </div>

                            {/* Primary CTA */}
                            <div id="first-cta" className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="inline-flex items-center justify-center px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-lg transition-all shadow-lg shadow-teal-900/20 text-lg"
                                >
                                    Book a Free Xero Consultation →
                                </button>
                                <a
                                    href="https://referrals.xero.com/qp622xbmjhis-q1e71"
                                    target="_blank"
                                    rel="noopener noreferrer sponsored"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 text-white font-bold rounded-lg transition-all text-lg"
                                >
                                    Get 90% Off Xero →
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TABLE OF CONTENTS */}
                <section className="bg-white border-b border-slate-200 py-6 sticky top-0 z-40 shadow-sm">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <nav className="flex flex-wrap gap-3 text-sm items-center">
                            <span className="text-xs font-bold text-slate-400 uppercase mr-2 hidden md:inline">On this page:</span>
                            <a href="#what-is-xero" className="text-teal-600 hover:text-teal-700 font-medium hover:underline">What Is Xero</a>
                            <span className="text-slate-300">•</span>
                            <a href="#pricing" className="text-teal-600 hover:text-teal-700 font-medium hover:underline">Pricing</a>
                            <span className="text-slate-300">•</span>
                            <a href="#gst-hst" className="text-teal-600 hover:text-teal-700 font-medium hover:underline">GST/HST</a>
                            <span className="text-slate-300">•</span>
                            <a href="#comparison" className="text-teal-600 hover:text-teal-700 font-medium hover:underline">vs QuickBooks</a>
                            <span className="text-slate-300">•</span>
                            <a href="#setup" className="text-teal-600 hover:text-teal-700 font-medium hover:underline">Setup</a>
                            <span className="text-slate-300">•</span>
                            <a href="#integrations" className="text-teal-600 hover:text-teal-700 font-medium hover:underline">Integrations</a>
                            <span className="text-slate-300">•</span>
                            <a href="#best-for" className="text-teal-600 hover:text-teal-700 font-medium hover:underline">Best For</a>
                            <span className="text-slate-300">•</span>
                            <a href="#mistakes" className="text-teal-600 hover:text-teal-700 font-medium hover:underline">Common Mistakes</a>
                            <span className="text-slate-300">•</span>
                            <a href="#faq" className="text-teal-600 hover:text-teal-700 font-medium hover:underline">FAQ</a>
                        </nav>
                    </div>
                </section>

                <div className="container mx-auto px-4 max-w-5xl py-16">
                    {/* SECTION 1: What Is Xero */}
                    <section id="what-is-xero" className="mb-20 pt-8">
                        <span className="text-teal-600 font-bold tracking-wider text-sm uppercase mb-2 block">Platform Overview</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            What Is Xero and Why Do Canadian Businesses Use It?
                        </h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            Xero is a cloud-based accounting platform founded in New Zealand in 2006 that now serves over 3.95 million subscribers across more than 180 countries. It is purpose-built for small businesses, freelancers, and the accountants and bookkeepers who support them. Unlike traditional desktop accounting software, Xero runs entirely in your browser — you can access your books from any device, anywhere.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed mb-8">
                            For Canadian businesses, Xero stands out because it ships with pre-configured GST/HST and provincial sales tax codes (PST, QST), supports direct bank feeds from every major Canadian financial institution, and integrates with Canadian payroll providers like Wagepoint, Rise People, and Ceridian. It also includes unlimited users on every plan — a major advantage for growing teams that want their bookkeeper, CPA, and department managers all working from the same set of books.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                            Key Benefits for Canadian SMEs
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                'CRA-compliant tax filing — GST/HST return reports built into the platform',
                                'Unlimited users — No per-seat charges on any pricing tier',
                                'Canadian bank feeds — Real-time connections with RBC, TD, BMO, Scotiabank, CIBC',
                                '1,000+ integrations — Shopify, Stripe, HubSpot, A2X, Dext, and more',
                                'Multi-currency — Essential for businesses with US or international clients',
                                'Mobile app — Create invoices, reconcile transactions, capture receipts on iOS and Android',
                                'AI-powered automation — Machine learning suggests transaction categorizations',
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-xl border border-slate-200 hover:border-teal-200 hover:shadow-md transition-all">
                                    <div className="p-2 bg-teal-50 rounded-full text-teal-600 mt-0.5 shrink-0">
                                        <Check size={16} />
                                    </div>
                                    <span className="text-slate-700 font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* SECTION 2: Pricing */}
                    <section id="pricing" className="mb-20">
                        <span className="text-teal-600 font-bold tracking-wider text-sm uppercase mb-2 block">Pricing & Plans</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Xero Canada Pricing: <span className="text-teal-600">Plans and What You Get (2026)</span>
                        </h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-8">
                            Xero offers three pricing tiers for Canadian businesses. All prices are in Canadian dollars, billed monthly, and include unlimited users — something QuickBooks Online charges extra for. For the latest pricing, verify at{' '}
                            <a href="https://www.xero.com/ca/pricing-plans/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 font-semibold underline decoration-2 underline-offset-4">
                                xero.com/ca/pricing-plans
                            </a>.
                        </p>

                        {/* Pricing Table */}
                        <div className="overflow-x-auto mb-8">
                            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md border border-slate-200">
                                <thead>
                                    <tr className="bg-gradient-to-r from-slate-50 to-slate-100">
                                        <th className="text-left p-5 font-bold text-slate-900 border-b-2 border-teal-500">Feature</th>
                                        <th className="text-left p-5 font-bold text-slate-900 border-b-2 border-teal-500">Starter ($25/mo)</th>
                                        <th className="text-left p-5 font-bold text-slate-900 border-b-2 border-teal-500 bg-teal-50/50">Standard ($55/mo) ⭐</th>
                                        <th className="text-left p-5 font-bold text-slate-900 border-b-2 border-teal-500">Premium ($75/mo)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['Invoices & Quotes', '20/month', 'Unlimited', 'Unlimited'],
                                        ['Bill Entry', '5/month', 'Unlimited', 'Unlimited'],
                                        ['Bank Reconciliation', '✓', '✓', '✓'],
                                        ['GST/HST Reports', '✓', '✓', '✓'],
                                        ['Bulk Transactions', '—', '✓', '✓'],
                                        ['Projects & Expenses', '—', '✓', '✓'],
                                        ['Multi-Currency', '—', '—', '✓'],
                                        ['Analytics Plus', '—', '—', '✓'],
                                        ['Users', 'Unlimited', 'Unlimited', 'Unlimited'],
                                        ['Hubdoc (receipt capture)', 'Included', 'Included', 'Included'],
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                                            <td className="p-5 font-semibold text-slate-900">{row[0]}</td>
                                            <td className="p-5 text-slate-700">{row[1]}</td>
                                            <td className="p-5 text-slate-700 bg-teal-50/20">{row[2]}</td>
                                            <td className="p-5 text-slate-700">{row[3]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg mb-8">
                            <p className="text-sm text-amber-900">
                                <strong>Note:</strong> Standard and Premium prices are increasing from April 1, 2026. Check{' '}
                                <a href="https://www.xero.com/ca/pricing-plans/" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-950">
                                    https://www.xero.com/ca/pricing-plans/
                                </a>{' '}
                                for current rates.
                            </p>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8">
                            <p className="text-slate-700 mb-4">
                                <strong className="text-slate-900">Pro tip from our CPA team:</strong> Most Canadian SMEs land on the Standard plan. The Starter plan's 20-invoice cap makes it too restrictive for any business beyond solo freelancers. If you deal in USD or other currencies, you will need Premium.
                            </p>
                        </div>

                        {/* Affiliate CTA */}
                        <div className="bg-cyan-50 border-2 border-cyan-200 rounded-xl p-6 mb-4">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                Claim 90% Off Xero for 6 Months
                            </h3>
                            <p className="text-slate-700 mb-4">
                                LedgerLogic is a certified Xero partner. Sign up through our referral link and save 90% on your subscription for 6 months — no promo code needed.
                            </p>
                            <a
                                href="https://referrals.xero.com/qp622xbmjhis-q1e71"
                                target="_blank"
                                rel="noopener noreferrer sponsored"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-lg transition-all shadow-lg shadow-teal-900/20"
                            >
                                Get 90% Off Xero <ExternalLink size={18} />
                            </a>
                        </div>

                        <div className="bg-slate-50 border-l-4 border-slate-400 p-4 rounded-r-lg">
                            <p className="text-xs text-slate-600 italic">
                                Affiliate Disclosure: LedgerLogic is a Xero partner. We may earn a commission if you sign up through this link at no extra cost to you. We only recommend tools we use with our own clients.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: GST/HST Compliance */}
                    <section id="gst-hst" className="mb-20">
                        <span className="text-teal-600 font-bold tracking-wider text-sm uppercase mb-2 block">Tax Compliance</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Xero and Canadian Sales Tax: <span className="text-teal-600">GST/HST, PST, and QST Compliance</span>
                        </h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            One of the biggest reasons Canadian businesses choose Xero is its built-in sales tax compliance. If your business earns $30,000 or more in revenue annually, you must register for and collect GST/HST. Getting this wrong leads to CRA penalties and interest charges. Xero simplifies the entire process.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                            How Xero Handles Canadian Sales Tax
                        </h3>
                        <p className="text-slate-700 leading-relaxed mb-8">
                            Xero ships pre-configured with standard Canadian tax rates for every province and territory. The platform automatically calculates the applicable tax on each transaction — whether that is 5% GST in Alberta, 13% HST in Ontario, or the combined GST + QST of 14.975% in Québec. You can assign default tax rates to specific contacts, inventory items, and chart of accounts categories so the correct rate applies automatically.
                        </p>
                        <p className="text-slate-700 leading-relaxed mb-8">
                            At filing time, Xero generates GST/HST return reports that align directly with CRA requirements. It also produces provincial return reports for BC PST, Manitoba RST, Saskatchewan PST, and Québec QST. You select your filing period, review the individual transactions behind each line number, save drafts, and finalize returns — all without leaving Xero. <a href="/blog/how-do-i-file-a-gsthst-return-in-canada-a-step-by-step-guide" className="text-teal-600 hover:text-teal-700 underline font-medium">Learn the complete step-by-step process for filing GST/HST returns in Canada</a>.
                        </p>

                        {/* CPA Pro Tip Callout */}
                        <div className="my-8 p-6 bg-teal-50 border-l-4 border-teal-500 rounded-r-lg">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">💡</span>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">CPA Pro Tip</h4>
                                    <p className="text-slate-700">One wrong tax code default can silently corrupt an entire quarter of GST/HST filings. We audit every new client's tax code defaults before their first filing period—this single check has saved clients thousands in CRA reassessments.</p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                            Quick Reference: Canadian Sales Tax Rates by Province
                        </h3>
                        <div className="overflow-x-auto mb-8">
                            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md border border-slate-200">
                                <thead>
                                    <tr className="bg-gradient-to-r from-slate-50 to-slate-100">
                                        <th className="text-left p-5 font-bold text-slate-900 border-b-2 border-teal-500">Province/Territory</th>
                                        <th className="text-left p-5 font-bold text-slate-900 border-b-2 border-teal-500">Tax Type</th>
                                        <th className="text-left p-5 font-bold text-slate-900 border-b-2 border-teal-500">Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['Alberta, NWT, Nunavut, Yukon', 'GST only', '5%'],
                                        ['British Columbia', 'GST + PST', '5% + 7% = 12%'],
                                        ['Saskatchewan', 'GST + PST', '5% + 6% = 11%'],
                                        ['Manitoba', 'GST + RST', '5% + 7% = 12%'],
                                        ['Québec', 'GST + QST', '5% + 9.975% = 14.975%'],
                                        ['Ontario', 'HST', '13%'],
                                        ['New Brunswick', 'HST', '15%'],
                                        ['Nova Scotia', 'HST', '15%'],
                                        ['PEI', 'HST', '15%'],
                                        ['Newfoundland & Labrador', 'HST', '15%'],
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                                            <td className="p-5 text-slate-700 font-medium">{row[0]}</td>
                                            <td className="p-5 text-slate-700">{row[1]}</td>
                                            <td className="p-5 font-mono text-teal-700 font-bold">{row[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* SECTION 4: Xero vs QuickBooks */}
                    <section id="comparison" className="mb-20">
                        <span className="text-teal-600 font-bold tracking-wider text-sm uppercase mb-2 block">Platform Comparison</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            <Link href="/blog/xero-vs-quickbooks-canada" className="hover:text-teal-600 transition-colors">Xero vs. QuickBooks Online</Link> in Canada: <span className="text-teal-600">An Honest Comparison</span>
                        </h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-8">
                            This is the most common question we hear from Canadian business owners evaluating accounting software. Both are strong cloud platforms. Here is how they compare on the features that matter most to Canadian SMEs.
                        </p>

                        <div className="overflow-x-auto mb-8">
                            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md border border-slate-200">
                                <thead>
                                    <tr className="bg-gradient-to-r from-slate-50 to-slate-100">
                                        <th className="text-left p-5 font-bold text-slate-900 border-b-2 border-teal-500">Feature</th>
                                        <th className="text-left p-5 font-bold text-slate-900 border-b-2 border-teal-500 bg-teal-50/50">Xero ⭐</th>
                                        <th className="text-left p-5 font-bold text-slate-900 border-b-2 border-teal-500">QuickBooks Online</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['Starting Price (CAD)', '$25/month', '~$21/month'],
                                        ['Users Included', 'Unlimited (all plans)', '1–25 (varies by plan)'],
                                        ['GST/HST Filing', 'Built-in returns', 'Built-in returns'],
                                        ['Payroll', 'Via integrations (Wagepoint, Rise)', 'Built-in (add-on cost)'],
                                        ['Inventory', 'All plans', 'Plus plan ($55/mo) and up'],
                                        ['Multi-Currency', 'Premium plan ($75/mo)', 'Most plans'],
                                        ['App Integrations', '1,000+', '750+'],
                                        ['Fixed Asset Tracking', 'All plans', 'Advanced plan only'],
                                        ['Customer Support', 'Email and online resources', 'Phone, chat, and email'],
                                        ['Canadian Market Share', 'Growing', 'Dominant (~70%+)'],
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                                            <td className="p-5 font-semibold text-slate-900">{row[0]}</td>
                                            <td className="p-5 text-slate-700 bg-teal-50/20">{row[1]}</td>
                                            <td className="p-5 text-slate-700">{row[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-4">When Xero Wins</h3>
                        <p className="text-slate-700 leading-relaxed mb-6">
                            In our experience working with both platforms daily, Xero is the better fit for Canadian businesses that need unlimited users without per-seat fees, want a modern and intuitive interface, need strong multi-currency support for international transactions, or rely heavily on third-party integrations like A2X, Synder, or Dext. Xero also includes inventory management and fixed asset tracking on all plans — features QuickBooks locks behind higher tiers.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mb-4">When QuickBooks Wins</h3>
                        <p className="text-slate-700 leading-relaxed mb-8">
                            QuickBooks Online is the stronger choice if you need built-in Canadian payroll (Xero handles payroll through integrations), want phone-based customer support, or work with a local bookkeeper who specializes in QuickBooks. QuickBooks has the larger market share in Canada, which means more accountants are trained on it.
                        </p>

                        <p className="text-slate-700 bg-slate-50 border-l-4 border-cyan-500 p-5 rounded-r-lg">
                            <strong>Our recommendation:</strong> If you are an e-commerce seller, SaaS company, or multi-currency business, we typically recommend Xero. If you want everything in one platform including payroll and prefer calling support, consider QuickBooks. Either way, talk to our team — we work with both and will give you an honest answer.
                        </p>
                    </section>

                    {/* SECTION 5: Setup Guide */}
                    <section id="setup" className="mb-20">
                        <span className="text-teal-600 font-bold tracking-wider text-sm uppercase mb-2 block">Implementation Guide</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            How to Set Up Xero for a <span className="text-teal-600">Canadian Business</span> (Step by Step)
                        </h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-8">
                            Getting started with Xero is straightforward, but there are configuration steps that are easy to miss — and mistakes here cascade into messy books and inaccurate tax filings. Here is the process we follow with every LedgerLogic client.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    step: '1',
                                    title: 'Choose Your Plan and Set Your Region',
                                    time: '~10 minutes',
                                    content: 'Select Canada as your country and set your fiscal year end when creating your Xero organization. This loads the correct chart of accounts template, tax rates, and base currency (CAD). If you transact in USD, enable multi-currency on Premium.',
                                },
                                {
                                    step: '2',
                                    title: 'Connect Your Bank Accounts',
                                    time: '~15 minutes per account',
                                    content: 'Xero supports automatic bank feeds from all major Canadian banks. Transactions import daily and queue up for reconciliation. Connect every business bank account and credit card for a complete cash flow picture. Xero AI-powered bank reconciliation will start learning your categorization patterns after the first few days — the more consistent you are early on, the smarter its suggestions become.',
                                },
                                {
                                    step: '3',
                                    title: 'Configure GST/HST and Provincial Tax Settings',
                                    time: '~20 minutes',
                                    content: 'Verify your GST/HST registration number (Business Number) is entered correctly. Set default tax codes for your common revenue and expense accounts. If you operate in Québec, configure QST separately. LedgerLogic pro tip: We audit every new client tax code defaults — one wrong default can silently corrupt an entire quarter of GST/HST filings.',
                                },
                                {
                                    step: '4',
                                    title: 'Customize Your Chart of Accounts',
                                    time: '~30-60 minutes',
                                    content: 'Xero default Canadian chart of accounts is a starting point. Customize it to match your specific revenue streams, cost categories, and expense types. If you are migrating from QuickBooks Desktop or Sage 50, your CPA can map your existing structure to Xero. Our Xero migration service handles this end to end.',
                                },
                                {
                                    step: '5',
                                    title: 'Invite Your Team and Accountant',
                                    time: '~10 minutes',
                                    content: 'Add your bookkeeper, CPA, and team members. Use Xero role-based permissions to control access: admin, standard, invoice-only, or read-only. LedgerLogic pro tip: Never give admin access to anyone who does not need it. We have seen businesses where a well-meaning employee accidentally deleted reconciled transactions.',
                                },
                                {
                                    step: '6',
                                    title: 'Activate Hubdoc',
                                    time: '~5 minutes',
                                    content: 'Hubdoc is included free with every Xero plan. It captures bills, receipts, and bank statements automatically and feeds them into Xero for processing. Activate it on day one — it is one of the highest-ROI features most businesses ignore.',
                                },
                            ].map((item, i) => (
                                <div key={i} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold text-xl shrink-0">
                                            {item.step}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                            <p className="text-sm text-slate-500 mb-3">{item.time}</p>
                                            <p className="text-slate-700 leading-relaxed">{item.content}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Warning Callout */}
                        <div className="my-8 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">⚠️</span>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">Test Before Going Live</h4>
                                    <p className="text-slate-700">Before entering real transactions, create a test invoice and bill to ensure correct tax codes apply automatically. Fixing misclassified revenue or expenses after month-end close is tedious and error-prone.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 6: Integrations */}
                    <section id="integrations" className="mb-20">
                        <span className="text-teal-600 font-bold tracking-wider text-sm uppercase mb-2 block">Tech Stack</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Top Xero Integrations for <span className="text-teal-600">Canadian Businesses</span>
                        </h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-8">
                            Xero's app marketplace includes over 1,000 integrations. Here are the ones we set up most often for our Canadian clients.
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                                <thead>
                                    <tr className="bg-slate-100">
                                        <th className="text-left p-4 font-bold text-slate-900 border-b border-slate-200">Category</th>
                                        <th className="text-left p-4 font-bold text-slate-900 border-b border-slate-200">App</th>
                                        <th className="text-left p-4 font-bold text-slate-900 border-b border-slate-200">Why We Recommend It</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['E-commerce', 'A2X', 'Automates Shopify and Amazon sales posting with full GST/HST mapping. The gold standard for e-commerce accounting.'],
                                        ['E-commerce', 'Synder', 'Multi-channel sync (Shopify + Amazon + Etsy). Great flexibility for complex setups.'],
                                        ['Receipt Capture', <Link href="/tools/dext-canada" key="dext" className="hover:text-teal-600 hover:underline">Dext</Link>, 'Scans and categorizes receipts, bills, and invoices. Pairs beautifully with Xero bank feed.'],
                                        ['Payroll', 'Wagepoint', 'Canadian payroll with CPP, EI, and income tax deductions. Simple and reliable.'],
                                        ['Payroll', 'Rise People', 'Full HR + payroll platform for growing Canadian teams.'],
                                        ['Payments', 'Stripe', 'Accept online payments and auto-reconcile deposits with Xero.'],
                                        ['Document Storage', 'Hubdoc', 'Included free. Auto-captures financial documents and feeds them to Xero.'],
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                                            <td className="p-4 text-slate-600 font-medium">{row[0]}</td>
                                            <td className="p-4 text-slate-900 font-bold">{row[1]}</td>
                                            <td className="p-4 text-slate-700">{row[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* SECTION 7: Best For */}
                    <section id="best-for" className="mb-20">
                        <span className="text-teal-600 font-bold tracking-wider text-sm uppercase mb-2 block">Who Should Use Xero</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Who Is Xero <span className="text-teal-600">Best For</span> in Canada?
                        </h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-8">
                            Based on our work with Canadian businesses across industries, Xero is the strongest fit for these profiles:
                        </p>

                        <div className="space-y-6">
                            <div className="bg-white border-l-4 border-cyan-500 p-6 rounded-r-lg shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">E-commerce Sellers (Shopify, Amazon, WooCommerce)</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    Xero paired with A2X or <Link href="/tools/synder-review" className="text-teal-600 hover:text-teal-700 hover:underline font-medium">Synder</Link> gives you clean, reconciled books with proper GST/HST mapping — no hours of manual data entry. Multi-currency support is essential if you sell in both CAD and USD.
                                </p>
                            </div>

                            <div className="bg-white border-l-4 border-cyan-500 p-6 rounded-r-lg shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">SaaS and Tech Startups</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    Startups love Xero's modern interface, unlimited users, and native integrations with Stripe and HubSpot. Xero also supports the expense categorization structure needed for SR&ED tax credit claims — something your CPA needs to configure correctly from day one.
                                </p>
                            </div>

                            <div className="bg-white border-l-4 border-cyan-500 p-6 rounded-r-lg shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Professional Services Firms</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    Consultants, agencies, and advisory firms benefit from Xero Projects (Standard and Premium plans), which tracks time and costs against individual client engagements and projects.
                                </p>
                            </div>

                            <div className="bg-white border-l-4 border-cyan-500 p-6 rounded-r-lg shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Businesses Migrating from Desktop Software</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    If you are still on QuickBooks Desktop, Sage 50, or spreadsheets, Xero is one of the smoothest cloud migration paths. Xero provides built-in data conversion tools, and LedgerLogic's Xero migration service handles the heavy lifting — data conversion, chart of accounts mapping, bank feed setup, and team training.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 8: Common Mistakes */}
                    <section id="mistakes" className="mb-20">
                        <span className="text-teal-600 font-bold tracking-wider text-sm uppercase mb-2 block">Common Pitfalls</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            5 Common Xero Mistakes <span className="text-teal-600">Canadian Businesses Make</span> (and How to Avoid Them)
                        </h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-8">
                            Even with a user-friendly platform, we see the same errors repeatedly. Avoid these to keep your books clean and CRA-compliant.
                        </p>

                        <div className="space-y-4">
                            {[
                                {
                                    number: '1',
                                    title: 'Letting bank reconciliation pile up',
                                    content: 'Xero imports transactions daily, but they still need to be matched and categorized. Falling behind creates compounding errors. Reconcile at least weekly — daily is better.',
                                },
                                {
                                    number: '2',
                                    title: 'Using the wrong GST/HST tax code',
                                    content: 'Xero offers multiple tax codes (taxable, zero-rated, exempt, out-of-scope) and choosing the wrong one means your GST/HST return will be inaccurate. Have your CPA audit your default tax code settings before your first filing period.',
                                },
                                {
                                    number: '3',
                                    title: 'Ignoring the chart of accounts',
                                    content: "Xero's default chart is a template. If you do not customize it, your Profit & Loss and Balance Sheet reports will be generic and unhelpful. Invest 30 minutes upfront to tailor it to your business.",
                                },
                                {
                                    number: '4',
                                    title: 'Not activating Hubdoc',
                                    content: 'It is free. It is included. It automatically captures and organizes your financial documents. Yet most new Xero users do not turn it on for months. Activate it on day one.',
                                },
                                {
                                    number: '5',
                                    title: 'Over-permissioning users',
                                    content: "Unlimited users is great, but not everyone needs admin access. Use Xero's granular permissions. We have seen accidental deletions, duplicate transactions, and reconciliation reversals caused by users with too much access.",
                                },
                            ].map((mistake, i) => (
                                <div key={i} className="bg-red-50 border border-red-200 rounded-lg p-5">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold shrink-0">
                                            {mistake.number}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-slate-900 mb-2">{mistake.title}</h3>
                                            <p className="text-slate-700">{mistake.content}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* SECTION 9: FAQ */}
                    <section id="faq" className="mb-20">
                        <span className="text-teal-600 font-bold tracking-wider text-sm uppercase mb-2 block">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                            Frequently Asked Questions About <span className="text-teal-600">Xero in Canada</span>
                        </h2>

                        <div className="space-y-3">
                            {[
                                {
                                    q: 'Is Xero available in Canada?',
                                    a: 'Yes. Xero is fully available in Canada with Canadian-dollar pricing, CRA-compliant GST/HST and provincial sales tax reporting, direct bank feeds from all major Canadian banks, and integrations with Canadian payroll providers like Wagepoint and Rise People.',
                                },
                                {
                                    q: 'How much does Xero cost in Canada in 2026?',
                                    a: 'Xero offers three plans: Starter at $25 CAD/month, Standard at $55 CAD/month, and Premium at $75 CAD/month. All plans include unlimited users and Hubdoc. Standard and Premium prices are increasing from April 1, 2026.',
                                },
                                {
                                    q: 'Can Xero handle GST/HST filing for my Canadian business?',
                                    a: 'Yes. Xero generates GST/HST return reports in CRA-approved format. It also supports provincial tax reports for BC PST, Manitoba RST, Saskatchewan PST, and Québec QST. Tax calculations are automatic based on your configured rates.',
                                },
                                {
                                    q: 'Is Xero better than QuickBooks for Canadian businesses?',
                                    a: 'It depends on your priorities. Xero offers unlimited users, a cleaner interface, and strong integration options. QuickBooks has built-in payroll and phone support. For e-commerce and tech companies, we typically recommend Xero. For businesses wanting built-in payroll and live support, QuickBooks may be the better fit.',
                                },
                                {
                                    q: 'Can I migrate from QuickBooks to Xero?',
                                    a: 'Yes. Xero provides built-in data conversion tools, and most CPAs can handle the migration including chart of accounts mapping and historical data transfer. LedgerLogic offers a full migration service.',
                                },
                                {
                                    q: 'Does Xero work with Canadian banks?',
                                    a: 'Yes. Xero supports automatic bank feeds from RBC, TD, BMO, Scotiabank, CIBC, National Bank, Desjardins, and most other Canadian financial institutions. Transactions import daily for reconciliation.',
                                },
                                {
                                    q: 'Does Xero integrate with Shopify?',
                                    a: 'Yes. Xero connects with Shopify through apps like A2X and Synder, which automatically post sales summaries, fees, taxes, and payouts to the correct Xero accounts — including proper GST/HST mapping.',
                                },
                                {
                                    q: 'Can Xero handle multi-province sales tax?',
                                    a: "Yes. Xero's place-of-supply rules and configurable tax rates let you charge the correct GST/HST/PST/QST based on your customer's province. This is critical for e-commerce businesses shipping across Canada.",
                                },
                            ].map((faq, i) => (
                                <details key={i} className="group bg-slate-50 border border-slate-200 rounded-lg overflow-hidden hover:bg-slate-100 transition-colors">
                                    <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-slate-900 select-none">
                                        {faq.q}
                                        <ChevronDown className="text-cyan-600 transition-transform group-open:rotate-180" size={20} />
                                    </summary>
                                    <div className="px-5 pb-5 text-slate-700 leading-relaxed border-t border-slate-200/50 pt-4">
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>

                    {/* SECTION 10: Bottom CTA */}
                    <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl p-8 md:p-12 border border-slate-700">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Get Expert Help with Xero Accounting in Canada
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-3xl">
                            LedgerLogic is a licensed Canadian CPA firm and certified Xero partner. We specialize in cloud accounting for Canadian SMEs with deep expertise in e-commerce accounting, Xero setup and migration, GST/HST compliance, and Virtual CFO services. Whether you are new to Xero or want to optimize an existing setup, our team can help.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center justify-center px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-lg transition-all shadow-lg"
                            >
                                Book Your Free Call →
                            </button>
                            <a
                                href="https://referrals.xero.com/qp622xbmjhis-q1e71"
                                target="_blank"
                                rel="noopener noreferrer sponsored"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-all border-2 border-white/20"
                            >
                                Get 90% Off Xero <ExternalLink size={18} />
                            </a>
                        </div>

                        <p className="text-xs text-slate-400 mt-4 italic">
                            Affiliate Disclosure: We may earn a commission if you sign up through our Xero link at no extra cost to you.
                        </p>
                    </section>
                </div>

                {/* Mobile Sticky CTA */}
                {showMobileCTA && (
                    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-teal-500 shadow-2xl p-4 z-50 md:hidden">
                        <div className="flex gap-3">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="flex-1 text-center px-4 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-lg transition-all text-sm"
                            >
                                Book Free Call
                            </button>
                            <a
                                href="https://referrals.xero.com/qp622xbmjhis-q1e71"
                                target="_blank"
                                rel="noopener noreferrer sponsored"
                                className="flex-1 text-center px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-all text-sm"
                            >
                                Get 90% Off
                            </a>
                        </div>
                    </div>
                )}
            </main>
        </>
    )
}
