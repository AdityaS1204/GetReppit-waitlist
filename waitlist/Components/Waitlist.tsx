'use client';

import { useState, useEffect } from 'react';

const Waitlist = () => {
    const [users, setUsers] = useState(124);
  
    
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#FFFBF2] overflow-hidden px-4 font-sans text-[#1A1A1A]">

            {/* Primary Radial Blur Gradient - Top Right */}
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-500/20 blur-[140px] rounded-full pointer-events-none mix-blend-multiply animate-pulse" />

            {/* Soft Secondary Accent */}
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-200/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute -top-96 -right-96 w-[48rem] h-[48rem] bg-orange-600 rounded-full blur-2xl opacity-60"></div>
            {/* Rectangular Centerpiece Card */}
            <div className="relative z-10 w-full max-w-[720px] bg-white/40 backdrop-blur-3xl rounded-xl p-8 md:p-1 md:py-1 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-white/60 flex flex-col items-center text-center">

                {/* Early Access Badge */}
                <div className="inline-flex items-center gap-2.5 px-2 py-1.5 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.02)] border border-neutral-100/80 my-3 transition-transform hover:scale-105">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4500]"></span>
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.15em] text-neutral-500 uppercase">Early Access</span>
                </div>

                {/* Master Heading - Wider Layout */}
                <h1 className="text-[42px] md:text-[60px] leading-[1.05] font-[family-name:var(--font-instrument-serif)] text-[#1A1A1A] mb-4 tracking-[1px]">
                    Redefine your <br /><span className="italic text-[#FF4500] font-normal">Reddit</span> presence.
                </h1>

                {/* Engaging Description - More Horizontal */}
                <p className="text-[16px] md:text-md text-neutral-600 font-semibold max-w-[440px] mb-8 leading-[1.5]">
                    Find high-intent Reddit threads. Write safe comments. Turn conversations into SaaS leads.
                </p>

                {/* Compact Email Capture Section */}
                <div className="w-full max-w-[440px] group transition-all duration-500">
                    <div className="relative flex items-center bg-white rounded-lg p-1 pl-3 border border-neutral-100 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.04)] transition-all duration-300 group-focus-within:border-orange-200 group-focus-within:shadow-[0_20px_50px_-10px_rgba(255,69,0,0.08)]">
                        <svg className="w-5 h-5 text-neutral-700 transition-colors group-focus-within:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-transparent border-none outline-none px-4 text-base text-neutral-700 placeholder:text-neutral-300 transition-all font-semibold"
                        />
                        <button className="bg-[#0F172A] p-3 rounded-lg hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Trust Indicator */}
                <p className="mt-2 text-[12px] text-neutral-400 font-medium tracking-wide">
                    Join <span className="text-neutral-500">{users}+ SaaS Founders</span> on the waitlist.
                </p>
            </div>

            {/* Big Background Logo at Bottom */}
            <div className="absolute bottom-[-2%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none px-4 ">
                <h2 className="text-[14vw] font-[family-name:var(--font-instrument-serif)] text-orange-200/40 leading-none tracking-tighter"
                    style={{
                        textShadow: '0 0 40px rgba(255, 69, 0, 0.15)',
                        WebkitTextFillColor: 'transparent',
                        WebkitBackgroundClip: 'text',
                        backgroundImage: 'linear-gradient(to bottom, #e1820dff, #FED7AA)',
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.01))'
                    }}>
                    GetReppit
                </h2>
            </div>

            {/* Subtle Grain Texture Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015] mix-blend-multiply"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        </section>
    );
};

export default Waitlist;