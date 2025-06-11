'use client'; // This is crucial for client-side interactivity

import Link from 'next/link';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Lottie from "lottie-react";
// Assuming 'Singing Contract.json' is in the same directory or adjust path
import animationData from "./Singing Contract.json";

// Dynamic imports for UI components
const DynamicSparklesText = dynamic(() =>
  import('../components/ui/sparkles-text').then((mod) => mod.SparklesText)
);

const DynamicHyperText = dynamic(() =>
  import('../components/ui/hyper-text').then((mod) => mod.HyperText)
);

const DynamicTracingBeam = dynamic(() =>
  import('../components/ui/tracing-beam').then((mod) => mod.TracingBeam),
  { ssr: false } // Only renders on the client
);

const DynamicMagicCard = dynamic(() =>
  import('../components/ui/magic-card').then((mod) => mod.MagicCard),
  { ssr: false } // Only renders on the client
);

// Define props for the client component
interface ContactPageClientProps {
  contactText: string;
  heroParagraph: string;
  subText: string;
  formIntroText: string;
}

const ContactPageClient = ({
  contactText,
  heroParagraph,
  subText,
  formIntroText
}: ContactPageClientProps) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to an API endpoint
    console.log('Form submitted:', formData);
    // Example: try { await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) }); alert('Message sent!'); } catch (error) { alert('Error sending message.'); }
    alert('Form submitted (check console). Implement actual submission logic.');
    setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
  };

  return (
    <div >
      {/* Hero Section */}
       <div className={`rounded-b-4xl h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased border-b ${sectionBorderStyle}`}>
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
            {heroParagraph}
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <DynamicTracingBeam className="max-w-7xl mx-auto">
        <section className={`w-full my-16  border-b ${sectionBorderStyle}`}>
          <div className="container mx-auto px-4 pb-16 md:pb-24">
            <div className="mb-12 md:mb-16 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                <DynamicHyperText>{subText}</DynamicHyperText>
              </h2>
              <p className="text-neutral-300 text-sm md:text-base mt-3 md:mt-4 max-w-xl mx-auto md:mx-0">
                {formIntroText}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12 items-start">
              {/* Lottie Animation */}
              <div className="flex justify-center md:justify-start md:-ml-4 lg:-ml-8">
                <div className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-full lg:max-w-[500px]">
                  <Lottie
                    animationData={animationData}
                    loop
                    autoplay
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <DynamicMagicCard className="w-full rounded-2xl p-6 sm:p-8 shadow-xl border border-neutral-800">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1.5">
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
                      className="mt-1 block w-full px-4 py-3 bg-black border border-neutral-700 rounded-md shadow-sm placeholder-neutral-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1.5">
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
                      className="mt-1 block w-full px-4 py-3 bg-black border border-neutral-700 rounded-md shadow-sm placeholder-neutral-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-1.5">
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
                      className="mt-1 block w-full px-4 py-3 bg-black border border-neutral-700 rounded-md shadow-sm placeholder-neutral-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1.5">
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
                      className="mt-1 block w-full px-4 py-3 bg-black border border-neutral-700 rounded-md shadow-sm placeholder-neutral-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition-colors duration-300 min-h-[120px]"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-500 transition-colors duration-300 mt-2"
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

export default ContactPageClient;