"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function TrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
    if (typeof window.snaptr === "function") {
      window.snaptr("track", "PAGE_VIEW");
    }
  }, [pathname, searchParams]);

  return null;
}

export default function MetaPixelTracker() {
  return (
    <Suspense fallback={null}>
      <TrackerInner />
    </Suspense>
  );
}