import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function Header() {
  const { t, i18n } = useTranslation();

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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary sm:text-2xl" data-testid="text-logo">
            {t('header.logo')}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-muted-foreground" />
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant={i18n.language === lang.code ? 'default' : 'ghost'}
              size="sm"
              onClick={() => changeLanguage(lang.code)}
              data-testid={`button-language-${lang.code}`}
              className="min-h-9"
            >
              {lang.label}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
}
