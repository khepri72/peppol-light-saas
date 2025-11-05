import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, AlertCircle, Ban } from 'lucide-react';

export function ProblemSection() {
  const { t } = useTranslation();

  const problems = [
    {
      icon: Calendar,
      title: t('problem.card1Title'),
      text: t('problem.card1Text'),
      testId: 'card-problem-deadline',
    },
    {
      icon: AlertCircle,
      title: t('problem.card2Title'),
      text: t('problem.card2Text'),
      testId: 'card-problem-complexity',
    },
    {
      icon: Ban,
      title: t('problem.card3Title'),
      text: t('problem.card3Text'),
      testId: 'card-problem-risk',
    },
  ];

  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 
          className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
          data-testid="text-problem-title"
        >
          {t('problem.title')}
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card 
                key={index} 
                className="hover-elevate"
                data-testid={problem.testId}
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-md bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-center text-xl font-bold text-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-center text-base text-muted-foreground leading-relaxed">
                    {problem.text}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
