'use server'

import { supabase } from '@/lib/supabase'

export async function joinWaitlist(email: string) {
    if (!email || !email.includes('@')) {
        return { error: 'Invalid email address' }
    }

    try {
        const { error } = await supabase
            .from('waitlist')
            .insert([{ email }])

        if (error) {
            if (error.code === '23505') { // Unique constraint violation
                return { error: 'This email is already on the waitlist!' }
            }
            return { error: error.message }
        }

        return { success: true }
    } catch (err) {
        return { error: 'An unexpected error occurred. Please try again.' }
    }
}
