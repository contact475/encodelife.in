import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, company, reason, message } = body;

        // Validate required fields
        if (!name || !email || !reason || !message) {
            return NextResponse.json(
                { error: 'Name, email, reason, and message are required' },
                { status: 400 }
            );
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'Encode Life Contact <onboarding@resend.dev>', // Change this to your verified domain after domain verification
            to: [process.env.CONTACT_EMAIL || 'contact@encodelife.in'], // Must match your Resend account email for testing
            replyTo: email, // User's email for easy reply
            subject: `[${reason}] New Contact Form Submission from ${name}`,
            html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background-color: #10b981; padding: 30px; text-align: center;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Contact Inquiry</h1>
                            <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 14px;">Encode Life - Sustainable Bioplastics</p>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 30px;">
                            
                            <p style="font-size: 16px; color: #333333; margin: 0 0 20px 0;">
                                <strong>Someone wants to connect!</strong><br>
                                You've received a new message from your website contact form.
                            </p>
                            
                            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
                            
                            <!-- Name -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
                                <tr>
                                    <td style="padding: 10px; background-color: #f9fafb; border-left: 3px solid #10b981;">
                                        <p style="margin: 0; font-size: 12px; color: #10b981; font-weight: bold;">FULL NAME</p>
                                        <p style="margin: 5px 0 0 0; font-size: 15px; color: #1f2937;">${name}</p>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Email -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
                                <tr>
                                    <td style="padding: 10px; background-color: #f9fafb; border-left: 3px solid #10b981;">
                                        <p style="margin: 0; font-size: 12px; color: #10b981; font-weight: bold;">EMAIL ADDRESS</p>
                                        <p style="margin: 5px 0 0 0; font-size: 15px; color: #1f2937;">
                                            <a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a>
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            ${phone ? `
                            <!-- Phone -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
                                <tr>
                                    <td style="padding: 10px; background-color: #f9fafb; border-left: 3px solid #10b981;">
                                        <p style="margin: 0; font-size: 12px; color: #10b981; font-weight: bold;">PHONE NUMBER</p>
                                        <p style="margin: 5px 0 0 0; font-size: 15px; color: #1f2937;">${phone}</p>
                                    </td>
                                </tr>
                            </table>
                            ` : ''}
                            
                            ${company ? `
                            <!-- Company -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
                                <tr>
                                    <td style="padding: 10px; background-color: #f9fafb; border-left: 3px solid #10b981;">
                                        <p style="margin: 0; font-size: 12px; color: #10b981; font-weight: bold;">COMPANY NAME</p>
                                        <p style="margin: 5px 0 0 0; font-size: 15px; color: #1f2937;">${company}</p>
                                    </td>
                                </tr>
                            </table>
                            ` : ''}
                            
                            <!-- Reason for Contact -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
                                <tr>
                                    <td style="padding: 10px; background-color: #fef3c7; border-left: 3px solid #f59e0b;">
                                        <p style="margin: 0; font-size: 12px; color: #f59e0b; font-weight: bold;">REASON FOR CONTACT</p>
                                        <p style="margin: 5px 0 0 0; font-size: 15px; color: #1f2937; font-weight: 600;">${reason}</p>
                                    </td>
                                </tr>
                            </table>
                            
                            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
                            
                            <!-- Message -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                                <tr>
                                    <td style="padding: 15px; background-color: #f0fdf4; border-left: 3px solid #10b981;">
                                        <p style="margin: 0; font-size: 12px; color: #10b981; font-weight: bold;">MESSAGE</p>
                                        <p style="margin: 10px 0 0 0; font-size: 15px; color: #1f2937; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- CTA Button -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="padding: 20px 0;">
                                        <p style="margin: 0 0 15px 0; color: #6b7280; font-size: 14px;">Ready to respond?</p>
                                        <a href="mailto:${email}?subject=Re: Your inquiry to Encode Life" 
                                           style="display: inline-block; background-color: #10b981; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 15px;">
                                            Reply to ${name.split(' ')[0]}
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0; font-size: 13px; color: #6b7280; line-height: 1.6;">
                                This message was sent via the <strong style="color: #10b981;">Encode Life</strong> contact form<br>
                                Transforming corn into sustainable bioplastics
                            </p>
                            <p style="margin: 15px 0 0 0; font-size: 12px; color: #9ca3af;">
                                ${new Date().toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
            })}
                            </p>
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, messageId: data?.id },
            { status: 200 }
        );
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
