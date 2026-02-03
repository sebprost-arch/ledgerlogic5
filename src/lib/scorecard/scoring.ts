import { ScorecardFormData, ScoreResult } from './types';

export const calculateScore = (data: ScorecardFormData): ScoreResult => {
    let rawScore = 0;
    let maxScore = 0;

    // Subscores raw
    let closeScore = 0;
    let complianceScore = 0;
    let reportingScore = 0;

    // Helper to add points
    const add = (points: number, max: number, category: 'close' | 'compliance' | 'reporting') => {
        rawScore += points;
        maxScore += max;
        if (category === 'close') closeScore += points;
        if (category === 'compliance') complianceScore += points;
        if (category === 'reporting') reportingScore += points;
    };

    // Q1 Revenue (Context)
    // Q4 Accounting System
    const sys = data.accountingSystem;
    if (sys === 'Xero' || sys === 'QuickBooks Online') add(10, 10, 'close');
    else if (sys === 'Other') add(5, 10, 'close');
    else add(0, 10, 'close'); // Spreadsheet

    // Q5 Reconciliations
    const rec = data.reconciliations;
    if (rec === 'Weekly') add(10, 10, 'close');
    else if (rec === 'Monthly') add(8, 10, 'close');
    else if (rec === 'Quarterly') add(4, 10, 'close');
    else add(0, 10, 'close');

    // Q6 Close Time
    const close = data.closeTime;
    if (close === '5–10 days') add(10, 10, 'reporting');
    else if (close === '11–20 days') add(6, 10, 'reporting');
    else if (close === '21–30 days') add(3, 10, 'reporting');
    else add(0, 10, 'reporting');

    // Q7 GST
    const gst = data.gstStatus;
    if (gst === 'Registered and confident') add(10, 10, 'compliance');
    else if (gst === 'Registered but unsure') add(5, 10, 'compliance');
    else add(0, 10, 'compliance');

    // Q8 Cash Visibility
    const cash = data.cashVisibility;
    if (cash === 'Yes, I know runway in 5 mins') add(10, 10, 'reporting');
    else if (cash === 'Rough estimate only') add(5, 10, 'reporting');
    else add(0, 10, 'reporting');
    // Note: ensure strings match options in frontend

    // Normalize to 100
    const normalizedScore = Math.round((rawScore / maxScore) * 100) || 0;

    // Determine Tier
    let tier = '';
    let description = '';
    if (normalizedScore >= 85) {
        tier = 'Decision-Ready Ops';
        description = 'Your finance operations are a strategic asset. You have high visibility and efficiency.';
    } else if (normalizedScore >= 70) {
        tier = 'Scale-Ready';
        description = 'You have a solid foundation but some manual friction is slowing you down.';
    } else if (normalizedScore >= 40) {
        tier = 'Solid, But Leaky';
        description = 'You are doing the basics, but relying too much on intuition or manual work.';
    } else {
        tier = 'Foundation Needed';
        description = 'Your finance function is a risk center. Immediate attention to basics is required.';
    }

    // Quick Wins Logic
    const quickWins: string[] = [];
    if (sys === 'Spreadsheet / None') quickWins.push('Migrate to a Cloud Accounting System (Xero/QBO) immediately.');
    if (rec !== 'Weekly' && rec !== 'Monthly') quickWins.push('Implement a monthly close cadence to catch errors early.');
    if (cash === 'No, I don’t know') quickWins.push('Build a simple 13-week cash flow forecast.');
    if (quickWins.length < 3) quickWins.push('Review your tech stack for automation opportunities.');

    return {
        score: normalizedScore,
        tier,
        subscores: {
            closeAndSystems: Math.round((closeScore / 20) * 100), // Max 20
            compliance: Math.round((complianceScore / 10) * 100), // Max 10
            reporting: Math.round((reportingScore / 20) * 100), // Max 20
        },
        quickWins: quickWins.slice(0, 3),
        tierDescription: description
    };
};
