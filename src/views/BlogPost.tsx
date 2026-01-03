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
import { Linkedin, Twitter, Facebook, ChevronRight } from 'lucide-react';
import './BlogPost.css';

// Shortcode Parser Component
const BlogPostContent = ({ content, onOpenModal }: { content: string; onOpenModal: () => void }) => {
    // Regex to find shortcodes
    // We split the content by specific known shortcodes based on strings

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
                        {index < parts.length - 1 && <ConsultationCTA onOpenModal={onOpenModal} />}
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

                // Fallback: If no section is triggered (e.g. at the very top), select nothing or the first one?
                // Usually we want nothing active until the first header is reached.

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
                                    <span className="meta-text">By <strong>{post.author}</strong></span>
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

                            <div className="content-body premium-prose">
                                <BlogPostContent content={post.content} onOpenModal={() => setIsModalOpen(true)} />
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

            {/* NEWSLETTER CTA - Full Width */}
            <section className="bg-white py-20 border-t border-slate-200 -mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 lg:px-16">
                <div className="post-container">
                    <div className="newsletter-cta max-w-4xl mx-auto shadow-sm">
                        <h3>Get Smarter About Your Finances</h3>
                        <p>Monthly insights on Canadian accounting, tax strategy, and compliance.</p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="work@email.com" />
                            <button className="btn-subscribe">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Onboarding Modal */}
            <OnboardingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default BlogPost;
