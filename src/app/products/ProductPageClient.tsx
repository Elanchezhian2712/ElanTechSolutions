// src/app/products/ProductPageClient.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { FadeInContainer } from '../components/FadeInContainer'; // Adjust path if needed

// --- INTERFACES: These define the shape of our data. Export them to be used in page.tsx ---
export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}
// NEW: Interface for the "How It Works" steps
export interface HowItWorksStep {
    step: number;
    title: string;
    description: string;
}
export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  description:string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
  features: Feature[];
  galleryImages: string[];
  testimonial: Testimonial;
  howItWorks: HowItWorksStep[]; 
}
interface ProductPageClientProps {
  projectData: ProjectData;
}

const DynamicSparklesText = dynamic(() =>
  import('../components/ui/sparkles-text').then((mod) => mod.SparklesText), { ssr: false }
);

const ProductPageClient = ({ projectData }: ProductPageClientProps) => {
  const sectionBorderStyle = "border-neutral-800";

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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 mb-64">
        <FadeInContainer>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative shadow-2xl shadow-purple-900/20 rounded-2xl overflow-hidden group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <Image
                src={`/Images/${projectData.imageUrl}`}
                alt={`${projectData.title} mockup`}
                width={600}
                height={400}
                priority={true}
                className="relative block w-full h-auto rounded-xl border border-neutral-800"
              />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-base font-semibold text-purple-400 uppercase tracking-wider">{projectData.tagline}</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6">
                {projectData.title}
              </h2>
              <p className="text-neutral-300 leading-relaxed mb-8 text-lg text-justify">
                {projectData.description}
              </p>
              <Link
                href={projectData.buttonLink}
                className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out"
              >
                {projectData.buttonText}
              </Link>
            </div>
          </section>
        </FadeInContainer>

        <FadeInContainer>
          <section className="py-24 sm:py-32">
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Product Features</h2>
                <p className="mt-4 text-lg text-neutral-400">Core functionalities designed for a seamless and intuitive user experience.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projectData.features.map((feature, index) => (
                <div key={index} className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 hover:border-purple-800/50 transition-colors duration-300 flex items-start gap-6">
                  <div className="flex-shrink-0 text-purple-400">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    <p className="mt-2 text-base text-neutral-400 text-justify">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeInContainer>

        <FadeInContainer>
            <section className={`pt-4 sm:pt-6 pb-24 sm:pb-32`}>
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">How It Works</h2>
                    <p className="mt-4 text-lg text-neutral-400">Discover the simple steps to get started with our V-Smart Aid product.</p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {projectData.howItWorks.map((step) => (
                        <div key={step.step} className="relative bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800">
                            <div className="flex items-center justify-center h-16 w-16 bg-purple-950/50 border border-purple-800/50 rounded-full mx-auto mb-6">
                                <span className="text-2xl font-bold text-purple-300">{step.step}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">{step.title}</h3>
                            <p className="mt-2 text-base text-neutral-400">{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </FadeInContainer>
        
        {/* === SECTION 4: Visual Gallery (Unchanged, will use placeholder data) === */}
        {/* <FadeInContainer>
          <section className="pt-4 sm:pt-6 pb-12 sm:pb-16">
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white">See It In Action</h2>
                <p className="mt-4 text-lg text-neutral-400">Explore the intuitive interface and powerful capabilities of our platform.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {projectData.galleryImages.map((src, index) => (
                <div key={index} className="relative rounded-xl overflow-hidden group shadow-lg">
                  <Image
                    src={`/${src}`}
                    alt={`Gallery image ${index + 1} for ${projectData.title}`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover aspect-[4/3] transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </section>
        </FadeInContainer> */}
      </main>
    </div>
  );
};

export default ProductPageClient;