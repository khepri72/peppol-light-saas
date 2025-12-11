import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, FileCheck, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const LOGIN_URL = 'https://app.peppollight.com/login';

export function HeroSection() {
  const { t } = useTranslation();

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const floatingIcons = [
    { icon: FileCheck, delay: 0, x: '10%', y: '20%' },
    { icon: Shield, delay: 0.2, x: '85%', y: '15%' },
    { icon: Zap, delay: 0.4, x: '80%', y: '70%' },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-20 sm:py-28 lg:py-36">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,90,168,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,107,53,0.06),transparent_50%)]" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating Icons - Desktop Only */}
      {floatingIcons.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            className="absolute hidden lg:block"
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.15, y: 0 }}
            transition={{ delay: item.delay + 0.5, duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: item.delay }}
            >
              <Icon className="h-12 w-12 text-primary" />
            </motion.div>
          </motion.div>
        );
      })}

      <div className="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Shield className="h-4 w-4" />
              {t('hero.badge')}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl xl:text-7xl"
            data-testid="text-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl lg:text-2xl"
            data-testid="text-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              asChild
              size="lg"
              data-testid="button-hero-cta"
              className="group min-h-14 bg-orange-accent px-8 text-lg font-bold text-orange-accent-foreground shadow-lg shadow-orange-accent/25 transition-all duration-300 hover:bg-orange-accent/90 hover:shadow-xl hover:shadow-orange-accent/30 sm:text-xl"
            >
              <a href={LOGIN_URL}>
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={scrollToPricing}
              data-testid="button-hero-secondary"
              className="min-h-14 border-2 border-primary/20 bg-transparent px-8 text-lg font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 sm:text-xl"
            >
              {t('hero.ctaSecondary')}
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground sm:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>100% Belgique</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>EN 16931</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>RGPD</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
