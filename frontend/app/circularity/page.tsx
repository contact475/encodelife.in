import { Metadata } from "next";
import { CircularityPageContent } from "@/components/circularity-page-content";

export const metadata: Metadata = {
  title: "Circular Economy Solutions | Encodelife",
  description:
    "Discover how Encodelife's PLA biopolymers support a circular economy through renewable feedstocks, sustainable manufacturing, and multiple end-of-life pathways. Calculate your environmental impact.",
  keywords: [
    "circular economy",
    "sustainable materials",
    "PLA",
    "bioplastics",
    "renewable feedstocks",
    "composting",
    "recycling",
    "life cycle analysis",
    "environmental benefits",
    "carbon footprint",
    "sustainable manufacturing",
  ],
  openGraph: {
    title: "Circular Economy Solutions | Encodelife",
    description:
      "From renewable feedstocks to multiple end-of-life pathways - discover Encodelife's approach to circularity and calculate your environmental impact.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Circular Economy Concept",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Circular Economy Solutions | Encodelife",
    description:
      "Discover Encodelife's approach to circular economy with renewable PLA biopolymers",
    images: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80",
    ],
  },
};

export default function CircularityPage() {
  return <CircularityPageContent />;
}
