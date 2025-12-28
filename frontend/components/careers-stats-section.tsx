"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Briefcase, TrendingUp, GraduationCap, Building2, Target } from "lucide-react";

const stats = [
  {
    icon: Users,
    label: "Direct Jobs Created",
    value: "500+",
    description: "Empowering freshers with comprehensive training in biotechnology, chemical engineering, and sustainable manufacturing",
    highlight: "For Fresh Graduates",
  },
  {
    icon: GraduationCap,
    label: "Research Partnerships",
    value: "5+",
    description: "Strategic collaborations with leading research institutions",
    highlight: "Academia-Industry Bridge",
  },
  {
    icon: Building2,
    label: "Specialized Teams",
    value: "10+",
    description: "Diverse departments from R&D to manufacturing, quality control to sustainability operations",
    highlight: "Career Growth Paths",
  },
  {
    icon: Target,
    label: "Training Programs",
    value: "15+",
    description: "Comprehensive skill development programs covering technical expertise and leadership development",
    highlight: "Continuous Learning",
  },
  {
    icon: TrendingUp,
    label: "Growth Rate",
    value: "Fast",
    description: "Rapidly expanding operations creating new opportunities across India's biotech sector",
    highlight: "Expanding Nationwide",
  },
  {
    icon: Briefcase,
    label: "Open Positions",
    value: "23",
    description: "Current openings across research, manufacturing, operations, and support functions",
    highlight: "Join Us Today",
  },
];

export function CareersStatsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold italic font-newsreader mb-4">
              Building India&apos;s Biotech Workforce
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
              Creating opportunities, fostering talent, and driving innovation in sustainable bioplastics
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full rounded-2xl border border-border bg-card p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:border-green-500/50">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>

                {/* Label */}
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  {stat.label}
                </p>

                {/* Value */}
                <p className="text-4xl md:text-5xl font-bold tracking-tight mb-3 text-foreground">
                  {stat.value}
                </p>

                {/* Highlight */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-3">
                  <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                    {stat.highlight}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16"
        >
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Join India&apos;s First Industrial-Scale PLA Plant
            </h3>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Be part of a team that&apos;s revolutionizing sustainable manufacturing, creating meaningful employment, 
              and building a circular economy for India&apos;s future.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
