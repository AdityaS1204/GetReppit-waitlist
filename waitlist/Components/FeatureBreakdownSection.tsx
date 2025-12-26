'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const FeatureBreakdownSection = () => {
    const features = [
        {
            title: "Buyer Intent Detection",
            subtitle: "GetReppit does not just match keywords. It understands intent.",
            points: [
                "Looking for alternatives",
                "Complaining about competitors",
                "Asking for recommendations",
                "Actively searching for tools"
            ],
            conclusion: "You only see threads worth replying to.",
            image: "/buyer_intent.png",
            imageAlt: "AI-powered buyer intent detection dashboard",
            reverse: false
        },
        {
            title: "Real-Time Alerts",
            subtitle: "Speed matters on Reddit.",
            description: "GetReppit alerts you within minutes so you are among the first replies, not the fifteenth.",
            conclusion: "Early replies get visibility. Visibility gets clicks. Clicks get users.",
            image: "/realtime_alerts.png",
            imageAlt: "Real-time notification alerts",
            reverse: true
        },
        {
            title: "Smart Reply Context",
            subtitle: "Each thread comes with",
            points: [
                "Why this thread is relevant",
                "What the user is actually asking for",
                "Suggested reply angles that do not sound spammy"
            ],
            conclusion: "You still write the reply. GetReppit gives you the advantage.",
            image: "/smart_reply.png",
            imageAlt: "AI-powered smart reply suggestions",
            reverse: false
        },
        {
            title: "Saved Threads and Tracking",
            subtitle: "Save threads. Track where you replied. See what converted.",
            description: "",
            conclusion: "No more guessing what worked last week.",
            image: "/tracking.png",
            imageAlt: "Thread tracking and analytics dashboard",
            reverse: true
        }
    ];

    return (
        <section className="relative py-24 md:py-32 bg-white overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-32">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${feature.reverse ? 'lg:grid-flow-dense' : ''
                            }`}
                    >
                        {/* Text Content */}
                        <div className={`space-y-6 ${feature.reverse ? 'lg:col-start-2' : ''}`}>
                            {/* Title */}
                            <div className="space-y-3">
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-[#1a1a1a] font-instrument-serif">
                                    {feature.title}
                                </h3>
                                <p className="text-lg md:text-xl text-neutral-700 font-instrument-sans font-medium leading-relaxed">
                                    {feature.subtitle}
                                </p>
                            </div>

                            {/* Description (if exists) */}
                            {feature.description && (
                                <p className="text-lg md:text-xl text-neutral-600 font-instrument-sans leading-relaxed">
                                    {feature.description}
                                </p>
                            )}

                            {/* Points List (if exists) */}
                            {feature.points && (
                                <div className="space-y-3 py-4">
                                    {feature.points.map((point, pointIndex) => (
                                        <motion.div
                                            key={pointIndex}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.2 + (pointIndex * 0.1),
                                                ease: "easeOut"
                                            }}
                                            className="flex items-start gap-3"
                                        >
                                            {/* Bullet */}
                                            <div className="flex-shrink-0 mt-1.5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
                                            </div>
                                            <p className="text-base md:text-lg text-neutral-700 font-instrument-sans leading-relaxed">
                                                {point}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            )}

                            {/* Conclusion */}
                            <div className="pt-4">
                                <p className="text-lg md:text-xl text-[#1a1a1a] font-instrument-sans font-semibold leading-relaxed">
                                    {feature.conclusion}
                                </p>
                            </div>
                        </div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: feature.reverse ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                            className={`relative ${feature.reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                        >
                            <div className="relative group">
                                {/* Glow effect */}
                                <div className="absolute -inset-4 bg-gradient-to-br from-[#FF4500]/10 via-transparent to-[#FF4500]/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Image container */}
                                <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.2)] border border-neutral-200/50">
                                    <div className="relative aspect-[4/3] bg-gradient-to-br from-neutral-50 to-neutral-100">
                                        <Image
                                            src={feature.image}
                                            alt={feature.imageAlt}
                                            fill
                                            className="object-cover"
                                        />

                                        {/* Gradient mask overlays - "Coming out from fade" effect */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none z-10" />
                                        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF4500]/5 via-transparent to-transparent pointer-events-none" />
                                    </div>
                                </div>

                                {/* Decorative elements */}
                                <div className={`absolute -top-4 ${feature.reverse ? '-left-4' : '-right-4'} w-24 h-24 bg-[#FF4500]/5 rounded-full blur-2xl`} />
                                <div className={`absolute -bottom-4 ${feature.reverse ? '-right-4' : '-left-4'} w-32 h-32 bg-neutral-900/5 rounded-full blur-2xl`} />
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeatureBreakdownSection;
