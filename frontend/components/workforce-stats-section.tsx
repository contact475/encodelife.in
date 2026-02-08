"use client";

import { Users, Briefcase, GraduationCap, TrendingUp, Award, Building2, ArrowRight, Target, Zap } from "lucide-react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
  description: string;
  delay: number;
}

function StatCounter({ icon, value, label, suffix, description, delay }: StatCounterProps) {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10,
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value);
      setHasAnimated(true);
    }
  }, [isInView, value, springValue, hasAnimated]);

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  return (
    <div
      className="bg-card/50 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-card transition-colors duration-300 border border-border hover:-translate-y-1"
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary/20 transition-colors duration-300"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        {icon}
      </motion.div>
      <div ref={countRef} className="text-3xl font-bold text-foreground flex items-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </div>
      <p className="text-foreground font-medium text-sm mt-1">{label}</p>
      <p className="text-muted-foreground text-xs mt-2">{description}</p>
      <div className="w-10 h-0.5 bg-primary mt-3 group-hover:w-16 transition-all duration-300" />
    </div>
  );
}

export function WorkforceStatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  const stats = [
    { 
      icon: <Users className="w-6 h-6" />, 
      value: 500, 
      label: "Direct Jobs Created", 
      suffix: "+",
      description: "For Fresh Graduates"
    },
    { 
      icon: <Building2 className="w-6 h-6" />, 
      value: 5, 
      label: "Research Partnerships", 
      suffix: "+",
      description: "Academia-Industry Bridge"
    },
    { 
      icon: <GraduationCap className="w-6 h-6" />, 
      value: 10, 
      label: "Specialized Teams", 
      suffix: "+",
      description: "Career Growth Paths"
    },
    { 
      icon: <Award className="w-6 h-6" />, 
      value: 15, 
      label: "Training Programs", 
      suffix: "+",
      description: "Continuous Learning"
    },
    { 
      icon: <TrendingUp className="w-6 h-6" />, 
      value: 100, 
      label: "Growth Rate", 
      suffix: "%",
      description: "Expanding Nationwide"
    },
    { 
      icon: <Briefcase className="w-6 h-6" />, 
      value: 23, 
      label: "Open Positions", 
      suffix: "",
      description: "Join Us Today"
    },
  ];

  const trainingPrograms = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Technical Excellence Program",
      description: "Advanced training in PLA manufacturing, biopolymer science, and industrial-scale production techniques."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Leadership Development",
      description: "Comprehensive management training to build future leaders in sustainable manufacturing."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation Workshops",
      description: "Regular workshops on cutting-edge biotech innovations and sustainable manufacturing practices."
    },
  ];



  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-24 px-4 bg-gradient-to-b from-background to-muted/30 text-foreground overflow-hidden relative"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
          <span className="text-primary font-medium mb-2 flex items-center gap-2 text-sm">
            <Briefcase className="w-4 h-4" />
            WORKFORCE & CAREERS
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 font-newsreader italic">
            Building India&apos;s Biotech Workforce
          </h2>
          <div className="w-24 h-1 bg-primary mb-6" />
          <p className="text-muted-foreground max-w-3xl text-base md:text-lg">
            Creating opportunities, fostering talent, and driving innovation in sustainable bioplastics
          </p>
        </div>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-20"
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              description={stat.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Training Programs */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8">Employee Development Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainingPrograms.map((program, idx) => (
              <motion.div
                key={idx}
                className="bg-card p-6 rounded-xl border border-border group hover:border-primary transition-colors"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary/20 transition-colors">
                  {program.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{program.title}</h4>
                <p className="text-muted-foreground text-sm">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Join India&apos;s First Industrial-Scale PLA Plant
            </h3>
            <p className="text-primary-foreground/90 text-base md:text-lg">
              Be part of a team that&apos;s revolutionizing sustainable manufacturing, creating meaningful employment, and building a circular economy for India&apos;s future.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="secondary"
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 flex items-center gap-2"
            >
              Explore Careers <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
