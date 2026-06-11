import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Monitor, Code, Briefcase } from "lucide-react";
import { services } from "@/lib/data/services";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

const icons = { Monitor, Code, Briefcase };

export function ServicesPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge="Services"
            title="Solutions designed around your business needs"
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <FadeIn key={service.id} delay={index * 0.1}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-navy-900/50 transition hover:border-gold/20 hover:shadow-xl hover:shadow-gold/5">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-navy-950/70 backdrop-blur-sm">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-8 pt-6">
                    <h3 className="text-xl font-semibold text-white group-hover:text-gold">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                      {service.description}
                    </p>
                    <Link
                      href={`/services#${service.id}`}
                      className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-gold hover:underline"
                    >
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="outline" size="lg">
                All Services
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
