import { HeroSection } from "@/components/hero-section-5";
import { FeaturesSectionWithHoverEffects } from "@/components/feature-section-with-hover-effects";
import { FeatureSteps } from "@/components/feature-section";
import { ZoomParallax } from "@/components/zoom-parallax";
import { Feature } from "@/components/ui/feature-with-image-comparison";
import { Blog7 } from "@/components/blog7";
import { CollaboratorsSection } from "@/components/collaborators-section";
import Contact2 from "@/components/contact-section";
import { CertificatePopup } from "@/components/certificate-popup";

export default function Home() {
  const features = [
    {
      step: "Step 1",
      title: "Carbon Absorption",
      content: "PLA production starts with corn, which naturally absorbs CO₂ from the atmosphere during growth.",
      image: "/pla-journey-1.webp",
    },
    {
      step: "Step 2",
      title: "Sustainable Harvesting",
      content: "Only 1.75 m² of land needed per kg of PLA, ensuring efficient and sustainable land utilization.",
      image: "/pla-journey-2.webp",
    },
    {
      step: "Step 3",
      title: "PLA Manufacturing",
      content: "State-of-the-art production powered by 100% renewable energy in India's first industrial-scale plant.",
      image: "/pla-journey-3.webp",
    },
    {
      step: "Step 4",
      title: "Circular Economy",
      content: "PLA products decompose naturally or can be recycled, completing the earth-to-earth cycle with minimal emissions.",
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
      title: "The Future of Sustainable Packaging",
      summary:
        "Discover how PLA bioplastics are revolutionizing the packaging industry with eco-friendly alternatives that reduce carbon footprint and plastic waste.",
      label: "Sustainability",
      author: "Dr. Priya Sharma",
      published: "15 Dec 2024",
      url: "/blog/future-of-sustainable-packaging",
      image: "/image5.webp",
    },
    {
      id: "post-2",
      title: "From Corn to Bioplastic: The PLA Journey",
      summary:
        "Explore the fascinating process of transforming corn into high-quality PLA bioplastics and how it's creating a circular economy.",
      label: "Innovation",
      author: "Rajesh Kumar",
      published: "10 Dec 2024",
      url: "/blog/corn-to-bioplastic-journey",
      image: "/image3.webp",
    },
    {
      id: "post-3",
      title: "Why India is Leading the Bioplastics Revolution",
      summary:
        "Learn about India's first industrial-scale PLA plant and how it's positioning the country as a global leader in sustainable materials.",
      label: "Industry",
      author: "Ananya Desai",
      published: "5 Dec 2024",
      url: "/blog/india-leading-bioplastics-revolution",
      image: "/image2.webp",
    },
  ];

  return (
    <>
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
      <CollaboratorsSection />
      <Contact2 />
      
      {/* Certificate Popup - Shows after 5s delay OR 800px scroll */}
      <CertificatePopup delay={5000} scrollThreshold={800} />
    </>
  );
}
