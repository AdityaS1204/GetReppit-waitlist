'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const WaitlistOfferSection = () => {
    const benefits = [
        {
            title: "Priority access",
            description: "Skip the queue and be among the first to experience the full platform.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "Founder Pricing",
            description: "Lock in early-bird rates forever. Your price will never increase.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            )
        },
        {
            title: "Direct Influence",
            description: "Direct input on our roadmap. Your feedback shapes the product.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            )
        },
        {
            title: "Founding Badge",
            description: "A permanent 'Founding User' badge on your profile and replies.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
            isSpecial: true
        }
    ];

    return (
        <section className="relative py-24 md:py-32 bg-[#faf9f6] overflow-hidden">
            {/* Artistic background blur elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF4500]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neutral-200/50 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <div className="text-center space-y-16">
                    {/* Artistic Headline Area */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF4500]/10 text-[#FF4500] text-xs font-bold tracking-widest uppercase mb-4">
                            Early Adopters Only
                        </span>
                        <h2 className="text-4xl md:text-6xl font-normal leading-[1.1] tracking-tight text-[#1a1a1a] font-instrument-serif">
                            Early access comes with <br />
                            <span className="text-[#FF4500] italic">unfair advantages.</span>
                        </h2>
                    </motion.div>

                    {/* Enhanced Artistic Grid */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }}
                                className="group relative"
                            >
                                {/* Floating Glow effect on hover */}
                                <div className="absolute -inset-2 bg-gradient-to-br from-[#FF4500]/10 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />

                                <div className={`relative h-full p-8 rounded-[1.5rem] border transition-all duration-500 flex flex-col items-start text-left
                                    ${benefit.isSpecial
                                        ? 'bg-white border-[#FF4500]/20 shadow-[0_10px_30px_rgba(255,69,0,0.05)] overflow-hidden'
                                        : 'bg-white/60 backdrop-blur-md border-neutral-200/60 hover:bg-white hover:border-[#FF4500]/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)]'
                                    }`}
                                >
                                    {/* Shimmer Effect for Special Card */}
                                    {benefit.isSpecial && (
                                        <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-[#FF4500]/5 to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out pointer-events-none" />
                                    )}

                                    {/* Icon with artistic background */}
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3
                                        ${benefit.isSpecial
                                            ? 'bg-[#FF4500] text-white shadow-lg shadow-[#FF4500]/20'
                                            : 'bg-neutral-100 text-neutral-600 group-hover:bg-[#FF4500]/10 group-hover:text-[#FF4500]'
                                        }`}
                                    >
                                        {benefit.icon}
                                    </div>

                                    {/* Text content */}
                                    <h3 className="text-xl font-bold text-[#1a1a1a] font-instrument-sans mb-3 flex items-center gap-2">
                                        {benefit.title}
                                        {benefit.isSpecial && (
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500] animate-pulse" />
                                        )}
                                    </h3>
                                    <p className="text-neutral-600 font-instrument-sans leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Artistic Call to Action Area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative pt-12"
                    >
                        {/* Decorative line */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

                        <div className="space-y-6">
                            <Link
                                href="/waitlist"
                                className="group relative inline-flex items-center gap-4 px-12 py-5 bg-[#1a1a1a] text-white font-bold rounded-2xl overflow-hidden transition-all hover:bg-[#FF4500] hover:scale-[1.03] active:scale-95 text-lg font-instrument-sans shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(255,69,0,0.4)]"
                            >
                                <span className="relative z-10">Capture your unfair advantage</span>
                                <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>

                                {/* Button Shine effect */}
                                <div className="absolute top-0 left-[-100%] w-[100%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover:left-[100%] transition-all duration-700 pointer-events-none" />
                            </Link>

                            <div className="flex flex-col items-center">
                                <p className="text-sm font-semibold text-neutral-500 font-instrument-sans tracking-wide">
                                    Limited early spots. We are onboarding manually.
                                </p>
                                <div className="mt-3 flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-6 h-6 rounded-full border-2 border-[#faf9f6] bg-neutral-200" />
                                        ))}
                                    </div>
                                    <span className="text-xs text-neutral-400 font-medium font-instrument-sans">
                                        Join 120+ founders on the list
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WaitlistOfferSection;
