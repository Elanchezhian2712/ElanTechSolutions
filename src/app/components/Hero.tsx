"use client";

import Link from "next/link";
import { Cover } from "./ui/cover";
import { SparklesIcon } from "lucide-react";
import { motion } from "framer-motion";

const SHAPE_POSITIONS = [
  { top: "20%", left: "30%" },
  { top: "40%", left: "70%" },
  { top: "60%", left: "20%" },
  { top: "75%", left: "50%" },
  { top: "10%", left: "80%" },
  { top: "85%", left: "10%" },
];

const FloatingShape = ({
  delay = 0,
  top,
  left,
}: {
  delay?: number;
  top: string;
  left: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0.8, 1, 1, 0.8],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ position: "absolute", top, left }}
      className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl shadow-lg shadow-purple-800/30 blur-[1px] z-10"
    />
  );
};

export const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden antialiased pt-24 pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-zinc-950 to-zinc-950 z-0" />
      {SHAPE_POSITIONS.map((pos, index) => (
        <FloatingShape key={index} delay={index * 1.5} top={pos.top} left={pos.left} />
      ))}
      <div className="relative z-20 max-w-5xl text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight"
        >
          Build <Cover>Intelligent Software</Cover> Faster with AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="mt-6 text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto"
        >
          We partner with visionary businesses to develop cutting-edge AI solutions that automate,
          innovate, and drive unprecedented growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/contact"
            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold px-8 py-3.5 rounded-lg shadow-md hover:scale-105 transition duration-300"
          >
            Request a Demo
          </Link>
          <Link
            href="/solutions"
            className="border border-purple-500 text-purple-400 font-semibold px-8 py-3.5 rounded-lg hover:bg-purple-500 hover:text-white transition duration-300"
          >
            Explore AI Solutions
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.7 }}
          className="mt-12 flex justify-center items-center text-sm text-gray-400"
        >
          <SparklesIcon className="w-5 h-5 text-purple-500 mr-2" />
          Trusted by innovative startups and enterprises.
        </motion.div>
      </div>
    </div>
  );
};
