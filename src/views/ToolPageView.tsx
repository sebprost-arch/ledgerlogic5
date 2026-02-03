"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ChevronDown, ChevronUp, ArrowRight, Star, ShieldCheck, Zap, BookOpen, CheckCircle2, AlertCircle, Trophy } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OnboardingModal from '../components/OnboardingModal'; // Assuming we have this
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export interface ToolPageProps {
    data: {
        slug: string;
        affiliateUrl: string;
        hero: {
            title: string;
            subtitle: string;
            primaryCtaText: string;
            secondaryCtaText?: string;
            verdict: {
                bestFor: string;
                notFor: string;
                ourTake: string;
            };
            tags?: string[];
            worksWith?: string[];
        };
        recommendation?: {
            title: string;
            desc: string;
            cta: string;
        };
        pricing: {
            title?: string;
            subtitle?: string;
            plans?: Array<{
                name: string;
                price: string;
                period: string;
                description: string;
                badge: string | null;
                features: string[];
            }>;
            note?: string;
            content: string;
        };
        prosCons: {
            pros: string[];
            cons: string[];
        };
        comparisonTable?: {
            headers: string[];
            rows: string[][];
        };
        implementation: {
            steps: { title: string; desc: string }[];
        };
        stackSetup?: {
            title?: string;
            subtitle?: string;
            included: string[];
            deliverables: string[];
            cta?: string;
        };
        pitfalls: string[];
        faq: { question: string; answer: string }[];
        related?: string[];
        jsonLd?: Record<string, any>;
        lastUpdated?: string;
    };
}

