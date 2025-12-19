import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemedClickSpark } from "@/components/themed-click-spark";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["600"],
  style: ["italic"],
});

const ozean = localFont({
  src: "../fonts/ozean.ttf",
  variable: "--font-ozean",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Encode Life - Empowering India's Biotech Sector | 500+ Jobs | Special PLA Blends",
  description: "India's first industrial-scale PLA plant creating 500+ jobs for freshers. Developing special PLA blends through industry collaboration with complete end-of-life solutions for circular economy.",
  keywords: ["PLA", "bioplastics", "biotechnology jobs", "freshers jobs", "industry collaboration", "special PLA blends", "end-of-life solutions", "circular economy", "IIT Guwahati", "INST Mohali", "India", "Encode Life"],
  authors: [{ name: "Encode Life" }],
  openGraph: {
    title: "Encode Life - Empowering India's Biotech Sector",
    description: "Creating 500+ jobs, developing special PLA blends, and pioneering end-of-life solutions for sustainable future.",
    url: "https://encodelife.in",
    siteName: "Encode Life",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Encode Life - Empowering India's Biotech Sector",
    description: "Creating 500+ jobs and developing special PLA blends with complete end-of-life solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ozean.variable} ${newsreader.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ThemedClickSpark>
            {children}
          </ThemedClickSpark>
        </ThemeProvider>
      </body>
    </html>
  );
}
