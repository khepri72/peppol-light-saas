import { useTranslation } from 'react-i18next';
import { Upload, Shield, Download } from 'lucide-react';

export function SolutionSection() {
  const { t } = useTranslation();

  const steps = [
    {
      number: '1',
      icon: Upload,
      title: t('solution.step1Title'),
      text: t('solution.step1Text'),
      testId: 'step-upload',
    },
    {
      number: '2',
      icon: Shield,
      title: t('solution.step2Title'),
      text: t('solution.step2Text'),
      testId: 'step-check',
    },
    {
      number: '3',
      icon: Download,
      title: t('solution.step3Title'),
      text: t('solution.step3Text'),
      testId: 'step-download',
    },
  ];

  return (
    <section className="w-full bg-muted/30 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 
          className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
          data-testid="text-solution-title"
        >
          {t('solution.title')}
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center"
                data-testid={step.testId}
              >
                <div className="relative mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-md bg-primary">
                    <Icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-orange-accent text-sm font-bold text-orange-accent-foreground">
                    {step.number}
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="max-w-xs text-base text-muted-foreground leading-relaxed">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
