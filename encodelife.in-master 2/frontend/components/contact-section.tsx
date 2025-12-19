"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail } from "react-icons/fi";
import { ThemedClickSpark } from "./themed-click-spark";

const sectionBg =
  "relative py-18 sm:py-24 bg-background";

const container = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

const card =
  "relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-border dark:shadow-2xl";

const cardWithBg = `${card}`;

const input =
  "peer block w-full rounded-xl border border-input bg-background px-4 pt-5 pb-2 text-[15px] text-foreground placeholder-transparent outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30";

const textArea = `${input} resize-y min-h-[120px]`;

const floatLabel =
  "pointer-events-none absolute left-3 top-3 z-10 origin-left -translate-y-1 text-[13px] text-muted-foreground transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-[15px] peer-placeholder-shown:text-muted-foreground peer-focus:-translate-y-1 peer-focus:text-[13px] peer-focus:text-primary";

const btn =
  "group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-lg transition hover:bg-primary/90 active:scale-[.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const pill =
  "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground shadow-sm transition hover:bg-accent";

const methods = [
  {
    icon: FiPhone,
    title: "Call us",
    lines: ["+91 9873156938", "+91 70000 17005"],
    href: "tel:+919873156938",
  },
  {
    icon: FiMail,
    title: "Email",
    lines: ["contact@encodelife.in"],
    href: "mailto:contact@encodelife.in",
  },
];

function useContactSubmit() {
  const [loading, setLoading] = React.useState(false);
  const [ok, setOk] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const formRef = React.useRef<HTMLFormElement>(null);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setOk(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      reason: formData.get('reason') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setOk(true);
      if (formRef.current) {
        formRef.current.reset();
      }
      setTimeout(() => setOk(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
      setTimeout(() => setError(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  return { loading, ok, error, submit, formRef };
}

export default function Contact2() {
  const { loading, ok, error, submit, formRef } = useContactSubmit();

  return (
    <ThemedClickSpark>
      <section id="contact-section" className={sectionBg}>
        <div className={container}>
        <div className="grid grid-cols-1 items-start gap-6 md:gap-10 lg:grid-cols-2">
          {/* LEFT: pitch + methods */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="order-1 lg:order-1"
          >
            <h2 className="text-pretty text-3xl md:text-4xl md:text-5xl lg:text-6xl font-semibold italic font-newsreader tracking-tight text-foreground">
              Let&apos;s Connect
            </h2>
            <p className="mt-2 md:mt-3 max-w-xl text-sm md:text-[17px] leading-relaxed text-muted-foreground">
              Have questions about PLA bioplastics or interested in partnership opportunities? 
              We&apos;re here to help and typically respond within 24 hours.
            </p>

            <div className="mt-4 md:mt-6 flex flex-wrap gap-2 md:gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-primary/10 px-3 py-1.5 text-sm text-primary shadow-sm transition hover:bg-primary/20">24h response SLA</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-primary/10 px-3 py-1.5 text-sm text-primary shadow-sm transition hover:bg-primary/20">Global team</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-primary/10 px-3 py-1.5 text-sm text-primary shadow-sm transition hover:bg-primary/20">No sales fluff</span>
            </div>

            <div className="mt-6 md:mt-10 grid grid-cols-1 gap-3 md:gap-5 sm:grid-cols-2">
              {methods.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className={`${cardWithBg} p-4 md:p-6 hover:shadow-xl transition-shadow bg-card`}
                >
                  <div className="flex items-start gap-3 md:gap-5">
                    <div className="flex h-10 w-10 md:h-14 md:w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <m.icon className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2 md:mb-3">
                        {m.title}
                      </p>
                      {m.lines.map((l, idx) => (
                        m.href && idx === 0 ? (
                          <a
                            key={l}
                            href={m.href}
                            className="block mb-1 md:mb-2 text-sm md:text-base font-semibold text-foreground hover:text-primary transition-colors"
                          >
                            {l}
                          </a>
                        ) : (
                          <p
                            key={l}
                            className="mb-1 md:mb-2 text-sm md:text-base font-semibold text-foreground"
                          >
                            {l}
                          </p>
                        )
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 lg:order-2"
          >
            <div className={`${cardWithBg} p-4 sm:p-6 sm:p-8 lg:p-10 bg-card`}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                    Send us a message
                  </h3>
                  <p className="mt-1 text-xs md:text-sm text-muted-foreground">
                    We&apos;ll get back within 24h.
                  </p>
                </div>
                <span className="hidden rounded-full bg-emerald-50 px-2 md:px-3 py-1 md:py-1.5 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200 sm:block dark:bg-emerald-400/10 dark:text-emerald-300 dark:ring-emerald-400/20">
                  Online now
                </span>
              </div>

              <form
                ref={formRef}
                onSubmit={submit}
                className="mt-5 md:mt-8 grid grid-cols-1 gap-4 md:gap-5 sm:grid-cols-2"
              >
                {/* Name */}
                <div className="relative">
                  <input 
                    id="name" 
                    name="name"
                    placeholder="Your name" 
                    className={input}
                    required
                  />
                  <label htmlFor="name" className={floatLabel}>
                    Your name *
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className={input}
                    required
                  />
                  <label htmlFor="email" className={floatLabel}>
                    Email *
                  </label>
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    className={input}
                  />
                  <label htmlFor="phone" className={floatLabel}>
                    Phone
                  </label>
                </div>

                {/* Company */}
                <div className="relative">
                  <input 
                    id="company" 
                    name="company"
                    placeholder="Company" 
                    className={input} 
                  />
                  <label htmlFor="company" className={floatLabel}>
                    Company
                  </label>
                </div>

                {/* Reason for Contact */}
                <div className="relative sm:col-span-2">
                  <select
                    id="reason"
                    name="reason"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>Select reason for contact *</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Partnership">Partnership Opportunity</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Support">Technical Support</option>
                    <option value="Investment">Investment Inquiry</option>
                    <option value="Media">Media & Press</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                    <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Message */}
                <div className="relative sm:col-span-2">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    className={textArea}
                    required
                  />
                  <label htmlFor="message" className={floatLabel}>
                    Message *
                  </label>
                </div>

                <div className="sm:col-span-2">
                  <button 
                    type="submit" 
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-white shadow-lg transition hover:opacity-90 active:scale-[.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    style={{ background: 'linear-gradient(135deg, #ff9913 0%, #ff6b35 100%)' }}
                    disabled={loading || ok}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
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
                        Sending…
                      </>
                    ) : ok ? (
                      <>
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Message Sent!
                      </>
                    ) : error ? (
                      <>
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M15 9l-6 6M9 9l6 6" strokeLinecap="round" />
                        </svg>
                        Try Again
                      </>
                    ) : (
                      <>
                        Send message
                        <svg
                          className="h-4 w-4 transition group-hover:translate-x-0.5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M13.293 4.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L17.586 12l-4.293-4.293a1 1 0 010-1.414z" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Error message below form */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200"
                >
                  <strong>Error:</strong> {error}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </ThemedClickSpark>
  );
}
