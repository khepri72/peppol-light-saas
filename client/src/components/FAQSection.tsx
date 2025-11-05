import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQSection() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1'),
      testId: 'faq-1',
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2'),
      testId: 'faq-2',
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3'),
      testId: 'faq-3',
    },
  ];

  return (
    <section className="w-full bg-muted/30 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 
          className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
          data-testid="text-faq-title"
        >
          {t('faq.title')}
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} data-testid={faq.testId}>
              <AccordionTrigger 
                className="text-left text-lg font-semibold text-foreground"
                data-testid={`button-${faq.testId}-trigger`}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
