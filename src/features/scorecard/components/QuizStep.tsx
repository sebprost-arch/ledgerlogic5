import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useScorecardStore } from '../store/useScorecardStore';
import { ScorecardFormData } from '../../../lib/scorecard/types';

interface Option {
    label: string;
    value: string;
    description?: string;
}

interface QuizStepProps {
    question: string;
    field: keyof ScorecardFormData;
    options?: Option[];
    type: 'cards' | 'dropdown' | 'date';
    tooltip?: string;
    onSelect: (value: any) => void;
}

export const QuizStep: React.FC<QuizStepProps> = ({ question, field, options, type, tooltip, onSelect }) => {
    const prevStep = useScorecardStore((state) => state.prevStep);

    return (
        <div className="max-w-2xl mx-auto w-full px-4 min-h-[60vh] flex flex-col">
            <button
                onClick={prevStep}
                className="self-start text-[#4A5568] hover:text-[#1A365D] mb-6 flex items-center space-x-1 text-sm font-medium transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
            >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
            </button>

            <motion.div
                key={question}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
            >
                <h2 className="text-3xl font-bold text-[#1A365D] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{question}</h2>
                {tooltip && <p className="text-gray-500 text-sm mb-8 bg-[#F7FAFC] inline-block px-3 py-1 rounded-lg border border-gray-200">{tooltip}</p>}

                <div className="space-y-3">
                    {type === 'cards' && options?.map((opt) => (
                        <button
                            key={opt.value}
                            onClick={() => onSelect(opt.value)}
                            className="w-full text-left p-5 rounded-lg border-2 border-gray-100 hover:border-[#38B2AC] hover:bg-[#F7FAFC] transition-all duration-200 group bg-white shadow-sm"
                        >
                            <span className="block font-semibold text-lg text-[#1A202C] group-hover:text-[#38B2AC]" style={{ fontFamily: 'var(--font-heading)' }}>{opt.label}</span>
                            {opt.description && <span className="block text-sm text-gray-500 mt-1">{opt.description}</span>}
                        </button>
                    ))}

                    {type === 'dropdown' && (
                        <div className="grid grid-cols-1 gap-3">
                            {options?.map((opt) => (
                                <button
                                    key={opt.value}
                                    onClick={() => onSelect(opt.value)}
                                    className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-[#38B2AC] hover:bg-[#F7FAFC] transition-all bg-white"
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    )}

                    {type === 'date' && (
                        <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                            <input
                                type="date"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38B2AC] focus:border-[#38B2AC] outline-none transition-all"
                                onChange={(e) => onSelect(e.target.value)}
                            />
                            <button
                                onClick={() => onSelect('Not sure')}
                                className="mt-4 text-sm text-gray-400 hover:text-gray-600 underline"
                            >
                                I'm not sure
                            </button>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};
