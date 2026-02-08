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
              Encode Life is empowering India&apos;s biotechnology sector through sustainable innovation, 
              creating direct employment opportunities for freshers, and fostering industry-academia collaboration.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We are establishing India&apos;s first industrial-scale PLA biopolymer plant, generating hundreds 
              of skilled jobs while transforming renewable corn into sustainable bioplastics. Our focus on 
              end-of-life solutions and special PLA blends positions us at the forefront of circular economy innovation.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Through strategic partnerships with leading research institutions,
              we&apos;re bridging the gap between academia and industry, creating opportunities for fresh talent
              while developing cutting-edge biomaterials for a sustainable future.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 md:gap-3 pt-2 md:pt-4">
              <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-border hover:border-green-500/50 transition-colors">
                <IconLeaf className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground" />
                <span className="text-xs md:text-sm font-medium">Job Creation</span>
              </div>
              <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-border hover:border-green-500/50 transition-colors">
                <IconRecycle className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground" />
                <span className="text-xs md:text-sm font-medium">Industry Collaboration</span>
              </div>
              <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-border hover:border-green-500/50 transition-colors">
                <IconTrendingDown className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground" />
                <span className="text-xs md:text-sm font-medium">End-of-Life Solutions</span>
              </div>
              <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-border hover:border-green-500/50 transition-colors">
                <IconPlant className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground" />
                <span className="text-xs md:text-sm font-medium">Special PLA Blends</span>
              </div>
              <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-border hover:border-green-500/50 transition-colors">
                <IconCertificate className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground" />
                <span className="text-xs md:text-sm font-medium">Biotech Innovation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key stats below */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16">
          <div className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl border border-border hover:border-green-500/50 transition-colors">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1 md:mb-2">4+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Bioplastics Recovered</div>
          </div>
          <div className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl border border-border hover:border-green-500/50 transition-colors">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1 md:mb-2">5+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Research Collaborations</div>
          </div>
          <div className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl border border-border hover:border-green-500/50 transition-colors">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1 md:mb-2">10+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Special PLA Blends</div>
          </div>
          <div className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl border border-border hover:border-green-500/50 transition-colors">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1 md:mb-2">100%</div>
            <div className="text-xs md:text-sm text-muted-foreground">End-of-Life Solutions</div>
          </div>
        </div>
      </div>
    </section>
  );
}


