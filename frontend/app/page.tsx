import { HeroSection } from "@/components/hero-section-5";
import { EncodeLifeHeader } from "@/components/encode-life-header";
import { FeaturesSectionWithHoverEffects } from "@/components/feature-section-with-hover-effects";
import { FeatureSteps } from "@/components/feature-section";
import { ZoomParallax } from "@/components/zoom-parallax";
import { Feature } from "@/components/ui/feature-with-image-comparison";
import { Blog7 } from "@/components/blog7";
import { CollaboratorsSection } from "@/components/collaborators-section";
import Contact2 from "@/components/contact-section";
import { CertificatePopup } from "@/components/certificate-popup";

import { CompanyTestimonialsSection } from "@/components/company-testimonials-section";

export default function Home() {
  const features = [
    {
      step: "Step 1",
      title: "Renewable Feedstock",
      content: "Supporting Indian farmers through corn procurement, creating rural employment and sustainable agriculture.",
      image: "/pla-journey-1.webp",
    },
    {
      step: "Step 2",
      title: "Job Creation & Manufacturing",
      content: "Creating 500+ skilled jobs for freshers in India's first corn-based biopolymer plant, integrated with renewable energy and energy storage systems.",
      image: "/pla-journey-2.webp",
    },
    {
      step: "Step 3",
      title: "Special PLA Blends",
      content: "Developing 10+ specialized formulations through industry-academia collaboration for diverse applications.",
      image: "/pla-journey-3.webp",
    },
    {
      step: "Step 4",
      title: "End-of-Life Solutions",
      content: "Comprehensive recycling, composting, and biogas conversion ensuring zero waste and complete circularity.",
      image: "/pla-journey-4.webp",
    },
  ];

  const parallaxImages = [
    {
      src: "/image7.webp",
      alt: "Corn Seed - It starts with a seed"
    },
    {
      src: "/image2.webp",
      alt: "Growing Corn Field - Nature's carbon capture"
    },
    {
      src: "/image1.webp",
      alt: "Harvesting - Sustainable farming"
    },
    {
      src: "/image3.webp",
      alt: "Sugar Extraction - Raw material processing"
    },
    {
      src: "/image5.webp",
      alt: "PLA Manufacturing - Bio-transformation"
    },
    {
      src: "/image6.webp",
      alt: "PLA Products - Sustainable solutions"
    },
    {
      src: "/image4.webp",
      alt: "Circular Economy - Back to earth"
    },
  ];

  const blogPosts = [
    {
      id: "post-1",
      title: "Creating 500+ Jobs in India's Biotech Sector",
      summary:
        "How Encode Life is empowering freshers with skilled employment opportunities in biotechnology, chemical engineering, and sustainable manufacturing.",
      label: "Job Creation",
      author: "Dr. Priya Sharma",
      published: "15 Dec 2024",
      url: "/blog/creating-jobs-biotech-sector",
      image: "/image5.webp",
    },
    {
      id: "post-2",
      title: "Special PLA Blends: Innovation Through Collaboration",
      summary:
        "Discover how our partnerships with leading research institutions are developing 10+ specialized PLA formulations for diverse industries.",
      label: "Innovation",
      author: "Rajesh Kumar",
      published: "10 Dec 2024",
      url: "/blog/special-pla-blends-innovation",
      image: "/image3.webp",
    },
    {
      id: "post-3",
      title: "Complete End-of-Life Solutions for PLA",
      summary:
        "Learn about our comprehensive approach to circular economy through composting, recycling, and biogas conversion—ensuring zero waste.",
      label: "Sustainability",
      author: "Ananya Desai",
      published: "5 Dec 2024",
      url: "/blog/end-of-life-solutions-pla",
      image: "/image2.webp",
    },
  ];

  return (
    <>
      <EncodeLifeHeader />
      <HeroSection />
      <FeaturesSectionWithHoverEffects />
      <FeatureSteps
        features={features}
        title="The PLA Journey"
      />
      <section className="py-12 px-4 md:py-20 md:px-6 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto text-center space-y-3 md:space-y-4 mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold italic font-newsreader">From Seed to Sustainability</h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Follow the journey from a single seed to a sustainable future, completing nature&apos;s perfect cycle
          </p>
        </div>
      </section>
      <ZoomParallax images={parallaxImages} />

      <Feature />
      <Blog7
        tagline="Latest Updates"
        heading="News & Insights"
        description="Discover the latest in sustainable bioplastics and eco-innovation."
        buttonText="View all articles"
        buttonUrl="/blog"
        posts={blogPosts}
      />
      <CompanyTestimonialsSection />
      <CollaboratorsSection />
      <Contact2 />
      
      {/* Certificate Popup - Shows after 5s delay OR 800px scroll */}
      <CertificatePopup delay={5000} scrollThreshold={800} />
    </>
  );
}
