"use client";

import { EncodeLifeHeader } from "@/components/encode-life-header";
import { CircularityHeroSection } from "@/components/circularity-hero-section";
import { CircularEconomySection } from "@/components/circular-economy-section";
import { SustainableFeedstocksSection } from "@/components/sustainable-feedstocks-section";
import { EcoProfileSection } from "@/components/eco-profile-section";
import { EndOfLifeSection } from "@/components/end-of-life-section";
import { EnvironmentalBenefitsSection } from "@/components/environmental-benefits-section";
import Contact2 from "@/components/contact-section";
import Footer from "@/components/footer";

export function CircularityPageContent() {
  return (
    <div className="min-h-screen bg-background">
      <EncodeLifeHeader />
      <CircularityHeroSection />
      <CircularEconomySection />
      <SustainableFeedstocksSection />
      <EcoProfileSection />
      <EndOfLifeSection />
      <EnvironmentalBenefitsSection />
      <Contact2 />
      <Footer />
    </div>
  );
}
