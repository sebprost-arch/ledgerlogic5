"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Check, ChevronRight, ExternalLink, Building2, TrendingUp, Users, Briefcase } from 'lucide-react';
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
            const res = await fetch('/api/onboarding/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                nextStep(); // Move to Calendar Step
            } else {
                alert("Something went wrong. Please try again.");
            }
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
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            {/* Modal */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[90vh]"
            >
                {/* Header (Hidden on Calendar Step for max space) */}
                {step < 5 && (
                    <div className="flex justify-between items-center px-8 py-6 border-b border-slate-50 bg-white z-10 sticky top-0">
                        <div className="flex-1 mr-8">
                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden max-w-[120px]">
                                <motion.div
                                    className="h-full bg-brand-gradient"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
                            <X size={20} />
                        </button>
                    </div>
                )}

                {/* Close button overlay for Calendar Step */}
                {step === 5 && (
                    <button onClick={onClose} className="absolute top-6 right-6 z-20 p-2 bg-white/80 backdrop-blur rounded-full text-slate-400 hover:text-slate-600 shadow-sm border border-slate-200">
                        <X size={20} />
                    </button>
                )}

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-slate-50/30">
                    <AnimatePresence mode="wait">
                        {/* STEP 1: INDUSTRY (Context) */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="text-center">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-2">What kind of business are you scaling?</h2>
                                    <p className="text-slate-500">We specialize in these high-growth industries.</p>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {INDUSTRY_OPTIONS.map(opt => (
                                        <button
                                            key={opt.label}
                                            onClick={() => {
                                                updateField('industry', opt.label);
                                                nextStep();
                                            }}
                                            className="group relative flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-transparent hover:-translate-y-1 transition-all duration-300 h-44 overflow-hidden"
                                        >
                                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-transparent to-slate-50/50`} />
                                            <div className={`p-4 rounded-full ${opt.color} group-hover:scale-110 transition-transform duration-300`}>
                                                {opt.icon}
                                            </div>
                                            <span className="font-semibold text-slate-700 group-hover:text-slate-900 z-10">{opt.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2: REVENUE (Scale) */}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8 max-w-md mx-auto"
                            >
                                <div className="text-center">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Where is your ARR currently?</h2>
                                    <p className="text-slate-500">This helps us match you with the right plan.</p>
                                </div>

                                <div className="space-y-3">
                                    {REVENUE_OPTIONS.map(opt => (
                                        <button
                                            key={opt}
                                            onClick={() => {
                                                updateField('revenue', opt);
                                                nextStep();
                                            }}
                                            className="w-full p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-accent hover:bg-white transition-all text-left font-semibold text-lg text-slate-700 flex justify-between items-center group"
                                        >
                                            {opt}
                                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all text-accent transform translate-x-2 group-hover:translate-x-0">
                                                <ChevronRight size={18} />
                                            </div>
                                        </button>
                                    ))}
                                </div>
                                <button onClick={prevStep} className="w-full text-center text-slate-400 hover:text-slate-600 mt-4 text-sm font-medium">Back</button>
                            </motion.div>
                        )}

                        {/* STEP 3: PAIN POINT (Goal) */}
                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8 max-w-md mx-auto"
                            >
                                <div className="text-center">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-2">What is your primary focus?</h2>
                                    <p className="text-slate-500">We'll prioritize this in your strategy.</p>
                                </div>

                                <div className="space-y-3">
                                    {PAIN_POINT_OPTIONS.map(opt => (
                                        <button
                                            key={opt}
                                            onClick={() => {
                                                updateField('painPoint', opt);
                                                nextStep();
                                            }}
                                            className="w-full p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-accent hover:bg-white transition-all text-left font-semibold text-lg text-slate-700 flex justify-between items-center group"
                                        >
                                            {opt}
                                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all text-accent transform translate-x-2 group-hover:translate-x-0">
                                                <ChevronRight size={18} />
                                            </div>
                                        </button>
                                    ))}
                                </div>
                                <button onClick={prevStep} className="w-full text-center text-slate-400 hover:text-slate-600 mt-4 text-sm font-medium">Back</button>
                            </motion.div>
                        )}

                        {/* STEP 4: CONTACT (Identity) */}
                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6 max-w-md mx-auto"
                            >
                                <div className="text-center mb-4">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Almost done.</h2>
                                    <p className="text-slate-500">Where should we send your strategy recap?</p>
                                </div>

                                <div className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">First Name</label>
                                        <input
                                            type="text"
                                            value={formData.firstName}
                                            onChange={e => updateField('firstName', e.target.value)}
                                            className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all text-lg"
                                            placeholder="Jane"
                                            autoFocus
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={e => updateField('email', e.target.value)}
                                            className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all text-lg"
                                            placeholder="jane@company.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-500 mb-1.5 ml-1">Website (Optional)</label>
                                        <input
                                            type="text"
                                            value={formData.website}
                                            onChange={e => updateField('website', e.target.value)}
                                            className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                                            placeholder="ledgerlogic.ca"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-sm text-slate-500 px-2">
                                    <span>Curious about pricing?</span>
                                    <Link href="/pricing" target="_blank" className="flex items-center gap-1 text-accent font-semibold hover:text-teal-600 transition-colors">
                                        View Packages <ExternalLink size={14} />
                                    </Link>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    disabled={!formData.firstName || !formData.email || isSubmitting}
                                    className="w-full flex items-center justify-center gap-2 bg-brand-dark text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 shadow-xl shadow-brand-dark/10 disabled:opacity-70 disabled:shadow-none transition-all transform active:scale-[0.98] mt-2 group"
                                >
                                    {isSubmitting ? (
                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>Match my Expert <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></>
                                    )}
                                </button>
                                <button onClick={prevStep} className="w-full text-center text-slate-400 hover:text-slate-600 mt-2 text-sm font-medium">Back</button>
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
                                <div className="text-center mb-4">
                                    <h2 className="text-xl font-bold text-slate-900">You're matched! Select a time.</h2>
                                    <p className="text-sm text-emerald-600 font-medium flex items-center justify-center gap-1.5 mt-1 bg-emerald-50 py-1.5 px-4 rounded-full w-fit mx-auto">
                                        <Check size={14} strokeWidth={3} /> Profile sent to Sebastien
                                    </p>
                                </div>
                                <div className="flex-1 -mx-4 h-full">
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
                                            textColor: '334155'
                                        }}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default OnboardingModal;
