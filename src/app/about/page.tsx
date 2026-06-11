import { Target, Eye, Users } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { ContactCta } from "@/components/home/contact-cta";

export const metadata = {
  title: "About Us",
  description:
    "Intel Global is a professional services company helping businesses use technology effectively.",
};

const values = [
  {
    icon: Eye,
    title: "Our Focus",
    description:
      "Helping businesses use technology in a simple, effective, and scalable way — without unnecessary complexity.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Deliver dependable digital solutions that improve operations, strengthen online presence, and support sustainable growth.",
  },
  {
    icon: Users,
    title: "Who We Serve",
    description:
      "Small and mid-size companies, growing startups, and established businesses that need practical technology support.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Intel Global"
        title="Built for companies that need dependable support"
        description="A professional services company focused on practical technology solutions for modern businesses."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-slate-400">
              Intel Global is a professional services company focused on helping
              businesses use technology in a simple, effective, and scalable way.
              We work alongside your team to improve workflows, build professional
              digital experiences, and set up the operational support your
              company needs to grow.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              Whether you need technology consulting, a new website, or ongoing
              business support — we provide practical solutions tailored to your
              goals, not one-size-fits-all packages.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="glass rounded-2xl p-8 text-center">
                <value.icon className="mx-auto h-10 w-10 text-gold" />
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {value.description}
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
