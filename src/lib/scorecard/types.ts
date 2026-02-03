import { z } from 'zod';
import { scorecardSchema, scorecardDeepDiveSchema } from '@/lib/scorecard/schema';

export type ScorecardFormData = z.infer<typeof scorecardSchema>;
export type DeepDiveFormData = z.infer<typeof scorecardDeepDiveSchema>;

export interface ScoreResult {
    score: number;
    tier: string;
    subscores: {
        closeAndSystems: number;
        compliance: number;
        reporting: number;
    };
    quickWins: string[];
    tierDescription: string;
}
