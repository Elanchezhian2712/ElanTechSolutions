import type { Metadata } from 'next';
import CareersPageClient from './CareersPageClient'; 


export const metadata: Metadata = {
    title: 'Careers | ElanTech Solutions',
    description: 'Explore exciting career opportunities at ElanTech Solutions. Join our innovative team and shape the future of technology.',
    keywords: ['ElanTech Solutions', 'Technology', 'Careers', 'Software Development'],
    authors: [{ name: 'ElanTech Solutions', url: 'https://elantechsolutions.vercel.app' }],
    openGraph: {
        title: 'Careers | ElanTech Solutions',
        description: 'Explore exciting career opportunities at ElanTech Solutions. Join our innovative team and shape the future of technology.',
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
        title: 'Careers | ElanTech Solutions',
        description: 'Explore exciting career opportunities at ElanTech Solutions. Join our innovative team and shape the future of technology.',
        images: ['/logo.png'], 
        creator: '@elantech',
    },
    metadataBase: new URL('https://elantechsolutions.vercel.app'),
    alternates: {
        canonical: '/about',
    },
};


export const revalidate = 3600; 


const getCurrentJobs = async () => {

  return [
    { id: 1, title: 'UI/UX Designer', type: 'Full-Time', location: 'On-Site', link: '/contact' },
    { id: 2, title: 'Front-End Developer', type: 'Full-Time', location: 'On-Site', link: '/contact' },
    { id: 3, title: 'Back-End Developer', type: 'Full-Time', location: 'On-Site', link: '/contact' },
    { id: 4, title: 'QA Engineer', type: 'Full-Time', location: 'On-Site', link: '/contact' },
    { id: 5, title: 'Business Analyst', type: 'Full-Time', location: 'On-Site', link: '/contact' },
    { id: 6, title: 'Digital Marketing Specialist', type: 'Full-Time', location: 'On-Site', link: '/contact' },
  ];
};


const CareersPage = async () => {
    const jobs = await getCurrentJobs();
    const careersText = "Careers";
    const weAreHiringText = "We are Hiring!";

    return (
        <CareersPageClient
            jobs={jobs}
            careersText={careersText}
            weAreHiringText={weAreHiringText}
        />
    );
};

export default CareersPage;