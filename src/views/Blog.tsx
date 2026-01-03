"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Blog.css';

const categories = [
    'All',
    'Accounting Tools',
    'Business Management',
    'Tax'
];

const Blog: React.FC = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Derive state from URL
    const searchQuery = searchParams?.get('q') || '';
    const selectedCategory = searchParams?.get('category') || 'All';
    const currentPage = parseInt(searchParams?.get('page') || '1', 10);

    // Update Filter Handlers
    const updateSearch = (val: string) => {
        const newParams = new URLSearchParams(searchParams?.toString());
        if (val) newParams.set('q', val); else newParams.delete('q');
        newParams.set('page', '1'); // Reset page
        router.replace(`?${newParams.toString()}`);
    };

    const updateCategory = (cat: string) => {
        const newParams = new URLSearchParams(searchParams?.toString());
        if (cat !== 'All') newParams.set('category', cat); else newParams.delete('category');
        newParams.delete('q'); // Optional: clear search on category switch? Or keep it? Keeping it is better combination.
        // Wait, existing logic kept them independent. I'll keep them independent.
        // Actually, existing logic:
        // "Reset page whenever filters change"
        newParams.set('page', '1');
        router.replace(`?${newParams.toString()}`);
    };

    // Filter Logic
    const filteredPosts = useMemo(() => {
        let result = blogPosts;

        // 1. Search
        if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase();
            result = result.filter(post =>
                post.title.toLowerCase().includes(lowerQuery) ||
                post.excerpt.toLowerCase().includes(lowerQuery) ||
                post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
            );
        }

        // 2. Category
        if (selectedCategory !== 'All') {
            result = result.filter(post => post.category === selectedCategory);
        }

        // Default Sort: Newest first
        result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        return result;
    }, [searchQuery, selectedCategory]);

    const isDefaultView = !searchQuery && selectedCategory === 'All';

    // ----------------------------------------------------------------
    // FEATURED & SIDEBAR LOGIC (Only active in Default View)
    // ----------------------------------------------------------------

    // 48. Main Featured Post
    const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];

    // Safety check: If no posts exist, return null or loading
    if (!featuredPost) {
        return <div className="p-20 text-center">Loading insights...</div>;
    }

    // 2. Sidebar Posts (Next 3 posts that are NOT the featured one)
    const sidebarPosts = useMemo(() => {
        return blogPosts
            .filter(p => p.id !== featuredPost.id)
            .slice(0, 3);
    }, [featuredPost]);

    // 3. Grid Posts (The rest)
    // If default view, exclude Featured and Sidebar posts from the grid
    // If filtering, show ALL matching results (ignoring "Featured" layout)
    const availablePosts = useMemo(() => {
        if (isDefaultView) {
            const excludedIds = [featuredPost.id, ...sidebarPosts.map(p => p.id)];
            return filteredPosts.filter(p => !excludedIds.includes(p.id));
        }
        return filteredPosts;
    }, [isDefaultView, filteredPosts, featuredPost, sidebarPosts]);


    // ----------------------------------------------------------------
    // PAGINATION
    // ----------------------------------------------------------------
    const POSTS_PER_PAGE = 9;
    // Pagination and derived state handling replaces old effects

    const totalPages = Math.ceil(availablePosts.length / POSTS_PER_PAGE);
    const displayPosts = availablePosts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    const handlePageChange = (page: number) => {
        const newParams = new URLSearchParams(searchParams?.toString());
        newParams.set('page', page.toString());
        router.replace(`?${newParams.toString()}`);
        window.scrollTo({ top: 400, behavior: 'smooth' });
    };

    return (
        <div className="blog-page-premium">


            <Navbar />

            <div className="premium-container">

                {/* PREMIUM HERO SECTION (SPLIT LAYOUT) */}
                {isDefaultView && (
                    <section className="premium-hero-split">

                        {/* LEFT: Main Featured */}
                        <div className="hero-main-card">
                            <Link
                                href={`/blog/${featuredPost.slug}?${searchParams?.toString()}`}
                                className="hero-main-img-link"
                            >
                                <Image
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    width={1000}
                                    height={563}
                                    priority
                                    className="hero-main-img"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </Link>
                            <div className="hero-main-content">
                                <div className="hero-badges mb-3">
                                    <span className="premium-cat-badge">{featuredPost.category}</span>
                                    <span className="premium-role-badge">Featured</span>
                                </div>
                                <h1 className="hero-main-title">
                                    <Link href={`/blog/${featuredPost.slug}?${searchParams?.toString()}`}>{featuredPost.title}</Link>
                                </h1>
                                <p className="hero-main-excerpt">{featuredPost.excerpt}</p>
                                <div className="hero-main-meta">
                                    <span className="meta-author">By {featuredPost.author}</span>
                                    <span className="meta-dot">·</span>
                                    <span className="meta-date">{featuredPost.date}</span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Editor's Picks Sidebar */}
                        <div className="hero-sidebar">
                            <h3 className="sidebar-header">Editor's Picks</h3>
                            <div className="sidebar-list">
                                {sidebarPosts.map((post) => (
                                    <div key={post.id} className="sidebar-item">
                                        <div className="sidebar-item-content">
                                            <span className="sidebar-cat">{post.category}</span>
                                            <Link href={`/blog/${post.slug}?${searchParams?.toString()}`} className="sidebar-title-link">
                                                <h4 className="sidebar-title">{post.title}</h4>
                                            </Link>
                                            <span className="sidebar-date">{post.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </section>
                )}

                {/* STICKY NAV & FILTER BAR */}
                <div className="sticky-filter-bar">
                    <div className="filter-content">
                        <div className="category-pills">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                                    onClick={() => updateCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="search-pill">
                            <Search size={16} className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search insights..."
                                value={searchQuery}
                                onChange={(e) => updateSearch(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* MAGAZINE GRID */}
                <section className="posts-grid-section">
                    {!isDefaultView && (
                        <div className="results-label">
                            {availablePosts.length} Result{availablePosts.length !== 1 ? 's' : ''}
                        </div>
                    )}

                    <div className="magazine-grid">
                        <AnimatePresence mode='wait'>
                            {displayPosts.map((post) => (
                                <motion.div
                                    key={post.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="magazine-card-wrapper"
                                >
                                    <div className="magazine-card">
                                        <Link href={`/blog/${post.slug}?${searchParams?.toString()}`} className="card-media">
                                            <span className="card-category-absolute">{post.category}</span>
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                                className="object-cover"
                                            />
                                        </Link>
                                        <div className="card-body">
                                            <Link href={`/blog/${post.slug}?${searchParams?.toString()}`} className="card-title-link">
                                                <h3 className="card-title">{post.title}</h3>
                                            </Link>
                                            <p className="card-text">{post.excerpt.substring(0, 120)}...</p>
                                            <div className="card-footer-meta">
                                                <div className="meta-left">
                                                    <Calendar size={14} className="meta-icon" />
                                                    <span>{post.date}</span>
                                                </div>
                                                <div className="meta-right">
                                                    <Clock size={14} className="meta-icon" />
                                                    <span>{post.readTime}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {availablePosts.length === 0 && (
                            <div className="no-results">
                                <p>No articles found matching your criteria.</p>
                                <button
                                    onClick={() => router.replace('?')}
                                    className="text-accent underline"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>

                    {/* PAGINATION CONTROLS */}
                    {totalPages > 1 && (
                        <div className="pagination-controls">
                            <button
                                className="page-btn"
                                disabled={currentPage === 1}
                                onClick={() => handlePageChange(currentPage - 1)}
                            >
                                &larr; Prev
                            </button>

                            <div className="pagination-dropdown-wrapper">
                                <span className="page-info-label">Page</span>
                                <select
                                    className="page-select"
                                    value={currentPage}
                                    onChange={(e) => handlePageChange(Number(e.target.value))}
                                >
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                                        <option key={pageNum} value={pageNum}>
                                            {pageNum}
                                        </option>
                                    ))}
                                </select>
                                <span className="page-info-total">of {totalPages}</span>
                            </div>

                            <button
                                className="page-btn"
                                disabled={currentPage === totalPages}
                                onClick={() => handlePageChange(currentPage + 1)}
                            >
                                Next &rarr;
                            </button>
                        </div>
                    )}
                </section>

            </div>

            <Footer />
        </div>
    );
};

export default Blog;
