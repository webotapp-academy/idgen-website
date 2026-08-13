"use client";

import React, { useSyncExternalStore } from "react";
import Image from "next/image";

interface IdgenLogoProps {
  className?: string;
  variant?: "auto" | "light" | "dark";
  withTagline?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  if (typeof window === "undefined") return "light";
  return localStorage.getItem("idgen-theme") === "dark" ? "dark" : "light";
}

function getServerSnapshot() {
  return "light";
}

export function IdgenLogo({
  className = "",
  variant = "auto",
  size = "md",
}: IdgenLogoProps) {
  const currentTheme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Determine if dark logo is needed:
  // variant "dark": forced dark background logo (white text on dark navy)
  // variant "light": forced light background logo (dark text on white)
  // variant "auto": follows current active theme (light theme -> light bg logo, dark theme -> dark bg logo)
  const isDark =
    variant === "dark" || (variant === "auto" && currentTheme === "dark");

  const logoSrc = isDark ? "/images/logo-dark.jpg" : "/images/logo-light.jpg";

  // Exact dimensional containers ensuring high-DPI crisp rendering and no shrinkage
  const sizeClasses = {
    sm: "h-9 w-36 sm:h-10 sm:w-44",
    md: "h-11 w-44 sm:h-12 sm:w-52",
    lg: "h-14 w-56 sm:h-16 sm:w-64",
    xl: "h-20 w-72 sm:h-24 sm:w-96",
  };

  return (
    <div className={`relative flex items-center shrink-0 select-none ${sizeClasses[size]} ${className}`}>
      <Image
        src={logoSrc}
        alt="IDGen - Identity Solutions, Simplified"
        fill
        sizes="(max-width: 768px) 200px, 300px"
        className={`object-contain ${!isDark ? "mix-blend-multiply" : "rounded-md"}`}
        priority
      />
    </div>
  );
}
