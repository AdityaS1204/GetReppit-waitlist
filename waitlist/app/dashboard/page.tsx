'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import Logo from '@/Components/Logo';
import { cn } from '@/lib/utils';
import { DashboardState } from './dashboardState';
import { getDashboardState } from './getDashboardState';
import { ContextRequiredState } from './states/ContextRequiredState';
import { ScanningState } from './states/ScanningState';
import { NoThreadsState } from './states/NoThreadsState';
import { RiskyThreadsState } from './states/RiskyThreadsState';
import { ThreadsAvailableState } from './states/ThreadsAvailableState';

export default function DashboardPage() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Dashboard Data - In a real app, this would come from an API
    const [dashboardData, setDashboardData] = useState({
        contextCompleted: false, // Set to false to show onboarding
        scanInProgress: false,
        threads: [] as { isRisky: boolean }[]
    });

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

    const renderDashboardState = () => {
        const state = getDashboardState(dashboardData);

        switch (state) {
            case DashboardState.CONTEXT_REQUIRED:
                return <ContextRequiredState onComplete={() => setDashboardData({ ...dashboardData, contextCompleted: true })} />;
            case DashboardState.SCANNING:
                return <ScanningState />;
            case DashboardState.NO_THREADS:
                return <NoThreadsState />;
            case DashboardState.THREADS_RISKY_ONLY:
                return <RiskyThreadsState />;
            case DashboardState.THREADS_AVAILABLE:
                return <ThreadsAvailableState />;
            default:
                return null;
        }
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

                    <div className="flex items-center gap-4">
                        {/* Simulation Toggles (Internal Debug) */}
                        <div className="hidden md:flex gap-1 p-1 bg-neutral-100 rounded-lg">
                            <button
                                onClick={() => setDashboardData({ ...dashboardData, contextCompleted: !dashboardData.contextCompleted })}
                                className={cn("px-2 py-1 text-[10px] rounded", dashboardData.contextCompleted ? "bg-green-500 text-white" : "text-neutral-500")}
                            >
                                Context
                            </button>
                            <button
                                onClick={() => setDashboardData({ ...dashboardData, scanInProgress: !dashboardData.scanInProgress })}
                                className={cn("px-2 py-1 text-[10px] rounded", dashboardData.scanInProgress ? "bg-[#FF4500] text-white" : "text-neutral-500")}
                            >
                                Scan
                            </button>
                            <button
                                onClick={() => setDashboardData({ ...dashboardData, threads: dashboardData.threads.length > 0 ? [] : [{ isRisky: false }, { isRisky: false }] })}
                                className={cn("px-2 py-1 text-[10px] rounded", dashboardData.threads.length > 0 ? "bg-blue-500 text-white" : "text-neutral-500")}
                            >
                                Threads
                            </button>
                            <button
                                onClick={() => setDashboardData({ ...dashboardData, threads: [{ isRisky: true }, { isRisky: true }] })}
                                className={cn("px-2 py-1 text-[10px] rounded", dashboardData.threads.every(t => t.isRisky) && dashboardData.threads.length > 0 ? "bg-orange-500 text-white" : "text-neutral-500")}
                            >
                                Risky
                            </button>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="px-5 py-2.5 bg-black text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors flex items-center gap-2"
                        >
                            Sign out
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-32 pb-20 px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center gap-12"
                    >
                        {/* Welcome Card - Only show if context is done or specifically requested */}
                        {dashboardData.contextCompleted && (
                            <div className="w-full bg-white border border-black/5 rounded-[32px] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                                <h1 className="text-4xl md:text-5xl font-bold text-black font-[family-name:var(--font-instrument-serif)] mb-2">
                                    Welcome back, {user?.user_metadata?.full_name || user?.email?.split('@')[0]}
                                </h1>
                                <p className="text-neutral-500 text-lg">Here is what Reppit found for you today.</p>
                            </div>
                        )}

                        {/* State-Driven Dashboard Content */}
                        {renderDashboardState()}
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
