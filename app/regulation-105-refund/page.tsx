import React from 'react';
import type { Metadata } from 'next';
import Regulation105Form from '../../src/components/Regulation105Form';
import StickyCTA from '../../src/components/StickyCTA';
import { Check, Shield, FileText, ArrowRight, Globe, Lock, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Regulation 105 Refund for Non-Residents | Recover 15% Withholding - LedgerLogic',
    description: 'Canadian client withheld 15%? We help US and international companies recover Regulation 105 withholding taxes via Treaty-based refund filings. Check eligibility.',
    keywords: ['Regulation 105 refund', 'Canada non-resident withholding tax', 'Regulation 105 waiver application', 'recover 15% withholding Canada', 'T2 corporate return non-resident'],
};

export default function Regulation105Page() {
    return (
        <main className="font-body text-slate-900">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24 lg:pt-40 lg:pb-32 text-white">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A365D] to-[#38B2AC] opacity-90 z-0" />
                <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay opacity-20 z-0" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-teal-200 text-sm font-semibold mb-6 border border-white/20">
                            Non-Resident Tax Services
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
                            Regulation 105 Withholding Refund — <span className="text-teal-300">Recover Your 15%</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto mb-8 leading-relaxed">
                            Canadian clients are often required to withhold 15% on payments to non-residents for services in Canada. In most cases, this is not a final tax—it’s a prepayment we can help you recover.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-medium text-teal-100 mb-10">
                            <span className="flex items-center gap-2"><Shield size={16} /> CPA-led</span>
                            <span className="hidden md:inline">•</span>
                            <span className="flex items-center gap-2"><Check size={16} /> Fixed-fee options</span>
                            <span className="hidden md:inline">•</span>
                            <span className="flex items-center gap-2"><Lock size={16} /> Secure upload</span>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 md:p-6 max-w-3xl mx-auto">
                            <div className="flex flex-wrap items-center justify-between gap-4 text-left">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-white font-semibold">
                                        <Check className="text-teal-300" size={18} /> 15% withheld?
                                    </div>
                                    <div className="flex items-center gap-2 text-white font-semibold">
                                        <Check className="text-teal-300" size={18} /> Services in Canada?
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-white font-semibold">
                                        <Check className="text-teal-300" size={18} /> Non-resident?
                                    </div>
                                </div>
                                <div className="w-full md:w-auto">
                                    <a href="#eligibility" className="block w-full text-center bg-teal-500 hover:bg-teal-400 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg shadow-teal-900/20">
                                        Check Eligibility
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRE-QUALIFICATION SECTION */}
            <section id="eligibility" className="relative py-20 bg-slate-50 -mt-20">
                <div className="container mx-auto px-4 relative z-20">
                    <div className="max-w-3xl mx-auto">
                        <Regulation105Form />
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS / TIMELINE */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-teal-600 font-bold tracking-wider text-sm uppercase mb-2 block">Our Process</span>
                        <h2 className="text-3xl font-bold font-heading text-slate-900 mb-4">How the Refund Process Works</h2>
                        <p className="text-slate-600 text-lg">Strict deadlines apply. We guide you through every step of the CRA filing process.</p>
                    </div>

                    <div className="max-w-5xl mx-auto relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 z-0" />

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                            {[
                                { title: "Eligibility Check", icon: <Check size={20} />, text: "Free instant assessment." },
                                { title: "Secure Upload", icon: <Lock size={20} />, text: "Encrypted portal transfer." },
                                { title: "Analysis", icon: <FileText size={20} />, text: "Detailed treaty review." },
                                { title: "Filing", icon: <Globe size={20} />, text: "T2 & Schedule 91 submission." },
                                { title: "Refund", icon: <CreditCardIcon />, text: "Refund issued by CRA." }
                            ].map((step, i) => (
                                <div key={i} className="group flex flex-col items-center text-center relative">
                                    <div className="w-24 h-24 rounded-2xl bg-white border-2 border-slate-100 group-hover:border-teal-500 flex items-center justify-center mb-6 shadow-lg shadow-slate-200/50 relative transition-all duration-300 group-hover:-translate-y-2 z-10">
                                        <div className="absolute inset-0 bg-teal-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="text-slate-400 group-hover:text-teal-600 transition-colors relative z-10">
                                            {step.icon}
                                        </div>
                                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-xs font-bold text-slate-400 group-hover:text-white group-hover:bg-teal-500 group-hover:border-teal-500 transition-all z-20">
                                            {i + 1}
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
                                    <p className="text-sm text-slate-500">{step.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>




            {/* WHAT WE NEED / CHECKLIST */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-center max-w-5xl mx-auto">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">Documents Required for Tax Recovery</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                To file your T2 return and Schedules 91/97, we simply need the core documents proving your income and non-resident status.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Withholding proof (NR4, T4A-NR, or Payer Letter)",
                                    "Contract or Statement of Work",
                                    "Invoices related to the Canadian work",
                                    "Travel dates (flight tickets or calendar log)",
                                    "CRA Business Number (if you have one)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                                            <Check size={14} />
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8">
                                <Link href="#eligibility" className="inline-flex items-center gap-2 text-teal-700 font-bold hover:text-teal-800 underline decoration-2 underline-offset-4">
                                    Check eligibility first <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
                                <div className="flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-600 rounded-full mb-6">
                                    <Lock size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Bank-Grade Security</h3>
                                <p className="text-slate-600 mb-6">
                                    We use encrypted client portals for all document transfers. Your financial data never sits in an unsecured email inbox.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm text-slate-500">
                                        <Check size={16} className="text-green-500" />
                                        SOC-2 Compliant Tools
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-500">
                                        <Check size={16} className="text-green-500" />
                                        Encrypted Storage
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-500">
                                        <Check size={16} className="text-green-500" />
                                        Confidentiality Assured
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* UPSHELL / PREVENTION */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold font-heading mb-4">Regulation 105 Waiver Application</h2>
                    <p className="text-slate-300 max-w-2xl mx-auto mb-8">
                        Want to stop the 15% deduction before it happens? Eligible non-residents can apply for a Regulation 105 Waiver <strong>before</strong> work begins.
                    </p>
                    <h2 className="text-3xl font-bold font-heading mb-4 hidden">Need Compliance Help?</h2>
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-teal-900/50">
                        Request a Waiver Review
                    </Link>
                </div>
            </section>

            {/* TECHNICAL DEEP DIVE (SEO: "Reg 102 vs 105", "Article VII") */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Technical Specifications & Common Pitfalls</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="bg-slate-100 p-2 rounded-lg text-slate-500 font-mono text-sm">VS</span>
                                Reg 105 vs. Reg 102
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Many businesses confuse the two. <strong>Regulation 105</strong> applies to fees paid to a non-resident for <em>services</em> rendered in Canada.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                <strong>Regulation 102</strong> applies to <em>salaries/wages</em> paid to non-resident employees working in Canada. Each requires a different waiver (R105 vs R102) and a different T2 vs T4 filing process.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <Globe size={20} className="text-teal-500" />
                                Treaty Returns & Article VII
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Most refunds are claimed under <strong>Article VII (Business Profits)</strong> of the Canada-US Tax Treaty (or similar international treaties).
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                The argument is simple: without a "Permanent Establishment" (fixed place of business) in Canada, the profits are taxable only in your home country, meaning the 15% withheld in Canada must be returned.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-teal-600 font-bold tracking-wider text-sm uppercase">Common Questions</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Regulation 105 FAQ</h2>
                    </div>

                    <div className="space-y-4">
                        <FAQItem
                            question="What is Regulation 105 withholding?"
                            answer="Regulation 105 of the Canadian Income Tax Act requires payers to withhold 15% of gross payments made to non-residents for services rendered in Canada. This is a tax prepayment, not necessarily the final tax liability."
                        />
                        <FAQItem
                            question="Why did my Canadian client withhold 15% from my invoice?"
                            answer="They are legally required to do so by the CRA if you are a non-resident performing services in Canada. If they fail to withhold, they can be held personally liable for the tax plus penalties."
                        />
                        <FAQItem
                            question="Is the 15% a final tax or a refund?"
                            answer="It is a prepayment on potential Canadian tax liability. If your final tax liability is lower than the withheld amount (which it often is for treaty-protected non-residents), you can claim a refund for the difference by filing a Canadian tax return."
                        />
                        <FAQItem
                            question="Can I get a refund if I have no permanent establishment (PE) in Canada?"
                            answer="Yes. In fact, not having a PE is often the basis for claiming a full refund under a tax treaty. You generally still need to file a T2 return (Treaty-Based Regulation 105 Refund) to prove this status and request the funds back."
                        />
                        <FAQItem
                            question="What are Schedule 91 and Schedule 97?"
                            answer="Schedule 91 outlines the 'Information Concerning Claims for Treaty-Based Exemptions,' and Schedule 97 lists 'Additional Information on Non-Resident Corporations in Canada.' These are key forms filed with your T2 return to claim treaty benefits."
                        />
                        <FAQItem
                            question="What if services were performed in Québec?"
                            answer="Québec has its own additional withholding requirement of 9% for services rendered in the province by non-residents. This is administered by Revenu Québec and requires a separate filing process to recover."
                        />
                        <FAQItem
                            question="What documents do I need to start?"
                            answer="At a minimum, you'll need proof of the withholding (NR4 slip or letter from payer), your invoices, and details of the service dates/locations. If you don't have an NR4 yet, we can sometimes proceed with alternative proof."
                        />
                    </div>
                </div>
            </section>



            <Schema />
            <StickyCTA />
        </main >
    );
}

// Simple Helper for Icon
function CreditCardIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
    )
}

// FAQ Component
function FAQItem({ question, answer }: { question: string, answer: string }) {
    return (
        <details className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden transition-all hover:bg-slate-100">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-slate-800 select-none">
                {question}
                <span className="transition-transform group-open:rotate-180 text-teal-600">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                </span>
            </summary>
            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-200/50 pt-4">
                {answer}
            </div>
        </details>
    );
}

// Add Schema Script
function Schema() {
    const minSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": "Regulation 105 Withholding Refund",
                "provider": {
                    "@type": "AccountingService",
                    "name": "LedgerLogic CPA",
                    "url": "https://ledgerlogic.ca"
                },
                "description": "Tax recovery service for non-residents who had 15% withholding tax deducted from payments for services rendered in Canada.",
                "areaServed": "Canada",
                "image": "https://ledgerlogic.ca/images/hero-bg.jpg",
                "offers": [
                    {
                        "@type": "Offer",
                        "name": "Triage Review",
                        "price": "500.00",
                        "priceCurrency": "CAD"
                    },
                    {
                        "@type": "Offer",
                        "name": "Standard Filing",
                        "price": "1500.00",
                        "priceCurrency": "CAD"
                    },
                    {
                        "@type": "Offer",
                        "name": "Priority + Rep",
                        "price": "3000.00",
                        "priceCurrency": "CAD"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://ledgerlogic.ca/regulation-105-refund/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is Regulation 105 withholding?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Regulation 105 of the Canadian Income Tax Act requires payers to withhold 15% of gross payments made to non-residents for services rendered in Canada."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why did my Canadian client withhold 15% from my invoice?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "They are legally required to do so by the CRA if you are a non-resident performing services in Canada."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is the 15% a final tax or a refund?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It is a prepayment on potential Canadian tax liability. You can claim a refund for the difference by filing a Canadian tax return."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I get a refund if I have no permanent establishment (PE) in Canada?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Not having a PE is often the basis for claiming a full refund under a tax treaty."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does a Regulation 105 refund take?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Processing times vary, but typically range from 6 to 10 months from the date of filing your T2 return."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the difference between Regulation 105 and 102?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Regulation 105 applies to fees for services (independent contractors), while Regulation 102 applies to salaries and wages (employees). Both have 15% withholding requirements but use different forms."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(minSchema) }}
        />
    );
}
