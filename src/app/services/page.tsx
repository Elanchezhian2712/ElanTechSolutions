

import type { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
    title: 'Services | ElanTech Solutions',
    description: 'Explore our range of services including Data Engineering, AI, and more.',
};

const ServicesPage = () => {
    return <ServicesPageClient />;
};

export default ServicesPage;