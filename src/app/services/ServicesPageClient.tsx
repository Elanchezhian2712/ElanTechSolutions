'use client';

import Link from 'next/link';
import { ReactNode } from 'react'; // <-- Import ReactNode
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer'; // <-- Import the hook
import type { SVGProps } from "react";


const DynamicSparklesText = dynamic(() =>
  import('../components/ui/sparkles-text').then((mod) => mod.SparklesText)
);


const FadeInContainer = ({ children }: { children: ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
    >
      {children}
    </div>
  );
};

// --- TYPE DEFINITIONS ---
export type ServiceItemData = {
  id: string;
  title: string;
  description: string;
  iconId: string;
  features: string[];
};

// --- ICONS (Keep your existing icons or add new ones) ---
const WebAppIcon = (props: SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M10.875 14.25l-2.625-2.625 2.625-2.625m2.25 5.25 2.625-2.625-2.625-2.625" /></svg>;
const WebDevIcon = (props: SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" /></svg>;
const AppDevIcon = (props: SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>;
const DbMgmtIcon = (props: SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>;
const DataAnalysisIcon = (props: SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V8.25a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 8.25v7.5a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>;
const WebDesignIcon = (props: SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" /></svg>;
const CheckIcon = (props: SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.052-.143Z" clipRule="evenodd" /></svg>;



const ProcessIcons = {
  Discover: (props: SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" /></svg>,
 Design: (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75A2.25 2.25 0 016 4.5h12A2.25 2.25 0 0120.25 6.75v10.5A2.25 2.25 0 0118 19.5H6A2.25 2.25 0 013.75 17.25V6.75z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5" />
    </svg>
  ),
    Develop: (props: SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 12" /></svg>,
  
  // Corrected: An arc/spinner icon to match the new "Deploy & Scale" image.
  Deploy: (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  ),
  };

const iconMap: Record<string, React.FC<SVGProps<SVGSVGElement>>> = {
  webApp: WebAppIcon, webDev: WebDevIcon, appDev: AppDevIcon, dbMgmt: DbMgmtIcon, dataAnalysis: DataAnalysisIcon, webDesign: WebDesignIcon,
};

interface ServiceCardProps { title: string; description: string; iconId: string; features: string[]; }

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, iconId, features }) => {
  const IconToRender = iconMap[iconId] || (() => <div>Icon Not Found</div>);
  return (
    <div className="group relative flex flex-col h-full rounded-2xl bg-neutral-900/50 border border-neutral-800/80 p-6 transition-all duration-300 hover:border-purple-500/80 hover:-translate-y-2">
      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-lg transition-all duration-300 group-hover:scale-110">
        <IconToRender className="h-7 w-7" />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-neutral-100 mb-2">{title}</h3>
        <p className="text-neutral-400 text-sm leading-relaxed mb-6">{description}</p>
        <div className="mt-auto border-t border-neutral-800 pt-4">
          <h4 className="font-semibold text-xs text-purple-400 uppercase tracking-wider mb-3">Key Features</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-neutral-300">
                <CheckIcon className="h-5 w-5 flex-shrink-0 text-purple-500 mr-2 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
type ServicesPageClientProps = {
  cardData: ServiceItemData[];
};

const ServicesPageClient = ({ cardData }: ServicesPageClientProps) => {
  const processSteps = [
    { title: 'Discover & Strategize', description: 'We dive deep into your goals to create a winning roadmap.', icon: ProcessIcons.Discover },
    { title: 'Design & Prototype', description: 'Crafting intuitive interfaces and validating ideas before a line of code is written.', icon: ProcessIcons.Design },
    { title: 'Develop & Test', description: 'Building your solution with clean code, followed by rigorous quality assurance.', icon: ProcessIcons.Develop },
    { title: 'Deploy & Scale', description: 'Launching your product and ensuring it’s built to handle growth.', icon: ProcessIcons.Deploy },
  ];

  const sectionBorderStyle = "border-neutral-700/60";
  const serviceText = "Our Services";

  return (
    <div className="bg-gradient-to-br from-purple-950/25 via-neutral-950 to-neutral-950 text-neutral-300 antialiased selection:bg-purple-500 selection:text-white min-h-screen">

      {/* Hero Section */}
      <div
        className={`rounded-b-3xl md:rounded-b-4xl min-h-[70vh] sm:min-h-[80vh] md:min-h-[calc(100vh-80px)] xl:min-h-[45rem] w-full relative flex flex-col items-center justify-center border-b ${sectionBorderStyle} px-4 py-16 sm:py-20 md:py-24 overflow-hidden`}
      >

        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-neutral-950/0 to-neutral-950/0 opacity-75"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-950/70 to-transparent z-0"></div>
        <FadeInContainer>
          <div className="max-w-4xl 2xl:max-w-5xl mt-30 mx-auto text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold font-sans !leading-tight text-white">
              <DynamicSparklesText>{serviceText}</DynamicSparklesText>
            </h1>
            <p className="mt-2 text-sm sm:text-base text-purple-500/80 tracking-wider uppercase font-medium">
              Where Insight Meets Exceptional Service
            </p>

            <nav aria-label="Breadcrumb" className="mt-6 sm:mt-8 text-sm md:text-base text-neutral-400">
              <ol className="inline-flex items-center space-x-1.5 md:space-x-2">
                <li>
                  <Link href="/" className="hover:text-purple-300 transition-colors duration-200">
                    Home
                  </Link>
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

            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-neutral-300/90 leading-relaxed max-w-3xl mx-auto">
              We offer a comprehensive range of services including AI solutions, UI/UX design, SEO, Digital Marketing, DevOps, Mobile App Development, SaaS development, E-Commerce solutions, and Web Development. Our team delivers innovative, scalable, and user-centric solutions designed to help your business thrive in the digital world.
            </p>
          </div>
        </FadeInContainer>
      </div>
      <main>
        {/* Our Process Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="py-20 md:py-28">
            <FadeInContainer>
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Proven Process</h2>
                  <p className="text-lg text-neutral-400 max-w-2xl mx-auto mt-3">
                    We follow a four-step process to ensure quality, transparency, and success at every stage of your project.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {processSteps.map((step, index) => (
                    <div key={index} className="text-center p-6 bg-neutral-900/40 rounded-xl border border-neutral-800">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-950/50 border border-purple-800/50 mx-auto mb-5">
                        <step.icon className="h-7 w-7 text-purple-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-100 mb-2">{step.title}</h3>
                      <p className="text-sm text-neutral-400">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInContainer>
          </section>

          {/* Services Grid Section */}
          <section
            id="services-grid"
            aria-labelledby="services-heading"
            className="py-20 md:py-28 mb-32 border-t border-neutral-800"
          >

            <FadeInContainer>
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-20">
                  <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-white mb-3">
                    Explore Our Core Offerings
                  </h2>
                  <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
                    Each service is a comprehensive solution designed to address specific business challenges and unlock new opportunities for growth.
                  </p>
                </div>

                {cardData && cardData.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cardData.map((card) => (
                      <ServiceCard
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        iconId={card.iconId}
                        features={card.features}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-xl text-neutral-400">
                      No services currently available. Please check back later.
                    </p>
                  </div>
                )}
              </div>
            </FadeInContainer>
          </section>
        </div>
      </main>
    </div>

  );
};

export default ServicesPageClient;