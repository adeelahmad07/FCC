"use client";

interface LogoProps {
  variant?: "full" | "icon" | "white";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "full", className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: "text-sm" },
    md: { icon: 40, text: "text-base" },
    lg: { icon: 56, text: "text-xl" },
  };

  const s = sizes[size];
  const isWhite = variant === "white";

  // Falcon Shield Icon
  const FalconIcon = () => (
    <svg
      width={s.icon}
      height={s.icon}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {/* Shield Background */}
      <defs>
        <linearGradient id={`shield-grad-${variant}`} x1="0" y1="0" x2="64" y2="64">
          <stop offset="0%" stopColor={isWhite ? "#ffffff" : "#e94560"} />
          <stop offset="100%" stopColor={isWhite ? "#f0f0f0" : "#c13750"} />
        </linearGradient>
        <linearGradient id={`falcon-grad-${variant}`} x1="20" y1="12" x2="44" y2="52">
          <stop offset="0%" stopColor={isWhite ? "#1a1a2e" : "#ffffff"} />
          <stop offset="100%" stopColor={isWhite ? "#16213e" : "#ffffffcc"} />
        </linearGradient>
      </defs>

      {/* Shield Shape */}
      <path
        d="M32 2L6 14v18c0 16.6 11.1 32.1 26 36 14.9-3.9 26-19.4 26-36V14L32 2z"
        fill={`url(#shield-grad-${variant})`}
      />

      {/* Inner shield border */}
      <path
        d="M32 6L10 16.5v15c0 14.8 9.9 28.6 22 32 12.1-3.4 22-17.2 22-32v-15L32 6z"
        fill="none"
        stroke={isWhite ? "#1a1a2e22" : "#ffffff22"}
        strokeWidth="1"
      />

      {/* Falcon Bird - stylized */}
      <path
        d="M32 14c-2 0-4 1.5-5 3.5l-1 2.5-4 1c-1 .3-1.5 1.5-.8 2.3l3 3-0.7 4c-.2 1 .9 1.8 1.8 1.3L29 29l3.5 1.5c.3.1.7.1 1 0L37 29l3.7 2.6c.9.5 2-.3 1.8-1.3l-.7-4 3-3c.7-.8.2-2-.8-2.3l-4-1-1-2.5C38 15.5 34 14 32 14z"
        fill={`url(#falcon-grad-${variant})`}
      />

      {/* Water drop below falcon */}
      <path
        d="M32 36c-1.5 0-3 1.2-3 1.2S26 40.5 26 43c0 3.3 2.7 6 6 6s6-2.7 6-6c0-2.5-3-5.8-3-5.8S33.5 36 32 36z"
        fill={`url(#falcon-grad-${variant})`}
        opacity="0.9"
      />

      {/* Small shine */}
      <circle cx="29" cy="42" r="1.5" fill={isWhite ? "#1a1a2e" : "#ffffff"} opacity="0.4" />
    </svg>
  );

  if (variant === "icon") {
    return (
      <div className={className}>
        <FalconIcon />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <FalconIcon />
      <div className="leading-tight">
        <p className={`font-extrabold ${s.text} ${isWhite ? "text-white" : "text-primary"} tracking-tight`}>
          Falcon<span className={isWhite ? "text-white/70" : "text-accent"}> Chemical</span>
        </p>
        <p className={`text-[10px] font-medium tracking-[0.15em] uppercase ${
          isWhite ? "text-white/50" : "text-gray-medium"
        }`}>
          Construction
        </p>
      </div>
    </div>
  );
}
