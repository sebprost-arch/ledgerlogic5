
"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ShoppingBag, Download, ArrowRight, Star, ShieldCheck, CheckCircle2, X, ChevronDown, ChevronUp, Zap, FileText, Video, LayoutTemplate, RefreshCw, Calendar, Users } from 'lucide-react';
import Link from 'next/link';
import { RESOURCES, FREE_RESOURCES, FAQS, ResourceProduct } from '../data/resources';
import OnboardingModal from '../components/OnboardingModal';

// --- COMPONENTS ---

const ProductModal: React.FC<{ product: ResourceProduct | null; onClose: () => void }> = ({ product, onClose }) => {
    if (!product) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                >
                    <div className="relative">
                        {/* Header Image Placeholder */}
                        <div className="h-32 bg-gradient-to-r from-slate-900 to-slate-800 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
                            <div className="z-10 text-white text-center px-6">
                                <h3 className="text-2xl font-bold">{product.title}</h3>
                                <p className="text-slate-300 text-sm mt-1">{product.outcome}</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8">
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                    {product.format}
                                </span>
                                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                    {product.difficulty}
                                </span>
                                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                    {product.timeToImplement} Setup
                                </span>
                            </div>

                            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                {product.longDescription || product.description}
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-teal-500" /> What's Inside
                                    </h4>
                                    <ul className="space-y-2">
                                        {(product.whatIsInside || product.features).map((feature, i) => (
                                            <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                                                <div className="mt-1.5 w-1 h-1 rounded-full bg-slate-400 flex-shrink-0"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <Zap size={16} className="text-yellow-500" /> Best For
                                    </h4>
                                    <ul className="space-y-2">
                                        {(product.whoIsItFor || [product.bestFor]).map((item, i) => (
                                            <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                                                <div className="mt-1.5 w-1 h-1 rounded-full bg-slate-400 flex-shrink-0"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-8">
                                <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">Instant Download Includes:</h4>
                                <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                                    <div className="flex items-center gap-2"><FileText size={16} /> Templates</div>
                                    <div className="flex items-center gap-2"><Video size={16} /> Video Guide</div>
                                    <div className="flex items-center gap-2"><LayoutTemplate size={16} /> SOPs</div>
                                </div>
                            </div>

                            <div className="sticky bottom-0 bg-white pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                                <div>
                                    <div className="text-sm text-slate-400 font-medium">One-time payment</div>
                                    <div className="text-3xl font-extrabold text-slate-900">{product.price}</div>
                                </div>
                                <a
                                    href={product.stripeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                                >
                                    Buy Now <ArrowRight size={20} />
                                </a>
                            </div>
                            <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1">
                                <ShieldCheck size={12} /> Secure checkout via Stripe • 100% Money-back guarantee
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

// --- MAIN VIEW ---

const ResourcesView: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedProduct, setSelectedProduct] = useState<ResourceProduct | null>(null);
    const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

    // Filter Logic
    const specializedCategories = ['Template', 'Guide', 'System', 'Bundle'];

    // Derived state for filtered products
    const filteredProducts = useMemo(() => {
        return RESOURCES.filter(product => {
            const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === 'All' ||
                (activeCategory === 'Best Sellers' && product.isBestSeller) ||
                product.category.toLowerCase() === activeCategory.toLowerCase();

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, activeCategory]);

    const bestSellers = RESOURCES.filter(p => p.isBestSeller);

    return (
        <div className="bg-slate-50 min-h-screen font-sans text-slate-900">

            {/* 1. HERO */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-white border-b border-slate-200">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-50 via-transparent to-transparent opacity-60"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block py-1.5 px-4 rounded-full bg-teal-50 text-teal-700 text-xs font-extrabold uppercase tracking-widest mb-6 border border-teal-100 shadow-sm">
                                Digital Storefront
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                                DIY Accounting Resources <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Templates, Kits & Guides</span>
                            </h1>
                            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                                Stop guessing and stop emailing questions for one-off answers. Buy proven templates and step-by-step kits built for Canadian founders who want to save money and do it right.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-10">
                                <a href="#best-sellers" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2">
                                    Browse Best-Sellers <ShoppingBag size={20} />
                                </a>
                                <a href="#free-resources" className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-sm hover:shadow-md">
                                    Free Resources
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-6 text-sm text-slate-500 font-medium">
                                <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-500" /> Built by a CPA</span>
                                <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-500" /> Canada-first (GST/HST-aware)</span>
                                <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-500" /> Instant Download</span>
                            </div>
                        </div>

                        {/* Featured Best Seller Spot */}
                        <div className="relative hidden lg:block">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-teal-100 rounded-3xl blur-2xl opacity-50"></div>
                            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl uppercase tracking-wider">
                                    #1 Best Seller
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-slate-900">Chart of Accounts Pro</h3>
                                <p className="text-slate-500 mb-6">For SaaS, Agency & E-commerce</p>

                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <div className="p-1 bg-teal-50 rounded-full text-teal-600 mt-0.5"><CheckCircle2 size={14} /></div>
                                        <span>Cleaner reporting categories (MRR, COGS)</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <div className="p-1 bg-teal-50 rounded-full text-teal-600 mt-0.5"><CheckCircle2 size={14} /></div>
                                        <span>Fewer uncategorized/mystery charges</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <div className="p-1 bg-teal-50 rounded-full text-teal-600 mt-0.5"><CheckCircle2 size={14} /></div>
                                        <span>Faster month-end & investor ready</span>
                                    </li>
                                </ul>

                                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                                    <div className="text-3xl font-extrabold text-slate-900">$49</div>
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => setSelectedProduct(RESOURCES.find(r => r.id === 'coa-pro') || null)}
                                            className="px-4 py-2 text-slate-600 font-bold hover:text-slate-900 transition-colors"
                                        >
                                            Details
                                        </button>
                                        <a
                                            href="https://buy.stripe.com/test_coa_pro"
                                            target="_blank"
                                            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-bold shadow-md transition-all hover:shadow-lg"
                                        >
                                            Buy Now
                                        </a>
                                    </div>
                                </div>
                                <div className="text-center mt-4 text-xs text-slate-400">Secure checkout via Stripe. Instant access.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. STICKY FILTER BAR */}
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Search */}
                        <div className="relative w-full md:w-auto md:min-w-[300px]">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search templates, kits, guides..."
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all text-sm"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Filters */}
                        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                            <span className="text-xs font-bold text-slate-400 uppercase mr-2 hidden md:inline">Filter:</span>
                            {['All', 'Best Sellers', ...specializedCategories].map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat
                                        ? 'bg-slate-900 text-white shadow-md'
                                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. BEST SELLERS */}
            {activeCategory === 'All' && !searchQuery && (
                <section id="best-sellers" className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="flex items-end justify-between mb-10">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-2">Best Sellers</h2>
                                <p className="text-slate-500">Our most popular kits used by 500+ Canadian founders.</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {bestSellers.map(product => (
                                <div key={product.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${product.format === 'Spreadsheet' ? 'bg-green-50 text-green-700' :
                                            product.format === 'Notion' ? 'bg-slate-100 text-slate-700' :
                                                product.format === 'Video' ? 'bg-red-50 text-red-700' :
                                                    'bg-blue-50 text-blue-700'
                                            }`}>
                                            {product.format}
                                        </span>
                                        {product.isNew && (
                                            <span className="text-teal-600 text-xs font-bold flex items-center gap-1">
                                                <Star size={12} fill="currentColor" /> New
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">{product.title}</h3>
                                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                                    <div className="mt-auto pt-6 border-t border-slate-100">
                                        <div className="space-y-2 mb-6">
                                            {product.features.slice(0, 3).map((f, i) => (
                                                <div key={i} className="flex items-start gap-2 text-xs text-slate-500">
                                                    <CheckCircle2 size={14} className="text-teal-500 flex-shrink-0 mt-0.5" />
                                                    <span>{f}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between gap-4">
                                            <div className="text-2xl font-bold text-slate-900">{product.price}</div>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => setSelectedProduct(product)}
                                                    className="px-3 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
                                                >
                                                    View
                                                </button>
                                                <a
                                                    href={product.stripeLink}
                                                    target="_blank"
                                                    className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors shadow-md"
                                                >
                                                    Buy Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 4. START HERE (SCENARIOS) */}
            {activeCategory === 'All' && !searchQuery && (
                <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Start Here</h2>
                            <p className="text-slate-400">Not sure what you need? Choose your current situation.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Setting up from scratch",
                                    desc: "I just incorporated and have zero systems.",
                                    rec: "clean-books-setup",
                                    icon: <LayoutTemplate className="text-teal-400" />
                                },
                                {
                                    title: "My books are messy",
                                    desc: "I'm behind and dreading the cleanup.",
                                    rec: "month-end-pack",
                                    icon: <RefreshCw className="text-blue-400" /> // Using RefreshCw but need to import or find substitute
                                },
                                {
                                    title: "Need better reporting",
                                    desc: "I have data but no insights.",
                                    rec: "coa-pro",
                                    icon: <FileText className="text-purple-400" />
                                },
                                {
                                    title: "Year-end is coming",
                                    desc: "My accountant is asking for files.",
                                    rec: "year-end-kit",
                                    icon: <Calendar className="text-red-400" /> // Using Calendar but need to import
                                }
                            ].map((scenario, i) => {
                                const product = RESOURCES.find(r => r.id === scenario.rec);
                                if (!product) return null;
                                return (
                                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col cursor-pointer" onClick={() => setSelectedProduct(product)}>
                                        <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit">{scenario.icon}</div>
                                        <h3 className="font-bold text-lg mb-2">{scenario.title}</h3>
                                        <p className="text-slate-400 text-sm mb-6 flex-grow">{scenario.desc}</p>
                                        <div className="pt-4 border-t border-white/10">
                                            <div className="text-xs uppercase tracking-widest text-teal-400 font-bold mb-1">Recommended</div>
                                            <div className="font-bold text-white flex items-center gap-1 group">
                                                {product.title} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* 5. MAIN CATALOG */}
            <section className="py-20 bg-slate-50 min-h-[500px]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Shop All Resources</h2>
                        <p className="text-slate-500">Every template and guide we've built for our private clients.</p>
                    </div>

                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-slate-400 text-lg">No resources found matching your search.</p>
                            <button onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} className="text-teal-600 font-bold mt-4 hover:underline">Clear Filters</button>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {filteredProducts.map(product => (
                                <div key={product.id} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-lg transition-all flex flex-col">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{product.category}</span>
                                        <span className="font-bold text-slate-900">{product.price}</span>
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2 leading-tight">{product.title}</h3>
                                    <p className="text-xs text-slate-500 mb-4 flex-grow">{product.description}</p>
                                    <button
                                        onClick={() => setSelectedProduct(product)}
                                        className="w-full py-2.5 rounded-lg border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 hover:border-slate-300 transition-all"
                                    >
                                        View Details
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* 6. FREE RESOURCES */}
            <section id="free-resources" className="py-20 bg-white border-y border-slate-200">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="text-teal-600 font-bold uppercase tracking-wider text-xs">No Budget? No Problem.</span>
                        <h2 className="text-3xl font-bold text-slate-900 mt-2">Free Resources</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {FREE_RESOURCES.map(free => (
                            <div key={free.id} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center hover:border-teal-200 transition-colors">
                                <h3 className="font-bold text-slate-900 mb-2">{free.title}</h3>
                                <p className="text-sm text-slate-600 mb-6">{free.description}</p>
                                <div className="space-y-2">
                                    <button className="w-full py-2 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg text-sm hover:ring-2 hover:ring-teal-100 transition-all flex items-center justify-center gap-2">
                                        <Download size={14} /> Download PDF
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. POSITIONING / WHY KITS */}
            <section className="py-20 bg-slate-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200/60">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why kits instead of one-off questions?</h2>
                            <p className="text-slate-600 text-lg">We get 100+ emails a week asking for "quick advice". Here is the truth:</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
                                <h3 className="font-bold text-teal-900 mb-4 flex items-center gap-2">
                                    <CheckCircle2 size={20} className="text-teal-600" /> The DIY Kit Route
                                </h3>
                                <ul className="space-y-3 text-teal-800/80 text-sm font-medium">
                                    <li className="flex gap-2"><span>•</span> Fixed, one-time cost ($29-$149)</li>
                                    <li className="flex gap-2"><span>•</span> Instant implementation</li>
                                    <li className="flex gap-2"><span>•</span> Repeatable system you own</li>
                                    <li className="flex gap-2"><span>•</span> Solves the "how-to" forever</li>
                                </ul>
                            </div>
                            <div className="opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Users size={20} className="text-slate-400" /> Custom Advisory
                                </h3>
                                <ul className="space-y-3 text-slate-500 text-sm">
                                    <li className="flex gap-2"><span>•</span> Expensive hourly rates ($350/hr+)</li>
                                    <li className="flex gap-2"><span>•</span> Scheduling wait times</li>
                                    <li className="flex gap-2"><span>•</span> Depends on consultant availability</li>
                                    <li className="flex gap-2"><span>•</span> Best for complex, unique strategy</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10 text-center pt-8 border-t border-slate-100">
                            <p className="text-slate-600 mb-4">If you genuinely need custom answers for a unique situation:</p>
                            <button
                                onClick={() => setIsServiceModalOpen(true)}
                                className="text-slate-900 font-bold underline hover:text-teal-600 transition-colors"
                            >
                                Book a paid advisory call
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. TRUST + POLICY */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-slate-900">What to expect</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                        <div>
                            <h4 className="font-bold text-slate-900 mb-2 flex items-center justify-center md:justify-start gap-2">
                                <FileText size={18} className="text-slate-400" /> License Terms
                            </h4>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                Single-user license. You can use these templates for one business entity you own. Please do not share or resell.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-2 flex items-center justify-center md:justify-start gap-2">
                                <ShieldCheck size={18} className="text-slate-400" /> Refund Policy
                            </h4>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                7-day money-back guarantee. If the kit doesn't save you time or money, email us for a full refund.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-2 flex items-center justify-center md:justify-start gap-2">
                                <Zap size={18} className="text-slate-400" /> Support Scope
                            </h4>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                Products are self-serve. Detailed instructions included. Custom accounting advice requires a paid consult.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. FAQ */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Common Questions</h2>
                    <div className="space-y-4">
                        {FAQS.map((faq, i) => (
                            <details key={i} className="group bg-white rounded-xl border border-slate-200 hover:border-teal-500 transition-colors">
                                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-slate-900">
                                    {faq.question}
                                    <ChevronDown className="text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" size={20} />
                                </summary>
                                <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. FINAL CTA */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Two ways to get your finances on track</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
                        <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <h3 className="text-xl font-bold mb-2">The DIY Route</h3>
                            <p className="text-slate-400 text-sm mb-6">I have time and just need the right templates to do it myself.</p>
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-full py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-xl transition-all">
                                Browse Kits & Templates
                            </button>
                        </div>
                        <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <h3 className="text-xl font-bold mb-2">The Done-For-You Route</h3>
                            <p className="text-slate-400 text-sm mb-6">I want a CPA to handle everything so I can focus on growth.</p>
                            <button onClick={() => setIsServiceModalOpen(true)} className="w-full py-4 bg-white text-slate-900 border border-white hover:bg-slate-200 font-bold rounded-xl transition-all">
                                Work with LedgerLogic
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* MODALS */}
            <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
            <OnboardingModal isOpen={isServiceModalOpen} onClose={() => setIsServiceModalOpen(false)} />
        </div>
    );
};

export default ResourcesView;
