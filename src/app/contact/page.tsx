import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient'; 


export const metadata: Metadata = {
    title: 'Contact Us | ElanTech Solutions',
    description: 'Get in touch with ElanTech Solutions. We are here to answer your questions about our services, support, or collaborations.',
};


export const revalidate = 3600;  


async function getContactPageStaticData() {

  return {
    contactText: "Contact Us",
    heroParagraph: "We're just one step away from connecting with you! Whether you have questions about our services, need expert support, or are looking to collaborate on something innovative, our team is here to help. Reach out via phone, email, or our contact form — and let’s start a conversation that drives meaningful impact and lasting success for your business.",
    subText: "Get in Touch",
    formIntroText: "We'd love to hear from you — fill out the form and we'll get back to you soon."
  };
}


const ContactUsPage = async () => {
    const staticData = await getContactPageStaticData();

    return (
        <ContactPageClient
            contactText={staticData.contactText}
            heroParagraph={staticData.heroParagraph}
            subText={staticData.subText}
            formIntroText={staticData.formIntroText}
        />
    );
};

export default ContactUsPage;