
import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
    title: 'About Us | ElanTech Solutions',
    description: 'We specialize in harnessing the transformative potential of cutting-edge technologies.',
    keywords: ['ElanTech Solutions', 'Technology', 'About Us', 'Software Development'],
    authors: [{ name: 'ElanTech Solutions', url: 'https://elantechsolutions.vercel.app' }],
    openGraph: {
        title: 'About Us | ElanTech Solutions',
        description: 'We specialize in harnessing the transformative potential of cutting-edge technologies.',
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
        description: 'We specialize in harnessing the transformative potential of cutting-edge technologies.',
        images: ['/logo.png'], 
        creator: '@elantech',
    },
    metadataBase: new URL('https://elantechsolutions.vercel.app'),
    alternates: {
        canonical: '/about',
    },
};

export const revalidate = 3600;


const AboutUsPage = () => {
    return <AboutPageClient />;
};

export default AboutUsPage;
