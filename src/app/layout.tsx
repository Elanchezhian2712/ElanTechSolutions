// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import StarsCanvas from "../app/components/StarBackground";
import PageLoader from "../app/components/PageLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elan Tech Solutions",
  description: "Built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-white-300 antialiased flex flex-col min-h-screen`}
      >
        <PageLoader />
        <div className="fixed inset-0 z-[48]">
          <StarsCanvas />
        </div>
        
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}