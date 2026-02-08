"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export interface PLAProductCardProps {
  grade: string;
  appearance: string;
  technicalSpecs: {
    density: string;
    moisture: string;
    monomerContent: string;
    mfi: string;
    dContent: string;
    meltingTemp: string;
    glassTransition: string;
    tensileStrength: string;
    elongation: string;
  };
  description: string;
  applications: string[];
}

export function PLAProductCard({
  grade,
  technicalSpecs,
  description,
  applications,
}: PLAProductCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative h-[560px] w-full [perspective:2000px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative h-full w-full",
          "[transform-style:preserve-3d]",
          "transition-all duration-700",
          isFlipped
            ? "[transform:rotateY(180deg)]"
            : "[transform:rotateY(0deg)]"
        )}
      >
        {/* Front of card - Technical Specs */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[transform:rotateY(0deg)] [backface-visibility:hidden]",
            "overflow-hidden rounded-2xl",
            "bg-card border border-border",
            "shadow-lg",
            "transition-all duration-700",
            "hover:shadow-xl",
            "hover:border-green-500/50",
            "flex flex-col",
            isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          {/* Image Preview */}
          <div className="relative h-44 overflow-hidden flex-shrink-0">
            <img
              src="/image5.webp"
              alt={grade}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 truncate">
                {grade}
              </h3>
              <p className="text-sm text-white/80">Technical Specifications</p>
            </div>
          </div>

          <div className="p-5 flex-1 flex flex-col overflow-hidden">
            {/* Technical Specs Table */}
            <div className="flex-1 overflow-y-auto space-y-2 text-sm md:text-base">
              <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                <div className="text-muted-foreground truncate">Density:</div>
                <div className="font-medium text-foreground truncate">{technicalSpecs.density}</div>
                
                <div className="text-muted-foreground truncate">Moisture:</div>
                <div className="font-medium text-foreground truncate">{technicalSpecs.moisture}</div>
                
                <div className="text-muted-foreground truncate">Monomer:</div>
                <div className="font-medium text-foreground truncate">{technicalSpecs.monomerContent}</div>
                
                <div className="text-muted-foreground truncate">MFI:</div>
                <div className="font-medium text-foreground truncate">{technicalSpecs.mfi}</div>
                
                <div className="text-muted-foreground truncate">D-content:</div>
                <div className="font-medium text-foreground truncate">{technicalSpecs.dContent}</div>
                
                <div className="text-muted-foreground truncate">Melting Temp:</div>
                <div className="font-medium text-foreground truncate">{technicalSpecs.meltingTemp}</div>
                
                <div className="text-muted-foreground truncate">Glass Trans:</div>
                <div className="font-medium text-foreground truncate">{technicalSpecs.glassTransition}</div>
                
                <div className="text-muted-foreground truncate">Tensile:</div>
                <div className="font-medium text-foreground truncate">{technicalSpecs.tensileStrength}</div>
                
                <div className="text-muted-foreground truncate">Elongation:</div>
                <div className="font-medium text-foreground truncate">{technicalSpecs.elongation}</div>
              </div>
            </div>

            {/* Hover to flip indicator */}
            <div className="mt-3 pt-3 border-t border-border flex-shrink-0">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                  <path d="M21 3v5h-5" />
                </svg>
                <span className="truncate">Hover to see applications</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card - Description & Applications */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[transform:rotateY(180deg)] [backface-visibility:hidden]",
            "rounded-2xl",
            "bg-gradient-to-br from-green-500/10 via-card to-emerald-500/10",
            "border border-green-500/30",
            "shadow-lg",
            "flex flex-col",
            "transition-all duration-700",
            "hover:shadow-xl",
            "overflow-hidden",
            !isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          {/* Image Preview */}
          <div className="relative h-44 overflow-hidden flex-shrink-0">
            <img
              src="/image6.webp"
              alt={grade}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/50 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 truncate">
                {grade}
              </h3>
              <div className="w-12 h-1 bg-white/80 rounded-full"></div>
            </div>
          </div>

          <div className="p-5 flex-1 flex flex-col overflow-hidden">
            {/* Description */}
            <div className="flex-1 overflow-y-auto">
              <p className="text-sm md:text-base text-foreground leading-relaxed mb-4">
                {description}
              </p>

              {/* Applications */}
              <div>
                <h4 className="text-base md:text-lg font-semibold text-foreground mb-3">
                  Key Applications:
                </h4>
                <div className="space-y-2.5">
                  {applications.map((app, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2.5 text-sm md:text-base"
                      style={{
                        transform: isFlipped ? "translateX(0)" : "translateX(-10px)",
                        opacity: isFlipped ? 1 : 0,
                        transitionDelay: `${index * 100 + 200}ms`,
                        transition: "all 0.5s",
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                      <span className="text-foreground leading-relaxed">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hover indicator */}
            <div className="mt-3 pt-3 border-t border-green-500/20 flex-shrink-0">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                  <path d="M21 3v5h-5" />
                </svg>
                <span className="truncate">Hover to see specifications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
