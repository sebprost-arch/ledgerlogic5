"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ChevronDown, ChevronUp, ArrowRight, Star, ShieldCheck, Zap, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OnboardingModal from '../components/OnboardingModal'; // Assuming we have this
import Link from 'next/link';

export interface ToolPageProps {
    data: {
        slug: string;
        affiliateUrl: string;
        hero: {
            title: string;
            subtitle: string;
            primaryCtaText: string;
            verdict: {
                bestFor: string;
                notFor: string;
                ourTake: string;
            };
        };
        recommendation?: {
            title: string;
            desc: string;
            cta: string;
        };
        pricing: {
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
        pitfalls: string[];
        faq: { question: string; answer: string }[];
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
            <Navbar />
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

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {['Canadian CPA Firm', 'Cloud-First', 'Implementation Support'].map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-wide rounded-full border border-teal-100">
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
                                    className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
                                >
                                    {data.hero.primaryCtaText} <ArrowRight size={18} />
                                </a>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                                >
                                    Book Stack Setup
                                </button>
                            </div>
                            <p className="text-[10px] text-slate-400 uppercase tracking-wide mb-8 leading-relaxed">
                                Disclosure: Some links may be affiliate links. If you use them, we may earn a commission at no extra cost to you.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            {/* Recommendation Callout */}
                            {data.recommendation && (
                                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-blue-100 p-6 rounded-2xl relative overflow-hidden">
                                    <div className="flex items-start gap-4 relative z-10">
                                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0 shadow-lg">
                                            <Star size={20} fill="currentColor" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{data.recommendation.title}</h4>
                                            <p className="text-sm text-slate-600 mb-3 leading-relaxed">{data.recommendation.desc}</p>
                                            <a
                                                href={data.affiliateUrl}
                                                target="_blank"
                                                rel="sponsored nofollow"
                                                className="text-xs font-bold text-blue-700 hover:text-blue-800 uppercase tracking-wider flex items-center gap-1"
                                            >
                                                {data.recommendation.cta} <ArrowRight size={12} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Quick Verdict Card */}
                            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-20 bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                    <Zap className="text-yellow-400 fill-yellow-400" size={20} />
                                    CPA Quick Verdict
                                </h3>

                                <div className="space-y-6 relative z-10">
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Best For</p>
                                        <p className="font-medium text-teal-200">{data.hero.verdict.bestFor}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Not Ideal For</p>
                                        <p className="font-medium text-red-200">{data.hero.verdict.notFor}</p>
                                    </div>
                                    <div className="pt-4 border-t border-slate-700">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Our Take</p>
                                        <p className="text-sm leading-relaxed text-slate-300 italic">"{data.hero.verdict.ourTake}"</p>
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
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold text-green-700 mb-6 flex items-center gap-2">
                                <Check size={24} strokeWidth={3} />
                                Why We Choose It
                            </h3>
                            <ul className="space-y-4">
                                {data.prosCons.pros.map((pro, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></div>
                                        <span>{pro}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold text-red-600 mb-6 flex items-center gap-2">
                                <X size={24} strokeWidth={3} />
                                What to Watch For
                            </h3>
                            <ul className="space-y-4">
                                {data.prosCons.cons.map((con, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0"></div>
                                        <span>{con}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Comparison Table (Conditional) */}
                    {data.comparisonTable && (
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-16">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm text-slate-600">
                                    <thead className="bg-slate-50 text-xs uppercase font-bold text-slate-500">
                                        <tr>
                                            {data.comparisonTable.headers.map((h, i) => (
                                                <th key={i} className="px-6 py-4">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {data.comparisonTable.rows.map((row, i) => (
                                            <tr key={i} className="hover:bg-slate-50/50">
                                                {row.map((cell, j) => (
                                                    <td key={j} className={`px-6 py-4 ${j === 0 ? 'font-bold text-slate-900' : ''}`}>
                                                        {cell}
                                                    </td>
                                                ))}
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
            <section className="py-16 bg-white border-y border-slate-100">
                <div className="container max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Pricing Considerations</h2>
                    <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100 text-left">
                        <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                            {data.pricing.content}
                        </p>
                    </div>
                    <p className="mt-4 text-xs text-slate-400 uppercase tracking-widest">
                        Check official pricing pages for latest updates.
                    </p>
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
                            <div key={i} className="flex gap-6 p-6 bg-white rounded-xl border border-slate-200 hover:border-indigo-200 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 shrink-0 border border-slate-200">
                                    {i + 1}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. COMMON PITFALLS */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                        <ShieldCheck className="text-orange-500" />
                        Common Canadian Pitfalls
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {data.pitfalls.map((pitfall, i) => (
                            <div key={i} className="p-4 rounded-lg bg-orange-50 border border-orange-100 text-orange-900 font-medium text-sm flex gap-3">
                                <span className="font-bold text-orange-400">{i + 1}.</span>
                                {pitfall}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. STACK SETUP SPRINT */}
            <section id="sprint" className="py-20 bg-teal-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Stack Setup Sprint</h2>
                    <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
                        Don't guess. We'll configure {data.hero.title.split(' ')[0]} and connect your entire tech stack correctly in one focused sprint.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto mb-10 bg-white/5 p-6 rounded-2xl border border-white/10">
                        <div>
                            <h4 className="font-bold text-teal-400 mb-4 uppercase text-xs tracking-wider">What's Included</h4>
                            <ul className="space-y-3 text-sm text-slate-200">
                                <li className="flex gap-2"><Check size={16} className="text-teal-400" /> Full Account Configuration</li>
                                <li className="flex gap-2"><Check size={16} className="text-teal-400" /> Bank & App Integrations</li>
                                <li className="flex gap-2"><Check size={16} className="text-teal-400" /> Opening Balances Import</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-teal-400 mb-4 uppercase text-xs tracking-wider">Deliverables</h4>
                            <ul className="space-y-3 text-sm text-slate-200">
                                <li className="flex gap-2"><Check size={16} className="text-teal-400" /> QA & Test Transaction</li>
                                <li className="flex gap-2"><Check size={16} className="text-teal-400" /> SOP Checklist for Team</li>
                                <li className="flex gap-2"><Check size={16} className="text-teal-400" /> 1-Hour Handover Call</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 py-4 bg-white text-teal-900 font-bold rounded-xl hover:bg-teal-50 transition-colors"
                        >
                            Book the Sprint
                        </button>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 py-4 bg-transparent border border-teal-700 text-white font-bold rounded-xl hover:bg-teal-800 transition-colors"
                        >
                            Book Setup Call
                        </button>
                    </div>
                </div>
            </section>

            {/* 7. FAQ */}
            <section className="py-20 bg-white">
                <div className="container max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {data.faq.map((f, i) => (
                            <div
                                key={i}
                                className="border border-slate-200 rounded-xl overflow-hidden hover:border-teal-200 transition-colors cursor-pointer bg-slate-50/50"
                                onClick={() => toggleFaq(i)}
                            >
                                <div className="p-6 flex items-center justify-between">
                                    <h4 className="font-bold text-slate-900 pr-8">{f.question}</h4>
                                    {openFaq === i ? <ChevronUp className="text-teal-500 shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
                                </div>
                                {openFaq === i && (
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-white">
                                        {f.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
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
                            })
                        }}
                    />
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

            <Footer />
        </div>
    );
};

export default ToolPageView;
