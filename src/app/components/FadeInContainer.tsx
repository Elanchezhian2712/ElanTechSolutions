// components/FadeInContainer.tsx
'use client';

import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

export const FadeInContainer = ({ children }: { children: ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15, // Slightly more aggressive trigger
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-in-out transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
};
