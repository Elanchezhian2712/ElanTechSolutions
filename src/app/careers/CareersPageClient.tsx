'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FadeInContainer } from '../components/FadeInContainer';

const DynamicSparklesText = dynamic(() =>
  import('../components/ui/sparkles-text').then((mod) => mod.SparklesText), { ssr: false }
);

interface CultureItem {
  iconSVG?: string; 
  title: string;
  description: string;
}

interface PerkItem {
  iconSVG?: string;
  name: string;
}

interface Job {
  id: number;
  title: string;
  type: string;
  location: string;
  department: string; 
  descriptionSnippet: string; 
  link: string;
}

interface CareersPageClientProps {
  jobs: Job[];
  careersText: string; 
  heroSubtitle: string; 
  heroParagraph: string;
  weAreHiringText: string; 
  openApplicationText: string; 
}

// --- MOCK DATA (Remove this when passing real props) ---
const mockJobs: Job[] = [
  // Example Job (You can populate this to test)
  {
    id: 1,
    title: "Senior AI Engineer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    descriptionSnippet: "Lead the development of our next-generation machine learning models and help us push the boundaries of what's possible.",
    link: "/careers/senior-ai-engineer"
  }
];
// --- END MOCK DATA ---


const CareersPageClient = ({
  jobs = mockJobs, 
  careersText = "Careers",
  heroSubtitle = "Join Our Mission to Redefine AI.",
  heroParagraph = "At ElanTech, we're not just building software; we're crafting the future of intelligence. If you're passionate about innovation, eager to solve complex challenges, and want to make a real-world impact with AI, you've come to the right place. Explore opportunities to grow with a team that values creativity, collaboration, and continuous learning.",
  weAreHiringText = "Current Openings",
  openApplicationText = "Don't see your ideal role? We're always looking for exceptional talent to join our mission."
}: CareersPageClientProps) => {
  const sectionBorderStyle = "border-neutral-800/70"; 
  const cultureItems: CultureItem[] = [
    {
      // SVG for sparkles, representing the spark of creation and experimentation.
      iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-purple-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" /></svg>`,
      title: 'Innovate Fearlessly',
      description: 'We tackle ambitious problems and encourage experimentation. Your ideas can shape the future of AI.',
    },
    {
      // Corrected: SVG now matches the person/joystick icon for collaboration.
      iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-purple-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m-2.25-4.5L12 6l2.25 2.25M7.5 16.5a4.5 4.5 0 0 1 9 0" /></svg>`,
      title: 'Collaborate Radically',
      description: 'Our best work happens together. We foster a supportive environment for diverse minds to connect.',
    },
    {
      // Unchanged: This icon was not present in the provided image.
      iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-purple-500"><path stroke-linecap="round" stroke-linejoin="round" d="m4.26 10.147 8.052 4.263a.75.75 0 0 0 .376 0l8.052-4.263a.75.75 0 0 0-.01-1.332l-8.053-4.262a.75.75 0 0 0-.354 0l-8.053 4.262a.75.75 0 0 0-.01 1.332Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147v6.862a.75.75 0 0 0 .375.666l7.5 4.016a.75.75 0 0 0 .75 0l7.5-4.016a.75.75 0 0 0 .375-.666v-6.862M4.26 10.147 12 14.41l7.74-4.263" /></svg>`,
      title: 'Grow Continuously',
      description: 'The field of AI is always evolving, and so are we. We invest in your learning and development.',
    },
  ];

  const perks: PerkItem[] = [
    { name: 'Competitive Salary & Equity' }, { name: 'Comprehensive Health Benefits' }, { name: 'Flexible Work Arrangements' },
    { name: 'Generous Paid Time Off' }, { name: 'Learning & Development Budget' }, { name: 'Team Retreats & Social Events' },
    { name: 'Cutting-Edge Tech Stack' }, { name: 'Impactful Projects' },
  ];

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
            <DynamicSparklesText>{careersText}</DynamicSparklesText>
          </h1>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-purple-500/80 tracking-wide font-medium">{heroSubtitle}</p>
          <nav aria-label="Breadcrumb" className="relative z-10 mt-8 sm:mt-10 text-sm md:text-base text-neutral-400">
            <ol className="list-none p-0 inline-flex items-center space-x-1.5 md:space-x-2">
              <li><Link href="/" className="hover:text-purple-300 transition-colors duration-200">Home</Link></li>
              <li className="text-neutral-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></li>
              <li><span className="text-purple-500/90 font-medium" aria-current="page">Careers</span></li>
            </ol>
          </nav>
          <p className="relative z-10 mt-8 sm:mt-10 text-base sm:text-lg md:text-xl text-neutral-300/90 leading-relaxed max-w-3xl mx-auto">{heroParagraph}</p>
           <Link
            href="#job-listings" 
            className="mt-10 sm:mt-12 group inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold py-3.5 px-8 sm:px-10 rounded-lg text-base shadow-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-neutral-950"
          >
            View Open Roles
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-y-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" /></svg>
          </Link>
        </div>
        </FadeInContainer>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="why-elantech" className={`py-16 sm:py-20 md:py-24 lg:py-28 border-b ${sectionBorderStyle}`}>
          <FadeInContainer>
            <div className="container mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 mb-4">Why Join ElanTech?</h2>
                <p className="text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">We&apos;re more than just a workplace. We&apos;re a community of passionate individuals driven by innovation and a shared vision for the future of AI.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
                {cultureItems.map((item) => (
                  <div key={item.title} className="bg-neutral-900/50 p-6 sm:p-8 rounded-xl border border-neutral-800/60 shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center justify-center mb-5 w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/30" dangerouslySetInnerHTML={{ __html: item.iconSVG || '' }}></div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-neutral-100 mb-2.5">{item.title}</h3>
                    <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInContainer>
        </section>

        <section id="perks-growth" className={`py-16 sm:py-20 md:py-24 lg:py-28 border-b ${sectionBorderStyle}`}>
          <FadeInContainer>
            <div className="container mx-auto">
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 mb-4">Perks & Growth</h2>
                  <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-8">We invest in our team&apos;s well-being and professional development, offering a comprehensive package to support you inside and outside of work.</p>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    {perks.map((perk) => (
                      <div key={perk.name} className="flex items-center">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-purple-500 mr-2.5 shrink-0"><path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" /></svg>
                        <span className="text-neutral-300 text-sm sm:text-base">{perk.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden md:block"> 
                  <Image src="/growth-mindset.jpg" alt="Growth and Development at ElanTech" width={500} height={400} style={{objectFit: 'cover'}} className="rounded-xl shadow-xl border border-neutral-800/60" />
                </div>
              </div>
            </div>
          </FadeInContainer>
        </section>

        <section id="job-listings" className={`py-16 sm:py-20 md:py-24 lg:py-28`}> 
          <FadeInContainer>
            <div className="container mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 mb-4">{weAreHiringText}</h2>
                <p className="text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">Find your next challenge and make your mark. We&apos;re looking for talented individuals to join our growing team.</p>
              </div>

              {jobs && jobs.length > 0 ? (
                <div className="bg-neutral-900/40 border border-neutral-800/60 rounded-xl shadow-xl overflow-hidden">
                  {jobs.map((job, index) => (
                    <Link href={job.link} className={`block p-6 sm:p-8 border-b border-neutral-800/60 hover:bg-purple-600/10 transition-colors duration-300 group ${index === jobs.length - 1 ? 'border-b-0' : ''}`} key={job.id}>
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                        <div className="flex-grow">
                          <h3 className="text-xl sm:text-2xl font-semibold text-neutral-100 group-hover:text-purple-500 transition-colors duration-200 mb-1.5">{job.title}</h3>
                          <div className="flex flex-wrap gap-2 items-center mb-2 sm:mb-0">
                            <span className="bg-neutral-800 text-purple-300 text-xs font-medium px-3 py-1 rounded-full">{job.department}</span>
                            <span className="bg-neutral-800 text-neutral-400 text-xs font-medium px-3 py-1 rounded-full">{job.type}</span>
                            <span className="bg-neutral-800 text-neutral-400 text-xs font-medium px-3 py-1 rounded-full">{job.location}</span>
                          </div>
                          <p className="text-neutral-400 text-sm mt-2 leading-relaxed hidden sm:block">{job.descriptionSnippet}</p>
                        </div>
                        <div className="shrink-0 flex items-center justify-end text-purple-500 group-hover:text-purple-300 transition-colors duration-200">
                          <span className="text-sm font-medium mr-1.5 hidden sm:inline">View Details</span>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-center text-neutral-400 text-lg">We currently don&apos;t have any open positions, but we&apos;re always interested in hearing from talented individuals.</p>
              )}

              <div className="mt-12 md:mt-16 text-center">
                <p className="text-neutral-400 mb-4 text-base sm:text-lg">{openApplicationText}</p>
                <Link href="/contact" className="group inline-flex items-center justify-center bg-transparent border-2 border-purple-600 hover:bg-purple-600/20 text-purple-300 hover:text-white font-semibold py-3 px-8 rounded-lg text-sm shadow-none hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-neutral-950">
                  Submit Your Resume
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
                </Link>
              </div>
            </div>
          </FadeInContainer>
        </section>
      </div>
    </div>
  );
};

export default CareersPageClient;