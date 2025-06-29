'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import React from "react";
import type { SVGProps } from "react";

const DynamicTracingBeam = dynamic(() =>
  import('../components/ui/tracing-beam').then((mod) => mod.TracingBeam),
  { ssr: false }
);



export type ServiceItemData = {
  id: string;
  title: string;
  description: string;
  iconId: string;
};

const DynamicSparklesText = dynamic(() =>
  import('../components/ui/sparkles-text').then((mod) => mod.SparklesText)
);


const WebAppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.875 14.25l-2.625-2.625 2.625-2.625m2.25 5.25 2.625-2.625-2.625-2.625" />
  </svg>
);
const WebDevIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 9l4.5 4.5L21.75 6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6H18m3.75 0v3.75" />
  </svg>
);
const AppDevIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
);
const DbMgmtIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6m-6 4.5h6m-6 4.5h6M7.5 3V1.5m9 1.5V1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-3.314-2.935-6-6.5-6S6.5 8.686 6.5 12c0 3.314 2.935 6 6.5 6s6.5-2.686 6.5-6Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
);
const DataAnalysisIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 21l-5.195-5.195" />
  </svg>
);
const WebDesignIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0A10.995 10.995 0 0 0 12 15m0 0a10.995 10.995 0 0 0 2.47-1.128m-4.94 0a10.995 10.995 0 0 1-2.47-1.128m0 0a10.995 10.995 0 0 1 2.47-1.128m0 0A10.995 10.995 0 0 0 12 9m2.47 1.128a10.995 10.995 0 0 0 2.47-1.128m0 0a10.995 10.995 0 0 0 2.47-1.128M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17.25H9A2.25 2.25 0 0 1 6.75 15V7.75A2.25 2.25 0 0 1 9 5.5h6A2.25 2.25 0 0 1 17.25 7.75v7.5A2.25 2.25 0 0 1 15 17.25Z" />
  </svg>
);

const iconMap: Record<string, React.FC<SVGProps<SVGSVGElement>>> = {
  webApp: WebAppIcon,
  webDev: WebDevIcon,
  appDev: AppDevIcon,
  dbMgmt: DbMgmtIcon,
  dataAnalysis: DataAnalysisIcon,
  webDesign: WebDesignIcon,
};

interface ServiceCardProps {
  title: string;
  description: string;
  iconId: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  iconId,
}) => {
  const cardBaseClasses = "rounded-xl shadow-lg transition-all duration-300 ease-in-out relative group p-6 min-h-[20px] flex flex-col";
  const cardDefaultStyle = "bg-gradient-to-br from-purple-600/80 to-indigo-700/90 text-white";
  const cardHoverStyle = "hover:from-purple-500 hover:to-indigo-600 hover:shadow-2xl hover:scale-[1.02]"; 

  const iconContainerDefaultStyle = "bg-white/95 backdrop-blur-sm";
  const iconColorDefaultStyle = "text-purple-600";

  const IconToRender = iconMap[iconId] || (() => <div className="w-8 h-8 bg-neutral-500 rounded animate-pulse" aria-label="Loading icon"></div>);

  return (
    <div className={`${cardBaseClasses} ${cardDefaultStyle} ${cardHoverStyle}`}>
      <div
        className={`absolute -top-5 -left-5 p-3 sm:p-4 rounded-lg shadow-md ${iconContainerDefaultStyle} transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg`}
      >
        <IconToRender className={`w-7 h-7 sm:w-8 sm:h-8 ${iconColorDefaultStyle} transition-colors duration-200 ease-in-out`} />
      </div>
      <div className="mt-10 sm:mt-12 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-sm sm:text-base mb-4 leading-relaxed text-purple-100/90 flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
};

type ServicesPageClientProps = {
  cardData: ServiceItemData[];
};

const ServicesPageClient = ({ cardData }: ServicesPageClientProps) => {
  const sectionBorderStyle = "border-neutral-700/60";
  const serviceText = "Our Services";

  return (
      <div className={`bg-gradient-to-br from-purple-950/25 via-neutral-950 to-neutral-950 text-neutral-300 antialiased selection:bg-purple-500 selection:text-white min-h-screen`}>
      {/* Hero Section */}
      <div
        className={`rounded-b-3xl md:rounded-b-4xl min-h-[70vh] sm:min-h-[80vh] md:h-auto md:min-h-[calc(100vh-80px)] xl:min-h-[45rem] w-full relative flex flex-col items-center justify-center border-b ${sectionBorderStyle} px-4 py-16 sm:py-20 md:py-24 overflow-hidden`}
      >
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-neutral-950/0 to-neutral-950/0 opacity-75"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-950/70 to-transparent z-0"></div> {/* Softer edge */}
        <div className="max-w-4xl 2xl:max-w-5xl mt-30 mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold font-sans !leading-tight text-white">
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
      
        <main
          id="services-grid"
          aria-labelledby="services-heading"
          className="max-w-7xl mx-auto py-16 md:py-24"
        >
          <DynamicTracingBeam className="px-6"> 
          <div className="text-center mb-12 md:mb-16">
            <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-white mb-3">
               Explore Our Core Offerings
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Each service is crafted with precision to meet your unique business needs and drive growth.
            </p>
          </div>

          {cardData && cardData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-x-10 md:gap-y-20">
              {cardData.map((card) => (
                <ServiceCard
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  iconId={card.iconId}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-neutral-400">No services currently available. Please check back later.</p>
            </div>
          )}
          </DynamicTracingBeam>
        </main>
      
    </div>
  );
};

export default ServicesPageClient;