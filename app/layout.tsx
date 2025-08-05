import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ScrollProgressBar from "./components/ScrollProgressBar";
import PageTransition from "./components/PageTransition";
import DynamicCursor from "./components/DynamicCursor";
import BreadcrumbNav from "./components/BreadcrumbNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jake Cochran | Software Engineer & UX Designer",
  description:
    "Portfolio showcasing software engineering and UX design projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollProgressBar />
        <DynamicCursor />
        <Navbar />
        <BreadcrumbNav />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
