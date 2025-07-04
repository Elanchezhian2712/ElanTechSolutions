// src/app/components/Footer.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const GlobeEuropeAfricaIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
    />
  </svg>
);
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z"
    />
  </svg>
);
const PaperAirplaneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
    />
  </svg>
);
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-instagram"
    viewBox="0 0 16 16"
  >
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
  </svg>
);
const TwitterIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);
const FacebookIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
);
const LinkedInIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
      clipRule="evenodd"
    />
  </svg>
);

const Footer = () => {
  // --- DEFINED MISSING VARIABLES ---
  const borderStyle = "border-neutral-700";
  const horizontalPadding = "px-4 sm:px-6 lg:px-8";

  return (
    <footer className="relative mt-32">
      {/* Floating CTA Card Section */}
      <div className="absolute inset-x-0 -top-40 flex justify-center px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full max-w-7xl rounded-[2rem] p-[1px] bg-gradient-to-r from-purple-500/40 via-indigo-500/40 to-purple-500/40 shadow-2xl"
        >
          <div className="relative w-full rounded-[1.9rem] bg-neutral-900/80 backdrop-blur-xl p-8 md:p-12 overflow-hidden">
            {/* Glow orbs */}
            <div className="absolute -top-1/3 -left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] animate-pulse opacity-50" />
            <div className="absolute -bottom-1/3 -right-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-[120px] animate-pulse opacity-50" />

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              {/* Left content */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white transition-all duration-500">
                  Let’s Build Something Amazing
                </h2>
                <p className="mt-4 text-lg text-neutral-300 leading-relaxed">
                  Your vision, our expertise — a perfect collaboration for digital excellence.
                </p>

                <div className="mt-8 relative group inline-block">
                  <Link href="/contact">
                    <span className="relative z-10 inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg transition-transform transform group-hover:scale-105 duration-300">
                      Request a Project
                    </span>
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                  </Link>
                </div>
              </div>

              {/* Right visual element */}
              <div className="hidden md:block relative w-64 h-64 flex-shrink-0">

                {/* The central, static "planet" */}
                <div className="absolute inset-8 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-full shadow-2xl" />
                </div>

                {/* Faint, static orbital paths for visual guidance */}
                <div className="absolute inset-0 border-2 border-indigo-500/10 rounded-full" />
                <div className="absolute inset-10 border border-purple-500/10 rounded-full" />

                {/* --- Orbit 1: Large, slow, clockwise --- */}
                <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                  <div className="absolute top-1/2 -left-1 w-3 h-3 bg-indigo-400 rounded-full shadow-lg" />
                </div>

                {/* --- Orbit 2: Medium, faster, counter-clockwise --- */}
                {/* The 'reverse' keyword makes it spin the other way */}
                <div className="absolute inset-6 animate-[spin_12s_linear_infinite_reverse]">
                  <div className="absolute top-1/2 -right-1 w-2.5 h-2.5 bg-purple-400 rounded-full shadow-lg" />
                </div>

                {/* --- Orbit 3: Small, fastest, clockwise --- */}
                <div className="absolute inset-12 animate-[spin_8s_linear_infinite]">
                  <div className="absolute -top-1 left-1/2 w-2 h-2 bg-white rounded-full shadow-lg" />
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>



      {/* Main Footer Content Section */}
      <div className="text-white bg-gradient-to-br from-purple-900/30 via-zinc-950 to-zinc-950 pt-48">
        <div
          className={` ${borderStyle} grid grid-cols-1 md:grid-cols-12 gap-0 py-10 sm:py-12 ${horizontalPadding}`}
        >
          <div
            className={`md:col-span-4 lg:col-span-5 md:border-r ${borderStyle} md:pr-6 lg:pr-8 py-4`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-6 items-center justify-center sm:justify-start">
              <Link href="/" className="flex-shrink-0 mb-2 sm:mb-0">
                <Image
                  src="/Images/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/Images/logo-elantech.png"
                  alt="Logo Text"
                  width={220}
                  height={50}
                />
              </Link>
            </div>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed text-justify">
              Elan Tech Solutions transforms ideas into impactful digital
              experiences — from AI-powered applications to scalable web
              platforms. We help businesses thrive with intuitive design, DevOps
              automation, and cutting-edge technology.
            </p>
          </div>

          <div className="md:col-span-8 lg:col-span-7 py-4 md:pl-6 lg:pl-8">
            <div className="mb-6 md:mb-10">
              <nav aria-label="Footer Navigation">
                <ul className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-6 text-sm sm:text-base text-white">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/about", label: "About us" },
                    { href: "/product", label: "Product" },
                    { href: "/services", label: "Services" },
                    { href: "/careers", label: "Career" },
                    { href: "/contact", label: "Contact us" },
                  ].map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="hover:text-purple-500 transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div
              className={`border-t ${borderStyle} pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 sm:gap-y-10`}
            >
              {[
                {
                  title: "Our Head Office",
                  text: "Salem, Tamil Nadu, India.",
                  icon: <GlobeEuropeAfricaIcon />,
                  href: "https://www.google.com/maps?q=J4RV+2VV,+5,+Trichy+Branch+Rd,+Valluvar+Nagar,+Annathanapatti,+Police+Quarters,+Salem,+Tamil+Nadu+636002",
                },
                {
                  title: "Our Hotline",
                  text: "+91 978 938 2712",
                  icon: <PhoneIcon />,
                  href: "https://wa.me/919789382712?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
                },
                {
                  title: "Mail Us",
                  text: "elantechsolutions@gmail.com",
                  icon: <PaperAirplaneIcon />,
                  href: "mailto:elantechsolutions@gmail.com",
                },
              ].map(({ title, text, icon, href }, index) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    group flex flex-col items-center text-center 
                    transition-transform hover:scale-105
                    ${index === 2
                      ? "sm:col-span-2 lg:col-span-1"
                      : "sm:col-span-1"
                    } 
                    mx-auto w-full max-w-xs sm:max-w-none
                  `}
                >
                  <div className="w-12 h-12 bg-neutral-800 group-hover:bg-purple-500 rounded-full flex items-center justify-center transition duration-300">
                    {icon}
                  </div>
                  <h4 className="text-base font-semibold text-white mt-3 group-hover:text-gray-100 transition duration-300">
                    {title}
                  </h4>
                  <p className="text-sm text-white/70 group-hover:text-white transition duration-300">
                    {text}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`border-t ${borderStyle} mt-1 sm:mt-2 py-6 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-white/60 ${horizontalPadding}`}
        >
          <p className="mb-4 sm:mb-0 text-center sm:text-left">
            © {new Date().getFullYear()} Elan Tech Solutions. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-purple-500 transition-colors">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-purple-500 transition-colors">
              <TwitterIcon />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-purple-500 transition-colors">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-purple-500 transition-colors">
              <LinkedInIcon />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
