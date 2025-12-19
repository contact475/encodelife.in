"use client";

import { EncodeLifeHeader } from "@/components/encode-life-header";
import { PLAHeroSection } from "@/components/pla-hero-section";
import { PLAIntroSection } from "@/components/pla-intro-section";
import { PLACircularEconomy } from "@/components/pla-circular-economy";
import { PLACategories } from "@/components/pla-categories";
import { PLATechnicalSpecs } from "@/components/pla-technical-specs";
// import { PLAPortfolio } from "@/components/pla-portfolio"; // DRAFT: Portfolio section - will be added later
import { PLAManufacturing } from "@/components/pla-manufacturing";
import { PLAAdvantages } from "@/components/pla-advantages";
import Contact2 from "@/components/contact-section";

export default function PLAPageContent() {
  return (
    <div className="min-h-screen bg-background">
      <EncodeLifeHeader />
      <PLAHeroSection />
      <PLAIntroSection />
      <PLACircularEconomy />
      <PLACategories />
      <PLATechnicalSpecs />
      {/* DRAFT: Encode Life Portfolio Section - Commented out for now, will be added later */}
      {/* <PLAPortfolio /> */}
      <PLAManufacturing />
      <PLAAdvantages />
      <Contact2 />
    </div>
  );
}
