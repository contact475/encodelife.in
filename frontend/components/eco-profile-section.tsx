"use client";

import { motion } from "framer-motion";
import { TrendingDown, Zap, Leaf, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    id: 1,
    icon: TrendingDown,
    value: 80,
    suffix: "%",
    label: "Less GHG Emissions",
    description: "Compared to traditional petrochemical plastics",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 2,
    icon: Zap,
    value: 52,
    suffix: "%",
    label: "Less Energy Usage",
    description: "Non-renewable energy savings in production",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 3,
    icon: Leaf,
    value: 100,
    suffix: "%",
    label: "Biobased Carbon",
    description: "Sourced from renewable plant resources",
    color: "from-teal-500 to-cyan-600",
  },
  {
    id: 4,
    icon: Award,
    value: 500,
    suffix: "+",
    label: "Jobs Created",
    description: "In India's biotech sector",
    color: "from-cyan-500 to-blue-600",
  },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group"
    >
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 h-full transition-all duration-300 hover:border-green-500/50 hover:shadow-xl">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-7 h-7 text-green-600 dark:text-green-400" />
        </div>

        {/* Value */}
        <div className="mb-4">
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 dark:text-green-400">
            {stat.value}
            {stat.suffix}
          </div>
        </div>

        {/* Label */}
        <h3 className="text-lg md:text-xl font-semibold mb-2">{stat.label}</h3>

        {/* Description */}
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          {stat.description}
        </p>
      </div>
    </motion.div>
  );
}

export function EcoProfileSection() {
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
            Environmental{" "}
            <span className="text-green-600 dark:text-green-400">
              Impact Data
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            We have developed and published peer-reviewed eco-profiles and life
            cycle analysis (LCA) to quantify the environmental impact of our PLA
            biopolymers. Data drives our continuous improvement journey.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-6"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>


        {/* Research & Verification Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="rounded-3xl bg-card border border-border p-8 md:p-12 lg:p-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Content */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 mb-6">
                <Award className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  Peer-Reviewed Research
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-newsreader italic font-semibold mb-4">
                Third-Party Verified Data
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                Our eco-profile and life cycle analysis data is independently
                verified and published in peer-reviewed journals. We work with
                leading environmental consultancies to ensure accuracy and
                transparency in all our sustainability claims.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  variant="default"
                  size="lg"
                  className="rounded-full"
                >
                  Read Eco-Profile
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                >
                  Download LCA Report
                </Button>
              </div>
            </div>

            {/* Right Stats */}
            <div className="flex-shrink-0 grid grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
                <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                  80%
                </div>
                <div className="text-sm text-muted-foreground">
                  Lower Carbon Footprint
                </div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
                <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                  52%
                </div>
                <div className="text-sm text-muted-foreground">
                  Energy Savings
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
