import { Check } from "lucide-react";
import { deliverables } from "@/lib/data/site";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";

export function Deliverables() {
  return (
    <section className="border-y border-white/5 bg-navy-900/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge="What We Deliver"
            title="Practical solutions for real business needs"
          />
        </FadeIn>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {deliverables.map((item, index) => (
            <FadeIn key={item} delay={index * 0.08}>
              <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-navy-900/50 px-6 py-5 transition hover:border-gold/20 hover:bg-navy-900/70">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                  <Check className="h-5 w-5 text-gold" />
                </div>
                <span className="font-medium text-white">{item}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
