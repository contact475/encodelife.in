"use client";

import React, { useState, useRef, useEffect } from "react";
import { Plus, Minus, RotateCcw, ChevronDown } from "lucide-react";

interface JobFiltersProps {
  searchQuery: string;
  selectedDepartments: string[];
  selectedLocations: string[];
  selectedExperiences: string[];
  selectedTypes: string[];
  onSearchChange: (query: string) => void;
  onDepartmentChange: (depts: string[]) => void;
  onLocationChange: (locs: string[]) => void;
  onExperienceChange: (exps: string[]) => void;
  onTypeChange: (types: string[]) => void;
  onClearAll: () => void;
}

const departments = [
  "Biotechnology",
  "R&D",
  "Manufacturing",
  "Sales",
  "Marketing",
  "Quality Assurance",
];

const locations = [
  "Mumbai, India",
  "Bangalore, India",
  "Pune, India",
  "Remote",
];

const experienceLevels = [
  "Entry-Level (0-1 years)",
  "Mid-Level (2-4 years)",
  "Senior (5+ years)",
];

const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"];

export function JobFilters({
  searchQuery,
  selectedDepartments,
  selectedLocations,
  selectedExperiences,
  selectedTypes,
  onSearchChange,
  onDepartmentChange,
  onLocationChange,
  onExperienceChange,
  onTypeChange,
  onClearAll,
}: JobFiltersProps) {
  const [openSections, setOpenSections] = useState({
    location: false,
    department: false,
    type: false,
    experience: false,
  });

  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check if content is scrollable and scroll position
  useEffect(() => {
    const checkScrollable = () => {
      if (containerRef.current) {
        const { scrollHeight, clientHeight, scrollTop } = containerRef.current;
        const isScrollable = scrollHeight > clientHeight;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10; // 10px threshold
        setShowScrollIndicator(isScrollable && !isAtBottom);
      }
    };

    const handleScroll = () => {
      checkScrollable();
    };

    checkScrollable();
    
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll);
    }
    
    window.addEventListener('resize', checkScrollable);
    
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', checkScrollable);
    };
  }, [openSections]);

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const hasActiveFilters =
    selectedDepartments.length > 0 ||
    selectedLocations.length > 0 ||
    selectedExperiences.length > 0 ||
    selectedTypes.length > 0;

  return (
    <div className="flex flex-col relative">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 lg:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Filters</h2>
          {hasActiveFilters && (
            <button
              onClick={onClearAll}
              className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors self-start sm:self-auto"
            >
              <span>Clear filters</span>
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
        
        {/* Search Bar */}
        <div className="relative mb-4 lg:mb-6">
          <input
            type="text"
            placeholder="Search positions..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm sm:text-base"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        <div className="border-b border-primary/30 pb-4 lg:pb-6"></div>
      </div>

      {/* Filter Sections */}
      <div ref={containerRef} className="flex flex-col relative">
        {/* Location */}
        <div className="border-b border-border/50">
          <button
            onClick={() => toggleSection("location")}
            className="relative w-full py-4 sm:py-6 lg:py-8 text-left hover:text-primary transition-colors"
          >
            <span className="text-base sm:text-lg font-medium">Location</span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              {openSections.location ? (
                <Minus className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </div>
          </button>
          {openSections.location && (
            <div className="pb-6 sm:pb-8 lg:pb-10 space-y-4 sm:space-y-5 lg:space-y-6">
              {locations.map((loc) => (
                <label key={loc} className="flex items-center gap-3 sm:gap-4 lg:gap-5 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedLocations.includes(loc)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        onLocationChange([...selectedLocations, loc]);
                      } else {
                        onLocationChange(selectedLocations.filter(l => l !== loc));
                      }
                    }}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 focus:ring-emerald-500 rounded border-gray-300 flex-shrink-0"
                  />
                  <span className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground">
                    {loc}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Department */}
        <div className="border-b border-border/50">
          <button
            onClick={() => toggleSection("department")}
            className="relative w-full py-4 sm:py-6 lg:py-8 text-left hover:text-primary transition-colors"
          >
            <span className="text-base sm:text-lg font-medium">Department</span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              {openSections.department ? (
                <Minus className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </div>
          </button>
          {openSections.department && (
            <div className="pb-6 sm:pb-8 lg:pb-10 space-y-4 sm:space-y-5 lg:space-y-6">
              {departments.map((dept) => (
                <label key={dept} className="flex items-center gap-3 sm:gap-4 lg:gap-5 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedDepartments.includes(dept)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        onDepartmentChange([...selectedDepartments, dept]);
                      } else {
                        onDepartmentChange(selectedDepartments.filter(d => d !== dept));
                      }
                    }}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 focus:ring-emerald-500 rounded border-gray-300 flex-shrink-0"
                  />
                  <span className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground">
                    {dept}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Job Type */}
        <div className="border-b border-border/50">
          <button
            onClick={() => toggleSection("type")}
            className="relative w-full py-4 sm:py-6 lg:py-8 text-left hover:text-primary transition-colors"
          >
            <span className="text-base sm:text-lg font-medium">Job Type</span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              {openSections.type ? (
                <Minus className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </div>
          </button>
          {openSections.type && (
            <div className="pb-6 sm:pb-8 lg:pb-10 space-y-4 sm:space-y-5 lg:space-y-6">
              {jobTypes.map((type) => (
                <label key={type} className="flex items-center gap-3 sm:gap-4 lg:gap-5 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        onTypeChange([...selectedTypes, type]);
                      } else {
                        onTypeChange(selectedTypes.filter(t => t !== type));
                      }
                    }}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 focus:ring-emerald-500 rounded border-gray-300 flex-shrink-0"
                  />
                  <span className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground">
                    {type}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Experience */}
        <div className="border-b border-border/50">
          <button
            onClick={() => toggleSection("experience")}
            className="relative w-full py-4 sm:py-6 lg:py-8 text-left hover:text-primary transition-colors"
          >
            <span className="text-base sm:text-lg font-medium">Experience</span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              {openSections.experience ? (
                <Minus className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </div>
          </button>
          {openSections.experience && (
            <div className="pb-6 sm:pb-8 lg:pb-10 space-y-4 sm:space-y-5 lg:space-y-6">
              {experienceLevels.map((exp) => (
                <label key={exp} className="flex items-center gap-3 sm:gap-4 lg:gap-5 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedExperiences.includes(exp)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        onExperienceChange([...selectedExperiences, exp]);
                      } else {
                        onExperienceChange(selectedExperiences.filter(e => e !== exp));
                      }
                    }}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 focus:ring-emerald-500 rounded border-gray-300 flex-shrink-0"
                  />
                  <span className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground">
                    {exp}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-border/50">
            <ChevronDown className="w-4 h-4 text-muted-foreground animate-bounce" />
          </div>
        )}
      </div>
    </div>
  );
}
