"use client";

import { motion } from "framer-motion";

const products = [
  {
    grade: "EL-30U",
    description: "High-performance resin with high melting point, medium flow, and recrystallization capabilities",
    melting: "175°C",
    flow: "Medium",
    strength: "High",
    applications: "Temperature-resistant injection molding, Non-woven applications, High-heat products",
  },
  {
    grade: "EL-30M",
    description: "Medium melting point, medium flow, suitable for opaque products",
    melting: "165°C",
    flow: "Medium",
    strength: "High",
    applications: "High temperature-resistant molding, Thin-wall injection molding, Opaque products",
  },
  {
    grade: "EL-10U",
    description: "Crystalline with high melting point, excellent for textiles and fibers",
    melting: "175°C",
    flow: "Medium",
    strength: "High",
    applications: "Heat-resistant extrusion, Fiber spinning, Filament and staple fiber textiles",
  },
  {
    grade: "EL-10M",
    description: "Medium melting point, medium flow, versatile applications",
    melting: "165°C",
    flow: "Medium",
    strength: "Medium",
    applications: "Injection molding, Staple fiber, Spun-bond non-woven",
  },
  {
    grade: "EL-4U",
    description: "Crystalline resin, high melting point, low flow for specialized applications",
    melting: "175°C",
    flow: "Low",
    strength: "High",
    applications: "Heat-resistant straws, Sheets, Extrusion molding",
  },
  {
    grade: "EL-4M",
    description: "Moderate melting point, low flow, crystallizable after production",
    melting: "165°C",
    flow: "Low",
    strength: "Medium",
    applications: "Straws, Sheets, 3D printing",
  },
  {
    grade: "EL-4K",
    description: "Low melting point, low flow, ideal for high transparency products",
    melting: "155°C",
    flow: "Low",
    strength: "Medium",
    applications: "Blown film, Coating, 3D printing, High transparency processing",
  },
];

export function PLAPortfolio() {
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
              Encode Life Portfolio
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
              Comprehensive range of PLA grades for diverse applications
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </motion.div>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left py-4 px-4 md:px-6 font-semibold text-sm md:text-base">Grade</th>
                  <th className="text-left py-4 px-4 md:px-6 font-semibold text-sm md:text-base hidden lg:table-cell">Description</th>
                  <th className="text-center py-4 px-4 md:px-6 font-semibold text-sm md:text-base">Melting</th>
                  <th className="text-center py-4 px-4 md:px-6 font-semibold text-sm md:text-base">Flow</th>
                  <th className="text-center py-4 px-4 md:px-6 font-semibold text-sm md:text-base hidden md:table-cell">Strength</th>
                  <th className="text-left py-4 px-4 md:px-6 font-semibold text-sm md:text-base hidden xl:table-cell">Applications</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                  >
                    <td className="py-4 px-4 md:px-6">
                      <span className="font-semibold text-foreground text-sm md:text-base">{product.grade}</span>
                    </td>
                    <td className="py-4 px-4 md:px-6 text-sm text-muted-foreground hidden lg:table-cell max-w-xs">
                      {product.description}
                    </td>
                    <td className="py-4 px-4 md:px-6 text-center text-sm md:text-base">
                      <span className="inline-block px-2 py-1 bg-muted rounded text-foreground">
                        {product.melting}
                      </span>
                    </td>
                    <td className="py-4 px-4 md:px-6 text-center text-sm md:text-base">
                      <span className="inline-block px-2 py-1 bg-muted rounded text-foreground">
                        {product.flow}
                      </span>
                    </td>
                    <td className="py-4 px-4 md:px-6 text-center text-sm md:text-base hidden md:table-cell">
                      <span className="inline-block px-2 py-1 bg-muted rounded text-foreground">
                        {product.strength}
                      </span>
                    </td>
                    <td className="py-4 px-4 md:px-6 text-sm text-muted-foreground hidden xl:table-cell max-w-md">
                      {product.applications}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile-friendly cards for hidden columns */}
          <div className="lg:hidden">
            {products.map((product, index) => (
              <motion.div
                key={`mobile-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border-t border-border p-4 md:p-6"
              >
                <div className="font-semibold text-foreground mb-2">{product.grade}</div>
                <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                <div className="grid grid-cols-3 gap-2 mb-3 md:hidden">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">Strength</div>
                    <div className="text-sm font-medium">{product.strength}</div>
                  </div>
                </div>
                <div className="xl:hidden">
                  <div className="text-xs text-muted-foreground mb-1">Applications</div>
                  <p className="text-sm text-foreground">{product.applications}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Need help choosing the right grade?
            </h3>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our technical team can help you select the perfect PLA grade for your specific application requirements.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Contact Our Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
