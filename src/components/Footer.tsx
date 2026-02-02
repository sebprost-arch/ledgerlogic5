import React from 'react';
import Link from 'next/link';
// import { Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link href="/" className="logo">
                            Ledger<span className="text-accent">Logic</span>
                        </Link>
                        <p className="footer-desc">
                            The Financial Operating System for Canadian Growth Companies. We simplify your finances so you can focus on growth.
                        </p>

                    </div>

                    <div className="footer-links">
                        <h3 className="footer-heading">Company</h3>
                        <Link href="/#about" className="footer-link">About Us</Link>
                        <Link href="/#services" className="footer-link">Services</Link>
                        <Link href="/pricing" className="footer-link">Pricing</Link>
                    </div>

                    <div className="footer-links">
                        <h3 className="footer-heading">Resources</h3>
                        <Link href="/blog" className="footer-link">Blog</Link>
                        <Link href="/tools" className="footer-link">Tools & Offers</Link>
                    </div>

                    <div className="footer-contact">
                        <h3 className="footer-heading">Contact</h3>
                        <div className="contact-item">
                            {/* <Mail size={18} className="contact-icon" /> */}
                            <span>info@ledgerlogic.ca</span>
                        </div>
                        <div className="contact-item">
                            {/* <Phone size={18} className="contact-icon" /> */}
                            <span>1-833-533-4375</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} LedgerLogic. All rights reserved.</p>
                    <div className="legal-links">
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
