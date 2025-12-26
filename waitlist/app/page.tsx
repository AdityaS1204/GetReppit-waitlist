'use client';

import { Navbar, HeroSection, ProblemSection, SolutionSection, HowItWorksSection, FeatureBreakdownSection, WaitlistOfferSection, FAQSection, FinalCTASection, Footer } from "@/Components";
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
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeatureBreakdownSection />
      <WaitlistOfferSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </motion.main>
  );
}
