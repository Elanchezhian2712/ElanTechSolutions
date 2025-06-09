// src/app/components/PageLoader.jsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import AstronautLoader from './AstronautLoader'; 

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  if (!loading) {
    return null;
  }

  return (
    <>

      <div className="fixed inset-0 z-[45] bg-black bg-opacity-70"></div>
      <div className="fixed inset-0 z-[50] flex items-center justify-center">
        <AstronautLoader /> 
      </div>
    </>
  );
}