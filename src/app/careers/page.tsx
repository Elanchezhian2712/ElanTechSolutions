// app/careers/page.tsx

import type { Metadata } from 'next';
import CareersPageClient from './CareersPageClient'; 


interface Job {
  id: number;
  title: string;
  type: string;
  location: string;
  department: string;
  descriptionSnippet: string;
  link: string;
}

export const metadata: Metadata = {
    title: 'Careers | ElanTech Solutions',
   description: "Elan Tech Solutions specializes in custom software, AI integrations, and scalable web platforms, tailored to drive business success.",
    keywords: ['ElanTech Solutions', 'AI Careers', 'Tech Jobs', 'Software Development Careers', 'Machine Learning Jobs', 'Careers', 'Jobs'], 
    authors: [{ name: 'ElanTech Solutions', url: 'https://elantechsolutions.vercel.app' }],
    openGraph: {
        title: 'Careers | ElanTech Solutions',
        description: "Elan Tech Solutions specializes in custom software, AI integrations, and scalable web platforms, tailored to drive business success.",
        url: 'https://elantechsolutions.vercel.app/careers',
        siteName: 'ElanTech Solutions',
        images: [
            {
                url: '/logo.png', 
                width: 1200,
                height: 630,
                alt: 'Join the ElanTech Solutions Team',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Careers | ElanTech Solutions',
        description: "Elan Tech Solutions specializes in custom software, AI integrations, and scalable web platforms, tailored to drive business success.",
        images: ['/images/og/careers-twitter-image.jpg'], 
        creator: '@elantech', 
    },
    metadataBase: new URL('https://elantechsolutions.vercel.app'),
    alternates: {
        canonical: '/careers',
    },
};




const getCurrentJobs = async (): Promise<Job[]> => {
  return [
    {
      id: 1,
      title: 'UI/UX Designer - AI Platforms',
      type: 'Full-Time',
      location: 'Remote (IN)',
      department: 'Design',
      descriptionSnippet: 'Craft intuitive and visually stunning user experiences for our next-generation AI products and tools.',
      link: '/contact' 
    },
    {
      id: 2,
      title: 'Frontend Developer (React/Next.js)',
      type: 'Full-Time',
      location: 'Remote (IN)',
      department: 'Engineering',
      descriptionSnippet: 'Build responsive and high-performance user interfaces for our AI applications, leveraging modern web technologies.',
      link: '/contact'
    },
    {
      id: 3,
      title: 'Backend Developer (Python/Node.js)',
      type: 'Full-Time',
      location: 'Remote (IN)',
      department: 'Engineering',
      descriptionSnippet: 'Develop robust and scalable backend systems, APIs, and data pipelines to power our AI services.',
      link: '/contact'
    },
    {
      id: 4,
      title: 'AI/Machine Learning Engineer',
      type: 'Full-Time',
      location: 'Remote (IN)',
      department: 'AI Research & Development',
      descriptionSnippet: 'Research, design, and implement cutting-edge machine learning models to solve complex real-world problems.',
      link: '/contact'
    },
    {
      id: 5,
      title: 'QA Automation Engineer',
      type: 'Full-Time',
      location: 'Remote (IN)',
      department: 'Quality Assurance',
      descriptionSnippet: 'Design and implement automated testing frameworks to ensure the quality and reliability of our AI software.',
      link: '/contact'
    },
    {
      id: 6,
      title: 'Digital Marketing Lead - AI Products',
      type: 'Full-Time',
      location: 'Remote (IN)',
      department: 'Marketing',
      descriptionSnippet: 'Drive the digital marketing strategy for our AI solutions, focusing on growth, engagement, and brand awareness.',
      link: '/contact'
    },
  ];
};


const CareersPage = async () => {
    const jobs = await getCurrentJobs();

    const careersPageContent = {
        careersText: "Careers", 
        heroSubtitle: "Join Our Mission to Redefine AI.", 
        heroParagraph: "At ElanTech, we're not just building software; we're crafting the future of intelligence. If you're passionate about innovation, eager to solve complex challenges, and want to make a real-world impact with AI, you've come to the right place. Explore opportunities to grow with a team that values creativity, collaboration, and continuous learning.",
        weAreHiringText: "Current Openings", 
        openApplicationText: "Don't see your ideal role? We're always looking for exceptional talent to join our mission.", 
    };

    return (
        <CareersPageClient
            jobs={jobs}
            careersText={careersPageContent.careersText}
            heroSubtitle={careersPageContent.heroSubtitle}
            heroParagraph={careersPageContent.heroParagraph}
            weAreHiringText={careersPageContent.weAreHiringText}
            openApplicationText={careersPageContent.openApplicationText}
        />
    );
};

export default CareersPage;