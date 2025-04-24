"use client";

import { useState, useEffect } from "react";

/**
 * A component that ensures content is only rendered on the client side
 * Can be used to wrap components that rely on browser APIs
 */
export default function SafeHydrate({ children, fallback = null }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return fallback;
  }

  return <>{children}</>;
}
