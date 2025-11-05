import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t bg-background py-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-footer-made">
            {t('footer.made')}
          </p>
          <a
            href="mailto:contact@peppollight.be"
            className="text-sm text-primary hover-elevate active-elevate-2 hover:underline"
            data-testid="link-footer-contact"
          >
            {t('footer.contact')}
          </a>
        </div>
      </div>
    </footer>
  );
}
