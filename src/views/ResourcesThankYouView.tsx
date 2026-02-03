
"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, Download, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { RESOURCES } from '../data/resources';

const ResourcesThankYouContent: React.FC = () => {
    const searchParams = useSearchParams();
    const productId = searchParams.get('product');
    const product = RESOURCES.find(p => p.id === productId);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-slate-900">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 max-w-2xl w-full text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-500 to-blue-600"></div>

                <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-teal-100">
                    <CheckCircle2 className="w-10 h-10 text-teal-600" />
                </div>

                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                    Payment Received!
                </h1>

                <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto">
                    Thank you for your purchase{product ? ` of the ${product.title}` : ''}.
                    Your order is confirmed and your resources are on the way.
                </p>

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-10 text-left">
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Mail size={20} className="text-blue-500" /> What happens next:
                    </h3>
                    <ol className="space-y-4 text-slate-600 text-sm md:text-base">
                        <li className="flex gap-3">
                            <span className="font-bold text-slate-400">01</span>
                            <span>Check your email inbox for a message from <strong>Stripe / LedgerLogic</strong>.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-slate-400">02</span>
                            <span>Click the <strong>secure download link</strong> inside the email.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-slate-400">03</span>
                            <span>Save the files to your computer or Google Drive immediately.</span>
                        </li>
                    </ol>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/resources"
                        className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
                    >
                        Browse More Resources
                    </Link>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all"
                    >
                        Back to Home
                    </Link>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                    <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
                        <ShieldCheck size={14} /> Need help? Reply to your receipt email for support.
                    </p>
                </div>
            </div>
        </div>
    );
};

const ResourcesThankYouView: React.FC = () => {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading...</div>}>
            <ResourcesThankYouContent />
        </Suspense>
    );
};

export default ResourcesThankYouView;
