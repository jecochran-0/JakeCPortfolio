import { Suspense } from "react";
import Loading from "./loading";
import CustomCursor from "./components/CustomCursor";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <CustomCursor />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
