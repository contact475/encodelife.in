"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Download } from "lucide-react";

const applications = [
  {
    number: "1",
    title: "Food Packaging",
    category: "Food & Beverage",
    items: [
      "Cold cups for yogurt and beverages",
      "Hot coffee cups and lids",
      "Food containers and clamshells",
      "Flexible films for wrapping",
    ],
    images: [
      "/image6.webp",
      "/image5.webp",
      "/image4.webp",
    ],
    marketSize: "The India paper cups market reached 23.2 Billion Units in 2024",
    plaReplacement: "Yes - PLA contains no toxic additives and is food-safe",
  },
  {
    number: "2",
    title: "Personal Care",
    category: "Consumer Goods",
    items: [
      "Cotton buds and Q-tips",
      "Cosmetic packaging",
      "Toothbrush handles",
      "Personal hygiene products",
    ],
    images: [
      "/image3.webp",
      "/image2.webp",
    ],
    marketSize: "Global Cotton Buds Market valued at USD 1.29 billion in 2023",
    plaReplacement: "Yes - Biologically degradable plastics in cotton earbuds manufacturing",
  },
  {
    number: "3",
    title: "Food Service",
    category: "Hospitality",
    items: [
      "Disposable straws",
      "Cutlery sets (forks, spoons, knives)",
      "Plates and bowls",
      "Takeaway containers",
    ],
    images: [
      "/image1.webp",
      "/image7.webp",
    ],
    marketSize: "India paper straw market generated USD 158.3 million in 2023",
    plaReplacement: "Yes - Conventional paper straws become soggy, PLA straws coated with Polylactic acid (PLA)",
  },
  {
    number: "4",
    title: "Agriculture",
    category: "Farming Solutions",
    items: [
      "Biodegradable mulch films",
      "Greenhouse covers",
      "Plant pots and trays",
      "Crop protection films",
    ],
    images: [
      "/image2.webp",
      "/image3.webp",
    ],
    marketSize: "Agricultural films market expected to reach USD 12.5 billion by 2030",
    plaReplacement: "Yes - Soil biodegradable, no removal needed after harvest",
  },
  {
    number: "5",
    title: "Medical & Healthcare",
    category: "Biomedical",
    items: [
      "Surgical sutures",
      "Drug delivery systems",
      "Medical implants",
      "Sterile packaging",
    ],
    images: [
      "/image5.webp",
      "/image6.webp",
    ],
    marketSize: "Medical plastics market valued at USD 35.6 billion in 2024",
    plaReplacement: "Yes - Biocompatible, FDA-approved for medical applications",
  },
];

export function ProductApplicationsSection() {
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
              Applications
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
              PLA solutions across diverse industries and use cases
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </motion.div>
        </div>

        {/* Applications List */}
        <div className="overflow-hidden bg-card/50 backdrop-blur-sm rounded-2xl border border-border">
          {/* Header Row */}
          <div className="flex items-end justify-between p-6 border-b border-border">
            <h3 className="text-2xl sm:text-3xl tracking-tight font-semibold text-foreground">
              Product Applications
            </h3>
            <div className="hidden sm:flex items-center gap-2">
              <button className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium tracking-tight text-foreground bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 transition-colors">
                <Download className="w-3.5 h-3.5" />
                <span>Product Catalog</span>
              </button>
            </div>
          </div>

          {/* Application Rows */}
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "p-6 sm:p-8",
                index !== applications.length - 1 && "border-b border-border"
              )}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Number */}
                <div className="md:col-span-1">
                  <div className="text-3xl sm:text-4xl font-medium tracking-tight text-muted-foreground tabular-nums">
                    {app.number}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-8">
                  <ul className="space-y-2 mb-4">
                    {app.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="w-3.5 h-3.5 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Images */}
                  <div className="flex items-center gap-3 flex-wrap">
                    {app.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="aspect-[4/3] w-24 sm:w-28 rounded-md overflow-hidden border border-border hover:border-green-500/50 transition-colors"
                      >
                        <img
                          src={img}
                          alt={`${app.title} ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Market Info */}
                  <div className="mt-4 space-y-2">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Market size: </span>
                      {app.marketSize}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">PLA can replace: </span>
                      {app.plaReplacement}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="md:col-span-3 md:text-right">
                  <h4 className="text-lg sm:text-xl tracking-tight font-semibold text-foreground">
                    {app.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">{app.category}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA Footer */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 sm:p-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Need a custom solution? Get a tailored proposal for your specific requirements.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-lg transition-all"
              >
                <span>Contact Us</span>
              </a>
              <a
                href="/pla"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-foreground bg-card hover:bg-accent border border-border transition-colors"
              >
                <span>Learn About PLA</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
