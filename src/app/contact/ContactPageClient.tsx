// src/app/about/page.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Lottie from "lottie-react";
import animationData from "./Singing Contract.json";
// Dynamically import heavy UI components

const DynamicSparklesText = dynamic(() =>
  import('../components/ui/sparkles-text').then((mod) => mod.SparklesText)
);

// TracingBeam often relies on window/document, so ssr: false is a good practice
const DynamicTracingBeam = dynamic(() =>
  import('../components/ui/tracing-beam').then((mod) => mod.TracingBeam),
  { ssr: false }
);

const DynamicMagicCard = dynamic(() =>
  import('../components/ui/magic-card').then((mod) => mod.MagicCard),
  { ssr: false }
);


const ContactPage = () => {
  const sectionBorderStyle = "border-neutral-700/50";
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactText = "Contact Us";

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center ">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-500 border-solid"></div>
      </div>
    );
  }


  return (
    <div >
      <div className={`h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased border-b ${sectionBorderStyle}`}>
        <div className="max-w-5xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl text-purple-500 text-center font-sans font-bold">
            <DynamicSparklesText>{contactText}</DynamicSparklesText>
          </h1>
          <nav className="relative z-10 mt-4 text-sm md:text-base text-white-400">
            <ol className="list-reset flex justify-center space-x-2 md:space-x-4">
              <li>
                <Link href="/" className="hover:text-purple-500 transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-white-300">Contact Us</li>
            </ol>
          </nav>
          <p className="relative z-10 mt-8 text-lg md:text-xl text-white-300 leading-relaxed text-justify md:text-center max-w-4xl mx-auto">
            We&apos;re just one step away from connecting with you! Whether you have questions about our services, need expert support, or are looking to collaborate on something innovative, our team is here to help. Reach out via phone, email, or our contact form — and let&rsquo;s start a conversation that drives meaningful impact and lasting success for your business.
          </p>
        </div>

      </div>

      <DynamicTracingBeam className="max-w-7xl">
        <section className={`w-full mt-0 my-16  border-b ${sectionBorderStyle}`}>
          <div className="container mx-auto mt-16 px-4 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-50 items-center">

              {/* <div className="w-full h-full ">
                <Image
                  src="/22.png"
                  alt="Contact illustration"
                  width={600}
                  height={400}
                  loading="lazy"
                  className="w-full h-auto rounded-2xl shadow-lg object-cover"
                />
              </div> */}
              <div className="w-full h-full">
                <Lottie
                  animationData={animationData}
                  loop
                  autoplay
                  className="w-full h-auto rounded-2xl shadow-lg object-cover"
                />
              </div>

              {/* Right Side: Form */}
              <DynamicMagicCard className="w-full -900 rounded-2xl p-8 shadow-xl border border-white-1000">
                <form onSubmit={handleSubmit} className="space-y-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white-300 mb-1">
                      Name :
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="mt-1 block w-full px-4 py-3  border border-white-700 rounded-md shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white-300 mb-1">
                      Email :
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="yourgmail@mail.com"
                      required
                      className="mt-1 block w-full px-4 py-3  border border-white-700 rounded-md shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white-300 mb-1">
                      Subject :
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="I want to..."
                      required
                      className="mt-1 block w-full px-4 py-3  border border-white-700 rounded-md shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white-300 mb-1">
                      Message :
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello,..."
                      required
                      className="mt-1 block w-full px-4 py-3  border border-white-700 rounded-md shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition-colors duration-300 min-h-[120px]"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-500 transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </DynamicMagicCard>
            </div>
          </div>
        </section>
      </DynamicTracingBeam>
    </div>
  );
};


export default ContactPage;