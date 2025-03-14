"use client";

import { useEffect, useRef } from "react";

function Signature() {
  const path1Ref = useRef(null);
  const path2Ref = useRef(null);
  const path3Ref = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (hasAnimatedRef.current) return;

    // Add will-change to improve performance
    const paths = [path1Ref.current, path2Ref.current, path3Ref.current];
    paths.forEach((path) => {
      if (path) path.style.willChange = "stroke-dashoffset";
    });

    // Function to preload CSS animations
    const preloadAnimations = () => {
      // Create a style element
      const style = document.createElement("style");
      style.innerHTML = `
        @keyframes drawSignature {
          to {
            stroke-dashoffset: 0;
          }
        }
      `;
      document.head.appendChild(style);
    };

    // Preload animations on component mount
    preloadAnimations();

    // Animate the signature after a short delay to allow browser painting
    const animateSignature = () => {
      let delay = 100;

      paths.forEach((path, index) => {
        if (!path) return;

        const length = path.getTotalLength();

        // Set initial properties
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;

        // Trigger animation with slight staggered delay
        setTimeout(() => {
          path.style.animation = `drawSignature 1.5s ease-in-out forwards`;
          path.style.animationDelay = `${index * 0.08}s`;
        }, delay);
      });

      hasAnimatedRef.current = true;
    };

    // Use requestIdleCallback if available, otherwise setTimeout
    if ("requestIdleCallback" in window) {
      requestIdleCallback(
        () => {
          animateSignature();
        },
        { timeout: 1000 }
      );
    } else {
      setTimeout(animateSignature, 500);
    }

    return () => {
      // Clean up will-change properties on unmount
      paths.forEach((path) => {
        if (path) path.style.willChange = "auto";
      });
    };
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center pt-20">
        <svg
          className="signature-svg w-[280px] h-[140px] sm:w-[350px] sm:h-[175px] md:w-[400px] md:h-[200px]"
          viewBox="0 0 570 262"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            ref={path1Ref}
            d="M220 2C232.781 23.3014 264.629 24.6788 286.333 19.7778C296.268 17.5344 309.068 10.7778 319.222 10.7778C322.809 10.7778 304.126 45.5937 302.222 49.1111C274.523 100.294 239.055 154.017 195.111 192.667C145.145 236.613 88.3953 259.556 20.8889 259.556C-9.63781 259.556 2.25424 238.159 18.0001 224.444C60.115 187.764 121.092 188.731 173.445 188.111C266.481 187.01 360.927 184.465 450.889 157.778C490.303 146.086 529.037 130.988 568 118"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ opacity: 0.95 }}
          />
          <path
            ref={path2Ref}
            d="M296 156C308.684 156 329.813 144.124 337.556 134C343.281 126.513 344.35 113.314 332 114C321.093 114.606 311.133 135.74 322.222 142.444C335.253 150.323 349.871 157.064 364 150"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ opacity: 0.95 }}
          />
          <path
            ref={path3Ref}
            d="M431.815 98C419.867 98 411.544 99.0047 401.815 106.444C397.036 110.1 389.182 122.478 395.149 128.444C409.449 142.745 448.102 128.647 463.371 124C482.474 118.186 501.04 110.258 519.815 104"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ opacity: 0.95 }}
          />
        </svg>
      </div>
    </div>
  );
}

export default Signature;
