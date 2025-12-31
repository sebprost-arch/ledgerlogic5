import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useScorecardStore } from '../store/useScorecardStore';

export const ScorecardLanding = () => {
    const nextStep = useScorecardStore((state) => state.nextStep);

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
            >
                <div className="inline-flex items-center space-x-2 bg-[#F7FAFC] text-[#1A365D] px-3 py-1 rounded-full text-sm font-medium mb-4 border border-[#38B2AC]/20">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38B2AC] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38B2AC]"></span>
                    </span>
                    <span>Free Diagnostic Tool</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1A365D] leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                    Are your books <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A365D] to-[#38B2AC]">tax-time-ready</span><br />
                    or <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38B2AC] to-[#319795]">decision-ready</span>?
                </h1>

                <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
                    Take the 3-minute Finance Ops Scorecard. Get your score + top fixes. Unlock a full PDF report + 12-month close & tax calendar.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="w-full max-w-sm"
            >
                <button
                    onClick={nextStep}
                    className="w-full group relative flex items-center justify-center space-x-2 bg-[#38B2AC] hover:bg-[#319795] text-white text-lg font-semibold py-4 px-8 rounded-lg shadow-[0_0_15px_rgba(56,178,172,0.3)] transition-all duration-200 transform hover:-translate-y-1"
                >
                    <span>Start (3 minutes)</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-gray-400 mt-3" style={{ fontFamily: 'var(--font-body)' }}>No numbers needed. Mostly tap-to-answer.</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 pt-8"
            >
                {['Fixed monthly plans', 'Cloud-first', 'Canada-wide', 'No spam'].map((tag) => (
                    <div key={tag} className="flex items-center space-x-1 bg-white px-3 py-1 rounded-full border border-gray-100 shadow-sm">
                        <CheckCircle2 className="w-3 h-3 text-[#38B2AC]" />
                        <span>{tag}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
