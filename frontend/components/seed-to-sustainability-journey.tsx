"use client";

import { motion } from "framer-motion";
import { Sprout, TreeDeciduous, Wheat, FlaskConical, Factory, Package } from "lucide-react";
import Image from "next/image";

const journeySteps = [
  {
    id: 1,
    icon: Sprout,
    title: "Corn Seed",
    subtitle: "It starts with a seed",
    description: "Every journey begins with a single seed - the foundation of sustainable bioplastics",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  },
  {
    id: 2,
    icon: TreeDeciduous,
    title: "Growing Corn Field",
    subtitle: "Nature's carbon capture",
    description: "Plants naturally capture CO₂ from the atmosphere through photosynthesis",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  },
  {
    id: 3,
    icon: Wheat,
    title: "Harvesting",
    subtitle: "Sustainable farming",
    description: "Supporting Indian farmers through sustainable corn procurement practices",
    image: "https://images.unsplash.com/photo-1625246308730-c8c700f1e36a?w=800&q=80",
  },
  {
    id: 4,
    icon: FlaskConical,
    title: "Sugar Extraction",
    subtitle: "Raw material processing",
    description: "Converting corn starch into fermentable sugars through enzymatic processes",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
  },
  {
    id: 5,
    icon: Factory,
    title: "PLA Manufacturing",
    subtitle: "Bio-transformation",
    description: "Transforming plant sugars into high-performance PLA biopolymers at India's first corn-based plant",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
  {
    id: 6,
    icon: Package,
    title: "PLA Products",
    subtitle: "Sustainable solutions",
    description: "Creating diverse sustainable products for food packaging, textiles, medical, and more",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
  },
];

export function SeedToSustainabilityJourney() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-newsreader italic font-semibold mb-4 sm:mb-6">
              From Seed to Sustainability
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow the journey from a single seed to a sustainable future, completing nature's perfect cycle
            </p>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </motion.div>
        </div>

        {/* Journey Steps */}
        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                  {/* Image */}
                  <div className={`relative ${isEven ? '' : 'lg:col-start-2'}`}>
                    <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl group">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Step number badge */}
                      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-lg">
                        {step.id}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-4 sm:space-y-6 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                    {/* Icon */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-green-500/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-green-600 dark:text-green-400" />
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-newsreader italic font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-base sm:text-lg text-green-600 dark:text-green-400 font-medium">
                        {step.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Progress indicator line */}
                    {index < journeySteps.length - 1 && (
                      <div className="hidden lg:block absolute left-1/2 -bottom-8 md:-bottom-12 w-0.5 h-8 md:h-12 bg-gradient-to-b from-green-500 to-emerald-500" />
                    )}
                  </div>
                </div>

                {/* Mobile progress line */}
                {index < journeySteps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 sm:mt-8">
                    <div className="w-0.5 h-8 sm:h-12 bg-gradient-to-b from-green-500 to-emerald-500" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        >
          <div className="inline-block p-6 sm:p-8 md:p-10 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <p className="text-base sm:text-lg md:text-xl font-medium text-foreground max-w-3xl mx-auto">
              This complete cycle represents our commitment to sustainability - from the earth, through innovation, and back to nature.
              Creating a truly circular economy for India's future.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
