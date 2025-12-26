'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Is this spammy?",
            answer: "No. You decide when and how to reply. GetReppit only surfaces opportunities."
        },
        {
            question: "Which subreddits are supported?",
            answer: "Any public subreddit relevant to your product, our platform will suggest you the best subreddits that are relevant to your product."
        },
        {
            question: "Will I get banned?",
            answer: "No automation, no posting, no bots. You stay compliant with Reddit rules."
        },
        {
            question: "Is this for indie founders or teams?",
            answer: "Both. Solo founders and small teams get the most value."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative py-24 md:py-32 bg-white overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-[#1a1a1a] font-instrument-serif">
                        Frequently Asked Questions
                    </h2>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
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
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left group"
                            >
                                <div className={`p-6 rounded-xl border transition-all duration-300 ${openIndex === index
                                        ? 'bg-[#faf9f6] border-[#FF4500]/30 shadow-[0_4px_20px_rgba(255,69,0,0.08)]'
                                        : 'bg-white border-neutral-200/50 hover:border-neutral-300 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)]'
                                    }`}>
                                    {/* Question */}
                                    <div className="flex items-center justify-between gap-4">
                                        <h3 className="text-lg md:text-xl font-semibold text-[#1a1a1a] font-instrument-sans pr-4">
                                            {faq.question}
                                        </h3>

                                        {/* Icon */}
                                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${openIndex === index
                                                ? 'bg-[#FF4500] rotate-180'
                                                : 'bg-neutral-100 group-hover:bg-neutral-200'
                                            }`}>
                                            <svg
                                                className={`w-5 h-5 transition-colors duration-300 ${openIndex === index ? 'text-white' : 'text-neutral-600'
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2.5}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Answer */}
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{
                                                    height: "auto",
                                                    opacity: 1,
                                                    transition: {
                                                        height: {
                                                            duration: 0.3,
                                                            ease: "easeOut"
                                                        },
                                                        opacity: {
                                                            duration: 0.25,
                                                            delay: 0.1,
                                                            ease: "easeOut"
                                                        }
                                                    }
                                                }}
                                                exit={{
                                                    height: 0,
                                                    opacity: 0,
                                                    transition: {
                                                        height: {
                                                            duration: 0.3,
                                                            ease: "easeIn"
                                                        },
                                                        opacity: {
                                                            duration: 0.2,
                                                            ease: "easeIn"
                                                        }
                                                    }
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <p className="pt-4 text-base md:text-lg text-neutral-600 font-instrument-sans leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
