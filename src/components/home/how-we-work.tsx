import { MessageSquare, Lightbulb, Rocket, Headphones } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";

const steps = [
  {
    icon: MessageSquare,
    title: "Discuss",
    description: "Tell us about your business goals, challenges, and what you need.",
  },
  {
    icon: Lightbulb,
    title: "Plan",
    description: "We recommend practical solutions tailored to your budget and timeline.",
  },
  {
    icon: Rocket,
    title: "Deliver",
    description: "We build, implement, and launch — keeping you informed every step.",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Ongoing assistance so your systems keep running smoothly.",
  },
];

export function HowWeWork() {
  return (
    <section className="border-y border-white/5 bg-navy-900/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge="Our Process"
            title="How we work with you"
            description="A straightforward approach from first conversation to ongoing support."
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <div className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 ring-1 ring-gold/20 transition hover:scale-105 hover:bg-gold/15">
                  <item.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
