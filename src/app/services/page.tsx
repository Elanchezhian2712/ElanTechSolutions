

import type { Metadata } from 'next';
import ServicesPageClient, { type CardData } from './ServicesPageClient'; 


export const metadata: Metadata = {
    title: 'Services | ElanTech Solutions',
    description: 'Explore our range of services including Web Development, Data Engineering, AI, and more.',
    keywords: ['ElanTech Solutions', 'Technology', 'Services', 'Software Development'],
    authors: [{ name: 'ElanTech Solutions', url: 'https://elantechsolutions.vercel.app' }],
    openGraph: {
        title: 'Services | ElanTech Solutions',
        description: 'Explore our range of services including Web Development, Data Engineering, AI, and more.',
        url: 'https://elantechsolutions.vercel.app/about', 
        siteName: 'ElanTech Solutions',
        images: [
            {
                url: '/logo.png', 
                width: 1200,      
                height: 630,      
                alt: 'ElanTech Solutions Logo', 
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Services | ElanTech Solutions',
        description: 'Explore our range of services including Web Development, Data Engineering, AI, and more.',
        images: ['/logo.png'], 
        creator: '@elantech',
    },
    metadataBase: new URL('https://elantechsolutions.vercel.app'),
    alternates: {
        canonical: '/about',
    },
};

export const revalidate = 3600;

const cardData: CardData[] = [
    {
      id: "ai-solutions",
      iconColor: "purple",
      text: "AI Solutions",
      descriptions: "Harness the power of AI to transform your business processes. Our AI solutions include machine learning, natural language processing, and computer vision, tailored to meet your specific needs.",
      colors: [[168, 85, 247], [192, 132, 252]],
    },
    {
      id: "web-dev",
      iconColor: "purple",
      text: "Web Development",
      descriptions: "Build robust and scalable web applications with our expert web development services. We specialize in creating dynamic, responsive, and user-friendly websites that enhance your online presence.",
      colors: [[168, 85, 247], [192, 132, 252]],
    },
    {
      id: "data-eng",
      iconColor: "purple",
      text: "Data Engineering",
      descriptions: "Unlock the full potential of your data with our comprehensive data engineering services. We help you design, build, and maintain robust data pipelines and architectures that drive insights and innovation.",
      colors: [[168, 85, 247], [192, 132, 252]],
    },
    {
      id: "ui-ux",
      iconColor: "purple",
      text: "UI/UX Design",
      descriptions: "Create intuitive and engaging user experiences with our UI/UX design services. We focus on understanding user needs and behaviors to deliver designs that are not only visually appealing but also highly functional.",
      colors: [[168, 85, 247], [192, 132, 252]],
    },
    {
      id: "digital-marketing",
      iconColor: "purple",
      text: "Digital Marketing",
      descriptions: "Enhance your online visibility and reach your target audience with our digital marketing services. From SEO and content marketing to social media management and PPC campaigns, we provide comprehensive strategies to grow your business.",
      colors: [[168, 85, 247], [192, 132, 252]],
    },
    {
      id: "saas-dev",
      iconColor: "purple",
      text: "SaaS Development",
      descriptions: "Leverage our expertise in SaaS development to build scalable and secure applications. We follow industry best practices to ensure your SaaS product is robust, user-friendly, and ready for the market.",
      colors: [[168, 85, 247], [192, 132, 252]],
    },
];


export default function ServicesPage() {
    return <ServicesPageClient cardData={cardData} />;
}