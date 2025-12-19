"use client";

import { motion } from "framer-motion";
import { Sprout, Leaf, Factory, Award, CheckCircle2, Shield } from "lucide-react";
import Image from "next/image";

const feedstockTimeline = [
  {
    id: 1,
    phase: "Today",
    title: "Agricultural Feedstocks",
    description:
      "Sustainably sourced agricultural feedstocks including corn, sugarcane, and cassava—locally abundant and renewable plant resources.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    icon: Sprout,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 2,
    phase: "Developing",
    title: "Second-Generation Feedstocks",
    description:
      "Next-generation lignocellulosic feedstocks from bagasse, wood chips, switchgrass, and agricultural waste—maximizing resource efficiency.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
    icon: Leaf,
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 3,
    phase: "Vision",
    title: "Direct Greenhouse Gas Conversion",
    description:
      "Revolutionary technology converting CO₂ and methane directly into lactic acid—the ultimate circular solution bypassing agricultural steps entirely.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
    icon: Factory,
    color: "from-teal-500 to-cyan-600",
  },
  {
    id: 4,
    phase: "Circular",
    title: "Recycled PLA Feedstock",
    description:
      "Mechanical and chemical recycling methods transforming post-consumer and post-industrial PLA into new resin—closing the loop completely.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
    icon: Award,
    color: "from-cyan-500 to-blue-600",
  },
];

const certifications = [
  {
    id: 1,
    title: "Biobased Carbon",
    authority: "USDA Certified",
    description:
      "100% biobased carbon from renewable plant resources, independently verified by third-party certification.",
    icon: CheckCircle2,
    badge: "100% Renewable",
  },
  {
    id: 2,
    title: "Sustainable Agriculture",
    authority: "ISCC PLUS Certified",
    description:
      "Third-party certification ensuring social and environmental sustainability of our agricultural feedstock sources.",
    icon: Leaf,
    badge: "Sustainable",
  },
  {
    id: 3,
    title: "Quality Assurance",
    authority: "Third-Party Verified",
    description:
      "Annual verification and comprehensive sustainability auditing ensuring the highest standards of safety and environmental responsibility.",
    icon: Shield,
    badge: "Verified",
  },
];

export function SustainableFeedstocksSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 lg:px-12 bg-muted/20">
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
            Sustainable,{" "}
            <span className="text-green-600 dark:text-green-400">
              Renewable Feedstocks
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Manufacturing PLA doesn't require a specific feedstock. We're committed
            to feedstock diversification—using the most abundant, locally
            available, and sustainable source of biobased carbon wherever we
            produce.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-6"
          />
        </div>

        {/* Feedstock Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
          {feedstockTimeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <div className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-green-500/50 hover:shadow-xl h-full">
                  {/* Image Header */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                      quality={70}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
                    {/* Phase Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="px-4 py-2 rounded-full bg-green-500 text-white text-sm font-semibold shadow-lg">
                        {item.phase}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold font-newsreader italic">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="mb-12 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-newsreader italic font-semibold mb-4"
          >
            Certified & Verified
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Our commitment to sustainability is backed by rigorous third-party
            certifications and annual verification
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group"
              >
                <div className="relative bg-card border border-border rounded-2xl p-6 md:p-8 h-full transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-green-500/50">
                  {/* Badge */}
                  <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold shadow-lg">
                    {cert.badge}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-green-600 dark:text-green-400" />
                  </div>

                  {/* Title */}
                  <h4 className="text-lg md:text-xl font-semibold mb-2">
                    {cert.title}
                  </h4>

                  {/* Authority */}
                  <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                    {cert.authority}
                  </p>

                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {cert.description}
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
