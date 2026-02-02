
"use client";

import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AFFILIATE_TOOLS, AffiliateTool } from '../data/affiliateTools';
import { CheckCircle2, ChevronRight, ArrowRight, RefreshCw, Zap, ShieldCheck, Calendar, Users, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ToolLogo } from '../components/ToolLogos';
import OnboardingModal from '../components/OnboardingModal';
import { buildAffiliateUrl, trackAffiliateClick } from '../utils/tracking';

// --- QUIZ DATA ---
type QuestionId = 'stage' | 'entity' | 'industry' | 'team' | 'pain';

interface Question {
    id: QuestionId;
    text: string;
    options: { value: string; label: string; icon?: string }[];
}

const QUESTIONS: Question[] = [
    {
        id: 'stage',
        text: "What stage is your business currently in?",
        options: [
            { value: 'starting', label: "Just starting out / Pre-revenue" },
            { value: 'operating', label: "Operating & Growing" },
            { value: 'switching', label: "Switching tools / Cleanup mode" }
        ]
    },
    {
        id: 'entity',
        text: "Are you incorporated?",
        options: [
            { value: 'corp', label: "Yes, I have a Corporation" },
            { value: 'sole', label: "No, strictly Sole Proprietorship" },
            { value: 'unknown', label: "Not sure / In progress" }
        ]
    },
    {
        id: 'industry',
        text: "What does your business primarily sell?",
        options: [
            { value: 'service', label: "Services (Agency, Consulting, Trades)" },
            { value: 'ecommerce', label: "Products (Shopify, Amazon, Retail)" },
            { value: 'both', label: "Both / Hybrid" }
        ]
    },
    {
        id: 'team',
        text: "Who does the spending?",
        options: [
            { value: 'me', label: "Just me (Founder)" },
            { value: 'team', label: "I have a team with cards/expenses" }
        ]
    },
    {
        id: 'pain',
        text: "What is your biggest financial headache right now?",
        options: [
            { value: 'receipts', label: "Messy receipts & paperwork" },
            { value: 'cash', label: "Cash flow visibility" },
            { value: 'spend', label: "Controlling team spending" },
            { value: 'setup', label: "Just getting set up correctly" }
        ]
    }
];

// --- LOGIC ENGINE ---
function calculateStack(answers: Record<string, string>): AffiliateTool[] {
    const stack: AffiliateTool[] = [];
    const tools = AFFILIATE_TOOLS;

    // 1. Incorporation (Ownr) - ONLY for non-incorporated
    // Only recommend if they answered "No" or "Unknown" to incorporation question
    if (answers.entity === 'sole' || answers.entity === 'unknown') {
        const ownr = tools.find(t => t.id === 'ownr');
        if (ownr) stack.push(ownr);
    }

    // 2. Banking (Venn) - Always include as the business bank account
    const venn = tools.find(t => t.id === 'venn');
    if (venn) stack.push(venn);

    // 3. Team Spend Management (Float OR Ramp, never both)
    // Float: for newer/smaller businesses with teams
    // Ramp: for more established businesses
    if (answers.team === 'team' || answers.pain === 'spend') {
        const isEstablished = answers.stage === 'switching' || answers.stage === 'operating';

        if (isEstablished) {
            // Recommend Ramp for more established businesses
            const ramp = tools.find(t => t.id === 'ramp');
            if (ramp) stack.push(ramp);
        } else {
            // Recommend Float for newer/smaller businesses with teams
            const float = tools.find(t => t.id === 'float');
            if (float) stack.push(float);
        }
    }

    // 4. Cash Flow Management (Float) - only if not already added via spend management
    // Only add if they specifically said cash flow is a pain AND they don't have a team (otherwise Ramp/Float already covered)
    if (answers.pain === 'cash' && answers.team !== 'team') {
        const float = tools.find(t => t.id === 'float');
        if (float && !stack.find(t => t.id === 'float')) {
            stack.push(float);
        }
    }

    // 5. Accounting Software - Strongly favor Xero
    // Only recommend QBO for very specific cases (ecommerce switching from another system)
    const needsQBO =
        answers.stage === 'switching' &&
        (answers.industry === 'ecommerce' || answers.industry === 'both');

    if (needsQBO) {
        const qbo = tools.find(t => t.id === 'qbo');
        if (qbo) stack.push(qbo);
    } else {
        // Default to Xero for everyone else
        const xero = tools.find(t => t.id === 'xero');
        if (xero) stack.push(xero);
    }

    // 6. Receipts Management (Dext)
    // If receipts are a pain point OR running ecommerce
    if (answers.pain === 'receipts' || answers.industry.includes('ecommerce') || answers.stage === 'switching') {
        const dext = tools.find(t => t.id === 'dext');
        if (dext) stack.push(dext);
    }

    // 7. E-commerce Sync - Focus on Synder
    // Only recommend for ecommerce businesses
    if (answers.industry.includes('ecommerce') || answers.industry === 'both') {
        // Always prefer Synder over A2X
        const synder = tools.find(t => t.id === 'synder');
        if (synder) stack.push(synder);
    }

    return stack;
}


