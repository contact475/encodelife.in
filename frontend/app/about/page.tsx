import { Metadata } from "next";
import AboutPageContent from "@/components/about-page-content";
import { EncodeLifeHeader } from "@/components/encode-life-header";

export const metadata: Metadata = {
  title: "About Us - Encode Life | Creating 500+ Biotech Jobs | Industry Collaboration",
  description: "Empowering India's biotechnology sector with 500+ jobs for freshers. Partnering with IIT Guwahati & INST Mohali to develop special PLA blends and end-of-life solutions.",
};

export default function AboutPage() {
  return (
    <>
      <EncodeLifeHeader />
      <AboutPageContent />
    </>
  );
}
