"use client"

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { GripVertical } from "lucide-react";
import { useScroll } from "framer-motion";

function Feature() {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);
  const [hasReachedEnd, setHasReachedEnd] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Auto-slide based on scroll - fluid animation, stays at end once reached
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (!onMouseDown && !hasReachedEnd) {
        // Smooth fluid animation
        const sliderPosition = Math.max(0, Math.min(100, latest * 150));
        setInset(sliderPosition);
        
        // Once it reaches 100%, lock it there
        if (sliderPosition >= 99) {
          setHasReachedEnd(true);
          setInset(100);
        }
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, onMouseDown, hasReachedEnd]);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }
    
    const percentage = (x / rect.width) * 100;
    setInset(percentage);
  };

  return (
    <div className="w-full py-12 md:py-20 lg:py-24">
      <div ref={containerRef} className="relative w-full">
        <div className="flex items-center justify-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="w-full max-w-5xl mx-auto relative">
              {/* Title Overlay - Always on top */}
              <div className="mb-8 md:mb-12 flex flex-col gap-3 md:gap-4 text-center items-center">
                <Badge>The Difference</Badge>
                <div className="flex gap-2 flex-col items-center">
                  <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold italic font-newsreader text-foreground">
                    See The Impact
                  </h2>
                  <p className="text-base md:text-lg max-w-2xl leading-relaxed text-muted-foreground px-4">
                    Drag to compare traditional plastics with sustainable PLA bioplastics.
                  </p>
                </div>
              </div>
            <div
              className="relative aspect-video w-full h-full overflow-hidden rounded-2xl select-none"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
            >
              <div
                className="bg-muted h-full w-1 absolute z-20 top-0 -ml-1 select-none"
                style={{
                  left: inset + "%",
                }}
              >
                <button
                  className="bg-muted rounded hover:scale-110 transition-all w-5 h-10 select-none -translate-y-1/2 absolute top-1/2 -ml-2 z-30 cursor-ew-resize flex justify-center items-center"
                  onTouchStart={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onMouseDown={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onTouchEnd={() => setOnMouseDown(false)}
                  onMouseUp={() => setOnMouseDown(false)}
                >
                  <GripVertical className="h-4 w-4 select-none" />
                </button>
              </div>
              {/* Right Image - PLA Solution (Background) */}
              <div className="absolute left-0 top-0 w-full h-full">
                <Image
                  src="/imageright.webp"
                  alt="PLA bioplastic composting naturally - sustainable solution"
                  width={1920}
                  height={1080}
                  priority
                  className="w-full h-full aspect-video rounded-2xl select-none border object-cover"
                />
                {/* "With PLA" text - Bottom left, always visible */}
                <div className="absolute bottom-8 left-8 pointer-events-none">
                  <h3 className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_4px_16px_rgba(0,0,0,1)] mb-2">
                    With PLA
                  </h3>
                  <p className="text-lg md:text-xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
                    Sustainable Future
                  </p>
                </div>
              </div>

              {/* Left Image - Traditional Plastic Problem (Slides from left) */}
              <div 
                className="absolute left-0 top-0 z-10 w-full h-full"
                style={{
                  clipPath: "inset(0 0 0 " + inset + "%)",
                }}
              >
                <Image
                  src="/imageleft.webp"
                  alt="Traditional plastic pollution - environmental impact"
                  width={1920}
                  height={1080}
                  priority
                  className="w-full h-full aspect-video rounded-2xl select-none border object-cover"
                />
                {/* "Without PLA" text - Top right, fades out as slider moves */}
                <div 
                  className="absolute top-8 right-8 pointer-events-none transition-opacity duration-300"
                  style={{ opacity: inset < 95 ? 1 : 0 }}
                >
                  <div className="text-right">
                    <h3 className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_4px_16px_rgba(0,0,0,1)] mb-2">
                      Without PLA
                    </h3>
                    <p className="text-lg md:text-xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
                      Environmental Crisis
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
