'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {  useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { BorderBeam } from "./ui/border-beam";

const allNavItems = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT US' },
  { href: '/products', label: 'PRODUCTS' },
  { href: '/services', label: 'SERVICES' },
  { href: '/careers', label: 'CAREERS' },
  { href: '/contact', label: 'CONTACT' },
];

const navItemsLeft = allNavItems.slice(0, 3);
const navItemsRight = allNavItems.slice(3, 6);

const Navbar = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  // UPDATED: Removed horizontal padding and tracking from the base style.
  // It will now be applied contextually for desktop view only.
  const linkBaseStyle =
    "uppercase font-medium transition-colors duration-200 ease-in-out whitespace-nowrap";

  const getLinkClassName = (href: string) => cn(
    linkBaseStyle,
    pathname === href
      ? 'text-white font-semibold'
      : 'text-white/60 hover:text-purple-500/90'
  );

  return (
    <div className="fixed top-4 sm:top-6 md:top-8 inset-x-0 z-50 px-4">
      <div className="bg-black/10 backdrop-blur-md border border-white/20 text-white flex items-center w-full py-4 px-4 sm:px-6 rounded-full max-w-[95%] sm:max-w-4xl lg:max-w-6xl mx-auto relative overflow-hidden">

        {/* --- MOBILE LAYOUT --- */}
        {/* UPDATED: Switched to `justify-around` for better space distribution on small screens. */}
        <nav className="flex md:hidden items-center justify-around w-full">
          {allNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                getLinkClassName(item.href),
                // UPDATED: Removed letter-spacing and reduced padding to save crucial space.
                'text-[10px] sm:text-xs text-center px-0.5' 
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* --- DESKTOP/TABLET LAYOUT --- */}
        <nav className="hidden md:flex flex-1 items-center justify-between">
          {/* Left nav items */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {navItemsLeft.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  getLinkClassName(item.href),
                  // UPDATED: Added back tracking and padding specifically for desktop.
                  'md:text-sm tracking-wide px-1'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center justify-center shrink-0 mx-2 sm:mx-3">
            <Image
              src="/Images/logo.png"
              alt="ElanTech Icon"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <Image
              src="/Images/logo-elantech.png"
              alt="ElanTech Solutions"
              width={150}
              height={50}
              className="hidden lg:block ml-2 h-8 w-auto"
            />
          </Link>

          {/* Right nav items */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {navItemsRight.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  getLinkClassName(item.href),
                  // UPDATED: Added back tracking and padding specifically for desktop.
                  'md:text-sm tracking-wide px-1'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Border animation */}
        {mounted && <BorderBeam duration={8} size={100} />}
      </div>
    </div>
  );
};

export default Navbar;