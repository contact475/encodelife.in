'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { GlowCard } from '@/components/spotlight-card'

const collaborators = [
  {
    name: 'DPIIT',
    logoBlack: '/logos/dpiit-black.png',
    logoWhite: '/logos/dpiit-white.png',
    description: 'Supporting innovation and entrepreneurship through government initiatives',
    glowColor: 'green' as const,
  },
  {
    name: 'IIT Guwahati',
    logoBlack: '/logos/iitg-black.png',
    logoWhite: '/logos/iitg-white.png',
    description: 'Premier technology institute providing research collaboration',
    glowColor: 'green' as const,
  },
  {
    name: 'Make in India',
    logoBlack: '/logos/makeinindia-black.png',
    logoWhite: '/logos/makeinindia-white.png',
    description: 'National initiative promoting manufacturing and innovation',
    glowColor: 'green' as const,
  },
  {
    name: 'Manav Rachna',
    logoBlack: '/logos/manavrachna-black.png',
    logoWhite: '/logos/manavrachna-white.png',
    description: 'Educational partner fostering sustainable development',
    glowColor: 'green' as const,
  },
  {
    name: 'Start in UP',
    logoBlack: '/logos/startinup-black.png',
    logoWhite: '/logos/startinup-white.png',
    description: 'Supporting startups and entrepreneurship in Uttar Pradesh',
    glowColor: 'green' as const,
  },
  {
    name: 'Startup India',
    logoBlack: '/logos/startupindia-black.png',
    logoWhite: '/logos/startupindia-white.png',
    description: 'Building a strong startup ecosystem across India',
    glowColor: 'green' as const,
  },
]

export function CollaboratorsSection() {
  return (
    <section className="py-12 md:py-20 lg:py-32 px-4 md:px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <Badge variant="secondary" className="mb-3 text-xs md:mb-6 md:text-sm">
            Our Partners
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium font-ozean mb-2 md:mb-3">
            Collaborators & Supporters
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Partnering with leading institutions and government initiatives to drive sustainable innovation
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {collaborators.map((collaborator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <GlowCard
                glowColor={collaborator.glowColor}
                customSize={true}
                className="w-full h-full min-h-[240px] md:min-h-[260px] flex flex-col hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex-1 flex flex-col items-center justify-center p-5 md:p-6 gap-3">
                  {/* Logo */}
                  <div className="flex items-center justify-center h-14 md:h-16 w-full">
                    <img
                      className="max-h-full w-auto max-w-[110px] md:max-w-[130px] object-contain dark:hidden transition-transform duration-300 hover:scale-105"
                      src={collaborator.logoBlack}
                      alt={`${collaborator.name} Logo`}
                    />
                    <img
                      className="max-h-full w-auto max-w-[110px] md:max-w-[130px] object-contain hidden dark:block transition-transform duration-300 hover:scale-105"
                      src={collaborator.logoWhite}
                      alt={`${collaborator.name} Logo`}
                    />
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-base md:text-lg font-semibold text-center text-foreground">
                    {collaborator.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs md:text-sm text-muted-foreground text-center leading-relaxed line-clamp-2">
                    {collaborator.description}
                  </p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-8 md:mt-12 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
