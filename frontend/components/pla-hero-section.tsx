"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronRight, ArrowDown } from "lucide-react";
import { useScroll, motion } from "framer-motion";

export function PLAHeroSection() {
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.02);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <main className="overflow-x-hidden">
        <section className="relative w-full">
          <div className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
            <div
              className={cn(
                "absolute inset-0 overflow-hidden transition-all duration-300",
                scrolled && "md:rounded-b-[3rem]"
              )}
            >
              <img
                src="/image1.webp"
                alt="PLA Bioplastics - Sustainable Future"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
            </div>
            <div className="relative z-10 flex items-center justify-center h-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] px-6 lg:px-12">
              <div className="mx-auto max-w-7xl w-full text-center pt-20 md:pt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="max-w-4xl mx-auto text-balance text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-foreground">
                    Polylactic Acid (PLA)
                  </h1>
                  <p className="mt-4 md:mt-6 max-w-3xl mx-auto text-balance text-lg sm:text-xl md:text-2xl font-semibold italic font-newsreader text-foreground/90">
                    Driving India&apos;s Biotech Revolution
                  </p>
                  <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-balance text-base sm:text-lg text-muted-foreground">
                    Bio-based, compostable polymer from renewable corn. Creating jobs for freshers, developing special PLA blends, 
                    and pioneering end-of-life solutions for a truly circular bioeconomy.
                  </p>

                  <div className="mt-8 md:mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Button
                      asChild
                      size="lg"
                      className="w-full sm:w-auto h-12 rounded-full pl-5 pr-3 text-base"
                    >
                      <a
                        href="#intro"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById("intro")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }}
                      >
                        <span className="text-nowrap">Learn More</span>
                        <ChevronRight className="ml-1" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto h-12 rounded-full px-5 text-base"
                    >
                      <Link href="/contact">
                        <span className="text-nowrap">Get in Touch</span>
                      </Link>
                    </Button>
                  </div>

                  {/* Scroll indicator */}
                  <motion.div
                    className="mt-12 md:mt-16 flex justify-center"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowDown className="w-6 h-6 text-muted-foreground" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


