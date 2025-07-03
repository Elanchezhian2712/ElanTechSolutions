"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import React, { useRef, ReactNode } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

// --- SectionWrapper (Reusable Layout Wrapper) ---
interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export const SectionWrapper = ({
  children,
  id,
  className = "",
}: SectionWrapperProps) => (
  <section
    id={id}
    className={`w-full py-12 lg:py-16 px-4 sm:px-6 lg:px-8 ${className}`}
  >
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

// --- RobotModel (Reusable 3D-style Component) ---
const RobotModel = () => {
  const Nub = ({ className = "" }: { className?: string }) => (
    <div
      className={`absolute h-4 w-4 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-800 shadow-inner ${className}`}
    />
  );
  const Foot = ({ className = "" }: { className?: string }) => (
    <div
      className={`absolute h-6 w-6 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-700 shadow-inner ${className}`}
    />
  );

  return (
    <div className="relative" style={{ transformStyle: "preserve-3d" }}>
      <div
        className="relative h-48 w-56 rounded-[40px] border-2 border-white/5 bg-zinc-900 shadow-2xl"
        style={{
          transformStyle: "preserve-3d",
          backgroundImage: `
            radial-gradient(circle at 10% 20%, #BEB3D466, transparent 50%),
            radial-gradient(circle at 90% 30%, #4F4C9B66, transparent 60%),
            radial-gradient(ellipse at 50% 100%, #B49A7844, transparent 60%)
          `,
        }}
      >
        <div className="absolute inset-0 rounded-[38px] bg-gradient-to-t from-transparent via-transparent to-pink-500/10" />
        <div
          className="absolute inset-4 rounded-[28px] bg-black/70 shadow-[inset_0px_4px_16px_rgba(0,0,0,0.7)]"
          style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 flex items-center justify-center gap-4">
            <div
              className="h-8 w-10 rounded-t-full bg-pink-400"
              style={{
                boxShadow:
                  "0 0 12px #ec4899, 0 0 24px #ec4899, 0 0 40px #d946ef",
                transform: "translateZ(10px)",
              }}
            />
            <div
              className="h-8 w-10 rounded-t-full bg-pink-400"
              style={{
                boxShadow:
                  "0 0 12px #ec4899, 0 0 24px #ec4899, 0 0 40px #d946ef",
                transform: "translateZ(10px)",
              }}
            />
          </div>
        </div>

        {/* Decorative bolts and feet */}
        <Nub className="left-16 -top-2" />
        <Nub className="right-16 -top-2" />
        <Nub className="top-16 -left-2" />
        <Nub className="top-28 -left-2" />
        <Nub className="top-16 -right-2" />
        <Nub className="top-28 -right-2" />
        <Foot className="left-12 -bottom-3" />
        <Foot className="right-12 -bottom-3" />
        <Foot className="left-24 -bottom-3" />
        <Foot className="right-24 -bottom-3" />
      </div>
    </div>
  );
};

// --- About Section with Scroll Fade-In and 3D Hover ---
export const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef(null);
  const isInView = useInView(observerRef, { once: true, margin: "-100px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const rotateX = useSpring(
    useTransform(mouseY, [-200, 200], [15, -15]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-200, 200], [-15, 15]),
    springConfig
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - left - width / 2);
    mouseY.set(e.clientY - top - height / 2);
  };

  return (
    <SectionWrapper
      id="about"
      className="bg-[linear-gradient(to_bottom,rgba(147,51,234,0.15),#18181b,rgba(147,51,234,0.15))]"
    >
      <div ref={observerRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-10 md:gap-16 items-center"
        >
          {/* Left - Text Content */}
          <div className="w-full lg:w-1/2 order-last md:order-first">
            <span className="text-purple-400 font-semibold text-sm tracking-wider uppercase">
              Our Mission
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-4 leading-tight">
              Pioneering AI-Powered Digital Transformation
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              At{" "}
              <span className="font-semibold text-purple-400">
                ElanTech Solutions
              </span>
              , we fuse deep AI expertise with strategic business insight. We
              empower organizations to transcend traditional limitations,
              automating complex processes and unlocking new levels of
              efficiency and innovation.
            </p>
            <p className="text-gray-300 text-md mb-8 leading-relaxed">
              From crafting intelligent automation for startups to deploying
              sophisticated machine learning models for enterprises, we build
              scalable AI systems that learn, adapt, and drive sustainable
              growth.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Learn More About Us <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* Right - Robot */}
          <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              mouseX.set(0);
              mouseY.set(0);
            }}
            className="relative w-full lg:w-1/2 h-[460px] order-first lg:order-last hidden lg:flex items-center justify-center"
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
            >
              <RobotModel />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
