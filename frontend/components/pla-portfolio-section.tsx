"use client";

import React from "react";
import { motion } from "framer-motion";
import { PLAProductCard } from "@/components/ui/pla-product-card";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

const plaProducts = [
  {
    grade: "ENCODE_30U",
    appearance: "Semitransparent",
    technicalSpecs: {
      density: "1.24 g/cm³",
      moisture: "≤0.04%",
      monomerContent: "≤0.3%",
      mfi: "30",
      dContent: "<1%",
      meltingTemp: "175°C",
      glassTransition: "60°C",
      tensileStrength: "50 MPa",
      elongation: "≤5%",
    },
    description: "High-performance resin with high melting point, medium flow, and recrystallization capabilities, ideal for temperature-resistant injection molding and non-woven applications.",
    applications: ["Injection Molding", "Non-woven Fabrics", "Temperature-resistant Products"],
  },
  {
    grade: "ENCODE_30M",
    appearance: "Semitransparent",
    technicalSpecs: {
      density: "1.24 g/cm³",
      moisture: "≤0.04%",
      monomerContent: "≤0.3%",
      mfi: "30",
      dContent: "2%",
      meltingTemp: "165°C",
      glassTransition: "60°C",
      tensileStrength: "50 MPa",
      elongation: "≤5%",
    },
    description: "Resin with medium melting point, medium flow, suitable for opaque products such as high temperature-resistant and thin-wall injection molding.",
    applications: ["Thin-wall Molding", "Opaque Products", "High Temperature Applications"],
  },
  {
    grade: "ENCODE_10U",
    appearance: "Semitransparent",
    technicalSpecs: {
      density: "1.24 g/cm³",
      moisture: "≤0.04%",
      monomerContent: "≤0.3%",
      mfi: "10",
      dContent: "<1%",
      meltingTemp: "175°C",
      glassTransition: "60°C",
      tensileStrength: "50 MPa",
      elongation: "≤5%",
    },
    description: "Crystalline with high melting point, medium flow, suitable for heat-resistant extrusion or fiber spinning, excellent high-gloss appearance, useful for processing filament and staple fiber textiles.",
    applications: ["Fiber Spinning", "Textile Filaments", "Heat-resistant Extrusion"],
  },
  {
    grade: "ENCODE_10M",
    appearance: "Semitransparent",
    technicalSpecs: {
      density: "1.24 g/cm³",
      moisture: "≤0.04%",
      monomerContent: "≤0.3%",
      mfi: "10",
      dContent: "2%",
      meltingTemp: "165°C",
      glassTransition: "60°C",
      tensileStrength: "50 MPa",
      elongation: "≤5%",
    },
    description: "Resin, medium melting point, medium flow, suitable for injection molding, staple fiber and spun-bond non-woven.",
    applications: ["Injection Molding", "Staple Fiber", "Spun-bond Non-woven"],
  },
  {
    grade: "ENCODE_4U",
    appearance: "Semitransparent",
    technicalSpecs: {
      density: "1.24 g/cm³",
      moisture: "≤0.04%",
      monomerContent: "≤0.3%",
      mfi: "4",
      dContent: "<1%",
      meltingTemp: "175°C",
      glassTransition: "60°C",
      tensileStrength: "50 MPa",
      elongation: "≤5%",
    },
    description: "Crystalline resin, high melting point, low flow, suitable for extrusion molding, for heat-resistant straws or sheets.",
    applications: ["Extrusion Molding", "Heat-resistant Straws", "Sheet Production"],
  },
  {
    grade: "ENCODE_4M",
    appearance: "Semitransparent",
    technicalSpecs: {
      density: "1.24 g/cm³",
      moisture: "≤0.04%",
      monomerContent: "≤0.3%",
      mfi: "4",
      dContent: "2%",
      meltingTemp: "165°C",
      glassTransition: "60°C",
      tensileStrength: "50 MPa",
      elongation: "≤5%",
    },
    description: "Medium melting point resin with low flow, ideal for extrusion applications requiring moderate temperature resistance and dimensional stability.",
    applications: ["Extrusion", "Moderate Temperature Products", "Dimensional Stability"],
  },
  {
    grade: "ENCODE_4K",
    appearance: "Semitransparent",
    technicalSpecs: {
      density: "1.24 g/cm³",
      moisture: "≤0.04%",
      monomerContent: "≤0.3%",
      mfi: "4",
      dContent: "4%",
      meltingTemp: "155°C",
      glassTransition: "60°C",
      tensileStrength: "45 MPa",
      elongation: "≤5%",
    },
    description: "Lower melting point resin with enhanced flexibility, suitable for applications requiring easier processing and moderate mechanical properties.",
    applications: ["Easy Processing", "Flexible Applications", "Lower Temperature Molding"],
  },
];

