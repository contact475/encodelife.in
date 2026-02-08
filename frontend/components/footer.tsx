import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-6 md:gap-10 lg:gap-20 py-8 px-4 md:py-16 md:px-16 lg:px-24 xl:px-32 text-xs md:text-[13px] text-foreground/80 bg-background">
      {/* Left section - Logo and Links in 2 columns on mobile only */}
      <div className="w-full md:w-auto">
        {/* Logo - centered on mobile, left on desktop */}
        <Link href="/" className="flex items-center space-x-2 justify-center md:justify-start mb-6">
          <img src="/logo.png" alt="Encode Life Logo" className="h-8 md:h-10 w-auto" />
          <span className="text-lg md:text-xl font-bold text-black dark:text-white">Encode Life</span>
        </Link>

        {/* Three columns on mobile, horizontal on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 md:flex md:flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-16">
          <div className="text-left md:text-left">
            <p className="text-foreground font-semibold text-sm md:text-base">Company</p>
            <ul className="mt-2 space-y-1.5 md:space-y-2">
              <li>
                <Link href="/" className="hover:text-green-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-green-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-green-500 transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-green-500 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-left md:text-left">
            <p className="text-foreground font-semibold text-sm md:text-base">Solutions</p>
            <ul className="mt-2 space-y-1.5 md:space-y-2">
              <li>
                <Link href="/pla" className="hover:text-green-500 transition">
                  PLA Technology
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-green-500 transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/circularity" className="hover:text-green-500 transition">
                  Circularity
                </Link>
              </li>
              <li>
                <Link href="/collaborations" className="hover:text-green-500 transition">
                  Collaborations
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-left md:text-left col-span-2 md:col-span-1">
            <p className="text-foreground font-semibold text-sm md:text-base">Get in Touch</p>
            <ul className="mt-2 space-y-1.5 md:space-y-2">
              <li>
                <Link href="tel:+917000017005" className="hover:text-green-500 transition">
                  +91 70000 17005
                </Link>
              </li>
              <li>
                <Link href="tel:+919873156938" className="hover:text-green-500 transition">
                  +91 98731 56938
                </Link>
              </li>
              <li>
                <Link href="mailto:contact@encodelife.in" className="hover:text-green-500 transition">
                  contact@encodelife.in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right section - Tagline, Social, Copyright */}
      <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2 w-full md:w-auto">
        <p className="max-w-60 text-foreground/90 text-xs md:text-sm">
          Transforming corn into sustainable bioplastics for a greener tomorrow.
        </p>
        <div className="flex items-center gap-3 md:gap-4 mt-2 md:mt-3">
          <Link
            href="https://www.linkedin.com/company/encode-life/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-500 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-4 md:size-5" />
          </Link>
          <Link
            href="https://www.instagram.com/encodelife.ltd"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-500 transition"
            aria-label="Instagram"
          >
            <Instagram className="size-4 md:size-5" />
          </Link>
        </div>
        <p className="mt-2 md:mt-3 text-center text-foreground/70 text-xs md:text-sm">
          © 2025{" "}
          <Link href="/" className="hover:text-green-500 transition font-semibold text-foreground">
            Encode Life
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
