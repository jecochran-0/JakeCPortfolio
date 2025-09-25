"use client";

import { usePathname } from "next/navigation";
import SmoothPageTransition from "./SmoothPageTransition";

interface PageTransitionWrapperProps {
  children: React.ReactNode;
}

export default function PageTransitionWrapper({
  children,
}: PageTransitionWrapperProps) {
  const pathname = usePathname();

  return (
    <SmoothPageTransition pathname={pathname}>{children}</SmoothPageTransition>
  );
}
