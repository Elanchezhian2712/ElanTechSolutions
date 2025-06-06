

import type { Metadata } from 'next';
import ProjectPageClient from './ProjectPageClient';

export const metadata: Metadata = {
    title: 'Products | ElanTech Solutions',
    description: 'Explore our innovative products designed to drive business growth and social impact.',
};

const ProjectPage = () => {
    return <ProjectPageClient />;
};

export default ProjectPage;