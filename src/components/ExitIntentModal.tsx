import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

interface ExitIntentModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    buttonText: string;
    buttonLink?: string;
    onPrimaryClick?: () => void;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
    secondaryButtonAction?: () => void;
    footerDisclaimer?: string;
    bottomLinkText?: string;
    bottomLinkLink?: string;
    bottomLinkAction?: () => void;
}

const ExitIntentModal: React.FC<ExitIntentModalProps> = ({
    isOpen,
    onClose,
    title,
    description,
    buttonText,
    buttonLink,
    onPrimaryClick,
    secondaryButtonText,
    secondaryButtonLink,
    secondaryButtonAction,
    footerDisclaimer,
    bottomLinkText,
    bottomLinkLink,
    bottomLinkAction
}) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors z-20"
                    >
                        <X size={20} />
                    </button>

                    <div className="p-8 text-center pt-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-600 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3 font-display">
                            {title}
                        </h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            {description}
                        </p>

                        <div className="flex flex-col gap-3">
                            {/* Primary Action */}
                            {onPrimaryClick ? (
                                <button
                                    onClick={onPrimaryClick}
                                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-teal-500/20 hover:-translate-y-1 group"
                                >
                                    {buttonText}
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            ) : (
                                <Link
                                    href={buttonLink || '#'}
                                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-teal-500/20 hover:-translate-y-1 group"
                                >
                                    {buttonText}
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            )}

                            {/* Secondary Action */}
                            {(secondaryButtonText && (secondaryButtonLink || secondaryButtonAction)) && (
                                secondaryButtonLink ? (
                                    <Link
                                        href={secondaryButtonLink}
                                        className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-white border-2 border-slate-100 hover:border-teal-100 hover:bg-teal-50 text-slate-600 hover:text-teal-700 font-bold rounded-xl transition-all"
                                    >
                                        {secondaryButtonText}
                                    </Link>
                                ) : (
                                    <button
                                        onClick={secondaryButtonAction}
                                        className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-white border-2 border-slate-100 hover:border-teal-100 hover:bg-teal-50 text-slate-600 hover:text-teal-700 font-bold rounded-xl transition-all"
                                    >
                                        {secondaryButtonText}
                                    </button>
                                )
                            )}
                        </div>

                        {bottomLinkText && (
                            <div className="mt-4">
                                {bottomLinkLink ? (
                                    <Link href={bottomLinkLink} className="text-sm font-semibold text-teal-600 hover:text-teal-700 hover:underline">
                                        {bottomLinkText}
                                    </Link>
                                ) : bottomLinkAction ? (
                                    <button onClick={bottomLinkAction} className="text-sm font-semibold text-teal-600 hover:text-teal-700 hover:underline">
                                        {bottomLinkText}
                                    </button>
                                ) : null}
                            </div>
                        )}

                        {!secondaryButtonText && (
                            <button onClick={onClose} className="mt-6 text-xs text-slate-400 hover:text-slate-600 font-medium transition-colors">
                                No thanks, I'm not interested.
                            </button>
                        )}

                        {footerDisclaimer && (
                            <p className="mt-6 text-[10px] text-slate-400 leading-tight">
                                {footerDisclaimer}
                            </p>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ExitIntentModal;
