"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Clock, ArrowRight, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Featured jobs - currently empty, no active positions
const featuredJobs: Array<{
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  postedDate: string;
  description: string;
}> = [];

export function OpenPositionsPreview() {
  return (
    <section id="open-positions" className="py-16 md:py-24 lg:py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold italic font-newsreader mb-4">
              Featured Opportunities
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
              Explore current openings and find your perfect role in India's biotech revolution
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
          </motion.div>
        </div>

        {/* Jobs Grid or Empty State */}
        <div className="mb-12">
          {featuredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/careers/jobs/${job.id}`}>
                    <div className="group h-full rounded-2xl border border-border bg-card p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:border-green-500/50 hover:-translate-y-1">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                            {job.title}
                          </h3>
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                            <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                              {job.department}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="h-6 w-6 text-green-600 dark:text-green-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {job.description}
                      </p>

                      {/* Details */}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{job.experience}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.postedDate}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center py-16 px-6 rounded-2xl border border-border bg-card"
            >
              <Briefcase className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-2xl font-semibold mb-2">No Active Positions</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                We currently have no open positions. Check back soon for new opportunities, or reach out to express your interest in joining our team.
              </p>
            </motion.div>
          )}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Stay Connected
            </h3>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              While we don't have any open positions at the moment, we're always interested in connecting with talented individuals.
              Submit your resume for future opportunities or reach out to learn more about our mission.
            </p>
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full px-8 text-base"
            >
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
