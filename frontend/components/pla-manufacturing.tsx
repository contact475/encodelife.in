"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Feedstock Reception",
    description: "Corn, sugarcane, or cassava from sustainably managed agricultural sources",
    image: "/image7.webp",
  },
  {
    title: "Starch Extraction",
    description: "Mechanical and enzymatic extraction of starch from agricultural feedstock",
    image: "/image3.webp",
  },
  {
    title: "Enzymatic Hydrolysis",
    description: "Breaking down starch into glucose using specialized enzymes",
    image: "/image2.webp",
  },
  {
    title: "Fermentation",
    description: "Microbial conversion of glucose to high-purity lactic acid",
    image: "/image1.webp",
  },
  {
    title: "Lactic Acid Purification",
    description: "Advanced purification and concentration of lactic acid",
    image: "/image5.webp",
  },
  {
    title: "Lactide Formation",
    description: "Catalytic dehydration and cyclization to form lactide monomers",
    image: "/image6.webp",
  },
  {
    title: "Ring-Opening Polymerisation",
    description: "High-temperature polymerisation of lactide to produce PLA polymer chains",
    image: "/image4.webp",
  },
  {
    title: "Extrusion & Pelletizing",
    description: "Molten PLA extruded, cooled, and cut into pellets. Quality control and packaging.",
    image: "/image5.webp",
  },
];

export function PLAManufacturing() {
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
              Manufacturing Excellence & Job Creation
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
              Transforming agricultural feedstock into high-performance bioplastics through sustainable manufacturing
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </motion.div>
        </div>

        {/* Process flow */}
        <div className="relative">
          {/* Desktop view - horizontal flow */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between gap-4 mb-12">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center flex-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex-1"
                  >
                    <div className="bg-card border border-border rounded-xl p-4 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg">
                      <div className="relative h-32 rounded-lg overflow-hidden mb-3">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-sm font-semibold mb-1 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-green-600 dark:text-green-400 mx-2 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet view - vertical flow */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {step.description}
                      </p>
                      <div className="relative h-40 rounded-lg overflow-hidden">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-green-600 dark:text-green-400 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 grid md:grid-cols-4 gap-6"
        >
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              500+
            </div>
            <div className="text-sm text-muted-foreground">
              Direct Jobs Created
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              ✓
            </div>
            <div className="text-sm text-muted-foreground">
              Renewable Energy & Storage Integration
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              80K
            </div>
            <div className="text-sm text-muted-foreground">
              Tonnes Annual Capacity
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              10+
            </div>
            <div className="text-sm text-muted-foreground">
              Special PLA Blends
            </div>
          </div>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            Empowering India&apos;s Biotech Workforce
          </h3>
          <p className="text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            Our manufacturing facility creates jobs for freshers in biotechnology, chemical engineering,
            quality control, and operations. Through comprehensive training programs and industry-academia partnerships,
            we&apos;re building India&apos;s skilled biotech workforce while producing
            specialized PLA blends with complete end-of-life solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
