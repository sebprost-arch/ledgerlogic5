import { z } from 'zod';

export const scorecardSchema = z.object({
    revenueRange: z.string().min(1, 'Please select a revenue range'),
    province: z.string().min(1, 'Please select a province'),
    fiscalYearEnd: z.coerce.date().nullable(),
    accountingSystem: z.string().min(1, 'Please select a system'),
    reconciliations: z.string().min(1, 'Please select frequency'),
    closeTime: z.string().min(1, 'Please select close time'),
    gstStatus: z.string().min(1, 'Please select GST status'),
    cashVisibility: z.string().min(1, 'Please select visibility'),
    // Email Gate
    email: z.string().email('Please enter a valid email').optional(),
    name: z.string().optional(),
    company: z.string().optional(),
});

export const scorecardDeepDiveSchema = z.object({
    paymentStack: z.string().optional(),
    receiptCapture: z.string().optional(),
    kpiTracking: z.string().optional(),
    payroll: z.string().optional(),
    arCollections: z.string().optional(),
    toolSprawl: z.string().optional(),
});
