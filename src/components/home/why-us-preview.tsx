import Link from "next/link";
import { whyUsStats } from "@/lib/data/site";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export function WhyUsPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge="Why choose us"
            title="Professional, simple, and ready to grow"
          />
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {whyUsStats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <div className="glass rounded-2xl p-10 text-center">
                <div className="font-display text-4xl font-bold text-gold sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-400">
                  {stat.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-12 text-center">
            <Link href="/why-us">
              <Button variant="ghost">
                See why companies choose us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
