import { NextResponse } from 'next/server';

// TODO: Import database client when ready
// import { db } from '@/lib/db';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, mobile, field } = body;

        // Validate required fields
        if (!name || !email || !mobile || !field) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Validate mobile number (10 digits)
        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(mobile.replace(/\s/g, ''))) {
            return NextResponse.json(
                { error: 'Invalid mobile number' },
                { status: 400 }
            );
        }

        // TODO: Store in database
        // Example database insertion (uncomment when database is set up):
        /*
        const certificateClaim = await db.certificateClaims.create({
            data: {
                name,
                email,
                mobile,
                field,
                claimedAt: new Date(),
                certificateId: generateCertificateId(), // Generate unique ID
            },
        });
        */

        // For now, just log the data
        console.log('Certificate claim received:', {
            name,
            email,
            mobile,
            field,
            timestamp: new Date().toISOString(),
        });

        // TODO: Send confirmation email
        /*
        await sendCertificateEmail({
            to: email,
            name,
            certificateUrl: `${process.env.NEXT_PUBLIC_URL}/certificates/${certificateClaim.certificateId}`,
        });
        */

        return NextResponse.json(
            {
                success: true,
                message: 'Certificate claim recorded successfully',
                // certificateId: certificateClaim.certificateId, // Uncomment when DB is ready
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Certificate claim API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// TODO: Add GET endpoint to retrieve certificate claims (admin only)
/*
export async function GET(request: Request) {
    try {
        // Add authentication check here
        const claims = await db.certificateClaims.findMany({
            orderBy: { claimedAt: 'desc' },
        });

        return NextResponse.json({ claims }, { status: 200 });
    } catch (error) {
        console.error('Error fetching certificate claims:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
*/
