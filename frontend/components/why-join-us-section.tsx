"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, TrendingUp, Lightbulb, Users, Heart, Award } from "lucide-react";

const reasons = [
  {
    icon: Leaf,
    title: "Sustainability Impact",
    description:
      "Drive India's biotech revolution with groundbreaking PLA bioplastics. Reduce plastic pollution and create sustainable alternatives that benefit millions.",
    stats: "Carbon Negative",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Access structured training programs, mentorship from industry experts, and clear career progression paths in biotechnology innovation.",
    stats: "15+ Programs",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Research",
    description:
      "Collaborate with leading research institutions on cutting-edge projects. Develop specialized PLA blends and pioneering solutions.",
    stats: "5+ Partnerships",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Join our professionals in an inclusive environment that values every voice, encourages knowledge sharing, and celebrates success.",
    stats: "Growing Team",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description:
      "Enjoy flexible hours, comprehensive health benefits, wellness programs, and modern facilities with recreational spaces.",
    stats: "Flexible Options",
  },
  {
    icon: Award,
    title: "Competitive Benefits",
    description:
      "Industry-leading compensation, performance bonuses, family health insurance, retirement benefits, and educational assistance.",
    stats: "Complete Package",
  },
];

export function WhyJoinUsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold italic font-newsreader mb-6">
              Why Choose Encode Life
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Where innovation meets purpose, and careers transform into meaningful impact
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </motion.div>
        </div>

        {/* Reasons Grid - 3 columns, max 6 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-xl hover:border-green-500/50">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="h-8 w-8 text-green-600 dark:text-green-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {reason.description}
                </p>

                {/* Stats */}
                <div className="pt-4 border-t border-border">
                  <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {reason.stats}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
