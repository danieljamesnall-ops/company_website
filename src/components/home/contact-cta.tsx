import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 p-12 sm:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            <Mail className="mx-auto h-12 w-12 text-gold" />
            <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">
              Let&apos;s talk about your business
            </h2>
            <p className="mt-4 text-slate-400">
              Tell us about your goals and we&apos;ll help you find the right
              technology solutions for your company.
            </p>
            <Link href="/contact" className="mt-10 inline-block">
              <Button size="lg">
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
