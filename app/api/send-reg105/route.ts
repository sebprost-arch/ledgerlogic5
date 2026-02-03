import { NextResponse } from 'next/server';
import { Resend } from 'resend';


export async function POST(request: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const body = await request.json();
        const { contact, formData, result } = body;
        const { name, email } = contact;

        if (!name || !email) {
            return NextResponse.json(
                { error: 'Missing contact info' },
                { status: 400 }
            );
        }

        // Format the form data for email
        const formatCurrency = (amount: string, currency: string) => {
            return `${amount} ${currency}`;
        };

        const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #334155;">
                <h2 style="color: #0d9488; border-bottom: 2px solid #0d9488; padding-bottom: 10px;">
                    Reg 105 Eligibility Result
                </h2>
                
                <div style="background: #f0fdfa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="margin-top: 0; color: #115e59;">Applicant</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Result:</strong> <span style="font-weight: bold; color: ${result === 'LIKELY' ? '#16a34a' : '#d97706'}">${result}</span></p>
                </div>

                <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                    <h3 style="margin-top: 0; color: #0f172a;">Form Data</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;"><strong>Residency:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${formData.residencyCountry} (${formData.entityType})</td></tr>
                        <tr><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;"><strong>Invoiced:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${formatCurrency(formData.totalAmountPaid, formData.currency)}</td></tr>
                        <tr><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;"><strong>Withheld:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${formatCurrency(formData.amountWithheld, formData.currency)}</td></tr>
                        <tr><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;"><strong>Service Type:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${formData.serviceType}</td></tr>
                         <tr><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;"><strong>Locations:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${formData.provinces.join(', ')}</td></tr>
                        <tr><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;"><strong>Has Office:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${formData.hasOffice}</td></tr>
                        <tr><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;"><strong>Has Employees:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${formData.hasEmployees}</td></tr>
                    </table>
                </div>
                
                <p style="color: #94a3b8; font-size: 12px; margin-top: 30px;">
                    Submitted via Regulation 105 Refund Calculator
                </p>
            </div>
        `;

        const { data, error } = await resend.emails.send({
            from: 'LedgerLogic Reg105 <onboarding@resend.dev>',
            to: ['seb@ledgerlogic.ca'], // Sending to Admin
            replyTo: email,
            subject: `Reg 105 Lead: ${name} (${result})`,
            html: htmlContent,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
