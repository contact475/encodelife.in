"use client";

import React from "react";
import { motion } from "framer-motion";

const founders = [
  {
    name: "Founder Name 1",
    role: "Co-Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    bio: "Leading the vision for sustainable bioplastics innovation"
  },
  {
    name: "Founder Name 2",
    role: "Co-Founder & CTO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    bio: "Driving technological advancement in PLA production"
  },
  {
    name: "Founder Name 3",
    role: "Co-Founder & COO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    bio: "Scaling operations for industrial-scale manufacturing"
  },
  {
    name: "Founder Name 4",
    role: "Chief Sustainability Officer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    bio: "Ensuring environmental impact and circular economy goals"
  },
];

export function TeamSection() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left lg:flex lg:items-end lg:justify-between mb-12 md:mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold italic font-newsreader tracking-tight text-foreground">
              Meet Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500">
                Founders
              </span>
            </h2>
            <p className="mt-4 md:mt-6 max-w-lg mx-auto lg:mx-0 text-base md:text-lg leading-relaxed text-muted-foreground">
              Passionate experts combining innovation, sustainability, and entrepreneurship 
              to deliver world-class bioplastic solutions.
            </p>
          </div>

          <div className="mt-8 lg:mt-0">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm md:text-base font-semibold transition-all duration-200 rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white shadow-md hover:shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Join Our Team
              <svg
                className="h-5 w-5 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl shadow-lg group transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  className="object-cover w-full h-full transform transition duration-500 group-hover:scale-110"
                  src={founder.image}
                  alt={founder.name}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-80 transition-all duration-300"></div>
              </div>

              {/* Info Container */}
              <div className="absolute inset-x-0 bottom-0 px-5 py-6 text-left">
                <p className="font-sans text-lg md:text-xl font-semibold text-white">
                  {founder.name}
                </p>
                <p className="mt-1 font-serif text-sm md:text-base italic text-gray-200">
                  {founder.role}
                </p>
                <p className="mt-2 text-xs md:text-sm text-gray-300 line-clamp-2">
                  {founder.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
