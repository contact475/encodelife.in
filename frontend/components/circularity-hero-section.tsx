"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export function CircularityHeroSection() {
  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=60"
          alt="Circular Economy Concept"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={60}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-20 pb-12 sm:pt-24 sm:pb-16 md:py-24 lg:py-32 text-center">
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-green-500/30 bg-green-500/5 mb-4 sm:mb-6">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs sm:text-sm md:text-base font-medium text-green-600 dark:text-green-400">
              Sustainability
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-newsreader italic font-semibold leading-tight mb-4 sm:mb-6 px-2">
            Designing for a{" "}
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              Circular Economy
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-foreground/90 mb-3 sm:mb-4 px-2">
            From Renewable Feedstock to Complete Regeneration
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
            At Encodelife, we believe in changing the world sustainably. From
            renewable plant-based feedstock sourcing to multiple after-use
            pathways, we design PLA biopolymers with the planet's wellbeing and
            India's biotech workforce in mind.
          </p>

          {/* Gradient Accent Bar */}
          <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mb-8 sm:mb-12" />
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs sm:text-sm font-medium">Explore Our Approach</span>
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>
    </section>
  );
}
