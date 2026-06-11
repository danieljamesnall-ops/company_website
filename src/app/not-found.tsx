import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-gold">
        404 — Page not found
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-4 max-w-md text-slate-400">
        The page you&apos;re looking for may have been moved or removed. Head
        back home or contact us for help.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="/">
          <Button size="lg">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline" size="lg">
            Contact Us
          </Button>
        </Link>
      </div>
    </section>
  );
}
