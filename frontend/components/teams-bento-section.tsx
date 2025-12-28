"use client";

import { FlaskConical, Factory, ShieldCheck, Sprout, Users, Cog, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";

const teams = [
  {
    icon: FlaskConical,
    title: "Research & Development",
    description: "Lead polymer science research, develop specialized PLA blends, and collaborate with research institutions on biotechnology projects.",
    roles: ["Polymer Chemist", "Research Scientist"],
    count: "15+ positions",
    span: "lg:col-span-2",
  },
  {
    icon: Factory,
    title: "Manufacturing & Operations",
    description: "Operate India's first industrial-scale PLA plant. Manage production processes and optimize efficiency with renewable energy.",
    roles: ["Process Engineer", "Production Manager"],
    count: "25+ positions",
    span: "",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Maintain international quality standards through rigorous testing and ensure product consistency across all formulations.",
    roles: ["QA Lead", "Quality Analyst"],
    count: "10+ positions",
    span: "",
  },
  {
    icon: Sprout,
    title: "Sustainability & Circular Economy",
    description: "Develop end-of-life solutions including composting and recycling. Drive circular economy initiatives and environmental impact.",
    roles: ["Sustainability Manager", "Environmental Analyst"],
    count: "8+ positions",
    span: "lg:col-span-2",
  },
  {
    icon: Users,
    title: "Business & Sales",
    description: "Drive market expansion and build strategic partnerships. Promote PLA adoption across packaging, textiles, and medical devices.",
    roles: ["Sales Manager", "Business Development", "Market Analyst"],
    count: "12+ positions",
    span: "lg:col-span-2",
  },
  {
    icon: Cog,
    title: "Support Functions",
    description: "Enable smooth operations through HR, finance, IT, and logistics. Manage talent acquisition and organizational development.",
    roles: ["HR Manager", "Finance Analyst", "IT Specialist"],
    count: "20+ positions",
    span: "",
  },
];

export function TeamsBentoSection() {
  return (
    <section className="w-full py-16 md:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4 flex-col items-center text-center"
          >
            <div>
              <Badge variant="outline" className="border-primary/20 text-primary">
                Careers
              </Badge>
            </div>
            <div className="flex gap-2 flex-col items-center">
              <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tight font-semibold italic font-newsreader">
                Explore Our Teams
              </h2>
              <p className="text-base md:text-lg max-w-3xl leading-relaxed text-muted-foreground">
                Diverse expertise united by a shared mission to revolutionize sustainable manufacturing
              </p>
            </div>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teams.map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-card border border-border rounded-2xl p-6 md:p-8 aspect-square lg:aspect-auto flex justify-between flex-col group hover:border-primary/50 hover:shadow-xl transition-all duration-300 ${team.span}`}
              >
                {/* Icon */}
                <div className="flex items-start justify-between">
                  <team.icon className="w-10 h-10 md:w-12 md:h-12 text-primary stroke-1 group-hover:scale-110 transition-transform duration-300" />
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                    {team.count}
                  </Badge>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                      {team.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {team.description}
                    </p>
                  </div>

                  {/* Sample Roles */}
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Sample Roles:
                    </p>
                    {team.roles.map((role, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        • {role}
                      </p>
                    ))}
                  </div>

                  {/* Link */}
                  <Link
                    href="/careers/jobs"
                    className="inline-flex items-center text-sm font-semibold text-primary hover:underline group-hover:translate-x-1 transition-transform w-fit"
                  >
                    View Open Positions
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
