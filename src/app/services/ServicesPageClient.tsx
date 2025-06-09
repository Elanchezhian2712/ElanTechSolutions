// src/app/blog/page.tsx
'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import React from "react";
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


type CardProps = {
  iconColor: string;
  text: string;
  descriptions: string;
  colors: [number, number, number][];
};

const CardComponent = ({ iconColor, text, descriptions, colors }: CardProps) => {
  return (
    <div className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem] ">
      <Icon className={`absolute h-6 w-6 -top-3 -left-3 text-${iconColor}-500 dark:text-${iconColor}-400`} />
      <Icon className={`absolute h-6 w-6 -bottom-3 -left-3 text-${iconColor}-500 dark:text-${iconColor}-400`} />
      <Icon className={`absolute h-6 w-6 -top-3 -right-3 text-${iconColor}-500 dark:text-${iconColor}-400`} />
      <Icon className={`absolute h-6 w-6 -bottom-3 -right-3 text-${iconColor}-500 dark:text-${iconColor}-400`} />

      <AnimatePresence>
        <div className="h-full w-full absolute inset-0">
          <DynamicCanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={colors}
            dotSize={2}
          />
        </div>
      </AnimatePresence>

      <div className="relative z-20 text-center">
        <div className="group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full flex items-center justify-center">
          <AceternityIcon />
        </div>

        <h2 className="text-xl text-black dark:text-white mt-4 font-bold transition duration-200 
          opacity-100 lg:opacity-0 lg:group-hover/canvas-card:opacity-100 
          lg:group-hover/canvas-card:text-white 
          lg:group-hover/canvas-card:-translate-y-2">
          {text}
        </h2>

        <p className="text-sm mt-2 text-gray-700 dark:text-gray-300 transition duration-200 
          opacity-100 lg:opacity-0 lg:group-hover/canvas-card:opacity-100 
          lg:group-hover/canvas-card:-translate-y-1">
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


const ServicesPage = () => {
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
          <nav className="relative z-10 mt-4 text-sm md:text-base text-white-400">
            <ol className="list-reset flex justify-center space-x-2 md:space-x-4">
              <li>
                <Link href="/" className="hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-white-300">Services</li>
            </ol>
          </nav>
          <p className="relative z-10 mt-8 text-lg md:text-xl text-white-300 leading-relaxed text-justify md:text-center max-w-4xl mx-auto">
            We offer a comprehensive range of services including AI solutions, UI/UX design, Digital Marketing, Data Engineering, SaaS development, E-Commerce solutions, and Web Development. Our team delivers innovative, scalable, and user-centric solutions to help your business thrive in the digital world.
          </p>
        </div>
      </div>

      <div className="text-center my-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          <DynamicHyperText>{subText}</DynamicHyperText>
        </h2>
        <p className="text-white-300 text-sm md:text-base mt-3 max-w-xl mx-auto">
          Feel free to get in touch with us — we&apos;re here to answer your questions and help you get started.
        </p>
      </div>

      <DynamicTracingBeam className="max-w-7xl">
        <section className={`text-white py-6 md:py-10 border-b ${sectionBorderStyle}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ">
            <CardComponent
              iconColor="purple"
              text="AI Solutions"
              descriptions={`Harness the power of AI to transform your business processes. Our AI solutions include machine learning, natural language processing, and computer vision, tailored to meet your specific needs.`}
              colors={[
                [168, 85, 247],
                [192, 132, 252],
              ]}
            />

            <CardComponent
              iconColor="purple"
              text="Web Development"
              descriptions={`Build robust and scalable web applications with our expert web development services. We specialize in creating dynamic, responsive, and user-friendly websites that enhance your online presence.`}
              colors={[
                [168, 85, 247],
                [192, 132, 252],
              ]}
            />

            <CardComponent
              iconColor="purple"
              text="Data Engineering"
              descriptions={`Unlock the full potential of your data with our comprehensive data engineering services. We help you design, build, and maintain robust data pipelines and architectures that drive insights and innovation.`}
              colors={[
                [168, 85, 247],
                [192, 132, 252],
              ]}
            />

            <CardComponent
              iconColor="purple"
              text="UI/UX Design"
              descriptions={`Create intuitive and engaging user experiences with our UI/UX design services. We focus on understanding user needs and behaviors to deliver designs that are not only visually appealing but also highly functional.`}
              colors={[
                [168, 85, 247],
                [192, 132, 252],
              ]}
            />

            <CardComponent
              iconColor="purple"
              text="Digital Marketing"
              descriptions={`Enhance your online visibility and reach your target audience with our digital marketing services. From SEO and content marketing to social media management and PPC campaigns, we provide comprehensive strategies to grow your business.`}
              colors={[
                [168, 85, 247],
                [192, 132, 252],
              ]}
            />

            <CardComponent
              iconColor="purple"
              text="SaaS Development"
              descriptions={`Leverage our expertise in SaaS development to build scalable and secure applications. We follow industry best practices to ensure your SaaS product is robust, user-friendly, and ready for the market.`}
              colors={[
                [168, 85, 247],
                [192, 132, 252],
              ]}
            />
          </div>
        </section>
      </DynamicTracingBeam>
    </div>
  );
};

export default ServicesPage;
