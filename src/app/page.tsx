import CTASection from "@/components/sections/CTASection";
import Hero from "@/components/sections/Hero";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesPreview from "@/components/sections/ServicesPreview";

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