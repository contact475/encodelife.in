"use client";

import { motion } from "framer-motion";
import { TreePine, Car, Leaf, Zap, Factory, Droplets, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Calculation constants (per kg of material)
const TRADITIONAL_PLASTIC_CO2 = 6.0; // kg CO2e per kg
const ENCODELIFE_PLA_CO2 = 1.2; // kg CO2e per kg
const TRADITIONAL_PLASTIC_ENERGY = 96; // MJ per kg
const ENCODELIFE_PLA_ENERGY = 46; // MJ per kg
const TREE_CO2_ABSORPTION = 21; // kg CO2 per tree per year
const CAR_CO2_PER_DAY = 12; // kg CO2 per day (average)

interface CalculatorResults {
  co2Saved: number;
  energySaved: number;
  treesEquivalent: number;
  carsOffRoad: number;
}

const presetExamples = [
  {
    id: 1,
    name: "1000 Coffee Cups",
    productType: "Food Serviceware",
    weight: 10,
    quantity: 1000,
    icon: Droplets,
  },
  {
    id: 2,
    name: "100kg Packaging",
    productType: "Packaging",
    weight: 100,
    quantity: 1,
    icon: Factory,
  },
  {
    id: 3,
    name: "500 Shopping Bags",
    productType: "Films",
    weight: 5,
    quantity: 500,
    icon: Leaf,
  },
];

const benefits = [
  {
    id: 1,
    icon: Leaf,
    title: "Carbon Sequestration",
    description: "Plants capture atmospheric CO₂ during photosynthesis, storing it in PLA",
    metric: "100%",
    label: "Renewable Carbon",
  },
  {
    id: 2,
    icon: Zap,
    title: "Renewable Resources",
    description: "Made from annually renewable plant sugars, not fossil fuels",
    metric: "0%",
    label: "Petroleum Used",
  },
  {
    id: 3,
    icon: TreePine,
    title: "Waste Reduction",
    description: "Multiple end-of-life pathways prevent landfill accumulation",
    metric: "6+",
    label: "Recovery Options",
  },
  {
    id: 4,
    icon: Droplets,
    title: "Soil Health",
    description: "Composted PLA returns nutrients to soil, improving carbon storage",
    metric: "90-180",
    label: "Days to Compost",
  },
];

function calculateBenefits(
  productType: string,
  weight: number,
  quantity: number
): CalculatorResults {
  const totalWeight = weight * quantity;

  const co2Saved =
    (TRADITIONAL_PLASTIC_CO2 - ENCODELIFE_PLA_CO2) * totalWeight;
  const energySaved =
    ((TRADITIONAL_PLASTIC_ENERGY - ENCODELIFE_PLA_ENERGY) * totalWeight) / 3.6; // Convert MJ to kWh

  const treesEquivalent = co2Saved / TREE_CO2_ABSORPTION;
  const carsOffRoad = co2Saved / CAR_CO2_PER_DAY;

  return {
    co2Saved: Math.round(co2Saved * 10) / 10,
    energySaved: Math.round(energySaved * 10) / 10,
    treesEquivalent: Math.round(treesEquivalent * 10) / 10,
    carsOffRoad: Math.round(carsOffRoad * 10) / 10,
  };
}

export function EnvironmentalBenefitsSection() {
  const [productType, setProductType] = useState("Packaging");
  const [weight, setWeight] = useState(10);
  const [quantity, setQuantity] = useState(100);

  const results = calculateBenefits(productType, weight, quantity);

  const loadPreset = (preset: typeof presetExamples[0]) => {
    setProductType(preset.productType);
    setWeight(preset.weight);
    setQuantity(preset.quantity);
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-newsreader italic font-semibold mb-4 sm:mb-6 px-2"
          >
            Environmental{" "}
            <span className="text-green-600 dark:text-green-400">
              Benefits Calculator
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2"
          >
            Calculate the real environmental impact of choosing Encodelife PLA
            over traditional plastics. See the difference you can make.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-4 sm:mt-6"
          />
        </div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl sm:rounded-3xl bg-card border border-border"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Left: Input Form */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-newsreader italic font-semibold mb-4 sm:mb-6">
                Enter Your Product Details
              </h3>

              {/* Product Type */}
              <div className="space-y-2">
                <Label htmlFor="productType" className="text-sm sm:text-base">
                  Product Type
                </Label>
                <Select value={productType} onValueChange={setProductType}>
                  <SelectTrigger id="productType" className="h-10 sm:h-12 text-sm sm:text-base">
                    <SelectValue placeholder="Select product type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Packaging">Packaging</SelectItem>
                    <SelectItem value="Fibers">Fibers</SelectItem>
                    <SelectItem value="Films">Films</SelectItem>
                    <SelectItem value="Food Serviceware">
                      Food Serviceware
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Weight */}
              <div className="space-y-2">
                <Label htmlFor="weight" className="text-sm sm:text-base">
                  Weight per Unit (kg)
                </Label>
                <Input
                  id="weight"
                  type="number"
                  min="0.01"
                  step="0.01"
                  value={weight}
                  onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
                  className="h-10 sm:h-12 text-sm sm:text-base"
                />
              </div>

              {/* Quantity */}
              <div className="space-y-2">
                <Label htmlFor="quantity" className="text-sm sm:text-base">
                  Quantity (units)
                </Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  step="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                  className="h-10 sm:h-12 text-sm sm:text-base"
                />
              </div>

              {/* Total Weight Display */}
              <div className="p-3 sm:p-4 rounded-xl bg-card border border-border">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">
                  Total Weight
                </p>
                <p className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">
                  {(weight * quantity).toFixed(2)} kg
                </p>
              </div>
            </div>

            {/* Right: Results */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-newsreader italic font-semibold mb-4 sm:mb-6">
                Environmental Savings
              </h3>

              {/* CO2 Saved */}
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 sm:gap-4 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 truncate">
                      {results.co2Saved} kg
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      CO₂ Emissions Saved
                    </p>
                  </div>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300"
                    style={{ width: "80%" }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  80% reduction vs traditional plastic
                </p>
              </div>

              {/* Energy Saved */}
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 sm:gap-4 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 truncate">
                      {results.energySaved} kWh
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Energy Saved
                    </p>
                  </div>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
                    style={{ width: "52%" }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  52% less non-renewable energy used
                </p>
              </div>

              {/* Trees Equivalent */}
              <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card border border-border flex items-center gap-3 sm:gap-4">
                <TreePine className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-green-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-lg sm:text-xl font-bold truncate">
                    {results.treesEquivalent} trees
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Planted for a year
                  </p>
                </div>
              </div>

              {/* Cars Equivalent */}
              <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card border border-border flex items-center gap-3 sm:gap-4">
                <Car className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-lg sm:text-xl font-bold truncate">
                    {results.carsOffRoad} days
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Car off the road
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Preset Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-newsreader italic font-semibold text-center mb-6 sm:mb-8 px-2">
            Try These Examples
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {presetExamples.map((preset) => {
              const Icon = preset.icon;
              return (
                <button
                  key={preset.id}
                  onClick={() => loadPreset(preset)}
                  className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-green-500/50 transition-all duration-300 hover:shadow-xl text-left"
                >
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 dark:text-green-400 mb-3 sm:mb-4 group-hover:scale-105 transition-transform" />
                  <p className="text-base sm:text-lg font-semibold mb-2">{preset.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                    {preset.productType} • {preset.weight}kg × {preset.quantity}
                  </p>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-green-600 dark:text-green-400 font-medium">
                    Load Example
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-newsreader italic font-semibold text-center mb-6 sm:mb-8 px-2">
            Additional Environmental Benefits
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.id}
                  className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-green-500/50 transition-all duration-300 hover:shadow-lg"
                >
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 dark:text-green-400 mb-3 sm:mb-4" />
                  <div className="mb-2 sm:mb-3">
                    <p className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">
                      {benefit.metric}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {benefit.label}
                    </p>
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-card border border-border text-center"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-newsreader italic font-semibold mb-3 sm:mb-4 px-2">
            Ready to Join the Circular Economy?
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Partner with Encodelife to create sustainable products that benefit
            both your business and the planet.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full px-6 sm:px-8 h-12 sm:h-14 text-base sm:text-lg w-full sm:w-auto"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-6 sm:px-8 h-12 sm:h-14 text-base sm:text-lg w-full sm:w-auto"
            >
              Learn More About PLA
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
