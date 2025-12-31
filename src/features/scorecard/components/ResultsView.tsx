import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Check, Lock, ChevronRight, FileText, Calendar } from 'lucide-react';
import { useScorecardStore } from '../store/useScorecardStore';
import { calculateScore } from '../../../lib/scorecard/scoring';
import { ScorecardFormData } from '../../../lib/scorecard/types';

export const ResultsView = () => {
    const { answers, setScoreResult, scoreResult, nextStep } = useScorecardStore();
    const [email, setEmail] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const setSubmissionToken = useScorecardStore(state => state.setSubmissionToken);

    useEffect(() => {
        if (!scoreResult && Object.keys(answers).length > 0) {
            const result = calculateScore(answers as ScorecardFormData);
            setScoreResult(result);
            if (result.score >= 70) {
                confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
            }
        }
    }, [answers, scoreResult, setScoreResult]);

    if (!scoreResult) return <div className="p-10 text-center">Calculating DNA...</div>;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const response = await fetch('/api/scorecard/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, ...answers, scoreResult })
            });
            const data = await response.json();
            if (data.token) {
                setSubmissionToken(data.token);
                nextStep();
            }
        } catch (error) {
            console.error('Submission failed', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 md:p-10 bg-white min-h-screen">
            <div className="text-center mb-12">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Your Finance Ops Score</p>
                <div className="relative inline-block">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-[#1A365D] to-[#38B2AC]"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        {scoreResult.score}
                    </motion.div>
                </div>
                <h2 className="text-2xl font-bold text-[#1A365D] mt-4" style={{ fontFamily: 'var(--font-heading)' }}>{scoreResult.tier}</h2>
                <p className="text-gray-600 max-w-xl mx-auto mt-2" style={{ fontFamily: 'var(--font-body)' }}>{scoreResult.tierDescription}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                    <h3 className="text-lg font-bold text-[#1A365D] mb-4 flex items-center" style={{ fontFamily: 'var(--font-heading)' }}>
                        <span className="w-8 h-8 rounded-full bg-[#1A365D]/10 text-[#1A365D] flex items-center justify-center mr-2 text-sm">1</span>
                        Top 3 Quick Wins
                    </h3>
                    <ul className="space-y-4">
                        {scoreResult.quickWins.map((win, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start bg-[#F7FAFC] p-4 rounded-lg border border-gray-100"
                            >
                                <Check className="w-5 h-5 text-[#38B2AC] mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-800 text-sm" style={{ fontFamily: 'var(--font-body)' }}>{win}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-[#1A365D] mb-4 flex items-center" style={{ fontFamily: 'var(--font-heading)' }}>
                        <span className="w-8 h-8 rounded-full bg-[#38B2AC]/10 text-[#38B2AC] flex items-center justify-center mr-2 text-sm">2</span>
                        Category Breakdown
                    </h3>
                    <div className="space-y-6">
                        {Object.entries(scoreResult.subscores).map(([key, val]) => (
                            <div key={key}>
                                <div className="flex justify-between text-sm font-medium text-gray-700 mb-1 capitalize" style={{ fontFamily: 'var(--font-body)' }}>
                                    <span>{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                    <span>{val}/100</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${val}%` }}
                                        transition={{ duration: 1 }}
                                        className={`h-full ${val > 70 ? 'bg-[#38B2AC]' : val > 40 ? 'bg-yellow-400' : 'bg-red-400'}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-[#1A365D] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
                <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Unlock your full report.</h3>
                        <p className="text-blue-100 mb-8" style={{ fontFamily: 'var(--font-body)' }}>Get the detailed PDF report with actionable risks + a customized 12-month close calendar (.ics).</p>

                        <div className="flex space-x-6 mb-8 text-sm text-blue-200">
                            <div className="flex items-center">
                                <FileText className="w-4 h-4 mr-2" />
                                PDF Action Plan
                            </div>
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                12-Month Calendar
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="sr-only">Work Email</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your work email"
                                    className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white border-0 focus:ring-2 focus:ring-[#38B2AC]"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full bg-[#38B2AC] hover:bg-[#319795] text-white font-bold py-3 rounded-lg flex items-center justify-center transition-all disabled:opacity-75"
                            >
                                {submitting ? 'Unlocking...' : 'Unlock Full Report & Calendar'}
                                {!submitting && <ChevronRight className="w-4 h-4 ml-2" />}
                            </button>
                            <p className="text-xs text-blue-300 flex items-center justify-center">
                                <Lock className="w-3 h-3 mr-1" />
                                No spam. Unsubscribe anytime.
                            </p>
                        </form>
                    </div>
                    <div className="hidden md:block opacity-20">
                        {/* Abstract Shape */}
                        <div className="absolute right-0 top-0 w-64 h-64 bg-[#38B2AC] rounded-full filter blur-[80px]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
