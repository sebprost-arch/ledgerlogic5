"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import { BlogPost as BlogPostType } from '../data/blogData';
import { ConsultationCTA, LeadMagnetCTA } from '../components/BlogCTAs';
import AuthorBox from '../components/AuthorBox';
import OnboardingModal from '../components/OnboardingModal';
import ExitIntentModal from '../components/ExitIntentModal';
import { Linkedin, Twitter, Facebook, ChevronRight, BookOpen } from 'lucide-react';
import './BlogPost.css';

// Map of Support Pages -> Pillar Pages for explicit "Related Reading" callouts
const PILLAR_MAP: Record<string, { slug: string; title: string; category: string }> = {
    // Cluster A: Xero
    'should-i-switch-to-xero': { slug: '/tools/xero-canada', title: 'Xero for Canadian Businesses (2026)', category: 'Cloud Accounting' },
    'xero-pricing-for-canadian-businesses-what-you-need-to-know-before-subscribing': { slug: '/tools/xero-canada', title: 'Xero for Canadian Businesses (2026)', category: 'Cloud Accounting' },
    'can-i-use-xero-for-multiple-companies': { slug: '/tools/xero-canada', title: 'Xero for Canadian Businesses (2026)', category: 'Cloud Accounting' },
    'how-long-does-it-take-to-learn-xero': { slug: '/tools/xero-canada', title: 'Xero for Canadian Businesses (2026)', category: 'Cloud Accounting' },
    'streamline-your-invoicing-how-xero-transforms-the-process-for-canadian-companies': { slug: '/tools/xero-canada', title: 'Xero for Canadian Businesses (2026)', category: 'Cloud Accounting' },
    'quickbooks-vs-xero-a-comparative-analysis-for-canadian-smes': { slug: '/tools/xero-canada', title: 'Xero for Canadian Businesses (2026)', category: 'Cloud Accounting' },
    'is-xero-easy-to-use': { slug: '/tools/xero-canada', title: 'Xero for Canadian Businesses (2026)', category: 'Cloud Accounting' },

    // Cluster B: Incorporation
    'transferring-personal-assets-from-proprietorship-to-a-corporation-in-canada-section-85-rollover': { slug: 'tax-benefits-and-disadvantages-of-incorporating-in-canada', title: 'Tax Benefits & Disadvantages of Incorporating', category: 'Structuring' },
    'small-business-tax-rate-canada': { slug: 'tax-benefits-and-disadvantages-of-incorporating-in-canada', title: 'Tax Benefits & Disadvantages of Incorporating', category: 'Structuring' },
    'corporate-tax-filing-requirements-in-canada': { slug: 'tax-benefits-and-disadvantages-of-incorporating-in-canada', title: 'Tax Benefits & Disadvantages of Incorporating', category: 'Structuring' },
    'how-to-file-ontario-annual-return': { slug: 'tax-benefits-and-disadvantages-of-incorporating-in-canada', title: 'Tax Benefits & Disadvantages of Incorporating', category: 'Structuring' },

    // Cluster C: Holding Company
    'capital-dividend-account-example': { slug: 'what-is-a-holding-company-in-canada', title: 'What is a Holding Company in Canada?', category: 'Adv. Tax' },
    'corporate-tax-planning-strategies-in-canada': { slug: 'what-is-a-holding-company-in-canada', title: 'What is a Holding Company in Canada?', category: 'Adv. Tax' },
    'taxation-of-investment-income-in-a-canadian-corporation': { slug: 'what-is-a-holding-company-in-canada', title: 'What is a Holding Company in Canada?', category: 'Adv. Tax' },
    'are-dividends-taxable-in-canada': { slug: 'what-is-a-holding-company-in-canada', title: 'What is a Holding Company in Canada?', category: 'Adv. Tax' },

    // Cluster D: CRA
    'chances-of-getting-audited-by-cra': { slug: 'tax-filing-deadlines-in-canada-a-comprehensive-guide', title: 'Tax Filing Deadlines: Comprehensive Guide', category: 'Compliance' },
    'how-do-you-deal-with-a-cra-audit': { slug: 'tax-filing-deadlines-in-canada-a-comprehensive-guide', title: 'Tax Filing Deadlines: Comprehensive Guide', category: 'Compliance' },
    'does-cra-audit-your-bank-account': { slug: 'tax-filing-deadlines-in-canada-a-comprehensive-guide', title: 'Tax Filing Deadlines: Comprehensive Guide', category: 'Compliance' },
    'how-far-back-can-cra-audit': { slug: 'tax-filing-deadlines-in-canada-a-comprehensive-guide', title: 'Tax Filing Deadlines: Comprehensive Guide', category: 'Compliance' },
};

