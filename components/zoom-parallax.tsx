'use client';

import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface Image {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	/** Array of images to be displayed in the parallax effect max 7 images */
	images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef(null);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	// Smooth spring physics for buttery scroll
	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: isMobile ? 50 : 100,
		damping: isMobile ? 25 : 30,
		mass: isMobile ? 0.3 : 0.5,
	});

	// Reduced scale values for mobile for smoother performance
	const scale4 = useTransform(smoothProgress, [0, 1], [1, isMobile ? 3 : 4]);
	const scale5 = useTransform(smoothProgress, [0, 1], [1, isMobile ? 3.5 : 5]);
	const scale6 = useTransform(smoothProgress, [0, 1], [1, isMobile ? 4 : 6]);
	const scale8 = useTransform(smoothProgress, [0, 1], [1, isMobile ? 5 : 8]);
	const scale9 = useTransform(smoothProgress, [0, 1], [1, isMobile ? 5.5 : 9]);

	const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

	return (
		<div ref={container} className="relative h-[300vh]">
			<div className="sticky top-0 h-screen overflow-hidden">
				{images.map(({ src, alt }, index) => {
					const scale = scales[index % scales.length];

					return (
						<motion.div
							key={index}
							style={{ 
								scale,
								// Hardware acceleration for smooth rendering
								transform: 'translateZ(0)',
								backfaceVisibility: 'hidden',
								perspective: 1000,
							}}
							className={`absolute top-0 flex h-full w-full items-center justify-center will-change-transform 
								${index === 1 ? '[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[20vh] [&>div]:!w-[40vw] md:[&>div]:!h-[30vh] md:[&>div]:!w-[35vw]' : ''} 
								${index === 2 ? '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[30vh] [&>div]:!w-[25vw] md:[&>div]:!h-[45vh] md:[&>div]:!w-[20vw]' : ''} 
								${index === 3 ? '[&>div]:!left-[27.5vw] [&>div]:!h-[18vh] [&>div]:!w-[30vw] md:[&>div]:!h-[25vh] md:[&>div]:!w-[25vw]' : ''} 
								${index === 4 ? '[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[18vh] [&>div]:!w-[25vw] md:[&>div]:!h-[25vh] md:[&>div]:!w-[20vw]' : ''} 
								${index === 5 ? '[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[18vh] [&>div]:!w-[35vw] md:[&>div]:!h-[25vh] md:[&>div]:!w-[30vw]' : ''} 
								${index === 6 ? '[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[12vh] [&>div]:!w-[20vw] md:[&>div]:!h-[15vh] md:[&>div]:!w-[15vw]' : ''} 
							`}
						>
							<div 
								className="relative h-[20vh] w-[30vw] md:h-[25vh] md:w-[25vw]"
								style={{
									// Additional hardware acceleration
									transform: 'translateZ(0)',
									backfaceVisibility: 'hidden',
								}}
							>
								<img
									src={src || '/placeholder.svg'}
									alt={alt || `Parallax image ${index + 1}`}
									loading="eager"
									decoding="async"
									className="h-full w-full object-cover"
									style={{ 
										transform: 'translateZ(0)',
										backfaceVisibility: 'hidden',
									}}
								/>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
