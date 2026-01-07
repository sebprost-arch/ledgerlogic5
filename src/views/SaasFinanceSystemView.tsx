"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, CheckCircle, ChevronDown, ChevronUp, FileText, PieChart, Rocket, Settings, Star, TrendingUp, Users, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import HeroBackground from '../components/HeroBackground';
import SaasPrequalForm from '../components/SaasPrequalForm';
import OnboardingModal from '../components/OnboardingModal';

// Reusing assets
import TalkSoonLogo from '../assets/logos/talksoon.avif';
import VaraiLogo from '../assets/logos/varailogoe.webp';
import RethinkLogo from '../assets/logos/rethink-logo-light-2.png';
import GreenGraphiteLogo from '../assets/logos/green graphite tech.png';
import SproutLogo from '../assets/logos/Sprout-.jpg';

const SaasFinanceSystemView: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const clients = [
        { name: "TalkSoon", logo: TalkSoonLogo, className: "force-black" },
        { name: "Varai", logo: VaraiLogo, className: "force-black" },
        { name: "Rethink", logo: RethinkLogo, className: "rethink-fixed" },
        { name: "Green Graphite", logo: GreenGraphiteLogo, className: "logo-xl green-graphite-fixed" },
        { name: "Sprout", logo: SproutLogo, className: "blend-mode" },
    ];

    const faqs = [
        {
            question: "Do you work with pre-revenue SaaS?",
            answer: "Yes. Getting your financial infrastructure right from day one saves massive headaches later. We have tiered plans that scale with your revenue."
        },
        {
            question: "Can you help us get fundraising/diligence ready?",
            answer: "Absolutely. That's our specialty. We ensure your MRR waterfalls, revenue recognition, and unit economics are audit-proof and ready for investor scrutiny."
        },
        {
            question: "Do you provide a board/investor reporting pack format?",
            answer: "Yes. You get a monthly reporting pack that includes your P&L, Balance Sheet, Cash Flow, plus key SaaS metrics like MRR, Churn, and Runway in a format ready to share."
        },
        {
            question: "Xero or QBO—can you help me choose?",
            answer: "We support both. We'll assess your billing stack (Stripe, Chargebee, etc.) and recommend the ledger that integrates best with your workflow."
        },
        {
            question: "How fast is month-end close?",
            answer: "We aim to close the books by the 10th-15th of the following month, giving you timely data to make decisions."
        },
        {
            question: "Do you handle GST/HST?",
            answer: "Yes, fully managed. We track collected vs. paid tax across all provinces and handle the filings so you never miss a deadline."
        },
        {
            question: "Can you clean up messy books first?",
            answer: "Yes. Most new clients start with a 'Clean-up & Standardization' project to baseline their historical data before moving to monthly management."
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
            <OnboardingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* 1. Minimal Header */}
            <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="container h-16 flex items-center justify-between">
                    <Link href="/" className="font-bold text-xl tracking-tight text-slate-900">
                        LedgerLogic
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                        <a href="#included" className="hover:text-teal-600 transition-colors">What's Included</a>
                        <a href="#how-it-works" className="hover:text-teal-600 transition-colors">How It Works</a>
                        <a href="#pricing" className="hover:text-teal-600 transition-colors">Pricing</a>
                        <a href="#faq" className="hover:text-teal-600 transition-colors">FAQ</a>
                    </nav>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="btn btn-primary btn-sm"
                    >
                        Book Fit Call
                    </button>
                </div>
            </header>

            {/* 2. Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <HeroBackground />
                <div className="container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                                Canadian SaaS Finance
                            </span>
                            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                                Investor-ready financials for Canadian SaaS — <span className="text-teal-600">every month.</span>
                            </h1>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                LedgerLogic is a Canadian cloud CPA firm built for SaaS. We run your monthly close, keep GST/HST clean, and deliver investor-ready reporting—so your numbers are accurate, consistent, and explainable.
                            </p>

                            <ul className="space-y-3 mb-8">
                                {[
                                    "Clean monthly close + reconciliations (consistent treatment)",
                                    "Investor-ready reporting pack (financials + key SaaS metrics)",
                                    "Revenue treatment you can defend (audit-friendly)",
                                    "GST/HST + year-end readiness built into the monthly rhythm"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700">
                                        <div className="mt-1 bg-teal-100 p-0.5 rounded-full text-teal-600">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col sm:flex-row gap-4 items-start">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="btn btn-primary btn-lg w-full sm:w-auto px-8"
                                >
                                    Book a 15-min Fit Call
                                </button>
                                <span className="text-sm text-slate-500 py-3 block sm:inline">
                                    Quick fit check + ballpark monthly price.
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Pre-Qual Form */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-teal-200 blur-3xl opacity-20 rounded-full -z-10 mx-auto w-3/4 h-3/4 translate-y-12"></div>
                        <SaasPrequalForm onComplete={() => setIsModalOpen(true)} />
                    </div>
                </div>
            </section>

            {/* 3. Trust Strip */}
            <section className="border-y border-slate-200 bg-white py-10">
                <div className="container">
                    <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
                        Trusted by High-Growth Canadian SaaS
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {clients.map((client, i) => (
                            <div key={i} className="w-32 h-12 relative">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Who This Is For (Pre-qual) */}
            <section className="py-20 bg-slate-50">
                <div className="container max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* For You */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-teal-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <div className="bg-teal-100 p-2 rounded-lg text-teal-600"><CheckCircle size={20} /></div>
                                This is for you if:
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Canadian incorporated SaaS (or Canada-based ops)",
                                    "Want investor-ready numbers and a predictable close cadence",
                                    "Care about reliable metrics (MRR/ARR, churn, runway)",
                                    "Use Xero or QBO (or want to migrate)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700">
                                        <Check size={18} className="text-teal-500 mt-1 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Not For You */}
                        <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <div className="bg-slate-200 p-2 rounded-lg text-slate-500"><X size={20} /></div>
                                Not a fit if:
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Want the cheapest once-a-year tax filing only",
                                    "Want to DIY the books and avoid a monthly close rhythm",
                                    "Don't care about accrual accounting or metrics"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600">
                                        <X size={18} className="text-slate-400 mt-1 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. What's Included */}
            <section id="included" className="py-24 bg-white relative overflow-hidden">
                <div className="container relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            The LedgerLogic <span className="text-teal-600">Investor-Ready</span> SaaS Finance System
                        </h2>
                        <p className="text-lg text-slate-600">
                            A monthly close + reporting system designed to keep your financials consistent, explainable, and ready for diligence.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card A */}
                        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                                <Settings size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Investor-Ready Close</h3>
                            <ul className="space-y-3 text-slate-600 text-sm">
                                <li className="flex gap-2"><Check size={16} className="text-indigo-500" /> Reconciliations + clean audit trail</li>
                                <li className="flex gap-2"><Check size={16} className="text-indigo-500" /> Accrual consistency (COGS vs OpEx)</li>
                                <li className="flex gap-2"><Check size={16} className="text-indigo-500" /> Close cadence with variance notes</li>
                                <li className="flex gap-2"><Check size={16} className="text-indigo-500" /> Deferred revenue management</li>
                            </ul>
                        </div>

                        {/* Card B */}
                        <div className="p-8 rounded-2xl bg-slate-900 text-white shadow-xl hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-32 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-teal-900 text-teal-400 rounded-xl flex items-center justify-center mb-6 border border-teal-800">
                                    <PieChart size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Investor Reporting Pack</h3>
                                <ul className="space-y-3 text-slate-300 text-sm">
                                    <li className="flex gap-2"><Check size={16} className="text-teal-400" /> Monthly financial statements</li>
                                    <li className="flex gap-2"><Check size={16} className="text-teal-400" /> KPI snapshot (MRR, Churn, Runway)</li>
                                    <li className="flex gap-2"><Check size={16} className="text-teal-400" /> Plain-English explanations (The "Why")</li>
                                    <li className="flex gap-2"><Check size={16} className="text-teal-400" /> Shareable Board update format</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card C */}
                        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Tool Stack & Ops</h3>
                            <ul className="space-y-3 text-slate-600 text-sm">
                                <li className="flex gap-2"><Check size={16} className="text-blue-500" /> Xero/QBO optimization</li>
                                <li className="flex gap-2"><Check size={16} className="text-blue-500" /> Automated billing reconnaissance</li>
                                <li className="flex gap-2"><Check size={16} className="text-blue-500" /> Expense management implementation</li>
                                <li className="flex gap-2"><Check size={16} className="text-blue-500" /> Reducing manual spreadsheet work</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Tool Stack Differentiator */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="container max-w-4xl mx-auto text-center">
                    <span className="text-teal-600 font-bold uppercase tracking-wide text-xs mb-4 block">Tech-First Implementation</span>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                        Tool Stack Implementation (Save Hours Every Month)
                    </h2>
                    <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                        We don’t just "do bookkeeping." We implement and optimize the tools that make accounting faster and cleaner—so month-end becomes a predictable system, not a fire drill.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                        {[
                            { title: "Right-size your stack", desc: "No bloat, just what you need." },
                            { title: "Automate billing flows", desc: "Stripe/Paddle to Ledger sync." },
                            { title: "Cleaner audit trail", desc: "Digital, searchable, verified." },
                            { title: "Faster closes", desc: "Because the data is already there." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-2 text-sm">{item.title}</h4>
                                <p className="text-xs text-slate-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. How It Works */}
            <section id="how-it-works" className="py-24 bg-white">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connector Line */}
                        <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-100 -z-10"></div>

                        {[
                            {
                                icon: <Users size={24} />,
                                step: "01",
                                title: "15-Min Fit Call",
                                desc: "We confirm your stack, volume, and complexity to give you a ballpark monthly price range."
                            },
                            {
                                icon: <Settings size={24} />,
                                step: "02",
                                title: "Cleanup & Setup",
                                desc: "We standardize your Chart of Accounts and clean up historical data to set a strong baseline."
                            },
                            {
                                icon: <Rocket size={24} />,
                                step: "03",
                                title: "Monthly Rhythm",
                                desc: "We take over the close. You get investor-ready reports by the 15th of every month."
                            }
                        ].map((item, i) => (
                            <div key={i} className="text-center bg-white p-6">
                                <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center text-slate-400 mb-6 border-4 border-white shadow-sm relative z-10">
                                    <span className="text-slate-900 font-bold">{item.step}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12 p-6 bg-teal-50 rounded-2xl max-w-2xl mx-auto border border-teal-100">
                        <p className="text-teal-900 font-medium text-sm">
                            <span className="font-bold mr-2">Your time commitment:</span>
                            ~10–20 minutes/month answering questions + uploading anything missing.
                        </p>
                    </div>
                </div>
            </section>

            {/* 8. Proof */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">What changes in the first 30 days?</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                            </div>
                            <p className="text-lg italic text-slate-300 mb-6">"Finally, a CPA who understands SaaS metrics. LedgerLogic handled our complex subscription revenue recognition perfectly. Total peace of mind."</p>
                            <div>
                                <p className="font-bold text-white">Sarah Jenkins</p>
                                <p className="text-sm text-slate-400">Founder, TechFlow Inc.</p>
                            </div>
                        </div>
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                            </div>
                            <p className="text-lg italic text-slate-300 mb-6">"I wasted 10 hours a month on payroll and receipts. Now it's automated. I finally know my real profit margins in real-time."</p>
                            <div>
                                <p className="font-bold text-white">David Ross</p>
                                <p className="text-sm text-slate-400">Director, AgencyOne</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Pricing Anchor */}
            <section id="pricing" className="py-24 bg-white border-b border-slate-200">
                <div className="container max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Simple Monthly Pricing</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Our plans are fixed-fee and based on your transaction volume, app stack complexity, and revenue range. No hourly billing surprises.
                    </p>
                    <div className="inline-block p-6 bg-slate-50 rounded-xl border border-slate-200 mb-8">
                        <p className="text-slate-900 font-bold mb-1">Fit Call Quote</p>
                        <p className="text-sm text-slate-500">Get a ballpark monthly price in 15 minutes.</p>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="btn btn-primary btn-lg w-full sm:w-auto"
                    >
                        Book a 15-min Fit Call
                    </button>
                </div>
            </section>

            {/* 10. FAQ */}
            <section id="faq" className="py-24 bg-slate-50">
                <div className="container max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer hover:border-teal-200 transition-colors"
                                onClick={() => toggleFaq(i)}
                            >
                                <div className="p-6 flex items-center justify-between">
                                    <h4 className="font-bold text-slate-900 text-lg pr-8">{faq.question}</h4>
                                    {openFaq === i ? <ChevronUp className="text-teal-500 shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
                                </div>
                                <motion.div
                                    initial={false}
                                    animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "FAQPage",
                                "mainEntity": faqs.map(f => ({
                                    "@type": "Question",
                                    "name": f.question,
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": f.answer
                                    }
                                }))
                            })
                        }}
                    />
                </div>
            </section>

            {/* 11. Final CTA */}
            <section className="py-24 bg-white text-center">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Ready for investor-ready numbers without hiring in-house?
                    </h2>
                    <p className="text-xl text-slate-600 mb-10">
                        Book a 15-minute fit call to confirm fit + get a ballpark monthly price.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="btn btn-primary btn-lg shadow-xl shadow-teal-500/20"
                    >
                        Book a 15-min Fit Call
                    </button>
                    <p className="mt-6 text-sm text-slate-400">No commitment. Just a quick stack analysis.</p>
                </div>
            </section>

            {/* Sticky Mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 md:hidden z-50">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn btn-primary w-full shadow-lg"
                >
                    Book a Free Fit Call
                </button>
            </div>

        </div>
    );
};

export default SaasFinanceSystemView;

