import type { Metadata } from 'next';
import CareersPageClient from './CareersPageClient';

export const metadata: Metadata = {
    title: 'Careers | ElanTech Solutions',
    description: 'Join our team and explore exciting career opportunities at ElanTech Solutions.',
};

const CareersPage = () => {
    return <CareersPageClient />;
};

export default CareersPage;