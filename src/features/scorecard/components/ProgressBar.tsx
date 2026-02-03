import React from 'react';
import { useScorecardStore } from '../store/useScorecardStore';

export const ProgressBar = () => {
    const { step, totalSteps } = useScorecardStore();

    // Only show on quiz steps (1-8)
    if (step < 1 || step > totalSteps) return null;

    const progress = ((step - 1) / totalSteps) * 100;

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <div className="h-2 bg-gray-100 w-full">
                <div
                    className="h-full bg-gradient-to-r from-[#1A365D] to-[#38B2AC] transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-gray-600 shadow-sm border border-gray-100">
                Step {step}/{totalSteps} • ~2 min left
            </div>
        </div>
    );
};
