"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TOOLS, CATEGORIES, STACKS, FAQS } from '../../app/tools/tools-data';
import { CheckCircle2, ExternalLink, Info, ShieldCheck, ChevronDown, ChevronUp, Zap, Star, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ToolsView() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [activeStack, setActiveStack] = useState<string | null>(null); // New state for active stack
    const [expandedTool, setExpandedTool] = useState<string | null>(null);

    // -- FILTERS --
    const filteredTools = useMemo(() => {
        let results = TOOLS;

        // Priority 1: Stack Filter
        if (activeStack) {
            const stack = STACKS.find(s => s.id === activeStack);
            if (stack) {
                return results.filter(t => stack.toolIds.includes(t.id));
            }
        }

        // Priority 2: Category Filter (only if no stack active)
        if (activeCategory !== 'All') {
            results = results.filter(t => t.categoryIds.includes(activeCategory));
        }

        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            results = results.filter(t =>
                t.name.toLowerCase().includes(q) ||
                t.summary.toLowerCase().includes(q) ||
                t.bestFor.toLowerCase().includes(q)
            );
        }

        return results;
    }, [activeCategory, searchQuery, activeStack]);

    const displayCategories = useMemo(() => {
        // If stack is active, show all categories that contain the visible tools
        if (activeStack) {
            return CATEGORIES.filter(c => filteredTools.some(t => t.categoryIds.includes(c.id)));
        }

        if (activeCategory !== 'All') {
            return CATEGORIES.filter(c => c.id === activeCategory);
        }
        return CATEGORIES;
    }, [activeCategory, activeStack, filteredTools]);

    const handleCategoryClick = (id: string) => {
        setActiveCategory(id);
        setActiveStack(null); // Clear stack when picking a category
    };

    const handleStackClick = (stackId: string) => {
        if (activeStack === stackId) {
            setActiveStack(null); // Toggle off
        } else {
            setActiveStack(stackId);
            setActiveCategory('All'); // Reset category to allow stack to span multiple
            // Smooth scroll to tools
            setTimeout(() => {
                document.getElementById('tool-grid-start')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    };

    const toggleTool = (id: string) => {
        setExpandedTool(expandedTool === id ? null : id);
    };

    return (
        <div className="bg-slate-50 min-h-screen text-slate-900">
            <Navbar />

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-white border-b border-slate-100">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-50"></div>
                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-brand-dark text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
                        Curated by CPAs
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                        Accounting Tools & Partner Offers for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Canadian Businesses</span>
                    </h1>
                    <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                        A curated stack of cloud tools we recommend to streamline bookkeeping, spending, and ecommerce accounting—plus partner offers when available.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                        <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl w-full sm:w-auto">
                            Book a Discovery Call
                        </button>
                        <button
                            onClick={() => document.getElementById('tool-filters')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-sm hover:shadow-md w-full sm:w-auto"
                        >
                            Browse Tools
                        </button>
                    </div>

                    <p className="text-[10px] text-slate-400 uppercase tracking-widest max-w-md mx-auto leading-normal mt-8">
                        Disclosure: Some links are affiliate links. If you sign up through them, we may earn a commission. We only recommend tools we’d use with clients.
                    </p>
                </div>
            </section>

            {/* 2. STICKY FILTER BAR */}
            <div id="tool-filters" className="sticky top-[75px] z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm py-4 transition-all">
                <div className="container mx-auto px-6 flex items-center justify-center md:justify-start">

                    {/* Categories - Centered or Left aligned depending on preference, removing search allows full width */}
                    <div className="flex items-center gap-2 overflow-x-auto w-full pb-2 md:pb-0 no-scrollbar justify-start md:justify-center">
                        <button
                            onClick={() => handleCategoryClick('All')}
                            className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors border ${activeCategory === 'All' && !activeStack ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'}`}
                        >
                            All Tools
                        </button>
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => handleCategoryClick(cat.id)}
                                className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors border ${activeCategory === cat.id && !activeStack ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'}`}
                            >
                                {cat.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 max-w-6xl">

                {/* 3. RECOMMENDED STACKS (Consolidated and Cleaner) */}
                {!searchQuery && (
                    <section className="mb-24">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-yellow-100 rounded-lg">
                                    <Zap className="text-yellow-600" size={20} fill="currentColor" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Speed-Run Your Setup</h2>
                            </div>
                            {activeStack && (
                                <button
                                    onClick={() => setActiveStack(null)}
                                    className="flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-full text-xs font-bold hover:border-red-200 hover:text-red-600 hover:bg-red-50 transition-all shadow-sm"
                                >
                                    <X size={14} />
                                    Clear Selection
                                </button>
                            )}
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {STACKS.map(stack => {
                                const isActive = activeStack === stack.id;
                                return (
                                    <div
                                        key={stack.id}
                                        onClick={() => handleStackClick(stack.id)}
                                        className={`rounded-2xl border transition-all cursor-pointer group relative overflow-hidden ${isActive ? 'bg-blue-50 border-blue-500 shadow-xl ring-2 ring-blue-500/20' : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-lg'}`}
                                    >
                                        {isActive && (
                                            <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">
                                                SELECTED
                                            </div>
                                        )}
                                        <div className="p-6">
                                            <h3 className={`text-lg font-bold mb-2 transition-colors ${isActive ? 'text-blue-900' : 'text-slate-900 group-hover:text-blue-700'}`}>
                                                {stack.title}
                                            </h3>
                                            <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-2">
                                                {stack.description}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <div className="flex -space-x-2 overflow-hidden">
                                                    {stack.toolIds.slice(0, 4).map(tid => {
                                                        const t = TOOLS.find(x => x.id === tid);
                                                        return t ? (
                                                            <div key={tid} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm" style={{ backgroundColor: t.brandColor }}>
                                                                {t.initials}
                                                            </div>
                                                        ) : null;
                                                    })}
                                                </div>
                                                <span className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors ${isActive ? 'bg-blue-200 text-blue-900' : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600'}`}>
                                                    {isActive ? 'Viewing Stack' : 'View Stack'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}

                {/* Anchor for scrolling */}
                <div id="tool-grid-start" className="-mt-8"></div>

                {/* 4. TOOL GRID (Consolidated Cards) */}
                {displayCategories.map(cat => {
                    const toolsToShow = filteredTools.filter(t => t.categoryIds.includes(cat.id) && (activeCategory === 'All' ? t.categoryIds[0] === cat.id || (cat.id === 'start' && t.id === 'venn') : true));

                    if (toolsToShow.length === 0) return null;

                    return (
                        <div key={cat.id} className="mb-24 scroll-mt-32" id={`cat-${cat.id}`}>
                            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200">
                                <h2 className="text-2xl font-bold text-slate-900">{cat.title}</h2>
                                <span className="text-sm font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-md">{toolsToShow.length}</span>
                            </div>

                            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {toolsToShow.map(tool => (
                                    <div key={tool.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-blue-200 transition-all duration-300 group flex flex-col hover:-translate-y-1">
                                        <div className="p-6 flex-grow flex flex-col">

                                            {/* HEADER: Logo + Name */}
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-12 h-12 rounded-lg shadow-inner flex items-center justify-center text-lg font-bold text-white shrink-0" style={{ backgroundColor: tool.brandColor }}>
                                                        {tool.initials}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">{tool.name}</h3>
                                                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide mt-0.5">{tool.bestFor}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                                {tool.summary}
                                            </p>

                                            {/* BENEFITS - Compact */}
                                            <div className="space-y-2 mb-6">
                                                {tool.benefits.slice(0, 3).map((b, i) => (
                                                    <div key={i} className="flex items-start gap-2">
                                                        <CheckCircle2 size={14} className="text-teal-500 mt-0.5 shrink-0" />
                                                        <span className="text-xs text-slate-600 font-medium">{b}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* ACTIONS ROW */}
                                            <div className="flex items-center gap-2 mt-auto pt-4 border-t border-slate-100">
                                                <a
                                                    href={tool.affiliateUrl}
                                                    target="_blank"
                                                    rel="sponsored nofollow"
                                                    className="flex-1 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 py-2.5 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2 border border-slate-200 hover:border-blue-200"
                                                >
                                                    Visit Website <ExternalLink size={12} />
                                                </a>
                                                <button
                                                    onClick={() => toggleTool(tool.id)}
                                                    className={`px-3 py-2.5 rounded-lg border transition-colors flex items-center justify-center ${expandedTool === tool.id ? 'bg-slate-800 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700'}`}
                                                    title="Implementation Notes"
                                                >
                                                    {expandedTool === tool.id ? <ChevronUp size={16} /> : <Info size={16} />}
                                                </button>
                                            </div>
                                        </div>

                                        {/* EXPANDABLE DETAILS (Overlay/Slide styled) */}
                                        <AnimatePresence>
                                            {expandedTool === tool.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="bg-slate-50 border-t border-slate-100"
                                                >
                                                    <div className="p-5 text-sm">
                                                        <div className="grid grid-cols-2 gap-4 mb-4">
                                                            <div>
                                                                <div className="text-[10px] font-bold uppercase text-slate-400 mb-1">Setup Time</div>
                                                                <div className="font-semibold text-slate-700">{tool.detailContent.setupTime}</div>
                                                            </div>
                                                            <div>
                                                                <div className="text-[10px] font-bold uppercase text-slate-400 mb-1">Watch Out</div>
                                                                <div className="text-xs font-bold text-orange-700">{tool.watchouts[0]}</div>
                                                            </div>
                                                        </div>

                                                        <div className="flex gap-3 bg-blue-100/50 p-3 rounded-lg border border-blue-100">
                                                            <Star size={14} className="text-blue-600 shrink-0 mt-0.5" fill="currentColor" />
                                                            <div className="text-slate-700 text-xs leading-relaxed">
                                                                <span className="font-bold text-blue-800 block mb-0.5">CPA Pro Tip:</span>
                                                                {tool.detailContent.tip}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}

                {/* 5. QUICK COMPARISON (Redesigned) */}
                <section className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl mb-24">
                    <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800">
                        <div className="p-8 text-white">
                            <h3 className="text-2xl font-bold mb-2">Card Showdown</h3>
                            <p className="text-slate-400 text-sm mb-6">Which corporate card fits your stage?</p>
                            <div className="text-xs font-mono text-slate-500">*Features change often.</div>
                        </div>

                        <div className="p-8 hover:bg-slate-800/50 transition-colors">
                            <div className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-slate-400"></span> Venn
                            </div>
                            <ul className="space-y-3 text-sm text-slate-300">
                                <li className="flex gap-2"><CheckCircle2 size={14} className="text-teal-500 shrink-0" /> Startups & Agencies</li>
                                <li className="flex gap-2"><CheckCircle2 size={14} className="text-teal-500 shrink-0" /> No Personal Guarantee</li>
                                <li className="flex gap-2"><CheckCircle2 size={14} className="text-teal-500 shrink-0" /> Virtual Only</li>
                            </ul>
                        </div>

                        <div className="p-8 hover:bg-slate-800/50 transition-colors relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-teal-500 text-[10px] font-bold text-white px-2 py-1 rounded-bl-lg">POPULAR</div>
                            <div className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500"></span> Float
                            </div>
                            <ul className="space-y-3 text-sm text-slate-300">
                                <li className="flex gap-2"><CheckCircle2 size={14} className="text-teal-500 shrink-0" /> Teams 10-100+</li>
                                <li className="flex gap-2"><CheckCircle2 size={14} className="text-teal-500 shrink-0" /> 4% Yield on Cash</li>
                                <li className="flex gap-2"><CheckCircle2 size={14} className="text-teal-500 shrink-0" /> Physical Cards</li>
                            </ul>
                        </div>

                        <div className="p-8 hover:bg-slate-800/50 transition-colors">
                            <div className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-yellow-500"></span> Ramp
                            </div>
                            <ul className="space-y-3 text-sm text-slate-300">
                                <li className="flex gap-2"><CheckCircle2 size={14} className="text-teal-500 shrink-0" /> USD-Heavy Tech</li>
                                <li className="flex gap-2"><CheckCircle2 size={14} className="text-teal-500 shrink-0" /> Global Issuance</li>
                                <li className="flex gap-2"><CheckCircle2 size={14} className="text-teal-500 shrink-0" /> Deep Automation</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 6. TRUST SECTION */}
                <section className="mb-24 text-center max-w-3xl mx-auto">
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

                {/* 7. FAQ (Cleaned up) */}
                <section className="mb-24 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Common Questions</h2>
                    <div className="divide-y divide-slate-200">
                        {FAQS.map((faq, i) => (
                            <details key={i} className="group py-6 cursor-pointer">
                                <summary className="flex justify-between items-center font-bold text-slate-800 list-none hover:text-blue-600 transition-colors">
                                    {faq.question}
                                    <span className="transition-transform group-open:rotate-180">
                                        <ChevronDown size={20} className="text-slate-400" />
                                    </span>
                                </summary>
                                <div className="pt-4 text-slate-600 leading-relaxed max-w-2xl">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </section>

                {/* 8. FINAL CTA */}
                <section className="bg-brand-dark rounded-3xl p-12 overflow-hidden relative text-center">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Want this stack set up properly?</h2>
                        <p className="text-slate-300 text-lg mb-10">We’ll implement your bookkeeping stack, automate the workflows, and keep your books clean—month after month.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-400 transition-colors shadow-xl">
                                Book a Discovery Call
                            </button>
                            <button className="bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-700 transition-colors border border-slate-700">
                                Get a Free Assessment
                            </button>
                        </div>
                    </div>
                </section>

            </div>

            <Footer />
        </div>
    );
}
