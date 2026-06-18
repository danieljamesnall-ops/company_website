"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data/site";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-navy-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group transition-opacity hover:opacity-90">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-white/10 text-gold"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/contact" className="hidden sm:block">
            <Button size="sm">Get Started</Button>
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-navy-950 px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-sm font-medium",
                  pathname === link.href
                    ? "bg-white/10 text-gold"
                    : "text-slate-300"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-2">
              <Button className="w-full" size="sm">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
