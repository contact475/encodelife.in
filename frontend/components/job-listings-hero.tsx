"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface JobListingsHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalJobs: number;
  filteredJobs: number;
}

export function JobListingsHero({
  searchQuery,
  onSearchChange,
  totalJobs,
  filteredJobs,
}: JobListingsHeroProps) {
  return (
    <div className="flex flex-col gap-4 mb-8">
      <h1 className="text-5xl font-bold tracking-tight leading-tight">
        Open Positions
      </h1>
      <p className="text-muted-foreground text-lg font-normal leading-relaxed">
        Find your role in sustainable innovation
      </p>
    </div>
  );
}
