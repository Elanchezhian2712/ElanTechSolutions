// HomePage.tsx

import Link from "next/link";
import { Cover } from "./components/ui/cover"; 
import { ArrowRightIcon, SparklesIcon } from "lucide-react";

export default function HomePage() {
  return (

    <div className="bg-black text-white w-full"> 
      <div className="w-full relative flex flex-col items-center antialiased mt-60 sm:mt-70"> 
        <section className="max-w-5xl text-center py-20 md:py-32 flex flex-col justify-center items-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Building Smarter <Cover>Software with AI</Cover>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            We help businesses leverage Artificial Intelligence to automate, innovate, and scale faster than ever.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="bg-purple-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-purple-600 transition"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/projects"
              className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              Explore Our Solutions
            </Link>
          </div>
        </section>

    
        <section className="max-w-5xl text-center mt-20 sm:mt-40 py-20 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Why Choose Us?</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Businesses struggle with manual processes, slow scaling, and disconnected systems.
            Our AI-powered software automates your workflows and unlocks new efficiencies.
          </p>
        </section>

        {/* Key Features */}
        <section className="max-w-6xl w-full text-center py-20 px-4"> 
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8"> 
            {[
              {
                title: "AI-Powered Automation",
                desc: "Automate repetitive tasks and boost productivity.",
                icon: <SparklesIcon className="w-8 h-8 text-purple-400 mx-auto" />,
              },
              {
                title: "Real-time Insights",
                desc: "Make smarter decisions with predictive analytics.",
                icon: <ArrowRightIcon className="w-8 h-8 text-blue-400 mx-auto" />,
              },
              {
                title: "Seamless Integration",
                desc: "Plug into your existing tools and workflows easily.",
                icon: <SparklesIcon className="w-8 h-8 text-green-400 mx-auto" />,
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-zinc-900 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-transform flex flex-col items-center" 
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}