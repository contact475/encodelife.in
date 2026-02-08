'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { GlowCard } from '@/components/spotlight-card'
import { useEffect, useRef } from 'react'

const collaborators = [
  {
    name: 'DPIIT',
    logo: '/logos/dpiit.webp',
    description: 'Supporting innovation and entrepreneurship through government initiatives',
    glowColor: 'green' as const,
  },
  {
    name: 'Make in India',
    logo: '/logos/makeinindia.webp',
    description: 'National initiative promoting manufacturing and innovation',
    glowColor: 'green' as const,
  },
  {
    name: 'Manav Rachna',
    logo: '/logos/manavrachna.webp',
    description: 'Partner fostering sustainable development',
    glowColor: 'green' as const,
  },
  {
    name: 'Start in UP',
    logo: '/logos/startinup.webp',
    description: 'Supporting startups and entrepreneurship in Uttar Pradesh',
    glowColor: 'green' as const,
  },
  {
    name: 'Startup India',
    logo: '/logos/startupindia.webp',
    description: 'Building a strong startup ecosystem across India',
    glowColor: 'green' as const,
  },
]

export function CollaboratorsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5 // Adjust speed here

    const animate = () => {
      scrollPosition += scrollSpeed
      
      if (scrollContainer) {
        // Reset scroll when we've scrolled through all items
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0
        }
        scrollContainer.scrollLeft = scrollPosition
      }
      
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationFrameId)
    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(animate)
    }

    scrollContainer.addEventListener('mouseenter', handleMouseEnter)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationFrameId)
      scrollContainer?.removeEventListener('mouseenter', handleMouseEnter)
      scrollContainer?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Duplicate collaborators for seamless loop
  const duplicatedCollaborators = [...collaborators, ...collaborators]

  return (
    <section className="py-12 md:py-20 lg:py-32 px-4 md:px-6 lg:px-12 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 px-4">
          <Badge variant="secondary" className="mb-4 text-xs md:mb-6 md:text-sm">
            Our Partners
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold italic font-newsreader mb-3 md:mb-4 leading-tight">
            Collaborators & Supporters
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Partnering with leading institutions and government initiatives to drive sustainable innovation
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative py-4 -mx-4 md:mx-0">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Cards */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-hidden overflow-y-visible"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedCollaborators.map((collaborator, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-[320px] lg:w-[360px] py-2"
              >
                <GlowCard
                  glowColor={collaborator.glowColor}
                  customSize={true}
                  customBgColor="#E1EACD"
                  disableGlow={true}
                  className="w-full h-full min-h-[220px] sm:min-h-[240px] md:min-h-[260px] flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                >
                  <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 gap-2 sm:gap-3">
                    {/* Logo */}
                    <div className="flex items-center justify-center h-12 sm:h-14 md:h-16 w-full">
                      <img
                        className="max-h-full w-auto max-w-[100px] sm:max-w-[110px] md:max-w-[130px] object-contain transition-transform duration-300 hover:scale-105"
                        src={collaborator.logo}
                        alt={`${collaborator.name} Logo`}
                      />
                    </div>
                    
                    {/* Name */}
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-center text-black leading-tight">
                      {collaborator.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs sm:text-xs md:text-sm text-black/80 text-center leading-relaxed line-clamp-3 px-1">
                      {collaborator.description}
                    </p>
                  </div>
                </GlowCard>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-8 md:mt-12 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
