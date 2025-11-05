import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const { t } = useTranslation();

  const scrollToForm = () => {
    const formSection = document.getElementById('waitlist-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 
            className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl"
            data-testid="text-hero-title"
          >
            {t('hero.title')}
          </h1>
          
          <p 
            className="mt-6 max-w-3xl text-lg text-foreground sm:text-xl lg:text-2xl"
            data-testid="text-hero-subtitle"
          >
            {t('hero.subtitle')}
          </p>

          <Button
            size="lg"
            onClick={scrollToForm}
            data-testid="button-hero-cta"
            className="mt-8 min-h-12 bg-orange-accent text-lg font-bold text-orange-accent-foreground hover-elevate active-elevate-2 sm:min-h-14 sm:px-8 sm:text-xl"
          >
            {t('hero.cta')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
