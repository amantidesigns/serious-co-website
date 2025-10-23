"use client";

import React, { type ReactNode } from "react";

interface LenisProviderProps {
  children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  // Lenis disabled to prevent prod crashes. Acts as a no-op passthrough.
  return <>{children}</>;
}


