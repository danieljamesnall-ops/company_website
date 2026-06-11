import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { PageHero } from "@/components/shared/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { Faq } from "@/components/home/faq";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Intel Global to discuss your business needs.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="Let's talk about your business"
        description="Share your goals and we'll respond within one business day with practical next steps."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            <div className="space-y-6 lg:col-span-2">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-white">Reach Us</h3>
                <ul className="mt-6 space-y-5">
                  <li className="flex items-start gap-4">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <a
                        href={`mailto:${siteConfig.emails.contact}`}
                        className="text-white hover:text-gold"
                      >
                        {siteConfig.emails.contact}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <p className="text-sm text-slate-500">Phone</p>
                      <p className="text-white">{siteConfig.phones.main}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <p className="text-sm text-slate-500">Address</p>
                      <p className="text-white">{siteConfig.addresses.main}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
