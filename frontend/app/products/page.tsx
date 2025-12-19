import { Metadata } from "next";
import ProductsPageContent from "@/components/products-page-content";
import { EncodeLifeHeader } from "@/components/encode-life-header";

export const metadata: Metadata = {
  title: "PLA Products - Encode Life | Sustainable Bioplastic Solutions",
  description: "Explore our range of PLA bioplastic products for packaging, textiles, medical devices, and more. Sustainable, compostable, and high-performance solutions for diverse industries.",
  keywords: ["PLA products", "bioplastic packaging", "sustainable products", "compostable materials", "PLA applications", "eco-friendly products"],
};

export default function ProductsPage() {
  return (
    <>
      <EncodeLifeHeader />
      <ProductsPageContent />
    </>
  );
}
