import { LegalPage } from "@/components/shared/legal-page";

export const metadata = { title: "Terms & Conditions" };

const sections = [
  {
    title: "User Agreement",
    content: [
      "You agree to use this website only for lawful purposes",
      "You must provide accurate information when contacting us",
    ],
  },
  {
    title: "Use of Services",
    content: [
      "Our services include technology consulting, web development, and business support",
      "Service scope and deliverables are defined in individual agreements",
      "We strive for quality results but outcomes depend on client cooperation and project scope",
    ],
  },
  {
    title: "Website Usage Guidelines",
    content: [
      "Do not abuse, harass, or harm others through this website",
      "Do not share illegal, offensive, or copyrighted content",
      "Do not attempt to disrupt or compromise website security",
      "Do not copy or reproduce website content without written permission",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "All website content belongs to Intel Global unless otherwise stated",
      "You may not copy, distribute, or reuse content without written permission",
    ],
  },
  {
    title: "Service Agreements",
    content: [
      "Paid services are governed by separate service agreements",
      "Pricing and timelines are confirmed before project commencement",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "Intel Global is not liable for indirect losses, data issues, or service interruptions beyond our control",
    ],
  },
  {
    title: "Termination",
    content: [
      "We may suspend access for violations of these terms",
      "Either party may terminate service agreements per the agreed contract terms",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description="These terms govern your use of intelglobal.net and Intel Global services."
      sections={sections}
    />
  );
}
