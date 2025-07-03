"use client";

import { ShieldCheck, Target, Zap } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";

import { motion } from "framer-motion";

const features = [
  {
    icon: <ShieldCheck className="w-7 h-7 text-purple-500" />,
    title: "Expert AI-Driven Solutions",
    description:
      "We leverage advanced machine learning and deep learning to automate decisions, reduce errors, and deliver measurable ROI.",
  },
  {
    icon: <Target className="w-7 h-7 text-purple-500" />,
    title: "Tailored to Your Business",
    description:
      "Custom-built AI tools and models that align perfectly with your unique operational goals, workflows, and growth trajectory.",
  },
  {
    icon: <Zap className="w-7 h-7 text-purple-500" />,
    title: "Rapid & Agile Implementation",
    description:
      "We deliver MVPs and iterative solutions quickly, allowing you to test, learn, and scale without losing momentum in a fast-paced market.",
  },
];

export const WhyChooseUs = () => (
  <SectionWrapper
    id="why-us"
    className="py-20"
  >
    <div className="text-center max-w-3xl mx-auto">
      <span className="text-purple-400 font-semibold text-sm tracking-widest uppercase">
        Our Advantage
      </span>
      <h2 className="text-4xl sm:text-5xl font-bold text-white my-4 leading-tight">
        Why Partner with ElanTech Solutions?
      </h2>
      <p className="text-gray-400 text-lg mb-16 leading-relaxed">
        Overcome manual bottlenecks, slow scaling, and fragmented systems. Our bespoke AI
        solutions automate workflows, provide actionable insights, and unlock exponential
        efficiencies.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-2xl bg-zinc-800/70 backdrop-blur-sm border border-white/10 p-6 shadow-md hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 rounded-full bg-purple-500/10 border border-purple-500/20 shadow-md">
              {feature.icon}
            </div>
          </div>
          <h3 className="text-white text-xl font-semibold mb-2 text-center">
            {feature.title}
          </h3>
          <p className="text-gray-400 text-md text-center leading-relaxed">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);
