'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const SolutionSection = () => {
    const benefits = [
        "No scraping tabs.",
        "No keyword guessing.",
        "No daily Reddit grind."
    ];

    return (
        <section className="relative py-24 md:py-32 bg-white overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF4500] rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        {/* Headline */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-[#1a1a1a] font-instrument-serif">
                            GetReppit finds buyer-intent threads for you.{' '}
                            <span className="text-[#FF4500] italic">Automatically.</span>
                        </h2>

                        {/* Body Copy */}
                        <div className="space-y-6">
                            <p className="text-lg md:text-xl text-neutral-700 font-instrument-sans leading-relaxed">
                                GetReppit continuously monitors relevant subreddits, analyzes post intent using AI,
                                and alerts you the moment a thread matches your product.
                            </p>

                            {/* Benefits List */}
                            <div className="space-y-3 pt-4">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.2 + (index * 0.1),
                                            ease: "easeOut"
                                        }}
                                        className="flex items-center gap-3"
                                    >
                                        {/* Check icon */}
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF4500]/10 flex items-center justify-center">
                                            <svg
                                                className="w-4 h-4 text-[#FF4500]"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={3}
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-lg md:text-xl text-neutral-800 font-instrument-sans font-medium">
                                            {benefit}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-br from-[#FF4500]/20 via-transparent to-[#FF4500]/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] border border-neutral-200/50">
                                <div className="relative aspect-[4/3] bg-neutral-900">
                                    <Image
                                        src="/reddit_post_screenshot.png"
                                        alt="Reddit post showing high-intent buyer question"
                                        fill
                                        className="object-cover"
                                    />
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                        className="absolute bottom-6 left-6 right-6"
                                    >
                                        <div className="bg-white/95 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-neutral-200/50">
                                            <div className="flex items-start gap-3">
                                                {/* AI Icon */}
                                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF4500] to-[#ff6a33] flex items-center justify-center">
                                                    <svg
                                                        className="w-6 h-6 text-white"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                                        />
                                                    </svg>
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                        <p className="text-sm font-semibold text-neutral-900 font-instrument-sans">
                                                            High buyer intent detected
                                                        </p>
                                                    </div>
                                                    <p className="text-xs text-neutral-600 font-instrument-sans">
                                                        Match score: 94% • Posted 2m ago
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FF4500]/5 rounded-full blur-2xl" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-neutral-900/5 rounded-full blur-2xl" />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="mt-6 text-center"
                        >
                            <p className="text-sm text-neutral-500 font-instrument-sans italic">
                                Signal → Noise filtering powered by AI
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
