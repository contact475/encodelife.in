"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { GripVertical } from "lucide-react";

interface ImageComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
}

export function ImageComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel,
}: ImageComparisonSliderProps) {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x =
      "touches" in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;

    const percentage = (x / rect.width) * 100;
    setInset(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-border shadow-xl"
      onMouseMove={onMouseMove}
      onMouseDown={() => setOnMouseDown(true)}
      onMouseUp={() => setOnMouseDown(false)}
      onMouseLeave={() => setOnMouseDown(false)}
      onTouchMove={onMouseMove}
      onTouchStart={() => setOnMouseDown(true)}
      onTouchEnd={() => setOnMouseDown(false)}
    >
      {/* Before Image (Background) */}
      <div className="absolute inset-0">
        <Image
          src={beforeImage}
          alt={beforeLabel}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
        {/* Before Label */}
        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
          <div className="backdrop-blur-md bg-background/80 rounded-xl px-4 py-2 md:px-6 md:py-3 border border-border">
            <h3 className="text-base md:text-xl font-semibold drop-shadow-sm">
              {beforeLabel}
            </h3>
          </div>
        </div>
      </div>

      {/* After Image (Overlay - clipped) */}
      <div
        className="absolute inset-0 transition-all duration-75"
        style={{ clipPath: `inset(0 ${100 - inset}% 0 0)` }}
      >
        <Image
          src={afterImage}
          alt={afterLabel}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
        {/* After Label */}
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
          <div className="backdrop-blur-md bg-green-500/90 rounded-xl px-4 py-2 md:px-6 md:py-3 border border-green-400">
            <h3 className="text-base md:text-xl font-semibold text-white drop-shadow-sm">
              {afterLabel}
            </h3>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div
        className="absolute inset-y-0 w-1 bg-white shadow-2xl cursor-ew-resize z-10 transition-all duration-75"
        style={{ left: `${inset}%` }}
      >
        {/* Grip Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-background">
          <GripVertical className="w-6 h-6 text-foreground" />
        </div>

        {/* Arrow indicators */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-8 pointer-events-none">
          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center -ml-20">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ml-20">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
