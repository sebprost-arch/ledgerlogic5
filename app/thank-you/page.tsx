import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Thank You | LedgerLogic',
    description: 'You are all set! Access your resource below.',
};

export default function ThankYouPage() {
    return (
        <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
            <div className="bg-white p-10 rounded-2xl shadow-xl max-w-2xl w-full text-center">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-4">You're In!</h1>
                <p className="text-slate-600 mb-8 text-lg">
                    Check your inbox for the <strong>Ultimate Xero Checklist</strong>.
                    <br />
                    Can't wait? You can also access the web version immediately below.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/resources/xero-checklist"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors"
                    >
                        View Checklist Now
                    </Link>
                    <Link
                        href="/blog"
                        className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-colors"
                    >
                        Back to Blog
                    </Link>
                </div>
            </div>
        </main>
    );
}
