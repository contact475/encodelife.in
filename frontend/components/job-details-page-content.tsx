"use client";

import React, { useState, useEffect } from "react";
import { EncodeLifeHeader } from "@/components/encode-life-header";
import { JobApplicationForm } from "@/components/job-application-form";
import { MarkdownRenderer } from "@/components/ui/markdown-renderer";
import { 
  MapPin, 
  Clock, 
  Briefcase, 
  Calendar, 
  Users, 
  Building2,
  ArrowLeft,
  Share2,
  CheckCircle,
  AlertCircle,
  Send
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface JobDetailsPageContentProps {
  jobId: string;
}

// Mock job data with markdown content - will be replaced with Strapi API
const mockJobsData: Record<string, any> = {
  "1": {
    id: "1",
    title: "Senior Research Scientist",
    slug: "senior-research-scientist",
    department: "Biotechnology",
    location: "Mumbai, India",
    jobType: "Full-time",
    experienceLevel: "Senior (5+ years)",
    salaryRange: "₹15-22 LPA",
    openings: 2,
    applicationDeadline: "2024-02-15",
    shortDescription: "Lead innovative research projects in polymer science and contribute to the development of next-generation bioplastics. Drive breakthrough innovations in sustainable materials and lead cross-functional teams to bring cutting-edge solutions to market.",
    
    aboutRole: `## About This Role

This position is **critical to Encode Life's mission** of revolutionizing India's biotech sector through sustainable innovation. As a Senior Research Scientist, you'll be at the forefront of developing next-generation bioplastics that will replace traditional plastics across multiple industries.

You will work in our state-of-the-art research facilities, collaborating with a world-class team of scientists and engineers to push the boundaries of what's possible in sustainable materials science.

> *"Join us in creating the future of sustainable materials and making a lasting impact on our planet."*`,

    keyResponsibilities: `## Key Responsibilities

### Research & Development
- **Lead research and development** of novel PLA formulations and bioplastic materials
- **Design and execute** experimental protocols for polymer characterization and testing
- **Drive innovation** in sustainable materials through cutting-edge research methodologies

### Collaboration & Leadership
- **Collaborate with cross-functional teams** including manufacturing, quality, and product development
- **Mentor junior researchers** and guide technical decision-making processes
- **Lead project teams** and coordinate research initiatives across departments

### Knowledge Sharing
- **Publish research findings** in peer-reviewed journals and present at industry conferences
- **Stay current** with industry trends and emerging technologies in bioplastics and sustainability
- **Represent Encode Life** at scientific conferences and industry events`,

    requirements: `## Requirements

### Education & Experience
- **PhD in Polymer Chemistry, Materials Science, or related field**
- **5+ years of hands-on experience** in bioplastics research and development
- **Strong background** in polymer characterization techniques (GPC, DSC, FTIR, NMR)

### Technical Skills
- **Published research papers** in peer-reviewed journals
- **Experience with statistical analysis** and data interpretation
- **Proficiency in laboratory equipment** and analytical instruments

### Soft Skills
- **Excellent communication and leadership skills**
- **Strong problem-solving abilities**
- **Ability to work in a fast-paced, collaborative environment**`,

    preferredQualifications: `## Preferred Qualifications

- Experience with **PLA or other biodegradable polymers**
- Knowledge of **sustainable manufacturing processes**
- **Project management experience** with cross-functional teams
- **Industry experience** in plastics or materials companies
- **Patent applications** or intellectual property development
- **International research collaboration** experience`,

    benefitsAndPerks: `## Benefits & Perks

### Compensation
- **Competitive salary** with performance-based bonuses
- **Stock options** and equity participation
- **Annual performance reviews** with growth opportunities

### Health & Wellness
- **Comprehensive health insurance** for employee and family
- **Mental health support** and wellness programs
- **Flexible working arrangements** and work-life balance

### Professional Development
- **Professional development opportunities** and conference attendance
- **Research budget** for equipment and materials
- **State-of-the-art research facilities** and equipment
- **Continuing education support** and skill development programs`,

    teamSize: "8-12 researchers",
    reportsTo: "Head of Research & Development",
    workEnvironment: "Modern laboratory facilities with cutting-edge equipment, collaborative open workspace, and hybrid work options.",
    
    applicationProcess: `## Application Process

### Timeline
1. **Application Review** - Within 1 week of submission
2. **Initial Screening** - Technical assessment and portfolio review
3. **First Interview** - Technical discussion with hiring manager
4. **Panel Interview** - Meet with team members and stakeholders
5. **Final Decision** - Reference checks and offer discussion

### What to Expect
- **Technical presentation** of your research work
- **Laboratory tour** and facility overview
- **Meet the team** sessions with potential colleagues
- **Q&A sessions** about role expectations and growth opportunities`,

    companyInfo: `## Why Encode Life?

### Our Mission
Encode Life is pioneering **India's biotech revolution** through sustainable innovation. We're building the country's first industrial-scale PLA plant and creating 500+ jobs for the next generation of biotechnology professionals.

### Our Culture
- **Innovation-driven** environment with cutting-edge research
- **Collaborative** and inclusive workplace culture
- **Sustainability-focused** mission with global impact
- **Growth opportunities** in a rapidly expanding company

### Our Impact
- **Environmental leadership** in sustainable materials
- **Industry partnerships** with leading global companies
- **Research excellence** with published scientific contributions
- **Community engagement** and social responsibility initiatives`
  }
};

export default function JobDetailsPageContent({ jobId }: JobDetailsPageContentProps) {
  const router = useRouter();
  const [job, setJob] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  useEffect(() => {
    // Simulate API call - replace with actual Strapi API call
    const fetchJob = async () => {
      setIsLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const jobData = mockJobsData[jobId];
      if (jobData) {
        setJob(jobData);
      }
      setIsLoading(false);
    };

    fetchJob();
  }, [jobId]);

  if (isLoading) {
    return (
      <>
        <EncodeLifeHeader />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
        </div>
      </>
    );
  }

  if (!job) {
    return (
      <>
        <EncodeLifeHeader />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <AlertCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-semibold mb-2">Job Not Found</h1>
            <p className="text-muted-foreground mb-6">The job you're looking for doesn't exist or has been removed.</p>
            <Link 
              href="/careers/jobs" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Jobs
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <EncodeLifeHeader />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="mb-6 sm:mb-8">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Jobs
            </button>
          </div>

          {/* Job Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                  {job.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-base sm:text-lg lg:text-xl text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                    <span className="font-medium">{job.department}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                    <span className="font-medium">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                    <span className="font-medium">{job.jobType}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                    <span className="font-medium">{job.experienceLevel}</span>
                  </div>
                </div>
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
                {job.shortDescription}
              </p>
            </div>

            {/* Job Quick Info Card */}
            <div className="lg:col-span-1">
              <div className="bg-background border border-border rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="font-semibold text-base sm:text-lg mb-4">Job Details</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base text-muted-foreground">Salary</span>
                    <span className="font-semibold text-sm sm:text-base text-emerald-600">{job.salaryRange}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base text-muted-foreground">Openings</span>
                    <span className="font-semibold text-sm sm:text-base">{job.openings} position{job.openings > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base text-muted-foreground">Deadline</span>
                    <span className="font-semibold text-sm sm:text-base text-orange-600">{new Date(job.applicationDeadline).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <button
                    onClick={() => setShowApplicationForm(true)}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 sm:py-3 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Send className="w-4 h-4" />
                    Apply Now
                  </button>
                  <button className="w-full border border-border hover:bg-muted text-foreground py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-2 text-sm">
                    <Share2 className="w-4 h-4" />
                    <span>Share Position</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Job Details */}
          <div className="lg:col-span-2 space-y-8 sm:space-y-10 lg:space-y-12">
            
            {/* About This Role */}
            <section>
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/10 dark:to-teal-950/10 rounded-xl p-4 sm:p-6 border border-emerald-200/50 dark:border-emerald-800/50">
                <MarkdownRenderer 
                  content={job.aboutRole} 
                  className="prose-emerald"
                />
              </div>
            </section>

            {/* Key Responsibilities */}
            <section>
              <MarkdownRenderer 
                content={job.keyResponsibilities}
                className="prose-emerald"
              />
            </section>

            {/* Requirements */}
            <section>
              <MarkdownRenderer 
                content={job.requirements}
                className="prose-emerald"
              />
            </section>

            {/* Preferred Qualifications */}
            <section>
              <MarkdownRenderer 
                content={job.preferredQualifications}
                className="prose-emerald"
              />
            </section>

            {/* Benefits & Perks */}
            <section>
              <MarkdownRenderer 
                content={job.benefitsAndPerks}
                className="prose-emerald"
              />
            </section>

            {/* Application Process */}
            <section>
              <div className="bg-background border border-border rounded-xl p-4 sm:p-6">
                <MarkdownRenderer 
                  content={job.applicationProcess}
                  className="prose-emerald"
                />
              </div>
            </section>
          </div>

          {/* Right Column - Additional Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6 sm:space-y-8">
              {/* Team Information */}
              <div className="bg-background border border-border rounded-xl p-4 sm:p-6">
              <h3 className="font-semibold text-base sm:text-lg mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-600" />
                Team Information
              </h3>
              <div className="space-y-3 text-sm sm:text-base">
                <div>
                  <span className="text-muted-foreground">Team Size:</span>
                  <span className="ml-2 font-medium">{job.teamSize}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Reports To:</span>
                  <span className="ml-2 font-medium">{job.reportsTo}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Work Environment:</span>
                  <p className="mt-1 text-foreground/80 text-sm">{job.workEnvironment}</p>
                </div>
              </div>
            </div>

            {/* Application Timeline */}
            <div className="bg-background border border-border rounded-xl p-4 sm:p-6">
              <h3 className="font-semibold text-base sm:text-lg mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-600" />
                Application Timeline
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-sm">Application Deadline</p>
                    <p className="text-xs text-muted-foreground">{new Date(job.applicationDeadline).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-muted-foreground/30 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-sm">Initial Review</p>
                    <p className="text-xs text-muted-foreground">Within 1 week</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-muted-foreground/30 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-sm">Interview Process</p>
                    <p className="text-xs text-muted-foreground">2-3 rounds</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-muted-foreground/30 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-sm">Final Decision</p>
                    <p className="text-xs text-muted-foreground">Within 2 weeks</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/10 dark:to-teal-950/10 border border-emerald-200/50 dark:border-emerald-800/50 rounded-xl p-4 sm:p-6">
              <MarkdownRenderer 
                content={job.companyInfo}
                className="prose-emerald prose-sm"
              />
            </div>


            </div>
          </div>
        </div>
      </main>

      {/* Enhanced Application Form */}
      <JobApplicationForm
        job={{
          id: job.id,
          title: job.title,
          department: job.department,
          location: job.location,
        }}
        isOpen={showApplicationForm}
        onClose={() => setShowApplicationForm(false)}
      />
    </>
  );
}