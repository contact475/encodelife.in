"use client";

import React from "react";
import { JobCard } from "@/components/job-card";
import { Briefcase } from "lucide-react";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  postedDate: string;
  description: string;
}

interface JobGridProps {
  jobs: Job[];
}

export function JobGrid({ jobs }: JobGridProps) {
  if (jobs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
          <Briefcase className="w-10 h-10 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-semibold mb-2">No positions found</h3>
        <p className="text-muted-foreground max-w-md">
          Try adjusting your filters or search query to find more opportunities.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <div key={job.id} className="border border-border rounded-xl overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow">
          <JobCard job={job} />
        </div>
      ))}
    </div>
  );
}
