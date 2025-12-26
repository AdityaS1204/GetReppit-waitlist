'use client';

import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#faf9f6]">

            {/* Background Image */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
                    style={{ backgroundImage: "url('/images/Cubic.jpg')" }}
                />
                {/* Bottom gradient mask for smooth transition */}
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20 text-center space-y-6 animate-fade-in">
                {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-neutral-200/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                    <span className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full border-2 border-white bg-neutral-200" />
                        <div className="w-6 h-6 rounded-full border-2 border-white bg-neutral-300" />
                        <div className="w-6 h-6 rounded-full border-2 border-white bg-neutral-400" />
                    </span>
                    <p className="text-[13px] font-medium text-neutral-600 font-instrument-sans">
                        Used by indie founders, SaaS builders, and growth teams
                    </p>
                </div> */}

                {/* Headline */}
                <h1 className="text-5xl md:text-8xl font-normal leading-[1.05] tracking-tight text-[#1a1a1a] font-instrument-serif">
                    Find high-intent<span className="text-[#FF4500] italic"> Reddit threads</span> <br className="hidden md:block" />
                        before your competitors do                   
                </h1>

                {/* Subheadline */}
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-600 leading-relaxed font-instrument-sans font-medium">
                    Reppit scans Reddit in real time and surfaces threads where users are
                    actively looking for tools, alternatives, and solutions like yours.
                    You reply early. You win users.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                    <Link
                        href="/waitlist"
                        className="group relative px-8 py-4 bg-[#FF4500] text-white font-bold rounded-lg overflow-hidden transition-all hover:scale-[1.02] active:scale-95 text-lg font-instrument-sans shadow-[0_10px_30px_-10px_rgba(255,69,0,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(255,69,0,0.5)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Join the waitlist
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                        </span>
                    </Link>

                    <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-neutral-200 text-[#1a1a1a] font-semibold rounded-lg hover:bg-white transition-all text-lg font-instrument-sans shadow-sm hover:shadow-md active:scale-[0.98]">
                        See how it works
                    </button>
                </div>
            </div>

            {/* Trust text footer */}
            <div className="absolute bottom-12 left-0 w-full text-center pointer-events-none">
                <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 font-bold font-instrument-sans">
                    Stop manual Reddit hunting. Start Growing.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
