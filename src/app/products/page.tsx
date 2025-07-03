import type { Metadata } from 'next';
import ProductPageClient from './ProductPageClient'; 


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

 

const getProjectDetails = async () => {

  return {
    id: 'v-smart-aid',
    title: 'V-Smart Aid',
    description:
      'Our product\'s mission is to revolutionize accessibility for physically disabled individuals, including those who are deaf, blind, or mute. We are harnessing the power of cutting-edge AI technology, combining image and speech processing, to facilitate seamless real-time communication between disabled individuals and their desktop or laptop devices. Our innovation empowers and enriches lives, transcending barriers and fostering inclusivity for all.',
    imageUrl: 'project-showcase-mockup.jpg', 
    buttonText: 'Request a Demo',
    buttonLink: '/contact',
  };
};

const getProjectPageTexts = async () => {
    return {
        ProjectText: "Our Product" 
    };
};

const ProjectsPage = async () => {
    const projectData = await getProjectDetails();
    const { ProjectText } = await getProjectPageTexts();

    return (
        <ProductPageClient
            projectData={projectData}
            ProjectText={ProjectText}
        />
    );
};

export default ProjectsPage;