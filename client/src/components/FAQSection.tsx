import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';

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
    {
      question: t('faq.q4'),
      answer: t('faq.a4'),
      testId: 'faq-4',
    },
    {
      question: t('faq.q5'),
      answer: t('faq.a5'),
      testId: 'faq-5',
    },
  ];

  return (
    <section id="faq" className="w-full bg-gradient-to-b from-muted/30 to-background py-20 sm:py-28">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            ❓ FAQ
          </span>
          <h2
            className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            data-testid="text-faq-title"
          >
            {t('faq.title')}
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                data-testid={faq.testId}
                className="rounded-xl border border-border/50 bg-card px-6 shadow-sm transition-all duration-200 hover:border-border data-[state=open]:border-primary/30 data-[state=open]:shadow-md"
              >
                <AccordionTrigger
                  className="py-5 text-left text-base font-semibold text-foreground hover:no-underline sm:text-lg [&[data-state=open]>svg]:text-primary"
                  data-testid={`button-${faq.testId}-trigger`}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="mt-12 rounded-2xl border border-border/50 bg-card p-6 text-center shadow-sm sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-foreground">
            Vous avez d'autres questions ?
          </p>
          <a
            href="mailto:contact@rapideagency.com"
            className="mt-2 inline-block font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Contactez-nous →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
