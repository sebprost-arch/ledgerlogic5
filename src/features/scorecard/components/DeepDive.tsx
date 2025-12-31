import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, SkipForward } from 'lucide-react';
import { useScorecardStore } from '../store/useScorecardStore';
import { DeepDiveFormData } from '../../../lib/scorecard/types';

export const DeepDive = () => {
    const { nextStep, setDeepDiveAnswer } = useScorecardStore();
    const [localStep, setLocalStep] = useState(0);

    const questions: { q: string, f: keyof DeepDiveFormData, o: string[] }[] = [
        { q: 'What is your payment stack?', f: 'paymentStack', o: ['Stripe', 'Invoicing', 'Mixed / Not sure'] },
        { q: 'How do you capture receipts?', f: 'receiptCapture', o: ['Automated (Dext/Hubdoc)', 'Mixed', 'Manual / Missing often'] },
        { q: 'How often do you track KPIs?', f: 'kpiTracking', o: ['Monthly dashboard', 'Sometimes', 'Rarely'] },
        { q: 'How is your payroll managed?', f: 'payroll', o: ['None', 'Always on time', 'Sometimes late/unclear'] },
        { q: 'How are your AR collections?', f: 'arCollections', o: ['Mostly autopay', 'Low overdue', 'Overdue common'] },
        { q: 'Do you have tool sprawl?', f: 'toolSprawl', o: ['Clean stack', 'Too many tools', 'Not sure'] },
    ];

    const current = questions[localStep];

    const handleAnswer = (val: string) => {
        setDeepDiveAnswer(current.f, val);
        if (localStep < questions.length - 1) {
            setLocalStep(localStep + 1);
        } else {
            nextStep();
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 md:p-10 bg-white min-h-[60vh] flex flex-col items-center justify-center text-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full"
            >
                <div className="mb-8">
                    <span className="bg-[#F7FAFC] text-[#1A365D] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-gray-200">Bonus Step</span>
                    <h2 className="text-3xl font-bold text-[#1A365D] mt-4 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{current.q}</h2>
                    <p className="text-gray-500 text-sm">Question {localStep + 1} of {questions.length}</p>
                </div>

                <div className="grid gap-3 w-full max-w-md mx-auto">
                    {current.o.map((opt) => (
                        <button
                            key={opt}
                            onClick={() => handleAnswer(opt)}
                            className="w-full text-left p-4 rounded-lg border-2 border-gray-100 hover:border-[#38B2AC] hover:bg-[#F7FAFC] transition-all font-medium text-gray-700 hover:text-[#1A365D]"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            {opt}
                        </button>
                    ))}
                </div>

                <button
                    onClick={nextStep}
                    className="mt-8 text-gray-400 hover:text-gray-600 text-sm flex items-center justify-center mx-auto space-x-1"
                >
                    <SkipForward className="w-4 h-4" />
                    <span>Skip to my report</span>
                </button>
            </motion.div>
        </div>
    );
};
