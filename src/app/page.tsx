// HomePage.tsx
import Link from "next/link";
import Image from "next/image";
import { Cover } from "./components/ui/cover"; 
import { Marquee } from "./components/ui/marquee";
import {
  ArrowRightIcon,
  SparklesIcon,
  ChevronDownIcon,
  ShieldCheck,
  Target,
  Zap,
  BrainCircuit, 
  Briefcase,
  Code,
  DatabaseZap,
  Combine,
  Rocket,
  LifeBuoy,
} from "lucide-react";


const SectionWrapper: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "", id }) => (
  <section id={id} className={`w-full py-16 md:py-24 ${className}`}> 
    <div className="container mx-auto px-4 sm:px-6 lg:px-8"> 
      {children}
    </div>
  </section>
);

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div
    className="bg-zinc-900 rounded-xl p-6 shadow-md transition-transform duration-300 transform hover:-translate-y-1"
    style={{ willChange: "transform" }}
  >
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600/20 text-purple-500 mb-5">
      {icon}
    </div>
    <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-white">{title}</h3>
    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{description}</p>
  </div>
);

export default function HomePage() {
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
      a: "Project timelines vary. An AI MVP or prototype can take 4-8 weeks. Full-scale custom AI system development may range from 3-6+ months, depending on complexity and data requirements.",
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

  return (
    <div className="text-white w-full overflow-x-hidden"> 
      {/* Hero Section (remains the same) */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center antialiased overflow-hidden pt-20 pb-10">
        <div aria-hidden="true" className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-zinc-950 to-zinc-950"></div>
        </div>
        <section className="relative z-10 max-w-4xl text-center py-10 md:py-16 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Build <Cover>Intelligent Software</Cover> Faster with AI
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We partner with visionary businesses to develop cutting-edge AI solutions that automate, innovate, and drive unprecedented growth.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-3.5 rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105"
            >
              Request a Demo
            </Link>
            <Link
              href="/solutions" 
              className="w-full sm:w-auto border-1 border-purple-500 text-purple-500 font-semibold px-8 py-3.5 rounded-lg hover:bg-gradient-to-r from-purple-500 to-indigo-600 hover:text-white transition-colors duration-300 transform hover:scale-105"
            >
              Explore AI Solutions
            </Link>
          </div>
          <div className="mt-12 text-sm text-gray-400 flex items-center justify-center">
            <SparklesIcon className="w-5 h-5 mr-2 text-purple-500" />
            Trusted by innovative startups and enterprises.
          </div>
        </section>
      </div>

      {/* About Section (remains the same, uses SectionWrapper) */}
      <SectionWrapper className="bg-zinc-900" id="about">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <div className="md:w-1/2 w-full order-last md:order-first">
            <span className="text-purple-500 font-semibold text-sm tracking-wider uppercase">Our Mission</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-4 leading-tight">
              Pioneering AI-Powered Digital Transformation
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed text-justify">
              At <span className="font-semibold text-purple-500">ElanTech Solutions</span>, we fuse deep AI expertise with strategic business insight. We empower organizations to transcend traditional limitations, automating complex processes and unlocking new levels of efficiency and innovation.
            </p>
            <p className="text-gray-300 text-md mb-8 leading-relaxed text-justify">
              From crafting intelligent automation for startups to deploying sophisticated machine learning models for enterprises, we build scalable AI systems that learn, adapt, and drive sustainable growth.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Learn More About Us <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
          <div className="md:w-1/2 w-full order-first md:order-last">
            <Image
              src="/about-ai.jpg"
              alt="AI Development Team Collaborating"
              width={1200}
              height={675}
              quality={80}
              className="rounded-xl shadow-2xl w-full object-cover aspect-video md:aspect-square lg:aspect-video"
              loading="lazy"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Us? Section (remains the same, uses SectionWrapper) */}
      <SectionWrapper id="why-us">
        <div className="text-center">
          <span className="text-purple-500 font-semibold text-sm tracking-wider uppercase">Our Advantage</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-4 leading-tight">
             Why Partner with ElanTech Solutions?
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed">
            Overcome manual bottlenecks, slow scaling, and fragmented systems. Our bespoke AI solutions automate workflows, provide actionable insights, and unlock exponential efficiencies.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <FeatureCard
            icon={<ShieldCheck className="w-7 h-7" />}
            title="Expert AI-Driven Solutions"
            description="We leverage advanced machine learning and deep learning to automate decisions, reduce errors, and deliver measurable ROI."
          />
          <FeatureCard
            icon={<Target className="w-7 h-7" />}
            title="Tailored to Your Business"
            description="Custom-built AI tools and models that align perfectly with your unique operational goals, workflows, and growth trajectory."
          />
          <FeatureCard
            icon={<Zap className="w-7 h-7" />}
            title="Rapid & Agile Implementation"
            description="We deliver MVPs and iterative solutions quickly, allowing you to test, learn, and scale without losing momentum in a fast-paced market."
          />
        </div>
      </SectionWrapper>

      {/* Our Services Section - MODIFIED FOR FULL-WIDTH MARQUEE */}
      <section
  id="services"
  className="w-full py-16 md:py-24 bg-gradient-to-b from-purple-900/20 via-zinc-900 to-zinc-900 overflow-hidden"
>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <span className="text-purple-500 font-semibold text-sm tracking-wider uppercase">What We Offer</span>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-4 leading-tight">
      Comprehensive AI Development Services
    </h2>
    <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed">
      From initial concept to full-scale deployment and beyond, we provide end-to-end AI services to transform your business.
    </p>
  </div>

  <Marquee pauseOnHover className="[--duration:30s]">
    <div className="flex gap-6 md:gap-8 w-max px-3 md:px-4">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="w-[300px] md:w-[360px] bg-zinc-800 rounded-xl p-6 shadow-md transition-all duration-300 transform hover:scale-[1.02]"
          style={{ willChange: "transform" }}
        >
          <div className="text-purple-500 mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed flex-grow">{service.desc}</p>
          <Link
            href={`/solutions/${service.slug}`}
            className="mt-5 text-purple-400 hover:text-purple-300 font-medium inline-flex items-center text-sm group"
          >
            Learn More
            <ArrowRightIcon className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      ))}
    </div>
  </Marquee>
</section>


      {/* FAQ Section (remains the same, uses SectionWrapper) */}
      <SectionWrapper id="faq">
        <div className="max-w-3xl mx-auto text-left">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-purple-500 font-semibold text-sm tracking-wider uppercase">Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-4 leading-tight"> Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <details
                key={idx}
                className="group bg-zinc-800/70 backdrop-blur-sm p-5 rounded-lg shadow-md transition-all duration-300 hover:bg-zinc-700/80"
              >
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-white group-open:text-purple-500 list-none">
                  {item.q}
                  <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180 text-purple-500" />
                </summary>
                <p className="mt-3 text-gray-300 leading-relaxed text-base">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}