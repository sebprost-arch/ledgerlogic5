"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import OnboardingModal from './OnboardingModal';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal State
  const [resourcesOpen, setResourcesOpen] = useState(false); // Mobile dropdown state
  const pathname = usePathname();
  const isBlogPage = pathname?.startsWith('/blog');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setResourcesOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Services', path: '/#services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/#about' },
    // { name: 'FAQs', path: '/#faq' }, // Replaced or removed per previous instructions, keeping cleaner.
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isBlogPage ? 'blog-navbar' : ''}`}>
        <div className="container navbar-container">
          <Link href="/" className="logo">
            Ledger<span className="text-accent">Logic</span>
          </Link>

          <div className="desktop-menu">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path} className="nav-link">
                {link.name}
              </Link>
            ))}

            {/* Resources Dropdown */}
            <div className="nav-dropdown-container">
              <button className="nav-link dropdown-trigger">
                Resources <ChevronDown size={14} className="ml-1 inline" />
              </button>
              <div className="dropdown-menu">
                <Link href="/tools" className="dropdown-item">
                  <span className="font-bold block">Tools & Offers</span>
                  <span className="text-xs text-slate-500">Curated tech stack</span>
                </Link>
                <Link href="/blog" className="dropdown-item">
                  <span className="font-bold block">Blog</span>
                  <span className="text-xs text-slate-500">Insights & guides</span>
                </Link>
              </div>
            </div>

            <a
              href="https://clientlogin-ca2.karbonhq.com/247Pxw6ZlPBD/Identity/Account/Login?token="
              className={`btn btn-sm mr-4 transition-all border-2 font-bold text-sm ${scrolled
                  ? 'border-white/30 text-white hover:bg-white/10 hover:border-white'
                  : 'border-slate-300 text-slate-600 hover:border-slate-800 hover:text-slate-900'
                }`}
              style={{ padding: '0.5rem 1rem' }}
            >
              Client Login
            </a>
            <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
              Get Started {/* <ChevronRight size={16} style={{ marginLeft: '4px' }} /> */}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "X" : "Menu"}
            {/* {isOpen ? <X size={24} /> : <Menu size={24} />} */}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mobile-menu glass"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    className="mobile-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Mobile Resources Dropdown */}
                <div className="mobile-dropdown-section">
                  <button
                    className="mobile-link w-full text-left flex justify-between items-center"
                    onClick={() => setResourcesOpen(!resourcesOpen)}
                  >
                    Resources <ChevronDown size={16} className={`transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {resourcesOpen && (
                    <div className="pl-4 flex flex-col gap-2 mt-2 mb-2">
                      <Link href="/tools" className="mobile-sublink" onClick={() => setIsOpen(false)}>
                        Tools & Offers
                      </Link>
                      <Link href="/blog" className="mobile-sublink" onClick={() => setIsOpen(false)}>
                        Blog
                      </Link>
                    </div>
                  )}
                </div>

                <a
                  href="https://clientlogin-ca2.karbonhq.com/247Pxw6ZlPBD/Identity/Account/Login?token="
                  className="btn btn-outline mobile-cta"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </a>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="btn btn-primary mobile-cta w-full"
                >
                  Get Started
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
      <OnboardingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
