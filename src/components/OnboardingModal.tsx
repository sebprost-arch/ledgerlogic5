"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Check, ChevronRight, ChevronLeft, ExternalLink, Building2, TrendingUp, Users, Briefcase, UserCircle, Globe, Mail, Rocket } from 'lucide-react';
import { InlineWidget } from 'react-calendly';
import Link from 'next/link';

interface FormData {
    firstName: string;
    email: string;
    website: string;
    revenue: string;
    industry: string;
    painPoint: string;
}

const INDUSTRY_OPTIONS = [
    { label: "SaaS / Tech", icon: <CodeIcon />, color: "bg-blue-50 text-blue-600" },
    { label: "Agency / Service", icon: <Users />, color: "bg-purple-50 text-purple-600" },
    { label: "E-commerce", icon: <ShoppingBagIcon />, color: "bg-rose-50 text-rose-600" },
    { label: "Construction", icon: <Building2 />, color: "bg-orange-50 text-orange-600" },
    { label: "Health / Medical", icon: <HeartPulseIcon />, color: "bg-emerald-50 text-emerald-600" },
    { label: "Other", icon: <Briefcase />, color: "bg-slate-50 text-slate-600" }
];

const REVENUE_OPTIONS = [
    "Pre-revenue",
    "$0 - $250k",
    "$250k - $1M",
    "$1M - $5M",
    "$5M+"
];

const PAIN_POINT_OPTIONS = [
    "Tax catch-up & Clean up",
    "Switching accountants",
    "Need CFO / Advisory",
    "Just starting out"
];

// Simple Icon Wrappers
function CodeIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg> }
function ShoppingBagIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg> }
function HeartPulseIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.28 3.6-2.34 4.54-2.74a2 2 0 0 0 .55-3.62c-1.81-2.06-4-3.5-6-4.9a6.07 6.07 0 0 0-8 0 7 7 0 0 0-6 4.9 2 2 0 0 0 .55 3.62c.94.4 3.05 1.46 4.54 2.74a2.9 2.9 0 0 0 4.19 0Z" /><path d="m12 11.5 3 6h7" /><path d="m12 11.5-3 6H2" /></svg> }

