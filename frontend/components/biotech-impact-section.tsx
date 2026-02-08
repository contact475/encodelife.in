"use client"

import { cn } from "@/lib/utils"
import { CardContent } from "@/components/ui/card";
import { Leaf, Users, Zap } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-primary/10 text-primary px-1 py-0.5 rounded",
        className
      )}
    >
      {children}
    </span>
  );
};

const IMPACT_CARDS = [
  {
    id: 0,
    name: "Dr. Priya Sharma",
    designation: "Head of R&D",
    content: (
      <p>
        <Highlight>Encode Life</Highlight> is revolutionizing India's biotech landscape. Our{" "}
        <Highlight>industrial-scale PLA production</Highlight> creates sustainable alternatives while empowering local communities.
      </p>
    ),
  },
  {
    id: 1,
    name: "Rajesh Kumar",
    designation: "Manufacturing Director",
    content: (
      <p>
        The <Highlight>circular economy approach</Highlight> we've built ensures zero waste. From corn to compost, every step is{" "}
        <Highlight>environmentally conscious and economically viable</Highlight> for India's future.
      </p>
    ),
  },
  {
    id: 2,
    name: "Ananya Desai",
    designation: "Sustainability Lead",
    content: (
      <p>
        Creating <Highlight>500+ skilled jobs</Highlight> while reducing plastic pollution is our mission. The{" "}
        <Highlight>10+ specialized PLA formulations</Highlight> we develop serve diverse industries sustainably.
      </p>
    ),
  },
];

const biotechSolutions = [
  {
    name: "Renewable Feedstock",
    desc: "Supporting Indian farmers through sustainable corn procurement",
    icon: <Leaf className="w-4 h-4" />,
  },
  {
    name: "Job Creation",
    desc: "Creating 500+ skilled employment opportunities for freshers",
    icon: <Users className="w-4 h-4" />,
  },
  {
    name: "Clean Energy",
    desc: "Renewable energy and energy storage integrated facility",
    icon: <Zap className="w-4 h-4" />,
  }
];

export default function BiotechImpactSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 relative">
        {/* Left Block - Impact Stories */}
        <div className="flex flex-col items-start justify-center border border-border p-4 sm:p-6 lg:p-8 bg-card">
          {/* Card Stack */}
          <div className="relative w-full mb-4 sm:mb-6">
            <div className="absolute inset-x-0 -bottom-2 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
            <CardStack items={IMPACT_CARDS} />
          </div>

          {/* Content */}
          <h3 className="text-lg sm:text-xl lg:text-2xl font-normal text-foreground leading-relaxed">
            Real Impact Stories from <span className="text-primary font-semibold">Encode Life</span>{" "}
            <span className="text-muted-foreground text-sm sm:text-base lg:text-lg">
              Discover how our team is transforming India's biotech sector through innovation, sustainability, and community empowerment.
            </span>
          </h3>
        </div>

        {/* Right Block - Solutions */}
        <div className="flex flex-col items-center justify-start border border-border p-4 sm:p-6 lg:p-8 bg-card">
          {/* Content */}
          <h3 className="text-lg sm:text-xl lg:text-2xl font-normal text-foreground mb-4 sm:mb-6 leading-relaxed">
            Comprehensive Biotech Solutions <span className="text-primary font-semibold">Encode Life</span>{" "}
            <span className="text-muted-foreground text-sm sm:text-base lg:text-lg">
              From renewable feedstock to end-of-life solutions, we provide complete circular economy implementation.
            </span>
          </h3>
          <div
            className={cn(
              "group relative mt-auto w-full inline-flex cursor-pointer items-center justify-center rounded-xl border-0 bg-background px-4 sm:px-6 lg:px-8 py-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
            )}
          >
            {/* Solutions List */}
            <CardContent className="p-3 sm:p-4 lg:p-6 space-y-3 sm:space-y-4 bg-background border border-border rounded-2xl sm:rounded-3xl z-10 w-full">
              {biotechSolutions.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-2 sm:p-3 border border-border rounded-xl sm:rounded-2xl hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-2 sm:gap-3 flex-1">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-medium text-foreground truncate">{item.name}</p>
                      <p className="text-xs text-muted-foreground line-clamp-1 sm:line-clamp-2">{item.desc}</p>
                    </div>
                  </div>
                  <div className="rounded-full border border-primary/20 bg-primary/5 p-1.5 sm:p-2 text-xs font-semibold flex-shrink-0 ml-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </div>
        </div>
      </div>
      
      {/* Stats and Testimonial Section */}
      <div className="mt-12 sm:mt-16 lg:mt-20 grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="flex justify-center items-center p-4 sm:p-6">
          <div className="grid grid-cols-3 gap-6 sm:gap-8 lg:gap-6 xl:gap-8 w-full text-center sm:text-left">
            <div className="space-y-2 sm:space-y-3">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground">500+</div>
              <p className="text-sm sm:text-base text-muted-foreground">Jobs Created</p>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground">10+</div>
              <p className="text-sm sm:text-base text-muted-foreground">PLA Formulations</p>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground">✓</div>
              <p className="text-sm sm:text-base text-muted-foreground">Renewable Energy Integration</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <blockquote className="border-l-2 border-primary pl-4 sm:pl-6 lg:pl-8 text-muted-foreground">
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              "Encode Life represents the future of sustainable manufacturing in India. Their commitment to circular economy and job creation is transforming our biotech landscape."
            </p>
            <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
              <cite className="block font-medium text-sm sm:text-base text-foreground">Dr. Arjun Patel, Director</cite>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Research Institute</span>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative mx-auto h-48 w-full md:h-48 md:w-96 my-4">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-card h-48 w-full md:h-48 md:w-96 rounded-3xl p-4 shadow-xl border border-border flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <div className="font-normal text-muted-foreground">
              {card.content}
            </div>
            <div>
              <p className="text-foreground font-medium">
                {card.name}
              </p>
              <p className="text-muted-foreground font-normal">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};