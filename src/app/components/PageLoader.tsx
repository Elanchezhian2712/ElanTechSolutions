"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import AstronautLoader from "./AstronautLoader";
import StarsCanvas from "./StarBackground";


export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[999]">
      {/* Background stars */}
      <StarsCanvas />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-50 bg-black/20 backdrop-blur-sm" />


      {/* Astronaut */}
      <div className="absolute inset-0 z-60 flex items-center justify-center">
        <AstronautLoader />
      </div>
    </div>
  );
}
