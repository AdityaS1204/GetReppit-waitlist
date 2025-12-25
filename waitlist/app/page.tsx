'use client';

import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-[#faf9f6] selection:bg-[#FF4500]/10 overflow-x-hidden"
    >
      <Navbar />

      <HeroSection />

      {/* Additional sections can be added here */}
      <motion.section
        id="features"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-24 bg-white border-t border-black/5"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-normal text-black font-[family-name:var(--font-instrument-serif)]">
              Built for precision
            </h2>
            <p className="max-w-xl text-neutral-500 font-[family-name:var(--font-instrument-sans)] text-lg">
              Stop casting wide nets. Use Reppit to find the exact moment a user needs your help.
            </p>
          </div>
        </div>
      </motion.section>
    </motion.main>
  );
}
