import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import Hero from "@/components/sections/Hero";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesPreview from "@/components/sections/ServicesPreview";

export const metadata: Metadata = {
  title: "Web Design for Local Businesses | Braith.Site",
  description:
    "Braith.Site builds modern, mobile-friendly websites for local businesses that want to look more professional and generate more enquiries.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Web Design for Local Businesses | Braith.Site",
    description:
      "Modern, mobile-friendly websites for local businesses that want to look more professional and generate more enquiries.",
    url: "/",
  },
  twitter: {
    title: "Web Design for Local Businesses | Braith.Site",
    description:
      "Modern, mobile-friendly websites for local businesses that want to look more professional and generate more enquiries.",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <ProcessSection />
      <CTASection />
    </main>
  );
}
