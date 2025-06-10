'use client'; 
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';


const DynamicSparklesText = dynamic(() =>
  import('../components/ui/sparkles-text').then((mod) => mod.SparklesText)
);

const DynamicTracingBeam = dynamic(() =>
  import('../components/ui/tracing-beam').then((mod) => mod.TracingBeam),
  { ssr: false } 
);

const DynamicHyperText = dynamic(() =>
  import('../components/ui/hyper-text').then((mod) => mod.HyperText)
);


interface ProjectData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
}


interface ProjectPageClientProps {
  projectData: ProjectData;
  ProjectText: string;
}

const ProjectPageClient = ({ projectData, ProjectText }: ProjectPageClientProps) => {
  const sectionBorderStyle = "border-neutral-700/50";

  return (
    <div className='bg-black'>
      {/* Hero Section */}
      <div className={`h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased border-b ${sectionBorderStyle}`}>
        <div className="max-w-5xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl text-purple-500 text-center font-sans font-bold">
            <DynamicSparklesText>{ProjectText}</DynamicSparklesText>
          </h1>
          <nav className="relative z-10 mt-4 text-sm md:text-base text-white-400">
            <ol className="list-reset flex justify-center space-x-2 md:space-x-4">
              <li>
                <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-white-300">Products</li>
            </ol>
          </nav>
          <p className="relative z-10 mt-8 text-lg md:text-xl text-white-300 leading-relaxed text-justify md:text-center max-w-4xl mx-auto">
            Our advanced products leverage the latest in Mobile App Development and AI to deliver real-world impact. Built for business growth and social good, they combine cutting-edge tech with seamless user experience. From scalable data pipelines to AI-powered insights, we help organizations innovate, optimize, and thrive in today’s connected world.
          </p>
        </div>
      </div>

      {/* Project Showcase Section */}
      <DynamicTracingBeam className="max-w-7xl">
        <section className={`text-white py-16 md:py-20 border-b ${sectionBorderStyle}`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-stretch gap-10 md:gap-0">
              <div className="md:w-1/2 lg:w-5/12 text-center md:text-left flex flex-col justify-center md:pr-6 lg:pr-8 md:border-r md:border-neutral-700/50 pb-10 md:pb-0">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    <DynamicHyperText>{projectData.title}</DynamicHyperText>
                  </h2>
                  <p className="text-white-300 leading-relaxed mb-8 text-sm md:text-base whitespace-pre-line text-justify">
                    {projectData.description}
                  </p>
                  <Link
                    href={projectData.buttonLink}
                    className="inline-block bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold py-3 px-8 rounded-full text-sm uppercase tracking-wider shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
                  >
                    {projectData.buttonText}
                  </Link>
                </div>
              </div>

              <div className="md:w-1/2 lg:w-7/12 mt-10 md:mt-0 flex items-center justify-center md:pl-6 lg:pl-8">
                <div
                  className="relative shadow-2xl shadow-purple-500/[0.2] rounded-xl w-auto sm:w-[20rem] md:w-[30rem] overflow-hidden">
                  <Image
                    src={`/${projectData.imageUrl}`}
                    alt={`${projectData.title} interactive 3D mockup`}
                    width={800}
                    height={600}
                    priority={true} 
                    className="block w-full h-auto rounded-xl border-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </DynamicTracingBeam>
    </div>
  );
};

export default ProjectPageClient;