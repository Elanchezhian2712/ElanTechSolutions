
import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
    title: 'About Us | ElanTech Solutions',
    description: 'We specialize in harnessing the transformative potential of cutting-edge technologies.',
};

const AboutUsPage = () => {
    return <AboutPageClient />;
};

export default AboutUsPage;