"use client";

import { motion } from "framer-motion";
import { Sprout, Shield, Recycle } from "lucide-react";

const ambitions = [
  {
    id: 1,
    icon: Sprout,
    title: "Decoupling from Fossil Feedstocks",
    description:
      "Encodelife PLA is made entirely from plant sugars—carbon captured from the atmosphere through photosynthesis—not petroleum or fossil fuels. Produced at India's first corn-based biopolymer plant with renewable feedstock sources.",
  },
  {
    id: 2,
    icon: Shield,
    title: "Preventing Environmental Leakage",
    description:
      "We advocate for robust waste infrastructure development and ensure inherent safety and non-toxicity of our biopolymers through rigorous third-party testing. Nothing should end up as litter.",
  },
  {
    id: 3,
    icon: Recycle,
    title: "Multiple After-Use Pathways",
    description:
      "Our PLA supports industrial composting, mechanical recycling, chemical recycling, and biogas generation—true circularity in action. Products designed for complete end-of-life solutions.",
  },
];

export function CircularEconomySection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-newsreader italic font-semibold mb-6"
          >
            How Encodelife Supports a{" "}
            <span className="text-green-600 dark:text-green-400">
              Circular Economy
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            The circular economy model is based on sustainable manufacturing
            practices that reduce waste, increase product reuse, and support
            environmental health. Unlike a linear model where product life ends
            with disposal, our circular model encompasses the entire journey—from
            carbon capture through photosynthesis to after-use regeneration—ensuring
            products return to the environment beneficially.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-6"
          />
        </div>

        {/* Three Ambitions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-16 md:mt-24">
          {ambitions.map((ambition, index) => {
            const Icon = ambition.icon;
            return (
              <motion.div
                key={ambition.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 h-full transition-all duration-300 hover:border-green-500/50 hover:shadow-xl">
                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 font-newsreader italic">
                    {ambition.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {ambition.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 md:mt-20 p-8 md:p-12 rounded-3xl bg-card border border-border"
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-newsreader italic font-semibold mb-6">
              Our Commitment to Circularity
            </h3>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              In partnership with industry leaders and academic institutions,
              we're establishing India's first corn-based biopolymer plant.
              We're developing special PLA blends with complete end-of-life
              solutions through industry-academia collaboration.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
