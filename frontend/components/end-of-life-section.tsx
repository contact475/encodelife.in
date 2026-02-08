"use client";

import { motion } from "framer-motion";
import { Leaf, Recycle, Zap, FlaskConical, Flame, Trash2 } from "lucide-react";
import { useState } from "react";

const endOfLifeOptions = [
  {
    id: 1,
    icon: Leaf,
    title: "Industrial Composting",
    shortDesc: "Return to earth as nutrient-rich soil amendment",
    process: "Biodegradable under industrial composting conditions (>60°C)",
    applications: [
      "Food serviceware and packaging",
      "Coffee pods and tea bags",
      "Agricultural films",
      "Food waste bags",
    ],
    timeline: "Complete breakdown within 90-180 days",
    color: "from-green-500 to-emerald-600",
    preferred: true,
  },
  {
    id: 2,
    icon: Recycle,
    title: "Mechanical Recycling",
    shortDesc: "Sorted, processed, and remanufactured into new products",
    process: "Collection, sorting, cleaning, grinding, and reprocessing into pellets",
    applications: [
      "PLA bottles and containers",
      "Coated paper cups",
      "Rigid packaging",
      "Durable goods",
    ],
    timeline: "Multiple lifecycles possible with proper collection",
    color: "from-emerald-500 to-teal-600",
    preferred: true,
  },
  {
    id: 3,
    icon: Zap,
    title: "Anaerobic Digestion",
    shortDesc: "Convert to biogas for renewable energy generation",
    process: "Microbial breakdown in oxygen-free environment producing methane",
    applications: [
      "Food packaging with organic waste",
      "Compostable bags",
      "Agricultural applications",
      "Single-use serviceware",
    ],
    timeline: "Energy recovery within 20-40 days",
    color: "from-teal-500 to-cyan-600",
    preferred: true,
  },
  {
    id: 4,
    icon: FlaskConical,
    title: "Chemical Recycling",
    shortDesc: "Break down to monomers for virgin-quality PLA",
    process: "Hydrolysis or thermal depolymerization back to lactide or lactic acid",
    applications: [
      "Post-consumer PLA products",
      "Post-industrial PLA scrap",
      "Mixed PLA streams",
      "Contaminated materials",
    ],
    timeline: "Infinite recycling potential maintaining quality",
    color: "from-cyan-500 to-blue-600",
    preferred: true,
  },
  {
    id: 5,
    icon: Flame,
    title: "Energy Recovery",
    shortDesc: "Controlled incineration with energy capture",
    process: "Combustion in waste-to-energy facilities with emission controls",
    applications: [
      "Non-recyclable contaminated PLA",
      "Mixed waste streams",
      "Products at end-of-recovery life",
    ],
    timeline: "Immediate energy generation, minimal ash residue",
    color: "from-orange-500 to-red-600",
    preferred: false,
  },
  {
    id: 6,
    icon: Trash2,
    title: "Landfill",
    shortDesc: "Last resort option with eventual breakdown",
    process: "Anaerobic degradation over extended period in landfill conditions",
    applications: [
      "When no other option available",
      "Mixed contaminated waste",
    ],
    timeline: "Gradual breakdown over several years",
    color: "from-gray-500 to-gray-700",
    preferred: false,
  },
];

function FlipCard({ option, index }: { option: typeof endOfLifeOptions[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = option.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="group"
    >
      <div
        className="relative w-full min-h-[350px] sm:min-h-[380px] md:h-[400px] cursor-pointer transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          willChange: "transform",
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="h-full bg-green-500 p-6 sm:p-8 rounded-2xl flex flex-col justify-between text-white shadow-xl">
            {/* Top Section */}
            <div>
              {option.preferred && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-3 sm:mb-4 text-xs sm:text-sm font-semibold">
                  ✓ Preferred Option
                </div>
              )}
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-6">
                <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-newsreader italic font-semibold mb-2 sm:mb-3">
                {option.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                {option.shortDesc}
              </p>
            </div>

            {/* Bottom Hint */}
            <div className="text-xs sm:text-sm text-white/70 font-medium">
              Click to learn more →
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="h-full bg-card border-2 border-border p-6 sm:p-8 rounded-2xl flex flex-col justify-between overflow-y-auto">
            {/* Icon and Title */}
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-3 sm:mb-4">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 font-newsreader italic">
                {option.title}
              </h4>

              {/* Process */}
              <div className="mb-3 sm:mb-4">
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground mb-1 sm:mb-2">
                  Process:
                </p>
                <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                  {option.process}
                </p>
              </div>

              {/* Applications */}
              <div className="mb-3 sm:mb-4">
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground mb-1 sm:mb-2">
                  Applications:
                </p>
                <ul className="space-y-0.5 sm:space-y-1">
                  {option.applications.map((app, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-foreground flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">•</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline */}
              <div className="mb-3 sm:mb-4">
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground mb-1 sm:mb-2">
                  Timeline:
                </p>
                <p className="text-xs sm:text-sm text-foreground">{option.timeline}</p>
              </div>
            </div>

            {/* Back Hint */}
            <div className="text-xs sm:text-sm text-muted-foreground font-medium">
              Click to flip back ←
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function EndOfLifeSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-newsreader italic font-semibold mb-4 sm:mb-6 px-2"
          >
            Multiple{" "}
            <span className="text-green-600 dark:text-green-400">
              End-of-Life Pathways
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2"
          >
            We design products with their entire lifecycle in mind, offering
            multiple responsible end-of-life options depending on the application
            and local infrastructure. True circularity means flexibility.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-4 sm:mt-6"
          />
        </div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20"
        >
          <p className="text-sm sm:text-base md:text-lg text-center">
            <span className="font-semibold">Click any card</span> to explore detailed information about each end-of-life pathway
          </p>
        </motion.div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {endOfLifeOptions.map((option, index) => (
            <FlipCard key={option.id} option={option} index={index} />
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We work with NGOs, governments, and industry partners to develop the
            infrastructure needed for optimal end-of-life management. Our goal is
            to ensure every product finds the best possible pathway back to
            nature or into new products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
