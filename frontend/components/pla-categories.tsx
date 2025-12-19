"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, UtensilsCrossed, ShoppingBag, Stethoscope, Sprout, Package, Shirt } from "lucide-react";

const industries = [
  {
    icon: UtensilsCrossed,
    title: "Food & Beverage",
    description: "Clear cups, lids, trays, clamshells, cutlery, straws",
    benefits: "Food safety, clarity, industrial composability",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    description: "Mailer bags, protective packaging, shipping materials",
    benefits: "Durable, lightweight, sustainable branding",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Medical",
    description: "Disposable trays, specimen containers, medical packaging",
    benefits: "Sterile, safe, compliant with medical standards",
  },
  {
    icon: Sprout,
    title: "Agriculture",
    description: "Mulch films, plant pots, seedling trays, agricultural films",
    benefits: "Biodegradable in soil, no plastic residue",
  },
  {
    icon: Package,
    title: "Consumer Goods",
    description: "Cosmetics packaging, toy components, 3D-printed prototypes",
    benefits: "Versatile, customizable, eco-friendly appeal",
  },
  {
    icon: Shirt,
    title: "Textile & Fibres",
    description: "PLA fibres for nonwovens, apparel blends, technical textiles",
    benefits: "Soft, moisture-wicking, naturally antimicrobial",
  },
];

const benefits = [
  "Reduces GHG emissions significantly",
  "Reduces plastic pollution",
  "Supports circular economy",
  "Scalable production",
];

export function PLACategories() {
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
              Special PLA Blends & Applications
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
              Developing 10+ specialized formulations for diverse industries with complete end-of-life solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </motion.div>
        </div>

        {/* Industries grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card border border-border rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {industry.description}
                    </p>
                    <div className="pt-3 border-t border-border">
                      <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                        {industry.benefits}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Complete End-of-Life Solutions (BOL & EOL)
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-base md:text-lg text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm md:text-base text-muted-foreground mt-6 max-w-2xl mx-auto">
            Our comprehensive end-of-life management includes industrial composting, mechanical recycling, 
            chemical recycling, and biogas conversion—ensuring zero waste and maximum resource recovery.
          </p>
        </motion.div>

        {/* Comparison visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <div className="bg-card border-2 border-green-500 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h4 className="text-xl font-semibold">PLA Advantages</h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ Renewable resource-based</li>
              <li>✓ Lower carbon footprint</li>
              <li>✓ Industrially compostable</li>
              <li>✓ Excellent mechanical properties</li>
              <li>✓ Cost-effective at scale</li>
            </ul>
          </div>
          <div className="bg-card border-2 border-red-500/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
              <h4 className="text-xl font-semibold">Traditional Plastics</h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✗ Fossil fuel dependent</li>
              <li>✗ High carbon emissions</li>
              <li>✗ Non-biodegradable</li>
              <li>✗ Environmental pollution</li>
              <li>✗ Limited end-of-life options</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