// Custom Blend Card Component
function CustomBlendCard() {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3 }}
      className="group relative h-[560px] w-full [perspective:2000px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative h-full w-full [transform-style:preserve-3d] transition-all duration-700 ${
          isFlipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"
        }`}
      >
        {/* Front Side */}
        <div
          className={`absolute inset-0 h-full w-full [transform:rotateY(0deg)] [backface-visibility:hidden] overflow-hidden rounded-2xl bg-card border-2 border-yellow-500/50 shadow-lg transition-all duration-700 hover:shadow-xl hover:border-yellow-500 flex flex-col ${
            isFlipped ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="relative h-44 overflow-hidden flex-shrink-0">
            <img
              src="/image7.webp"
              alt="Custom Blend"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-7 h-7 text-yellow-400" />
                <h3 className="text-2xl md:text-3xl font-bold text-white truncate">
                  Custom Blend
                </h3>
              </div>
              <p className="text-sm text-white/80">Tailored to Your Needs</p>
            </div>
          </div>

          <div className="p-4 flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto">
              <p className="text-sm md:text-base text-foreground leading-relaxed mb-3">
                Need a PLA formulation with specific properties? Our R&D team can develop custom blends.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5 flex-shrink-0" />
                  <span className="text-sm md:text-base text-foreground leading-snug">Custom mechanical properties</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5 flex-shrink-0" />
                  <span className="text-sm md:text-base text-foreground leading-snug">Specific thermal characteristics</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5 flex-shrink-0" />
                  <span className="text-sm md:text-base text-foreground leading-snug">Application-specific formulations</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5 flex-shrink-0" />
                  <span className="text-sm md:text-base text-foreground leading-snug">Scalable production support</span>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-border flex-shrink-0">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                  <path d="M21 3v5h-5" />
                </svg>
                <span className="truncate">Hover to get started</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side - Contact CTA */}
        <div
          className={`absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-2xl bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 shadow-lg flex flex-col transition-all duration-700 hover:shadow-xl overflow-hidden ${
            !isFlipped ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="relative h-32 overflow-hidden flex-shrink-0">
            <img
              src="/image7.webp"
              alt="Custom Blend"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-800/80 to-transparent" />
          </div>

          <div className="p-5 flex-1 flex flex-col items-center justify-center text-center overflow-hidden">
            <Sparkles className="w-14 h-14 text-yellow-400 mb-3 flex-shrink-0" />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Let's Create Together
            </h3>
            <p className="text-sm md:text-base text-white/90 mb-5 leading-relaxed">
              Contact our team to discuss your custom PLA blend requirements.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-700 rounded-full font-bold text-base hover:bg-green-50 hover:scale-105 transition-all shadow-lg hover:shadow-xl flex-shrink-0"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>

            <div className="mt-4 pt-3 border-t border-white/20 w-full flex-shrink-0">
              <p className="text-xs text-white/80">
                Our R&D team is ready to help
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function PLAPortfolioSection() {
  const [visibleRows, setVisibleRows] = React.useState(3); // Show 3 rows initially (9 cards = 7 products + custom blend + 1 more)
  const ITEMS_PER_ROW = 3; // 3 columns = 3 items per row

  const totalRows = Math.ceil(plaProducts.length / ITEMS_PER_ROW);
  const visibleCount = visibleRows * ITEMS_PER_ROW;
  const displayedProducts = plaProducts.slice(0, visibleCount);
  const hasMore = visibleCount < plaProducts.length;
  const remainingCount = plaProducts.length - visibleCount;

  const handleLoadMore = () => {
    setVisibleRows(prev => prev + 2);
  };

  const handleShowAll = () => {
    setVisibleRows(totalRows);
  };

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
              Encode Life PLA Portfolio
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
              Specialized PLA grades for diverse industrial applications
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </motion.div>
        </div>

        {/* Products Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* All 7 Product Cards */}
          {plaProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
            >
              <PLAProductCard {...product} />
            </motion.div>
          ))}
          
          {/* Custom Blend Card - Always visible as 8th card */}
          <CustomBlendCard />
        </div>
      </div>
    </section>
  );
}
