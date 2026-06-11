export const siteConfig = {
  name: "Intel Global",
  tagline: "Business Solutions",
  description:
    "Intel Global helps organizations improve operations, build better digital experiences, and support business growth with practical technology solutions.",
  url: "https://www.intelglobal.net",
  emails: {
    info: "info@intelglobal.net",
    contact: "contact@intelglobal.net",
  },
  phones: {
    main: "+1(872)910-8620",
  },
  addresses: {
    main: "Park City, IL, United States",
  },
  whatsapp: "",
  social: {
    x: "https://x.com/Intel_global_",
    linkedin: "https://linkedin.com",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
];

export const deliverables = [
  "Business consulting",
  "IT and software support",
  "Web and digital solutions",
  "Process improvement",
];

export const whyUsStats = [
  { value: "24/7", label: "Online Presence" },
  { value: "100%", label: "Mobile Responsive" },
  { value: "Fast", label: "Easy Deployment" },
];

export const footerServices = [
  { label: "Technology Consulting", href: "/services#consulting" },
  { label: "Website Development", href: "/services#web" },
  { label: "Business Support", href: "/services#support" },
];

export const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Why Choose Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export const inquiryTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "consulting", label: "Technology Consulting" },
  { value: "web", label: "Website Development" },
  { value: "support", label: "Business Support" },
] as const;

export const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with startups, small businesses, and growing companies across industries including retail, healthcare, finance, and professional services. If you need practical technology support, we can likely help.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply fill out our contact form or email us with a brief description of your needs. We'll schedule a free consultation to understand your goals and recommend the right solutions.",
  },
  {
    question: "Do you offer ongoing support after project delivery?",
    answer:
      "Yes. We provide ongoing business and technical support to keep your systems running smoothly, update your website, and help with day-to-day digital operations.",
  },
  {
    question: "How long does a typical website project take?",
    answer:
      "Most business websites are delivered within 2–6 weeks depending on scope, content readiness, and required features. We'll give you a clear timeline during the planning phase.",
  },
  {
    question: "What does technology consulting include?",
    answer:
      "We assess your current tools and workflows, recommend the right technology stack, help with vendor selection, and create a practical roadmap aligned with your business goals and budget.",
  },
];
