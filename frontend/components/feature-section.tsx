"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { cn } from "@/lib/utils"
import { Leaf, Sprout, Droplets, Factory, Recycle } from "lucide-react"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Map scroll progress to feature index - smoother transitions
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Extended range for smoother transitions (0.05 to 0.95)
      if (latest >= 0.05 && latest <= 0.95) {
        const adjustedProgress = (latest - 0.05) / 0.9 // Normalize to 0-1
        const featureIndex = Math.min(
          Math.floor(adjustedProgress * features.length),
          features.length - 1
        )
        setCurrentFeature(Math.max(0, featureIndex))
      } else if (latest < 0.05) {
        setCurrentFeature(0)
      } else if (latest > 0.95) {
        setCurrentFeature(features.length - 1)
      }
    })

    return () => unsubscribe()
  }, [scrollYProgress, features.length])

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index)
  }

  return (
    <div ref={containerRef} className={cn("relative py-12 md:py-20 lg:py-24", className)}>
      <div className="max-w-7xl mx-auto w-full p-4 md:p-8 lg:p-12">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold italic font-newsreader mb-6 md:mb-10 text-center">
          {title}
        </h2>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
            <div className="order-2 md:order-1 space-y-4 md:space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start md:items-center gap-3 md:gap-6 lg:gap-8 cursor-pointer"
                  onClick={() => handleFeatureClick(index)}
                >
                  <motion.div
                    className={cn(
                      "w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center border-2 transition-all flex-shrink-0 mt-0.5 md:mt-0",
                      index === currentFeature
                        ? "bg-gradient-to-br from-green-500 to-emerald-600 border-green-400 text-white scale-110 shadow-lg shadow-green-500/50"
                        : "bg-white dark:bg-white border-gray-300 dark:border-gray-300 text-black hover:scale-105",
                    )}
                  >
                    {index <= currentFeature ? (
                      <span className="text-sm md:text-lg font-bold">✓</span>
                    ) : (
                      <span className="text-sm md:text-lg font-semibold">{index + 1}</span>
                    )}
                  </motion.div>

                  <div className="flex-1">
                    <h3 className={cn(
                      "text-base md:text-xl lg:text-2xl font-semibold transition-colors mb-1",
                      index === currentFeature
                        ? "text-green-600 dark:text-green-400"
                        : "text-foreground"
                    )}>
                      {feature.title || feature.step}
                    </h3>
                    <p className="text-xs md:text-sm lg:text-lg text-muted-foreground leading-relaxed">
                      {feature.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Image display with emerging animation */}
            <div className="order-1 md:order-2 relative h-[280px] md:h-[400px] lg:h-[500px] flex items-center justify-center px-2 md:px-4">
              <div className="relative w-full max-w-md h-full">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{
                      scale: index === currentFeature ? 1 : 0.85,
                      opacity: index === currentFeature ? 1 : 0,
                      y: index === currentFeature ? 0 : 50,
                      zIndex: index === currentFeature ? 10 : index,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
                    style={{
                      transformOrigin: "center center",
                    }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.title || feature.step}
                      className="w-full h-full object-cover"
                    />
                    {/* Step indicator overlay */}
                    {index === currentFeature && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className="absolute top-3 left-3 md:top-6 md:left-6 w-9 h-9 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg"
                      >
                        <span className="text-white text-base md:text-xl font-bold">{index + 1}</span>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

// Orbital Timeline Component
interface OrbitalTimelineProps {
  features: Feature[]
  currentFeature: number
  onFeatureClick: (index: number) => void
}

function OrbitalTimeline({ features, currentFeature, onFeatureClick }: OrbitalTimelineProps) {
  const icons = [Leaf, Sprout, Droplets, Factory, Recycle]
  const [rotationAngle, setRotationAngle] = useState(0)
  const [autoRotate, setAutoRotate] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [targetRotation, setTargetRotation] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Auto-rotate to position current feature at the top
  useEffect(() => {
    if (!mounted) return

    const totalNodes = features.length
    const targetAngle = (currentFeature / totalNodes) * 360
    const desiredRotation = 270 - targetAngle // 270 degrees puts it at the top

    setTargetRotation(desiredRotation)
    setAutoRotate(false)
  }, [currentFeature, features.length, mounted])

  // Smooth rotation animation with easing
  useEffect(() => {
    let animationFrameId: number

    const animate = () => {
      setRotationAngle((prev) => {
        const diff = targetRotation - prev
        const normalizedDiff = ((diff + 180) % 360) - 180

        if (Math.abs(normalizedDiff) < 0.1) {
          return targetRotation
        }

        // Smooth easing with higher interpolation for smoother movement
        const newAngle = prev + normalizedDiff * 0.15
        return newAngle
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    if (mounted) {
      animationFrameId = requestAnimationFrame(animate)
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [mounted, targetRotation])

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360
    const radius = 160
    const radian = (angle * Math.PI) / 180

    // Use higher precision for smoother movement
    const x = radius * Math.cos(radian)
    const y = radius * Math.sin(radian)

    const zIndex = Math.round(100 + 50 * Math.cos(radian))
    const opacity = Math.max(0.6, Math.min(1, 0.6 + 0.4 * ((1 + Math.sin(radian)) / 2)))

    return { x, y, angle, zIndex, opacity }
  }

  const handleOrbitClick = (index: number) => {
    onFeatureClick(index)
  }

  if (!mounted) {
    return (
      <div className="order-1 md:order-2 relative h-[500px] lg:h-[600px] flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse" />
      </div>
    )
  }

  return (
    <div className="order-1 md:order-2 relative h-[500px] lg:h-[600px] flex items-center justify-center overflow-visible">
      <div
        className="absolute w-full h-full flex items-center justify-center"
        style={{
          perspective: "1200px",
        }}
      >
        {/* Center hub - Earth/Nature theme */}
        <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 animate-pulse flex items-center justify-center z-10 shadow-2xl shadow-green-500/30">
          <div className="absolute w-28 h-28 rounded-full border-2 border-green-400/30 animate-ping opacity-70"></div>
          <div
            className="absolute w-32 h-32 rounded-full border-2 border-emerald-400/20 animate-ping opacity-50"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div className="absolute w-36 h-36 rounded-full border border-teal-400/10 animate-ping opacity-30" style={{ animationDelay: "1s" }}></div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/90 to-green-50/90 backdrop-blur-md shadow-inner flex items-center justify-center">
            <Leaf className="w-6 h-6 text-green-600" />
          </div>
        </div>

        {/* Orbit rings - Multiple layers for depth */}
        <div className="absolute w-[320px] h-[320px] rounded-full border-2 border-green-500/30 dark:border-green-400/30"></div>
        <div className="absolute w-[360px] h-[360px] rounded-full border border-emerald-500/20 dark:border-emerald-400/20"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full border border-teal-500/10 dark:border-teal-400/10"></div>

        {/* Animated orbital path */}
        <div className="absolute w-[320px] h-[320px] rounded-full border-2 border-transparent">
          <div className="absolute inset-0 rounded-full border-2 border-green-400/40 dark:border-green-300/40 animate-spin" style={{ animationDuration: "20s" }}></div>
        </div>

        {/* Orbital nodes */}
        {features.map((feature, index) => {
          const position = calculateNodePosition(index, features.length)
          const isActive = index === currentFeature
          const Icon = icons[index % icons.length]

          return (
            <div
              key={index}
              className="absolute cursor-pointer"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                zIndex: isActive ? 200 : position.zIndex,
                opacity: position.opacity,
                transition: 'opacity 0.3s ease-out, z-index 0s',
                willChange: 'transform',
              }}
              onClick={() => handleOrbitClick(index)}
            >
              {/* Glow effect - Green theme */}
              <div
                className={cn(
                  "absolute rounded-full -inset-3 transition-all duration-300 pointer-events-none",
                  isActive && "animate-pulse"
                )}
                style={{
                  background: `radial-gradient(circle, ${isActive
                      ? "rgba(34, 197, 94, 0.5)"
                      : "rgba(148, 163, 184, 0.2)"
                    } 0%, transparent 70%)`,
                  width: "90px",
                  height: "90px",
                  left: "-24px",
                  top: "-24px",
                }}
              ></div>

              {/* Node circle - Enhanced with green theme */}
              <motion.div
                className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center border-3 backdrop-blur-sm transition-all duration-300 shadow-xl",
                  isActive
                    ? "bg-gradient-to-br from-green-500 to-emerald-600 border-green-400 text-white shadow-green-500/50"
                    : "bg-muted border-border text-muted-foreground hover:scale-105 hover:shadow-lg"
                )}
                animate={{
                  scale: isActive ? 1.3 : 1,
                  rotate: isActive ? 360 : 0,
                }}
                transition={{ duration: 0.5, rotate: { duration: 0.8 } }}
              >
                <Icon size={28} />
              </motion.div>

              {/* Step number badge - Green theme */}
              <div
                className={cn(
                  "absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 border-background transition-all duration-300 shadow-lg",
                  isActive
                    ? "bg-gradient-to-br from-green-500 to-emerald-600 text-white scale-125"
                    : "bg-primary text-primary-foreground"
                )}
              >
                {index + 1}
              </div>

              {/* Auto-opening tooltip for active feature - Green theme */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-24 left-1/2 -translate-x-1/2 bg-card backdrop-blur-lg border-2 border-green-500 shadow-2xl shadow-green-500/20 rounded-lg p-4 w-64 z-50"
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-green-500"></div>
                  <p className="text-sm font-bold text-center mb-2 text-green-600 dark:text-green-400">{feature.title}</p>
                  <p className="text-xs text-foreground/90 dark:text-foreground/85 text-center leading-relaxed font-medium">
                    {feature.content}
                  </p>
                </motion.div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
