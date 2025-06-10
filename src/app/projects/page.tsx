import type { Metadata } from 'next';
import ProjectPageClient from './ProjectPageClient'; 


export const metadata: Metadata = {
    title: 'Our Projects | ElanTech Solutions',
    description: 'Discover innovative projects by ElanTech Solutions, showcasing our expertise in Data Engineering and AI for real-world impact.',
};


export const revalidate = 3600; 

const getProjectDetails = async () => {

  return {
    id: 'v-smart-aid',
    title: 'V-Smart Aid',
    description:
      'Our project\'s mission is to revolutionize accessibility for physically disabled individuals, including those who are deaf, blind, or mute. We are harnessing the power of cutting-edge AI technology, combining image and speech processing, to facilitate seamless real-time communication between disabled individuals and their desktop or laptop devices. Our innovation empowers and enriches lives, transcending barriers and fostering inclusivity for all.',
    imageUrl: 'project-showcase-mockup.jpg', 
    buttonText: 'REQUEST A PRODUCT',
    buttonLink: '/contact',
  };
};

const getProjectPageTexts = async () => {
    return {
        ProjectText: "Projects" 
    };
};

const ProjectsPage = async () => {
    const projectData = await getProjectDetails();
    const { ProjectText } = await getProjectPageTexts();

    return (
        <ProjectPageClient
            projectData={projectData}
            ProjectText={ProjectText}
        />
    );
};

export default ProjectsPage;