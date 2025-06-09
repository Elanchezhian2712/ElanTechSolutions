// src/app/about/page.tsx
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


const CareersPage = () => {

  const sectionBorderStyle = "border-neutral-700/50";

  const jobs = [
    {
      id: 1,
      title: 'UI/UX Designer',
      type: 'Full-Time',
      location: 'On-Site',
      link: '/contact',
    },
    {
      id: 2,
      title: 'Front-End Developer',
      type: 'Full-Time',
      location: 'On-Site',
      link: '/contact',
    },
    {
      id: 3,
      title: 'Back-End Developer',
      type: 'Full-Time',
      location: 'On-Site',
      link: '/contact',
    },
    {
      id: 4,
      title: 'QA Engineer',
      type: 'Full-Time',
      location: 'On-Site',
      link: '/contact',
    },
    {
      id: 5,
      title: 'Business Analyst',
      type: 'Full-Time',
      location: 'On-Site',
      link: '/contact',
    },
    {
      id: 6,
      title: 'Digital Marketing Specialist',
      type: 'Full-Time',
      location: 'On-Site',
      link: '/contact',
    },
  ];

  const careersText = "Careers";
  const weAreHiringText = "We are Hiring!";


  return (
    <div className='bg-black'>
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
              <li className="text-white-300">Careers</li>
            </ol>
          </nav>
          <p className="relative z-10 mt-8 text-lg md:text-xl text-white-300 leading-relaxed text-justify md:text-center max-w-4xl mx-auto">
            Ready to kickstart your career? At Elan Tech Solutions, we offer a supportive, inclusive space where creativity and growth thrive. Join our team in Software Development, DevOps, UI/UX Design, Web Development, Machine Learning, or AI. Whether you&apos;re experienced or just starting out, if you&apos;re passionate about tech, we&apos;d love to hear from you. Let&apos;s build the future—together.
          </p>
        </div>

      </div>

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
                          border-b border-white-700
                          hover:bg-gray-800/50 transition-colors duration-200 group
                          ${index === jobs.length - 1 ? 'border-b-0 md:border-b-transparent' : ''}
                          ${index === 0 ? 'border-t border-white-700 md:border-t-0' : ''}
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

export default CareersPage;
