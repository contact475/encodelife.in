"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { EncodeLifeHeader } from "@/components/encode-life-header";
import { JobFilters } from "@/components/job-filters";
import { JobGrid } from "@/components/job-grid";
import { ChevronDown } from "lucide-react";

// Mock job data - will be replaced with Strapi API
// Currently empty - no active job postings
const mockJobs: Array<{
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  postedDate: string;
  description: string;
  requirements: string[];
}> = [];

export default function JobListingsPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("Newest");

  // Check URL parameters for auto-filtering (e.g., ?type=internship)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const typeParam = urlParams.get('type');
    if (typeParam === 'internship') {
      setSelectedTypes(['Internship']);
    }
  }, []);
  
  const [showJobsScrollIndicator, setShowJobsScrollIndicator] = useState(false);
  const jobsContainerRef = useRef<HTMLDivElement>(null);

  // Filter and sort jobs
  const filteredJobs = useMemo(() => {
    let filtered = mockJobs.filter((job) => {
      const matchesSearch =
        searchQuery === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDepartment =
        selectedDepartments.length === 0 ||
        selectedDepartments.includes(job.department);

      const matchesLocation =
        selectedLocations.length === 0 ||
        selectedLocations.includes(job.location);

      const matchesExperience =
        selectedExperiences.length === 0 ||
        selectedExperiences.includes(job.experience);

      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(job.type);

      return matchesSearch && matchesDepartment && matchesLocation && matchesExperience && matchesType;
    });

    // Sort
    if (sortBy === "Newest") {
      filtered.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime());
    } else if (sortBy === "Oldest") {
      filtered.sort((a, b) => new Date(a.postedDate).getTime() - new Date(b.postedDate).getTime());
    } else if (sortBy === "Department") {
      filtered.sort((a, b) => a.department.localeCompare(b.department));
    }

    return filtered;
  }, [searchQuery, selectedDepartments, selectedLocations, selectedExperiences, selectedTypes, sortBy]);

  // Check if jobs section is scrollable and scroll position
  useEffect(() => {
    const checkJobsScrollable = () => {
      if (jobsContainerRef.current) {
        const { scrollHeight, clientHeight, scrollTop } = jobsContainerRef.current;
        const isScrollable = scrollHeight > clientHeight;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10; // 10px threshold
        setShowJobsScrollIndicator(isScrollable && !isAtBottom);
      }
    };

    const handleJobsScroll = () => {
      checkJobsScrollable();
    };

    checkJobsScrollable();
    
    if (jobsContainerRef.current) {
      jobsContainerRef.current.addEventListener('scroll', handleJobsScroll);
    }
    
    window.addEventListener('resize', checkJobsScrollable);
    
    return () => {
      if (jobsContainerRef.current) {
        jobsContainerRef.current.removeEventListener('scroll', handleJobsScroll);
      }
      window.removeEventListener('resize', checkJobsScrollable);
    };
  }, [filteredJobs]);

  return (
    <>
      <EncodeLifeHeader />
      
      {/* Hero Section - Exactly like other pages */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-emerald-900">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            alt="Careers at Encode Life - Join Our Professional Team"
            className="w-full h-full object-cover opacity-90"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/70 via-emerald-800/50 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold italic font-newsreader text-white mb-4">
              Open Positions
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Find your role in sustainable innovation and join India's biotech revolution
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <main className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/10 dark:to-teal-950/10"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">

        {/* Mobile/Tablet Layout */}
        <div className="block lg:hidden">
          {/* Mobile Filters */}
          <div className="mb-8">
            <JobFilters
              searchQuery={searchQuery}
              selectedDepartments={selectedDepartments}
              selectedLocations={selectedLocations}
              selectedExperiences={selectedExperiences}
              selectedTypes={selectedTypes}
              onSearchChange={setSearchQuery}
              onDepartmentChange={setSelectedDepartments}
              onLocationChange={setSelectedLocations}
              onExperienceChange={setSelectedExperiences}
              onTypeChange={setSelectedTypes}
              onClearAll={() => {
                setSelectedDepartments([]);
                setSelectedLocations([]);
                setSelectedExperiences([]);
                setSelectedTypes([]);
                setSearchQuery("");
              }}
            />
          </div>

          {/* Mobile Results Header */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-lg sm:text-xl font-semibold">
                {filteredJobs.length} Results
              </span>
              <span className="text-sm text-muted-foreground">
                of {mockJobs.length} total positions
              </span>
            </div>
            <label className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="form-select rounded-lg border-border bg-background text-sm shadow-sm focus:border-emerald-500 focus:ring-emerald-500 focus:ring-opacity-50 pr-8"
              >
                <option>Newest</option>
                <option>Oldest</option>
                <option>Department</option>
              </select>
            </label>
          </div>

          {/* Mobile Job Grid */}
          <div className="relative">
            <div className="max-h-[60vh] overflow-y-auto" ref={jobsContainerRef}>
              <JobGrid jobs={filteredJobs} />
            </div>
            {/* Mobile Scroll Indicator */}
            {showJobsScrollIndicator && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-border/50">
                <ChevronDown className="w-4 h-4 text-muted-foreground animate-bounce" />
              </div>
            )}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-[420px_1fr] lg:gap-16 lg:items-start">
          {/* Desktop Filters Sidebar */}
          <aside className="col-span-1">
            <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
              <JobFilters
                searchQuery={searchQuery}
                selectedDepartments={selectedDepartments}
                selectedLocations={selectedLocations}
                selectedExperiences={selectedExperiences}
                selectedTypes={selectedTypes}
                onSearchChange={setSearchQuery}
                onDepartmentChange={setSelectedDepartments}
                onLocationChange={setSelectedLocations}
                onExperienceChange={setSelectedExperiences}
                onTypeChange={setSelectedTypes}
                onClearAll={() => {
                  setSelectedDepartments([]);
                  setSelectedLocations([]);
                  setSelectedExperiences([]);
                  setSelectedTypes([]);
                  setSearchQuery("");
                }}
              />
            </div>
          </aside>

          {/* Desktop Job Listings */}
          <div className="col-span-1">
            {/* Desktop Results Header */}
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-xl font-semibold">
                  {filteredJobs.length} Results
                </span>
                <span className="text-sm text-muted-foreground">
                  of {mockJobs.length} total positions
                </span>
              </div>
              <label className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="form-select rounded-lg border-border bg-background text-sm shadow-sm focus:border-emerald-500 focus:ring-emerald-500 focus:ring-opacity-50 pr-8"
                >
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Department</option>
                </select>
              </label>
            </div>

            {/* Desktop Job Grid */}
            <div className="relative">
              <div className="max-h-[70vh] overflow-y-auto" ref={jobsContainerRef}>
                <JobGrid jobs={filteredJobs} />
              </div>
              {/* Desktop Scroll Indicator */}
              {showJobsScrollIndicator && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-border/50">
                  <ChevronDown className="w-4 h-4 text-muted-foreground animate-bounce" />
                </div>
              )}
            </div>
          </div>
        </div>
        </div>
      </main>
    </>
  );
}
