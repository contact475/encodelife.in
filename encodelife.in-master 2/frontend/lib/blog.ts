export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  thumbnail?: string;
  content?: string;
  tags?: string[];
}

// Hardcoded blog posts for now
export const blogPosts: BlogPost[] = [
  {
    slug: "future-of-sustainable-packaging",
    title: "The Future of Sustainable Packaging",
    description:
      "Discover how PLA bioplastics are revolutionizing the packaging industry with eco-friendly alternatives that reduce carbon footprint and plastic waste.",
    date: "2024-12-15",
    author: "Dr. Priya Sharma",
    thumbnail: "/image5.webp",
    tags: ["Sustainability", "Packaging", "Innovation"],
    content: `
# The Future of Sustainable Packaging

The packaging industry is undergoing a revolutionary transformation, driven by the urgent need for sustainable alternatives to traditional plastics. PLA (Polylactic Acid) bioplastics are at the forefront of this change, offering a viable solution that addresses both environmental concerns and practical packaging needs.

## Why PLA Bioplastics Matter

Traditional petroleum-based plastics have dominated the packaging industry for decades, but their environmental impact is undeniable. PLA bioplastics, derived from renewable resources like corn, offer a compelling alternative:

- **Carbon Negative Production**: Corn absorbs CO₂ during growth, making PLA production carbon negative
- **Biodegradable**: Unlike traditional plastics, PLA can decompose naturally under the right conditions
- **Versatile Applications**: From food packaging to medical supplies, PLA's versatility matches traditional plastics

## The Market Shift

Major brands worldwide are transitioning to sustainable packaging solutions. The global bioplastics market is projected to reach $27.9 billion by 2027, with PLA leading the charge.

## Challenges and Solutions

While PLA bioplastics offer tremendous benefits, challenges remain:

1. **Cost Competitiveness**: Scaling production to match traditional plastic pricing
2. **Infrastructure**: Developing composting facilities for proper disposal
3. **Consumer Education**: Raising awareness about proper disposal methods

## Looking Ahead

The future of packaging is undeniably sustainable. As technology advances and production scales, PLA bioplastics will become the standard, not the exception. Companies investing in this technology today are positioning themselves as leaders in tomorrow's circular economy.
    `,
  },
  {
    slug: "corn-to-bioplastic-journey",
    title: "From Corn to Bioplastic: The PLA Journey",
    description:
      "Explore the fascinating process of transforming corn into high-quality PLA bioplastics and how it's creating a circular economy.",
    date: "2024-12-10",
    author: "Rajesh Kumar",
    thumbnail: "/image3.webp",
    tags: ["Manufacturing", "Process", "Circular Economy"],
    content: `
# From Corn to Bioplastic: The PLA Journey

The transformation of corn into PLA bioplastic is a remarkable example of modern biotechnology meeting sustainable manufacturing. Let's explore this fascinating journey from field to finished product.

## Step 1: Cultivation and Carbon Capture

The journey begins in corn fields, where plants naturally absorb CO₂ from the atmosphere through photosynthesis. This carbon capture is the first step in creating a carbon-negative product.

### Key Facts:
- Only 1.75 m² of land needed per kg of PLA
- Corn grows rapidly, reaching maturity in 12-18 months
- Efficient water usage compared to other crops

## Step 2: Sugar Extraction

Once harvested, corn undergoes processing to extract sugar. This traditional process has been optimized over centuries and is highly efficient.

## Step 3: Fermentation

The extracted sugar is fermented using microorganisms to produce lactic acid. This biological process is similar to how yogurt is made, but on an industrial scale.

## Step 4: Polymerization

Lactic acid molecules are then polymerized to create long chains of PLA. This chemical process transforms the liquid lactic acid into solid plastic pellets.

## Step 5: Manufacturing

PLA pellets can be processed using standard plastic manufacturing equipment, making it easy for manufacturers to adopt this sustainable alternative.

## The Circular Economy Advantage

What makes this process truly revolutionary is its circular nature:
- Starts with renewable resources
- Absorbs CO₂ during growth
- Can be composted back into the earth
- Or recycled into new products

## India's Role

India's first industrial-scale PLA plant represents a significant milestone in this journey, positioning the country as a global leader in sustainable materials manufacturing.
    `,
  },
  {
    slug: "india-leading-bioplastics-revolution",
    title: "Why India is Leading the Bioplastics Revolution",
    description:
      "Learn about India's first industrial-scale PLA plant and how it's positioning the country as a global leader in sustainable materials.",
    date: "2024-12-05",
    author: "Ananya Desai",
    thumbnail: "/image2.webp",
    tags: ["Industry", "India", "Leadership"],
    content: `
# Why India is Leading the Bioplastics Revolution

India is emerging as a global powerhouse in the bioplastics industry, with strategic advantages that position it uniquely in the sustainable materials revolution.

## Strategic Advantages

### 1. Agricultural Abundance
India is one of the world's largest producers of corn, providing an abundant and sustainable feedstock for PLA production.

### 2. Manufacturing Expertise
Decades of experience in chemical and polymer manufacturing provide the technical foundation for bioplastics production.

### 3. Government Support
Progressive policies and incentives for sustainable manufacturing are accelerating industry growth.

## India's First Industrial-Scale PLA Plant

The establishment of India's first industrial-scale PLA plant marks a watershed moment:

- **Capacity**: Producing thousands of tons annually
- **Technology**: State-of-the-art equipment powered by 100% renewable energy
- **Employment**: Creating hundreds of skilled jobs
- **Impact**: Reducing India's dependence on imported bioplastics

## Global Market Position

India's entry into large-scale PLA production has several implications:

1. **Cost Competitiveness**: Lower production costs make PLA more accessible globally
2. **Supply Chain Security**: Reducing dependence on imports
3. **Innovation Hub**: Attracting research and development investments
4. **Export Potential**: Positioning India as a major exporter of sustainable materials

## Environmental Impact

The environmental benefits of India's bioplastics industry are substantial:

- Reducing plastic waste in one of the world's most populous nations
- Creating a model for other developing countries
- Contributing to global carbon reduction goals

## Future Outlook

As India continues to invest in bioplastics infrastructure and technology, its role in the global sustainable materials market will only grow. The country is not just participating in the bioplastics revolution—it's leading it.

## Challenges Ahead

While the outlook is positive, challenges remain:
- Scaling production to meet growing demand
- Building consumer awareness
- Developing waste management infrastructure

However, with strong government support and private sector investment, India is well-positioned to overcome these challenges and cement its position as a global leader in sustainable materials.
    `,
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
