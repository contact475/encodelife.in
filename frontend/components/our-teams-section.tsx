"use client";

import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, Factory, ShieldCheck, Sprout, Users, Cog, ArrowRight } from "lucide-react";
import Link from "next/link";

const teams = [
  {
    icon: FlaskConical,
    title: "Research & Development",
    description:
      "Lead polymer science research, develop specialized PLA blends, and collaborate with research institutions on biotechnology projects.",
    roles: ["Polymer Chemist", "Research Scientist"],
    count: "15+ positions",
  },
  {
    icon: Factory,
    title: "Manufacturing & Operations",
    description:
      "Operate India's first industrial-scale PLA plant. Manage production processes and optimize efficiency with renewable energy.",
    roles: ["Process Engineer", "Production Manager"],
    count: "25+ positions",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Maintain international quality standards through rigorous testing and ensure product consistency across all formulations.",
    roles: ["QA Lead", "Quality Analyst"],
    count: "10+ positions",
  },
  {
    icon: Sprout,
    title: "Sustainability & Circular Economy",
    description:
      "Develop end-of-life solutions including composting and recycling. Drive circular economy initiatives and environmental impact.",
    roles: ["Sustainability Manager", "Environmental Analyst"],
    count: "8+ positions",
  },
  {
    icon: Users,
    title: "Business & Sales",
    description:
      "Drive market expansion and build strategic partnerships. Promote PLA adoption across packaging, textiles, and medical devices.",
    roles: ["Sales Manager", "Business Development"],
    count: "12+ positions",
  },
  {
    icon: Cog,
    title: "Support Functions",
    description:
      "Enable smooth operations through HR, finance, IT, and logistics. Manage talent acquisition and organizational development.",
    roles: ["HR Manager", "Finance Analyst"],
    count: "20+ positions",
  },
];

export function OurTeamsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold italic font-newsreader mb-6">
              Explore Our Teams
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Diverse expertise united by a shared mission to revolutionize sustainable manufacturing
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
          </motion.div>
        </div>

        {/* Teams Grid - 3 columns, max 6 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {teams.map((team, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                {/* Header with subtle background */}
                <div className="h-32 bg-primary/5 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
                  <team.icon className="h-12 w-12 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    {team.title}
                  </h3>
                  
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <span className="text-xs font-semibold text-primary">
                      {team.count}
                    </span>
                  </div>

                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    {team.description}
                  </p>

                  {/* Sample roles */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Sample Roles:
                    </p>
                    {team.roles.map((role, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        • {role}
                      </p>
                    ))}
                  </div>

                  <Link
                    href="/careers/jobs"
                    className="inline-flex items-center text-sm font-semibold text-primary hover:underline group-hover:translate-x-1 transition-transform"
                  >
                    View Open Positions
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
