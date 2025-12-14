import Link from "next/link";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-6 md:gap-10 lg:gap-20 py-8 px-4 md:py-16 md:px-16 lg:px-24 xl:px-32 text-xs md:text-[13px] text-gray-500 dark:text-gray-500 bg-background dark:bg-background">
      {/* Left section - Logo and Links in 2 columns on mobile only */}
      <div className="w-full md:w-auto">
        {/* Logo - centered on mobile, left on desktop */}
        <Link href="/" className="flex items-center space-x-2 justify-center md:justify-start mb-6">
          <img src="/logo.png" alt="Encode Life Logo" className="h-8 md:h-10 w-auto" />
          <span className="text-lg md:text-xl font-bold text-black dark:text-white">Encode Life</span>
        </Link>

        {/* Two columns on mobile, horizontal on desktop */}
        <div className="grid grid-cols-2 md:flex md:flex-row gap-6 md:gap-10 lg:gap-[60px] xl:gap-[140px]">
          <div className="text-left md:text-left">
            <p className="text-slate-900 dark:text-slate-100 font-semibold text-sm md:text-base">Quick Links</p>
            <ul className="mt-2 space-y-1.5 md:space-y-2">
              <li>
                <Link href="/#about" className="hover:text-green-500 transition">
                  About Us
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
            <p className="text-slate-900 dark:text-slate-100 font-semibold text-sm md:text-base">Call Us</p>
            <ul className="mt-2 space-y-1.5 md:space-y-2">
              <li>
                <Link href="tel:+919873156938" className="hover:text-green-500 transition">
                  +91 9873156938
                </Link>
              </li>
              <li>
                <Link href="tel:+917000017005" className="hover:text-green-500 transition">
                  +91 70000 17005
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
        <p className="max-w-60 text-slate-600 dark:text-slate-300 text-xs md:text-sm">
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
        </div>
        <p className="mt-2 md:mt-3 text-center text-slate-500 dark:text-slate-400 text-xs md:text-sm">
          © 2025{" "}
          <Link href="/" className="hover:text-green-500 transition font-semibold">
            Encode Life
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
