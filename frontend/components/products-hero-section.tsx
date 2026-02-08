"use client";

import React from "react";
import { motion } from "framer-motion";

export function ProductsHeroSection() {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/image5.webp"
          alt="PLA Products - Sustainable Solutions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full min-h-[50vh] md:min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto py-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-7xl font-semibold italic font-newsreader text-white mb-4"
          >
            PLA Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            Sustainable bioplastic solutions for diverse industries—from packaging to medical devices
          </motion.p>
        </div>
      </div>
    </section>
  );
}
