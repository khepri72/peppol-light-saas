import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const LOGIN_URL = 'https://peppol-light-backend.onrender.com/login';

export function PricingSection() {
  const { t } = useTranslation();

  const plans = [
    {
      key: 'free',
      name: t('pricing.free.name'),
      price: t('pricing.free.price'),
      description: t('pricing.free.description'),
      features: t('pricing.free.features', { returnObjects: true }) as string[],
      popular: false,
      buttonVariant: 'outline' as const,
    },
    {
      key: 'starter',
      name: t('pricing.starter.name'),
      price: t('pricing.starter.price'),
      description: t('pricing.starter.description'),
      features: t('pricing.starter.features', { returnObjects: true }) as string[],
      popular: false,
      buttonVariant: 'outline' as const,
    },
    {
      key: 'pro',
      name: t('pricing.pro.name'),
      price: t('pricing.pro.price'),
      description: t('pricing.pro.description'),
      features: t('pricing.pro.features', { returnObjects: true }) as string[],
      popular: true,
      buttonVariant: 'default' as const,
    },
    {
      key: 'business',
      name: t('pricing.business.name'),
      price: t('pricing.business.price'),
      description: t('pricing.business.description'),
      features: t('pricing.business.features', { returnObjects: true }) as string[],
      popular: false,
      buttonVariant: 'outline' as const,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="pricing" className="w-full bg-gradient-to-b from-background via-muted/20 to-background py-20 sm:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block rounded-full bg-orange-accent/10 px-4 py-1.5 text-sm font-medium text-orange-accent">
            💰 Tarifs
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {plans.map((plan, index) => (
            <motion.div key={plan.key} variants={itemVariants} className="flex">
              <Card
                className={`relative flex w-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  plan.popular
                    ? 'border-2 border-orange-accent shadow-lg shadow-orange-accent/10'
                    : 'border border-border/50 shadow-sm'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -right-12 top-6 rotate-45 bg-orange-accent px-12 py-1 text-xs font-bold text-orange-accent-foreground">
                    {t('pricing.popular')}
                  </div>
                )}

                <CardHeader className={`pb-4 pt-6 ${plan.popular ? 'bg-gradient-to-br from-orange-accent/5 to-transparent' : ''}`}>
                  {/* Plan icon */}
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${plan.popular ? 'bg-orange-accent/10' : 'bg-primary/10'}`}>
                    <Sparkles className={`h-6 w-6 ${plan.popular ? 'text-orange-accent' : 'text-primary'}`} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>

                  {/* Price */}
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{t('pricing.monthly')}</span>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col p-6 pt-0">
                  {/* Features */}
                  <ul className="mb-6 flex-1 space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.popular ? 'bg-orange-accent/10 text-orange-accent' : 'bg-primary/10 text-primary'}`}>
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    asChild
                    variant={plan.buttonVariant}
                    className={`w-full font-semibold ${
                      plan.popular
                        ? 'bg-orange-accent text-orange-accent-foreground shadow-md hover:bg-orange-accent/90'
                        : 'border-primary/20 hover:border-primary/40 hover:bg-primary/5'
                    }`}
                  >
                    <a href={LOGIN_URL}>
                      {t('pricing.choosePlan')}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust note */}
        <motion.p
          className="mt-12 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Tous les prix sont HT. Pas de frais cachés. Annulation possible à tout moment.
        </motion.p>
      </div>
    </section>
  );
}

