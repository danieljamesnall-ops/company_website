"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "intellglobal-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const accept = (value: "all" | "necessary") => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-navy-950/95 p-4 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md sm:rounded-2xl sm:border">
      <p className="text-sm font-semibold text-white">Cookie Preferences</p>
      <p className="mt-2 text-xs leading-relaxed text-slate-400">
        We use cookies to improve your experience and analyze site traffic. See
        our{" "}
        <Link href="/privacy" className="text-gold hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button size="sm" onClick={() => accept("all")}>
          Accept All
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => accept("necessary")}
        >
          Necessary Only
        </Button>
      </div>
    </div>
  );
}
