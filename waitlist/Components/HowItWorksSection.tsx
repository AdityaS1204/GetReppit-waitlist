'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const HowItWorksSection = () => {
    const steps = [
        {
            number: "01",
            title: "Tell GetReppit about your product",
            description: "Add your SaaS description, keywords, competitors, and target users.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            )
        },
        {
            number: "02",
            title: "GetReppit monitors Reddit 24/7",
            description: "We scan posts, comments, and discussions across relevant subreddits in real time.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            )
        },
        {
            number: "03",
            title: "Jump in early and convert",
            description: "Get notified instantly with context, intent score, and suggested reply angles.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        }
    ];

    return (
        <section className="relative py-24 md:py-32 bg-[#faf9f6] overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-[#1a1a1a] font-instrument-serif">
                        Three steps.{' '}
                        <span className="text-[#FF4500] italic">Zero guesswork.</span>
                    </h2>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                                ease: "easeOut"
                            }}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="h-full bg-white rounded-2xl p-8 border border-neutral-200/50 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:border-neutral-300/70 hover:-translate-y-2">
                                {/* Step Number */}
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#FF4500]/10 text-[#FF4500] font-bold text-lg font-instrument-sans mb-6 group-hover:bg-[#FF4500] group-hover:text-white transition-colors duration-300">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="text-neutral-700 mb-4 group-hover:text-[#FF4500] transition-colors duration-300">
                                    {step.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl md:text-2xl font-normal text-[#1a1a1a] font-instrument-serif mb-3 leading-tight">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-base text-neutral-600 font-instrument-sans leading-relaxed">
                                    {step.description}
                                </p>

                                {/* Connector Arrow (hidden on last card and mobile) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 transform -translate-y-1/2 z-10">
                                        <svg className="w-8 h-8 lg:w-10 lg:h-10 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center"
                >
                    <Link
                        href="/waitlist"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-[#FF4500] text-white font-bold rounded-xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95 text-lg font-instrument-sans shadow-[0_10px_30px_-10px_rgba(255,69,0,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(255,69,0,0.5)]"
                    >
                        <span className="relative z-10">Get early access</span>
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
