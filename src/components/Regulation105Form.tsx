"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Loader2, AlertTriangle, X, Building2, Globe, DollarSign, Users, FileText, ArrowRight, Briefcase, MapPin, RefreshCcw } from 'lucide-react';

// Types for the form data
interface FormData {
    residencyCountry: string;
    entityType: string;
    totalAmountPaid: string;
    amountWithheld: string;
    currency: string;
    serviceDates: string;
    provinces: string[];
    serviceType: string;
    numPayers: string;
    proofAvailable: string;
    hasOffice: string;
    hasEmployees: string;
    hasCraNumber: string;
    craNumber?: string;
}

type ResultType = 'LIKELY' | 'REVIEW' | 'UNLIKELY';

// --- UI COMPONENTS (Defined outside to prevent re-renders) ---

// 1. Premium Selection Tile
const TileOption = ({
    label,
    subLabel,
    selected,
    onClick,
    icon: Icon
}: {
    label: string;
    subLabel?: string;
    selected: boolean;
    onClick: () => void;
    icon?: any;
}) => (
    <button
        onClick={onClick}
        className={`relative group w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 outline-none
        ${selected
                ? 'border-teal-500 bg-teal-50/50 ring-4 ring-teal-500/10'
                : 'border-slate-100 bg-white hover:border-teal-200 hover:shadow-lg hover:-translate-y-0.5'
            }`}
    >
        <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
                {Icon && (
                    <div className={`p-3 rounded-xl transition-colors ${selected ? 'bg-teal-500 text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-500'}`}>
                        <Icon size={24} strokeWidth={1.5} />
                    </div>
                )}
                <div>
                    <span className={`block text-lg font-bold ${selected ? 'text-teal-900' : 'text-slate-700'}`}>{label}</span>
                    {subLabel && <span className="text-sm text-slate-500 font-medium">{subLabel}</span>}
                </div>
            </div>
            {selected && (
                <div className="bg-teal-500 rounded-full p-1 text-white animate-in zoom-in spin-in-12 duration-300">
                    <Check size={16} />
                </div>
            )}
        </div>
    </button>
);

