import { NextResponse } from 'next/server';
import { scorecardSchema } from '../../../../src/lib/scorecard/schema';
import { z } from 'zod';
const MOCK_DB = new Map();

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const token = crypto.randomUUID();
        MOCK_DB.set(token, body);
        console.log('Submission:', body.email);
        return NextResponse.json({ success: true, token, message: 'Submission received' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
    }
}
