"use client";
import React, { memo } from "react";
import Image from "next/image";

const Bio = memo(() => {
  return (
    <div className="w-full h-full">
      <Image
        src="/Headshot3.png"
        alt="Jake Cochran"
        fill
        sizes="(max-width: 640px) 180px, (max-width: 768px) 240px, 300px"
        className="object-cover"
        priority
        loading="eager"
        fetchPriority="high"
      />
    </div>
  );
});

Bio.displayName = "Bio";

export default Bio;
