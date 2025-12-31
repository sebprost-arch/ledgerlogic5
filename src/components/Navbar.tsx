"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import OnboardingModal from './OnboardingModal';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal State
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
  }, [pathname]);

  const navLinks = [
    { name: 'Services', path: '/#services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/#about' },
    { name: 'FAQs', path: '/#faq' },
    { name: 'Blog', path: '/blog' },
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
            <a
              href="https://clientlogin-ca2.karbonhq.com/247Pxw6ZlPBD/Identity/Account/Login?token="
              className="btn btn-outline"
              style={{
                marginRight: '1rem',
                border: '2px solid #38B2AC',
                color: '#38B2AC'
              }}
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
