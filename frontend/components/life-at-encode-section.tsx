"use client";

import React from "react";
import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    alt: "Team collaboration",
    title: "Collaborative Workspace",
    description: "Modern facilities designed for teamwork, innovation, and creative problem-solving",
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    alt: "Innovation lab",
    title: "State-of-the-Art Labs",
    description: "Cutting-edge research facilities equipped with advanced analytical instruments",
  },
  {
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
    alt: "Team meeting",
    title: "Knowledge Sharing",
    description: "Regular team discussions, workshops, and learning sessions foster continuous growth",
  },
];

export function LifeAtEncodeSection() {
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
              Life at Encode Life
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
              Experience a workplace where innovation thrives, people matter, and every day brings new opportunities to make an impact
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </motion.div>
        </div>

        {/* Expandable Image Cards */}
        <div className="flex flex-col md:flex-row items-center gap-6 h-auto md:h-[500px] mb-12">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group flex-grow transition-all w-full md:w-56 h-[350px] md:h-[500px] duration-500 hover:md:w-full rounded-2xl overflow-hidden border border-border"
            >
              <img
                className="h-full w-full object-cover object-center"
                src={image.src}
                alt={image.alt}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 text-white bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {image.title}
                </h3>
                <p className="text-sm md:text-base text-white/90">
                  {image.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Culture & Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Culture */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Our Culture</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                At Encode Life, we foster an inclusive environment where every voice matters. Our culture is built on collaboration, 
                innovation, and mutual respect. We celebrate diversity, encourage creative thinking, and support each other's growth.
              </p>
              <p className="leading-relaxed">
                From regular team-building activities to knowledge-sharing sessions, we create opportunities for meaningful connections 
                and professional development. Our open-door policy ensures that ideas flow freely across all levels of the organization.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Employee Benefits</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                <p className="text-muted-foreground">Comprehensive health insurance for you and your family</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                <p className="text-muted-foreground">Flexible working hours and hybrid work options</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                <p className="text-muted-foreground">Professional development and training programs</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                <p className="text-muted-foreground">Performance bonuses and career advancement opportunities</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                <p className="text-muted-foreground">Modern facilities with recreational spaces and amenities</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                <p className="text-muted-foreground">Wellness programs and mental health support</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
