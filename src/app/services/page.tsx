// app/services/page.tsx

import { Metadata } from 'next';
import ServicesPageClient, { type ServiceItemData } from './ServicesPageClient';


export const metadata: Metadata = {
    title: 'Services | ElanTech Solutions',
 description: "Elan Tech Solutions specializes in custom software, AI integrations, and scalable web platforms, tailored to drive business success.",
    keywords: ['ElanTech Solutions', 'Technology', 'Services', 'Software Development'],
    authors: [{ name: 'ElanTech Solutions', url: 'https://elantechsolutions.vercel.app' }],
    openGraph: {
        title: 'Services | ElanTech Solutions',
     description: "Elan Tech Solutions specializes in custom software, AI integrations, and scalable web platforms, tailored to drive business success.",
        url: 'https://elantechsolutions.vercel.app/services', 
        siteName: 'ElanTech Solutions',
        images: [
            {
                url: '/logo.png', 
                width: 1200,      
                height: 630,      
                alt: 'ElanTech Solutions Logo', 
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Services | ElanTech Solutions',
     description: "Elan Tech Solutions specializes in custom software, AI integrations, and scalable web platforms, tailored to drive business success.",
        images: ['/logo.png'], 
        creator: '@elantech',
    },
    metadataBase: new URL('https://elantechsolutions.vercel.app'),
    alternates: {
        canonical: '/services',
    },
};


// Define your premium service data here
const premiumServiceData: ServiceItemData[] = [
  {
    id: 'enterprise-web-apps',
    title: 'Enterprise Web Applications',
    description: 'We build robust, scalable, and secure web applications tailored to your complex business needs. From internal dashboards to customer-facing platforms, we deliver performance and reliability.',
    iconId: 'webApp',
    features: [
      'Custom Feature Development',
      'Scalable Architecture (Microservices/Serverless)',
      'Third-Party API Integrations',
      'Cloud Deployment & Management'
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Product Design',
    description: 'Our human-centered design process focuses on creating intuitive, engaging, and beautiful interfaces. We turn complex problems into delightful user experiences that drive adoption and retention.',
    iconId: 'webDesign',
    features: [
      'User Research & Persona Development',
      'Wireframing & Interactive Prototyping',
      'Design Systems & Brand Identity',
      'Usability Testing & Iteration'
    ],
  },
  {
    id: 'mobile-app-dev',
    title: 'Mobile App Development',
    description: 'Capture your audience on the go with high-performance native and cross-platform mobile apps. We handle the entire lifecycle, from ideation and design to App Store submission and support.',
    iconId: 'appDev',
    features: [
      'iOS (Swift) & Android (Kotlin)',
      'Cross-Platform (React Native/Flutter)',
      'Push Notifications & Geolocation',
      'App Store & Play Store Submission'
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Engineering',
    description: 'Accelerate your development lifecycle and enhance scalability with our DevOps and cloud solutions. We implement CI/CD pipelines, automate infrastructure, and ensure your applications are resilient.',
    iconId: 'dbMgmt', // You can create a new, more fitting icon
    features: [
      'CI/CD Pipeline Implementation',
      'Infrastructure as Code (IaC)',
      'AWS, GCP, Azure Cloud Services',
      'Monitoring & Performance Optimization'
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Leverage the power of artificial intelligence to unlock data-driven insights and automate processes. We develop custom AI models and integrate intelligent features into your applications.',
    iconId: 'dataAnalysis', // You can create a new, more fitting icon
    features: [
      'Custom Machine Learning Models',
      'Natural Language Processing (NLP)',
      'Predictive Analytics & Forecasting',
      'Computer Vision Solutions'
    ],
  },
  {
    id: 'ecommerce-saas',
    title: 'E-commerce & SaaS Platforms',
    description: 'Launch and scale your digital products with our expertise in building multi-tenant SaaS applications and conversion-optimized e-commerce platforms. We focus on monetization and growth.',
    iconId: 'webDev', // You can create a new, more fitting icon
    features: [
      'Subscription & Billing Integration',
      'Multi-Tenant Architectures',
      'Payment Gateway Integration',
      'Conversion Rate Optimization (CRO)'
    ],
  },
  {
  id: 'seo-digital-marketing',
  title: 'SEO & Digital Marketing',
  description: 'Enhance your online visibility and drive traffic with strategic SEO and multi-channel digital marketing campaigns tailored to your audience.',
  iconId: 'webDev', // You can add a separate icon if needed
  features: [
    'Search Engine Optimization (On-page & Off-page)',
    'Performance-Based PPC & Google Ads',
    'Content Marketing & Blogging',
    'Email & SMS Marketing Campaigns'
  ],
},
{
  id: 'startup-mvp',
  title: 'MVP Development for Startups',
  description: 'Turn your startup idea into a functional Minimum Viable Product (MVP) that’s ready to test, validate, and scale in the market.',
  iconId: 'appDev', // Or create a dedicated "startup" icon
  features: [
    'Lean Product Strategy',
    'Rapid Prototyping',
    'Iterative MVP Releases',
    'Startup Advisory & Pitch Decks'
  ],
},
{
  id: 'branding-growth',
  title: 'Branding & Growth Strategy',
  description: 'Build a compelling brand identity and execute data-backed growth strategies that resonate with your audience and drive engagement.',
  iconId: 'webDesign',
  features: [
    'Logo & Brand Guidelines',
    'Social Media Marketing',
    'Growth Hacking Strategies',
    'Customer Engagement Funnels'
  ],
},

];


export default function ServicesPage() {
  return <ServicesPageClient cardData={premiumServiceData} />;
}