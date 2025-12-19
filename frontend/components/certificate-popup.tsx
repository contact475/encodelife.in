"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, Download, Linkedin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CertificatePopupProps {
  /** Delay in milliseconds before showing popup (default: 5000ms) */
  delay?: number;
  /** Show after scrolling X pixels (default: 800px) */
  scrollThreshold?: number;
}

interface FormData {
  name: string;
  email: string;
  mobile: string;
  field: string;
}

export function CertificatePopup({ 
  delay = 5000, 
  scrollThreshold = 800 
}: CertificatePopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [step, setStep] = useState<"form" | "certificate">("form");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    field: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    // Check if user has completed the form
    const hasCompleted = localStorage.getItem("certificate-form-completed");
    if (hasCompleted === "true") {
      setIsCompleted(true);
      return;
    }

    // Check if user has dismissed the popup before
    const hasDismissed = localStorage.getItem("certificate-popup-dismissed");
    if (hasDismissed === "true") {
      return;
    }

    let hasScrolled = false;

    // Show after delay
    const timeoutId = setTimeout(() => {
      if (!hasScrolled && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    }, delay);

    // Show after scroll
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold && !hasShown) {
        hasScrolled = true;
        clearTimeout(timeoutId);
        setIsOpen(true);
        setHasShown(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [delay, scrollThreshold, hasShown]);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/\s/g, ""))) {
      newErrors.mobile = "Invalid mobile number (10 digits required)";
    }

    if (!formData.field.trim()) {
      newErrors.field = "Field is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Certificate claim data:", formData);

    // Mark as completed
    localStorage.setItem("certificate-form-completed", "true");
    setIsCompleted(true);

    setLoading(false);
    setStep("certificate");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/sample-certificate.pdf";
    link.download = `Encode-Life-Certificate-${formData.name.replace(/\s/g, "-")}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLinkedInShare = () => {
    const certificateUrl = encodeURIComponent(window.location.origin + "/certificate");
    const text = encodeURIComponent(
      `I'm proud to have received a certificate from Encode Life - India's first industrial-scale PLA biopolymer plant! 🌱 #Sustainability #BioplasticsRevolution #EncodeLife`
    );
    
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${certificateUrl}&summary=${text}`;
    window.open(linkedInUrl, "_blank", "width=600,height=600");
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
    localStorage.setItem("certificate-popup-dismissed", "true");
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleStickyButtonClick = () => {
    setIsOpen(true);
    if (isCompleted) {
      setStep("certificate");
    } else {
      setStep("form");
    }
  };

  return (
    <>
      {/* Sticky Button - Always visible */}
      <motion.button
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={handleStickyButtonClick}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-primary text-primary-foreground px-2 py-3 sm:px-3 sm:py-4 md:px-3 md:py-6 rounded-l-xl shadow-lg hover:shadow-xl transition-all hover:px-3 sm:hover:px-4 md:hover:px-4 group"
        aria-label="Claim Certificate"
      >
        <div className="flex flex-col items-center gap-1 sm:gap-1.5 md:gap-2">
          <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          <span 
            className="text-[9px] sm:text-[10px] md:text-xs font-semibold whitespace-nowrap" 
            style={{ writingMode: 'vertical-rl', transform: 'rotate(0deg)' }}
          >
            Sustainability Awaiting
          </span>
        </div>
      </motion.button>

      {/* Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
              onClick={handleClose}
            >
              {/* Popup Container - Centered with Flexbox */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-[340px] sm:max-w-[400px] md:max-w-md lg:max-w-lg max-h-[90vh] overflow-y-auto relative"
              >
                <div className="bg-card border-2 border-primary/20 rounded-2xl shadow-2xl overflow-hidden">
                  {/* Close Button */}
                  <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-1.5 sm:p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  {step === "form" ? (
                    <div className="p-5 sm:p-6 md:p-8">
                      {/* Header */}
                      <div className="text-center mb-5 sm:mb-6">
                        <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 mb-3 sm:mb-4">
                          <Award className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold italic font-newsreader mb-2">
                          Claim Your Certificate
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base text-muted-foreground px-2">
                          Join the sustainable revolution and get recognized for your interest in bioplastics innovation
                        </p>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                        {/* Name */}
                        <div>
                          <label htmlFor="cert-name" className="block text-xs sm:text-sm font-medium mb-1.5">
                            Full Name *
                          </label>
                          <input
                            id="cert-name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className="w-full px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base rounded-xl border border-input bg-background text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                            placeholder="Enter your full name"
                          />
                          {errors.name && (
                            <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="cert-email" className="block text-xs sm:text-sm font-medium mb-1.5">
                            Email Address *
                          </label>
                          <input
                            id="cert-email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="w-full px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base rounded-xl border border-input bg-background text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                            placeholder="your.email@example.com"
                          />
                          {errors.email && (
                            <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                          )}
                        </div>

                        {/* Mobile */}
                        <div>
                          <label htmlFor="cert-mobile" className="block text-xs sm:text-sm font-medium mb-1.5">
                            Mobile Number *
                          </label>
                          <input
                            id="cert-mobile"
                            type="tel"
                            value={formData.mobile}
                            onChange={(e) => handleInputChange("mobile", e.target.value)}
                            className="w-full px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base rounded-xl border border-input bg-background text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                            placeholder="9876543210"
                          />
                          {errors.mobile && (
                            <p className="text-xs text-red-500 mt-1">{errors.mobile}</p>
                          )}
                        </div>

                        {/* Field */}
                        <div>
                          <label htmlFor="cert-field" className="block text-xs sm:text-sm font-medium mb-1.5">
                            Field of Work *
                          </label>
                          <select
                            id="cert-field"
                            value={formData.field}
                            onChange={(e) => handleInputChange("field", e.target.value)}
                            className="w-full px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base rounded-xl border border-input bg-background text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer"
                          >
                            <option value="">Select your field</option>
                            <option value="Student">Student</option>
                            <option value="Research & Development">Research & Development</option>
                            <option value="Manufacturing">Manufacturing</option>
                            <option value="Sustainability">Sustainability</option>
                            <option value="Business & Entrepreneurship">Business & Entrepreneurship</option>
                            <option value="Marketing & Sales">Marketing & Sales</option>
                            <option value="Education">Education</option>
                            <option value="Government & Policy">Government & Policy</option>
                            <option value="Other">Other</option>
                          </select>
                          {errors.field && (
                            <p className="text-xs text-red-500 mt-1">{errors.field}</p>
                          )}
                        </div>

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          disabled={loading}
                          className="w-full h-11 sm:h-12 text-sm sm:text-base font-semibold mt-5"
                        >
                          {loading ? (
                            <>
                              <svg
                                className="animate-spin h-5 w-5 mr-2"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <circle
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                  className="opacity-25"
                                />
                                <path
                                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                  fill="currentColor"
                                  className="opacity-75"
                                />
                              </svg>
                              Processing...
                            </>
                          ) : (
                            <>
                              Get Certificate
                              <Award className="w-5 h-5 ml-2" />
                            </>
                          )}
                        </Button>
                      </form>

                      {/* Footer Note */}
                      <p className="text-[10px] sm:text-xs text-muted-foreground text-center mt-4">
                        Your information will be securely stored and used only for certificate generation
                      </p>
                    </div>
                  ) : (
                    <div className="p-5 sm:p-6 md:p-8">
                      {/* Success Header */}
                      <div className="text-center mb-5 sm:mb-6">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", delay: 0.2 }}
                          className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500/10 mb-3 sm:mb-4"
                        >
                          <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-green-500" />
                        </motion.div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold italic font-newsreader mb-2">
                          Congratulations, {formData.name.split(" ")[0]}!
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                          Your certificate is ready to download
                        </p>
                      </div>

                      {/* Certificate Preview */}
                      <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-4 sm:p-6 mb-5 sm:mb-6 border border-primary/20">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="flex-shrink-0">
                            <Award className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-base sm:text-lg mb-1">
                              Certificate of Recognition
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground">
                              Issued to <strong>{formData.name}</strong>
                            </p>
                            <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                              For showing interest in sustainable bioplastics innovation
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-2.5 sm:space-y-3">
                        <Button
                          onClick={handleDownload}
                          className="w-full h-11 sm:h-12 text-sm sm:text-base font-semibold"
                        >
                          <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                          Download Certificate
                        </Button>

                        <Button
                          onClick={handleLinkedInShare}
                          variant="outline"
                          className="w-full h-11 sm:h-12 text-sm sm:text-base font-semibold"
                        >
                          <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                          Share on LinkedIn
                        </Button>
                      </div>

                      {/* Footer Note */}
                      <p className="text-[10px] sm:text-xs text-muted-foreground text-center mt-4">
                        Thank you for being part of the sustainable revolution! 🌱
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
