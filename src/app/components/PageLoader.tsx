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
    <>
      <StarsCanvas />

      <div className="fixed inset-0 z-[45] backdrop-blur-sm transition-opacity duration-500" />

      <div className="fixed inset-0 z-[50] flex items-center justify-center">
        <AstronautLoader />
      </div>
    </>
  );
}
