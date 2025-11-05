import { useTranslation } from 'react-i18next';
import { CheckCircle2 } from 'lucide-react';

export function TrustSection() {
  const { t } = useTranslation();

  const badges = [
    { text: t('trust.badge1'), testId: 'badge-en16931' },
    { text: t('trust.badge2'), testId: 'badge-compatible' },
    { text: t('trust.badge3'), testId: 'badge-trilingual' },
    { text: t('trust.badge4'), testId: 'badge-belgian' },
  ];

  return (
    <section className="w-full bg-background py-12 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 rounded-md bg-card p-4"
              data-testid={badge.testId}
            >
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
              <span className="text-sm font-medium text-card-foreground sm:text-base">
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
