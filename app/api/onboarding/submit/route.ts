import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Configure Resend
// In a real scenario, this would be process.env.RESEND_API_KEY
// Assuming the user has set this or will set it. 
// If not, we'll gracefully mock the console log for development.
const resend = new Resend(process.env.RESEND_API_KEY || 're_123');

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, email, website, revenue, industry, painPoint } = body;

        console.log('--- New Lead ---');
        console.log(body);

        // If we have an API Key, send the email
        if (process.env.RESEND_API_KEY) {
            await resend.emails.send({
                from: 'LedgerLogic Web <onboarding@ledgerlogic.ca>',
                to: 'sebastien@ledgerlogic.ca', // Replace with admin email
                subject: `New Lead: ${firstName} (${industry})`,
                html: `
                    <h1>New Onboarding Submission</h1>
                    <p><strong>Name:</strong> ${firstName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Website:</strong> ${website || 'N/A'}</p>
                    <hr />
                    <h3>Qualifiers</h3>
                    <ul>
                        <li><strong>Revenue:</strong> ${revenue}</li>
                        <li><strong>Industry:</strong> ${industry}</li>
                        <li><strong>Pain Point:</strong> ${painPoint}</li>
                    </ul>
                `
            });
        } else {
            // Mock for dev
            console.log('Resend API Key missing, skipping email send. Data logged above.');
        }

        // Future CRM Integration can go here
        // await hubspot.contacts.create({ ... })

        return NextResponse.json({ success: true, message: 'Lead captured' });
    } catch (error) {
        console.error('Onboarding API Error:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
