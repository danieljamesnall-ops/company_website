import { siteConfig } from "@/lib/data/site";
import { services } from "@/lib/data/services";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.emails.contact,
    telephone: siteConfig.phones.main,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addresses.main,
    },
    sameAs: [siteConfig.social.x, siteConfig.social.linkedin],
  };

  const serviceList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: { "@type": "Organization", name: siteConfig.name },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceList) }}
      />
    </>
  );
}
