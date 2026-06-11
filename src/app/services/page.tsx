import { Check } from "lucide-react";
import { services } from "@/lib/data/services";
import { PageHero } from "@/components/shared/page-hero";
import { ContactCta } from "@/components/home/contact-cta";
import { ServiceImageCard } from "@/components/services/service-image-card";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata = {
  title: "Services",
  description:
    "Technology consulting, website development, and business support solutions from Intel Global.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title="Solutions designed around your business needs"
        description="Practical technology services that help your company operate better and grow faster."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const reversed = index % 2 === 1;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid items-center gap-12 lg:grid-cols-2 ${
                    reversed ? "lg:[direction:rtl] lg:*:[direction:ltr]" : ""
                  }`}
                >
                  <FadeIn direction={reversed ? "left" : "right"}>
                    <ServiceImageCard
                      service={service}
                      priority={index === 0}
                    />
                  </FadeIn>

                  <FadeIn delay={0.1} direction={reversed ? "right" : "left"}>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        What&apos;s included
                      </h3>
                      <ul className="mt-6 space-y-4">
                        {service.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-3 text-slate-300"
                          >
                            <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
