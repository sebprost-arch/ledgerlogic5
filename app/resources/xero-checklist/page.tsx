import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Ultimate Canadian Xero Setup Checklist | LedgerLogic',
    description: 'A step-by-step guide to setting up Xero for your Canadian business. Covers GST/HST, Payroll, and Hubdoc.',
};

export default function XeroChecklistPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            <header className="mb-12 text-center">
                <span className="text-teal-600 font-bold tracking-wider uppercase text-sm">Free Resource</span>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-6">
                    The Ultimate Canadian Xero Setup Checklist
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Don't miss a step. Follow this guide to ensure your accounting is audit-proof and tax-ready from Day 1.
                </p>
            </header>

            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-slate-200">
                <div className="space-y-12">
                    {/* SECTION 1 */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-700 text-sm font-bold">1</span>
                            Organization Settings
                        </h2>
                        <ul className="space-y-4 ml-4 sm:ml-11">
                            {[
                                "Enter correct Legal Trading Name (matches your Articles of Inc).",
                                "Set 'Financial Year End' to match your T2 return date.",
                                "Add your Business Number (BN) in Organization Details.",
                                "Set your specific 'Time Zone' to ensure bank feeds sync at the right time."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <input type="checkbox" className="mt-1.5 w-5 h-5 text-teal-600 rounded focus:ring-teal-500 border-gray-300" />
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <hr className="border-slate-100" />

                    {/* SECTION 2 */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-700 text-sm font-bold">2</span>
                            Sales Tax (GST/HST)
                        </h2>
                        <ul className="space-y-4 ml-4 sm:ml-11">
                            {[
                                "Enable 'Financial Settings' > 'Tax Basics'.",
                                "Input your GST/HST Number.",
                                "Select your 'Tax Filing Period' (Quarterly/Annual) to match CRA requirements.",
                                "Add PST/QST rates if you have nexus in BC, SK, MB, or QC."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <input type="checkbox" className="mt-1.5 w-5 h-5 text-teal-600 rounded focus:ring-teal-500 border-gray-300" />
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <hr className="border-slate-100" />

                    {/* SECTION 3 */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-700 text-sm font-bold">3</span>
                            Banking & Hubdoc
                        </h2>
                        <ul className="space-y-4 ml-4 sm:ml-11">
                            {[
                                "Connect all business bank accounts via Feed.",
                                "Connect business credit cards.",
                                "Activate Hubdoc (included in Xero).",
                                "Link Hubdoc to Xero (Push data to 'Purchase')."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <input type="checkbox" className="mt-1.5 w-5 h-5 text-teal-600 rounded focus:ring-teal-500 border-gray-300" />
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                <div className="mt-12 p-6 bg-slate-50 rounded-lg text-center">
                    <p className="text-slate-600 mb-4">Need a hand with this setup?</p>
                    <a href="/contact" className="text-teal-600 font-bold hover:underline">Book a Quick 15-Min Setup Review &rarr;</a>
                </div>
            </div>
        </main>
    );
}
