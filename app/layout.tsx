import type { Metadata } from "next";
import { Inter, Space_Grotesk, Archivo_Black, Bungee } from "next/font/google";
import "./globals.css";
import PerformanceMonitor from "./components/PerformanceMonitor";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});
const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jake Cochran - UX Designer & Full Stack Developer",
  description:
    "Portfolio of Jake Cochran, a UX Designer and Full Stack Developer specializing in creating exceptional digital experiences through thoughtful design and innovative development.",
  keywords: [
    "UX Designer",
    "UI Designer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Web Development",
    "User Experience",
  ],
  authors: [{ name: "Jake Cochran" }],
  creator: "Jake Cochran",
  publisher: "Jake Cochran",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jakecochran.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jake Cochran - UX Designer & Full Stack Developer",
    description:
      "Portfolio of Jake Cochran, a UX Designer and Full Stack Developer specializing in creating exceptional digital experiences.",
    url: "https://jakecochran.com",
    siteName: "Jake Cochran Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jake Cochran Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jake Cochran - UX Designer & Full Stack Developer",
    description:
      "Portfolio of Jake Cochran, a UX Designer and Full Stack Developer specializing in creating exceptional digital experiences.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${spaceGrotesk.className} ${archivoBlack.className} ${bungee.className}`}
    >
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
        <PerformanceMonitor />
        {children}
      </body>
    </html>
  );
}
