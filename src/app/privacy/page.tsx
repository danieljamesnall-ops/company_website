import { LegalPage } from "@/components/shared/legal-page";

export const metadata = { title: "Privacy Policy" };

const sections = [
  {
    title: "Information We Collect",
    content: [
      "Name and email address when you contact us",
      "Business details you provide in inquiry forms",
      "Technical data such as IP address, browser type, and cookies",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "Respond to your inquiries and service requests",
      "Provide and improve our business solutions",
      "Send relevant updates about our services",
      "Ensure security and prevent fraud",
    ],
  },
  {
    title: "Information Sharing",
    content: [
      "We do not sell or rent your personal data",
      "We may share information only with your consent",
      "With trusted third-party service providers who assist our operations",
      "When required by law",
    ],
  },
  {
    title: "Cookies & Tracking",
    content: [
      "We use cookies to enhance your browsing experience",
      "You can disable cookies through your browser settings",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We implement appropriate security measures to protect your data",
      "No online platform can guarantee 100% security",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "Request access to your personal data",
      "Request correction or deletion of your data",
      "Opt out of marketing communications",
    ],
  },
  {
    title: "Policy Updates",
    content: [
      "This policy may be updated at any time and changes will be posted on this page",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="At Intel Global, we value your privacy and are committed to protecting your personal information."
      sections={sections}
    />
  );
}
