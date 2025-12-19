"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Leaf,
  Recycle,
  Zap,
  Factory,
  TrendingDown,
  Sprout,
  Globe,
  Award,
} from "lucide-react";

export function AboutFeaturesSection() {
  const features = [
    {
      title: "100% Biodegradable",
      description:
        "Our PLA bioplastics decompose naturally, returning nutrients to the soil without leaving harmful residues.",
      icon: <Leaf className="w-6 h-6" />,
    },
    {
      title: "Circular Economy",
      description:
        "Complete earth-to-earth cycle where materials can be composted or recycled, minimizing waste.",
      icon: <Recycle className="w-6 h-6" />,
    },
    {
      title: "Renewable Energy Integration",
      description:
        "Production integrated with renewable energy and advanced energy storage systems, ensuring sustainable operations.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "India's First Corn-Based Plant",
      description:
        "India's first corn-based biopolymer plant with industrial-scale capacity to meet large-scale market demands.",
      icon: <Factory className="w-6 h-6" />,
    },
    {
      title: "Carbon Negative",
      description:
        "Corn absorbs more CO₂ during growth than emitted in production, making our process carbon negative.",
      icon: <TrendingDown className="w-6 h-6" />,
    },
    {
      title: "Sustainable Sourcing",
      description:
        "Only 1.75 m² of land per kg of PLA, supporting efficient and sustainable agriculture practices.",
      icon: <Sprout className="w-6 h-6" />,
    },
    {
      title: "Global Impact",
      description:
        "Reducing plastic pollution worldwide while creating sustainable alternatives for industries.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Quality Certified",
      description:
        "Meeting international standards for bioplastics with certifications from leading organizations.",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold italic font-newsreader text-foreground mb-4">
            Why Choose Encode Life
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Leading the bioplastics revolution with innovative, sustainable solutions
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-border",
        (index === 0 || index === 4) && "lg:border-l border-border",
        index < 4 && "lg:border-b border-border"
      )}
    >
      {/* Hover gradient effect - top for first row */}
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      )}
      {/* Hover gradient effect - bottom for second row */}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      )}
      
      {/* Icon */}
      <div className="mb-4 relative z-10 px-6 md:px-10 text-primary">
        {icon}
      </div>
      
      {/* Title */}
      <div className="text-lg font-bold mb-2 relative z-10 px-6 md:px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-border group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
          {title}
        </span>
      </div>
      
      {/* Description */}
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-6 md:px-10">
        {description}
      </p>
    </motion.div>
  );
};