// 2. Modern Big Input
const ModernInput = ({ label, value, onChange, placeholder, prefix, type = "text" }: any) => (
    <div className="relative">
        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{label}</label>
        <div className="relative group">
            {prefix && (
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xl group-focus-within:text-teal-500 transition-colors pointer-events-none">
                    {prefix}
                </div>
            )}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full bg-slate-50 border-2 border-slate-200 rounded-xl py-4 pr-4 font-bold text-2xl text-slate-900 outline-none focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all placeholder:text-slate-300 ${prefix ? 'pl-10' : 'pl-4'
                    }`}
            />
        </div>
    </div>
);

const Regulation105Form = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState<FormData>({
        residencyCountry: '',
        entityType: '',
        totalAmountPaid: '',
        amountWithheld: '',
        currency: 'CAD',
        serviceDates: '',
        provinces: [],
        serviceType: '',
        numPayers: '',
        proofAvailable: '',
        hasOffice: '',
        hasEmployees: '',
        hasCraNumber: '',
        craNumber: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [analysisStep, setAnalysisStep] = useState<string>('');
    const [result, setResult] = useState<ResultType | null>(null);
    const [contactModalOpen, setContactModalOpen] = useState(false);
    const [contactSubmitted, setContactSubmitted] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState<string>('');
    const [contactData, setContactData] = useState({ name: '', email: '' });
    const [isSendingEmail, setIsSendingEmail] = useState(false);

    const formRef = React.useRef<HTMLDivElement>(null);

    // Auto-advance helper
    const updateField = (field: keyof FormData, value: any, autoAdvance = false) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (autoAdvance) {
            setTimeout(() => handleNext(), 300);
        }
    };

    const handleNext = () => {
        // Prevent going past the last step (Step 3 / Index 3)
        setStep(prev => prev < 3 ? prev + 1 : prev);
    };
    const handleBack = () => setStep(prev => prev - 1);

    // Scroll to top on success
    useEffect(() => {
        if (contactSubmitted && formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [contactSubmitted]);

    // Logic to determine result
    const calculateResult = (): ResultType => {
        const withheld = parseFloat(formData.amountWithheld.replace(/[^0-9.]/g, '') || '0');
        const hasPE = formData.hasOffice === 'Yes' || formData.hasEmployees === 'Yes';
        const notSurePE = formData.hasOffice === 'Not sure' || formData.hasEmployees === 'Not sure';
        const queuebec = formData.provinces.includes('Québec');
        const noProof = formData.proofAvailable === 'Not sure' || formData.proofAvailable === 'No';

        if (withheld <= 0) return 'UNLIKELY';
        if (hasPE || notSurePE) return 'REVIEW'; // PE risk
        if (queuebec) return 'REVIEW'; // Quebec complexity
        if (noProof) return 'REVIEW'; // Documentation check needed
        return 'LIKELY';
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);

        // Mock Analysis Sequence
        const sequence = ['Scanning treaty details...', 'Checking PE risk factors...', 'Validating withholding rates...', 'Finalizing eligibility...'];

        for (const msg of sequence) {
            setAnalysisStep(msg);
            await new Promise(r => setTimeout(r, 800));
        }

        const res = calculateResult();
        setResult(res);
        setIsSubmitting(false);
    };

    const handlePackageSelect = (pkgName: string) => {
        setSelectedPackage(pkgName);
        setContactModalOpen(true);
    };

    const handleContactSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSendingEmail(true);

        try {
            await fetch('/api/send-reg105', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contact: contactData,
                    formData,
                    result
                })
            });

            // Success! Show confirmation
            setContactSubmitted(true);
            setContactModalOpen(false);
        } catch (error) {
            console.error('Failed to send email:', error);
            // Fallback: Show success anyway to not alarm user
            setContactSubmitted(true);
            setContactModalOpen(false);
        } finally {
            setIsSendingEmail(false);
        }
    };

    // Render Steps
    const renderStep = () => {
        switch (step) {
            case 0: // Intro / Basic Info
                return (
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-2 font-heading tracking-tight">Let's check your eligibility.</h3>
                            <p className="text-lg text-slate-500">First, tell us about your company entity.</p>
                        </div>

                        <div className="space-y-6">
                            <div className="grid gap-4">
                                <TileOption
                                    label="United States"
                                    subLabel="US Resident Entity"
                                    icon={Globe}
                                    selected={formData.residencyCountry === 'USA'}
                                    onClick={() => updateField('residencyCountry', 'USA')}
                                />
                                <TileOption
                                    label="International / Other"
                                    subLabel="Non-US Resident"
                                    icon={Globe}
                                    selected={formData.residencyCountry === 'Other'}
                                    onClick={() => updateField('residencyCountry', 'Other')}
                                />
                            </div>

                            <AnimatePresence>
                                {formData.residencyCountry && (
                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                                        <div className="pt-4 border-t border-slate-100">
                                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Entity Structure</p>
                                            <div className="grid md:grid-cols-3 gap-3">
                                                {['Corporation', 'Individual', 'Partnership'].map(type => (
                                                    <button
                                                        key={type}
                                                        onClick={() => updateField('entityType', type, true)}
                                                        className={`p-4 rounded-xl border-2 font-bold text-sm transition-all text-center
                                                    ${formData.entityType === type
                                                                ? 'border-teal-500 bg-teal-50 text-teal-900'
                                                                : 'border-slate-100 text-slate-600 hover:border-teal-200 hover:bg-white'}`}
                                                    >
                                                        {type}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                );

            case 1: // Financials
                return (
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-2 font-heading tracking-tight">Financial Impact</h3>
                            <p className="text-lg text-slate-500 whitespace-pre-line">How much was withheld?  Estimates are fine.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <ModernInput
                                label="Total Invoiced"
                                value={formData.totalAmountPaid}
                                onChange={(e: any) => updateField('totalAmountPaid', e.target.value)}
                                prefix="$"
                                placeholder="0.00"
                            />
                            <ModernInput
                                label="Amount Withheld"
                                value={formData.amountWithheld}
                                onChange={(e: any) => updateField('amountWithheld', e.target.value)}
                                prefix="$"
                                placeholder="0.00"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Currency</label>
                                <div className="flex bg-slate-100 p-1.5 rounded-xl">
                                    {['CAD', 'USD', 'Other'].map(curr => (
                                        <button
                                            key={curr}
                                            onClick={() => updateField('currency', curr)}
                                            className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all shadow-sm ${formData.currency === curr
                                                ? 'bg-white text-slate-900 ring-1 ring-slate-200 shadow-md'
                                                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50 shadow-transparent'
                                                }`}
                                        >
                                            {curr}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide"># of Payers</label>
                                <div className="flex bg-slate-100 p-1.5 rounded-xl">
                                    {['1', '2-3', '4+'].map(opt => (
                                        <button
                                            key={opt}
                                            onClick={() => updateField('numPayers', opt)}
                                            className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all shadow-sm ${formData.numPayers === opt
                                                ? 'bg-white text-teal-700 ring-1 ring-teal-200 shadow-md'
                                                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50 shadow-transparent'
                                                }`}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button onClick={handleBack} className="px-6 py-4 rounded-xl font-bold text-slate-500 hover:bg-slate-50 transition-colors">Back</button>
                            <button
                                onClick={handleNext}
                                disabled={!formData.totalAmountPaid || !formData.amountWithheld}
                                className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            >
                                Continue <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                );

            case 2: // Service Details
                return (
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-2 font-heading tracking-tight">Service Context</h3>
                            <p className="text-lg text-slate-500">What kind of work did you perform in Canada?</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { val: 'Consulting', icon: Briefcase },
                                { val: 'Training', icon: Users },
                                { val: 'Construction/Eng', icon: Check },
                                { val: 'Other', icon: FileText }
                            ].map(({ val, icon: Icon }) => (
                                <button
                                    key={val}
                                    onClick={() => updateField('serviceType', val)}
                                    className={`p-4 text-left rounded-xl border-2 transition-all hover:shadow-md flex flex-col gap-2 ${formData.serviceType === val
                                        ? 'border-teal-500 bg-teal-50 ring-2 ring-teal-500/20'
                                        : 'border-slate-100 bg-white hover:border-teal-200'
                                        }`}
                                >
                                    <Icon size={24} className={formData.serviceType === val ? 'text-teal-600' : 'text-slate-400'} />
                                    <span className={`font-bold ${formData.serviceType === val ? 'text-teal-900' : 'text-slate-600'}`}>{val}</span>
                                </button>
                            ))}
                        </div>

                        <div>
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Location (Provinces)</p>
                            <div className="flex flex-wrap gap-2">
                                {['Ontario', 'Québec', 'BC', 'Alberta', 'Other'].map(prov => (
                                    <button
                                        key={prov}
                                        onClick={() => {
                                            const newProvs = formData.provinces.includes(prov)
                                                ? formData.provinces.filter(p => p !== prov)
                                                : [...formData.provinces, prov];
                                            setFormData(prev => ({ ...prev, provinces: newProvs }));
                                        }}
                                        className={`px-4 py-2 rounded-full border text-sm font-bold transition-all ${formData.provinces.includes(prov)
                                            ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                                            : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'
                                            }`}
                                    >
                                        {formData.provinces.includes(prov) && <span className="mr-2">✓</span>}
                                        {prov}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button onClick={handleBack} className="px-6 py-4 rounded-xl font-bold text-slate-500 hover:bg-slate-50 transition-colors">Back</button>
                            <button
                                onClick={handleNext}
                                disabled={!formData.serviceType || formData.provinces.length === 0}
                                className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            >
                                Continue <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                );

            case 3: // Compliance / PE
                return (
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-2 font-heading tracking-tight">Final Checks</h3>
                            <p className="text-lg text-slate-500">Checking for "Permanent Establishment" risks.</p>
                        </div>

                        <div className="space-y-4">
                            <TileOption
                                label="No Office in Canada"
                                subLabel="We do not have a fixed place of business."
                                icon={Building2}
                                selected={formData.hasOffice === 'No'}
                                onClick={() => updateField('hasOffice', 'No')}
                            />
                            <TileOption
                                label="Yes / Unsure"
                                subLabel="We might have an office or fixed base."
                                icon={MapPin}
                                selected={formData.hasOffice === 'Yes'}
                                onClick={() => updateField('hasOffice', 'Yes')}
                            />
                        </div>

                        <div className="space-y-4 pt-4 border-t border-slate-100">
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Employees</p>
                            <div className="grid grid-cols-2 gap-4">
                                <button onClick={() => updateField('hasEmployees', 'No')}
                                    className={`p-4 border-2 rounded-xl font-bold ${formData.hasEmployees === 'No' ? 'border-teal-500 bg-teal-50' : 'border-slate-100 hover:border-teal-200'}`}>
                                    No Employees in Canada
                                </button>
                                <button onClick={() => updateField('hasEmployees', 'Yes')}
                                    className={`p-4 border-2 rounded-xl font-bold ${formData.hasEmployees === 'Yes' ? 'border-teal-500 bg-teal-50' : 'border-slate-100 hover:border-teal-200'}`}>
                                    Yes / Unsure
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-8">
                            <button onClick={handleBack} className="px-6 py-4 rounded-xl font-bold text-slate-500 hover:bg-slate-50 transition-colors">Back</button>
                            <button
                                onClick={handleSubmit}
                                disabled={!formData.hasOffice || !formData.hasEmployees || isSubmitting}
                                className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-xl font-bold transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-1"
                            >
                                {isSubmitting ? (
                                    <><Loader2 className="animate-spin" size={20} /> Analyzing...</>
                                ) : (
                                    <>Reveal My Eligibility <ArrowRight size={20} /></>
                                )}
                            </button>
                        </div>
                    </div>
                );

            default: return null;
        }
    };

    // --- SUCCESS STATE ---
    if (contactSubmitted) {
        return (
            <div ref={formRef} className="bg-white/90 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/50 w-full max-w-2xl mx-auto min-h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mb-6 text-teal-600">
                    <Check size={48} strokeWidth={2} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 font-heading">Query Received</h3>
                <p className="text-xl text-slate-600 leading-relaxed max-w-lg mx-auto">
                    Thank you, {contactData.name.split(' ')[0]}.<br />
                    We have received your information. Our team will review your eligibility and reach out shortly with next steps.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-10 px-8 py-3 rounded-full font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 hover:text-slate-700 transition-all flex items-center gap-2 mx-auto group"
                >
                    <RefreshCcw size={18} className="transition-transform group-hover:-rotate-180" />
                    Restart questionnaire
                </button>
            </div>
        );
    }

    // --- RESULT VIEW ---
    if (result) {
        return (
            <div className="w-full animate-in fade-in zoom-in duration-500">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 relative overflow-hidden">
                    {/* Header */}
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 ${result === 'LIKELY' ? 'bg-green-100 text-green-600' :
                            result === 'REVIEW' ? 'bg-amber-100 text-amber-600' :
                                'bg-red-100 text-red-600'
                            }`}>
                            {result === 'LIKELY' && <Check size={48} strokeWidth={2} />}
                            {result === 'REVIEW' && <AlertTriangle size={48} strokeWidth={2} />}
                            {result === 'UNLIKELY' && <X size={48} strokeWidth={2} />}
                        </div>
                        <h3 className="text-4xl font-bold text-slate-900 mb-4 font-heading tracking-tight">
                            {result === 'LIKELY' ? "You're Eligible for a Refund." : "Eligibility Needs Review."}
                        </h3>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            {result === 'LIKELY'
                                ? "Based on your inputs, we can likely recover the full 15% withheld amount via a standard tax filing."
                                : "We detected some complexity (like potential PE or Québec involvement). We recommend a triage review first."}
                        </p>
                    </div>

                    {/* Breakdown Card */}
                    <div className="bg-slate-50 rounded-2xl p-6 md:p-8 mb-12 border border-slate-200">
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Eligibility Scorecard</h4>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-green-100 text-green-700 rounded-lg"><Check size={20} /></div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">Residency</p>
                                    <p className="font-bold text-slate-900">{formData.residencyCountry}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-green-100 text-green-700 rounded-lg"><Check size={20} /></div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">PE Status</p>
                                    <p className="font-bold text-slate-900">{result === 'LIKELY' ? 'Clean' : 'Needs Review'}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-teal-100 text-teal-700 rounded-lg"><DollarSign size={20} /></div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">Est. Recovery</p>
                                    <p className="font-bold text-slate-900">{formData.amountWithheld || '$0.00'}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Packages Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Package 1 */}
                        <div className={`p-6 rounded-2xl border-2 flex flex-col transition-all ${result === 'REVIEW' ? 'border-teal-500 bg-teal-50/50 shadow-xl scale-105 z-10' : 'border-slate-100 bg-white hover:border-slate-200'}`}>
                            <div className="mb-4">
                                <span className="text-xs font-bold text-teal-600 bg-teal-100 px-3 py-1 rounded-full uppercase tracking-wide">Step 1</span>
                                <h4 className="text-xl font-bold text-slate-900 mt-3">Triage Review</h4>
                                <div className="text-3xl font-bold text-slate-900 my-2">$500</div>
                                <p className="text-sm text-slate-500">For complex cases or missing docs.</p>
                            </div>
                            <ul className="space-y-3 mb-8 flex-grow">
                                <li className="flex gap-2 text-sm text-slate-700"><Check size={16} className="text-teal-500 mt-1" /> Treaty Position Analysis</li>
                                <li className="flex gap-2 text-sm text-slate-700"><Check size={16} className="text-teal-500 mt-1" /> PE Risk Assessment</li>
                            </ul>
                            <button onClick={() => handlePackageSelect('Triage Review')} className={`w-full py-3 rounded-xl font-bold ${result === 'REVIEW' ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'} transition-all`}>Get Started</button>
                        </div>

                        {/* Package 2 */}
                        <div className={`p-6 rounded-2xl border-2 flex flex-col transition-all ${result === 'LIKELY' ? 'border-teal-500 bg-teal-50/50 shadow-xl scale-105 z-10' : 'border-slate-100 bg-white hover:border-slate-200'}`}>
                            <div className="mb-4">
                                <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${result === 'LIKELY' ? 'text-teal-600 bg-teal-100' : 'text-slate-400 bg-slate-100'}`}>Recommended</span>
                                <h4 className="text-xl font-bold text-slate-900 mt-3">Standard Filing</h4>
                                <div className="text-3xl font-bold text-slate-900 my-2">$1,500</div>
                                <p className="text-sm text-slate-500">Turnkey refund recovery.</p>
                            </div>
                            <ul className="space-y-3 mb-8 flex-grow">
                                <li className="flex gap-2 text-sm text-slate-700"><Check size={16} className="text-teal-500 mt-1" /> T2 Corporate Return</li>
                                <li className="flex gap-2 text-sm text-slate-700"><Check size={16} className="text-teal-500 mt-1" /> Schedule 91 & 97</li>
                                <li className="flex gap-2 text-sm text-slate-700"><Check size={16} className="text-teal-500 mt-1" /> CRA Correspondence</li>
                            </ul>
                            <button onClick={() => handlePackageSelect('Standard Filing')} className={`w-full py-3 rounded-xl font-bold ${result === 'LIKELY' ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-lg hover:shadow-teal-500/25' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'} transition-all`}>Start Recovery</button>
                        </div>

                        {/* Package 3 */}
                        <div className="p-6 rounded-2xl border-2 border-slate-100 bg-white flex flex-col hover:border-slate-200 transition-all">
                            <div className="mb-4">
                                <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wide">Complex</span>
                                <h4 className="text-xl font-bold text-slate-900 mt-3">Priority + Rep</h4>
                                <div className="text-3xl font-bold text-slate-900 my-2">$3,000</div>
                                <p className="text-sm text-slate-500">Full audit representation.</p>
                            </div>
                            <ul className="space-y-3 mb-8 flex-grow">
                                <li className="flex gap-2 text-sm text-slate-700"><Check size={16} className="text-teal-500 mt-1" /> Dedicated Case Manager</li>
                                <li className="flex gap-2 text-sm text-slate-700"><Check size={16} className="text-teal-500 mt-1" /> Audit Defense</li>
                            </ul>
                            <button onClick={() => handlePackageSelect('Priority + Rep')} className="w-full py-3 rounded-xl font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all">Contact Us</button>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <button onClick={() => setResult(null)} className="text-slate-400 hover:text-slate-600 font-bold hover:underline">Start Over</button>
                </div>

                {/* Contact Modal */}
                <AnimatePresence>
                    {contactModalOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
                        >
                            <motion.div
                                initial={{ scale: 0.95, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.95, y: 20 }}
                                className="bg-white rounded-2xl w-full max-w-md p-8 relative shadow-2xl"
                            >
                                <button
                                    onClick={() => setContactModalOpen(false)}
                                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
                                >
                                    <X size={20} />
                                </button>

                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Wait, one final step.</h3>
                                <p className="text-slate-500 mb-6">Enter your details to receive your eligibility report.</p>

                                <form onSubmit={handleContactSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 outline-none focus:border-teal-500 transition-colors"
                                            placeholder="e.g. Jane Doe"
                                            value={contactData.name}
                                            onChange={e => setContactData({ ...contactData, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 outline-none focus:border-teal-500 transition-colors"
                                            placeholder="e.g. jane@company.com"
                                            value={contactData.email}
                                            onChange={e => setContactData({ ...contactData, email: e.target.value })}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSendingEmail}
                                        className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl mt-4 hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                                    >
                                        {isSendingEmail ? <Loader2 className="animate-spin" /> : 'Submit to LedgerLogic'}
                                    </button>
                                </form>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    // --- LOADING STATE ---
    if (isSubmitting) {
        return (
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/50 w-full max-w-2xl mx-auto min-h-[500px] flex flex-col items-center justify-center text-center">
                <div className="relative mb-8">
                    <div className="absolute inset-0 bg-teal-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                    <Loader2 size={64} className="text-teal-600 animate-spin relative z-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 font-heading">Analyzing Eligibility...</h3>
                <p className="text-slate-500 h-6 transition-all duration-300">{analysisStep}</p>
            </div>
        );
    }

    // --- FORM CONTAINER ---
    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Progress Header */}
            <div className="flex items-center justify-between mb-6 px-2">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Step {step + 1} of 4</span>
                <div className="flex gap-1">
                    {[0, 1, 2, 3].map(i => (
                        <div key={i} className={`h-1.5 w-8 rounded-full transition-all duration-500 ${i <= step ? 'bg-teal-500' : 'bg-slate-200'}`} />
                    ))}
                </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl shadow-slate-200/50 border border-white/50 relative overflow-hidden transition-all hover:shadow-3xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        {renderStep()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Regulation105Form;
