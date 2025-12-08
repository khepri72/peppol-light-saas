import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { SolutionSection } from '@/components/SolutionSection';
import { TrustSection } from '@/components/TrustSection';
import { PricingSection } from '@/components/PricingSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <BenefitsSection />
        <SolutionSection />
        <TrustSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