// Shortcode Parser Component
const BlogPostContent = ({
    content,
    onOpenModal,
    ctaContext
}: {
    content: string;
    onOpenModal: () => void;
    ctaContext?: {
        title: string;
        description: string;
        buttonText?: string;
        buttonLink?: string;
        secondaryButtonText?: string;
        secondaryButtonLink?: string;
        secondaryAction?: 'modal';
    }
}) => {

    // 1. Split by Consult CTA
    const parts = content.split('[[CTA_CONSULT]]');

    return (
        <div>
            {parts.map((part, index) => {
                // Now split each part by Lead Magnet CTA
                const subParts = part.split('[[CTA_LEAD_MAGNET]]');

                return (
                    <React.Fragment key={index}>
                        {subParts.map((subPart, subIndex) => (
                            <React.Fragment key={subIndex}>
                                <div dangerouslySetInnerHTML={{ __html: subPart }} />
                                {subIndex < subParts.length - 1 && <LeadMagnetCTA />}
                            </React.Fragment>
                        ))}
                        {index < parts.length - 1 && (
                            <ConsultationCTA
                                onOpenModal={onOpenModal}
                                title={ctaContext?.title}
                                description={ctaContext?.description}
                                buttonText={ctaContext?.buttonText}
                                buttonLink={ctaContext?.buttonLink}
                                secondaryButtonText={ctaContext?.secondaryButtonText}
                                secondaryButtonLink={ctaContext?.secondaryButtonLink}
                                onSecondaryClick={ctaContext?.secondaryAction === 'modal' ? onOpenModal : undefined}
                            />
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

interface BlogPostProps {
    post: BlogPostType & { content: string };
    relatedPosts: BlogPostType[];
}

const BlogPost: React.FC<BlogPostProps> = ({ post, relatedPosts }) => {
    const searchParams = useSearchParams();

    // Exit Intent Logic for specific post
    const [showExitPopup, setShowExitPopup] = useState(false);
    const [hasShownExitPopup, setHasShownExitPopup] = useState(false);

    // Target Regulation 105 content cluster (Specific Override)
    const reg105ClusterSlugs = [
        'treaty-based-return-for-non-resident-corporations-operating-in-canada-schedule-91-and-97',
        'canadian-client-withheld-15-percent-invoice-refund',
        'regulation-105-refund-us-companies-treaty-t2',
        'regulation-105-waiver-application-canada',
        'regulation-105-vs-regulation-102-canada',
        'quebec-non-resident-withholding-refund-tp-1015',
        'nr4-slip-vs-t4a-nr-proof-of-withholding',
        'regulation-105-refund-filing-deadlines-canada'
    ];

    const getPostCategory = (post: BlogPostType) => {
        if (reg105ClusterSlugs.includes(post.slug)) return 'REG105';

        const title = post.title.toLowerCase();

        // General Xero Signals (Priority 1)
        if (title.match(/xero|pricing/)) return 'GENERAL_XERO';

        // Migration Signals
        if (title.match(/switch|migration|move from|sage|quickbooks|freshbooks|wave/)) return 'MIGRATION';
        // Troubleshooting Signals
        if (title.match(/how to|fix|error|audit|guide|help|troubleshoot/)) return 'TROUBLESHOOTING';

        return 'DEFAULT';
    };

    const postCategory = getPostCategory(post);

    // Dynamic CTA Context Logic
    const { ctaContext, exitIntentContext } = React.useMemo(() => {
        // Affiliate Link (Direct)
        const xeroOfferLink = "https://xero5440.partnerlinks.io/lc4v5f7lmse2";

        // 0. SPECIFIC OVERRIDE for "Can I Use Xero for Multiple Companies"
        if (post.slug === 'can-i-use-xero-for-multiple-companies') {
            return {
                ctaContext: {
                    title: "Get 6 Months of Xero at 90% Off",
                    description: "Managing multiple companies? Save big on subscription costs with our exclusive partner offer.",
                    buttonText: "Claim Xero Offer",
                    buttonLink: xeroOfferLink,
                    secondaryButtonText: "Talk to a CPA about your setup",
                    secondaryAction: 'modal' as const
                },
                exitIntentContext: {
                    title: "Claim 6 months at 90% off Xero",
                    description: "For Canadian businesses. New Xero subscriptions only. Eligibility depends on Xero’s terms.",
                    buttonText: "Get the 90% off offer",
                    buttonLink: xeroOfferLink,
                    secondaryButtonText: "Not now",
                    secondaryAction: 'close' as const, // Custom action identifier
                    footerDisclaimer: "We may earn a commission at no extra cost to you.",
                    bottomLinkText: "Need help setting it up? Contact us",
                    bottomLinkAction: 'modal' as const
                }
            };
        }

        // 1. Determine Base Contexts (Category Defaults)
        let computedCtaContext;
        let computedExitIntentContext;

        if (postCategory === 'REG105') {
            const context = {
                title: "Claim Your 15% Withholding Tax Refund",
                description: "Did a Canadian client withhold 15% of your invoice? We help US companies get that money back fast.",
                buttonText: "Check Refund Eligibility",
                buttonLink: "/regulation-105-refund"
            };
            computedCtaContext = context;
            computedExitIntentContext = { ...context, title: "Before you go..." };
        } else if (postCategory === 'MIGRATION') {
            computedCtaContext = {
                title: "Ready to Switch to Xero?",
                description: "We handle the entire migration process from QuickBooks or Sage. Zero downtime, zero data loss.",
                buttonText: "Book our Migration Service",
                secondaryButtonText: "Claim 90% Off Xero",
                secondaryButtonLink: xeroOfferLink
            };
            computedExitIntentContext = {
                title: "Thinking About Switching?",
                description: "Don't struggle with legacy software. Let us handle your migration to Xero.",
                buttonText: "Book Migration Call",
                buttonAction: 'modal',
                secondaryButtonText: "Or claim 90% off Xero",
                secondaryButtonLink: xeroOfferLink
            };
        } else if (postCategory === 'GENERAL_XERO') {
            computedCtaContext = {
                title: "Get 6 Months of Xero at 90% Off",
                description: "As Xero Partners, we have exclusive access to Canada's best software deal.",
                buttonText: "Claim Xero Offer",
                buttonLink: xeroOfferLink,
                secondaryButtonText: "Talk to a CPA first",
                secondaryAction: 'modal' as const
            };
            computedExitIntentContext = {
                title: "Don't Miss This Xero Deal",
                description: "Get 90% off for 6 months when you switch today. Exclusive partner offer.",
                buttonText: "Claim 90% Off Offer",
                buttonLink: xeroOfferLink,
                secondaryButtonText: "I have questions (Book Call)",
                secondaryAction: 'modal' as const
            };
        } else if (postCategory === 'TROUBLESHOOTING') {
            computedCtaContext = {
                title: "Struggling with this Issue?",
                description: "Our CPAs can fix this for you fast. Stop wasting time on DIY accounting.",
                buttonText: "Book a Support Call",
                secondaryButtonText: "See Xero Hub",
                secondaryButtonLink: "/tools/xero-canada"
            };
            computedExitIntentContext = undefined;
        } else {
            // Default Fallback
            computedCtaContext = {
                title: "Ready to Simplify Your Finances?",
                description: "Stop stressing about your numbers. Let our team handle your accounting so you can focus on leading your business.",
                buttonText: "Book a Free Consult",
                buttonLink: undefined,
                secondaryAction: undefined
            };
            computedExitIntentContext = undefined;
        }

        // 2. Explicit Override from Frontmatter (Applied ONLY to CTA, preserving Exit Intent)
        if (post.midContentCta) {
            computedCtaContext = post.midContentCta;
        }

        return {
            ctaContext: computedCtaContext,
            exitIntentContext: computedExitIntentContext
        };

    }, [post, postCategory]);

    useEffect(() => {
        // Exit Intent Logic for ALL posts
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasShownExitPopup && exitIntentContext) {
                // Check Session Storage (Frequency Cap)
                const hasSessionShown = sessionStorage.getItem('ledgerLogic_exitIntentShown');

                if (!hasSessionShown) {
                    setShowExitPopup(true);
                    setHasShownExitPopup(true);
                    sessionStorage.setItem('ledgerLogic_exitIntentShown', 'true');
                }
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, [post.slug, hasShownExitPopup, exitIntentContext]);

    const backParams = searchParams?.toString() ? `?${searchParams.toString()}` : '';

    // Scroll Progress
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Active TOC Section
    const [activeSection, setActiveSection] = useState<string>('');

    // Onboarding Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);




    useEffect(() => {
        let rafId: number;

        const handleScroll = () => {
            // Use requestAnimationFrame for performance
            rafId = requestAnimationFrame(() => {
                // Get all section elements and their current positions (absolute)
                const currentScrollY = window.scrollY;
                const sectionElements = post.toc
                    .map(item => {
                        const element = document.getElementById(item.id);
                        if (!element) return null;

                        // Use getBoundingClientRect().top + window.scrollY for absolute position
                        // This avoids issues with relative parents
                        const rect = element.getBoundingClientRect();
                        const absoluteTop = rect.top + currentScrollY;

                        return { id: item.id, absoluteTop };
                    })
                    .filter(item => item !== null) as { id: string, absoluteTop: number }[];

                if (sectionElements.length === 0) return;

                // Sort by vertical position (critical for correct "current" detection)
                sectionElements.sort((a, b) => a.absoluteTop - b.absoluteTop);

                // Offset for sticky header (150px buffer)
                const triggerPoint = currentScrollY + 150;

                // Find the active section
                // We want the last section whose TOP is ABOVE our trigger point
                let currentId = '';
                for (const section of sectionElements) {
                    if (section.absoluteTop <= triggerPoint) {
                        currentId = section.id;
                    } else {
                        // Since they are sorted, once we find one below us, we can stop
                        break;
                    }
                }

                // Edge case: bottom of page
                // If we're at the very bottom, just select the last item
                const isBottom = (window.innerHeight + currentScrollY) >= document.body.offsetHeight - 50;
                if (isBottom && sectionElements.length > 0) {
                    currentId = sectionElements[sectionElements.length - 1].id;
                }

                setActiveSection(currentId);
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Check on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [post.toc]);

    // ISO Date for Schema
    const isoDate = new Date(post.date).toISOString();

    return (
        <>
            {/* READING PROGRESS BAR */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-teal-500 origin-left z-5000"
                style={{ scaleX, zIndex: 9999 }}
            />

            <article className="blog-post-premium">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BlogPosting",
                            "headline": post.title,
                            "image": [
                                `https://ledgerlogic.ca${post.image}`
                            ],
                            "datePublished": isoDate,
                            "dateModified": isoDate, // Should track actual modification date in future
                            "author": [{
                                "@type": "Person",
                                "name": post.author,
                                "url": "https://ledgerlogic.ca/about"
                            }],
                            "description": post.excerpt,
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": `https://ledgerlogic.ca/blog/${post.slug}`
                            }
                        })
                    }}
                />

                {/* BREADCRUMB SCHEMA */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [{
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://ledgerlogic.ca"
                            }, {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Insights",
                                "item": "https://ledgerlogic.ca/blog"
                            }, {
                                "@type": "ListItem",
                                "position": 3,
                                "name": post.title
                            }]
                        })
                    }}
                />

                {/* 1. SPLIT HERO HEADER */}
                <header className="premium-post-header">
                    <div className="post-container">
                        <div className="hero-grid">
                            <div className="blog-hero-content">
                                <div className="back-nav mb-4">
                                    <Link href={`/blog${backParams}`} className="back-link">
                                        &larr; Back to Insights
                                    </Link>
                                </div>

                                <div className="header-badges mb-4">
                                    <span className="premium-cat-badge">{post.category}</span>
                                </div>

                                <h1 className="premium-post-title">{post.title}</h1>

                                <div className="premium-post-meta">
                                    <span className="meta-text">By <strong>{post.author}</strong> <span className="text-teal-600 text-[10px] font-bold uppercase ml-1.5 bg-teal-50 px-2 py-0.5 rounded border border-teal-100 align-middle">CPA, Ex-CRA</span></span>
                                    <span className="meta-dot">·</span>
                                    <span className="meta-text">{post.date}</span>
                                    <span className="meta-dot">·</span>
                                    <span className="meta-text">{post.readTime} read</span>
                                </div>
                            </div>

                            <div className="hero-image-wrapper">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={1200}
                                    height={675}
                                    priority
                                    className="premium-hero-img"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                    </div>
                </header>

                {/* 3. CONTENT LAYOUT */}
                <div className="post-container">
                    <div className="premium-layout">

                        {/* SIDEBAR (TOC + Share) */}
                        <aside className="premium-sidebar">
                            <div className="sticky-sidebar-content">
                                <div className="toc-widget">
                                    <h4 className="widget-title">Table of Contents</h4>
                                    <ul className="premium-toc-list">
                                        {post.toc.map((item) => (
                                            <li key={item.id}>
                                                <a
                                                    href={`#${item.id}`}
                                                    className={activeSection === item.id ? 'active' : ''}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                                                    }}
                                                >
                                                    {item.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="share-widget mt-8">
                                    <h4 className="widget-title">Share</h4>
                                    <div className="share-buttons">
                                        <button className="share-btn twitter" aria-label="Share on Twitter" onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://ledgerlogic.ca/blog/${post.slug}`)}`, '_blank')}>
                                            <Twitter size={18} />
                                        </button>
                                        <button className="share-btn linkedin" aria-label="Share on LinkedIn" onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://ledgerlogic.ca/blog/${post.slug}`)}`, '_blank')}>
                                            <Linkedin size={18} />
                                        </button>
                                        <button className="share-btn facebook" aria-label="Share on Facebook" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://ledgerlogic.ca/blog/${post.slug}`)}`, '_blank')}>
                                            <Facebook size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* MAIN CONTENT */}
                        <main className="premium-content">
                            {/* AT A GLANCE COMPONENT */}
                            {post.atAGlance && (
                                <div className="bg-white border text-center border-slate-200 rounded-xl shadow-sm overflow-hidden mb-12 scroll-mt-32" id="at-a-glance">
                                    <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-4 flex items-center justify-center gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                                        <h3 className="text-white font-bold m-0 text-lg tracking-wide uppercase text-sm">{post.atAGlance.title || "At a Glance"}</h3>
                                    </div>
                                    <div className="p-6 md:p-8 bg-slate-50/50">
                                        <div className="grid gap-6">
                                            {post.atAGlance.items.map((item, idx) => (
                                                <div key={idx} className="flex flex-col md:grid md:grid-cols-[140px_1fr] md:gap-6 items-start text-left group">
                                                    <span className="font-bold text-slate-900 text-sm uppercase tracking-wide py-1 px-3 bg-slate-200/60 rounded-full md:bg-transparent md:p-0 md:rounded-none md:text-right md:w-full md:mt-0.5">{item.label}</span>
                                                    <span className="text-slate-700 leading-relaxed mt-2 md:mt-0 border-l-2 border-slate-200 pl-4 md:border-none md:pl-0">{item.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* RELATED PILLAR CALLOUT */}
                            {PILLAR_MAP[post.slug] && (
                                <div className="mb-8 not-prose">
                                    <Link href={PILLAR_MAP[post.slug].slug.startsWith('/') ? PILLAR_MAP[post.slug].slug : `/blog/${PILLAR_MAP[post.slug].slug}`} className="group block bg-teal-50 border border-teal-100 rounded-xl p-5 hover:border-teal-300 hover:shadow-md transition-all">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-teal-100 p-2.5 rounded-lg text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors mt-0.5">
                                                <BookOpen size={20} />
                                            </div>
                                            <div>
                                                <span className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-1 block">
                                                    Deep Dive: {PILLAR_MAP[post.slug].category}
                                                </span>
                                                <h4 className="text-slate-900 font-bold text-lg group-hover:text-teal-700 transition-colors">
                                                    {PILLAR_MAP[post.slug].title} &rarr;
                                                </h4>
                                                <p className="text-slate-600 text-sm mt-1">
                                                    Read our comprehensive guide on this topic.
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )}

                            <div className="content-body premium-prose">
                                <BlogPostContent
                                    content={post.content}
                                    onOpenModal={() => setIsModalOpen(true)}
                                    ctaContext={ctaContext}
                                />
                            </div>

                            {/* Author Box */}
                            <AuthorBox author={post.author} />
                        </main>
                    </div>
                </div>
            </article>

            {/* RELATED POSTS SECTION */}
            <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-12 pb-24 border-t border-slate-200 -mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 lg:px-16 overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-40" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.15) 1px, transparent 0)',
                    backgroundSize: '24px 24px'
                }}></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                            Continue Reading
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-3">
                            Read Next
                        </h3>
                        <p className="text-slate-600 text-lg">
                            More insights to help your Canadian business grow
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {relatedPosts.map((related, index) => (
                            <Link href={`/blog/${related.slug}`} key={related.id} className="group block">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-slate-100 group-hover:border-teal-200 group-hover:-translate-y-2"
                                >
                                    <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                                        <Image
                                            src={related.image}
                                            alt={related.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                        />
                                        {/* Gradient overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-800 uppercase tracking-wide shadow-lg border border-white/20">
                                                {related.category}
                                            </span>
                                        </div>

                                        {/* Read time badge */}
                                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                                                {related.readTime}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2 leading-tight">
                                            {related.title}
                                        </h4>
                                        <p className="text-slate-600 text-sm line-clamp-3 flex-1 leading-relaxed">
                                            {related.excerpt}
                                        </p>

                                        {/* Author and CTA */}
                                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
                                            <span className="text-xs text-slate-500 font-medium">
                                                {related.author}
                                            </span>
                                            <div className="flex items-center text-teal-600 text-sm font-bold group-hover:text-teal-700">
                                                Read More
                                                <ChevronRight size={16} className="ml-1 group-hover:translate-x-1.5 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CONTEXTUAL FOOTER CTA */}
            <section className="bg-white py-20 border-t border-slate-200 -mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 lg:px-16">
                <div className="post-container">
                    <div className={`newsletter-cta max-w-4xl mx-auto shadow-sm border-none text-white ${ctaContext.buttonText === 'Talk to an E-Com Expert' ? 'bg-indigo-900' :
                        ctaContext.buttonText === 'Book a Tax Review' || ctaContext.buttonText === 'Book a Tax Plan Review' ? 'bg-slate-900' :
                            'bg-teal-900'
                        }`}>
                        <h3 className="text-white">{ctaContext.title}</h3>
                        <p className={`${ctaContext.buttonText === 'Talk to an E-Com Expert' ? 'text-indigo-100' :
                            ctaContext.buttonText === 'Book a Tax Review' || ctaContext.buttonText === 'Book a Tax Plan Review' ? 'text-slate-300' :
                                'text-teal-100'
                            } mb-8`}>{ctaContext.description}</p>
                        {ctaContext.buttonLink ? (
                            <Link
                                href={ctaContext.buttonLink}
                                className={`inline-flex items-center justify-center px-8 py-4 text-base font-bold transition-all bg-white rounded-lg hover:shadow-lg hover:-translate-y-0.5 ${ctaContext.buttonText === 'Talk to an E-Com Expert' ? 'text-indigo-900 hover:bg-indigo-50' :
                                    ctaContext.buttonText === 'Book a Tax Review' || ctaContext.buttonText === 'Book a Tax Plan Review' ? 'text-slate-900 hover:bg-slate-100' :
                                        'text-teal-900 hover:bg-teal-50'
                                    }`}
                            >
                                {ctaContext.buttonText}
                            </Link>
                        ) : (
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className={`inline-flex items-center justify-center px-8 py-4 text-base font-bold transition-all bg-white rounded-lg hover:shadow-lg hover:-translate-y-0.5 ${ctaContext.buttonText === 'Talk to an E-Com Expert' ? 'text-indigo-900 hover:bg-indigo-50' :
                                    ctaContext.buttonText === 'Book a Tax Review' || ctaContext.buttonText === 'Book a Tax Plan Review' ? 'text-slate-900 hover:bg-slate-100' :
                                        'text-teal-900 hover:bg-teal-50'
                                    }`}
                            >
                                {ctaContext.buttonText}
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* Onboarding Modal */}
            <OnboardingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <ExitIntentModal
                isOpen={showExitPopup}
                onClose={() => setShowExitPopup(false)}
                title={exitIntentContext?.title || "Before you go..."}
                description={exitIntentContext?.description || "Book a free discovery call to see how we can help your business grow."}
                buttonText={exitIntentContext?.buttonText || "Book a Free Consult"}
                buttonLink={exitIntentContext?.buttonLink}
                onPrimaryClick={/* If buttonAction is 'modal' or undefined/null AND no link */
                    (exitIntentContext?.buttonAction === 'modal' || (!exitIntentContext?.buttonLink && !exitIntentContext?.buttonAction))
                        ? () => { setShowExitPopup(false); setIsModalOpen(true); }
                        : undefined
                }
                secondaryButtonText={exitIntentContext?.secondaryButtonText}
                secondaryButtonLink={exitIntentContext?.secondaryButtonLink}
                secondaryButtonAction={
                    exitIntentContext?.secondaryAction === 'modal'
                        ? () => { setShowExitPopup(false); setIsModalOpen(true); }
                        : exitIntentContext?.secondaryAction === 'close'
                            ? () => setShowExitPopup(false)
                            : undefined
                }
                footerDisclaimer={exitIntentContext?.footerDisclaimer}
                bottomLinkText={exitIntentContext?.bottomLinkText}
                bottomLinkAction={
                    exitIntentContext?.bottomLinkAction === 'modal'
                        ? () => { setShowExitPopup(false); setIsModalOpen(true); }
                        : undefined
                }
            />
        </>
    );
};

export default BlogPost;
