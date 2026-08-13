"use client";

import React from "react";
import Image from "next/image";

interface IdgenLogoProps {
  className?: string;
  variant?: "auto" | "light" | "dark";
  withTagline?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export function IdgenLogo({
  className = "",
  variant = "auto",
  size = "md",
}: IdgenLogoProps) {
  // Height sizing for clear, prominent visibility
  const dimensions = {
    sm: { width: 140, height: 42, hClass: "h-9 sm:h-10" },
    md: { width: 170, height: 50, hClass: "h-11 sm:h-12" },
    lg: { width: 220, height: 64, hClass: "h-14 sm:h-16" },
    xl: { width: 280, height: 84, hClass: "h-20 sm:h-24" },
  };

  const dim = dimensions[size];

  if (variant === "light") {
    // Specifically for light backgrounds
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <Image
          src="/images/logo-light.jpg"
          alt="IDGen - Identity Solutions, Simplified"
          width={dim.width}
          height={dim.height}
          className={`${dim.hClass} w-auto object-contain mix-blend-multiply`}
          priority
        />
      </div>
    );
  }

  if (variant === "dark") {
    // Specifically for dark backgrounds
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <Image
          src="/images/logo-dark.jpg"
          alt="IDGen - Identity Solutions, Simplified"
          width={dim.width}
          height={dim.height}
          className={`${dim.hClass} w-auto object-contain rounded-lg`}
          priority
        />
      </div>
    );
  }

  // Auto theme mode:
  // - Light theme: shows 1st logo for light bg (logo-light.jpg)
  // - Dark theme: shows 2nd logo for dark bg (logo-dark.jpg)
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* 1st Logo: Light background */}
      <Image
        src="/images/logo-light.jpg"
        alt="IDGen - Identity Solutions, Simplified"
        width={dim.width}
        height={dim.height}
        className={`${dim.hClass} w-auto object-contain mix-blend-multiply block dark:hidden`}
        priority
      />
      {/* 2nd Logo: Dark background */}
      <Image
        src="/images/logo-dark.jpg"
        alt="IDGen - Identity Solutions, Simplified"
        width={dim.width}
        height={dim.height}
        className={`${dim.hClass} w-auto object-contain rounded-lg hidden dark:block`}
        priority
      />
    </div>
  );
}
