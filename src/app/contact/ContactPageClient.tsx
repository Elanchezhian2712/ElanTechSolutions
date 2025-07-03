'use client';

import Link from 'next/link';
import { useState } from 'react'; 
import dynamic from 'next/dynamic';
import { FadeInContainer } from '../components/FadeInContainer';

const DynamicSparklesText = dynamic(() =>
  import('../components/ui/sparkles-text').then((mod) => mod.SparklesText),
  { ssr: false }
);

const DynamicMagicCard = dynamic(() =>
  import('../components/ui/magic-card').then((mod) => mod.MagicCard),
  { ssr: false }
);

interface ContactPoint {
  iconSVG?: string;
  title: string;
  value: string;
  href?: string;
}

interface SocialLink {
  iconSVG?: string;
  name: string;
  href: string;
}

interface ContactPageClientProps {
  contactText?: string; 
  heroSubtitle?: string;
  heroParagraph?: string;
  formIntroText?: string;
  contactPoints?: ContactPoint[];
  officeAddress?: string;
  googleMapsLink?: string;
  socialLinks?: SocialLink[];
}

const mockContactPoints: ContactPoint[] = [
  { iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>`, title: 'General Inquiries', value: 'elantechsolutions@gmail.com', href: 'mailto:elantechsolutions@gmail.com' },
  { iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>`, title: 'Sales & Partnerships', value: '(+91) 9789382712', href: 'tel:+919789382712' },
];
const mockSocialLinks: SocialLink[] = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/elantech', iconSVG: `<svg fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>` },
  { name: 'Twitter', href: 'https://twitter.com/elantech', iconSVG: `<svg fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>` },
  { name: 'GitHub', href: 'https://github.com/elantech', iconSVG: `<svg fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>` },
];

