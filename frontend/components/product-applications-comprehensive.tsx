"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Search } from "lucide-react";

const categories = [
  "All",
  "Food Packaging",
  "Personal Care",
  "Consumer Goods",
  "Agriculture",
  "Medical",
  "Packaging",
  "Household",
  "Fishing",
  "Advertising",
];

const applications = [
  {
    title: "Ear Buds or Cotton Buds, or Q Tips",
    category: "Personal Care",
    marketSize: "Global Cotton Buds Market size was valued at USD 1.29 billion in 2023 and is poised to grow from USD 1.34 billion in 2024 to USD 1.84 billion by 2032, growing at a CAGR of 4.0% during the forecast period (2025-2032).",
    plaReplacement: "Yes - there have been inventions which use biologically degradable plastics in the manufacture of cotton earbuds buds",
    benefits: null,
    image: "/image3.webp",
  },
  {
    title: "Straws",
    category: "Food Packaging",
    marketSize: "The India paper straw market generated a revenue of USD 158.3 million in 2023 and is expected to reach USD 744.4 million by 2030. The India market is expected to grow at a CAGR of 24.7% from 2024 to 2030.",
    plaReplacement: "Yes - Conventional paper straws made exclusively of paper become too soggy when they come in contact with liquids. They have to be coated with some suitable bio-based material to prevent their sogginess. Most of the paper straws available in the market are coated with Polylactic acid (PLA)",
    benefits: "Compared to paper straws, the bioplastic straws offered a 30% reduction in price, providing a more affordable option for the industry and consumers",
    image: "/image1.webp",
  },
  {
    title: "Cutleries",
    category: "Food Packaging",
    marketSize: "The India cutlery market size reached USD 533.4 Million in 2024. Looking forward, IMARC Group expects the market to reach USD 866.57 Million by 2033, exhibiting a growth rate (CAGR) of 5.13% during 2025-2033.",
    plaReplacement: "Yes - Food-Safe: PLA is considered non-toxic and safe for food contact, making it suitable for cutlery and tableware. Versatile: PLA can be molded into various shapes and sizes, suitable for different types of cutlery",
    benefits: null,
    image: "/image7.webp",
  },
  {
    title: "Cold Cups (Yogurt/Paper Cups)",
    category: "Food Packaging",
    marketSize: "The India paper cups market size reached 23.2 Billion Units in 2024. Expects the market to reach 29.0 Billion Units by 2033, exhibiting a growth rate (CAGR) of 2.38% during 2025-2033.",
    plaReplacement: "Yes - It contains no toxic additives and is food-safe, having even been approved for biomedical uses like sutures decades ago. Modern PLA cold cups are sturdy and convenient. They can be made crystal clear, offering the same transparency and strength as PET plastic cups.",
    benefits: null,
    image: "/image6.webp",
  },
  {
    title: "Hot Coffee Cups / Hot Ready to Eat Cups",
    category: "Food Packaging",
    marketSize: "The India paper cups market size reached 23.2 Billion Units in 2024. Expects the market to reach 29.0 Billion Units by 2033, exhibiting a growth rate (CAGR) of 2.38% during 2025-2033.",
    plaReplacement: "No - PLA cannot entirely replace, PLA can be used as a plastic coating for such cups",
    benefits: "Particularly among eco-conscious consumers and businesses aiming to reduce their carbon footprint. These cups are often used in settings where the focus is on sustainability, such as organic cafes, environmentally responsible events, and green businesses.",
    image: "/image5.webp",
  },
  {
    title: "Flex Banners",
    category: "Advertising",
    marketSize: "The India billboard and outdoor advertising market generated a revenue of USD 706.7 million in 2024 and is expected to reach USD 1,090.8 million by 2030. The India market is expected to grow at a CAGR of 7.6% from 2025 to 2030",
    plaReplacement: "Yes. as PLA is highly recyclable and possesses desirable physical and mechanical properties, such as high rigidity, strength, and ease of printing, attributed to its relatively low melting point.",
    benefits: "The use of recycled polylactic acid (rPLA) in 3D printing presents a promising solution for reducing both costs and the environmental impact associated with virgin PLA usage, leading to decreased energy consumption and lower 3D printer prices.",
    image: "/image4.webp",
  },
  {
    title: "Bottles/Caps/Labels",
    category: "Packaging",
    marketSize: "The India Plastic Bottles Market size is worth USD 1.31 billion in 2025, growing at an 1.9% CAGR and is forecast to hit USD 1.44 billion by 2030.",
    plaReplacement: "Yes",
    benefits: "Utilizing PLA caps can enhance brand image, promote sustainability, and provide bio-based options, all while contributing to a lower carbon footprint. PLA bottles outperformed PET in terms of global warming potential, reduced dependency on fossil energy, and human toxicity.",
    image: "/image2.webp",
  },
  {
    title: "Non-Woven Fabrics for PPE Kits",
    category: "Medical",
    marketSize: "The India Non-Woven Fabric Market Size was estimated at 4.59 (USD Billion) in 2023. The India Non-Woven Fabric Industry is expected to grow from 4.75(USD Billion) in 2024 to 7.38 (USD Billion) by 2035.",
    plaReplacement: "Yes - polylactic acid (PLA) has been proposed as a promising candidate to produce non-woven face masks instead of those fossil-based polymers.",
    benefits: null,
    image: "/image3.webp",
  },
  {
    title: "Pharma Bottles (Pill/Sample Collection Bottles)",
    category: "Medical",
    marketSize: "The India Pharmaceutical Packaging Market size is worth USD 5.14 Billion in 2025, growing at an 8.72% CAGR and is forecast to hit USD 7.81 Billion by 2030.",
    plaReplacement: "Yes - PLA packaging can be used for various applications, including blister packs, pill bottles, and medical trays. Its transparency and rigidity also make it suitable for protecting sensitive medications from contamination and damage.",
    benefits: "The packaging sector alone accounts for nearly 48% of total bioplastics consumption, reflecting the growing demand for eco-friendly solutions.",
    image: "/image1.webp",
  },
  {
    title: "Toys",
    category: "Consumer Goods",
    marketSize: "In India, the Plastic & Other Toys market is projected to generate a revenue of US$460.87m in 2025. This market segment is expected to experience an annual growth rate of 4.77% (CAGR 2025-2029).",
    plaReplacement: "Toy companies like Lego, Mattel, Hema, Lol, Mcdonald toys, etc. have started manufacturing toys from bioplastics, where PLA is one of the major components with bio-additives.",
    benefits: "There are dangerous chemicals available in petrochemical-based plastics such as bisphenol A (BPA), phthalates and heavy metals such as lead and cadmium. These chemicals have an adverse effect on human health, especially for children.",
    image: "/image7.webp",
  },
  {
    title: "Cosmetic Industry",
    category: "Personal Care",
    marketSize: "The India Cosmetics Packaging market is projected to grow from USD 1,701.16 million in 2024 to USD 2,515.31 million by 2032, with a compound annual growth rate (CAGR) of 5.01%.",
    plaReplacement: "Yes- As an eco-friendly, recyclable material derived from biomass, PLA is an excellent choice for sustainable cosmetic packaging that meets global standards and appeals to environmentally conscious consumers",
    benefits: "PLA is a safe material for cosmetic packaging, as it does not contain harmful chemicals like BPA or phthalates. This makes it a healthier and safer option for consumers, as well as for the environment.",
    image: "/image6.webp",
  },
  {
    title: "BOPLA Application",
    category: "Packaging",
    marketSize: "Bio-based BOPLA Film Market size was valued at USD 1.2 Billion in 2024 and is projected to reach USD 3.5 Billion by 2033, exhibiting a CAGR of 12.5% from 2026 to 2033.",
    plaReplacement: "Yes",
    benefits: null,
    image: "/image5.webp",
  },
  {
    title: "Cloth Packaging",
    category: "Packaging",
    marketSize: "India Plastic Packaging Market size was valued at USD 7.2 Billion in 2024 and is projected to reach USD 12.85 Billion by 2031, growing at a CAGR of 5.2% from 2024 to 2031.",
    plaReplacement: "Yes- PLA has found its place in an array of packaging applications due to its versatility and environmentally friendly profile.",
    benefits: "From a marketing perspective, adopting PLA packaging can enhance a brand's image, portraying a commitment to sustainability that resonates with increasingly eco-conscious consumers.",
    image: "/image4.webp",
  },
  {
    title: "Hangers/Clips",
    category: "Consumer Goods",
    marketSize: "As per the latest findings, global hanger market revenue is expected to reach USD 2,281.5 million by the end of 2025. Hangers are an essential domestic commodity permeating almost every section of society, leading to a robust and growing market.",
    plaReplacement: "Yes",
    benefits: null,
    image: "/image2.webp",
  },
  {
    title: "Ice Cream Plastic Packaging",
    category: "Food Packaging",
    marketSize: "The India Plastic Packaging Market size is worth USD 22.44 Billion in 2025, growing at an 3.09% CAGR and is forecast to hit USD 26.13 Billion by 2030.",
    plaReplacement: "Yes- PLA Products include PLA cold drink cup/smoothies cup, PLA U shape cup, PLA ice cream cup, PLA portion cup, PLA Deli Container/cup, PLA salad bowl and PLA Lid, made of plant-based material to ensure safety and health.",
    benefits: null,
    image: "/image3.webp",
  },
  {
    title: "Milk Bags",
    category: "Food Packaging",
    marketSize: "India Dairy Products Packaging Market size is valued at US$ 846.2 million in 2023 and is poised to grow at a significant CAGR of 7.3% from 2024-2030.",
    plaReplacement: "Yes",
    benefits: null,
    image: "/image1.webp",
  },
  {
    title: "Nursery Planters/Pots",
    category: "Agriculture",
    marketSize: "The global flower pots and planters market was valued at $978.70 million in 2020, and is projected to reach $1.5 billion by 2030, growing at a CAGR of 4.3% from 2021 to 2030.",
    plaReplacement: "Yes",
    benefits: "Environmentally friendly alternative to traditional plastic, fiber and rice hull planters, bringing significant sustainability benefits to the horticulture industry. Gardeners can plant pots in the ground and degrade them without removing them from the ground.",
    image: "/image7.webp",
  },
  {
    title: "Vegetable Bags",
    category: "Food Packaging",
    marketSize: "The global fruits and vegetable bag industry share is estimated to be USD 1,545.37 million in 2024. The market is expected to grow at a CAGR of 4.70% through 2034 and reach a valuation of USD 2,446.2 million by 2034.",
    plaReplacement: "Yes",
    benefits: null,
    image: "/image6.webp",
  },
  {
    title: "Rafia",
    category: "Packaging",
    marketSize: "The global Raffia-Based Products market size was valued at US$ 36 million in 2023 and is forecast to a readjusted size of USD 46.1 million by 2030 with a CAGR of 3.7% during review period.",
    plaReplacement: "Yes in some items depends on the properties",
    benefits: null,
    image: "/image5.webp",
  },
  {
    title: "Cling Wraps/Bubble Wraps/Shrink Wraps",
    category: "Packaging",
    marketSize: "The plastic shrink wrap market is anticipated to flourish at an average CAGR of 4.1% between 2023 and 2033. The market is expected to hold a market share of USD 4.67 billion by 2033.",
    plaReplacement: "Yes",
    benefits: "One of the main benefits of PLA shrink film is its biodegradability and compostability. Another benefit of PLA shrink film is its versatility and compatibility with a wide range of packaging applications.",
    image: "/image4.webp",
  },
  {
    title: "Fishing Nets",
    category: "Fishing",
    marketSize: "India exported around USD 67.80 million worth of fishing nets in 2023-24, with nylon nets accounting for nearly 42% of exports.",
    plaReplacement: "Yes, PLA material would have a potential for showing an optimal fishing performance while used in commercial fishery which is a crucial aspect for implementing bio-based materials for commercial applications.",
    benefits: "PLA nets exhibit similar catch efficiency as PA nets. No significant differences in elongation at break between knotless PA and PLA. Mechanical properties of PLA monofilament remain constant in the seawater for up to 6 months.",
    image: "/image2.webp",
  },
  {
    title: "Clamshell Containers",
    category: "Food Packaging",
    marketSize: "In India, the food clamshells market is poised to expand at a CAGR of 6.1% between 2023 and 2033, reaching a valuation of around US$ 235.54 million by 2033",
    plaReplacement: "Yes",
    benefits: "PLA clamshell containers are non-toxic and free from harmful chemicals. Ensure food safety while maintaining the integrity of the packaged items. PLA offer transparency, enhancing product presentation and consumer confidence.",
    image: "/image3.webp",
  },
  {
    title: "Coffee Caps",
    category: "Food Packaging",
    marketSize: "The India coffee pods and capsules market size reached USD 967.50 Million in 2024. Looking forward, IMARC Group expects the market to reach USD 1,692.37 Million by 2033, exhibiting a growth rate (CAGR) of 6.40% during 2025-2033.",
    plaReplacement: "Yes",
    benefits: "PLA-based coffee capsules outperform aluminum and conventional plastics in terms of sustainability metrics. Compostable capsules have a Material Circularity Indicator (MCI) of 100%, or fully circular.",
    image: "/image1.webp",
  },
  {
    title: "Decorative Items (3D Printed)",
    category: "Consumer Goods",
    marketSize: "The 3d printing materials market in India is expected to reach a projected revenue of US$ 1,262.8 million by 2030. A compound annual growth rate of 30.8% is expected of India 3d printing materials market from 2025 to 2030.",
    plaReplacement: "Yes, the brittleness of the material makes PLA more suitable for non-functional prototyping, decorative and low-stress applications.",
    benefits: null,
    image: "/image7.webp",
  },
  {
    title: "Disposable Garbage/Waste Bags",
    category: "Household",
    marketSize: "As of 2022, the plastic disposable garbage bag market in India was valued at approximately USD 81 million and is projected to reach USD 101 million by 2030, growing at a compound annual growth rate (CAGR) of 2.9%",
    plaReplacement: "Yes, Since PLA plastic has low smoke generation characteristics, it is also used to manufacture insulating materials, garbage bags, and protective foams.",
    benefits: "When incinerated, PLA emits fewer toxic fumes than conventional plastics, making disposal less harmful to the environment",
    image: "/image6.webp",
  },
  {
    title: "Multilayer Packaging",
    category: "Packaging",
    marketSize: "The India Plastic Packaging Market size is worth USD 22.44 Billion in 2025, growing at an 3.09% CAGR and is forecast to hit USD 26.13 Billion by 2030.",
    plaReplacement: "Yes, electrospinning and coating technologies to prepare multilayer films from polylactic acid (PLA)",
    benefits: null,
    image: "/image5.webp",
  },
  {
    title: "Greenhouse Sheets",
    category: "Agriculture",
    marketSize: "The greenhouse film market in India is expected to reach a projected revenue of US$ 1,142.6 million by 2030. A compound annual growth rate of 11.2% is expected of India greenhouse film market from 2025 to 2030.",
    plaReplacement: "Yes, PLA has ideal material properties such as elongation at break, tensile strength, and the glass transition temperature",
    benefits: "Bioplastic sheets share similar characteristics with traditional plastic sheets in terms of flexibility, durability, and functionality. By utilizing renewable resources, bioplastic sheets help reduce the dependency on fossil fuels.",
    image: "/image4.webp",
  },
  {
    title: "Twisted Packaging for Candy",
    category: "Food Packaging",
    marketSize: "Candy and twisting paper market in India, which includes twisted candy wrappers, is estimated at around USD 184.8 million in 2024. This market is expected to grow at a CAGR of about 4.4% from 2024 to 2034, reaching approximately USD 284.2 million by 2034",
    plaReplacement: "Yes, As films, PLA is used as a wrap for flowers and candy twists etc.",
    benefits: null,
    image: "/image2.webp",
  },
  {
    title: "Saline Bottles",
    category: "Medical",
    marketSize: "The India intravenous solution market size was valued at USD 1.90 Billion in 2024. Looking forward, IMARC Group estimates the market to reach USD 2.96 Billion by 2033, exhibiting a CAGR of 4.81% from 2025-2033",
    plaReplacement: "Yes, subject to certain modifications to address certain issues/challenges like sterilization compatibility, chemical resistance, and regulatory approval",
    benefits: "PLA is non-toxic and biocompatible, reducing the chances of contamination or reaction with saline solution (though needs extensive testing)",
    image: "/image3.webp",
  },
  {
    title: "Biomedical Devices",
    category: "Medical",
    marketSize: "The India medical devices market size reached USD 11.2 Billion in 2024 and is expected to reach USD 20.8 Billion by 2033, growing at a CAGR of 7.1% during 2025-2033",
    plaReplacement: "Yes - PLA is widely used in biomedical applications including surgical sutures, bone screws, drug delivery systems, and tissue engineering scaffolds due to its biocompatibility and biodegradability",
    benefits: "PLA degrades into lactic acid which is naturally metabolized by the body. FDA-approved for medical implants, eliminates need for removal surgery, reduces patient recovery time and healthcare costs",
    image: "/image1.webp",
  },
];

