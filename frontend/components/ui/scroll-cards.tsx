"use client";
import {FC} from "react";

import Image from "next/image";

// Types
interface iCardItem {
	title: string;
	description: string;
	tag: string;
	src: string;
	link: string;
	color: string;
	textColor: string;
}

interface iCardProps extends Omit<iCardItem, "src" | "link" | "tag"> {
	i: number;
	src: string;
}

// Constants
const TOP_VALUES: Record<number, string> = {
	1: "1/2",
	2: "1/2",
	3: "1/2",
	4: "1/2",
};

// Components
const Card: FC<iCardProps> = ({
	title,
	description,
	color,
	textColor,
	i,
	src,
}) => {
	return (
		<div className="h-screen flex items-center justify-center sticky top-0 md:p-0 px-4">
			<div
				className="relative flex flex-col h-[450px] w-[900px] py-16 px-12 md:px-16
				rotate-0 md:h-[550px] md:w-[1000px] lg:h-[600px] lg:w-[1100px] items-center justify-center mx-auto 
				shadow-2xl rounded-3xl"
				style={{backgroundColor: color}}
			>
				<span className="font-bold relative text-6xl md:text-8xl lg:text-9xl mt-5">
					<span
						className="relative z-10 font-black tracking-tight"
						style={{color: textColor}}
					>
						{title}
					</span>
				</span>
				<div
					className="text-xl md:text-3xl lg:text-4xl font-medium text-center mb-0 z-50 mt-4 tracking-wide"
					style={{lineHeight: 1.4, color: textColor}}
				>
					{description}
				</div>
				<div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
					<Image
						className="w-full h-full object-cover opacity-20"
						src={src}
						alt="Background"
						layout="fill"
					/>
				</div>
			</div>
		</div>
	);
};

/**
 * CardSlide component displays a series of cards in a vertical scroll layout
 * Each card contains a title, description, and decorative elements
 */
interface iCardSlideProps {
	items: iCardItem[];
}

const CardsParallax: FC<iCardSlideProps> = ({items}) => {
	return (
		<div className="min-h-screen">
			{items.map((project, i) => {
				return <Card key={`p_${i}`} {...project} i={i} />;
			})}
		</div>
	);
};

export {CardsParallax, type iCardItem};
