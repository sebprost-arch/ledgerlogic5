"use client";

import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '../data/blogData';
import { ConsultationCTA, LeadMagnetCTA, QuickSummary } from '../components/BlogCTAs';
import AuthorBox from '../components/AuthorBox';
import './BlogPost.css';

// Shortcode Parser Component
const BlogPostContent = ({ content }: { content: string }) => {
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
                        {index < parts.length - 1 && <ConsultationCTA />}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

interface BlogPostProps {
    slug: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ slug }) => {
    // const { slug } = useParams<{ slug: string }>();
    const searchParams = useSearchParams();
    // Reconstruct query string from search params
    const backParams = searchParams?.toString() ? `?${searchParams.toString()}` : '';
    const postMetadata = blogPosts.find((p) => p.slug === slug);
    const [content, setContent] = React.useState<string>('');
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);

        const loadContent = async () => {
            if (!slug) return;
            try {
                // Dynamic import of the content
                const postData = await import(`../data/posts/${slug}.json`);
                setContent(postData.content);
            } catch (err) {
                console.error("Failed to load post content:", err);
                setContent("<p>Failed to load content.</p>");
            } finally {
                setIsLoading(false);
            }
        };

        if (postMetadata) {
            loadContent();
        } else {
            setIsLoading(false);
        }
    }, [slug, postMetadata]);

    if (!postMetadata) {
        return (
            <div className="container py-20 text-center">
                <h2>Post not found</h2>
                <Link href="/blog" className="btn btn-primary mt-4">Return to Blog</Link>
            </div>
        );
    }

    // Use metadata for initial render, content when loaded
    const post = { ...postMetadata, content: content };

    return (
        <>
            <article className="blog-post-premium">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": post.title,
                            "image": [
                                `https://ledgerlogic.ca${post.image}`
                            ],
                            "datePublished": post.date,
                            "dateModified": post.date,
                            "author": [{
                                "@type": "Person",
                                "name": post.author,
                                "url": "https://ledgerlogic.ca/about" // Placeholder or actual link if available
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
                                                <a href={`#${item.id}`}>{item.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="share-widget mt-8">
                                    <h4 className="widget-title">Share</h4>
                                    <div className="share-buttons">
                                        <button className="share-btn" aria-label="Share on LinkedIn">LN</button>
                                        <button className="share-btn" aria-label="Share on X (formerly Twitter)">X</button>
                                        <button className="share-btn" aria-label="Share on Facebook">FB</button>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* MAIN ARTICLE */}
                        <div className="premium-content-col">
                            <div className="premium-prose">
                                {isLoading ? (
                                    <div className="py-20 text-center text-slate-400">Loading article...</div>
                                ) : (
                                    <>
                                        <BlogPostContent content={post.content || ''} />
                                        <AuthorBox author={post.author} />
                                    </>
                                )}
                            </div>

                            {/* NEWSLETTER CTA */}
                            <div className="newsletter-cta">
                                <h3>Join 2,000+ Canadian Founders</h3>
                                <p>Get the latest financial strategies delivered to your inbox.</p>
                                <div className="newsletter-form">
                                    <input type="email" placeholder="work@email.com" />
                                    <button className="btn-subscribe">Subscribe</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </article>
        </>
    );
};

export default BlogPost;
