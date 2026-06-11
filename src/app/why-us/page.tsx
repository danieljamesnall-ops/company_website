import { Globe, Smartphone, Zap, Shield, Headphones, TrendingUp } from "lucide-react";
import { whyUsStats } from "@/lib/data/site";
import { PageHero } from "@/components/shared/page-hero";
import { ContactCta } from "@/components/home/contact-cta";

export const metadata = {
  title: "Why Choose Us",
  description:
    "Professional, simple, and ready to grow — discover why companies choose Intel Global.",
};

const reasons = [
  {
    icon: Globe,
    title: "Always Online",
    description:
      "Your digital presence works around the clock so customers can find and reach you anytime.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description:
      "Every solution we build looks great and works perfectly on phones, tablets, and desktops.",
  },
  {
    icon: Zap,
    title: "Fast Deployment",
    description:
      "We move quickly from planning to launch so you start seeing results without long delays.",
  },
  {
    icon: Shield,
    title: "Dependable Support",
    description:
      "Reliable, professional service you can count on for ongoing business operations.",
  },
  {
    icon: Headphones,
    title: "Personal Attention",
    description:
      "We take time to understand your business and tailor solutions to your specific needs.",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    description:
      "Solutions designed to grow with your company as your needs evolve over time.",
  },
];

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        badge="Why Choose Us"
        title="Professional, simple, and ready to grow"
        description="We focus on practical results — not complicated technology for its own sake."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {whyUsStats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-10 text-center"
              >
                <div className="font-display text-5xl font-bold text-gold">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-2xl border border-white/5 bg-navy-900/30 p-8 transition hover:border-gold/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                  <reason.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
