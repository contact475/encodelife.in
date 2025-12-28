import { Metadata } from "next";
import PLAPageContent from "@/components/pla-page-content";
import { EncodeLifeHeader } from "@/components/encode-life-header";

export const metadata: Metadata = {
  title: "PLA Technology - Special Blends | End-of-Life Solutions",
  description: "Discover our 10+ special PLA blends developed through industry-academia collaboration. Comprehensive end-of-life solutions including composting, recycling, and biogas conversion.",
  keywords: ["PLA", "special PLA blends", "end-of-life solutions", "biotechnology jobs", "industry collaboration", "composting", "recycling", "biogas", "circular economy"],
};

export default function PLAPage() {
  return (
    <>
      <EncodeLifeHeader />
      <PLAPageContent />
    </>
  );
}
