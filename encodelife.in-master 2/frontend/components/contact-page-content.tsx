"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { Building2, Factory } from "lucide-react";
import { PageHeader } from "@/components/page-header";

// Reuse the contact form hook
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

export default function ContactPageContent() {
    const { loading, ok, error, submit, formRef } = useContactSubmit();
    const [isDark, setIsDark] = React.useState(false);

    React.useEffect(() => {
        // Check initial theme
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };

        checkTheme();

        // Watch for theme changes
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <PageHeader />
            <div className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="/pla-journey-1.webp"
                            alt="Contact Encode Life"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
                    </div>

                    <div className="relative z-10 h-full flex items-center justify-center px-4">
                        <div className="text-center max-w-4xl mx-auto">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-4xl md:text-5xl lg:text-7xl font-semibold italic font-newsreader text-white mb-4"
                            >
                                Get in Touch
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
                            >
                                Bringing sustainable solutions to communities worldwide
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        {/* Intro Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12 md:mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold italic font-newsreader mb-4">
                                Get in Touch
                            </h2>
                            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                                Have questions or want to collaborate? Get in touch with us — we&apos;d love to hear from you.
                            </p>
                        </motion.div>

                        {/* Office Locations - Full Width */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-12"
                        >
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {/* Head Office */}
                                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 rounded-xl bg-primary/10">
                                            <Building2 className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold mb-2">Head Office</h3>
                                            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                                                Encode Life Headquarters
                                                <br />
                                                [Address Line 1]
                                                <br />
                                                [City, State - Pincode]
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Manufacturing Plant */}
                                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 rounded-xl bg-primary/10">
                                            <Factory className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold mb-2">PLA Manufacturing Plant</h3>
                                            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                                                India&apos;s First Industrial-Scale PLA Plant
                                                <br />
                                                [Plant Address]
                                                <br />
                                                [City, State - Pincode]
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Methods - Stretched Horizontally */}
                                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                                        <a
                                            href="tel:+919873156938"
                                            className="flex flex-col items-center text-center group"
                                        >
                                            <div className="p-4 rounded-xl bg-primary/10 mb-4">
                                                <FiPhone className="w-6 h-6 text-primary" />
                                            </div>
                                            <h4 className="font-semibold mb-3 text-xs uppercase tracking-wider text-muted-foreground">Call Us</h4>
                                            <div className="space-y-1">
                                                <p className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                                                    +91 9873156938
                                                </p>
                                                <p className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                                                    +91 70000 17005
                                                </p>
                                            </div>
                                        </a>

                                        <a
                                            href="mailto:contact@encodelife.in"
                                            className="flex flex-col items-center text-center group"
                                        >
                                            <div className="p-4 rounded-xl bg-primary/10 mb-4">
                                                <FiMail className="w-6 h-6 text-primary" />
                                            </div>
                                            <h4 className="font-semibold mb-3 text-xs uppercase tracking-wider text-muted-foreground">Email</h4>
                                            <p className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors break-words">
                                                contact@encodelife.in
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form & Map - Side by Side */}
                        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="h-full"
                            >
                                <div id="contact-form" className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg h-full flex flex-col">
                                    <div className="mb-6">
                                        <h3 className="text-xl md:text-2xl font-bold mb-2">Send us a message</h3>
                                        <p className="text-sm text-muted-foreground">
                                            We&apos;ll get back within 24h.
                                        </p>
                                    </div>

                                    <form ref={formRef} onSubmit={submit} className="space-y-5">
                                        {/* Name & Email */}
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="relative">
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    placeholder="Your name"
                                                    required
                                                    className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-input bg-background text-foreground placeholder-transparent outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                                                />
                                                <label
                                                    htmlFor="name"
                                                    className="pointer-events-none absolute left-3 top-3 origin-left -translate-y-1 text-[13px] text-muted-foreground transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-[15px] peer-focus:-translate-y-1 peer-focus:text-[13px] peer-focus:text-primary"
                                                >
                                                    Your name *
                                                </label>
                                            </div>

                                            <div className="relative">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="Email"
                                                    required
                                                    className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-input bg-background text-foreground placeholder-transparent outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                                                />
                                                <label
                                                    htmlFor="email"
                                                    className="pointer-events-none absolute left-3 top-3 origin-left -translate-y-1 text-[13px] text-muted-foreground transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-[15px] peer-focus:-translate-y-1 peer-focus:text-[13px] peer-focus:text-primary"
                                                >
                                                    Email *
                                                </label>
                                            </div>
                                        </div>

                                        {/* Phone & Company */}
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="relative">
                                                <input
                                                    id="phone"
                                                    name="phone"
                                                    type="tel"
                                                    placeholder="Phone"
                                                    className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-input bg-background text-foreground placeholder-transparent outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                                                />
                                                <label
                                                    htmlFor="phone"
                                                    className="pointer-events-none absolute left-3 top-3 origin-left -translate-y-1 text-[13px] text-muted-foreground transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-[15px] peer-focus:-translate-y-1 peer-focus:text-[13px] peer-focus:text-primary"
                                                >
                                                    Phone
                                                </label>
                                            </div>

                                            <div className="relative">
                                                <input
                                                    id="company"
                                                    name="company"
                                                    type="text"
                                                    placeholder="Company"
                                                    className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-input bg-background text-foreground placeholder-transparent outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                                                />
                                                <label
                                                    htmlFor="company"
                                                    className="pointer-events-none absolute left-3 top-3 origin-left -translate-y-1 text-[13px] text-muted-foreground transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-[15px] peer-focus:-translate-y-1 peer-focus:text-[13px] peer-focus:text-primary"
                                                >
                                                    Company
                                                </label>
                                            </div>
                                        </div>

                                        {/* Reason for Contact */}
                                        <div className="relative">
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
                                        <div className="relative">
                                            <textarea
                                                id="message"
                                                name="message"
                                                placeholder="Message"
                                                required
                                                rows={5}
                                                className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-input bg-background text-foreground placeholder-transparent outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 resize-y min-h-[120px]"
                                            />
                                            <label
                                                htmlFor="message"
                                                className="pointer-events-none absolute left-3 top-3 origin-left -translate-y-1 text-[13px] text-muted-foreground transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-[15px] peer-focus:-translate-y-1 peer-focus:text-[13px] peer-focus:text-primary"
                                            >
                                                Message *
                                            </label>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={loading || ok}
                                            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                        >
                                            {loading ? (
                                                <>
                                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                            fill="none"
                                                        />
                                                        <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                                        />
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : ok ? (
                                                <>
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Message Sent!
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M13.293 4.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L17.586 12l-4.293-4.293a1 1 0 010-1.414z" />
                                                    </svg>
                                                </>
                                            )}
                                        </button>

                                        {/* Error Message */}
                                        {error && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm dark:bg-red-900/20 dark:border-red-800 dark:text-red-200"
                                            >
                                                <strong>Error:</strong> {error}
                                            </motion.div>
                                        )}
                                    </form>
                                </div>
                            </motion.div>

                            {/* Google Map */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg h-full flex flex-col">
                                    <div className="mb-6">
                                        <h3 className="text-xl md:text-2xl font-bold mb-2">Find Us Here</h3>
                                        <a
                                            href="https://www.google.com/maps/search/?api=1&query=28.709972,77.157667"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-primary hover:underline flex items-center gap-2 w-fit"
                                        >
                                            <FiMapPin className="w-4 h-4" />
                                            Click to open location in Google Maps
                                        </a>
                                    </div>
                                    <div className="relative w-full flex-1 min-h-[400px] rounded-xl overflow-hidden">
                                        <iframe
                                            src={`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3501.0234567890!2d77.15766666547852!3d28.709972382404567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQyJzM1LjkiTiA3N8KwMDknMjcuNiJF!5e0!3m2!1sen!2sin!4v1234567890123${isDark ? '&style=feature:all|element:geometry|color:0x242f3e&style=feature:all|element:labels.text.stroke|color:0x242f3e&style=feature:all|element:labels.text.fill|color:0x746855&style=feature:administrative.locality|element:labels.text.fill|color:0xd59563&style=feature:poi|element:labels.text.fill|color:0xd59563&style=feature:poi.park|element:geometry|color:0x263c3f&style=feature:poi.park|element:labels.text.fill|color:0x6b9a76&style=feature:road|element:geometry|color:0x38414e&style=feature:road|element:geometry.stroke|color:0x212a37&style=feature:road|element:labels.text.fill|color:0x9ca5b3&style=feature:road.highway|element:geometry|color:0x746855&style=feature:road.highway|element:geometry.stroke|color:0x1f2835&style=feature:road.highway|element:labels.text.fill|color:0xf3d19c&style=feature:transit|element:geometry|color:0x2f3948&style=feature:transit.station|element:labels.text.fill|color:0xd59563&style=feature:water|element:geometry|color:0x17263c&style=feature:water|element:labels.text.fill|color:0x515c6d&style=feature:water|element:labels.text.stroke|color:0x17263c' : ''}`}
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="rounded-xl"
                                        />
                                    </div>
                                    <div className="mt-4 flex items-center justify-between text-sm">
                                        <a
                                            href="https://www.google.com/maps/search/?api=1&query=28.709972,77.157667"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline flex items-center gap-1"
                                        >
                                            <FiMapPin className="w-4 h-4" />
                                            Open in Google Maps
                                        </a>
                                        <button
                                            onClick={() => {
                                                navigator.clipboard.writeText("28°42'35.9\"N 77°09'27.6\"E");
                                            }}
                                            className="text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            Copy Coordinates
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="py-12 md:py-16 px-4 bg-muted/30">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg">
                            <div className="flex items-center justify-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold italic font-newsreader mb-3">
                                Stay Connected with Encode Life
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                Join Our Sustainability Movement!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter Email Address"
                                    className="flex-1 px-4 py-3 rounded-xl border border-input bg-background text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                                />
                                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all whitespace-nowrap">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </div>
        </>
    );
}
