import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const type = searchParams.get('type') || 'all';

        let data;
        let error;

        switch (type) {
            case 'certificates':
                ({ data, error } = await supabase
                    .from('certificate_claims')
                    .select('*')
                    .order('claimed_at', { ascending: false }));
                break;

            case 'contacts':
                ({ data, error } = await supabase
                    .from('contact_form_submissions')
                    .select('*')
                    .order('submitted_at', { ascending: false }));
                break;

            case 'all':
            default:
                ({ data, error } = await supabase
                    .from('user_details')
                    .select('*')
                    .order('created_at', { ascending: false }));
                break;
        }

        if (error) {
            console.error('Database error:', error);
            return NextResponse.json(
                { error: 'Failed to fetch submissions' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, data },
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
