import { cn } from "@/lib/utils";
import {
  IconLeaf,
  IconRecycle,
  IconPlant,
  IconCertificate,
  IconTrendingDown,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  return (
    <section id="about" className="py-20 lg:py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold italic font-newsreader mb-2">About Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Main content with image */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image - Shows first on mobile, second on desktop */}
          <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl md:order-2">
            <img
              src="/about-biotechnology.webp"
              alt="Vibrant biotechnology landscape with golden cornfields, modern eco-friendly biopolymer factory, solar panels, wind turbines, and circular economy elements showcasing sustainable innovation"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text content - Shows second on mobile, first on desktop */}
          <div className="space-y-4 md:space-y-6 md:order-1">
            <p className="text-lg md:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed">
              Encode Life is a new-age biotechnology company pioneering sustainable materials and processes 
              to replace traditional fossil fuel-derived products for a greener future.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We are establishing India&apos;s first industrial-scale biopolymer plant, transforming renewable corn 
              into sustainable PLA bioplastics. Our bio-based materials naturally absorb CO₂ during growth and are 
              powered entirely by 100% renewable energy.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Through innovation in biomaterials, we produce compostable and recyclable plastics that support 
              a true circular economy—achieving carbon neutrality while setting new global benchmarks for 
              environmental responsibility.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 md:gap-3 pt-2 md:pt-4">
              <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-border hover:border-green-500/50 transition-colors">
                <IconLeaf className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground" />
                <span className="text-xs md:text-sm font-medium">Sustainability</span>
              </div>
              <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-border hover:border-green-500/50 transition-colors">
                <IconRecycle className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground" />
                <span className="text-xs md:text-sm font-medium">Circular Economy</span>
              </div>
              <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-border hover:border-green-500/50 transition-colors">
                <IconTrendingDown className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground" />
                <span className="text-xs md:text-sm font-medium">Carbon Neutrality</span>
              </div>
              <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-border hover:border-green-500/50 transition-colors">
                <IconPlant className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground" />
                <span className="text-xs md:text-sm font-medium">Biomaterials</span>
              </div>
              <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-border hover:border-green-500/50 transition-colors">
                <IconCertificate className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground" />
                <span className="text-xs md:text-sm font-medium">Innovation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key stats below */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16">
          <div className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl border border-border hover:border-green-500/50 transition-colors">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1 md:mb-2">0.5kg</div>
            <div className="text-xs md:text-sm text-muted-foreground">CO₂ per kg PLA</div>
          </div>
          <div className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl border border-border hover:border-green-500/50 transition-colors">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1 md:mb-2">100%</div>
            <div className="text-xs md:text-sm text-muted-foreground">Renewable Energy</div>
          </div>
          <div className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl border border-border hover:border-green-500/50 transition-colors">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1 md:mb-2">1.75m²</div>
            <div className="text-xs md:text-sm text-muted-foreground">Land per kg</div>
          </div>
          <div className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl border border-border hover:border-green-500/50 transition-colors">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1 md:mb-2">80K</div>
            <div className="text-xs md:text-sm text-muted-foreground">t/a Capacity</div>
          </div>
        </div>
      </div>
    </section>
  );
}


