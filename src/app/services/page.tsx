import type { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient'; 


export interface ServiceItemData {
  id: string;
  title: string;
  description: string;
  iconId: string;
}

export const metadata: Metadata = {
    title: 'Our Services | ElanTech Solutions',
    description: 'Discover ElanTech Solutions\' comprehensive services: AI Solutions, Web & App Development, UI/UX Design, Digital Marketing, and Business Analysis.', // Slightly more concise and covers all
    keywords: [
        'ElanTech Solutions',
        'Technology Services',
        'Software Development',
        'AI Solutions',
        'Web Application Development',
        'Mobile App Development',
        'UI/UX Design',
        'Digital Marketing',
        'Business Analysis',
    ],
    authors: [{ name: 'ElanTech Solutions', url: 'https://elantechsolutions.vercel.app' }], 
    openGraph: {
        title: 'Our Services | ElanTech Solutions',
        description: 'Explore innovative AI, web, app, design, and marketing services from ElanTech Solutions.', 
        url: 'https://elantechsolutions.vercel.app/services', 
        siteName: 'ElanTech Solutions',
        images: [
            {
                url: '/opengraph-image.png', 
                width: 1200,
                height: 630,
                alt: 'ElanTech Solutions Services Overview',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Our Services | ElanTech Solutions',
        description: 'Explore innovative AI, web, app, design, and marketing services from ElanTech Solutions.',
        images: ['/twitter-image.png'], 
        creator: '@YourTwitterHandle', 
    },
    metadataBase: new URL('https://elantechsolutions.vercel.app'),
    alternates: {
        canonical: '/services',
    },
};


export const revalidate = 3600;


const cardData: ServiceItemData[] = [
  {
    id: "ai-solutions", 
    title: "AI Solutions",
    description: "Custom AI applications, automation tools, and intelligent systems designed to solve real business problems and enhance efficiency.",
    iconId: "webDev", 
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Responsive and scalable websites and web apps built using modern frameworks to deliver seamless user experiences.",
    iconId: "webApp", 
  },
  {
    id: "app-development",
    title: "APP Development", 
    description: "Mobile app development for iOS and Android with user-friendly interfaces, native performance, and feature-rich designs.",
    iconId: "appDev", 
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "User-centric interface and experience design that combines aesthetics with usability to drive user engagement and satisfaction.",
    iconId: "webDesign", 
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Performance-driven digital marketing strategies including SEO, content, paid ads, and social media to grow your brand online.",
    iconId: "dataAnalysis", 
  },
  {
    id: "business-analysis", 
    title: "Business Analyst", 
    description: "Bridge the gap between business needs and technology with expert analysis, process modeling, and solution recommendations.",
    iconId: "dbMgmt", 
  },
];


export default function ServicesPage() {
    return <ServicesPageClient cardData={cardData} />;
}