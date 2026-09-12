"use client";

import React, { useMemo } from "react";
import type { StudioVideoConfig } from "@/lib/dynamic-idgen-studio-types";

function extractYouTubeId(url: string): string | null {
  if (!url) return null;
  const cleanUrl = url.trim();
  // pure ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(cleanUrl)) {
    return cleanUrl;
  }
  // youtu.be/ID
  const shortMatch = cleanUrl.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch && shortMatch[1]) return shortMatch[1];

  // youtube.com/watch?v=ID
  const watchMatch = cleanUrl.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch && watchMatch[1]) return watchMatch[1];

  // youtube.com/embed/ID
  const embedMatch = cleanUrl.match(/youtube(?:-nocookie)?\.com\/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch && embedMatch[1]) return embedMatch[1];

  return null;
}

export function StudioVideoPlayer({
  video,
  className = "",
  title = "IDGen Studio Video Player",
}: {
  video?: StudioVideoConfig;
  className?: string;
  title?: string;
}) {
  const isYouTube = video?.sourceType === "youtube";
  const youtubeId = useMemo(() => extractYouTubeId(video?.youtubeUrl || ""), [video?.youtubeUrl]);

  if (isYouTube && youtubeId) {
    const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1&playsinline=1`;
    return (
      <div className={`relative aspect-video w-full overflow-hidden bg-black ${className}`}>
        <iframe
          src={embedUrl}
          title={video?.title || title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    );
  }

  // Fallback to MP4 player
  const mp4Src = video?.mp4Url || "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";
  const posterSrc = video?.poster || "/images/idgen-studio-digital-id-card-data-collection-workflow.jpg";

  return (
    <div className={`relative aspect-video w-full overflow-hidden bg-black ${className}`}>
      <video
        key={mp4Src}
        controls
        playsInline
        preload="metadata"
        poster={posterSrc}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={mp4Src} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}
