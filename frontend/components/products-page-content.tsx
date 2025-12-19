"use client";

import React from "react";

import { EncodeLifeHeader } from "@/components/encode-life-header";
import { ProductsHeroSection } from "@/components/products-hero-section";
import { PLAPortfolioSection } from "@/components/pla-portfolio-section";
import { ProductApplicationsComprehensive } from "@/components/product-applications-comprehensive";
import Contact2 from "@/components/contact-section";

export default function ProductsPageContent() {
  return (
    <>
      <EncodeLifeHeader />
      <ProductsHeroSection />
      <PLAPortfolioSection />
      <ProductApplicationsComprehensive />
      <Contact2 />
    </>
  );
}
