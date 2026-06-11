import { Hero } from "@/components/home/hero";
import { Deliverables } from "@/components/home/deliverables";
import { ServicesPreview } from "@/components/home/services-preview";
import { HowWeWork } from "@/components/home/how-we-work";
import { AboutPreview } from "@/components/home/about-preview";
import { WhyUsPreview } from "@/components/home/why-us-preview";
import { TrustBar } from "@/components/home/trust-bar";
import { Faq } from "@/components/home/faq";
import { ContactCta } from "@/components/home/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Deliverables />
      <ServicesPreview />
      <HowWeWork />
      <AboutPreview />
      <WhyUsPreview />
      <TrustBar />
      <Faq />
      <ContactCta />
    </>
  );
}
