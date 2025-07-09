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
        <nav className="flex md:hidden items-center justify-around w-full">
          {allNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                getLinkClassName(item.href),
                'text-[10px] sm:text-xs text-center px-0.5' 
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <nav className="hidden md:flex flex-1 items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {navItemsLeft.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  getLinkClassName(item.href),
                  'md:text-sm tracking-wide px-1'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

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
              height={40}
              className="hidden lg:block ml-2 h-6 w-auto"
            />
          </Link>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {navItemsRight.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  getLinkClassName(item.href),
                  'md:text-sm tracking-wide px-1'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
        {mounted && <BorderBeam duration={8} size={100} />}
      </div>
    </div>
  );
};

export default Navbar;