import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || ''

if (!supabaseUrl && typeof window !== 'undefined') {
    console.warn('Supabase URL is missing! Ensure NEXT_PUBLIC_SUPABASE_URL is set in .env.local')
}

export const supabase = supabaseUrl 
    ? createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: true
        }
    })
    : null as any

export const createClientComponentClient = () => {
    return createClient(supabaseUrl, supabaseAnonKey)
}
