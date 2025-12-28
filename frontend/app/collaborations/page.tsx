import { Metadata } from "next";
import CollaborationsPageContent from "@/components/collaborations-page-content";
import { EncodeLifeHeader } from "@/components/encode-life-header";

export const metadata: Metadata = {
  title: "Collaborations - Encode Life | Industry Partnerships & Research",
  description: "Explore our strategic partnerships with leading research institutions, industry collaborators, and supporters driving innovation in sustainable bioplastics and biotechnology.",
  keywords: ["collaborations", "partnerships", "research institutions", "industry collaboration", "biotech partnerships"],
};

export default function CollaborationsPage() {
  return (
    <>
      <EncodeLifeHeader />
      <CollaborationsPageContent />
    </>
  );
}
