
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

  return (
    <div className={`bg-gradient-to-br from-purple-950/25 via-neutral-950 to-neutral-950 text-neutral-300 antialiased selection:bg-purple-500 selection:text-white min-h-screen`}>
      {/* Hero Section */}
      <div
        className={`rounded-b-3xl md:rounded-b-4xl min-h-[70vh] sm:min-h-[80vh] md:h-auto md:min-h-[calc(100vh-80px)] xl:min-h-[45rem] w-full relative flex flex-col items-center justify-center border-b ${sectionBorderStyle} px-4 py-16 sm:py-20 md:py-24 overflow-hidden`}
      >
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-neutral-950/0 to-neutral-950/0 opacity-75"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-950/70 to-transparent z-0"></div> {/* Softer edge */}
        <div className="max-w-4xl 2xl:max-w-5xl mt-30 mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold font-sans !leading-tight">
           <DynamicSparklesText>{serviceText}</DynamicSparklesText>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-purple-500/80 tracking-wider uppercase font-medium">
            Where Insight Meets Exceptional Service
          </p>
          <nav aria-label="Breadcrumb" className="relative z-10 mt-6 sm:mt-8 text-sm md:text-base text-neutral-400">
            <ol className="list-none p-0 inline-flex items-center space-x-1.5 md:space-x-2">
              <li>
                <Link href="/" className="hover:text-purple-300 transition-colors duration-200">Home</Link>
              </li>
              <li className="text-neutral-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li>
                <span className="text-purple-500/90 font-medium" aria-current="page">Services</span>
              </li>
            </ol>
          </nav>
          <p className="relative z-10 mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-neutral-300/90 leading-relaxed max-w-3xl mx-auto">
            We offer a comprehensive range of services including AI solutions, UI/UX design, Digital Marketing, Mobile App Development, SaaS development, E-Commerce solutions, and Web Development. Our team delivers innovative, scalable, and user-centric solutions to help your business thrive in the digital world.
          </p>
        </div>
      </div>


      <DynamicTracingBeam className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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