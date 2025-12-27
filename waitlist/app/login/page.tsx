'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import Logo from '@/Components/Logo';

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        if (supabase) {
            supabase.auth.getSession().then(({ data: { session } }: any) => {
                if (session) {
                    window.location.replace('/dashboard');
                }
            });
        }
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleGoogleLogin = async () => {
        if (!supabase) {
            setError("Authentication service is not configured.");
            return;
        }
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
            },
        });
        if (error) setError(error.message);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempt started...');
        setError(null);

        if (!supabase) {
            setError("Authentication service is not configured.");
            return;
        }

        setIsLoading(true);

        const { error: loginError } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
        });

        if (loginError) {
            console.error('Login error:', loginError.message);
            setError(loginError.message);
            setIsLoading(false);
        } else {
            console.log('Login successful, redirecting to dashboard...');
            window.location.replace('/dashboard');
        }
    };

    return (
        <div className="min-h-screen bg-[#FFFBF2] flex flex-col items-center justify-center p-4 font-[family-name:var(--font-instrument-sans)]">
            {/* Background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-black/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-black/5 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <div className="flex justify-center mb-8">
                    <Logo />
                </div>

                <div className="bg-white/80 backdrop-blur-xl border border-black/5 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-black mb-2 font-[family-name:var(--font-instrument-serif)]">Welcome back</h1>
                        <p className="text-neutral-500 text-sm">Log in to your account</p>
                    </div>

                    <button
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center gap-3 bg-white border border-black/10 h-12 rounded-xl text-neutral-700 font-medium hover:bg-neutral-50 transition-colors mb-6"
                        type="button"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                        </svg>
                        Continue with Google
                    </button>

                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-black/5"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white/80 px-2 text-neutral-400">Or continue with email</span>
                        </div>
                    </div>

                    {error && (
                        <div className="mb-6 p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1 px-1">Email Address</label>
                            <input
                                required
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="john@example.com"
                                className="w-full h-12 bg-neutral-50/50 border border-black/5 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all"
                            />
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-1 px-1">
                                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider">Password</label>
                                <Link href="/forgot-password" title="Forgot Password" className="text-xs text-neutral-400 hover:text-black transition-colors">
                                    Forgot?
                                </Link>
                            </div>
                            <input
                                required
                                id="password"
                                type="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="••••••••"
                                className="w-full h-12 bg-neutral-50/50 border border-black/5 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-12 bg-black text-white rounded-xl font-medium shadow-sm hover:shadow-md transition-all relative overflow-hidden group mt-4"
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center">
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                </div>
                            ) : (
                                <>
                                    <span className="relative z-10">Sign in</span>
                                    <motion.div
                                        className="absolute inset-0 bg-neutral-800"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    />
                                </>
                            )}
                        </button>
                    </form>

                    <p className="text-center text-neutral-500 text-sm mt-6">
                        Don't have an account?{' '}
                        <Link href="/signup" className="text-black font-semibold hover:underline decoration-black/20 underline-offset-4">
                            Sign up
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
