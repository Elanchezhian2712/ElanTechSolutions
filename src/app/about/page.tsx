
import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
    title: 'About Us | ElanTech Solutions',
    description: "Elan Tech Solutions specializes in custom software, AI integrations, and scalable web platforms, tailored to drive business success.",
    keywords: ['ElanTech Solutions', 'Technology', 'About Us', 'Software Development'],
    authors: [{ name: 'ElanTech Solutions', url: 'https://elantechsolutions.vercel.app' }],
    openGraph: {
        title: 'About Us | ElanTech Solutions',
        description: "Elan Tech Solutions specializes in custom software, AI integrations, and scalable web platforms, tailored to drive business success.",
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
        title: 'About Us | ElanTech Solutions',
        description: "Elan Tech Solutions specializes in custom software, AI integrations, and scalable web platforms, tailored to drive business success.",
        images: ['/logo.png'], 
        creator: '@elantech',
    },
    metadataBase: new URL('https://elantechsolutions.vercel.app'),
    alternates: {
        canonical: '/about',
    },
};




const AboutUsPage = () => {
    return <AboutPageClient />;
};

export default AboutUsPage;