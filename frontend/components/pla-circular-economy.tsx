"use client";

import { motion } from "framer-motion";
import { Sprout, Factory, Package, Recycle, Leaf, Zap } from "lucide-react";

const stages = [
  {
    icon: Sprout,
    title: "Renewable Resources",
    description: "Corn and sugarcane from Indian farmers, supporting rural employment",
  },
  {
    icon: Factory,
    title: "PLA Production & Jobs",
    description: "Creating 500+ skilled jobs in biotechnology and manufacturing",
  },
  {
    icon: Package,
    title: "Special PLA Blends",
    description: "10+ custom formulations for packaging, textiles, medical devices",
  },
  {
    icon: Recycle,
    title: "Mechanical Recycling",
    description: "Reprocessing used PLA into new products, extending material life",
  },
  {
    icon: Leaf,
    title: "Industrial Composting",
    description: "Converting PLA into nutrient-rich biofertilizers for agriculture",
  },
  {
    icon: Zap,
    title: "Biogas & Energy",
    description: "Anaerobic digestion producing renewable energy and closing the loop",
  },
];

export function PLACircularEconomy() {
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
              Complete End-of-Life Solutions
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
              Comprehensive circular economy with zero-waste end-of-life management
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
        >
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Our comprehensive end-of-life solutions ensure every PLA product completes the circular economy cycle. 
            From industrial composting to mechanical recycling, chemical recycling, and biogas conversion—we guarantee 
            zero waste while creating value through renewable energy and biofertilizers for sustainable agriculture.
          </p>
        </motion.div>

        {/* Circular stages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg h-full">
                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:scale-125 transition-all duration-300">
                    <Icon className="w-7 h-7 text-green-600 dark:text-green-400 group-hover:rotate-[360deg] transition-transform duration-700" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                    {stage.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
