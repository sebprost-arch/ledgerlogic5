'use client';

import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useScorecardStore } from '../../src/features/scorecard/store/useScorecardStore';
import { ScorecardLanding } from '../../src/features/scorecard/components/ScorecardLanding';
import { QuizStep } from '../../src/features/scorecard/components/QuizStep';
import { ProgressBar } from '../../src/features/scorecard/components/ProgressBar';
import { ResultsView } from '../../src/features/scorecard/components/ResultsView';
import { DeepDive } from '../../src/features/scorecard/components/DeepDive';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

export default function ScorecardPage() {
    const { step, setAnswer, answers, submissionToken } = useScorecardStore();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [step]);

    if (step === 0) return <ScorecardLanding />;

    if (step >= 1 && step <= 8) {
        // Quiz config
        const steps = [
            { q: 'What is your annual revenue range?', f: 'revenueRange', t: 'cards', o: [{ l: '<100k', v: '<100k' }, { l: '100k–500k', v: '100k–500k' }, { l: '500k–2M', v: '500k–2M' }, { l: '2M–10M', v: '2M–10M' }, { l: '10M+', v: '10M+' }] },
            { q: 'Which province are you based in?', f: 'province', t: 'dropdown', o: [{ l: 'Ontario', v: 'ON' }, { l: 'British Columbia', v: 'BC' }, { l: 'Alberta', v: 'AB' }, { l: 'Quebec', v: 'QC' }, { l: 'Other', v: 'Other' }] },
            { q: 'When is your fiscal year-end?', f: 'fiscalYearEnd', t: 'date', tooltip: 'This helps us build your custom calendar.' },
            { q: 'What specific accounting system do you use?', f: 'accountingSystem', t: 'cards', o: [{ l: 'Xero', v: 'Xero' }, { l: 'QuickBooks Online', v: 'QuickBooks Online' }, { l: 'Other', v: 'Other' }, { l: 'Spreadsheet / None', v: 'Spreadsheet' }] },
            { q: 'How often are books reconciled?', f: 'reconciliations', t: 'cards', o: [{ l: 'Weekly', v: 'Weekly' }, { l: 'Monthly', v: 'Monthly' }, { l: 'Quarterly', v: 'Quarterly' }, { l: 'Not sure', v: 'Not sure' }] },
            { q: 'How long does month-end close take?', f: 'closeTime', t: 'cards', o: [{ l: '5–10 days', v: '5–10 days' }, { l: '11–20 days', v: '11–20 days' }, { l: '21–30 days', v: '21–30 days' }, { l: 'We don’t really close', v: 'We don’t really close' }] },
            { q: 'What is your GST/HST status?', f: 'gstStatus', t: 'cards', o: [{ l: 'Registered & confident', v: 'Registered and confident' }, { l: 'Registered but unsure', v: 'Registered but unsure' }, { l: 'Not registered', v: 'Not registered' }, { l: 'Not sure', v: 'Not sure' }] },
            { q: 'Do you have real-time cash visibility?', f: 'cashVisibility', t: 'cards', o: [{ l: 'Yes, I know runway in 5 mins', v: 'I know runway in 5 minutes' }, { l: 'Rough estimate only', v: 'Rough estimate' }, { l: 'No, I don’t know', v: 'I don’t know' }] },
        ];

        const current = steps[step - 1];

        return (
            <>
                <ProgressBar />
                <div className="pt-20">
                    <QuizStep
                        key={step}
                        question={current.q}
                        field={current.f as any}
                        options={current.o as any}
                        type={current.t as any}
                        tooltip={current.tooltip}
                        onSelect={(val) => {
                            setAnswer(current.f as any, val);
                            useScorecardStore.getState().nextStep();
                        }}
                    />
                </div>
            </>
        );
    }

    if (step === 9) {
        return <ResultsView />;
    }

    if (step === 10) {
        return <DeepDive />;
    }

    if (step >= 11) {
        return (
            <div className="max-w-4xl mx-auto p-10 text-center min-h-screen flex flex-col items-center justify-center space-y-8">
                <CheckCircle2Icon className="w-20 h-20 text-[#38B2AC] mb-4" />
                <h2 className="text-4xl font-bold text-[#1A365D]" style={{ fontFamily: 'var(--font-heading)' }}>You're unlocked!</h2>
                <p className="text-xl text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>Your custom report and calendar are ready.</p>

                <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl">
                    <a
                        href={`/api/scorecard/download/pdf?token=${submissionToken}`}
                        target="_blank"
                        className="flex flex-col items-center justify-center p-8 bg-blue-50 border-2 border-blue-100 rounded-lg hover:border-[#1A365D] hover:shadow-lg transition-all group cursor-pointer"
                    >
                        <Download className="w-10 h-10 text-[#1A365D] mb-4 group-hover:scale-110 transition-transform" />
                        <span className="font-bold text-[#1A365D]">Download PDF Report</span>
                    </a>
                    <a
                        href={`/api/scorecard/download/ics?token=${submissionToken}`}
                        target="_blank"
                        className="flex flex-col items-center justify-center p-8 bg-teal-50 border-2 border-teal-100 rounded-lg hover:border-[#38B2AC] hover:shadow-lg transition-all group cursor-pointer"
                    >
                        <CalendarIcon className="w-10 h-10 text-[#38B2AC] mb-4 group-hover:scale-110 transition-transform" />
                        <span className="font-bold text-[#1A365D]">Download Calendar (.ics)</span>
                    </a>
                </div>

                <div className="mt-12 bg-[#1A365D] text-white p-8 rounded-2xl w-full max-w-2xl">
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Want more clarity?</h3>
                    <p className="mb-6 opacity-80" style={{ fontFamily: 'var(--font-body)' }}>Book a free 20-minute review of your results with a CPA.</p>
                    <Link href="/contact" className="inline-block bg-[#38B2AC] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#319795] transition-colors shadow-lg">
                        Book a Clarity Call
                    </Link>
                </div>
            </div>
        );
    }
    return null;
}

function CheckCircle2Icon(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}

function CalendarIcon(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
    )
}
