'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const FinalCTASection = () => {
    const [email, setEmail] = useState('');

    return (
        <section className="relative py-24 md:py-32 bg-[#faf9f6] overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-16 border border-neutral-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative overflow-hidden">
                    {/* Subtle glow */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FF4500]/5 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-neutral-900/5 rounded-full blur-3xl" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10 text-center space-y-8"
                    >
                        {/* Headline */}
                        <h2 className="text-4xl md:text-6xl font-normal leading-[1.1] tracking-tight text-[#1a1a1a] font-instrument-serif">
                            Stop missing Reddit users <br className="hidden md:block" />
                            who are <span className="text-[#FF4500] italic">ready to buy.</span>
                        </h2>

                        {/* Subheadline */}
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-600 font-instrument-sans leading-relaxed">
                            GetReppit helps you show up at the right time, in the right thread, with the right message.
                        </p>

                        {/* Focused CTA Block */}
                        <div className="max-w-md mx-auto space-y-4 pt-4">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1 px-6 py-4 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF4500]/20 focus:border-[#FF4500] transition-all font-instrument-sans"
                                />
                                <Link
                                    href="/waitlist"
                                    className="px-8 py-4 bg-[#FF4500] text-white font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-95 text-lg font-instrument-sans shadow-[0_10px_30px_-10px_rgba(255,69,0,0.4)] flex items-center justify-center whitespace-nowrap"
                                >
                                    Join the waitlist
                                </Link>
                            </div>

                            {/* Small trust text */}
                            <p className="text-sm text-neutral-400 font-instrument-sans">
                                Join 200+ founders waiting for early access.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTASection;