interface OnboardingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const OnboardingModal: React.FC<OnboardingModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        email: '',
        website: '',
        revenue: '',
        industry: '',
        painPoint: ''
    });

    const updateField = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            // Simulate API call for now or use real endpoint if available
            // const res = await fetch('/api/onboarding/submit', { ... });
            await new Promise(resolve => setTimeout(resolve, 1000)); // Fake delay
            nextStep(); // Move to Calendar Step
        } catch (error) {
            console.error("Submission error", error);
            alert("Connection error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    // Progress Calculation
    const progress = (step / 5) * 100;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop with stronger blur */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            {/* Modal Container: Glassmorphism */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20 flex flex-col max-h-[90vh]"
            >
                {/* Header: Improved Navigation & Progress */}
                {step < 5 && (
                    <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-white/50 backdrop-blur-sm sticky top-0 z-20">
                        {/* Navigation Area */}
                        <div className="flex items-center gap-4 flex-1">
                            {step > 1 ? (
                                <button
                                    onClick={prevStep}
                                    className="p-2 -ml-2 rounded-full hover:bg-gray-100/80 text-gray-500 hover:text-gray-800 transition-colors"
                                    aria-label="Go Back"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                            ) : (
                                <div className="w-10" /> /* Spacer to keep title centered if desired, or just empty */
                            )}

                            {/* Progress Bar */}
                            <div className="h-1.5 w-full max-w-[120px] bg-gray-100 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-teal-400 to-blue-500" // Hardcoded gradient for reliability
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                />
                            </div>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>
                )}

                {/* Close button overlay for Calendar Step (Header hidden) */}
                {step === 5 && (
                    <button onClick={onClose} className="absolute top-6 right-6 z-20 p-2 bg-white/80 backdrop-blur rounded-full text-gray-400 hover:text-gray-600 shadow-sm border border-gray-200">
                        <X size={20} />
                    </button>
                )}

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    <div className="p-8 md:p-10 min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {/* STEP 1: INDUSTRY */}
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-8"
                                >
                                    <div className="text-center">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">What kind of business are you scaling?</h2>
                                        <p className="text-gray-500 text-lg">We specialize in these high-growth industries.</p>
                                    </div>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                        {INDUSTRY_OPTIONS.map(opt => (
                                            <button
                                                key={opt.label}
                                                onClick={() => {
                                                    updateField('industry', opt.label);
                                                    nextStep();
                                                }}
                                                className="group relative flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-white border-2 border-transparent hover:border-teal-500/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-44 overflow-hidden"
                                            >
                                                {/* Gradient background on hover */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 group-hover:from-white group-hover:to-teal-50 transition-colors" />

                                                <div className={`relative p-4 rounded-xl ${opt.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                                                    {opt.icon}
                                                </div>
                                                <span className="relative font-bold text-gray-700 group-hover:text-gray-900 z-10">{opt.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 2: REVENUE */}
                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-8 max-w-lg mx-auto"
                                >
                                    <div className="text-center">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Where is your ARR currently?</h2>
                                        <p className="text-gray-500 text-lg">This helps us match you with the right plan.</p>
                                    </div>

                                    <div className="space-y-3">
                                        {REVENUE_OPTIONS.map(opt => (
                                            <button
                                                key={opt}
                                                onClick={() => {
                                                    updateField('revenue', opt);
                                                    nextStep();
                                                }}
                                                className="w-full p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-teal-500/50 hover:bg-teal-50/20 transition-all text-left font-bold text-lg text-gray-700 flex justify-between items-center group"
                                            >
                                                <span>{opt}</span>
                                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-teal-500 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0 shadow-sm">
                                                    <ChevronRight size={18} />
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 3: PAIN POINT */}
                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-8 max-w-lg mx-auto"
                                >
                                    <div className="text-center">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">What is your primary focus?</h2>
                                        <p className="text-gray-500 text-lg">We'll prioritize this in your strategy.</p>
                                    </div>

                                    <div className="space-y-3">
                                        {PAIN_POINT_OPTIONS.map(opt => (
                                            <button
                                                key={opt}
                                                onClick={() => {
                                                    updateField('painPoint', opt);
                                                    nextStep();
                                                }}
                                                className="w-full p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-teal-500/50 hover:bg-teal-50/20 transition-all text-left font-bold text-lg text-gray-700 flex justify-between items-center group"
                                            >
                                                <span>{opt}</span>
                                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-teal-500 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0 shadow-sm">
                                                    <ChevronRight size={18} />
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 4: CONTACT (Identity) - Completely Redesigned */}
                            {step === 4 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-8 max-w-lg mx-auto"
                                >
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600 shadow-inner">
                                            <UserCircle size={32} />
                                        </div>
                                        <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">You're all set.</h2>
                                        <p className="text-gray-500 text-lg">Enter your details to select a time.</p>
                                    </div>

                                    <div className="space-y-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            {/* First Name */}
                                            <div className="relative group">
                                                <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-teal-500 transition-colors">
                                                    <UserCircle size={20} />
                                                </div>
                                                <input
                                                    type="text"
                                                    value={formData.firstName}
                                                    onChange={e => updateField('firstName', e.target.value)}
                                                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                                    placeholder="First Name"
                                                    autoFocus
                                                />
                                            </div>

                                            {/* Email */}
                                            <div className="relative group">
                                                <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-teal-500 transition-colors">
                                                    <Mail size={20} />
                                                </div>
                                                <input
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={e => updateField('email', e.target.value)}
                                                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                                    placeholder="Work Email"
                                                />
                                            </div>
                                        </div>

                                        {/* Website */}
                                        <div className="relative group">
                                            <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-teal-500 transition-colors">
                                                <Globe size={20} />
                                            </div>
                                            <input
                                                type="text"
                                                value={formData.website}
                                                onChange={e => updateField('website', e.target.value)}
                                                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                                placeholder="Company Website (Optional)"
                                            />
                                        </div>
                                    </div>

                                    {/* Action Area */}
                                    <div className="pt-4 space-y-4">
                                        <button
                                            onClick={handleSubmit}
                                            disabled={!formData.firstName || !formData.email || isSubmitting}
                                            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4.5 rounded-xl font-bold text-lg shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 hover:scale-[1.02] disabled:opacity-70 disabled:shadow-none disabled:hover:scale-100 transition-all active:scale-[0.98] group"
                                        >
                                            {isSubmitting ? (
                                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <>
                                                    Continue to Booking
                                                    <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </>
                                            )}
                                        </button>

                                        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                                            <span>Or view our standard plans</span>
                                            <Link href="/pricing" target="_blank" className="text-gray-600 hover:text-teal-600 font-semibold flex items-center gap-1 transition-colors">
                                                Pricing Page <ExternalLink size={12} />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 5: CALENDAR (Booking) */}
                            {step === 5 && (
                                <motion.div
                                    key="step5"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="h-full flex flex-col"
                                >
                                    <div className="text-center mb-6">
                                        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <Check size={24} strokeWidth={3} />
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900">You're matched! Select a time.</h2>
                                        <p className="text-gray-500">Sebastien has verified your profile.</p>
                                    </div>
                                    <div className="flex-1 rounded-2xl overflow-hidden border border-gray-100 shadow-inner bg-white">
                                        <InlineWidget
                                            url="https://calendly.com/ledgerlogic/discovery"
                                            prefill={{
                                                email: formData.email,
                                                name: formData.firstName,
                                                customAnswers: {
                                                    a1: formData.industry,
                                                    a2: formData.revenue
                                                }
                                            }}
                                            styles={{
                                                height: '100%',
                                                minHeight: '400px'
                                            }}
                                            pageSettings={{
                                                hideEventTypeDetails: true,
                                                hideLandingPageDetails: true,
                                                primaryColor: '38B2AC',
                                                textColor: '1A202C'
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default OnboardingModal;
