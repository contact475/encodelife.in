"use client";

import { cn } from "@/lib/utils";
import { Check, LucideIcon } from "lucide-react";
import { useState } from "react";

export interface ProductFlipCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  image?: string;
}

export function ProductFlipCard({
  title,
  subtitle,
  description,
  features,
  icon: Icon,
  image,
}: ProductFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative h-[400px] w-full [perspective:2000px]"
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
        {/* Front of card */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[transform:rotateY(0deg)] [backface-visibility:hidden]",
            "overflow-hidden rounded-2xl",
            "bg-card border border-border",
            "shadow-lg",
            "transition-all duration-700",
            "group-hover:shadow-xl",
            "group-hover:border-green-500/50",
            isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          {/* Background Image */}
          {image && (
            <div className="absolute inset-0">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
            </div>
          )}

          {/* Icon */}
          <div className="absolute top-6 left-6">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 backdrop-blur-sm flex items-center justify-center border border-green-500/30">
              <Icon className="w-6 h-6 text-green-400" />
            </div>
          </div>

          {/* Bottom content */}
          <div className="absolute right-0 bottom-0 left-0 p-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">
                {title}
              </h3>
              <p className="text-sm text-white/80">
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[transform:rotateY(180deg)] [backface-visibility:hidden]",
            "rounded-2xl p-6",
            "bg-card border border-border",
            "shadow-lg",
            "flex flex-col",
            "transition-all duration-700",
            "group-hover:shadow-xl",
            "group-hover:border-green-500/50",
            !isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>

            <div className="space-y-2">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-start gap-2 text-sm text-foreground"
                  style={{
                    transform: isFlipped ? "translateX(0)" : "translateX(-10px)",
                    opacity: isFlipped ? 1 : 0,
                    transitionDelay: `${index * 100 + 200}ms`,
                    transition: "all 0.5s",
                  }}
                >
                  <div className="w-4 h-4 rounded-sm bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-border">
            <button
              className={cn(
                "w-full py-2.5 px-4 rounded-lg",
                "bg-gradient-to-r from-green-500 to-emerald-600",
                "text-white text-sm font-semibold",
                "hover:shadow-lg hover:scale-[1.02]",
                "transition-all duration-300"
              )}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
