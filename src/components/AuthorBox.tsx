import React from 'react';
import Link from 'next/link';

type Props = {
    author: string;
};

const AuthorBox = ({ author }: Props) => {
    // In a real app, this would come from a CMS or author database
    const authorBio = author === "Seb Prost, CPA"
        ? "Seb is the founder of LedgerLogic and a CPA dedicated to simplifying finances for Canadian entrepreneurs. He specializes in setting up automated accounting stacks for e-commerce and agency owners."
        : "The LedgerLogic Editorial Team is dedicated to providing accurate, up-to-date financial advice for Canadian small businesses.";

    return (
        <div className="mt-16 p-8 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-full overflow-hidden shadow-sm flex items-center justify-center border-2 border-slate-100">
                    {/* Placeholder for Author Image - would be <Image /> in prod */}
                    <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 font-bold text-2xl">
                        {author.charAt(0)}
                    </div>
                </div>
            </div>
            <div className="text-center sm:text-left flex-1">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Written By</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                    {author}
                    {author === "Seb Prost, CPA" && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-teal-100 text-teal-800 uppercase tracking-wide">
                            CPA, Ex-CRA
                        </span>
                    )}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    {authorBio}
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-4">
                    <Link href="/#about" className="text-teal-600 font-bold text-xs uppercase tracking-wide hover:underline">Read Bio &rarr;</Link>
                </div>
            </div>
        </div>
    );
};

export default AuthorBox;
