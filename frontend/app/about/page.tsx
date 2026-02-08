import { Metadata } from "next";
import AboutPageContent from "@/components/about-page-content";
import { EncodeLifeHeader } from "@/components/encode-life-header";

export const metadata: Metadata = {
  title: "About Us - Encode Life | Industry Collaboration",
  description: "Empowering India's biotechnology sector. Developing special PLA blends and end-of-life solutions through strategic partnerships.",
};

export default function AboutPage() {
  return (
    <>
      <EncodeLifeHeader />
      <AboutPageContent />
    </>
  );
}
