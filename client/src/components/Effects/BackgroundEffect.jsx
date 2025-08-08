import React from "react";

const BackgroundEffect = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" /> {/* Light emerald */}
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" /> {/* White blend */}
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" /> {/* Light cyan */}
          </linearGradient>
        </defs>

        {/* Big angled background shape */}
        <path
          d="M0,0 L1440,0 L1440,300 Q720,450 0,300 Z"
          fill="url(#bgGradient)"
          opacity="0.3"
        />

        {/* Medium angled layer */}
        <path
          d="M0,200 L1440,0 L1440,500 Q720,650 0,500 Z"
          fill="url(#bgGradient)"
          opacity="0.4"
        />

        {/* Foreground shape */}
        <path
          d="M0,400 L1440,150 L1440,900 L0,900 Z"
          fill="url(#bgGradient)"
          opacity="0.5"
        />
      </svg>
    </div>
  );
};

export default BackgroundEffect;
