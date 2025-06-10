import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StarsCanvas from "./components/StarBackground";
import PageLoader from "./components/PageLoader";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PageLoader />
        
        {/* Layer 1: The Star Background. z-0 makes it the base layer. */}
        <div className="fixed inset-0 z-0">
          <StarsCanvas />
        </div>

        {/* Layer 2: The Content. relative and z-10 lift this layer above the stars. */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}