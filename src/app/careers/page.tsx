import type { Metadata } from 'next';
import CareersPageClient from './CareersPageClient'; 


export const metadata: Metadata = {
    title: 'Careers | ElanTech Solutions',
    description: 'Explore exciting career opportunities at ElanTech Solutions. Join our innovative team and shape the future of technology.',
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