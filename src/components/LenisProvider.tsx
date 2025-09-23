"use client";

import React, { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

interface LenisProviderProps {
  children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      // Ensure lenis is destroyed to remove listeners on unmount
      // @ts-expect-error destroy exists at runtime
      if (lenis && typeof lenis.destroy === "function") lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}


