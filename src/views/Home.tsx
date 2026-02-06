"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Users, Code, PieChart, FileText, Rocket, ChevronDown, ChevronUp, X, Check, Star, Settings, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import HeroBackground from '../components/HeroBackground';
import sebProstImg from '../assets/seb-prost-optimized.png';
import TalkSoonLogo from '../assets/logos/talksoon.avif';
import VaraiLogo from '../assets/logos/varailogoe.webp';
import RethinkLogo from '../assets/logos/rethink-logo-light-2.png';
import GreenGraphiteLogo from '../assets/logos/green graphite tech.png';
import SproutLogo from '../assets/logos/Sprout-.jpg';
import SentinelLogo from '../assets/logos/TheSentinel_Logo_White@2x-640x340.webp';
import OnlyTheBestLogo from '../assets/logos/only the best.avif';
import EntrepriseRainvilleLogo from '../assets/logos/entreprise j rainville.avif';

// Lazy load OnboardingModal since it's only shown on user interaction
const OnboardingModal = dynamic(() => import('../components/OnboardingModal'), {
    ssr: false,
    loading: () => null
});

// Enhanced Clients Array with Logo Fixes based on extraction
const clients = [
    { name: "TalkSoon", logo: TalkSoonLogo, className: "force-black" },
    { name: "Varai", logo: VaraiLogo, className: "force-black" },
    { name: "Rethink", logo: RethinkLogo, className: "rethink-fixed" },
    { name: "Green Graphite", logo: GreenGraphiteLogo, className: "logo-xl green-graphite-fixed" }, // "logo-xl" found in extraction
    { name: "Sprout", logo: SproutLogo, className: "blend-mode" },
    { name: "Entreprise J. Rainville", logo: EntrepriseRainvilleLogo, className: "force-black" },
    { name: "Sentinel", logo: SentinelLogo, className: "force-black" },
    { name: "Only The Best", logo: OnlyTheBestLogo, className: "blend-mode-dark" },
];

// Features - Restored 4 cards
const features = [
    {
        icon: <Settings className="text-accent" size={32} />, // Process Optimization icon (inferred)
        title: "Process Optimization",
        desc: <>We review your entire workflow from how you get paid to how you pay bills. Then we automate the busy work so your business runs on autopilot.</>
    },
    {
        icon: <TrendingUp className="text-accent" size={32} />, // Modern Tech Stack icon (inferred)
        title: "Modern Tech Stack",
        desc: <>We implement best-in-class tools like Xero, Ramp, and Dext. Real-time data means you always know exactly where your business stands.</>
    },
    {
        icon: <FileText className="text-accent" size={32} />, // Bookkeeping & Tax icon
        title: "Bookkeeping & Tax",
        desc: <>With the right tools, compliance becomes reliable. We keep your books pristine and optimize your tax strategy year-round, not just at deadline.</>
    },
    {
        icon: <PieChart className="text-accent" size={32} />, // Virtual CFO icon
        title: "Virtual CFO & Advisory",
        desc: <>Once the data is clean, we help you use it. Strategic budgeting, cash flow forecasting, and tax planning to fuel your growth.</>
    }
];

// Extracted Testimonials
const testimonials = [
    {
        quote: "LedgerLogic streamlined our Xero setup and financial operations. Finally, accounting that moves as fast as we do.",
        author: "Ben Archambault",
        role: "Founder, Talksoon Inc.",
        rating: 5
    },
    {
        quote: "As a creative, I dreaded tax season. Seb and his team simplified everything. Now I focus on design, not receipts.",
        author: "Louis Fortier",
        role: "Owner, Louis Fortier Design",
        rating: 5
    },
    {
        quote: "They are incredibly easy to work with. Responses are prompt, collaboration is seamless.",
        author: "Joanie Mercier",
        role: "Owner, Wildberry Pelvic Health Physiotherapy",
        rating: 5
    }
];

// Verified FAQs
const faqs = [
    {
        question: "How does the monthly fixed price work?",
        answer: <>We assess your transaction volume and complexity to create a flat monthly rate. You get unlimited support and no surprise bills at year-end.</>,
        icon: <Settings size={20} className="text-accent" />
    },
    {
        question: "Do I need to switch my accounting software?",
        answer: <>We work exclusively with modern cloud tools like Xero and QBO. If you're on desktop tech, we'll handle the migration for you.</>,
        icon: <Code size={20} className="text-accent" />
    },
    {
        question: "Is it easy to switch to LedgerLogic?",
        answer: <>Yes. We have a streamlined onboarding process. We contact your previous accountant to get the files, so you don't have to have awkward conversations. View our <Link href="/pricing">pricing</Link> to get started.</>,
        icon: <CheckCircle size={20} className="text-accent" />
    },
    {
        question: "Will I get a dedicated CPA?",
        answer: <>Absolutely. You'll be matched with a dedicated account manager who knows your business inside out. No call centers, ever.</>,
        icon: <Users size={20} className="text-accent" />
    }
];


