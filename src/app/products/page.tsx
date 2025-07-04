// src/app/products/page.tsx

import type { Metadata } from 'next';
import React from 'react';
import ProductPageClient from './ProductPageClient';
import type { ProjectData } from './ProductPageClient'; // Import the full interface

// --- NEW ICONS for the updated features ---
const EyeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const MicrophoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 016 0v8.25a3 3 0 01-3 3z" /></svg>
);
const HandRaisedIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" /></svg>
);

// You can name this whatever you like, e.g., BrailleKeyboardIcon or CustomKeyboardIcon
const SquaresPlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 5H4C2.89543 5 2 5.89543 2 7V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V7C22 5.89543 21.1046 5 20 5ZM7.5 11C8.32843 11 9 10.3284 9 9.5C9 8.67157 8.32843 8 7.5 8C6.67157 8 6 8.67157 6 9.5C6 10.3284 6.67157 11 7.5 11ZM12 11C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.1716 8 10.5 8.67157 10.5 9.5C10.5 10.3284 11.1716 11 12 11ZM16.5 11C17.3284 11 18 10.3284 18 9.5C18 8.67157 17.3284 8 16.5 8C15.6716 8 15 8.67157 15 9.5C15 10.3284 15.6716 11 16.5 11ZM7.5 16C8.32843 16 9 15.3284 9 14.5C9 13.6716 8.32843 13 7.5 13C6.67157 13 6 13.6716 6 14.5C6 15.3284 6.67157 16 7.5 16ZM16.5 16C17.3284 16 18 15.3284 18 14.5C18 13.6716 17.3284 13 16.5 13C15.6716 13 15 13.6716 15 14.5C15 15.3284 15.6716 16 16.5 16ZM13.5 15.5C13.5 15.7761 13.2761 16 13 16H11C10.7239 16 10.5 15.7761 10.5 15.5V14.5C10.5 14.2239 10.7239 14 11 14H13C13.2761 14 13.5 14.2239 13.5 14.5V15.5Z"
    />
  </svg>
);

// Your metadata remains the same, it's already great.
export const metadata: Metadata = {
    title: 'Our Product | ElanTech Solutions',
    description: "Elan Tech Solutions specializes in custom software, AI integrations, and scalable web platforms, tailored to drive business success.",
    keywords: ['ElanTech Solutions', 'Technology', 'Our Product', 'Software Development'],
    authors: [{ name: 'ElanTech Solutions', url: 'https://elantechsolutions.vercel.app' }],
    openGraph: {
         title: 'Our Product | ElanTech Solutions',
        description: "Elan Tech Solutions specializes in custom software, AI integrations, and scalable web platforms, tailored to drive business success.",
        url: 'https://elantechsolutions.vercel.app/products', 
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
         title: 'Our Product | ElanTech Solutions',
        description: "Elan Tech Solutions specializes in custom software, AI integrations, and scalable web platforms, tailored to drive business success.",
        images: ['/logo.png'], 
        creator: '@elantech',
    },
    metadataBase: new URL('https://elantechsolutions.vercel.app'),
    alternates: {
        canonical: '/products',
    },
};

// This function now provides the complete data structure with your new content
const getProjectDetails = async (): Promise<ProjectData> => {
  return {
    id: 'v-smart-aid',
    title: 'V-Smart Aid',
    tagline: 'Technology Without Barriers.',
    description: "V-Smart Aid provides a user-friendly and intuitive interface for effortless interaction. It’s designed to provide hands-free control and smart automation, making digital navigation accessible to everyone. With advanced virtual interaction capabilities tailored to visual, auditory, and mobility impairments, it empowers individuals with personalized, inclusive digital experiences.",
    imageUrl: 'project-showcase-mockup.jpg',
    buttonText: 'Learn More',
    buttonLink: '/contact',
    features: [
      {
        icon: <EyeIcon className="h-8 w-8" />,
        title: 'Virtual Eye Mouse',
        description: 'Effortless computer navigation with intuitive eye control, allowing users to move the cursor simply by looking.'
      },
      {
        icon: <MicrophoneIcon className="h-8 w-8" />,
        title: 'Voice Assistant',
        description: 'Hands-free device control and smart automation through powerful voice commands for a seamless experience.'
      },
      {
        icon: <HandRaisedIcon className="h-8 w-8" />,
        title: 'Virtual Hand Mouse',
        description: 'Intuitive cursor control using hand gestures recognized by your webcam, offering a natural way to interact.'
      },
      {
        icon: <SquaresPlusIcon className="h-8 w-8" />,
        title: 'Virtual Keyboard',
        description: 'Typing made accessible with advanced recognition of finger or hand movements, eliminating physical barriers.'
      },
    ],
    howItWorks: [
        {
            step: 1,
            title: "Connect Device",
            description: "Unlock a world of possibilities with standard webcam and microphone support. No special hardware required."
        },
        {
            step: 2,
            title: "Configure It",
            description: "Easily customize settings and preferences to tailor the product to your specific needs and interaction style."
        },
        {
            step: 3,
            title: "Enjoy!",
            description: "You're all set! Start enjoying the full benefits and newfound digital freedom right away."
        }
    ],
    // These are placeholders. You should update them with real content.
    galleryImages: [
      'gallery/v-smart-dashboard.png', 
      'gallery/v-smart-voice-ui.png',
      'gallery/v-smart-settings.png',
    ],
    testimonial: {
      quote: "V-Smart Aid isn't just a tool; it's a gateway to independence. For the first time, I feel truly in control of my digital life. The impact has been profound.",
      author: 'Alex Chen',
      role: 'Accessibility Advocate',
      company: 'Digital Inclusion Now'
    }
  };
};

const ProductsPage = async () => {
    const projectData = await getProjectDetails();

    return (
        <ProductPageClient
            projectData={projectData}
        />
    );
};

export default ProductsPage;