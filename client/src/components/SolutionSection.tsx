import { useTranslation } from 'react-i18next';
import { UserPlus, Upload, FileCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const REGISTER_URL = 'https://peppol-light-backend.onrender.com/register';

export function SolutionSection() {
  const { t } = useTranslation();

  const steps = [
    {
      number: '01',
      icon: UserPlus,
      title: t('solution.step1Title'),
      text: t('solution.step1Text'),
      testId: 'step-account',
    },
    {
      number: '02',
      icon: Upload,
      title: t('solution.step2Title'),
      text: t('solution.step2Text'),
      testId: 'step-upload',
    },
    {
      number: '03',
      icon: FileCheck,
      title: t('solution.step3Title'),
      text: t('solution.step3Text'),
      testId: 'step-report',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-muted/30 via-primary/5 to-background py-20 sm:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,90,168,0.08),transparent_50%)]" />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            🚀 Simple et rapide
          </span>
          <h2
            className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            data-testid="text-solution-title"
          >
            {t('solution.title')}
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl">
            {t('solution.subtitle')}
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="relative mx-auto max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Connecting line - Desktop */}
          <div className="absolute left-[39px] top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 md:left-1/2 md:block md:-translate-x-1/2" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative mb-12 last:mb-0"
                data-testid={step.testId}
              >
                <div className={`flex flex-col gap-6 md:flex-row md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <div className={`rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md sm:p-8 ${isEven ? 'md:ml-auto' : 'md:mr-auto'} md:max-w-md`}>
                      <div className={`mb-4 flex items-center gap-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                        <h3 className="text-xl font-bold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className={`text-base leading-relaxed text-muted-foreground ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                        {step.text}
                      </p>
                    </div>
                  </div>

                  {/* Center icon - Desktop */}
                  <div className="absolute left-0 top-6 z-10 flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-background bg-primary shadow-lg md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden flex-1 md:block" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            asChild
            size="lg"
            className="group min-h-14 bg-orange-accent px-8 text-lg font-bold text-orange-accent-foreground shadow-lg shadow-orange-accent/25 transition-all duration-300 hover:bg-orange-accent/90 hover:shadow-xl hover:shadow-orange-accent/30"
          >
            <a href={REGISTER_URL}>
              Commencer maintenant
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
