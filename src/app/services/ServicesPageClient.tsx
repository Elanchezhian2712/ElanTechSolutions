
'use client'; 

import Link from 'next/link';
import dynamic from 'next/dynamic';
import React, { useState } from "react";
import Image from 'next/image';
import { AnimatePresence } from "motion/react"; 
import type { SVGProps } from "react";


const DynamicSparklesText = dynamic(() =>
  import('../components/ui/sparkles-text').then((mod) => mod.SparklesText)
);

const DynamicTracingBeam = dynamic(() =>
  import('../components/ui/tracing-beam').then((mod) => mod.TracingBeam),
  { ssr: false }
);

const DynamicHyperText = dynamic(() =>
  import('../components/ui/hyper-text').then((mod) => mod.HyperText)
);

const DynamicCanvasRevealEffect = dynamic(() =>
  import('../components/ui/canvas-reveal-effect').then((mod) => mod.CanvasRevealEffect)
);


export type CardData = {
  id: string;
  iconColor: string;
  text: string;
  descriptions: string;
  colors: [number, number, number][];
};


type CardComponentProps = {
  iconColor: string;
  text: string;
  descriptions: string;
  colors: [number, number, number][];
};


type ServicesPageClientProps = {
  cardData: CardData[];
};


const CardComponent = ({ iconColor, text, descriptions, colors }: CardComponentProps) => {
  const [isTapped, setIsTapped] = useState(false);

  const handleTap = () => {
    setIsTapped((prev) => !prev);
  };

  const iconTextColorClass = `text-${iconColor}-500`;
  const darkIconTextColorClass = `dark:text-${iconColor}-400`;

  return (
    <div
      onClick={handleTap}
      className="border bg-black border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem] cursor-pointer"
    >
      <Icon className={`absolute h-6 w-6 -top-3 -left-3 ${iconTextColorClass} ${darkIconTextColorClass}`} />
      <Icon className={`absolute h-6 w-6 -bottom-3 -left-3 ${iconTextColorClass} ${darkIconTextColorClass}`} />
      <Icon className={`absolute h-6 w-6 -top-3 -right-3 ${iconTextColorClass} ${darkIconTextColorClass}`} />
      <Icon className={`absolute h-6 w-6 -bottom-3 -right-3 ${iconTextColorClass} ${darkIconTextColorClass}`} />

      <AnimatePresence>
        <div className="h-full w-full absolute inset-0">
          <DynamicCanvasRevealEffect animationSpeed={3} containerClassName="bg-black" colors={colors} dotSize={2} />
        </div>
      </AnimatePresence>

      <div className="relative z-20 text-center">
        <div className="group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full flex items-center justify-center">
          <AceternityIcon />
        </div>
        <h2
          className={`
            text-xl mt-4 font-bold transition duration-200
            ${
              isTapped
                ? "opacity-100 text-black dark:text-white -translate-y-2"
                : "opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2"
            }
          `}
        >
          {text}
        </h2>
        <p
          className={`
            text-sm mt-2 transition duration-200
            ${
              isTapped
                ? "opacity-100 text-gray-700 dark:text-gray-300 -translate-y-1"
                : "opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-1"
            }
          `}
        >
          {descriptions}
        </p>
      </div>
    </div>
  );
};


const AceternityIcon = () => {
  return (
    <Image
      src="/logo.png"
      alt="Aceternity Icon"
      width={66}
      height={135}
      priority={true}
      style={{ display: 'block' }}
    />
  );
};


export const Icon = ({ className, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};


const ServicesPageClient = ({ cardData }: ServicesPageClientProps) => {
  const sectionBorderStyle = "border-neutral-700/50";
  const serviceText = "Services";
  const subText = "Our Services";

  return (
    <div className='bg-black'>
      <div className={`h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased border-b ${sectionBorderStyle}`}>
        <div className="max-w-5xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl text-purple-500 text-center font-sans font-bold">
            <DynamicSparklesText>{serviceText}</DynamicSparklesText>
          </h1>
          <nav className="relative z-10 mt-4 text-sm md:text-base text-neutral-400">
            <ol className="list-reset flex justify-center space-x-2 md:space-x-4">
              <li>
                <Link href="/" className="hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-neutral-300">Services</li>
            </ol>
          </nav>
          <p className="relative z-10 mt-8 text-lg md:text-xl text-neutral-300 leading-relaxed text-justify md:text-center max-w-4xl mx-auto">
            We offer a comprehensive range of services including AI solutions, UI/UX design, Digital Marketing, Mobile App Development, SaaS development, E-Commerce solutions, and Web Development. Our team delivers innovative, scalable, and user-centric solutions to help your business thrive in the digital world.
          </p>
        </div>
      </div>

      <div className="text-center my-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          <DynamicHyperText>{subText}</DynamicHyperText>
        </h2>
        <p className="text-neutral-300 text-sm md:text-base mt-3 max-w-xl mx-auto">
         Feel free to get in touch with us — we&rsquo;re here to answer your questions and help you get started.
        </p>
      </div>

      <DynamicTracingBeam className="max-w-7xl mx-auto">
        <section className={`text-white py-6 md:py-10 border-b ${sectionBorderStyle}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ">
            {cardData.map((card) => (
              <CardComponent
                key={card.id}
                iconColor={card.iconColor}
                text={card.text}
                descriptions={card.descriptions}
                colors={card.colors}
              />
            ))}
          </div>
        </section>
      </DynamicTracingBeam>
    </div>
  );
};

export default ServicesPageClient;