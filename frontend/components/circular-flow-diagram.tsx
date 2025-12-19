"use client";

import { motion } from "framer-motion";
import { Sprout, Wheat, Factory, Package, ArrowDownUp, Leaf, Zap, RefreshCw } from "lucide-react";

const flowStages = [
  {
    id: 1,
    icon: Sprout,
    title: "Renewable Resources",
    description: "Plant-based carbon capture",
    position: "top",
  },
  {
    id: 2,
    icon: Wheat,
    title: "Agricultural Feedstock",
    description: "Corn, sugarcane, cassava",
    position: "right-top",
  },
  {
    id: 3,
    icon: Factory,
    title: "PLA Manufacturing",
    description: "Bioprocessing facility",
    position: "right",
  },
  {
    id: 4,
    icon: Package,
    title: "PLA Products",
    description: "Sustainable applications",
    position: "right-bottom",
  },
  {
    id: 5,
    icon: ArrowDownUp,
    title: "End-of-Life Solutions",
    description: "Multiple pathways",
    position: "bottom",
  },
  {
    id: 6,
    icon: Leaf,
    title: "Composting & Recycling",
    description: "Return to earth",
    position: "left-bottom",
  },
  {
    id: 7,
    icon: Zap,
    title: "Energy Recovery",
    description: "Biogas generation",
    position: "left",
  },
  {
    id: 8,
    icon: RefreshCw,
    title: "CO₂ Capture",
    description: "Closing the loop",
    position: "left-top",
  },
];

export function CircularFlowDiagram() {
  return (
    <div className="mb-16 md:mb-24 flex items-center justify-center py-12 md:py-16">
      <div className="relative w-full max-w-4xl aspect-square">
        {/* Center Circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 m-auto w-48 h-48 md:w-64 md:h-64 rounded-full bg-card border-2 border-green-500 flex flex-col items-center justify-center z-10"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-newsreader italic font-semibold text-center">
            PLA
          </h3>
          <p className="text-sm md:text-base text-muted-foreground text-center mt-2">
            Circular Economy
          </p>
        </motion.div>

        {/* Circular Path */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
          <motion.circle
            cx="200"
            cy="200"
            r="140"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="8 8"
            className="text-green-500/30"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>

        {/* Stage Nodes */}
        {flowStages.map((stage, index) => {
          const Icon = stage.icon;
          const angle = (index * 360) / flowStages.length - 90;
          const radius = 180;
          const x = 50 + Math.cos((angle * Math.PI) / 180) * radius / 4;
          const y = 50 + Math.sin((angle * Math.PI) / 180) * radius / 4;

          return (
            <motion.div
              key={stage.id}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              className="absolute group cursor-pointer"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Node Circle */}
              <div className="relative">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-card border-2 border-green-500 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:border-green-400">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-green-600 dark:text-green-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>

                {/* Label Card */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-32 md:w-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-card border border-border rounded-xl p-3 shadow-lg">
                    <p className="text-xs md:text-sm font-semibold text-center mb-1">
                      {stage.title}
                    </p>
                    <p className="text-xs text-muted-foreground text-center">
                      {stage.description}
                    </p>
                  </div>
                </div>

                {/* Connection Line */}
                {index < flowStages.length && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
                    className="absolute top-1/2 left-full w-8 md:w-12 h-0.5 bg-green-500/30 -translate-y-1/2"
                    style={{
                      transformOrigin: "left center",
                      rotate: `${angle + 45}deg`,
                    }}
                  />
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Rotating Arrows */}
        {[0, 90, 180, 270].map((rotation, index) => (
          <motion.div
            key={rotation}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 + index * 0.1 }}
            className="absolute inset-0 m-auto w-72 h-72 md:w-96 md:h-96"
            style={{ rotate: `${rotation}deg` }}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M 50 10 Q 70 20 80 40"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-green-500"
                markerEnd="url(#arrowhead)"
              />
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="10"
                  refX="5"
                  refY="3"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 6 3, 0 6"
                    fill="currentColor"
                    className="text-green-500"
                  />
                </marker>
              </defs>
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
