"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProductFlipCard } from "@/components/ui/product-flip-card";
import { Package, Shirt, Stethoscope, Printer, Utensils, Leaf, Box, Sparkles } from "lucide-react";

const products = [
  {
    title: "Packaging Solutions",
    subtitle: "Food & Consumer Goods",
    description: "High-performance PLA packaging for food containers, films, and consumer product packaging. Compostable, transparent, and FDA-approved for food contact.",
    features: [
      "Food-grade certified",
      "Excellent barrier properties",
      "Heat-resistant options",
      "100% compostable",
    ],
    icon: Package,
    image: "/image6.webp",
  },
  {
    title: "Textile Fibers",
    subtitle: "Sustainable Fabrics",
    description: "PLA-based fibers for apparel, home textiles, and technical fabrics. Soft, breathable, and biodegradable alternative to synthetic fibers.",
    features: [
      "Moisture-wicking",
      "UV resistant",
      "Hypoallergenic",
      "Biodegradable",
    ],
    icon: Shirt,
    image: "/image2.webp",
  },
  {
    title: "Medical Devices",
    subtitle: "Biomedical Applications",
    description: "Biocompatible PLA for sutures, implants, drug delivery systems, and medical packaging. FDA-approved for medical applications.",
    features: [
      "Biocompatible",
      "Controlled degradation",
      "Sterilizable",
      "Medical-grade",
    ],
    icon: Stethoscope,
    image: "/image1.webp",
  },
  {
    title: "3D Printing Filament",
    subtitle: "Additive Manufacturing",
    description: "Premium PLA filament for 3D printing applications. Available in multiple colors and grades for prototyping and production.",
    features: [
      "Low warping",
      "Easy to print",
      "Multiple colors",
      "Consistent quality",
    ],
    icon: Printer,
    image: "/image3.webp",
  },
  {
    title: "Disposable Tableware",
    subtitle: "Food Service",
    description: "Compostable plates, cups, cutlery, and food containers. Perfect for events, restaurants, and food service applications.",
    features: [
      "Heat resistant",
      "Leak-proof",
      "Microwave safe",
      "Industrially compostable",
    ],
    icon: Utensils,
    image: "/image4.webp",
  },
  {
    title: "Agricultural Films",
    subtitle: "Farming Solutions",
    description: "Biodegradable mulch films and greenhouse covers. Eliminates plastic waste in agriculture while improving crop yields.",
    features: [
      "Soil biodegradable",
      "UV stabilized",
      "Moisture retention",
      "No removal needed",
    ],
    icon: Leaf,
    image: "/image7.webp",
  },
  {
    title: "Rigid Containers",
    subtitle: "Durable Packaging",
    description: "Strong, transparent containers for cosmetics, electronics, and consumer goods. Excellent clarity and impact resistance.",
    features: [
      "Crystal clear",
      "Impact resistant",
      "Recyclable",
      "Custom shapes",
    ],
    icon: Box,
    image: "/image5.webp",
  },
  {
    title: "Special Blends",
    subtitle: "Custom Formulations",
    description: "Tailored PLA blends for specific applications. Work with our R&D team to develop custom properties for your needs.",
    features: [
      "Custom properties",
      "Application-specific",
      "R&D support",
      "Scalable production",
    ],
    icon: Sparkles,
    image: "/image6.webp",
  },
];

export function ProductsGridSection() {
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
              Our Products
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
              Sustainable PLA solutions across diverse industries
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductFlipCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