const ToolPageView: React.FC<ToolPageProps> = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="bg-slate-50 min-h-screen text-slate-900 font-sans">

            <OnboardingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* 1. HERO */}
            <section className="pt-32 pb-20 bg-white border-b border-slate-200">
                <div className="container max-w-5xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-4 mb-8 text-sm text-slate-500 font-medium">
                        <Link href="/" className="hover:text-teal-600">Home</Link>
                        <span>&gt;</span>
                        <Link href="/tools" className="hover:text-teal-600">Tools</Link>
                        <span>&gt;</span>
                        <span className="text-slate-900">{data.hero.title.split(':')[0]}</span>
                    </div>

                    {/* Hero Content */}
                    <div className="max-w-3xl">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {(data.hero.tags || ['Canadian CPA Firm', 'Cloud-First', 'Implementation Support']).map((tag, i) => (
                                <span key={i} className="px-3 py-1.5 bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 text-xs font-bold uppercase tracking-wide rounded-full border border-teal-200 shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                            {data.hero.title}
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                            {data.hero.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-3">
                            <a
                                href={data.affiliateUrl}
                                target="_blank"
                                rel="sponsored nofollow"
                                className="px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
                            >
                                {data.hero.primaryCtaText} <ArrowRight size={18} />
                            </a>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 hover:border-slate-400 hover:shadow-md transition-all flex items-center justify-center gap-2"
                            >
                                {data.hero.secondaryCtaText || 'Book Stack Setup'}
                            </button>
                        </div>

                        {/* Works With Badges */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Works seamlessly with:</span>
                            <div className="flex items-center gap-3">
                                {(data.hero.worksWith || ['Xero', 'QuickBooks']).map((tool, i) => (
                                    <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700">{tool}</span>
                                ))}
                            </div>
                        </div>

                        <p className="text-[10px] text-slate-400 uppercase tracking-wide mb-8 leading-relaxed">
                            Disclosure: Some links may be affiliate links. If you use them, we may earn a commission at no extra cost to you.
                        </p>
                    </div>

                    {/* Recommended Info Card - Redesigned */}
                    <div className="mt-12">
                        <div className="bg-white border-2 border-teal-200 rounded-2xl shadow-md overflow-hidden max-w-4xl">
                            {/* Header with Star Rating */}
                            <div className="bg-gradient-to-r from-teal-600 to-blue-600 px-8 py-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={18} fill="#fbbf24" className="text-yellow-400" />
                                            ))}
                                        </div>
                                        <span className="text-white font-bold text-lg">Recommended by CPAs</span>
                                    </div>
                                    <span className="px-3 py-1.5 bg-white/20 backdrop-blur text-white text-xs font-bold uppercase tracking-wider rounded-full">Top Choice</span>
                                </div>
                            </div>

                            <div className="p-8">
                                {/* Quick Verdict Section */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <Zap className="text-teal-600" size={22} />
                                        At a Glance
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                                            <p className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-2 flex items-center gap-1">
                                                <Check size={14} /> Best For
                                            </p>
                                            <p className="text-sm font-medium text-slate-900">{data.hero.verdict.bestFor}</p>
                                        </div>
                                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                                                <X size={14} /> Not Ideal For
                                            </p>
                                            <p className="text-sm font-medium text-slate-700">{data.hero.verdict.notFor}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* CPA Quote */}
                                <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-xl p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="text-teal-600" size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-2">CPA Verified Review</p>
                                            <p className="text-base text-slate-800 leading-relaxed mb-4 font-medium">
                                                "{data.hero.verdict.ourTake}"
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-bold text-slate-900">— Seb Prost, CPA</p>
                                                    <p className="text-xs text-slate-500">Founder, LedgerLogic</p>
                                                </div>
                                                <p className="text-xs text-slate-400">{data.lastUpdated || 'Feb 2026'}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PROS / CONS */}
            <section className="py-20 bg-slate-50 text-slate-900">
                <div className="container max-w-5xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* ... Pros/Cons content is unchanged mostly, just ensuring text color is clear ... */}
                        <div className="bg-gradient-to-br from-white to-green-50/30 p-8 rounded-2xl border-2 border-green-100 shadow-lg hover:shadow-xl transition-all">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <Check className="text-green-600" size={20} strokeWidth={3} />
                                </div>
                                <h3 className="text-xl font-bold text-green-700">
                                    Why We Choose It
                                </h3>
                            </div>
                            <ul className="space-y-4">
                                {data.prosCons.pros.map((pro, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-green-500 shrink-0"></div>
                                        <span className="font-medium">{pro}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-white to-red-50/30 p-8 rounded-2xl border-2 border-red-100 shadow-lg hover:shadow-xl transition-all">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                                    <X className="text-red-600" size={20} strokeWidth={3} />
                                </div>
                                <h3 className="text-xl font-bold text-red-600">
                                    What to Watch For
                                </h3>
                            </div>
                            <ul className="space-y-4">
                                {data.prosCons.cons.map((con, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-red-400 shrink-0"></div>
                                        <span className="font-medium">{con}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Comparison Table (Conditional) */}
                    {data.comparisonTable && (
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden mb-16">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
                                        <tr>
                                            {data.comparisonTable.headers.map((h, i) => (
                                                <th key={i} className={`px-6 py-4 text-left text-xs uppercase font-bold tracking-wider ${i === 1 ? 'bg-teal-600' : ''}`}>
                                                    {i === 1 ? (
                                                        <div className="flex items-center justify-center gap-2">
                                                            <Trophy size={16} />
                                                            {h}
                                                        </div>
                                                    ) : h}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {data.comparisonTable.rows.map((row, i) => (
                                            <tr key={i} className={`hover:bg-teal-50/50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                                                {row.map((cell, j) => {
                                                    // Determine if cell content is positive or negative
                                                    const isPositive = j === 1 || (j === 2 && (cell.includes('None') || cell.includes('Basic') || cell.includes('Unreliable') || cell.includes('Good') && !cell.includes('Excellent')));
                                                    const showIcon = j > 0; // Show icons for non-feature columns

                                                    return (
                                                        <td key={j} className={`px-6 py-4 ${j === 0 ? 'font-bold text-slate-900' : ''} ${j === 1 ? 'bg-teal-50/30' : ''}`}>
                                                            {showIcon ? (
                                                                <div className="flex items-center gap-2">
                                                                    {j === 1 ? (
                                                                        <>
                                                                            <CheckCircle2 className="text-teal-600 shrink-0" size={18} />
                                                                            <span className="font-bold text-slate-900">{cell}</span>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <AlertCircle className="text-orange-500 shrink-0" size={18} />
                                                                            <span className="text-slate-600">{cell}</span>
                                                                        </>
                                                                    )}
                                                                </div>
                                                            ) : cell}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* 3. PRICING NOTES */}
            <section className="py-16 bg-slate-50">
                <div className="container max-w-4xl mx-auto px-6">
                    {data.pricing.plans && data.pricing.plans.length > 0 ? (
                        // Render structured pricing cards
                        <>
                            <div className="text-center mb-10">
                                <h2 className="text-2xl font-bold text-slate-900 mb-2">{data.pricing.title || 'Pricing Overview'}</h2>
                                <p className="text-slate-600">{data.pricing.subtitle || 'Choose the plan that fits your needs'}</p>
                            </div>

                            <div className={`grid gap-6 mb-6 ${data.pricing.plans.length === 2 ? 'md:grid-cols-2 max-w-2xl mx-auto' : data.pricing.plans.length === 1 ? 'md:grid-cols-1 max-w-sm mx-auto' : 'md:grid-cols-3'
                                }`}>
                                {data.pricing.plans.map((plan, index) => (
                                    <div
                                        key={index}
                                        className={`p-6 rounded-2xl border shadow-sm hover:shadow-md transition-all ${plan.badge ? 'bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-teal-200' : 'bg-white border-slate-200'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <p className="text-sm font-bold text-teal-700 uppercase tracking-wider">{plan.name}</p>
                                            {plan.badge && (
                                                <span className="px-2 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">{plan.badge}</span>
                                            )}
                                        </div>
                                        <p className="text-3xl font-bold text-slate-900 mb-1">
                                            {plan.price}<span className="text-lg font-normal text-slate-500">{plan.period}</span>
                                        </p>
                                        <p className="text-sm text-slate-600 mb-4">{plan.description}</p>
                                        <div className="space-y-2">
                                            {plan.features.map((feature, fIndex) => (
                                                <div key={fIndex} className="flex items-center gap-2 text-sm text-slate-700">
                                                    <CheckCircle2 className="text-teal-600" size={16} />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {data.pricing.note && (
                                <div className="p-4 bg-white rounded-xl border border-slate-200 text-center">
                                    <ReactMarkdown
                                        components={{
                                            p: ({ ...props }) => <p className="text-sm text-slate-700" {...props} />,
                                            strong: ({ ...props }) => <strong className="font-bold text-teal-700" {...props} />,
                                        }}
                                    >
                                        {data.pricing.note}
                                    </ReactMarkdown>
                                </div>
                            )}
                        </>
                    ) : (
                        // Fallback to markdown content for legacy tools
                        <div className="prose prose-slate max-w-none">
                            <ReactMarkdown
                                components={{
                                    h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-slate-900 mb-6" {...props} />,
                                    h3: ({ node, ...props }) => <h3 className="text-xl font-bold text-slate-900 mb-4" {...props} />,
                                    p: ({ node, ...props }) => <p className="text-slate-700 mb-4 leading-relaxed" {...props} />,
                                    strong: ({ node, ...props }) => <strong className="font-bold text-slate-900" {...props} />,
                                    em: ({ node, ...props }) => <em className="text-slate-600 text-sm" {...props} />,
                                }}
                            >
                                {data.pricing.content}
                            </ReactMarkdown>
                        </div>
                    )}
                </div>
            </section>

            {/* 4. IMPLEMENTATION PLAYBOOK */}
            <section className="py-20 bg-slate-50">
                <div className="container max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                            The LedgerLogic Approach
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">How We Implement It</h2>
                        <p className="text-slate-500 mt-4">Our standard playbook for rolling this out correctly.</p>
                    </div>

                    <div className="space-y-6">
                        {data.implementation.steps.map((step, i) => (
                            <div key={i} className="flex gap-6 p-6 bg-white rounded-xl border border-slate-200 hover:border-teal-200 hover:shadow-md transition-all group">
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center font-bold text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                                        {i + 1}
                                    </div>
                                    {i < data.implementation.steps.length - 1 && (
                                        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-teal-300 to-transparent"></div>
                                    )}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2 text-lg">{step.title}</h4>
                                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </section>



            {/* 6. STACK SETUP SPRINT */}
            <section id="sprint" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 border-y border-slate-200">
                <div className="container max-w-4xl mx-auto px-6">
                    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
                        <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-8 text-white text-center">
                            <h2 className="text-3xl font-bold mb-3">{data.stackSetup?.title || 'Stack Setup Sprint'}</h2>
                            <p className="text-lg text-teal-50 max-w-2xl mx-auto">
                                {data.stackSetup?.subtitle || `We'll configure ${data.hero.title.split(' ')[0]} and connect your entire tech stack in one focused sprint.`}
                            </p>
                        </div>

                        <div className="p-8">
                            <div className="relative mb-8 min-h-[200px]">
                                {/* Left Column - What's Included */}
                                <div className="absolute left-[15%] w-[25%]">
                                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                                            <Check size={14} className="text-teal-600" />
                                        </div>
                                        What's Included
                                    </h4>
                                    <ul className="space-y-3 text-sm text-slate-700">
                                        {(data.stackSetup?.included || [
                                            'Full Account Configuration',
                                            'Bank & App Integrations',
                                            'Opening Balances Import'
                                        ]).map((item, i) => (
                                            <li key={i} className="flex gap-2 items-start"><Check size={16} className="text-teal-600 shrink-0 mt-0.5" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right Column - Deliverables */}
                                <div className="absolute right-[15%] w-[25%]">
                                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                                            <Star size={14} className="text-blue-600" />
                                        </div>
                                        Deliverables
                                    </h4>
                                    <ul className="space-y-3 text-sm text-slate-700">
                                        {(data.stackSetup?.deliverables || [
                                            'QA & Test Transaction',
                                            'SOP Checklist for Team',
                                            '1-Hour Handover Call'
                                        ]).map((item, i) => (
                                            <li key={i} className="flex gap-2 items-start"><Check size={16} className="text-teal-600 shrink-0 mt-0.5" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="text-center">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg"
                                >
                                    {data.stackSetup?.cta || 'Book Setup Sprint'}
                                </button>
                                <p className="text-xs text-slate-500 mt-4">Typical completion: 3-5 business days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FAQ */}
            <section className="py-20 bg-white">
                <div className="container max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {data.faq.map((f, i) => (
                            <div
                                key={i}
                                className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-teal-300 hover:shadow-sm transition-all cursor-pointer"
                                onClick={() => toggleFaq(i)}
                            >
                                <div className="p-5 flex items-center justify-between">
                                    <h4 className="font-bold text-slate-900 pr-8 text-sm">{f.question}</h4>
                                    {openFaq === i ? <ChevronUp className="text-teal-600 shrink-0" size={20} /> : <ChevronDown className="text-slate-400 shrink-0" size={20} />}
                                </div>
                                {openFaq === i && (
                                    <div className="px-5 pb-5 text-slate-700 leading-relaxed text-sm border-t border-slate-100 pt-4 bg-slate-50">
                                        {f.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AUTOMATED SCHEMA INJECTION */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        // 1. FAQ Schema
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": data.faq.map(f => ({
                                "@type": "Question",
                                "name": f.question,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": f.answer
                                }
                            }))
                        },
                        // 2. Breadcrumb Schema
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://ledgerlogic.ca"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Tools",
                                    "item": "https://ledgerlogic.ca/tools"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": data.hero.title,
                                    "item": `https://ledgerlogic.ca/tools/${data.slug}`
                                }
                            ]
                        },
                        // 3. Custom Product/Review Schema (Passed from Page)
                        ...(data.jsonLd ? [data.jsonLd] : [])
                    ])
                }}
            />

            {/* Explore More Tools CTA */}
            <section className="py-16 bg-slate-50">
                <div className="container max-w-3xl mx-auto px-6 text-center">
                    <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Looking for More Accounting Tools?</h3>
                        <p className="text-slate-600 mb-6">Explore our complete guide to the best accounting software and tools for Canadian businesses.</p>
                        <Link
                            href="/tools"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg"
                        >
                            Browse All Tools <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Sticky Mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 md:hidden z-50">
                <a
                    href={data.affiliateUrl}
                    target="_blank"
                    rel="sponsored nofollow"
                    className="flex w-full bg-teal-600 text-white font-bold py-3.5 rounded-lg justify-center items-center gap-2 shadow-lg tracking-wide hover:bg-teal-700 active:scale-[0.98] transition-all"
                >
                    {data.hero.primaryCtaText} <ArrowRight size={16} />
                </a>
            </div>


        </div>
    );
};

export default ToolPageView;
