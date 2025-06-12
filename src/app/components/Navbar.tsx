'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { BorderBeam } from "../components/ui/border-beam";

const navItemsLeft = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT US' },
  { href: '/projects', label: 'PRODUCTS' },
];

const navItemsRight = [
  { href: '/services', label: 'SERVICES' },
  { href: '/careers', label: 'CAREERS' },
  { href: '/contact', label: 'CONTACT' },
];

const Navbar = () => {
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const linkBaseStyle =
    "flex items-center justify-center uppercase font-medium text-[11px] sm:text-xs md:text-sm tracking-normal sm:tracking-wider transition-colors duration-200 ease-in-out whitespace-nowrap px-0.5 sm:px-1";

  return (
    <div className="fixed top-12 inset-x-0 max-w-4xl lg:max-w-5xl mx-auto z-50 px-2 sm:px-4">
      <div className="bg-black/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-between w-full py-3 sm:py-4 md:py-5 px-2 rounded-full relative overflow-hidden">

        {/* Left nav items */}
        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
          {navItemsLeft.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                linkBaseStyle,
                pathname === item.href
                  ? 'text-white font-semibold'
                  : 'text-white-400 hover:text-purple-500/90'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 mx-1 sm:mx-2 md:mx-3">
          <Image
            src="/logo.png"
            alt="ElanTech Icon"
            width={32}
            height={24}
            className="mr-1 sm:mr-2"
          />
          <Image
            src="/logo-elantech.png"
            alt="ElanTech Solutions"
            width={270}
            height={90}
            className="hidden md:block cursor-pointer h-auto"
          />
        </Link>

        {/* Right nav items */}
        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
          {navItemsRight.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                linkBaseStyle,
                pathname === item.href
                  ? 'text-white font-semibold'
                  : 'text-white-400 hover:text-purple-500/90'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Border animation */}
        {mounted && <BorderBeam duration={8} size={100} />}
      </div>
    </div>
  );
};

export default Navbar;
