

import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
    title: 'Contact Us | ElanTech Solutions',
    description: 'Get in touch with us for inquiries, support, or collaboration opportunities.',
};

const ContactPage = () => {
    return <ContactPageClient />;
};

export default ContactPage;