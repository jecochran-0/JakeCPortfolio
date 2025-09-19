"use client";

import { Suspense } from "react";
import { MotionConfig } from "framer-motion";
import AzukiHomepage from "./components/AzukiHomepage";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="h-screen w-full bg-black overflow-hidden">
        <Suspense
          fallback={
            <div className="h-screen w-full bg-black flex">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`flex-1 h-full relative bg-gray-800 ${
                    i !== 4 ? "border-r-4 border-black" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gray-600 animate-pulse" />
                </div>
              ))}
            </div>
          }
        >
          <AzukiHomepage />
        </Suspense>
      </div>
    </MotionConfig>
  );
}
