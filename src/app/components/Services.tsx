"use client";

import Link from "next/link";
import {
  ArrowRightIcon,
  Briefcase,
  Code,
  DatabaseZap,
  Combine,
  Rocket,
  LifeBuoy,
} from "lucide-react";
import { Marquee } from "./ui/marquee";
import { motion } from "framer-motion";

export const Services = () => {
  const services = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "AI Strategy & Consulting",
      slug: "ai-strategy-consulting",
      desc: "Unlock AI's potential with strategic guidance to identify impactful solutions for your business.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom AI Development",
      slug: "custom-ai-development",
      desc: "Bespoke AI applications, LLM integrations, and intelligent automation tailored to your unique challenges.",
    },
    {
      icon: <DatabaseZap className="w-6 h-6" />,
      title: "Machine Learning Models",
      slug: "machine-learning-models",
      desc: "Develop predictive and generative models trained on your data for maximum accuracy and insight.",
    },
    {
      icon: <Combine className="w-6 h-6" />,
      title: "AI Integration Services",
      slug: "ai-integration-services",
      desc: "Seamlessly integrate advanced AI capabilities into your existing software and workflows.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "AI MVP & Prototyping",
      slug: "ai-mvp-prototyping",
      desc: "Rapidly validate your AI ideas with functional MVPs, built fast to gather insights and iterate.",
    },
    {
      icon: <LifeBuoy className="w-6 h-6" />,
      title: "Support & AI Evolution",
      slug: "support-ai-evolution",
      desc: "Continuous support, maintenance, and scaling for your AI systems as your business grows and evolves.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full py-16 md:py-24 bg-gradient-to-b from-purple-900/20 via-zinc-900 to-zinc-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-purple-500 font-semibold text-sm tracking-wider uppercase">
          What We Offer
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-4 leading-tight text-white">
          Comprehensive AI Development Services
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed">
          From initial concept to full-scale deployment and beyond, we provide end-to-end AI
          services to transform your business.
        </p>
      </div>

      <Marquee pauseOnHover className="[--duration:30s]">
        <div className="flex gap-6 md:gap-8 w-max px-3 md:px-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="w-[300px] md:w-[360px] bg-zinc-800 rounded-xl p-6 shadow-md transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="text-purple-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
              <Link
                href={`/solutions/${service.slug}`}
                className="mt-5 text-purple-400 hover:text-purple-300 font-medium inline-flex items-center text-sm group"
              >
                Learn More
                <ArrowRightIcon className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};
