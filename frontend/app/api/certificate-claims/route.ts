import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

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

        // Generate certificate ID
        const year = new Date().getFullYear();
        
        // Get next sequence number
        const { data: lastCert } = await supabase
            .from('certificate_numbers')
            .select('sequence_number')
            .eq('year', year)
            .order('sequence_number', { ascending: false })
            .limit(1)
            .single();

        const nextSequence = (lastCert?.sequence_number || 0) + 1;
        const certificateId = `EL-${year}-${String(nextSequence).padStart(4, '0')}`;

        // Insert certificate number
        await supabase
            .from('certificate_numbers')
            .insert({
                year,
                sequence_number: nextSequence,
                certificate_id: certificateId
            });

        // Store certificate claim
        const { data: claim, error: claimError } = await supabase
            .from('certificate_claims')
            .insert({
                certificate_id: certificateId,
                name,
                email,
                mobile,
                field_of_work: field,
                status: 'pending'
            })
            .select()
            .single();

        if (claimError) {
            console.error('Database error:', claimError);
            return NextResponse.json(
                { error: 'Failed to save certificate claim' },
                { status: 500 }
            );
        }

        // Also store in user_details for unified tracking
        await supabase
            .from('user_details')
            .insert({
                name,
                email,
                mobile,
                source: 'certificate',
                field_of_work: field
            });

        return NextResponse.json(
            {
                success: true,
                message: 'Certificate claim recorded successfully',
                certificateId: certificateId,
                data: claim
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