// --- COMPONENT ---
const AffiliateToolsView: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isQuizComplete, setIsQuizComplete] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [results, setResults] = useState<AffiliateTool[]>([]);

    const quizRef = useRef<HTMLDivElement>(null);

    const handleStart = () => {
        setCurrentQuestion(1); // Start the quiz from question 1 (index 0)
        setTimeout(() => {
            quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    };

    const handleAnswer = (value: string) => {
        const currentQ = QUESTIONS[currentQuestion - 1]; // Adjust for 1-based currentQuestion
        const newAnswers = { ...answers, [currentQ.id]: value };
        setAnswers(newAnswers);

        if (currentQuestion < QUESTIONS.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // Finish
            const calculated = calculateStack(newAnswers);
            setResults(calculated);
            setIsQuizComplete(true);
            setTimeout(() => {
                quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    };

    const handleRestart = () => {
        setAnswers({});
        setCurrentQuestion(0); // Reset to 0 to show initial quiz state
        setIsQuizComplete(false);
        setResults([]);
    };

    const handleBack = () => {
        if (currentQuestion > 1) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    // Static Top Picks (Updated List)
    const topPicksOrder = ['ownr', 'venn', 'xero', 'ramp', 'float', 'dext', 'a2x', 'synder'];
    const topPicks = AFFILIATE_TOOLS
        .filter(t => topPicksOrder.includes(t.id))
        .sort((a, b) => topPicksOrder.indexOf(a.id) - topPicksOrder.indexOf(b.id));

    return (
        <div className="bg-slate-50 min-h-screen font-sans text-slate-900">

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-white border-b border-slate-200">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-60"></div>
                <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-700 text-xs font-extrabold uppercase tracking-widest mb-6 border border-blue-100 shadow-sm">
                        CPA-Curated Stack
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Best Accounting Tools for <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Canadian Businesses</span>
                    </h1>
                    <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Stop guessing. We've curated the exact software stack you need to automate bookkeeping, slash taxes, and gain cash flow visibility.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <button
                            onClick={handleStart}
                            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto flex items-center justify-center gap-2"
                        >
                            Find My Tool Stack <ArrowRight size={20} />
                        </button>
                        <button
                            onClick={() => document.getElementById('top-picks')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-sm hover:shadow-md w-full sm:w-auto"
                        >
                            Browse Top Picks
                        </button>
                    </div>

                    <p className="text-[10px] text-slate-400 uppercase tracking-widest max-w-md mx-auto leading-normal">
                        Disclosure: Some links are affiliate links. We may earn a commission if you sign up, at no extra cost to you.
                    </p>
                </div>
            </section>

            {/* Trust Badges */}
            <div className="bg-gradient-to-b from-white to-slate-50 py-8 border-b border-slate-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-slate-600">
                        <div className="flex items-center gap-2.5">
                            <Zap size={18} className="text-teal-600 flex-shrink-0" />
                            <span className="font-semibold">Best Tools for Canadian SMBs</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <CheckCircle2 size={18} className="text-teal-600 flex-shrink-0" />
                            <span className="font-semibold">CPA-Verified Tools</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <ShieldCheck size={18} className="text-teal-600 flex-shrink-0" />
                            <span className="font-semibold">Canadian-Specific Features</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. TOOL MATCHER QUIZ (Moved Up) */}
            <section ref={quizRef} className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 p-32 bg-teal-600/20 rounded-full blur-3xl -ml-16 -mb-16"></div>

                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    {currentQuestion === 0 ? ( // If currentQuestion is 0, show initial state
                        <div className="text-center py-12">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Build Your Perfect Stack</h2>
                            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                                Answer 5 quick questions about your business stage and habits. We'll generate a custom list of tools approved by our CPAs.
                            </p>
                            <button
                                onClick={handleStart}
                                className="bg-teal-500 hover:bg-teal-400 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                            >
                                Start Assessment
                            </button>
                        </div>
                    ) : !isQuizComplete ? (
                        <motion.div
                            key={currentQuestion}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <span className="text-teal-400 text-sm font-bold uppercase tracking-widest">Question {currentQuestion} of {QUESTIONS.length}</span>
                                <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-teal-500 transition-all duration-300" style={{ width: `${((currentQuestion) / QUESTIONS.length) * 100}%` }}></div>
                                </div>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold mb-10 leading-tight">
                                {QUESTIONS[currentQuestion - 1].text}
                            </h3>

                            <div className="grid md:grid-cols-2 gap-4">
                                {QUESTIONS[currentQuestion - 1].options.map((opt) => (
                                    <button
                                        key={opt.value}
                                        onClick={() => handleAnswer(opt.value)}
                                        className="text-left p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-teal-500/50 transition-all group text-white"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold text-lg group-hover:text-teal-400 transition-colors">{opt.label}</span>
                                            <ChevronRight className="text-white/20 group-hover:text-teal-500" />
                                        </div>
                                    </button>
                                ))}
                            </div>


                            {/* Back Button */}
                            {currentQuestion > 1 && (
                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <button
                                        onClick={handleBack}
                                        className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all flex items-center gap-2 text-white font-semibold"
                                    >
                                        <ChevronRight size={18} className="rotate-180" />
                                        Back to Previous Question
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    ) : (
                        // RESULTS
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-3xl p-8 md:p-12 text-slate-900 shadow-2xl"
                        >
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wide mb-4">
                                    <CheckCircle2 size={16} /> Analysis Complete
                                </div>
                                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Your Recommended Stack</h2>
                                <p className="text-slate-500 text-lg">Based on your answers, here is the CPA-verified setup for your business.</p>
                            </div>

                            <div className="space-y-6">
                                {results.map((tool, index) => (
                                    <div
                                        key={tool.id}
                                        className="border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                                    >
                                        {/* Left: Identity */}
                                        <div className="flex-shrink-0 flex md:flex-col items-center gap-4 md:w-48">
                                            <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-white shadow-sm border border-slate-100 p-3">
                                                <ToolLogo toolId={tool.id} />
                                            </div>

                                            <div className="text-left md:text-center">
                                                <span className="inline-block bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded mt-1">
                                                    {tool.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Middle: Content */}
                                        <div className="flex-grow border-t border-slate-100 pt-4 md:border-t-0 md:pt-0 md:border-l md:pl-8">
                                            <h4 className="text-xl font-bold text-slate-800 mb-3">{tool.resultHeadline}</h4>
                                            <ul className="space-y-2 mb-4">
                                                {tool.resultBullets.map((bullet, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                                                        <CheckCircle2 size={16} className="text-teal-500 mt-0.5 flex-shrink-0" />
                                                        <span>{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="text-xs text-slate-400 italic">{tool.summary}</p>
                                        </div>

                                        {/* Right: CTA Stack */}
                                        <div className="flex-shrink-0 w-full md:w-64 flex flex-col gap-3">
                                            <a
                                                href={buildAffiliateUrl(tool.affiliateUrl, 'quiz_results', tool.name)}
                                                onClick={() => trackAffiliateClick(tool.name, 'quiz_results')}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                                            >
                                                {tool.affiliateOffer}
                                            </a>
                                            {tool.learnMoreUrl && (
                                                <Link
                                                    href={tool.learnMoreUrl}
                                                    className="block w-full bg-white border border-slate-200 text-slate-600 font-bold py-3 rounded-xl text-center hover:bg-slate-50 hover:text-slate-900 transition-colors text-sm"
                                                >
                                                    Read our Guide
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Lead Capture CTA - Redesigned */}
                            <div className="mt-16 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl blur-xl opacity-20"></div>
                                <div className="relative bg-white rounded-3xl border-2 border-slate-200 shadow-2xl overflow-hidden">
                                    {/* Gradient accent bar */}
                                    <div className="h-2 bg-gradient-to-r from-teal-500 via-blue-500 to-teal-500"></div>

                                    <div className="p-8 md:p-12">
                                        <div className="flex flex-col md:flex-row md:items-center gap-8">
                                            {/* Left: Icon & Content */}
                                            <div className="flex-grow">
                                                <div className="flex items-start gap-4 mb-6">
                                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                                                        <Calendar size={28} className="text-white" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-3xl font-extrabold text-slate-900 mb-2">
                                                            Need help implementing this?
                                                        </h3>
                                                        <p className="text-lg text-slate-600">
                                                            Book a <span className="font-bold text-teal-600">free 15-minute consultation</span> with our CPAs
                                                        </p>
                                                    </div>
                                                </div>

                                                <ul className="space-y-3 mb-6 md:mb-0">
                                                    <li className="flex items-center gap-3 text-slate-700">
                                                        <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                                                            <CheckCircle2 size={14} className="text-teal-600" />
                                                        </div>
                                                        <span>Get a custom implementation roadmap for your business</span>
                                                    </li>
                                                    <li className="flex items-center gap-3 text-slate-700">
                                                        <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                                                            <CheckCircle2 size={14} className="text-teal-600" />
                                                        </div>
                                                        <span>Learn setup best practices from experienced CPAs</span>
                                                    </li>
                                                    <li className="flex items-center gap-3 text-slate-700">
                                                        <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                                                            <CheckCircle2 size={14} className="text-teal-600" />
                                                        </div>
                                                        <span>No obligation • 100% free • Tailored to your needs</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Right: CTA Button */}
                                            <div className="flex-shrink-0">
                                                <button
                                                    onClick={() => setIsModalOpen(true)}
                                                    className="group block w-full md:w-auto border-0 outline-none focus:outline-none bg-transparent p-0"
                                                >
                                                    <div className="bg-gradient-to-br from-teal-500 to-blue-600 text-white font-bold px-10 py-6 rounded-2xl hover:from-teal-600 hover:to-blue-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 text-center md:text-left">
                                                        <div className="flex items-center justify-center gap-3 mb-1">
                                                            <span className="text-xl">Book Free Call</span>
                                                            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                                                        </div>
                                                        <div className="text-sm text-white/80 font-normal">15 minutes • This week</div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial */}
                            <div className="mt-8 p-6 rounded-xl bg-slate-50 border border-slate-200">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                        BA
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-slate-700 italic mb-2">
                                            "LedgerLogic streamlined our Xero setup and financial operations. Finally, accounting that moves as fast as we do."
                                        </p>
                                        <p className="text-sm text-slate-500">
                                            <span className="font-bold text-slate-700">Ben Archambault</span>, Founder, Talksoon Inc.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Retake Assessment - Redesigned */}
                            <div className="mt-12 flex justify-center">
                                <button
                                    onClick={handleRestart}
                                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 font-bold transition-all shadow-sm hover:shadow-md border-2 border-slate-200 hover:border-slate-300"
                                >
                                    <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-500" />
                                    <span>Retake Assessment</span>
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section >

            {/* 3. TOP PICKS (Redesigned & Moved Down) */}
            < section id="top-picks" className="pt-48 pb-32 bg-slate-50" >
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-20">
                        <span className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-4 block">Market Leaders</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Top Picks</h2>
                        <p className="text-slate-500 text-xl max-w-2xl mx-auto">
                            The heavy hitters. If you don't want to overthink it, these are the gold standards for Canadian business finance.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topPicks.map(tool => (
                            <div key={tool.id} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 group relative flex flex-col overflow-hidden">
                                {/* Gradient Border interaction */}
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="flex items-start justify-between mb-8">
                                    <div className="w-24 h-24 rounded-2xl flex items-center justify-center bg-white shadow-lg border border-slate-100 p-3">
                                        <ToolLogo toolId={tool.id} />
                                    </div>
                                    {tool.affiliateOffer && (
                                        <span className="bg-teal-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md whitespace-nowrap">
                                            {tool.affiliateOffer}
                                        </span>
                                    )}
                                </div>

                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">{tool.category}</span>

                                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                                    {tool.summary}
                                </p>

                                {/* Stats & Badges */}
                                <div className="mb-6 space-y-3">
                                    {/* Industry Badges */}
                                    {tool.industryBadges && tool.industryBadges.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {tool.industryBadges.map((badge, i) => (
                                                <span
                                                    key={i}
                                                    className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-md uppercase tracking-wide"
                                                >
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="mt-auto">
                                    <div className="space-y-3 mb-8">
                                        {tool.resultBullets?.slice(0, 2).map((bullet, i) => (
                                            <div key={i} className="flex items-start gap-3 text-sm text-slate-500">
                                                <div className="mt-0.5 p-0.5 rounded-full bg-teal-50 text-teal-600">
                                                    <CheckCircle2 size={12} strokeWidth={4} />
                                                </div>
                                                {bullet}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Dual CTA Buttons */}
                                    <div className="flex items-center gap-3">
                                        {/* Left: Get Tool (Primary - Prominent Black) */}
                                        <a
                                            href={tool.affiliateUrl}
                                            target="_blank"
                                            rel="sponsored nofollow"
                                            className="flex-1 text-center py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 hover:scale-[1.02] transition-all shadow-xl shadow-slate-200"
                                        >
                                            Get {tool.name.split(' ')[0]}
                                        </a>

                                        {/* Right: Read Guide (Secondary - Compact) */}
                                        {tool.learnMoreUrl ? (
                                            <Link
                                                href={tool.learnMoreUrl}
                                                className="px-4 py-3 rounded-xl bg-white border-2 border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 hover:border-slate-300 transition-all whitespace-nowrap"
                                            >
                                                Read Guide
                                            </Link>
                                        ) : (
                                            <button
                                                disabled
                                                className="px-4 py-3 rounded-xl bg-slate-100 border-2 border-slate-200 text-slate-400 font-bold text-sm cursor-not-allowed opacity-60 whitespace-nowrap"
                                            >
                                                Guide Soon
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* 6. TRUST SECTION */}
            < section className="py-20 text-center max-w-3xl mx-auto px-6" >
                <h2 className="text-3xl font-bold text-slate-900 mb-8">How We Select Tools</h2>
                <div className="grid sm:grid-cols-2 gap-6 text-left">
                    {[
                        "Must fully support Canadian entities (GST/HST handling)",
                        "Automates bookkeeping correctly (no 'messy data')",
                        "Integrates reliably with Xero or QBO",
                        "Provides meaningful time savings for our clients"
                    ].map((criteria, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                            <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
                                <ShieldCheck size={16} className="text-teal-600" />
                            </div>
                            <p className="text-slate-700 font-medium pt-1 text-sm">{criteria}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. FAQ SECTION */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-600 text-lg">Common questions about Canadian business tools and software</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                question: "Do I need separate accounting software for my Canadian corporation?",
                                answer: "Yes, we strongly recommend using Canadian-specific accounting software like Xero or QuickBooks Online. These platforms handle GST/HST correctly, support Canadian payroll deductions, and integrate with CRA filing requirements. Generic or US-only software often creates compliance issues."
                            },
                            {
                                question: "What's the difference between Xero and QuickBooks for Canadian businesses?",
                                answer: "Xero is ideal for service businesses and startups—it has a cleaner interface and includes Hubdoc for receipt capture. QuickBooks Online is better for e-commerce businesses with inventory or complex project tracking needs. Both are fully Canadian tax-compliant. Our quiz will recommend the right one based on your business type."
                            },
                            {
                                question: "Which business bank account has the best FX rates for Canadian startups?",
                                answer: "Venn offers some of the lowest FX fees among Canadian business banks, especially for multi-currency operations. Traditional banks like RBC and TD have higher fees but offer in-person service. For tech companies dealing in USD, Venn or Ramp are typically the most cost-effective options."
                            },
                            {
                                question: "Can I switch from QuickBooks to Xero without losing data?",
                                answer: "Yes! Both Xero and QuickBooks allow data migration. Most accounting firms (including LedgerLogic) can help migrate your chart of accounts, invoices, and historical transactions. The process typically takes 1-2 weeks. We recommend switching at fiscal year-end to keep things clean."
                            },
                            {
                                question: "What tools do I need if I run a Shopify store in Canada?",
                                answer: "For Canadian Shopify stores, we recommend: (1) Xero or QuickBooks for accounting, (2) Synder or A2X to sync Shopify sales automatically, (3) Venn for business banking, and (4) Dext for tracking supplier invoices and receipts. This stack automates 80%+ of your bookkeeping."
                            },
                            {
                                question: "How much does a typical Canadian SMB tool stack cost per month?",
                                answer: "A basic stack (accounting software + bank account + receipt management) runs $50-100/month. A full stack including spend management and e-commerce sync tools is typically $150-300/month. However, with the special offers on this page, you can save 40-60% in your first year. Most businesses save 10-20 hours/month in manual bookkeeping, making the ROI significant."
                            }
                        ].map((faq, index) => (
                            <details key={index} className="group bg-slate-50 rounded-xl border border-slate-200 hover:border-teal-500 transition-colors">
                                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-slate-900 text-lg">
                                    {faq.question}
                                    <ChevronRight className="text-slate-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-4" size={20} />
                                </summary>
                                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>

                    {/* JSON-LD Schema for FAQ */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Do I need separate accounting software for my Canadian corporation?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, we strongly recommend using Canadian-specific accounting software like Xero or QuickBooks Online. These platforms handle GST/HST correctly, support Canadian payroll deductions, and integrate with CRA filing requirements."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What's the difference between Xero and QuickBooks for Canadian businesses?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Xero is ideal for service businesses and startups with a cleaner interface. QuickBooks Online is better for e-commerce businesses with inventory or complex project tracking needs. Both are fully Canadian tax-compliant."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Which business bank account has the best FX rates for Canadian startups?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Venn offers some of the lowest FX fees among Canadian business banks, especially for multi-currency operations. For tech companies dealing in USD, Venn or Ramp are typically the most cost-effective options."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can I switch from QuickBooks to Xero without losing data?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes! Both platforms allow data migration. Most accounting firms can help migrate your chart of accounts, invoices, and historical transactions. The process typically takes 1-2 weeks."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What tools do I need if I run a Shopify store in Canada?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "For Canadian Shopify stores, we recommend: Xero or QuickBooks for accounting, Synder or A2X to sync Shopify sales automatically, Venn for business banking, and Dext for tracking receipts."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How much does a typical Canadian SMB tool stack cost per month?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "A basic stack runs $50-100/month. A full stack including spend management and e-commerce sync is typically $150-300/month. With special offers, you can save 40-60% in your first year."
                                        }
                                    }
                                ]
                            })
                        }}
                    />
                </div>
            </section>

            {/* Onboarding Modal */}
            < OnboardingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div >
    );
};

export default AffiliateToolsView;
