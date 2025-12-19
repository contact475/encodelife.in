"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    salary: string;
    postedDate: string;
    description: string;
    requirements?: string[];
  };
}

export function JobCard({ job }: JobCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="group border-b border-border/30 hover:bg-muted/10 transition-all duration-200">
      {/* Main Card Content */}
      <div className="flex items-start sm:items-center justify-between py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-12 cursor-pointer">
        <div className="flex-1 pr-4 sm:pr-6 lg:pr-8">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-emerald-600 transition-colors text-foreground">
            {job.title}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm sm:text-base text-muted-foreground">
            <span className="font-medium">{job.location}</span>
            <span className="hidden sm:inline text-muted-foreground/40">|</span>
            <span className="font-medium">{job.type}</span>
            <span className="hidden sm:inline text-muted-foreground/40">|</span>
            <span className="font-medium">Experience: {job.experience}</span>
          </div>
        </div>
        
        <div className="flex items-center">
          {/* Expand/Collapse Button */}
          <button
            onClick={handleExpandToggle}
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-all flex-shrink-0 shadow-sm"
            aria-label={isExpanded ? "Collapse details" : "Expand details"}
          >
            {isExpanded ? (
              <Minus className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-4 sm:px-6 lg:px-12 pb-6 sm:pb-8 border-t border-border/20 bg-muted/5">
          <div className="pt-4 sm:pt-6 space-y-4 sm:space-y-6">
            {/* Job Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Job Details
                </h4>
                <div className="space-y-2 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Department:</span>
                    <span className="font-medium">{job.department}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Salary:</span>
                    <span className="font-medium text-emerald-600">{job.salary}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Posted:</span>
                    <span className="font-medium">{new Date(job.postedDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              {job.requirements && (
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Requirements
                  </h4>
                  <ul className="space-y-1 text-sm sm:text-base">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 sm:mt-2.5 flex-shrink-0"></span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Job Description */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2 sm:mb-3">
                Job Description
              </h4>
              <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
                {job.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center pt-2 sm:pt-4">
              <Link
                href={`/careers/jobs/${job.id}`}
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all text-sm sm:text-base"
              >
                <span>Read full job description</span>
                <Plus className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
