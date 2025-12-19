"use client";

import React from "react";
import { motion } from "framer-motion";


const supporters = [
  {
    category: "Financial Supporters",
    supporters: [
      "Venture Capital Firms",
      "Angel Investors",
      "Government Grants",
      "Development Banks",
    ],
  },
  {
    category: "Technology Partners",
    supporters: [
      "Equipment Manufacturers",
      "Software Solutions",
      "Automation Partners",
      "Quality Control Systems",
    ],
  },
  {
    category: "Community Supporters",
    supporters: [
      "Environmental NGOs",
      "Sustainability Advocates",
      "Local Communities",
      "Educational Institutions",
    ],
  },
  {
    category: "Strategic Advisors",
    supporters: [
      "Industry Veterans",
      "Technical Consultants",
      "Business Mentors",
      "Policy Advisors",
    ],
  },
];

export function SupportersSection() {
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
              Our Supporters
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
              Backed by visionary supporters who believe in our mission
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </motion.div>
        </div>

        {/* Supporters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supporters.map((supporter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="h-full bg-card border border-border rounded-2xl p-6 hover:border-border/80 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {supporter.category}
                </h3>
                <div className="space-y-2">
                  {supporter.supporters.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
