// src/app/components/Footer.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AuroraBackground } from './ui/aurora-background';
import { motion as framerMotion } from 'framer-motion';
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
    ssr: false,
});

// Move these outside so they are accessible in Footer and GlobeDemo
const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
};
const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
const sampleArcs = [
    {
        order: 1,
        startLat: -19.885592,
        startLng: -43.951191,
        endLat: -22.9068,
        endLng: -43.1729,
        arcAlt: 0.1,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 1,
        startLat: 28.6139,
        startLng: 77.209,
        endLat: 3.139,
        endLng: 101.6869,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 1,
        startLat: -19.885592,
        startLng: -43.951191,
        endLat: -1.303396,
        endLng: 36.852443,
        arcAlt: 0.5,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 2,
        startLat: 1.3521,
        startLng: 103.8198,
        endLat: 35.6762,
        endLng: 139.6503,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 2,
        startLat: 51.5072,
        startLng: -0.1276,
        endLat: 3.139,
        endLng: 101.6869,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 2,
        startLat: -15.785493,
        startLng: -47.909029,
        endLat: 36.162809,
        endLng: -115.119411,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 3,
        startLat: -33.8688,
        startLng: 151.2093,
        endLat: 22.3193,
        endLng: 114.1694,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 3,
        startLat: 21.3099,
        startLng: -157.8581,
        endLat: 40.7128,
        endLng: -74.006,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 3,
        startLat: -6.2088,
        startLng: 106.8456,
        endLat: 51.5072,
        endLng: -0.1276,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 4,
        startLat: 11.986597,
        startLng: 8.571831,
        endLat: -15.595412,
        endLng: -56.05918,
        arcAlt: 0.5,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 4,
        startLat: -34.6037,
        startLng: -58.3816,
        endLat: 22.3193,
        endLng: 114.1694,
        arcAlt: 0.7,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 4,
        startLat: 51.5072,
        startLng: -0.1276,
        endLat: 48.8566,
        endLng: -2.3522,
        arcAlt: 0.1,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 5,
        startLat: 14.5995,
        startLng: 120.9842,
        endLat: 51.5072,
        endLng: -0.1276,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 5,
        startLat: 1.3521,
        startLng: 103.8198,
        endLat: -33.8688,
        endLng: 151.2093,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 5,
        startLat: 34.0522,
        startLng: -118.2437,
        endLat: 48.8566,
        endLng: -2.3522,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 6,
        startLat: -15.432563,
        startLng: 28.315853,
        endLat: 1.094136,
        endLng: -63.34546,
        arcAlt: 0.7,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 6,
        startLat: 37.5665,
        startLng: 126.978,
        endLat: 35.6762,
        endLng: 139.6503,
        arcAlt: 0.1,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 6,
        startLat: 22.3193,
        startLng: 114.1694,
        endLat: 51.5072,
        endLng: -0.1276,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 7,
        startLat: -19.885592,
        startLng: -43.951191,
        endLat: -15.595412,
        endLng: -56.05918,
        arcAlt: 0.1,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 7,
        startLat: 48.8566,
        startLng: -2.3522,
        endLat: 52.52,
        endLng: 13.405,
        arcAlt: 0.1,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 7,
        startLat: 52.52,
        startLng: 13.405,
        endLat: 34.0522,
        endLng: -118.2437,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 8,
        startLat: -8.833221,
        startLng: 13.264837,
        endLat: -33.936138,
        endLng: 18.436529,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 8,
        startLat: 49.2827,
        startLng: -123.1207,
        endLat: 52.3676,
        endLng: 4.9041,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 8,
        startLat: 1.3521,
        startLng: 103.8198,
        endLat: 40.7128,
        endLng: -74.006,
        arcAlt: 0.5,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 9,
        startLat: 51.5072,
        startLng: -0.1276,
        endLat: 34.0522,
        endLng: -118.2437,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 9,
        startLat: 22.3193,
        startLng: 114.1694,
        endLat: -22.9068,
        endLng: -43.1729,
        arcAlt: 0.7,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 9,
        startLat: 1.3521,
        startLng: 103.8198,
        endLat: -34.6037,
        endLng: -58.3816,
        arcAlt: 0.5,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 10,
        startLat: -22.9068,
        startLng: -43.1729,
        endLat: 28.6139,
        endLng: 77.209,
        arcAlt: 0.7,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 10,
        startLat: 34.0522,
        startLng: -118.2437,
        endLat: 31.2304,
        endLng: 121.4737,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 10,
        startLat: -6.2088,
        startLng: 106.8456,
        endLat: 52.3676,
        endLng: 4.9041,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 11,
        startLat: 41.9028,
        startLng: 12.4964,
        endLat: 34.0522,
        endLng: -118.2437,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 11,
        startLat: -6.2088,
        startLng: 106.8456,
        endLat: 31.2304,
        endLng: 121.4737,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 11,
        startLat: 22.3193,
        startLng: 114.1694,
        endLat: 1.3521,
        endLng: 103.8198,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 12,
        startLat: 34.0522,
        startLng: -118.2437,
        endLat: 37.7749,
        endLng: -122.4194,
        arcAlt: 0.1,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 12,
        startLat: 35.6762,
        startLng: 139.6503,
        endLat: 22.3193,
        endLng: 114.1694,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 12,
        startLat: 22.3193,
        startLng: 114.1694,
        endLat: 34.0522,
        endLng: -118.2437,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 13,
        startLat: 52.52,
        startLng: 13.405,
        endLat: 22.3193,
        endLng: 114.1694,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 13,
        startLat: 11.986597,
        startLng: 8.571831,
        endLat: 35.6762,
        endLng: 139.6503,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 13,
        startLat: -22.9068,
        startLng: -43.1729,
        endLat: -34.6037,
        endLng: -58.3816,
        arcAlt: 0.1,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 14,
        startLat: -33.936138,
        startLng: 18.436529,
        endLat: 21.395643,
        endLng: 39.883798,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
];


const GlobeEuropeAfricaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
        className="w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>

);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
    </svg>
);

const PaperAirplaneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
);

// Social Icons
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
    </svg>
);
const TwitterIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
);
const FacebookIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
);
const LinkedInIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
    </svg>
);

const Footer = () => {
    const borderStyle = "border-neutral-700";
    const horizontalPadding = "px-4 sm:px-6 lg:px-8";

    // State to control globe rendering
    const [isGlobeReady, setIsGlobeReady] = useState(false);

    useEffect(() => {
        // Delay mounting the globe to allow layout to stabilize
        const timer = setTimeout(() => {
            setIsGlobeReady(true);
        }, 200); // Adjust this delay as needed (e.g., 100-500ms)

        return () => clearTimeout(timer); // Cleanup timeout on unmount
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <>

            <footer className={`text-white-400 bg-black`}>
                <section className="py-16 md:py-24 text-center">
                    <div className="container mx-auto px-4">
                        <AuroraBackground>
                            <div className="md:flex w-full h-full items-center">
                                <framerMotion.div
                                    initial={{ opacity: 0.0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.3,
                                        duration: 0.8,
                                        ease: "easeInOut",
                                    }}
                                    className="relative flex flex-col gap-2 items-center justify-center 
                                            px-6  
                                            md:items-start md:px-10 
                                            md:w-1/2 md:ml-16 
                                            w-full 
                                            text-center md:text-left
                                            pb-2 md:pb-0 
                                            "
                                >
                                    <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white mt-6 mb-2">
                                        Let&apos;s Work Together !
                                    </h1>
                                    <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-200">
                                        &quot;Your vision, our expertise — a perfect collaboration.&quot;
                                    </p>
                                    <Link
                                        href="/careers"
                                        className="inline-block bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 transition-all duration-300 ease-in-out transform hover:scale-105"
                                    >
                                        Request a Project
                                    </Link>
                                </framerMotion.div>

                                <div className="relative w-full md:w-1/2 min-h-[24rem] sm:min-h-[28rem] z-0 md:-mt-2">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {isGlobeReady && typeof World !== 'undefined' && typeof sampleArcs !== 'undefined' && typeof globeConfig !== 'undefined' && (
        <World data={sampleArcs} globeConfig={globeConfig} />
    )}
                                    </div>
                                </div>
                            </div>
                        </AuroraBackground>
                    </div>
                </section>
                <div>
                    <div className={`border-t ${borderStyle} grid grid-cols-1 md:grid-cols-12 gap-0 py-10 sm:py-12 ${horizontalPadding}`}>
                        <div className={`md:col-span-4 lg:col-span-5 md:border-r ${borderStyle} md:pr-6 lg:pr-8 py-4`}>
                            <div className="flex items-center mb-6">
                                <Link href="/" className="flex-shrink-0">
                                    <Image
                                        src="/logo.png"
                                        alt="Elan Tech Solutions Small Logo"
                                        width={40}
                                        height={40}
                                        priority
                                    />
                                </Link>
                                <Link href="/" className="flex-shrink-0 ">
                                    <Image
                                        src="/logo-elantech.png"
                                        alt="Elantech Solutions Logo Text"
                                        width={300}
                                        height={55}
                                        priority
                                    />
                                </Link>
                            </div>
                            <p className="text-xs sm:text-sm leading-relaxed text-white-300 text-justify">
                                At Elan Tech Solutions, we are dedicated to transforming ideas into impactful digital experiences. From full-scale software development and DevOps automation to intuitive UI/UX design and modern web solutions, we empower businesses to thrive in a rapidly evolving tech landscape. Our team combines innovation with deep technical expertise in Machine Learning and Artificial Intelligence to create smart, scalable, and future-ready solutions. We believe in technology that drives progress and builds stronger, more connected communities.
                            </p>
                        </div>
                        <div className="md:col-span-8 lg:col-span-7 py-4 md:pl-6 lg:pl-8">
                            <div className="mb-8 md:mb-10">
                                <nav aria-label="Footer Quick Links">
                                    <ul className="flex flex-wrap justify-center md:justify-start gap-x-4 sm:gap-x-6 gap-y-2 text-sm sm:text-base text-white-300">
                                        <li><Link href="/" className="hover:text-purple-500 transition-colors">Home</Link></li>
                                        <li><Link href="/about" className="hover:text-purple-500 transition-colors">About us</Link></li>
                                        <li><Link href="/projects" className="hover:text-purple-500 transition-colors">Projects</Link></li>
                                        <li><Link href="/blog" className="hover:text-purple-500 transition-colors">Blog</Link></li>
                                        <li><Link href="/careers" className="hover:text-purple-500 transition-colors">Career</Link></li>
                                        <li><Link href="/contact" className="hover:text-purple-500 transition-colors">Contact us</Link></li>
                                    </ul>
                                </nav>
                            </div>

                            <div className={`border-t ${borderStyle} pt-8 md:pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-0 sm:gap-x-4`}>
                                {/* Head Office */}
                                <div className={`group py-2 sm:py-4 sm:pr-4 lg:border-r ${borderStyle} flex flex-col items-center text-center mb-4 sm:mb-0 transition-transform hover:scale-105`}>
                                    <a
                                        href="https://www.google.com/maps?q=J4RV+2VV,+5,+Trichy+Branch+Rd,+Valluvar+Nagar,+Annathanapatti,+Police+Quarters,+Salem,+Tamil+Nadu+636002"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group py-4 sm:px-2 flex flex-col items-center text-center mb-6 sm:mb-0 transition-transform hover:scale-105`}>
                                        <div className="w-11 h-11 bg-neutral-800 group-hover:bg-purple-500 rounded-full flex items-center justify-center mb-3 transition duration-300">
                                            <GlobeEuropeAfricaIcon />
                                        </div>
                                        <h4 className="text-base sm:text-lg font-semibold text-white mb-1 group-hover:text-gray-100 transition duration-300">Our Head Office</h4>
                                        <p className="text-xs sm:text-sm text-white-300 group-hover:text-white transition duration-300">
                                            Salem, Tamil Nadu, India.
                                        </p>
                                    </a>
                                </div>

                                {/* Hotline */}
                               <div className={`group py-2 sm:py-4 sm:px-2 lg:border-r ${borderStyle} flex flex-col items-center text-center mb-4 sm:mb-0 transition-transform hover:scale-105`}>
                                    <a
                                        href="https://wa.me/919789382712?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group py-4 sm:px-2 flex flex-col items-center text-center mb-6 sm:mb-0 transition-transform hover:scale-105`}>

                                        <div className="w-11 h-11 bg-neutral-800 group-hover:bg-purple-500 rounded-full flex items-center justify-center mb-3 transition duration-300">
                                            <PhoneIcon />
                                        </div>
                                        <h4 className="text-base sm:text-lg font-semibold text-white mb-1 group-hover:text-gray-100 transition duration-300">Our Hotline</h4>
                                        <p className="text-xs sm:text-sm text-white-300 group-hover:text-white transition duration-300">
                                            +91 978 938 2712
                                        </p>
                                    </a>

                                </div>

                                {/* Email */}
                                <div className={`group py-2 sm:py-4 sm:pl-4 flex flex-col items-center text-center transition-transform hover:scale-105`}>
                                    <a
                                        href="mailto:elantechsolutions@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group py-4 sm:pl-4 flex flex-col items-center text-center transition-transform hover:scale-105"
                                    >
                                        <div className="w-11 h-11 bg-neutral-800 group-hover:bg-purple-500 rounded-full flex items-center justify-center mb-3 transition duration-300">
                                            <PaperAirplaneIcon />
                                        </div>
                                        <h4 className="text-base sm:text-lg font-semibold text-white mb-1 group-hover:text-gray-100 transition duration-300">
                                            Mail Us
                                        </h4>
                                        <p className="text-xs sm:text-sm text-white-300 group-hover:text-white transition-colors duration-300">
                                            elantechsolutions@gmail.com
                                        </p>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`border-t ${borderStyle} mt-8 py-8 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-white ${horizontalPadding}`}>
                        <p className="mb-4 sm:mb-0 text-center sm:text-left">
                            Copyright © {new Date().getFullYear()}. All rights reserved by Elan Tech Solutions.
                        </p>
                        <div className="flex space-x-5 sm:space-x-4">
                            <a href="#" aria-label="Instagram" className="hover:text-purple-500 transition-colors"><InstagramIcon /></a>
                            <a href="#" aria-label="Twitter" className="hover:text-purple-500 transition-colors"><TwitterIcon /></a>
                            <a href="#" aria-label="Facebook" className="hover:text-purple-500 transition-colors"><FacebookIcon /></a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-purple-500 transition-colors"><LinkedInIcon /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;