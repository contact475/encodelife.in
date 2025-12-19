import { Metadata } from "next";
import JobListingsPageContent from "@/components/job-listings-page-content";

export const metadata: Metadata = {
  title: "Open Positions - Join Our Team | Encode Life",
  description:
    "Explore current job openings at Encode Life. Find your perfect role in biotechnology, manufacturing, R&D, and more. Join India's first industrial-scale PLA plant.",
  keywords: [
    "job openings",
    "careers",
    "biotech jobs",
    "PLA manufacturing jobs",
    "research positions",
    "India jobs",
    "Encode Life careers",
  ],
};

export default function JobListingsPage() {
  return <JobListingsPageContent />;
}
