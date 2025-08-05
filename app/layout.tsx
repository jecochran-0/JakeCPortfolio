import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import DynamicCursor from "./components/DynamicCursor";
import BreadcrumbNav from "./components/BreadcrumbNav";
import ScrollIndicator from "./components/ScrollIndicator";
import { initPerformanceOptimizations } from "./utils/performance";
import { initMobileOptimizations } from "./utils/mobileOptimizations";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Optimize font loading
  preload: true,
});

export const metadata: Metadata = {
  title: "Jake Cochran - UX Designer & Full Stack Developer",
  description:
    "Portfolio showcasing UX/UI design and full-stack development work. Creating exceptional digital experiences through thoughtful design and innovative development.",
  keywords: [
    "UX Designer",
    "UI Designer",
    "Full Stack Developer",
    "Portfolio",
    "Web Development",
    "User Experience",
  ],
  authors: [{ name: "Jake Cochran" }],
  creator: "Jake Cochran",
  publisher: "Jake Cochran",
  robots: "index, follow",
  openGraph: {
    title: "Jake Cochran - UX Designer & Full Stack Developer",
    description:
      "Portfolio showcasing UX/UI design and full-stack development work.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jake Cochran - UX Designer & Full Stack Developer",
    description:
      "Portfolio showcasing UX/UI design and full-stack development work.",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#3B82F6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize performance optimizations on client side
  if (typeof window !== "undefined") {
    initPerformanceOptimizations();
    initMobileOptimizations();
  }

  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/HeroScreen.mp4"
          as="video"
          type="video/mp4"
        />

        {/* Optimize for performance */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Performance hints */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="antialiased">
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <DynamicCursor />
        <BreadcrumbNav />
        <ScrollIndicator />
      </body>
    </html>
  );
}
