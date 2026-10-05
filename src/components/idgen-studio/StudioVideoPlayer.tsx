"use client";

import React, { useMemo } from "react";
import type { StudioVideoConfig } from "@/lib/dynamic-idgen-studio-types";

export function extractYouTubeId(url?: string): string | null {
  if (!url) return null;
  const cleanUrl = url.trim();
  if (!cleanUrl) return null;

  // Direct 11-char ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(cleanUrl)) {
    return cleanUrl;
  }

  // YouTube Shorts: youtube.com/shorts/VIDEO_ID or youtu.be/shorts/VIDEO_ID
  const shortsMatch = cleanUrl.match(/(?:youtube\.com|youtu\.be)\/shorts\/([a-zA-Z0-9_-]{11})/i);
  if (shortsMatch && shortsMatch[1]) return shortsMatch[1];

  // Standard Watch URL: youtube.com/watch?v=VIDEO_ID (and m.youtube.com)
  const watchMatch = cleanUrl.match(/[?&]v=([a-zA-Z0-9_-]{11})/i);
  if (watchMatch && watchMatch[1]) return watchMatch[1];

  // Shortened: youtu.be/VIDEO_ID
  const youtuBeMatch = cleanUrl.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/i);
  if (youtuBeMatch && youtuBeMatch[1]) return youtuBeMatch[1];

  // Embed: youtube.com/embed/VIDEO_ID or youtube-nocookie.com/embed/VIDEO_ID
  const embedMatch = cleanUrl.match(/youtube(?:-nocookie)?\.com\/embed\/([a-zA-Z0-9_-]{11})/i);
  if (embedMatch && embedMatch[1]) return embedMatch[1];

  // Live or V: youtube.com/live/VIDEO_ID or youtube.com/v/VIDEO_ID
  const liveMatch = cleanUrl.match(/youtube\.com\/(?:live|v)\/([a-zA-Z0-9_-]{11})/i);
  if (liveMatch && liveMatch[1]) return liveMatch[1];

  // Generic fallback matcher for any URL containing a 11-character YouTube video ID
  const genericMatch = cleanUrl.match(/(?:youtu\.be\/|v\/|u\/\w\/|embed\/|shorts\/|live\/|watch\?v=|&v=)([^#&?]{11})/i);
  if (genericMatch && genericMatch[1]) return genericMatch[1];

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
  // Check if either youtubeUrl or mp4Url is a YouTube link
  const youtubeId = useMemo(() => {
    return extractYouTubeId(video?.youtubeUrl) || extractYouTubeId(video?.mp4Url);
  }, [video?.youtubeUrl, video?.mp4Url]);

  const isYouTube = video?.sourceType === "youtube" || !!youtubeId;

  if (isYouTube && youtubeId) {
    const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;
    return (
      <div className={`relative aspect-video w-full overflow-hidden bg-black ${className}`}>
        <iframe
          src={embedUrl}
          title={video?.title || title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    );
  }

  // Fallback if marked as YouTube but ID extraction had an unexpected custom embed link
  if (isYouTube && video?.youtubeUrl && video.youtubeUrl.includes("http")) {
    return (
      <div className={`relative aspect-video w-full overflow-hidden bg-black ${className}`}>
        <iframe
          src={video.youtubeUrl}
          title={video?.title || title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
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
