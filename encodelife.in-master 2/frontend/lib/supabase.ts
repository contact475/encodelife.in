import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for database tables
export interface CertificateClaim {
  id: string;
  certificate_id: string;
  name: string;
  email: string;
  mobile: string;
  field_of_work: string;
  certificate_url?: string;
  claimed_at: string;
  status: 'pending' | 'generated' | 'sent';
  created_at: string;
  updated_at: string;
}

export interface ContactFormSubmission {
  id: string;
  name: string;
  email: string;
  mobile?: string;
  company?: string;
  reason: string;
  message: string;
  submitted_at: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  ip_address?: string;
  user_agent?: string;
  created_at: string;
}

export interface UserDetail {
  id: string;
  name: string;
  email: string;
  mobile?: string;
  source: 'contact_form' | 'certificate';
  reason?: string;
  field_of_work?: string;
  message?: string;
  ip_address?: string;
  user_agent?: string;
  created_at: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  description?: string;
  author?: string;
  thumbnail?: string;
  tags?: string[];
  published_at?: string;
  status: 'draft' | 'published' | 'archived';
  views: number;
  created_at: string;
  updated_at: string;
}
