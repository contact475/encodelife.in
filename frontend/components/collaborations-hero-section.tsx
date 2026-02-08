"use client";

import React from "react";
import { motion } from "framer-motion";

export function CollaborationsHeroSection() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/image2.webp"
          alt="Collaborations - Building the Future Together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-5xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold italic font-newsreader text-white mb-4">
              Building the Future Together
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Strategic partnerships with leading research institutions, industry pioneers, and visionary supporters
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">5+</div>
                <div className="text-sm md:text-base text-white/80">Research Partners</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">10+</div>
                <div className="text-sm md:text-base text-white/80">Industry Collaborators</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
