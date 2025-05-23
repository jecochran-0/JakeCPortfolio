/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // Performance optimization settings
  images: {
    // Enable blur placeholder for better perceived performance
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ["image/webp"],
  },
  experimental: {
    // Enable optimizations with critters package
    optimizeCss: {
      minify: true,
      inlineThreshold: 5 * 1024, // 5KB
    },
    optimizePackageImports: ["framer-motion", "react-icons"],
  },
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Enable React strict mode for better performance practices
  reactStrictMode: true,
};

export default nextConfig;
