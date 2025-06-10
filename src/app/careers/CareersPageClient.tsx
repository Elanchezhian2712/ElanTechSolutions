'use client'; 

import Link from 'next/link';
import dynamic from 'next/dynamic';


const DynamicSparklesText = dynamic(() =>
  import('../components/ui/sparkles-text').then((mod) => mod.SparklesText)
);

const DynamicHyperText = dynamic(() =>
  import('../components/ui/hyper-text').then((mod) => mod.HyperText)
);

const DynamicTracingBeam = dynamic(() =>
  import('../components/ui/tracing-beam').then((mod) => mod.TracingBeam),
  { ssr: false } 
);


interface Job {
  id: number;
  title: string;
  type: string;
  location: string;
  link: string;
}


interface CareersPageClientProps {
  jobs: Job[];
  careersText: string;
  weAreHiringText: string;
}

const CareersPageClient = ({ jobs, careersText, weAreHiringText }: CareersPageClientProps) => {
  const sectionBorderStyle = "border-neutral-700/50";

  return (
    <div className='bg-black'>
      {/* Hero Section */}
      <div className={`h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased border-b ${sectionBorderStyle}`}>
        <div className="max-w-5xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl text-purple-500 text-center font-sans font-bold">
            <DynamicSparklesText>{careersText}</DynamicSparklesText>
          </h1>
          <nav className="relative z-10 mt-4 text-sm md:text-base text-white-400">
            <ol className="list-reset flex justify-center space-x-2 md:space-x-4">
              <li>
                <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-white-300">Careers</li> {/* Assuming this is the careers page */}
            </ol>
          </nav>
          <p className="relative z-10 mt-8 text-lg md:text-xl text-white-300 leading-relaxed text-justify md:text-center max-w-4xl mx-auto">
             Ready to kickstart your career? At Elan Tech Solutions, we offer a supportive, inclusive space where creativity and growth thrive. Join our team in Software Development, DevOps, UI/UX Design, Web Development, Machine Learning, or AI. Whether you&rsquo;re experienced or just starting out, if you&rsquo;re passionate about tech, we&rsquo;d love to hear from you. Let&rsquo;s build the future&mdash;together.
          </p>
        </div>
      </div>

      {/* Job Listings Section */}
      <DynamicTracingBeam className="max-w-7xl">
        <section className={`py-16 md:py-24 text-center border-b ${sectionBorderStyle}`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
              <div className="md:w-1/3 w-full text-center md:text-left">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  <DynamicHyperText>{weAreHiringText}</DynamicHyperText>
                </h2>
                <Link
                  href="/contact" 
                  className="inline-block bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold py-3 px-8 rounded-full text-sm shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  OPEN APPLICATION
                </Link>
              </div>
              <div className="md:w-2/3 w-full">
                <div className="space-y-0">
                  {jobs.map((job, index) => (
                    <Link
                      href={job.link}
                      className={`
                          flex justify-between items-center py-6 px-2 md:px-4
                          border-b border-neutral-700/80 {/* Adjusted border color for visibility */}
                          hover:bg-gray-800/50 transition-colors duration-200 group
                          ${index === jobs.length - 1 ? 'border-b-0 md:border-b-transparent' : ''}
                          ${index === 0 ? 'border-t border-neutral-700/80 md:border-t-0' : ''} {/* Adjusted border color */}
                        `}
                      key={job.id}
                    >
                      <div className="w-full text-center md:text-left">
                        <h3 className="text-xl lg:text-2xl font-semibold mb-1 group-hover:text-purple-400 transition-colors duration-200">
                          {job.title}
                        </h3>
                        <div className="flex space-x-2 justify-center md:justify-start">
                          <span className="bg-gray-800 text-white-300 text-xs font-medium px-2.5 py-1 rounded-full">
                            {job.type}
                          </span>
                          <span className="bg-gray-800 text-white-300 text-xs font-medium px-2.5 py-1 rounded-full">
                            {job.location}
                          </span>
                        </div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors duration-200 hidden md:block">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </DynamicTracingBeam>
    </div>
  );
};

export default CareersPageClient;