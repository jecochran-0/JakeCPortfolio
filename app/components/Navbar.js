"use client"; // ✅ Make it a Client Component

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // ✅ Get the current path

  return (
    <nav className="bg-neutral-800 mb-20 mt-5 flex justify-center gap-7 rounded-full mx-auto w-fit pl-5 pr-5 py-2 border-1">
      <Link href="/">
        <span className={pathname === "/" ? "active-link" : "nav-link"}>
          Home
        </span>
      </Link>
      <Link href="/about">
        <span className={pathname === "/about" ? "active-link" : "nav-link"}>
          About
        </span>
      </Link>
    </nav>
  );
}
