// src/app/about/AboutPageClient.tsx
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import heavy UI components
const DynamicBackgroundBeams = dynamic(() =>
    import('../components/ui/background-beams').then((mod) => mod.BackgroundBeams)
);

const DynamicTypewriterEffect = dynamic(() =>
    import('../components/ui/typewriter-effect').then((mod) => mod.TypewriterEffect)
);

const DynamicTracingBeam = dynamic(() =>
    import('../components/ui/tracing-beam').then((mod) => mod.TracingBeam),
    { ssr: false }
);

const DynamicFocusCards = dynamic(() =>
    import('../components/ui/focus-cards').then((mod) => mod.FocusCards),
    { ssr: false }
);


const AboutPageClient = () => {
    const sectionBorderStyle = "border-neutral-700/50";

    const companyLifeImages = [
        '/placeholder-bw-1.jpeg',
        '/placeholder-bw-.jpeg',
        '/placeholder-bw-3.jpeg',
    ];

    const teamMemberImages = [
        { src: '/team-bw-1.png', alt: 'Team Member 1' },
        { src: '/team-bw-2.png', alt: 'Team Member 2' },
        { src: '/team-bw-3.png', alt: 'Team Member 3' },
        { src: '/team-bw-4.png', alt: 'Team Member 4' },
        { src: '/team-bw-5.png', alt: 'Team Member 5' },
        { src: '/team-bw-6.png', alt: 'Team Member 6' },
    ];


    const words = [
        {
            text: "About",
            className: "text-purple-500 dark:text-purple-500 text-4xl sm:text-4xl md:text-4xl lg:text-5xl",
        },
        {
            text: "Us...",
            className: "text-purple-500 dark:text-purple-500 text-4xl sm:text-4xl md:text-4xl lg:text-5xl",
        },
    ];

    
    const teamFocusCardsData = teamMemberImages.map((member, index) => ({
        id: index,
        src: member.src,
        title: member.alt,
        // description: "Role or short bio", // Add if your FocusCards supports descriptions
    }));

    const [loading, setLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(
        new Array(companyLifeImages.length).fill(false)
    );

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleImageLoad = (index: number) => {
        setImageLoaded((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
        });
    };

    if (loading) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-black">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-500 border-solid"></div>
            </div>
        );
    }

    return (
        <div className="bg-black">
            <div className={`h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased border-b ${sectionBorderStyle}`}>
                <div className="max-w-5xl mx-auto p-4">
                    <h1 className="relative z-10 text-lg md:text-7xl text-purple-500 text-center font-sans font-bold">
                        <DynamicTypewriterEffect words={words} />
                    </h1>
                    <nav className="relative z-10 mt-4 text-sm md:text-base text-gray-400">
                        <ol className="list-reset flex justify-center space-x-2 md:space-x-4">
                            <li>
                                <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
                            </li>
                            <li>/</li>
                            <li className="text-gray-300">About Us</li>
                        </ol>
                    </nav>
                    <p className="relative z-10 mt-8 text-lg md:text-xl text-gray-300 leading-relaxed text-justify md:text-center max-w-4xl mx-auto">
                        We harness modern technology to build intelligent, scalable, and user-focused solutions. Our expertise includes Software Development, DevOps, UI/UX Design, Web Development, Machine Learning, and AI. With a focus on innovation and operational excellence, we help businesses enhance user experiences and stay ahead in a fast-changing digital world.
                    </p>
                </div>
                <DynamicBackgroundBeams />
            </div>

            <DynamicTracingBeam className="max-w-7xl">
                <section className={`py-16 md:py-20 bg-black border-b ${sectionBorderStyle}`}>
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                            <div className="md:w-2/5 text-center md:text-left">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                    Life at ElanTech
                                </h2>
                                <p className="text-gray-300 leading-relaxed mb-8 text-justify">
                                    Discover the vibrant culture, collaborative spirit, and exciting opportunities
                                    that define working with us. We foster an environment where innovation thrives
                                    and every individual can make an impact.
                                </p>
                                <Link
                                    href="/careers"
                                    className="inline-block bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold py-3 px-8 rounded-full text-sm shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                                >
                                    VIEW JOB OPENINGS
                                </Link>
                            </div>

                            <div className="md:w-3/5 w-full">
                                <div className="grid grid-cols-2 grid-rows-auto gap-4 h-auto md:h-[36rem] lg:h-[30rem]">
                                    {companyLifeImages.map((src, index) => (
                                        <div
                                            key={index}
                                            className={`relative rounded-lg overflow-hidden ${index === 2
                                                    ? 'col-span-2 row-span-1 h-64 md:h-full'
                                                    : 'col-span-1 row-span-1 h-48 md:h-full'
                                                }`}
                                        >
                                            {!imageLoaded[index] && (
                                                <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
                                            )}
                                            <Image
                                                src={src}
                                                alt={`Company life image ${index + 1}`}
                                                loading="lazy"
                                                width={700}
                                                height={500}
                                                quality={75}
                                                className={`w-full h-full object-cover rounded-lg grayscale transition-opacity duration-500 ${imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                                                    }`}
                                                onLoad={() => handleImageLoad(index)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={`py-16 md:py-20 bg-black border-b ${sectionBorderStyle}`}>
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="lg:w-2/5 text-center lg:text-left">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                    Our Team
                                </h2>
                                <p className="text-gray-300 leading-relaxed mb-8 text-justify">
                                    Our diverse and dynamic team is the driving force behind our success. Bringing together exceptional talent from around the world, we are united by a shared vision to deliver innovation and excellence. With deep expertise in Software Development, DevOps, UI/UX Design, Web Development, Machine Learning, and Artificial Intelligence, our collaborative approach fuels forward-thinking solutions that help our clients achieve their goals. Together, we are committed to building a brighter future through technology and fostering meaningful global connections.
                                </p>
                                <Link
                                    href="/careers"
                                    className="inline-block bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold py-3 px-8 rounded-full text-sm shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                                >
                                    JOIN OUR TEAM
                                </Link>
                            </div>
                            <div className="lg:w-3/5 w-full">
                                <DynamicFocusCards cards={teamFocusCardsData} />
                            </div>
                        </div>
                    </div>
                </section>
            </DynamicTracingBeam>
        </div>
    );
};

export default AboutPageClient;