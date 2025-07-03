'use client'; 
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { FadeInContainer } from '../components/FadeInContainer';

const DynamicSparklesText = dynamic(() =>
  import('../components/ui/sparkles-text').then((mod) => mod.SparklesText), { ssr: false }
);



interface ProjectData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
}


interface ProductPageClientProps {
  projectData: ProjectData;
  ProjectText: string;
}

const ProductPageClient = ({ projectData }: ProductPageClientProps) => {
  const sectionBorderStyle = "border-neutral-700/50";

  return (
    <div className={`bg-gradient-to-br from-purple-950/25 via-neutral-950 to-neutral-950 text-neutral-300 antialiased selection:bg-purple-500 selection:text-white min-h-screen`}>
      {/* Hero Section */}
      <div
        className={`rounded-b-3xl md:rounded-b-4xl min-h-[70vh] sm:min-h-[80vh] md:h-auto md:min-h-[calc(100vh-80px)] xl:min-h-[45rem] w-full relative flex flex-col items-center justify-center border-b ${sectionBorderStyle} px-4 py-16 sm:py-20 md:py-24 overflow-hidden`}
      >
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-neutral-950/0 to-neutral-950/0 opacity-75"></div>
      
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-950/70 to-transparent z-0"></div> 
 <FadeInContainer>
        <div className="max-w-4xl 2xl:max-w-5xl mt-30 mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold font-sans !leading-tight text-white">
           <DynamicSparklesText>Our Product</DynamicSparklesText>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-purple-500/80 tracking-wider uppercase font-medium">
          Smarter Solutions. Stronger Futures.
          </p>
          <nav aria-label="Breadcrumb" className="relative z-10 mt-6 sm:mt-8 text-sm md:text-base text-neutral-400">
            <ol className="list-none p-0 inline-flex items-center space-x-1.5 md:space-x-2">
              <li>
                <Link href="/" className="hover:text-purple-300 transition-colors duration-200">Home</Link>
              </li>
              <li className="text-neutral-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li>
                <span className="text-purple-500/90 font-medium" aria-current="page">Our Product</span>
              </li>
            </ol>
          </nav>
          <p className="relative z-10 mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-neutral-300/90 leading-relaxed max-w-3xl mx-auto">
             Our advanced products harness the power of Artificial Intelligence to deliver real-world impact and drive innovation. Designed for business growth and social good, they offer seamless user experiences with powerful, scalable performance. From intelligent automation to data-driven insights, we help organizations optimize and thrive in today’s connected world.
          </p>
        </div>
        </FadeInContainer>
      </div>

      {/* Project Showcase Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInContainer>
        <section className="text-white py-32 md:py-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-stretch gap-10 md:gap-0">
              <div className="md:w-1/2 lg:w-5/12 text-center md:text-left flex flex-col justify-center md:pr-6 lg:pr-8 md:border-r md:border-neutral-700/50 pb-10 md:pb-0">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    {projectData.title}
                  </h2>
                  <p className="text-white-300 leading-relaxed mb-8 text-sm md:text-base whitespace-pre-line text-justify">
                    {projectData.description}
                  </p>
                  <Link
                    href={projectData.buttonLink}
                    className="mt-4 inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
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
        </FadeInContainer>
      </div>
    </div>
  );
};

export default ProductPageClient;