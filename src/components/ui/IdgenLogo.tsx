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

  // Exact theme selection:
  // variant "dark": forced dark background logo (white text on dark navy)
  // variant "light": forced light background logo (dark text on white)
  // variant "auto": follows current active theme (light theme -> light bg logo, dark theme -> dark bg logo)
  const isDark =
    variant === "dark" || (variant === "auto" && currentTheme === "dark");

  const logoSrc = isDark ? "/images/logo-dark.jpg" : "/images/logo-light.jpg";

  // Tight proportions matching the 2.75:1 cropped aspect ratio
  const sizeClasses = {
    sm: "h-8 w-24 sm:h-8.5 sm:w-26",
    md: "h-9 w-28 sm:h-10 sm:w-32",
    lg: "h-12 w-36 sm:h-14 sm:w-44",
    xl: "h-16 w-48 sm:h-20 sm:w-60",
  };

  return (
    <div className={`relative flex items-center shrink-0 select-none ${sizeClasses[size]} ${className}`}>
      <Image
        src={logoSrc}
        alt="IDGen - Identity Solutions, Simplified"
        fill
        sizes="(max-width: 768px) 160px, 220px"
        className={`object-contain ${!isDark ? "mix-blend-multiply" : "rounded-md"}`}
        priority
      />
    </div>
  );
}
