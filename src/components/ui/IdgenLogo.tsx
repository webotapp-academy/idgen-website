"use client";

import React from "react";

interface IdgenLogoProps {
  className?: string;
  variant?: "auto" | "light" | "dark";
  withTagline?: boolean; // preserved prop
  size?: "sm" | "md" | "lg" | "xl";
}

export function IdgenLogo({
  className = "",
  variant = "auto",
  size = "md",
}: IdgenLogoProps) {
  // Size configurations
  const sizeClasses = {
    sm: "h-8 w-28",
    md: "h-10 w-36 sm:h-11 sm:w-40",
    lg: "h-12 w-44 sm:h-14 sm:w-52",
    xl: "h-16 w-56 sm:h-20 sm:w-72",
  };

  const isForcedDark = variant === "dark";
  const isForcedLight = variant === "light";

  if (isForcedDark) {
    return (
      <div className={`relative flex items-center shrink-0 select-none ${sizeClasses[size]} ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/finallogowhite.svg"
          alt="iDGen Identity Solutions"
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  if (isForcedLight) {
    return (
      <div className={`relative flex items-center shrink-0 select-none ${sizeClasses[size]} ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/finallogolight.svg"
          alt="iDGen Identity Solutions"
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  // Auto theme detection (renders appropriate logo based on .dark class)
  return (
    <div className={`relative flex items-center shrink-0 select-none ${sizeClasses[size]} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/finallogolight.svg"
        alt="iDGen Identity Solutions"
        className="block dark:hidden w-full h-full object-contain"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/finallogowhite.svg"
        alt="iDGen Identity Solutions"
        className="hidden dark:block w-full h-full object-contain"
      />
    </div>
  );
}
