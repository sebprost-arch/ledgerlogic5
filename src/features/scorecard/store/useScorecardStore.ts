import { create } from 'zustand';
import { ScorecardFormData, DeepDiveFormData, ScoreResult } from '../../../lib/scorecard/types';

interface ScorecardState {
    step: number;
    totalSteps: number;
    answers: Partial<ScorecardFormData>;
    deepDiveAnswers: Partial<DeepDiveFormData>;
    scoreResult: ScoreResult | null;
    isSubmitting: boolean;
    submissionToken: string | null;

    // Actions
    setStep: (step: number) => void;
    nextStep: () => void;
    prevStep: () => void;
    setAnswer: (key: keyof ScorecardFormData, value: any) => void;
    setDeepDiveAnswer: (key: keyof DeepDiveFormData, value: any) => void;
    setScoreResult: (result: ScoreResult) => void;
    setSubmissionToken: (token: string) => void;
    setIsSubmitting: (isSubmitting: boolean) => void;
    reset: () => void;
}

export const useScorecardStore = create<ScorecardState>((set) => ({
    step: 0,
    totalSteps: 8,
    answers: {},
    deepDiveAnswers: {},
    scoreResult: null,
    isSubmitting: false,
    submissionToken: null,

    setStep: (step) => set({ step }),
    nextStep: () => set((state) => ({ step: state.step + 1 })),
    prevStep: () => set((state) => ({ step: Math.max(0, state.step - 1) })),
    setAnswer: (key, value) => set((state) => ({ answers: { ...state.answers, [key]: value } })),
    setDeepDiveAnswer: (key, value) => set((state) => ({ deepDiveAnswers: { ...state.deepDiveAnswers, [key]: value } })),
    setScoreResult: (scoreResult) => set({ scoreResult }),
    setSubmissionToken: (submissionToken) => set({ submissionToken }),
    setIsSubmitting: (isSubmitting) => set({ isSubmitting }),
    reset: () => set({ step: 0, answers: {}, deepDiveAnswers: {}, scoreResult: null, submissionToken: null }),
}));
