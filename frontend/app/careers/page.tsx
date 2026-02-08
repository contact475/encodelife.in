import { Metadata } from "next";
import CareersPageContent from "@/components/careers-page-content";

export const metadata: Metadata = {
  title: "Careers - Join the Biotech Revolution | Encode Life",
  description:
    "Join Encode Life and be part of India's biotech revolution. Explore career opportunities in sustainable bioplastics, research & development, manufacturing, and more.",
  keywords: [
    "careers",
    "jobs",
    "biotech careers",
    "sustainability jobs",
    "PLA manufacturing",
    "research and development",
    "India biotech jobs",
  ],
};

export default function CareersPage() {
  return <CareersPageContent />;
}
