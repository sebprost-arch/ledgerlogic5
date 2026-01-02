import React from 'react';

type Props = {
    author: string;
};

const AuthorBox = ({ author }: Props) => {
    // In a real app, this would come from a CMS or author database
    const authorBio = author === "Seb Prost, CPA"
        ? "Seb is the founder of LedgerLogic and a CPA dedicated to simplifying finances for Canadian entrepreneurs. He specializes in setting up automated accounting stacks for e-commerce and agency owners."
        : "The LedgerLogic Editorial Team is dedicated to providing accurate, up-to-date financial advice for Canadian small businesses.";

    return (
        <div className="mt-16 p-8 bg-slate-50 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-white rounded-full overflow-hidden shadow-sm flex items-center justify-center border-4 border-white">
                    {/* Placeholder for Author Image - would be <Image /> in prod */}
                    <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-500 font-bold text-3xl">
                        {author.charAt(0)}
                    </div>
                </div>
            </div>
            <div className="text-center sm:text-left flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">{author}</h3>
                <p className="text-slate-600 text-base leading-relaxed mb-4">
                    {authorBio}
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-4">
                    <a href="/about" className="text-teal-600 font-semibold hover:text-teal-700 text-sm">Read Full Bio &rarr;</a>
                </div>
            </div>
        </div>
    );
};

export default AuthorBox;
