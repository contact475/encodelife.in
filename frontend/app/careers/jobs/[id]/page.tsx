import { Metadata } from "next";
import JobDetailsPageContent from "@/components/job-details-page-content";

interface JobDetailsPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: JobDetailsPageProps): Promise<Metadata> {
  // In a real app, you'd fetch the job data here
  return {
    title: `Job Details - Encode Life`,
    description: "Detailed information about this position at Encode Life. Join India's first industrial-scale PLA plant.",
    keywords: [
      "job details",
      "career opportunity",
      "biotech jobs",
      "PLA manufacturing",
      "Encode Life careers",
    ],
  };
}

export default function JobDetailsPage({ params }: JobDetailsPageProps) {
  return <JobDetailsPageContent jobId={params.id} />;
}