const ContactPageClient = ({
  contactText = "Get in Touch",
  heroSubtitle = "Let's Build Something Intelligent Together.",
  heroParagraph = "Have a project in mind, a question about our AI services, or just want to connect with our team of innovators? We're here to listen and explore how we can help you achieve your goals. Reach out, and let's start the conversation.",
  formIntroText = "Fill out the form below, and one of our AI specialists will get back to you shortly.",
  contactPoints = mockContactPoints, 
  officeAddress = "Annathanapatty, Salem, Tamil Nadu, India, 636002",
  googleMapsLink = "https://www.google.com/maps?q=J4RV+2VV,+5,+Trichy+Branch+Rd,+Valluvar+Nagar,+Annathanapatti,+Police+Quarters,+Salem,+Tamil+Nadu+636002",
  socialLinks = mockSocialLinks, 
}: ContactPageClientProps) => {
  const sectionBorderStyle = "border-neutral-800/70";
  const [formData, setFormData] = useState({ name: '', email: '', company: '', subject: '', message: '', interest: 'General Inquiry' });
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [statusMessage, setStatusMessage] = useState(''); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); 
    setStatusMessage(''); 
    // Form submission logic remains the same...
  };

  return (
    <div className={`bg-gradient-to-br from-purple-950/25 via-neutral-950 to-neutral-950 text-neutral-300 antialiased selection:bg-purple-500 selection:text-white min-h-screen`}>
      {/* Hero Section */}
      <div
        className={`rounded-b-3xl md:rounded-b-4xl min-h-[70vh] sm:min-h-[80vh] md:h-auto md:min-h-[calc(100vh-80px)] xl:min-h-[45rem] w-full relative flex flex-col items-center justify-center border-b ${sectionBorderStyle} px-4 py-16 sm:py-20 md:py-24 overflow-hidden`}
      >
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-neutral-950/0 to-neutral-950/0 opacity-75"></div>
      
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-950/70 to-transparent z-0"></div> 
        <FadeInContainer>
        <div className="max-w-4xl 2xl:max-w-5xl mt-30 mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold font-sans !leading-tight text-white"><DynamicSparklesText>{contactText}</DynamicSparklesText></h1>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-purple-500/80 tracking-wide font-medium">{heroSubtitle}</p>
          <nav aria-label="Breadcrumb" className="relative z-10 mt-8 sm:mt-10 text-sm md:text-base text-neutral-400">
            <ol className="list-none p-0 inline-flex items-center space-x-1.5 md:space-x-2">
              <li><Link href="/" className="hover:text-purple-300 transition-colors duration-200">Home</Link></li>
              <li className="text-neutral-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></li>
              <li><span className="text-purple-500/90 font-medium" aria-current="page">Contact</span></li>
            </ol>
          </nav>
          <p className="relative z-10 mt-8 sm:mt-10 text-base sm:text-lg md:text-xl text-neutral-300/90 leading-relaxed max-w-3xl mx-auto">{heroParagraph}</p>
        </div>
        </FadeInContainer>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="contact-form-section" className={`w-full py-16 sm:py-20 md:py-24 lg:py-28`}>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 xl:gap-20 items-start">
              {/* Left Column with Fade-in */}
              <div className="lg:col-span-2">
                <FadeInContainer>
                  <div className="space-y-10">
                    <div className="mt-0 sm:mt-[100px]">
                      <h3 className="text-2xl font-semibold text-neutral-100 mb-6 text-center sm:text-left">Direct Contact</h3>
                      <div className="space-y-5 max-w-sm mx-auto sm:max-w-none sm:mx-0">
                        {contactPoints?.map((point) => (
                          <div key={point.title} className="flex items-start group">
                            <div className="flex-shrink-0 w-10 h-10 bg-neutral-800/70 border border-neutral-700/80 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all duration-300" dangerouslySetInnerHTML={{ __html: point.iconSVG || '' }}/>
                            <div>
                              <h4 className="font-semibold text-neutral-200 group-hover:text-purple-300 transition-colors duration-300">{point.title}</h4>
                              {point.href ? (<a href={point.href} className="text-purple-500 hover:text-purple-300 transition-colors duration-300 text-sm break-all">{point.value}</a>) : (<p className="text-neutral-400 text-sm">{point.value}</p>)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {officeAddress && (
                      <div>
                        <h3 className="text-2xl font-semibold text-neutral-100 mb-6 text-center sm:text-left">Our Office</h3>
                        <div className="flex items-start group max-w-sm mx-auto sm:max-w-none sm:mx-0">
                          <div className="flex-shrink-0 w-10 h-10 bg-neutral-800/70 border border-neutral-700/80 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-500 group-hover:text-purple-300"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 11.25h6m-6 4.5h6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-neutral-200 group-hover:text-purple-300 transition-colors duration-300">Location</h4>
                            <address className="text-neutral-400 text-sm not-italic leading-relaxed">{officeAddress.split(',').map((line, i) => <span key={i} className="block">{line.trim()}</span>)}</address>
                            {googleMapsLink && (<a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center text-sm text-purple-500 hover:text-purple-300 transition-colors duration-300">View on Map<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg></a>)}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {socialLinks && socialLinks.length > 0 && (
                      <div>
                        <h3 className="text-2xl font-semibold text-neutral-100 mb-6 text-center sm:text-left">Connect With Us</h3>
                        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                          {socialLinks?.map((social) => (<a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="w-10 h-10 bg-neutral-800/70 border border-neutral-700/80 rounded-lg flex items-center justify-center text-neutral-400 hover:text-purple-500 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300" dangerouslySetInnerHTML={{ __html: social.iconSVG || '' }}/>))}
                        </div>
                      </div>
                    )}
                  </div>
                </FadeInContainer>
              </div>

              {/* Right Column: Form ONLY with Fade-in */}
              <div className="lg:col-span-3">
                <FadeInContainer>
                  <div className="mb-8 md:mb-10 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-neutral-100">Send Us a Message</h2>
                    <p className="text-neutral-400 text-base sm:text-lg mt-3 md:mt-4 max-w-xl mx-auto lg:mx-0 leading-relaxed">{formIntroText}</p>
                  </div>
                  <DynamicMagicCard className="w-full rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-neutral-800/70">
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                      {/* Form fields remain the same */}
                      <div><label htmlFor="name" className="block text-xs sm:text-sm font-medium text-neutral-300 mb-1 sm:mb-1.5">Full Name</label><input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="e.g., Ada Lovelace" required className="input-field-style" /></div>
                      <div><label htmlFor="company" className="block text-xs sm:text-sm font-medium text-neutral-300 mb-1 sm:mb-1.5">Company (Optional)</label><input type="text" name="company" id="company" value={formData.company} onChange={handleChange} placeholder="e.g., ElanTech Solutions" className="input-field-style" /></div>
                      <div><label htmlFor="email" className="block text-xs sm:text-sm font-medium text-neutral-300 mb-1.5">Email Address</label><input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required className="input-field-style" /></div>
                      <div>
                        <label htmlFor="interest" className="block text-xs sm:text-sm font-medium text-neutral-300 mb-1 sm:mb-1.5">I&apos;m interested in...</label>
                        <select name="interest" id="interest" value={formData.interest} onChange={handleChange} required className="input-field-style appearance-none bg-neutral-800/70 border border-neutral-700/80 rounded-lg shadow-sm placeholder-neutral-500 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-purple-500/80 focus:border-purple-500/90 transition-all duration-300 ease-in-out hover:border-neutral-600 block w-full" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25em 1.25em' }}><option>General Inquiry</option><option>Project Collaboration</option><option>AI Solutions Demo</option><option>Partnership Opportunities</option><option>Careers</option><option>Other</option></select>
                      </div>
                      <div><label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-neutral-300 mb-1 sm:mb-1.5">Subject</label><input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} placeholder="Briefly, what is this about?" required className="input-field-style" /></div>
                      <div><label htmlFor="message" className="block text-xs sm:text-sm font-medium text-neutral-300 mb-1 sm:mb-1.5">Your Message</label><textarea id="message" name="message" rows={3} value={formData.message} onChange={handleChange} placeholder="Tell us more..." required className="input-field-style min-h-[100px] sm:min-h-[120px]"></textarea></div>
                      {statusMessage && (<p className={`text-sm font-semibold ${statusMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{statusMessage}</p>)}
                      <div><button type="submit" disabled={isSubmitting} className="w-full group inline-flex items-center justify-center py-3 sm:py-3.5 px-4 sm:px-6 border border-transparent rounded-lg shadow-md text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950 focus:ring-purple-500 transition-all duration-300 ease-in-out mt-1 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed">{isSubmitting ? 'Sending...' : 'Send Message'}{!isSubmitting && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg>)}</button></div>
                    </form>
                  </DynamicMagicCard>
                </FadeInContainer>
              </div>
            </div>
          </div>
        </section>
      </div>
      <style jsx global>{`
        .input-field-style {
          margin-top: 0.25rem;
          display: block;
          width: 100%;
          padding-left: 0.75rem;
          padding-right: 0.75rem;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          font-size: 0.875rem;
          line-height: 1.25rem;

          background-color: rgba(55, 65, 81, 0.7);
          border-width: 1px;
          border-color: rgba(75, 85, 99, 0.8);
          border-radius: 0.375rem;
          box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
          color: #f3f4f6;
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }
        .input-field-style::placeholder {
          color: #6b7280;
          font-size: 0.875rem;
        }
        .input-field-style:focus {
          outline: 2px solid transparent;
          outline-offset: 2px;
          --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
          --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
          --tw-ring-color: rgba(168, 85, 247, 0.8);
          border-color: rgba(168, 85, 247, 0.9);
        }
        .input-field-style:hover {
            border-color: #4b5563;
        }

        @media (min-width: 640px) {
          .input-field-style {
            padding-left: 1rem;
            padding-right: 1rem;
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
          }
          .input-field-style::placeholder {
            font-size: 0.875rem;
          }
        }
`}</style>
    </div>
  );
};

export default ContactPageClient;