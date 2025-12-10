import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';

const REGISTER_URL = 'https://peppol-light-backend.onrender.com/register';

export function Header() {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('peppolLightLanguage', lng);
    document.documentElement.lang = lng;
  };

  const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'nl', label: 'NL' },
    { code: 'en', label: 'EN' },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo_final.png" alt="Peppol Light" className="h-10 w-auto" />
          <span className="text-xl font-bold text-foreground sm:text-2xl" data-testid="text-logo">
            {t('header.logo')}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t('header.pricing')}
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t('header.faq')}
          </button>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Language Selector */}
          <div className="flex items-center gap-1 rounded-lg border border-border/60 bg-muted/30 p-1">
            <Globe className="ml-1 h-3.5 w-3.5 text-muted-foreground" />
            {languages.map((lang) => (
              <Button
                key={lang.code}
                variant={i18n.language === lang.code ? 'default' : 'ghost'}
                size="sm"
                onClick={() => changeLanguage(lang.code)}
                data-testid={`button-language-${lang.code}`}
                className={`h-7 min-w-8 px-2 text-xs font-medium ${
                  i18n.language === lang.code
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
              >
                {lang.label}
              </Button>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            asChild
            className="bg-orange-accent font-semibold text-orange-accent-foreground shadow-md transition-all duration-200 hover:bg-orange-accent/90 hover:shadow-lg"
          >
            <a href={REGISTER_URL}>
              {t('header.cta')}
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5 text-foreground" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background/98 backdrop-blur-md md:hidden">
          <div className="container mx-auto space-y-4 px-4 py-6">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-left text-base font-medium text-foreground"
              >
                {t('header.pricing')}
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left text-base font-medium text-foreground"
              >
                {t('header.faq')}
              </button>
            </nav>

            {/* Mobile Language Selector */}
            <div className="flex items-center gap-2 border-t border-border/40 pt-4">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Langue:</span>
              {languages.map((lang) => (
                <Button
                  key={lang.code}
                  variant={i18n.language === lang.code ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => changeLanguage(lang.code)}
                  className="h-8 px-3"
                >
                  {lang.label}
                </Button>
              ))}
            </div>

            {/* Mobile CTA */}
            <Button
              asChild
              className="w-full bg-orange-accent font-semibold text-orange-accent-foreground"
            >
              <a href={REGISTER_URL}>
                {t('header.cta')}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
