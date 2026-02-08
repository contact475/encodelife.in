"use client";

import React, { useState } from "react";
import { X, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface JobApplicationFormProps {
  job: {
    id: string;
    title: string;
    department: string;
    location: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export function JobApplicationForm({ job, isOpen, onClose }: JobApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    coverLetter: '',
    experience: '',
    currentLocation: '',
    expectedSalary: '',
    noticePeriod: '',
    linkedinProfile: '',
    portfolioWebsite: '',
    referralSource: 'website',
    resumeLink: '',
  });


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };



  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.resumeLink.trim()) newErrors.resumeLink = 'Resume link is required';
    
    // Validate resume link format
    if (formData.resumeLink.trim()) {
      try {
        new URL(formData.resumeLink);
      } catch {
        newErrors.resumeLink = 'Please enter a valid URL';
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^[+]?[\d\s\-\(\)]{10,}$/;
    if (formData.phoneNumber && !phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const submitData = {
        ...formData,
        jobId: job.id,
        jobTitle: job.title,
      };

      const response = await fetch('/api/job-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setTimeout(() => {
          onClose();
          setFormData({
            fullName: '',
            email: '',
            phoneNumber: '',
            coverLetter: '',
            experience: '',
            currentLocation: '',
            expectedSalary: '',
            noticePeriod: '',
            linkedinProfile: '',
            portfolioWebsite: '',
            referralSource: 'website',
            resumeLink: '',
          });
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-background rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-border sticky top-0 bg-background">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Apply for {job.title}</h2>
              <p className="text-sm text-muted-foreground">{job.department} • {job.location}</p>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground p-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-lg flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <div>
                <p className="font-medium text-emerald-800 dark:text-emerald-200">Application Submitted Successfully!</p>
                <p className="text-sm text-emerald-600 dark:text-emerald-300">We'll review your application and get back to you soon.</p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <div>
                <p className="font-medium text-red-800 dark:text-red-200">Submission Failed</p>
                <p className="text-sm text-red-600 dark:text-red-300">Please try again or contact support if the problem persists.</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  errors.fullName ? 'border-red-500' : 'border-border'
                }`}
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  errors.email ? 'border-red-500' : 'border-border'
                }`}
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  errors.phoneNumber ? 'border-red-500' : 'border-border'
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Current Location</label>
              <input
                type="text"
                name="currentLocation"
                value={formData.currentLocation}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="City, State/Country"
              />
            </div>

            {/* Professional Information */}
            <div className="md:col-span-2 mt-6">
              <h3 className="text-lg font-semibold mb-4">Professional Information</h3>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Years of Experience</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Select experience</option>
                <option value="0-1">0-1 years</option>
                <option value="2-4">2-4 years</option>
                <option value="5-7">5-7 years</option>
                <option value="8-10">8-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Expected Salary</label>
              <input
                type="text"
                name="expectedSalary"
                value={formData.expectedSalary}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="e.g., ₹15-20 LPA"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Notice Period</label>
              <select
                name="noticePeriod"
                value={formData.noticePeriod}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Select notice period</option>
                <option value="immediate">Immediate</option>
                <option value="15-days">15 days</option>
                <option value="1-month">1 month</option>
                <option value="2-months">2 months</option>
                <option value="3-months">3 months</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">How did you hear about us?</label>
              <select
                name="referralSource"
                value={formData.referralSource}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="website">Company Website</option>
                <option value="linkedin">LinkedIn</option>
                <option value="job_portal">Job Portal</option>
                <option value="referral">Employee Referral</option>
                <option value="social_media">Social Media</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Links */}
            <div>
              <label className="block text-sm font-medium mb-2">LinkedIn Profile</label>
              <input
                type="url"
                name="linkedinProfile"
                value={formData.linkedinProfile}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Portfolio/Website</label>
              <input
                type="url"
                name="portfolioWebsite"
                value={formData.portfolioWebsite}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="https://yourportfolio.com"
              />
            </div>

            {/* Resume Link */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Resume Link *</label>
              <input
                type="url"
                name="resumeLink"
                value={formData.resumeLink}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  errors.resumeLink ? 'border-red-500' : 'border-border'
                }`}
                placeholder="Paste your Google Drive/Dropbox resume link here"
              />
              {errors.resumeLink && <p className="text-red-500 text-xs mt-1">{errors.resumeLink}</p>}
              <p className="text-xs text-muted-foreground mt-1">
                Please provide a public link to your resume (Google Drive, Dropbox, OneDrive, etc.)
              </p>
            </div>

            {/* Cover Letter */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Cover Letter</label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
              />
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 mt-8 pt-6 border-t border-border">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-border hover:bg-muted text-foreground py-3 px-4 rounded-lg transition-all"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}