"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

export function AboutMissionSection() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold italic font-newsreader tracking-tight text-foreground">
              Our Mission
            </h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto lg:mx-0">
              To engineer and deliver accessible, scalable, high-performance biopolymers that replace fossil-based plastics across India and emerging markets.
            </p>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Encode Life is establishing India&apos;s first corn-based biopolymer plant, integrated with renewable energy and energy storage systems. We&apos;re developing specialized PLA blends through strategic collaborations with leading research institutions and establishing comprehensive end-of-life solutions for a truly circular bioeconomy.
            </p>
            <div className="relative inline-flex items-center justify-center mt-8 md:mt-10 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 group-hover:shadow-lg group-hover:shadow-green-500/30 transition-all"></div>
              <Link
                href="/contact"
                className="relative z-10 inline-flex items-center justify-center px-6 py-3 text-sm md:text-base font-medium text-white bg-transparent border border-transparent rounded-full hover:opacity-90 transition"
              >
                Partner With Us <FiExternalLink className="ml-2" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/image5.webp"
                alt="Encode Life PLA Manufacturing"
                className="object-cover w-full h-[300px] md:h-[400px] lg:h-[500px]"
              />
            </div>

            {/* Sub-features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 mt-8 md:mt-12 text-center sm:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                  Job Creation & Training
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Creating 500+ direct jobs for freshers with comprehensive training programs 
                  in biotechnology, chemical engineering, and sustainable manufacturing.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                  Special PLA Blends & End-of-Life
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Developing 10+ specialized PLA formulations with complete end-of-life solutions 
                  through composting, recycling, and biogas conversion for circular economy.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
