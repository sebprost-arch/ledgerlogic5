import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Check, ChevronRight, ChevronLeft, ExternalLink, Building2, TrendingUp, Users, Briefcase, UserCircle, Globe, Mail, Rocket, CalendarCheck } from 'lucide-react';
import { InlineWidget } from 'react-calendly';
import Link from 'next/link';

interface FormData {
    name: string;
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
    "Tax catch-up",
    "Switching firms",
    "Advisory / CFO",
    "Just starting"
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
        name: '',
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
            // Send questionnaire data to API
            const response = await fetch('/api/send-questionnaire', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit questionnaire');
            }

            // Success - move to calendar booking
            nextStep();
        } catch (error) {
            console.error("Submission error:", error);
            // You could add user-facing error handling here
            // For now, still proceed to calendar
            nextStep();
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    const progress = (step / 5) * 100;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                // Fixed height and width to prevent jumping
                className="relative w-full max-w-2xl h-[650px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
                {/* Decorative Background Mesh */}
                <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-teal-400/20 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[250px] h-[250px] bg-blue-400/20 blur-[80px] rounded-full pointer-events-none" />

                {/* Header */}
                {step < 5 && (
                    <div className="flex items-center justify-between px-8 py-6 z-20 shrink-0">
                        <div className="flex items-center gap-4 flex-1">
                            {step > 1 ? (
                                <button
                                    onClick={prevStep}
                                    className="p-2 -ml-2 rounded-full hover:bg-gray-100/50 text-gray-500 hover:text-gray-900 transition-colors"
                                >
                                    <ChevronLeft size={22} />
                                </button>
                            ) : <div className="w-8" />}

                            <div className="h-1.5 w-full max-w-[100px] bg-gray-100 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-teal-400 to-emerald-500"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.4 }}
                                />
                            </div>
                        </div>

                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-gray-100/50 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>
                )}

                {/* Content Area - Flex layout for centering */}
                <div className="flex-1 flex flex-col px-10 pb-10 z-10 overflow-hidden relative">
                    <AnimatePresence mode="wait">
                        {/* STEP 1: INDUSTRY */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex-1 flex flex-col justify-center"
                            >
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Tell us about your business</h2>
                                    <p className="text-gray-500">Select your industry to get started.</p>
                                </div>

                                {/* Compact Grid */}
                                <div className="grid grid-cols-3 gap-4">
                                    {INDUSTRY_OPTIONS.map(opt => (
                                        <button
                                            key={opt.label}
                                            onClick={() => {
                                                updateField('industry', opt.label);
                                                nextStep();
                                            }}
                                            className="group relative flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-white border border-gray-100 hover:border-teal-500/30 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-36"
                                        >
                                            <div className={`p-3 rounded-xl ${opt.color} bg-opacity-10 group-hover:scale-110 transition-transform`}>
                                                {opt.icon}
                                            </div>
                                            <span className="font-semibold text-sm text-gray-700 group-hover:text-gray-900">{opt.label}</span>
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
                                className="flex-1 flex flex-col justify-center max-w-lg mx-auto w-full"
                            >
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Current Annual Revenue</h2>
                                    <p className="text-gray-500">This helps us recommend the right financial stack.</p>
                                </div>

                                <div className="space-y-2.5">
                                    {REVENUE_OPTIONS.map(opt => (
                                        <button
                                            key={opt}
                                            onClick={() => {
                                                updateField('revenue', opt);
                                                nextStep();
                                            }}
                                            className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-teal-500/30 hover:bg-teal-50/10 transition-all text-left font-semibold text-xl text-gray-700 flex justify-between items-center group"
                                        >
                                            <span>{opt}</span>
                                            <ChevronRight className="text-gray-300 group-hover:text-teal-500 transition-colors" size={24} />
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
                                className="flex-1 flex flex-col justify-center max-w-lg mx-auto w-full"
                            >
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Primary Focus</h2>
                                    <p className="text-gray-500">What's the main thing you want to solve?</p>
                                </div>

                                {/* 2 Column Grid for Compactness */}
                                <div className="grid grid-cols-2 gap-4">
                                    {PAIN_POINT_OPTIONS.map(opt => (
                                        <button
                                            key={opt}
                                            onClick={() => {
                                                updateField('painPoint', opt);
                                                nextStep();
                                            }}
                                            className="w-full p-6 h-32 flex flex-col items-start justify-center gap-2 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-teal-500/30 hover:bg-teal-50/10 transition-all text-left font-bold text-lg text-gray-700 group relative overflow-hidden"
                                        >
                                            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <span>{opt}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 4: CONTACT INFO */}
                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="flex-1 flex flex-col justify-center max-w-lg mx-auto w-full"
                            >
                                <div className="text-center mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-teal-50 to-blue-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-white">
                                        <CalendarCheck size={32} />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Almost Done</h2>
                                    <p className="text-gray-500 text-lg">Enter your details to confirm your booking.</p>
                                </div>

                                <div className="space-y-5">
                                    {/* Name & Email Group */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="relative group">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-teal-500 transition-colors">
                                                <UserCircle size={20} />
                                            </div>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={e => updateField('name', e.target.value)}
                                                className="w-full pl-11 pr-4 py-4 rounded-xl bg-gray-50/50 border border-transparent focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                                placeholder="Full Name"
                                                autoFocus
                                            />
                                        </div>
                                        <div className="relative group">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-teal-500 transition-colors">
                                                <Mail size={20} />
                                            </div>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={e => updateField('email', e.target.value)}
                                                className="w-full pl-11 pr-4 py-4 rounded-xl bg-gray-50/50 border border-transparent focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                                placeholder="Work Email"
                                            />
                                        </div>
                                    </div>

                                    {/* Website */}
                                    <div className="relative group">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-teal-500 transition-colors">
                                            <Globe size={20} />
                                        </div>
                                        <input
                                            type="text"
                                            value={formData.website}
                                            onChange={e => updateField('website', e.target.value)}
                                            className="w-full pl-11 pr-4 py-4 rounded-xl bg-gray-50/50 border border-transparent focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                            placeholder="Company Website (Optional)"
                                        />
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <button
                                        onClick={handleSubmit}
                                        disabled={!formData.name || !formData.email || isSubmitting}
                                        className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 transition-all active:scale-[0.98] group"
                                    >
                                        {isSubmitting ? (
                                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                Continue to Booking
                                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 5: CALENDAR (Booking) */}
                        {step === 5 && (
                            <motion.div
                                key="step5"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute inset-0 z-50 bg-white flex flex-col"
                            >
                                <div className="absolute top-6 right-6 z-30">
                                    <button onClick={onClose} className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-gray-600 transition-colors">
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="text-center pt-8 pb-4 shrink-0 px-8">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                                        <Check size={14} /> Profile Verified
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">Let's Find a Time</h2>
                                </div>

                                <div className="flex-1 w-full relative">
                                    <InlineWidget
                                        url="https://calendly.com/ledgerlogic/free-consultation-30-min"
                                        prefill={{
                                            email: formData.email,
                                            name: formData.name,
                                            customAnswers: {
                                                a1: formData.industry,
                                                a2: formData.revenue
                                            }
                                        }}
                                        styles={{ height: '100%' }}
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
            </motion.div>
        </div>
    );
};

export default OnboardingModal;
