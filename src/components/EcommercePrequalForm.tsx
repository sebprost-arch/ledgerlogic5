"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Loader2 } from 'lucide-react';

interface EcommercePrequalFormProps {
    onComplete: () => void;
}

const questions = [
    {
        id: 'revenue',
        question: "What is your current monthly revenue range?",
        options: ["$0 - $25k / mo", "$25k - $100k / mo", "$100k - $300k / mo", "$300k+ / mo"]
    },
    {
        id: 'channels',
        question: "Where do you primarily sell?",
        options: ["Shopify (DTC)", "Amazon (FBA/FBM)", "Both / Multi-channel", "Other"]
    },
    {
        id: 'volume',
        question: "Approx. monthly order volume?",
        options: ["0 - 500 orders", "500 - 2,000 orders", "2,000+ orders", "Not sure"]
    },
    {
        id: 'pain',
        question: "What is your biggest financial headache?",
        options: ["Payout Reconciliation", "Inventory & COGS Accuracy", "GST/HST & Tax", "Clean-up / Messy Books"]
    }
];

const EcommercePrequalForm: React.FC<EcommercePrequalFormProps> = ({ onComplete }) => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [companyName, setCompanyName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleOptionSelect = (option: string) => {
        setAnswers(prev => ({ ...prev, [questions[step].id]: option }));
        if (step < questions.length - 1) {
            setStep(prev => prev + 1);
        } else {
            setStep(questions.length);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setIsSuccess(true);
        onComplete();
    };

    if (isSuccess) {
        return (
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-teal-100 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 text-teal-600 rounded-full mb-6">
                    <Check size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">You're a great fit!</h3>
                <p className="text-slate-600 mb-6">We specialize in brands with your volume and stack.</p>
                <div className="animate-pulse text-teal-600 font-semibold">
                    Unlocking booking calendar...
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-slate-200/60 max-w-lg mx-auto w-full">
            {/* Progress Bar */}
            <div className="w-full bg-slate-100 h-1.5 rounded-full mb-8">
                <div
                    className="bg-teal-500 h-1.5 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${((step + 1) / (questions.length + 2)) * 100}%` }}
                />
            </div>

            <AnimatePresence mode="wait">
                {step < questions.length ? (
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 leading-tight">
                            {questions[step].question}
                        </h3>
                        <div className="grid gap-3">
                            {questions[step].options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleOptionSelect(option)}
                                    className="w-full text-left px-5 py-4 rounded-xl border border-slate-200 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700 transition-all duration-200 font-medium text-slate-700 flex items-center justify-between group"
                                >
                                    {option}
                                    <ChevronRight className="opacity-0 group-hover:opacity-100 text-teal-500 transition-opacity" size={20} />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="final"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 leading-tight">
                            Last step.
                        </h3>
                        <p className="text-slate-600 mb-6">Where should we send your profit analysis?</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Company Name (or Website)</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                                    placeholder="e.g. myshop.com"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Analyzing Store...
                                    </>
                                ) : (
                                    <>
                                        See If I Qualify
                                        <ChevronRight size={20} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default EcommercePrequalForm;
