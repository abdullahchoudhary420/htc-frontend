import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
    (import.meta as ImportMeta & { env: Record<string, string> }).env[
    'VITE_SUPABASE_URL'
    ];
const supabaseAnonKey =
    (import.meta as ImportMeta & { env: Record<string, string> }).env[
    'VITE_SUPABASE_ANON_KEY'
    ];

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
