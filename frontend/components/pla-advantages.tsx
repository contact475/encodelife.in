"use client";

import { motion } from "framer-motion";
import { Flag, Leaf, TrendingDown, Droplets, Recycle, Zap } from "lucide-react";

const advantages = [
  {
    icon: Flag,
    title: "Empowering Biotech Sector",
    description: "Driving India's biotechnology revolution by establishing the nation's first industrial-scale PLA plant. Creating a robust ecosystem for biotech innovation, supporting Atmanirbhar Bharat while generating skilled employment opportunities.",
    stats: "First Industrial-Scale Plant",
  },
  {
    icon: Leaf,
    title: "Direct Job Creation",
    description: "Creating jobs for freshers in biotechnology, chemical engineering, quality control, and manufacturing. Our comprehensive training programs develop skilled professionals ready to lead India's bioplastics industry.",
    stats: "Jobs for Freshers",
  },
  {
    icon: TrendingDown,
    title: "Industry Collaboration",
    description: "Strategic partnerships with research institutions foster innovation. Joint R&D programs, internships, and knowledge transfer accelerate biotech advancement and create opportunities for young talent.",
    stats: "5+ Research Partnerships",
  },
  {
    icon: Droplets,
    title: "End-of-Life Solutions",
    description: "Comprehensive end-of-life management through industrial composting, mechanical recycling, and biogas conversion. Converting used PLA into renewable energy, biofertilizers, and valuable resources for circular economy.",
    stats: "100% Circular Solutions",
  },
  {
    icon: Recycle,
    title: "Special PLA Blends",
    description: "Developing 10+ specialized PLA formulations for diverse applications: high-heat resistant grades, flexible films, rigid packaging, medical-grade materials, and custom blends tailored to specific industry requirements.",
    stats: "10+ Custom Blends",
  },
  {
    icon: Zap,
    title: "Sustainable Innovation",
    description: "Production integrated with renewable energy and energy storage systems, with focus on agricultural waste valorization. Supporting farmers through corn procurement, creating rural employment, and establishing sustainable supply chains across India.",
    stats: "Renewable Energy Integration",
  },
];

export function PLAAdvantages() {
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
              Transforming India&apos;s Biotech Landscape
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
              Creating jobs, fostering collaboration, and pioneering sustainable solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </motion.div>
        </div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:scale-125 transition-all duration-300">
                    <Icon className="w-8 h-8 text-green-600 dark:text-green-400 group-hover:rotate-[360deg] transition-transform duration-700" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                    {advantage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 flex-1">
                    {advantage.description}
                  </p>

                  {/* Stats */}
                  <div className="pt-4 border-t border-border">
                    <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                      {advantage.stats}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Impact section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16"
        >
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  Our Impact on India&apos;s Biotech Sector
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  By partnering with Encode Life, you&apos;re supporting India&apos;s biotechnology growth, 
                  creating employment for fresh graduates, advancing industry-academia collaboration, and 
                  contributing to a circular economy with comprehensive end-of-life solutions.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                    500+
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Direct Jobs for Freshers
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                    5+
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Research Collaborations
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                    10+
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Special PLA Blends
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                    100%
                  </div>
                  <div className="text-xs text-muted-foreground">
                    End-of-Life Solutions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Join India&apos;s Biotech Revolution
          </h3>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Partner with us to create jobs, drive innovation, and build sustainable solutions for India&apos;s future.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all"
          >
            Partner With Us
          </a>
        </motion.div>
      </div>
    </section>
  );

}
