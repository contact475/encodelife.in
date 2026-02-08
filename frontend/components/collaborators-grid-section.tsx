"use client";

import React from "react";
import { motion } from "framer-motion";

const collaborators = [
  {
    name: "DPIIT",
    type: "Government Support",
    logo: "/logos/dpiit.webp",
    description: "Supporting innovation and entrepreneurship through government initiatives and policy development.",
    impact: "",
  },
  {
    name: "Startup India",
    type: "Government Initiative",
    logo: "/logos/startupindia.webp",
    description: "Building a strong startup ecosystem and supporting entrepreneurship across India.",
    impact: "",
  },
  {
    name: "Make in India",
    type: "National Initiative",
    logo: "/logos/makeinindia.webp",
    description: "National initiative promoting manufacturing excellence and innovation in sustainable materials.",
    impact: "",
  },
  {
    name: "Start in UP",
    type: "State Initiative",
    logo: "/logos/startinup.webp",
    description: "Supporting startups and entrepreneurship ecosystem in Uttar Pradesh.",
    impact: "",
  },
  {
    name: "Manav Rachna",
    type: "Partner",
    logo: "/logos/manavrachna.webp",
    description: "Partner fostering sustainable development and skill building.",
    impact: "",
  },
];

export function CollaboratorsGridSection() {
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
              Our Collaborators
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
              Partnering with excellence to drive innovation in sustainable bioplastics
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </motion.div>
        </div>

        {/* Collaborators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {collaborators.map((collaborator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group"
            >
              <div className="relative h-full rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#E1EACD' }}>
                <div className="p-8">
                  {/* Logo */}
                  <div className="flex items-center justify-center h-24 mb-6">
                    <img
                      src={collaborator.logo}
                      alt={collaborator.name}
                      className="max-h-20 max-w-full object-contain transition-all duration-300"
                    />
                  </div>

                  {/* Name & Type */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold text-black mb-1">
                      {collaborator.name}
                    </h3>
                    <p className="text-sm text-black/70">{collaborator.type}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-black/80 leading-relaxed text-center mb-6">
                    {collaborator.description}
                  </p>

                  {/* Impact */}
                  <div className="pt-4 border-t border-black/20 text-center">
                    <p className="text-sm font-medium text-black">{collaborator.impact}</p>
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
