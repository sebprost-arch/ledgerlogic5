"use client";

import React, { useState } from 'react';
// import { Check, X, ArrowRight, RefreshCw } from 'lucide-react';
import { Check } from 'lucide-react';
import Link from 'next/link';
import OnboardingModal from '../components/OnboardingModal';


const Pricing: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Dynamic date for priceValidUntil (next year)
    const nextYear = new Date().getFullYear() + 1;
    const priceValidUntil = `${nextYear}-12-31`;

    const commonProductFields = {
        "image": "https://ledgerlogic.ca/images/og-image.png",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "48"
        },
        "review": {
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
            },
            "author": {
                "@type": "Person",
                "name": "Ben Archambault"
            },
            "reviewBody": "LedgerLogic streamlined our Xero setup and financial operations. Finally, accounting that moves as fast as we do."
        }
    };

    const commonOfferFields = {
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": priceValidUntil,
        "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "applicableCountry": "CA",
            "returnPolicyCategory": "https://schema.org/MerchantReturnIndefinite",
            "merchantReturnDays": "30",
            "returnMethod": "https://schema.org/ReturnByMail"
        },
        "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "CAD"
            },
            "shippingDestination": {
                "@type": "DefinedRegion",
                "addressCountry": "CA"
            }
        }
    };

    const pricingSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
            {
                "@type": "Product",
                "name": "Genesis Plan",
                "description": "Ideal for smaller operations involving a one-man show or startups.",
                ...commonProductFields,
                "offers": {
                    "@type": "Offer",
                    "price": "350",
                    ...commonOfferFields
                }
            },
            {
                "@type": "Product",
                "name": "Momentum Plan",
                "description": "Perfect for growing businesses that require more CPA support.",
                ...commonProductFields,
                "offers": {
                    "@type": "Offer",
                    "price": "750",
                    ...commonOfferFields
                }
            },
            {
                "@type": "Product",
                "name": "Summit Plan",
                "description": "Full-service financial management for established businesses seeking advisory support and external CFO services.",
                ...commonProductFields,
                "offers": {
                    "@type": "Offer",
                    "price": "2000",
                    ...commonOfferFields
                }
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://ledgerlogic.ca/pricing/#faq",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Do I need to sign a long-term contract?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. We operate on month-to-month engagements. We believe we should earn your business every single month."
                }
            },
            {
                "@type": "Question",
                "name": "What if I'm behind on my taxes?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No problem. We offer a 'Catch-Up' service to bring your books up to date and get you compliant with the CRA quickly."
                }
            },
            {
                "@type": "Question",
                "name": "Which accounting software do you use?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We are experts in Xero and QuickBooks Online. We can help you transition to these cloud platforms if you aren't using them already."
                }
            },
            {
                "@type": "Question",
                "name": "Is support included?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Email support is included in all packages. Essentials gets 48h response, Growth gets 24h priority response. Summit includes unlimited CPA support."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([pricingSchema, faqSchema]) }}
            />
            {/* Hero */}
            <section className="pricing-hero container">
                <Link href="#switching-section" className="hero-switch-badge">
                    Worried about switching? We make it seamless in 48 hours. &rarr;
                </Link>
                <h1>CPA & Bookkeeping Packages</h1>
                <p className="sub-hero-text">
                    No hourly billing. No surprise invoices. Just a predictable monthly investment in your business growth.
                </p>
                <div className="hero-badge-wrapper">
                    <span className="sc-badge"><Check size={14} /> No Lock-in Contracts</span>
                    <span className="sc-badge"><Check size={14} /> 30-Day Money Back Guarantee</span>
                </div>
            </section>

            {/* 3-Tier Model */}
            <section className="pricing-section container">
                <div className="pricing-grid">
                    {/* Tier 1: Genesis (Startups) */}
                    <div className="pricing-card glass">
                        <h3 className="tier-name">Genesis</h3>
                        <p className="tier-description">Ideal for smaller operations involving a "one-man show" or startups.</p>
                        <div className="tier-price">Start <span className="text-slate-500" style={{ fontSize: '0.6em' }}>from</span> $350<span>/mo</span></div>

                        <div className="feature-category">Services</div>
                        <ul className="feature-list list-services">
                            <li className="feature-item"><Check size={18} className="text-accent" /> Annual or Quarterly Bookkeeping</li>
                            <li className="feature-item"><Check size={18} className="text-accent" /> Corporate Tax Return (T2) & Financial Statements</li>
                            <li className="feature-item"><Check size={18} className="text-accent" /> GST/HST & PST Filing</li>
                        </ul>

                        <div className="feature-category">Support</div>
                        <ul className="feature-list list-support">
                            <li className="feature-item"><Check size={18} className="text-accent" /> Bookkeeping Support (1 email/mo)</li>
                            <li className="feature-item"><Check size={18} className="text-accent" /> CPA Support (1 email/mo)</li>
                        </ul>

                        <div className="feature-category">Subscriptions</div>
                        <ul className="feature-list list-subscriptions">
                            <li className="feature-item"><Check size={18} className="text-accent" /> Accounting Software (Xero or QBO)</li>
                            <li className="feature-item"><Check size={18} className="text-accent" /> Receipt Management (Hubdoc/Dext)</li>
                        </ul>
                        <button onClick={() => setIsModalOpen(true)} className="btn btn-outline btn-full">Get Started</button>
                    </div>

                    {/* Tier 2: Momentum (Growing) */}
                    <div className="pricing-card featured glass">
                        <div className="popular-badge">Most Popular</div>
                        <h3 className="tier-name">Momentum</h3>
                        <p className="tier-description">Perfect for growing businesses that require more CPA support.</p>
                        <div className="tier-price">Start <span className="text-slate-500" style={{ fontSize: '0.6em' }}>from</span> $750<span>/mo</span></div>

                        <div className="feature-category">Services</div>
                        <ul className="feature-list list-services">
                            <li className="feature-item"><Check size={18} className="text-accent" /> Monthly Bookkeeping</li>
                            <li className="feature-item"><Check size={18} className="text-accent" /> Corporate Tax Return (T2) & Financial Statements</li>
                            <li className="feature-item"><Check size={18} className="text-accent" /> GST/HST & PST Filing</li>
                            <li className="feature-item"><Check size={18} className="text-accent" /> Payroll & Slips</li>
                            <li className="feature-item"><Check size={18} className="text-accent" /> Bill Pay/Collection (Available)</li>
                        </ul>

                        <div className="feature-category">Support</div>
                        <ul className="feature-list list-support">
                            <li className="feature-item"><Check size={18} className="text-accent" /> Unlimited Bookkeeping Support</li>
                            <li className="feature-item"><Check size={18} className="text-accent" /> 3 CPA Support Calls or Emails/mo</li>
                            <li className="feature-item"><Check size={18} className="text-accent" /> Unlimited Payroll Support</li>
                        </ul>

                        <div className="feature-category">Subscriptions</div>
                        <ul className="feature-list list-subscriptions">
                            <li className="feature-item"><Check size={18} className="text-accent" /> Accounting Software (Xero or QBO)</li>
                            <li className="feature-item"><Check size={18} className="text-accent" /> Receipt Management (Hubdoc/Dext)</li>
                        </ul>
                        <button onClick={() => setIsModalOpen(true)} className="btn btn-primary btn-full btn-glow">Choose Momentum</button>
                    </div>

                    {/* Tier 3: Summit (Established) */}
                    <div className="pricing-card glass">
                        <h3 className="tier-name">Summit</h3>
                        <p className="tier-description">For established businesses seeking advisory support.</p>
                        <div className="tier-price">Start <span className="text-slate-500" style={{ fontSize: '0.6em' }}>from</span> $2,000<span>/mo</span></div>

                        <div className="feature-category">Services</div>
                        <ul className="feature-list list-services">
                            <li className="feature-item"><Check size={18} className="text-accent" /> Weekly or Bi-Weekly Bookkeeping</li>
                            <li className="feature-item"><Check size={18} className="text-accent" /> Corporate Tax Return (T2) & Financial Statements</li>
                            <li className="feature-item"><Check size={18} className="text-accent" /> GST/HST & PST Filing</li>
                            <li className="feature-item"><Check size={18} className="text-accent" /> Payroll & Slips</li>
                            <li className="feature-item"><Check size={18} className="text-accent" /> Bill Pay/Collection</li>
                            <li className="feature-item"><Check size={18} className="text-accent" /> External CFO (Budgeting, Forecasting)</li>
                            <li className="feature-item"><Check size={18} className="text-accent" /> CRA Audit Representation</li>
                        </ul>

                        <div className="feature-category">Support</div>
                        <ul className="feature-list list-support">
                            <li className="feature-item"><Check size={18} className="text-accent" /> Unlimited Bookkeeping Support</li>
                            <li className="feature-item"><Check size={18} className="text-accent" /> Unlimited CPA Support</li>
                            <li className="feature-item"><Check size={18} className="text-accent" /> Unlimited Payroll Support</li>
                        </ul>

                        <div className="feature-category">Subscriptions</div>
                        <ul className="feature-list">
                            <li className="feature-item"><Check size={18} className="text-accent" /> Accounting Software (Xero or QBO)</li>
                            <li className="feature-item"><Check size={18} className="text-accent" /> Receipt Management (Hubdoc/Dext)</li>
                            <li className="feature-item"><Check size={18} className="text-accent" /> CFO Software (Fathom)</li>
                        </ul>
                        <button onClick={() => setIsModalOpen(true)} className="btn btn-outline btn-full">Book Consultation</button>
                    </div>
                </div>


            </section>

            {/* Initial Setup Section */}
            <section className="setup-section container">
                <div className="setup-card glass">
                    <div className="setup-header">
                        <h2>Initial Setup & Onboarding</h2>
                        <p>We don't just "do the books." We build your financial operating system.</p>
                    </div>
                    <div className="setup-grid">
                        <div className="setup-item">
                            <div className="setup-icon"><Check /></div>
                            <div>
                                <h4>Cloud Migration</h4>
                                <p>Seamless transition to Xero/QBO from desktop or paper.</p>
                            </div>
                        </div>
                        <div className="setup-item">
                            <div className="setup-icon"><Check /></div>
                            <div>
                                <h4>Chart of Accounts</h4>
                                <p>Customized setup for clear, meaningful financial reporting.</p>
                            </div>
                        </div>
                        <div className="setup-item">
                            <div className="setup-icon"><Check /></div>
                            <div>
                                <h4>Payroll Software Setup</h4>
                                <p>Easy-to-use payroll software that integrates with your accounting platform.</p>
                            </div>
                        </div>
                        <div className="setup-item">
                            <div className="setup-icon"><Check /></div>
                            <div>
                                <h4>Systems Review</h4>
                                <p>Full audit of your current banking and tech stack.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section testimonials-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title-large">Trusted by Canadian Businesses</h2>
                    </div>
                    <div className="testimonials-grid">
                        <div className="testimonial-card glass">
                            <div className="testimonial-stars">★★★★★</div>
                            <p className="testimonial-quote">"LedgerLogic streamlined our Xero setup and financial operations. Finally, accounting that moves as fast as we do."</p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar">B</div>
                                <div>
                                    <p className="testimonial-name">Ben Archambault</p>
                                    <p className="testimonial-role">Founder, Talksoon Inc.</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card glass">
                            <div className="testimonial-stars">★★★★★</div>
                            <p className="testimonial-quote">"As a creative, I dreaded tax season. Seb and his team simplified everything. Now I focus on design, not receipts."</p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar">L</div>
                                <div>
                                    <p className="testimonial-name">Louis Fortier</p>
                                    <p className="testimonial-role">Owner, Louis Fortier Design</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card glass">
                            <div className="testimonial-stars">★★★★★</div>
                            <p className="testimonial-quote">"They are incredibly easy to work with. Responses are prompt, collaboration is seamless."</p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar">J</div>
                                <div>
                                    <p className="testimonial-name">Joanie Mercier</p>
                                    <p className="testimonial-role">Owner, Wildberry Pelvic Health Physiotherapy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain-Free Switching */}
            <section id="switching-section" className="switching-section container">
                <div className="switching-card dark-theme">
                    <div className="switching-content">
                        <h2>Switch in 48 Hours. <span className="text-accent">Zero Downtime.</span></h2>
                        <p className="switching-subtitle">
                            We handle the break-up with your old accountant and move everything over. We do the heavy lifting.
                        </p>

                        <div className="switching-steps">
                            <div className="switch-step">
                                <div className="step-num">01</div>
                                <p>We contact your old firm</p>
                            </div>
                            <div className="step-line"></div>
                            <div className="switch-step">
                                <div className="step-num">02</div>
                                <p>We migrate your data</p>
                            </div>
                            <div className="step-line"></div>
                            <div className="switch-step">
                                <div className="step-num">03</div>
                                <p>You're up and running</p>
                            </div>
                        </div>

                        <button onClick={() => setIsModalOpen(true)} className="btn btn-primary btn-lg btn-glow">Start Your Switch Now</button>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section container">
                <h2 className="text-center">Common Questions</h2>
                <div className="faq-grid">
                    <div className="faq-item">
                        <h4>Do I need to sign a long-term contract?</h4>
                        <p>No. We operate on month-to-month engagements. We believe we should earn your business every single month.</p>
                    </div>
                    <div className="faq-item">
                        <h4>What if I'm behind on my taxes?</h4>
                        <p>No problem. We offer a "Catch-Up" service to bring your books up to date and get you compliant with the CRA quickly.</p>
                    </div>
                    <div className="faq-item">
                        <h4>Which accounting software do you use?</h4>
                        <p>We are experts in Xero and QuickBooks Online. We can help you transition to these cloud platforms if you aren't using them already.</p>
                    </div>
                    <div className="faq-item">
                        <h4>Is support included?</h4>
                        <p>Yes! Email support is included in all packages. Essentials gets 48h response, Growth gets 24h priority response.</p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="cta-section link-cta-bg text-center">
                <div className="container">
                    <h2 className="cta-title">Ready to Get Started?</h2>
                    <p className="cta-subtitle">Book a free discovery call to discuss which plan fits your goals.</p>
                    <button onClick={() => setIsModalOpen(true)} className="btn btn-primary btn-lg btn-glow">
                        Book Your Call {/* <ArrowRight /> */}
                    </button>
                </div>
            </section>
            <OnboardingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Pricing;
