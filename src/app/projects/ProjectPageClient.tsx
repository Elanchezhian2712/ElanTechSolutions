// src/app/projects/page.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import heavy UI components


const DynamicTypewriterEffect = dynamic(() =>
  import('../components/ui/typewriter-effect').then((mod) => mod.TypewriterEffect)
);

const DynamicTracingBeam = dynamic(() =>
  import('../components/ui/tracing-beam').then((mod) => mod.TracingBeam),
  { ssr: false }
);


const CardBody = dynamic(() =>
  import('../components/ui/3d-card').then((mod) => mod.CardBody),
  { ssr: false }
);
const CardContainer = dynamic(() =>
  import('../components/ui/3d-card').then((mod) => mod.CardContainer),
  { ssr: false }
);
const CardItem = dynamic(() =>
  import('../components/ui/3d-card').then((mod) => mod.CardItem),
  { ssr: false }
);




const ProjectPage = () => {
  const sectionBorderStyle = "border-neutral-700/50";

  const projectData = {
    id: 'v-smart-aid',
    title: 'V-Smart Aid',
    description:
      'Our project\'s mission is to revolutionize accessibility for physically disabled individuals, including those who are deaf, blind, or mute. We are harnessing the power of cutting-edge AI technology, combining image and speech processing, to facilitate seamless real-time communication between disabled individuals and their desktop or laptop devices. Our innovation empowers and enriches lives, transcending barriers and fostering inclusivity for all.',
    imageUrl: 'project-showcase-mockup.jpg',
    buttonText: 'REQUEST A PRODUCT',
    buttonLink: '/contact',
  };

  const words = [
    {
      text: "Products...",
      className: "text-purple-500 dark:text-purple-500 text-4xl sm:text-4xl md:text-4xl lg:text-5xl"
    },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center ">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-500 border-solid"></div>
      </div>
    );
  }


  return (
    <div >
      <div className={`h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased border-b ${sectionBorderStyle}`}>
        <div className="max-w-5xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl text-purple-500 text-center font-sans font-bold">
            <DynamicTypewriterEffect words={words} />
          </h1>
          <nav className="relative z-10 mt-4 text-sm md:text-base text-white-400">
            <ol className="list-reset flex justify-center space-x-2 md:space-x-4">
              <li>
                <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-white-300">Products</li>
            </ol>
          </nav>
          <p className="relative z-10 mt-8 text-lg md:text-xl text-white-300 leading-relaxed text-justify md:text-center max-w-4xl mx-auto">
            Our advanced products leverage the latest in Data Engineering and AI to deliver real-world impact. Built for business growth and social good, they combine cutting-edge tech with seamless user experience. From scalable data pipelines to AI-powered insights, we help organizations innovate, optimize, and thrive in today’s connected world.
          </p>
        </div>
      </div>

      <DynamicTracingBeam className="max-w-7xl">
        <section className={` text-white py-16 md:py-20 border-b ${sectionBorderStyle}`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-stretch gap-10 md:gap-0">
              <div className="md:w-1/2 lg:w-5/12 text-center md:text-left
                      flex flex-col justify-center 
                      md:pr-6 lg:pr-8 
                      md:border-r md:border-neutral-700/50 
                      pb-10 md:pb-0 
                      ">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    {projectData.title}
                  </h2>
                  <p className="text-white-300 leading-relaxed mb-8 text-sm md:text-base whitespace-pre-line text-justify">
                    {projectData.description}
                  </p>
                  <Link
                    href={projectData.buttonLink}
                    className="inline-block bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold py-3 px-8 rounded-full text-sm uppercase tracking-wider shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
                  >
                    {projectData.buttonText}
                  </Link>
                </div>
              </div>


              <div className="md:w-1/2 lg:w-7/12 
                      mt-10 md:mt-0 
                      flex items-center justify-center 
                      md:pl-6 lg:pl-8 
                      ">
                <CardContainer containerClassName="py-0" className="inter-var">
                  <CardBody className="bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.2] w-auto sm:w-[30rem] md:w-full h-auto rounded-xl p-0 md:p-2 border-0">
                    <CardItem
                      translateZ="80"
                      rotateX={10}
                      rotateZ={-3}
                      className="w-full"
                    >
                      <Image
                        src={`/${projectData.imageUrl}`} 
                        alt={`${projectData.title} interactive 3D mockup`}
                        width={800} 
                        height={600}
                        className="h-auto w-full max-h-[70vh] object-contain rounded-xl group-hover/card:shadow-xl"
                      />

                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            </div>
          </div>
        </section>
      </DynamicTracingBeam>
    </div>
  );
};

export default ProjectPage;



