"use client";

import { ChevronDownIcon } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "What kind of AI solutions do you specialize in?",
    a: "We specialize in custom AI software, machine learning model development, LLM integration, natural language processing (NLP), computer vision, and AI-driven automation for various industries.",
  },
  {
    q: "Which industries do you primarily serve?",
    a: "We serve a diverse range of industries including tech startups, healthcare, finance, e-commerce, and manufacturing, tailoring AI solutions to specific domain needs.",
  },
  {
    q: "How long does a typical AI project take?",
    a: "Project timelines vary. An AI MVP or prototype can take 4–8 weeks. Full-scale custom AI system development may range from 3–6+ months, depending on complexity and data requirements.",
  },
  {
    q: "What is your process for developing an AI solution?",
    a: "Our process includes discovery & strategy, data analysis & preparation, model development & training, integration, rigorous testing, deployment, and ongoing monitoring & optimization.",
  },
  {
    q: "Do you offer ongoing support and maintenance?",
    a: "Yes, we offer comprehensive support and maintenance plans to ensure your AI systems perform optimally, adapt to new data, and scale with your business needs.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper id="faq" className="py-16">
      <div className="max-w-4xl mx-auto text-left mb-24">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-purple-400 font-semibold text-sm tracking-widest uppercase">
            Got Questions?
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white my-4 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-zinc-800/70 border border-white/10 rounded-xl shadow-md backdrop-blur-sm px-6 py-5 transition-all duration-300 hover:bg-zinc-700/80"
              >
                {/* Summary */}
                <button
                  className="flex justify-between items-center w-full text-left cursor-pointer text-white font-medium text-lg group"
                  onClick={() => toggle(idx)}
                >
                  <span className={`${isOpen ? "text-purple-400" : ""}`}>
                    {item.q}
                  </span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-purple-400 transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* AnimatePresence for fade in/out */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <p className="mt-4 text-gray-300 leading-relaxed text-base">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
