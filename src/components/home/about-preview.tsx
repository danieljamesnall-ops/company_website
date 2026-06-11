import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function AboutPreview() {
  return (
    <section className="border-y border-white/5 bg-navy-900/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="right">
            <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-gold">
              About us
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              Built for companies that need dependable support
            </h2>
            <p className="mt-6 leading-relaxed text-slate-400">
              Intel Global is a professional services company focused on helping
              businesses use technology in a simple, effective, and scalable
              way. We partner with organizations to streamline operations,
              strengthen their digital presence, and grow with confidence.
            </p>
            <Link href="/about" className="mt-8 inline-block">
              <Button variant="outline">
                Learn About Us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Consulting", value: "Strategy" },
              { label: "Development", value: "Web & Digital" },
              { label: "Support", value: "Operations" },
              { label: "Growth", value: "Scalable" },
            ].map((item, index) => (
              <FadeIn key={item.label} delay={index * 0.08} direction="left">
                <div className="glass rounded-2xl p-6 text-center">
                  <div className="text-2xl font-bold text-gold">{item.value}</div>
                  <div className="mt-1 text-sm text-slate-400">{item.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
