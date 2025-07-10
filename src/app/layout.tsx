import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarsCanvas from "./components/StarBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import WhatsAppButton from "./components/WhatsAppButton";

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
  description: "Elan Tech Solutions specializes in custom software, AI integrations, and scalable web platforms, tailored to drive business success."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white overflow-x-hidden`}
        >
        <SmoothScroll> 
          <StarsCanvas />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <WhatsAppButton /> 
      </body>
    </html>
  );
}
