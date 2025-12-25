'use client';

import Link from 'next/link';
import Logo from './Logo';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50"
        >
            <div className="bg-[#faf9f6]/90 backdrop-blur-xl border border-black/5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-6 h-16 flex items-center justify-between">
                <Logo />

                <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-neutral-500 font-[family-name:var(--font-instrument-sans)]">
                    <a href="#features" className="hover:text-black transition-colors duration-200">
                        Features
                    </a>
                    <a href="#how-it-works" className="hover:text-black transition-colors duration-200">
                        How it works
                    </a>
                    <a href="#pricing" className="hover:text-black transition-colors duration-200">
                        Pricing
                    </a>

                    <Link href="/waitlist">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="px-6 py-2.5 bg-black text-white rounded-lg shadow-sm hover:shadow-md relative overflow-hidden group"
                        >
                            <span className="relative z-10">Join Waitlist</span>
                            <motion.div
                                className="absolute inset-0 bg-neutral-800"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                        </motion.button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 hover:bg-black/5 rounded-lg transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