export function ProductApplicationsComprehensive() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleRows, setVisibleRows] = useState(3); // Show 3 rows initially
  const ITEMS_PER_ROW = 3; // 3 columns = 3 items per row

  const filteredApplications = applications.filter((app) => {
    const matchesCategory = selectedCategory === "All" || app.category === selectedCategory;
    const matchesSearch = app.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalRows = Math.ceil(filteredApplications.length / ITEMS_PER_ROW);
  const visibleCount = visibleRows * ITEMS_PER_ROW;
  const displayedApplications = filteredApplications.slice(0, visibleCount);
  const hasMore = visibleCount < filteredApplications.length;
  const remainingCount = filteredApplications.length - visibleCount;

  const handleLoadMore = () => {
    setVisibleRows(prev => prev + 3);
  };

  const handleShowAll = () => {
    setVisibleRows(totalRows);
  };

  // Reset visible rows when filter changes
  React.useEffect(() => {
    setVisibleRows(3);
  }, [selectedCategory, searchTerm]);

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold italic font-newsreader mb-4">
              Applications
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
              Comprehensive PLA solutions across {applications.length}+ applications
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </motion.div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search applications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-green-500/50"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  selectedCategory === category
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
                    : "bg-card border border-border text-foreground hover:border-green-500/50"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredApplications.length} of {applications.length} applications
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedApplications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.3) }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-green-500/50 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/90 text-white backdrop-blur-sm border border-green-500/20">
                    {app.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground line-clamp-2 leading-tight">
                  {app.title}
                </h3>

                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-foreground mb-2 text-sm">Market Size:</p>
                    <p className="text-muted-foreground line-clamp-3 leading-relaxed">{app.marketSize}</p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-2 text-sm">PLA Can Replace:</p>
                    <p className="text-muted-foreground line-clamp-4 leading-relaxed">{app.plaReplacement}</p>
                  </div>

                  {app.benefits && (
                    <div>
                      <p className="font-semibold text-foreground mb-2 text-sm">Benefits:</p>
                      <p className="text-muted-foreground line-clamp-3 leading-relaxed">{app.benefits}</p>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                    <Check className="w-4 h-4" />
                    <span className="font-medium">PLA Compatible</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredApplications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-base text-muted-foreground">No applications found matching your criteria.</p>
          </div>
        )}

        {/* Load More / Show All Buttons */}
        {hasMore && (
          <div className="mt-12 text-center">
            {remainingCount > ITEMS_PER_ROW * 3 ? (
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center gap-2 px-8 py-4 bg-card border-2 border-border hover:border-green-500/50 rounded-full font-semibold text-base text-foreground hover:shadow-lg transition-all"
              >
                Load More ({remainingCount} remaining)
              </button>
            ) : (
              <button
                onClick={handleShowAll}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold text-base hover:shadow-xl transition-all"
              >
                Show All ({remainingCount} more)
              </button>
            )}
          </div>
        )}


      </div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
