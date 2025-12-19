"use client";

import React from "react";

import { EncodeLifeHeader } from "@/components/encode-life-header";
import { CareersHeroSection } from "@/components/careers-hero-section";
import { WorkforceStatsSection } from "@/components/workforce-stats-section";
import { WhyJoinUsSection } from "@/components/why-join-us-section";
import { TeamsBentoSection } from "@/components/teams-bento-section";
import { LifeAtEncodeSection } from "@/components/life-at-encode-section";
import { CareersTestimonialsSection } from "@/components/careers-testimonials-section";
import { InternshipPreviewSection } from "@/components/internship-preview-section";
import { OpenPositionsPreview } from "@/components/open-positions-preview";
import Contact2 from "@/components/contact-section";

export default function CareersPageContent() {
  return (
    <>
      <EncodeLifeHeader />
      <CareersHeroSection />
      <WorkforceStatsSection />
      <WhyJoinUsSection />
      <TeamsBentoSection />
      <LifeAtEncodeSection />
      <CareersTestimonialsSection />
      <InternshipPreviewSection />
      <OpenPositionsPreview />
      <Contact2 />
    </>
  );
}
