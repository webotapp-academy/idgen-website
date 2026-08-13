"use client";

import React from "react";
import Image from "next/image";

interface IdgenLogoProps {
  className?: string;
  variant?: "auto" | "light" | "dark";
  withTagline?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  useImage?: boolean;
}

export function IdgenLogo({
  className = "",
  variant = "auto",
  withTagline = true,
  size = "md",
  useImage = false,
}: IdgenLogoProps) {
  // Height configurations (increased for clear visibility)
  const heights = {
    sm: withTagline ? 38 : 28,
    md: withTagline ? 48 : 36,
    lg: withTagline ? 60 : 46,
    xl: withTagline ? 80 : 60,
  };

  const height = heights[size];

  if (useImage) {
    if (variant === "light") {
      return (
        <div className={`inline-flex items-center select-none ${className}`}>
          <Image
            src="/images/idgen-logo-light.jpg"
            alt="IDGen Identity Solutions Simplified"
            width={300}
            height={150}
            style={{ height: `${height}px`, width: "auto" }}
            className="object-contain"
            priority
          />
        </div>
      );
    }

    if (variant === "dark") {
      return (
        <div className={`inline-flex items-center select-none ${className}`}>
          <Image
            src="/images/idgen-logo-dark.jpg"
            alt="IDGen Identity Solutions Simplified"
            width={300}
            height={150}
            style={{ height: `${height}px`, width: "auto" }}
            className="object-contain rounded-md"
            priority
          />
        </div>
      );
    }

    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        {/* Light theme image */}
        <Image
          src="/images/idgen-logo-light.jpg"
          alt="IDGen Identity Solutions Simplified"
          width={300}
          height={150}
          style={{ height: `${height}px`, width: "auto" }}
          className="object-contain block dark:hidden"
          priority
        />
        {/* Dark theme image */}
        <Image
          src="/images/idgen-logo-dark.jpg"
          alt="IDGen Identity Solutions Simplified"
          width={300}
          height={150}
          style={{ height: `${height}px`, width: "auto" }}
          className="object-contain rounded-md hidden dark:block"
          priority
        />
      </div>
    );
  }

  // --- Premium Vector SVG Mode (100% Transparent, Pixel-Perfect at all DPIs) ---
  const viewBoxHeight = withTagline ? 180 : 130;
  const viewBoxWidth = 520;
  
  const textClass = 
    variant === "light" 
      ? "fill-[#0B1320]" 
      : variant === "dark" 
      ? "fill-white" 
      : "fill-[#0B1320] dark:fill-white";

  const taglineTextClass =
    variant === "light"
      ? "fill-[#0B1320]"
      : variant === "dark"
      ? "fill-white"
      : "fill-[#0B1320] dark:fill-white";

  const cyan = "#009FE3";

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        style={{ height: `${height}px`, width: "auto" }}
        className="transition-colors duration-200"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="IDGen Identity Solutions Simplified Logo"
      >
        {/* --- LETTER 'i' --- */}
        <circle cx="48" cy="38" r="17" fill={cyan} />
        <rect x="34" y="66" width="28" height="64" rx="2" className={textClass} />

        {/* --- LETTER 'D' --- */}
        <path
          d="M80 18 H185 C228 18 252 44 252 74 C252 104 228 130 185 130 H80 V18 Z
             M114 42 V106 H175 C202 106 218 92 218 74 C218 56 202 42 175 42 H114 Z"
          fillRule="evenodd"
          className={textClass}
        />

        {/* Inside 'D': Lanyard cords & Hanging ID Badge */}
        <line x1="126" y1="18" x2="164" y2="58" stroke={cyan} strokeWidth="5.5" strokeLinecap="round" />
        <line x1="202" y1="18" x2="164" y2="58" stroke={cyan} strokeWidth="5.5" strokeLinecap="round" />
        <rect x="160" y="55" width="8" height="7" rx="1.5" fill={cyan} />
        
        <rect x="146" y="60" width="36" height="46" rx="5" fill="none" stroke={cyan} strokeWidth="4.5" />
        <rect x="156" y="63" width="16" height="3" rx="1" fill={cyan} />
        <circle cx="164" cy="74" r="5" fill={cyan} />
        <path d="M155 88 C155 82 173 82 173 88 Z" fill={cyan} />
        <rect x="154" y="92" width="20" height="2.5" rx="1" fill={cyan} />
        <rect x="157" y="97" width="14" height="2.5" rx="1" fill={cyan} />

        {/* --- LETTER 'G' --- */}
        <path
          d="M346 36 C326 22 296 22 274 38 C248 56 244 94 266 116 C288 138 326 138 348 120 V82 H306 V60 H372 V128 C342 150 292 150 258 126 C220 94 224 44 264 16 C300 -8 348 -4 374 18 Z"
          className={textClass}
        />
        <path d="M346 98 L374 130 H346 Z" fill={cyan} />

        {/* --- LETTER 'e' --- */}
        <path
          d="M448 86 C448 62 434 46 412 46 C390 46 376 62 376 86 C376 110 390 126 414 126 C430 126 442 118 448 106 H424 C420 110 416 112 412 112 C402 112 396 104 396 94 H448 Z
             M396 78 C398 70 404 60 412 60 C420 60 426 70 428 78 H396 Z"
          className={textClass}
        />

        {/* --- LETTER 'n' --- */}
        <path
          d="M460 48 H480 V60 C486 50 498 46 510 46 C528 46 538 58 538 78 V124 H518 V82 C518 70 512 62 502 62 C492 62 480 70 480 84 V124 H460 Z"
          className={textClass}
        />

        {/* --- TAGLINE --- */}
        {withTagline && (
          <g>
            <line x1="34" y1="162" x2="68" y2="162" stroke={cyan} strokeWidth="3.5" strokeLinecap="round" />
            <text
              x="260"
              y="168"
              textAnchor="middle"
              className={taglineTextClass}
              style={{
                fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontWeight: 800,
                fontSize: "20px",
                letterSpacing: "0.18em",
              }}
            >
              IDENTITY SOLUTIONS, SIMPLIFIED
            </text>
            <line x1="452" y1="162" x2="486" y2="162" stroke={cyan} strokeWidth="3.5" strokeLinecap="round" />
          </g>
        )}
      </svg>
    </div>
  );
}
