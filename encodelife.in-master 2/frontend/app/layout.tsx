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
  title: "Encode Life - Sustainable Bioplastics | India's First PLA Plant",
  description: "India's first industrial-scale PLA biopolymer plant. Transforming corn into sustainable bioplastics, powered by 100% renewable energy. Creating a circular economy for a greener tomorrow.",
  keywords: ["PLA", "bioplastics", "sustainable", "renewable energy", "circular economy", "corn", "India", "Encode Life"],
  authors: [{ name: "Encode Life" }],
  openGraph: {
    title: "Encode Life - Sustainable Bioplastics",
    description: "India's first industrial-scale PLA biopolymer plant. Transforming corn into sustainable bioplastics.",
    url: "https://encodelife.in",
    siteName: "Encode Life",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Encode Life - Sustainable Bioplastics",
    description: "India's first industrial-scale PLA biopolymer plant",
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
            <Footer />
          </ThemedClickSpark>
        </ThemeProvider>
      </body>
    </html>
  );
}
