import { DifferentiationSection } from "@/components/sections/differentiation-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { ObjectionsSection } from "@/components/sections/objections-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { RoiSection } from "@/components/sections/roi-section";
import { SystemSection } from "@/components/sections/system-section";
import { TrustBar } from "@/components/sections/trust-bar";
import { FloatingNavWrapper } from "@/components/floating-nav";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <FloatingNavWrapper />
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <SystemSection />
      <HowItWorksSection />
      <RoiSection />
      <ObjectionsSection />
      <DifferentiationSection />
      <FaqSection />
      <FinalCtaSection />
      <FooterSection />
    </main>
  );
}