const Home: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    // Auto-open modal based on URL hash
    React.useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash === '#book' || hash === '#contact') {
                setIsModalOpen(true);
            }
        };

        // Check on mount
        handleHashChange();

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <>
            <OnboardingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* 1. Hero Section */}
            <section className="hero">
                <HeroBackground />
                <div className="container hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hero-text"
                    >
                        {/* Trust Badge */}
                        <div className="hero-badge">
                            <span>Licensed CPA Firm</span>
                        </div>

                        <h1 className="hero-title">
                            Fixed-fee accounting that runs on <span className="text-accent">autopilot</span>
                        </h1>
                        <p className="hero-subtitle">
                            We set up Xero + automation, then keep your books clean, your tax handled proactively, and your numbers decision-ready—without surprise bills.
                        </p>

                        <div className="hero-cta">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="btn btn-primary btn-lg btn-glow"
                            >
                                Book a Free Discovery Call
                            </button>
                            <Link href="/pricing" className="btn btn-secondary btn-lg">
                                See Pricing
                            </Link>
                        </div>
                        <p className="hero-cta-subtext">CPA-led • Fixed monthly pricing • Cloud-first (Xero/QBO)</p>
                    </motion.div>

                    <div className="hero-visual-wrapper">
                        {/* Stats showing authority */}
                        <div className="hero-stats-card glass">
                            <div className="stat-row-large">
                                <div>
                                    <span className="stat-number">50+</span>
                                    <span className="stat-label">Canadian Clients</span>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="stat-row-large">
                                <div>
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">CPA Certified</span>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="stat-row-large">
                                <div>
                                    <span className="stat-number">$25M+</span>
                                    <span className="stat-label">Revenue Managed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Social Proof / Logos */}
            <section className="clients-section">
                <div className="container">
                    <p className="div-eyebrow section-eyebrow">Trusted by high-growth Canadian companies</p>
                </div>
                <div className="marquee-container">
                    <div className="marquee-track">
                        {[...clients, ...clients, ...clients].map((client, i) => (
                            <div key={i} className={`client-logo-item ${client.className || ''}`}>
                                <Image
                                    src={client.logo}
                                    alt={`${client.name} - LedgerLogic client logo`}
                                    className="client-logo-img"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Pain Points / Comparison Section */}
            <section className="section pain-points-section">
                <div className="container text-center">
                    <div className="section-header text-center">
                        <h2 className="section-title-large">Traditional Accounting is <span className="text-gradient">Broken</span></h2>
                        <p className="section-subtitle">Stop settling for the status quo. There is a better way.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="pain-comparison-grid">
                        {/* Old Way */}
                        <div className="comparison-col old-way glass">
                            <h3><X className="icon-cross" /> The Old Way</h3>
                            <ul>
                                <li><strong>Surprise Bills:</strong> Hourly billing means you never know what you'll pay until the invoice arrives.</li>
                                <li><strong>Manual Data Entry:</strong> Emailing receipts, printing paper, and chasing documents.</li>
                                <li><strong>Reactive:</strong> You only hear from them when you owe tax or missed a deadline.</li>
                                <li><strong>Gatekeepers:</strong> Hard to get a straight answer without being charged for an email.</li>
                            </ul>
                        </div>
                        {/* New Way */}
                        <div className="comparison-col new-way glass-accent">
                            <h3><Check className="icon-check" /> The LedgerLogic Way</h3>
                            <ul>
                                <li><strong>Fixed Monthly Fees:</strong> One predictable price. Unlimited support included.</li>
                                <li><strong>Total Automation:</strong> We implement <Link href="/tools">tools like Xero & Dext</Link>. Zero manual data entry.</li>
                                <li><strong>Deadlines Guaranteed:</strong> We manage the calendar. Your filings are always on time.</li>
                                <li><strong>Easy Collaboration:</strong> We're part of your team. Fast answers via our client management platform Karbon or by email.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Features / Value Prop - 4 Cards Restored */}
            <section id="services" className="section features-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title-large">Build Your Financial <span className="text-gradient">Operating System</span></h2>
                        <p className="section-subtitle">We don't just "do the books." We implement a modern financial stack that gives you clarity, control, and peace of mind.</p>
                    </div>
                    <div className="features-grid">
                        {features.map((f, i) => (
                            <div key={i} className="feature-card">
                                <div className="feature-icon">{f.icon}</div>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Process Section */}
            <section className="section process-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title-large">How It <span className="text-gradient">Works</span></h2>
                        <p className="section-subtitle">A simple, transparent process to get your finances on track.</p>
                    </div>
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-card">
                                <div className="step-number">01</div>
                                <div className="step-icon"><Users size={28} className="text-accent" /></div>
                                <h3>Discovery Call</h3>
                                <p>We assess your business needs, goals, and current financial situation in a free consultation.</p>
                            </div>
                        </div>
                        <div className="process-arrow mobile-hide"></div>
                        <div className="process-step">
                            <div className="step-card">
                                <div className="step-number">02</div>
                                <div className="step-icon"><Settings size={28} className="text-accent" /></div>
                                <h3>Custom Package</h3>
                                <p>We design a <Link href="/pricing">fixed-price monthly package</Link> tailored to you. No surprise bills, ever.</p>
                            </div>
                        </div>
                        <div className="process-arrow mobile-hide"></div>
                        <div className="process-step">
                            <div className="step-card">
                                <div className="step-number">03</div>
                                <div className="step-icon"><Rocket size={28} className="text-accent" /></div>
                                <h3>Onboarding</h3>
                                <p>We handle the migration from your old system or bookkeeper. Seamless and pain-free.</p>
                            </div>
                        </div>
                        <div className="process-arrow mobile-hide"></div>
                        <div className="process-step">
                            <div className="step-card">
                                <div className="step-number">04</div>
                                <div className="step-icon"><CheckCircle size={28} className="text-accent" /></div>
                                <h3>Service Delivery</h3>
                                <p>Relax while we manage your books, taxes, and strategy. You get monthly reports and peace of mind.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Team Section (Seb Prost) - Verified Content */}
            <section id="about" className="section team-section">
                <div className="container">
                    <div className="split-layout">
                        <div className="team-image-wrapper">
                            <div className="team-image-container">
                                <Image
                                    src={sebProstImg}
                                    alt="Sebastien Prost, CPA - Founder and CEO of LedgerLogic, Canadian accounting firm"
                                    className="team-image"
                                    width={1000}
                                    height={1250}
                                    priority
                                />
                            </div>
                        </div>
                        <div className="team-content">
                            <h2 className="section-title"><span className="team-role">Your Dedicated Expert</span></h2>
                            <h3 className="team-name">Sebastien Prost, CPA</h3>
                            <p className="team-role">Founder & CEO</p>
                            <p className="team-bio">
                                "I started LedgerLogic to solve the frustration I saw businesses facing with traditional accounting—from how you get paid to how you pay bills. Then we automate the busy work so your business runs on autopilot.
                                <br /><br />
                                With 10+ years of CRA experience, I know the tax system inside out. My goal is to use that expertise, combined with modern technology, to give online businesses the same level of strategic support as big corporations."
                            </p>
                            <div className="team-badges">
                                <span className="badge-pill">CPA</span>
                                <span className="badge-pill">10+ Year CRA Experience</span>
                                <span className="badge-pill">Cloud Accounting Expert</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Testimonials Section (Restored) */}
            <section className="section testimonials-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title-large">What <span className="text-gradient">Our Clients Say</span></h2>
                        <p className="section-subtitle">Join 50+ satisfied Canadian businesses</p>
                    </div>
                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, i) => (
                            <div key={i} className="testimonial-card glass">
                                <div className="testimonial-stars">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-400 fill-yellow-400 inline-block mr-1" />
                                    ))}
                                </div>
                                <p className="testimonial-quote">"{testimonial.quote}"</p>
                                <div className="testimonial-author">
                                    <div className="testimonial-avatar">
                                        {testimonial.author.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="testimonial-name">{testimonial.author}</p>
                                        <p className="testimonial-role">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. FAQ Section - Original Layout/Design */}
            <section id="faq" className="section faq-preview-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title-large">Common <span className="text-gradient">Questions</span></h2>
                    </div>
                    <div className="faq-accordion-list">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className={`faq-accordion-item ${openFaq === i ? 'active' : ''}`}
                                onClick={() => toggleFaq(i)}
                            >
                                <div className="faq-header">
                                    <div className="faq-icon-wrapper-small">{faq.icon}</div>
                                    <h4>{faq.question}</h4>
                                    <div className="faq-chevron">
                                        {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </div>
                                </div>
                                <div className={`faq-body ${openFaq === i ? 'open' : ''}`}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. CTA Section */}
            <section className="cta-section link-cta-bg">
                <div className="container text-center">
                    <h2 className="cta-title">Ready to Level Up Your Finances?</h2>
                    <p className="cta-subtitle">Schedule a free discovery call to see how we can help your business thrive.</p>
                    <div className="cta-actions">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="btn btn-primary btn-lg btn-glow"
                        >
                            Book Your Free Expert Call
                        </button>
                    </div>
                    <p className="cta-subtext">Limited spots available for new clients.</p>
                </div>
            </section>

            {/* Sticky Mobile CTA */}
            <div className="sticky-mobile-cta">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn btn-primary btn-full"
                >
                    Book a Free Discovery Call
                </button>
            </div>
        </>
    );
};

export default Home;
