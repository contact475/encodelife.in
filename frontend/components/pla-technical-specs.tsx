"use client";

import { motion } from "framer-motion";
import { Beaker, Thermometer, Gauge, Droplets } from "lucide-react";

const specifications = [
  {
    property: "Density",
    value: "1.24-1.27 g/cm³",
    icon: Gauge,
  },
  {
    property: "Melting Temperature",
    value: "150-170°C",
    icon: Thermometer,
  },
  {
    property: "Glass Transition",
    value: "55-60°C",
    icon: Thermometer,
  },
  {
    property: "Tensile Strength",
    value: "50-70 MPa",
    icon: Gauge,
  },
  {
    property: "Moisture Content",
    value: "<0.02 wt%",
    icon: Droplets,
  },
  {
    property: "Biobased Content",
    value: "≥98%",
    icon: Beaker,
  },
];

const grades = [
  {
    name: "EL-30U",
    description: "High-performance resin with high melting point, medium flow, ideal for temperature-resistant injection molding and non-woven applications",
    applications: ["Injection Molding", "Non-woven", "Heat Resistant"],
    meltingPoint: "175°C",
    flow: "Medium",
  },
  {
    name: "EL-30M",
    description: "Medium melting point, medium flow, suitable for opaque products and thin-wall injection molding",
    applications: ["Injection Molding", "Thin-wall Products", "Opaque Items"],
    meltingPoint: "165°C",
    flow: "Medium",
  },
  {
    name: "EL-10U",
    description: "Crystalline with high melting point, suitable for heat-resistant extrusion, fiber spinning, and textiles",
    applications: ["Fiber Spinning", "Textiles", "Extrusion"],
    meltingPoint: "175°C",
    flow: "Medium",
  },
  {
    name: "EL-10M",
    description: "Medium melting point, medium flow, suitable for injection molding and spun-bond non-woven",
    applications: ["Injection Molding", "Non-woven", "Staple Fiber"],
    meltingPoint: "165°C",
    flow: "Medium",
  },
  {
    name: "EL-4U",
    description: "Crystalline resin, high melting point, low flow, suitable for heat-resistant straws and sheets",
    applications: ["Straws", "Sheets", "Heat Resistant"],
    meltingPoint: "175°C",
    flow: "Low",
  },
  {
    name: "EL-4M",
    description: "Moderate melting point, low flow, suitable for straws, sheets, and 3D printing applications",
    applications: ["Straws", "Sheets", "3D Printing"],
    meltingPoint: "165°C",
    flow: "Low",
  },
  {
    name: "EL-4K",
    description: "Low melting point, low flow, suitable for blown film, coating, and high transparency products",
    applications: ["Blown Film", "Coating", "3D Printing"],
    meltingPoint: "155°C",
    flow: "Low",
  },
];

export function PLATechnicalSpecs() {
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
              Technical Summary
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
              Encode Life PLA Specifications & Properties
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </motion.div>
        </div>

        {/* Key specifications */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-16">
          {specifications.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-4 md:p-6 text-center hover:border-green-500/50 transition-all duration-300 hover:shadow-lg"
              >
                <Icon className="w-8 h-8 mx-auto mb-3 text-green-600 dark:text-green-400" />
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {spec.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {spec.property}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Typical Properties Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-12 overflow-x-auto"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Typical Properties
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 font-semibold">Property</th>
                  <th className="text-center py-3 px-2 font-semibold">Value</th>
                  <th className="text-left py-3 px-2 font-semibold">Unit</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-3 px-2">Appearance</td>
                  <td className="text-center py-3 px-2">Off-white to translucent pellets</td>
                  <td className="py-3 px-2">-</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-2">Density</td>
                  <td className="text-center py-3 px-2">1.24-1.26</td>
                  <td className="py-3 px-2">g/cm³</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-2">MFI (210°C/2.16kg)</td>
                  <td className="text-center py-3 px-2">6-18</td>
                  <td className="py-3 px-2">g/10 min</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-2">Vicat Softening Temp</td>
                  <td className="text-center py-3 px-2">55-65</td>
                  <td className="py-3 px-2">°C</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-2">Glass Transition (Tg)</td>
                  <td className="text-center py-3 px-2">55-60</td>
                  <td className="py-3 px-2">°C</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-2">Melting Point (Tm)</td>
                  <td className="text-center py-3 px-2">150-170</td>
                  <td className="py-3 px-2">°C</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-2">Tensile Strength</td>
                  <td className="text-center py-3 px-2">50-70</td>
                  <td className="py-3 px-2">MPa</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-2">Elongation at Break</td>
                  <td className="text-center py-3 px-2">3-10</td>
                  <td className="py-3 px-2">%</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-2">Flexural Modulus</td>
                  <td className="text-center py-3 px-2">2.5-3.5</td>
                  <td className="py-3 px-2">GPa</td>
                </tr>
                <tr>
                  <td className="py-3 px-2">Biobased Content</td>
                  <td className="text-center py-3 px-2">≥98</td>
                  <td className="py-3 px-2">%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center"
        >
          <p className="text-sm md:text-base text-muted-foreground">
            All specifications are typical values and may vary slightly depending on grade and application. 
            Contact us for detailed technical data sheets and application-specific recommendations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
