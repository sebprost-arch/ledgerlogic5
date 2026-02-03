import { NextResponse } from 'next/server';
import { Resend } from 'resend';


export async function POST(request: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const body = await request.json();
        const { name, email, website, industry, revenue, painPoint } = body;

        // Validate required fields
        if (!name || !email || !industry || !revenue || !painPoint) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Send email
        const { data, error } = await resend.emails.send({
            from: 'LedgerLogic Questionnaire <onboarding@resend.dev>', // Will change to onboarding@ledgerlogic.ca after domain verification
            to: ['sebprost@gmail.com'],
            replyTo: email,
            subject: `New Questionnaire Submission - ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #0f766e; border-bottom: 2px solid #0f766e; padding-bottom: 10px;">
                        New Questionnaire Submission
                    </h2>
                    
                    <div style="background: #f0fdfa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 10px 0; font-weight: bold; color: #0f766e;">Name:</td>
                                <td style="padding: 10px 0;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; font-weight: bold; color: #0f766e;">Email:</td>
                                <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #0284c7;">${email}</a></td>
                            </tr>
                            ${website ? `
                            <tr>
                                <td style="padding: 10px 0; font-weight: bold; color: #0f766e;">Website:</td>
                                <td style="padding: 10px 0;"><a href="https://${website.replace(/^https?:\/\//, '')}" style="color: #0284c7;" target="_blank">${website}</a></td>
                            </tr>
                            ` : ''}
                            <tr>
                                <td style="padding: 10px 0; font-weight: bold; color: #0f766e;">Industry:</td>
                                <td style="padding: 10px 0;">${industry}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; font-weight: bold; color: #0f766e;">Revenue Range:</td>
                                <td style="padding: 10px 0;">${revenue}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; font-weight: bold; color: #0f766e;">Primary Focus:</td>
                                <td style="padding: 10px 0;">${painPoint}</td>
                            </tr>
                        </table>
                    </div>
                    
                    <p style="color: #64748b; font-size: 14px; margin-top: 30px;">
                        Submitted: ${new Date().toLocaleString('en-US', {
                dateStyle: 'long',
                timeStyle: 'short',
                timeZone: 'America/Chicago'
            })}
                    </p>
                    
                    <p style="color: #64748b; font-size: 12px; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                        This lead is now proceeding to calendar booking.
                    </p>
                </div>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
