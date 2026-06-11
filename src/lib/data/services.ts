export type Service = {
  id: string;
  slug: string;
  title: string;
  description: string;
  details: string[];
  icon: "Monitor" | "Code" | "Briefcase";
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    id: "consulting",
    slug: "consulting",
    title: "Technology Consulting",
    description:
      "We help companies choose the right tools, improve workflows, and plan practical technology roadmaps.",
    details: [
      "Technology stack assessment and recommendations",
      "Workflow optimization and automation planning",
      "Digital transformation roadmaps",
      "Vendor evaluation and selection support",
      "IT strategy aligned with business goals",
    ],
    icon: "Monitor",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Team collaborating on technology strategy in a modern office",
  },
  {
    id: "web",
    slug: "web",
    title: "Website Development",
    description:
      "Clean, responsive websites that make your company look professional and help customers contact you quickly.",
    details: [
      "Modern, mobile-first responsive design",
      "Fast-loading, SEO-optimized pages",
      "Contact forms and lead capture",
      "Content management setup",
      "Ongoing maintenance and updates",
    ],
    icon: "Code",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Website analytics and development on a laptop screen",
  },
  {
    id: "support",
    slug: "support",
    title: "Business Support",
    description:
      "Operational support for documentation, process setup, vendor coordination, and digital business management.",
    details: [
      "Process documentation and SOP creation",
      "Vendor coordination and management",
      "Digital business operations setup",
      "Team onboarding and tool training",
      "Ongoing operational assistance",
    ],
    icon: "Briefcase",
    image: "/images/business-support.png",
    imageAlt: "Professional providing business support on a call in an office",
  },
];
