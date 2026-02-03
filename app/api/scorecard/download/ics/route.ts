import { NextResponse } from 'next/server';
import * as ics from 'ics';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const events: ics.EventAttributes[] = [
        {
            start: [2024, 1, 10, 9, 0],
            duration: { hours: 1 },
            title: 'Month-End Close',
            description: 'Reminder to close books.',
            url: 'https://ledgerlogic.ca',
            categories: ['Finance'],
            status: 'CONFIRMED',
            busyStatus: 'BUSY',
            recurrenceRule: 'FREQ=MONTHLY;BYMONTHDAY=10'
        }
    ];

    return new Promise<NextResponse>((resolve) => {
        ics.createEvents(events, (error, value) => {
            if (error) {
                resolve(NextResponse.json({ error: error.message }, { status: 500 }));
                return;
            }
            resolve(new NextResponse(value, {
                headers: {
                    'Content-Type': 'text/calendar',
                    'Content-Disposition': 'attachment; filename="finance-calendar.ics"'
                }
            }));
        });
    });
}
