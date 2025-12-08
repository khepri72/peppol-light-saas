import { useTranslation } from 'react-i18next';
import { Heart, Mail } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="w-full border-t border-border/40 bg-muted/20">
      {/* Main Footer */}
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">P</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                Peppol Light
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t('footer.description')}
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t('footer.product')}
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t('footer.features')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t('footer.pricing')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t('footer.faq')}
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t('footer.legal')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@rapideagency.com"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  data-testid="link-footer-contact"
                >
                  <Mail className="h-4 w-4" />
                  {t('footer.email')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/40 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
              {t('footer.copyright')}
            </p>
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              {t('footer.madeIn')}
              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
