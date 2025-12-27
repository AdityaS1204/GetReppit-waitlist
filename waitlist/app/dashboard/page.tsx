'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logo from '@/Components/Logo';

export default function DashboardPage() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            if (!supabase) {
                console.log('Dashboard: Supabase client is null');
                setIsLoading(false);
                return;
            }

            // Give the session a moment to "settle"
            await new Promise(resolve => setTimeout(resolve, 500));

            console.log('Dashboard: Checking session...');
            const { data: { session }, error } = await supabase.auth.getSession();

            if (error) {
                console.error('Dashboard: Session error:', error.message);
            }

            if (!session) {
                console.log('Dashboard: No session found, redirecting to login...');
                router.replace('/login');
            } else {
                console.log('Dashboard: Session active for:', session.user.email);
                setUser(session.user);
                setIsLoading(false);
            }
        };

        checkUser();

        if (supabase) {
            const { data: { subscription } } = supabase.auth.onAuthStateChange((_event: string, session: any) => {
                if (!session) {
                    router.replace('/login');
                } else {
                    setUser(session.user);
                }
            });
            return () => subscription.unsubscribe();
        }
    }, []);

    const handleLogout = async () => {
        if (!supabase) return;
        await supabase.auth.signOut();
        router.push('/login');
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#FFFBF2] flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-black/10 border-t-black rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FFFBF2] font-[family-name:var(--font-instrument-sans)]">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-xl border-b border-black/5 z-50 px-6 md:px-12">
                <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
                    <Logo />

                    <button
                        onClick={handleLogout}
                        className="px-5 py-2.5 bg-black text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors flex items-center gap-2"
                    >
                        Sign out
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-32 pb-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {/* Welcome Card */}
                        <div className="md:col-span-3 bg-white border border-black/5 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] mb-4">
                            <h1 className="text-4xl font-bold text-black font-[family-name:var(--font-instrument-serif)] mb-2">
                                Welcome back, {user?.user_metadata?.full_name || user?.email?.split('@')[0]}
                            </h1>
                            <p className="text-neutral-500">You're logged in as {user?.email}</p>
                        </div>

                        {/* Stats Preview */}
                        <div className="bg-white border border-black/5 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                            <p className="text-neutral-400 text-sm mb-1 uppercase tracking-wider font-semibold">Active Posts</p>
                            <h3 className="text-3xl font-bold">12</h3>
                        </div>
                        <div className="bg-white border border-black/5 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                            <p className="text-neutral-400 text-sm mb-1 uppercase tracking-wider font-semibold">Total Karma</p>
                            <h3 className="text-3xl font-bold">2.4k</h3>
                        </div>
                        <div className="bg-white border border-black/5 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                            <p className="text-neutral-400 text-sm mb-1 uppercase tracking-wider font-semibold">Scheduled</p>
                            <h3 className="text-3xl font-bold">5</h3>
                        </div>

                        {/* Placeholder Content */}
                        <div className="md:col-span-2 bg-white border border-black/5 rounded-3xl h-64 flex items-center justify-center border-dashed">
                            <p className="text-neutral-400">Post calendar placeholder</p>
                        </div>
                        <div className="bg-white border border-black/5 rounded-3xl h-64 flex items-center justify-center border-dashed">
                            <p className="text-neutral-400">Analytics preview</p>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
