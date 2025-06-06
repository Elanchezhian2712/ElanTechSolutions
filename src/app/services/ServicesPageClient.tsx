// src/app/blog/page.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image'; 
import dynamic from 'next/dynamic'; 

// Dynamically import heavy UI components
const DynamicBackgroundBeams = dynamic(() =>
  import('../components/ui/background-beams').then((mod) => mod.BackgroundBeams)
);

const DynamicTypewriterEffect = dynamic(() =>
  import('../components/ui/typewriter-effect').then((mod) => mod.TypewriterEffect)
);

const DynamicTracingBeam = dynamic(() =>
  import('../components/ui/tracing-beam').then((mod) => mod.TracingBeam),
  { ssr: false }
);


const DynamicGlareCard = dynamic(() =>
  import('../components/ui/glare-card').then((mod) => mod.GlareCard),
  { ssr: false }
);



const ServicesPage = () => {
  const sectionBorderStyle = "border-neutral-700/50";

  const servicesPosts = [
    {
      id: 1,
      title: 'AI solutions',
      description: `Harness the power of AI to transform your business processes. Our AI solutions include machine learning, natural language processing, and computer vision, tailored to meet your specific needs.`,
      imageUrl: '/ai-solutions.png',
    },
    {
      id: 2,
      title: 'Web Development',
      description: `Build robust and scalable web applications with our expert web development services. We specialize in creating dynamic, responsive, and user-friendly websites that enhance your online presence.`,
      imageUrl: '/web-development.png',
    },
    {
      id: 3,
      title: 'Data Engineering',
      description: `Unlock the full potential of your data with our comprehensive data engineering services. We help you design, build, and maintain robust data pipelines and architectures that drive insights and innovation.`,
      imageUrl: '/data-engineering.png',
    },
    {
      id: 4,
      title: 'UI/UX Design',
      description: `Create intuitive and engaging user experiences with our UI/UX design services. We focus on understanding user needs and behaviors to deliver designs that are not only visually appealing but also highly functional.`,
      imageUrl: '/ui-ux-design.png',
    },
    {
      id: 5,
      title: 'Digital Marketing',
      description: `Enhance your online visibility and reach your target audience with our digital marketing services. From SEO and content marketing to social media management and PPC campaigns, we provide comprehensive strategies to grow your business.`,
      imageUrl: '/digital-marketing.png',
    },
    {
      id: 6,
      title: 'SaaS development',
      description: `Leverage our expertise in SaaS development to build scalable and secure applications. We follow industry best practices to ensure your SaaS product is robust, user-friendly, and ready for the market.`,
      imageUrl: '/saas-development.png',
    },
  ];


  const words = [
    {
      text: "Services...",
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
      <div className="h-screen w-full flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-500 border-solid"></div>
      </div>
    );
  }


  return (
    <div className="bg-black">
      <div className={`h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased border-b ${sectionBorderStyle}`}>
        <div className="max-w-5xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl text-purple-500 text-center font-sans font-bold">
            <DynamicTypewriterEffect words={words} />
          </h1>
          <nav className="relative z-10 mt-4 text-sm md:text-base text-gray-400">
            <ol className="list-reset flex justify-center space-x-2 md:space-x-4">
              <li>
                <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-gray-300">Services</li>
            </ol>
          </nav>
          <p className="relative z-10 mt-8 text-lg md:text-xl text-gray-300 leading-relaxed text-justify md:text-center max-w-4xl mx-auto">
            We offer a comprehensive range of services including AI solutions, UI/UX design, Digital Marketing, Data Engineering, SaaS development, E-Commerce solutions, and Web Development. Our team delivers innovative, scalable, and user-centric solutions to help your business thrive in the digital world.
          </p>
        </div>
        <DynamicBackgroundBeams /> 
      </div>
      <DynamicTracingBeam className="max-w-7xl">
        <section
          className={`bg-black text-white py-16 md:py-20 border-b ${sectionBorderStyle}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {servicesPosts.slice(0, 3).map((post) => (
              <DynamicGlareCard
                key={post.id}
                className="flex flex-col items-start justify-center text-left p-4"
              >
                <Image
        src={post.imageUrl}
        alt={post.title}
        width={64}
        height={64}
        className="w-16 h-16 object-contain mb-4 self-end"
      />
                <h3 className="text-white font-bold text-lg mb-2">{post.title}</h3>
                <p className="text-sm text-neutral-300 mb-4 text-justify">{post.description}</p>
              </DynamicGlareCard>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {servicesPosts.slice(3).map((post) => (
              <DynamicGlareCard
                key={post.id}
                className="flex flex-col items-start justify-center text-left p-4"
              >
                <Image
        src={post.imageUrl}
        alt={post.title}
        width={64}
        height={64}
        className="w-16 h-16 object-contain mb-4 self-end"
      />

                <h3 className="text-white font-bold text-lg mb-2">{post.title}</h3>
                <p className="text-sm text-neutral-300 mb-4 text-justify">{post.description}</p>
              </DynamicGlareCard>
            ))}
          </div>
        </section>
      </DynamicTracingBeam>

    </div>
  );
};

export default ServicesPage;
