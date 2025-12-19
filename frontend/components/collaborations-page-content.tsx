"use client";

import React from "react";

import { EncodeLifeHeader } from "@/components/encode-life-header";
import { CollaborationsHeroSection } from "@/components/collaborations-hero-section";
import { CollaboratorsGridSection } from "@/components/collaborators-grid-section";
import { SupportersSection } from "@/components/supporters-section";
import Contact2 from "@/components/contact-section";

export default function CollaborationsPageContent() {
  return (
    <>
      <EncodeLifeHeader />
      <CollaborationsHeroSection />
      <CollaboratorsGridSection />
      <SupportersSection />
      <Contact2 />
    </>
  );
}
