import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export function FormSection() {
  const { t } = useTranslation();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.onload = () => {
      if (typeof (window as any).Tally !== 'undefined') {
        (window as any).Tally.loadEmbeds();
      }
    };
    script.onerror = () => {
      const iframes = document.querySelectorAll('iframe[data-tally-src]:not([src])');
      iframes.forEach((iframe: any) => {
        iframe.src = iframe.dataset.tallySrc;
      });
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="waitlist-form" className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 
          className="mb-8 text-center text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
          data-testid="text-form-title"
        >
          {t('form.title')}
        </h2>

        <div className="mb-4" data-testid="iframe-tally-form">
          <iframe
            data-tally-src="https://tally.so/embed/wdLo9A?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Peppol Light - Beta Waitlist"
            className="rounded-md"
          />
        </div>

        <p 
          className="text-center text-sm text-muted-foreground"
          data-testid="text-form-privacy"
        >
          {t('form.subtitle')}
        </p>
      </div>
    </section>
  );
}
