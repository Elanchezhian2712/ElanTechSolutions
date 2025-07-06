'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { AwardIcon, HeartHandshakeIcon, RocketIcon } from 'lucide-react';
import { FadeInContainer } from '../components/FadeInContainer';
const DynamicSparklesText = dynamic(() =>
  import('../components/ui/sparkles-text').then((mod) => mod.SparklesText),
 { ssr: false }
);



const AboutPageClient = () => {
  const sectionBorderStyle = 'border-neutral-700/50';
  const companyLifeImages = [
    '/placeholder-bw-1.jpeg',
    '/placeholder-bw-.jpeg',
    '/placeholder-bw-3.jpeg',
  ];

  const coreValues = [
    { icon: <RocketIcon className="w-10 h-10 text-purple-500" />, title: "Innovation First", description: "We constantly explore new horizons and push the boundaries of technology to deliver cutting-edge solutions." },
    { icon: <HeartHandshakeIcon className="w-10 h-10 text-purple-500" />, title: "Client Partnership", description: "Your success is our success. We build strong, collaborative relationships to understand and achieve your goals." },
    { icon: <AwardIcon className="w-10 h-10 text-purple-500" />, title: "Pursuit of Excellence", description: "We are committed to the highest standards of quality, precision, and performance in everything we do." },
  ];
  const teamMemberImages = [
    { src: '/team-bw-1.png', alt: 'Team Member 1' }, { src: '/team-bw-2.png', alt: 'Team Member 2' }, { src: '/team-bw-3.png', alt: 'Team Member 3' },
    { src: '/team-bw-4.png', alt: 'Team Member 4' }, { src: '/team-bw-5.png', alt: 'Team Member 5' }, { src: '/team-bw-6.png', alt: 'Team Member 6' },
  ];

  const teamFocusCardsData = teamMemberImages.map((member, index) => ({ id: index, src: member.src, title: member.alt, }));
  
  const initialImageLoadedState = Array(companyLifeImages.length + 1).fill(false);
  const [imageLoaded, setImageLoaded] = useState<boolean[]>(initialImageLoadedState);
  const MISSION_VISION_IMG_INDEX = companyLifeImages.length;

  const handleImageLoad = (index: number) => {
    setImageLoaded((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

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
          <h1 className="text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold font-sans !leading-tight">
            <DynamicSparklesText>About Us</DynamicSparklesText>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-purple-500/80 tracking-wider uppercase font-medium">Shaping the Future with Intelligence</p>
          <nav aria-label="Breadcrumb" className="relative z-10 mt-6 sm:mt-8 text-sm md:text-base text-neutral-400">
            <ol className="list-none p-0 inline-flex items-center space-x-1.5 md:space-x-2">
              <li><Link href="/" className="hover:text-purple-300 transition-colors duration-200">Home</Link></li>
              <li className="text-neutral-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></li>
              <li><span className="text-purple-500/90 font-medium" aria-current="page">About Us</span></li>
            </ol>
          </nav>
          <p className="relative z-10 mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-neutral-300/90 leading-relaxed max-w-3xl mx-auto">
             At ElanTech, we don&apos;t just build software. We craft smarter digital futures through a blend of creativity, innovation, and advanced AI. Our team designs intuitive interfaces and scalable systems that help businesses transform bold ideas into intelligent and impactful digital solutions.
          </p>
        </div>
      </FadeInContainer>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="mission-vision" className={`py-16 sm:py-20 md:py-24 lg:py-28 border-b ${sectionBorderStyle}`}>
          {/* We wrap the content container, not the whole section */}
          <FadeInContainer>
            <div className="container mx-auto"> 
              <div className="grid md:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
                <div className="order-2 md:order-1">
                  <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-2xl relative border border-neutral-800/50 hover:border-purple-600/50 transition-colors duration-300">
                    {!imageLoaded[MISSION_VISION_IMG_INDEX] && <div className="absolute inset-0 bg-neutral-800/70 animate-pulse" />}
                    <Image src="/mission-vision.jpg" alt="ElanTech Mission and Vision" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} quality={80} priority className={`transition-opacity duration-500 ease-in-out group-hover:scale-105 ${imageLoaded[MISSION_VISION_IMG_INDEX] ? 'opacity-100' : 'opacity-0'}`} onLoad={() => handleImageLoad(MISSION_VISION_IMG_INDEX)} />
                  </div>
                </div>
                <div className="order-1 md:order-2 text-center md:text-left">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 my-3 sm:my-4">Our Mission & Vision</h2>
                  <p className="text-purple-500/80 text-sm uppercase tracking-wider mb-6">Our Purpose</p>
                  <p className="text-neutral-300/80 leading-relaxed mb-4 text-base text-justify sm:text-lg">Our mission is to democratize access to advanced AI and software solutions, enabling businesses of all sizes to innovate, automate, and achieve unprecedented growth. We envision a future where technology seamlessly integrates with human potential to solve complex challenges.</p>
                  <p className="text-neutral-300/80 leading-relaxed text-base sm:text-lg text-justify">We strive to be at the forefront of technological advancement, delivering solutions that are not only intelligent but also ethical, scalable, and user-centric.</p>
                </div>
              </div>
            </div>
          </FadeInContainer>
        </section>

        <section className={`py-16 sm:py-20 md:py-24 lg:py-28 border-b ${sectionBorderStyle}`}>
          <FadeInContainer>
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 xl:gap-20">
                <div className="md:w-2/5 text-center md:text-left">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Life at ElanTech</h2>
                  <p className="text-purple-500/80 text-sm uppercase tracking-wider mb-6">Innovate. Collaborate. Grow.</p>
                  <p className="text-neutral-300/80 leading-relaxed text-justify mb-8 sm:mb-10 text-base sm:text-lg">Discover the vibrant culture, collaborative spirit, and exciting opportunities that define working with us. We foster an environment where innovation thrives and every individual can make an impact.</p>
                  <Link href="/careers" className="mt-4 inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">VIEW JOB OPENINGS</Link>
                </div>
                <div className="md:w-3/5 w-full">
                  <div className="grid grid-cols-2 grid-rows-auto gap-4 h-auto md:h-[36rem] lg:h-[30rem]">
                    {companyLifeImages.map((src, index) => (
                      <div key={index} className={`relative rounded-lg overflow-hidden ${index === 2 ? 'col-span-2 row-span-1 h-64 md:h-full' : 'col-span-1 row-span-1 h-48 md:h-full'}`}>
                        {!imageLoaded[index] && (<div className="absolute inset-0 bg-neutral-800 animate-pulse" />)}
                        <Image src={src} alt={`Life at ElanTech - Image ${index + 1}`} loading={index === 0 ? undefined : "lazy"} width={700} height={500} quality={75} priority={index === 0} className={`w-full h-full object-cover rounded-lg grayscale transition-opacity duration-500 ${imageLoaded[index] ? 'opacity-100' : 'opacity-0'}`} onLoad={() => handleImageLoad(index)} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeInContainer>
        </section>

        <section className={`py-16 sm:py-20 md:py-24 lg:py-28 border-b ${sectionBorderStyle}`}>
          <FadeInContainer>
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-20">
                <div className="lg:w-2/5 text-center lg:text-left order-1 lg:order-2"> 
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 mb-3">Our Team</h2>
                  <p className="text-purple-500/80 text-xs sm:text-sm uppercase tracking-wider mb-6">Experts in AI & Beyond</p>
                  <p className="text-neutral-300/80 leading-relaxed text-justify mb-8 sm:mb-10 text-base sm:text-lg">Our diverse and dynamic team is the driving force behind our success. We bring together exceptional talent from around the world, united by a shared vision to deliver innovation and excellence. With deep expertise in various tech domains, we build forward-thinking solutions that help clients thrive.</p>
                  <Link href="/careers" className="mt-4 inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">JOIN OUR TEAM</Link>
                </div>
                <div className="lg:w-3/5 w-full order-2 lg:order-1 mt-10 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {teamFocusCardsData.map((card) => (
                    <div key={card.id} className="bg-neutral-800/50 p-4 rounded-xl shadow text-center transition-transform transform hover:scale-105">
                      <Image src={card.src} alt={card.title} width={150} height={150} className="mx-auto rounded-full mb-4" />
                      <h3 className="text-white font-semibold">{card.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInContainer>
        </section>

        <section className={`py-16 sm:py-20 md:py-24 lg:py-28`}>
          <FadeInContainer>
            <div className="container mx-auto">
              <div className="flex flex-col items-center gap-10 lg:gap-16 xl:gap-20">
                <div className="text-center mb-1 md:mb-1">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Our Core Values</h2>
                  <p className="text-purple-500/80 text-sm uppercase tracking-wider mb-2">Guiding Principles</p>
                  <p className="text-neutral-300/80 leading-relaxed mb-0 text-base text-justify sm:text-lg">These principles are the bedrock of our culture and guide every decision we make.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
                  {coreValues.map((value, index) => (
                    <div key={index} className="bg-neutral-800/50 p-6 rounded-xl shadow-lg text-center transform transition-all hover:scale-105 hover:shadow-purple-500/30">
                      <div className="flex justify-center mb-2">{value.icon}</div>
                      <h3 className="text-xl font-semibold text-white mb-1">{value.title}</h3>
                      <p className="text-neutral-300 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInContainer>
        </section>
      </div>
    </div>
  );
};

export default AboutPageClient;