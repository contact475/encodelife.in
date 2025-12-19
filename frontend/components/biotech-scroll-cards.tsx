"use client";

import { CardsParallax, type iCardItem } from "@/components/ui/scroll-cards";

const cardItems: iCardItem[] = [
  {
    title: "Job Creation",
    description: "Creating 500+ skilled jobs for freshers in India's first industrial-scale PLA plant",
    tag: "employment",
    src: "/pla-journey-2.webp",
    link: "#",
    color: "#86efac",
    textColor: "#ffffff",
  },
  {
    title: "Innovation",
    description: "Developing 10+ specialized PLA formulations through industry-academia collaboration",
    src: "/pla-journey-3.webp",
    tag: "research",
    link: "#",
    color: "#6ee7b7",
    textColor: "#ffffff",
  },
  {
    title: "Sustainability",
    description: "Complete circular economy through composting, recycling, and biogas conversion",
    src: "/pla-journey-4.webp",
    tag: "circular-economy",
    link: "#",
    color: "#86efac",
    textColor: "#ffffff",
  },
  {
    title: "Empowering India",
    description: "Supporting farmers through corn procurement and building sustainable biotech future",
    src: "/pla-journey-1.webp",
    tag: "agriculture",
    link: "#",
    color: "#6ee7b7",
    textColor: "#ffffff",
  },
];

export function BiotechScrollCards() {
  return <CardsParallax items={cardItems} />;
}
