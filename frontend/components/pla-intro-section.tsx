"use client";

import { motion } from "framer-motion";
import { Leaf, Droplets, Recycle } from "lucide-react";

export function PLAIntroSection() {
  return (
    <section id="intro" className="py-16 md:py-24 lg:py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold italic font-newsreader mb-4"
          >
            What is PLA?
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Main content with image */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="/image3.webp"
              alt="PLA bioplastics production from corn"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-sm md:text-base font-medium">
                From Corn to Sustainable Materials
              </p>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            <p className="text-lg md:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed">
              Polylactic Acid (PLA) is a biobased, biodegradable, and industrially compostable polymer derived from renewable plant sources such as corn starch, sugarcane, cassava, or other carbohydrate-rich biomass.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Unlike conventional plastics made from petroleum, PLA originates from plant sugars, making it one of the world&apos;s most commercially successful bioplastics. PLA is an aliphatic polyester formed through the polymerisation of lactic acid, converted from plant-derived glucose into lactic acid, then into lactide, and finally polymerised into PLA resin.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              PLA belongs to the family of thermoplastics, meaning it softens with heat and hardens when cooled—making it compatible with standard plastic processing machinery. Produced at India&apos;s first corn-based biopolymer plant, integrated with renewable energy and energy storage systems.
            </p>

            {/* Key features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center text-center p-4 rounded-xl border border-border hover:border-green-500/50 transition-colors">
                <Leaf className="w-8 h-8 text-green-600 dark:text-green-400 mb-2" />
                <span className="text-sm font-medium">Bio-Based</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl border border-border hover:border-green-500/50 transition-colors">
                <Droplets className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                <span className="text-sm font-medium">Compostable</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl border border-border hover:border-green-500/50 transition-colors">
                <Recycle className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-2" />
                <span className="text-sm font-medium">Recyclable</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* More About Section - Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 rounded-3xl" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
          
          <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold italic font-newsreader mb-4">
                More About Polylactic Acid
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative bg-card border border-border rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">1</span>
                </div>
                <h4 className="text-lg md:text-xl font-semibold mb-3 text-foreground">
                  Renewable Resources
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  PLA bioplastics are made from renewable plant resources such as corn starch, 
                  tapioca roots, and sugarcane. The process involves fermentation and polymerization, 
                  breaking down naturally without leaving toxic residues.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative bg-card border border-border rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
                </div>
                <h4 className="text-lg md:text-xl font-semibold mb-3 text-foreground">
                  Sustainable Manufacturing
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Our manufacturing starts with agricultural feedstock, converted into sugar through
                  enzymatic processes. This sugar is fermented to produce lactic acid, then polymerized
                  to create high-quality PLA resin. Integrated with renewable energy and energy storage systems.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group relative bg-card border border-border rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">3</span>
                </div>
                <h4 className="text-lg md:text-xl font-semibold mb-3 text-foreground">
                  Superior Properties
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  PLA offers excellent mechanical properties: high tensile strength, good transparency, 
                  and thermal stability. Processed using conventional plastic manufacturing equipment, 
                  making it an easy drop-in replacement for traditional plastics.
                </p>
              </motion.div>
            </div>

            {/* Bottom highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 md:mt-12 text-center"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full">
                <span className="text-sm md:text-base font-medium text-green-600 dark:text-green-400">
                  ✓ Renewable Energy & Storage Integration
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
