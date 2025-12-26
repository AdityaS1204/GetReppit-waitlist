'use client';

import { motion } from 'framer-motion';

const ProblemSection = () => {
    const problems = [
        "Manually scroll subreddits like a zombie",
        "Miss high-intent threads by hours",
        "Reply too late when competitors already took the lead",
        "Waste time on threads that never convert"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0
        }
    };

    return (
        <section className="relative py-24 md:py-32 bg-[#faf9f6] overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF4500] rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neutral-900 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    {/* Headline */}
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight text-[#1a1a1a] font-instrument-serif mb-6">
                        Reddit is a goldmine.{' '}
                        <span className="block mt-2 text-[#FF4500] italic">
                            Finding the right threads is a nightmare.
                        </span>
                    </h2>
                </motion.div>

                {/* Body Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    {/* Opening paragraph */}
                    <div className="text-center space-y-4">
                        <p className="text-xl md:text-2xl text-neutral-700 font-instrument-sans font-medium leading-relaxed">
                            You already know Reddit converts insanely well.
                        </p>
                        <p className="text-lg md:text-xl text-neutral-600 font-instrument-sans leading-relaxed">
                            The problem is execution.
                        </p>
                    </div>

                    {/* Problem statement with visual separator */}
                    <div className="relative py-8">
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent" />

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-center text-lg md:text-xl text-neutral-700 font-instrument-sans font-semibold mb-8"
                        >
                            You either
                        </motion.p>

                        {/* Problems list */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="space-y-4"
                        >
                            {problems.map((problem, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="group relative"
                                >
                                    <div className="flex items-start gap-4 p-5 rounded-xl bg-white/60 backdrop-blur-sm border border-neutral-200/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-neutral-300/70 hover:-translate-y-1">
                                        {/* Custom bullet point */}
                                        <div className="flex-shrink-0 mt-1.5">
                                            <div className="w-2 h-2 rounded-full bg-[#FF4500] group-hover:scale-125 transition-transform duration-300" />
                                        </div>

                                        {/* Problem text */}
                                        <p className="text-base md:text-lg text-neutral-700 font-instrument-sans leading-relaxed">
                                            {problem}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Closing statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-center pt-8"
                    >
                        <div className="inline-block px-8 py-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)]">
                            <p className="text-xl md:text-2xl font-instrument-serif text-white leading-relaxed">
                                Reddit rewards{' '}
                                <span className="text-[#FF4500] font-semibold italic">speed</span>
                                {' '}and{' '}
                                <span className="text-[#FF4500] font-semibold italic">relevance</span>.
                            </p>
                            <p className="text-lg md:text-xl text-neutral-300 font-instrument-sans mt-3">
                                Humans are bad at both.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemSection;
