"use client";

import { useEffect, useRef, useState } from "react";

interface ServiceImageProps {
  category: string;
  imageUrl?: string;
  className?: string;
  overlay?: boolean;
}

// Gradient fallbacks per category (shown while image loads or if it fails)
const categoryGradients: Record<string, string> = {
  "Heat Proofing": "from-amber-400 via-yellow-500 to-orange-500",
  "Water Proofing": "from-blue-400 via-blue-500 to-cyan-500",
  "Water Tank": "from-sky-400 via-blue-500 to-indigo-600",
  Washroom: "from-slate-400 via-blue-400 to-sky-500",
  Walls: "from-teal-400 via-cyan-500 to-blue-500",
  "Termite Control": "from-amber-500 via-yellow-600 to-amber-700",
};

export default function ServiceImage({ category, imageUrl, className = "", overlay = true }: ServiceImageProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const gradient = categoryGradients[category] || "from-gray-400 via-gray-500 to-gray-600";

  // Handle cached images that may already be loaded before onLoad fires
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setImgLoaded(true);
    }
  }, [imageUrl]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Gradient fallback (always behind) */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />

      {/* Real image on top */}
      {imageUrl && !imgError && (
        <img
          ref={imgRef}
          src={imageUrl}
          alt={category}
          loading="eager"
          decoding="async"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* Dark overlay for text readability */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      )}
    </div>
  );
}
