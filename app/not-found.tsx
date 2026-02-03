import Link from 'next/link';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 px-4 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full border border-slate-100">
                <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileQuestion className="w-8 h-8 text-slate-500" />
                </div>

                <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
                    Page Not Found
                </h1>

                <p className="text-slate-500 mb-8 text-lg">
                    Looks like this balance sheet doesn't balance. The page you're looking for might have been moved or doesn't exist.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href="/" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-brand-dark hover:bg-slate-800 text-white h-10 px-4 py-2 bg-slate-900">
                        Return Home
                    </Link>
                    <Link href="/blog" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-slate-200 bg-background hover:bg-slate-100 hover:text-accent-foreground text-slate-700 h-10 px-4 py-2">
                        Read our Blog
                    </Link>
                </div>
            </div>

            <div className="mt-8 text-sm text-slate-400">
                Error 404 • LedgerLogic
            </div>
        </div>
    );
}
