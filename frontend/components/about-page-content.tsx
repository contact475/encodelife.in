"use client";

import React from "react";
import { motion } from "framer-motion";

import { EncodeLifeHeader } from "@/components/encode-life-header";
import { CollaboratorsSection } from "@/components/collaborators-section";
import Contact2 from "@/components/contact-section";
import { AboutHeroSection } from "@/components/about-hero-section";
import { AboutMissionSection } from "@/components/about-mission-section";
import { AboutFeaturesSection } from "@/components/about-features-section";
import { TeamSection } from "@/components/team-section";

export default function AboutPageContent() {
  return (
    <>
      <EncodeLifeHeader />
      <AboutHeroSection />
      <AboutMissionSection />
      <AboutFeaturesSection />
      <TeamSection />
      <CollaboratorsSection />
      <Contact2 />
    </>
  );
}
