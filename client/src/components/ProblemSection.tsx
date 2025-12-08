import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, AlertTriangle, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function ProblemSection() {
  const { t } = useTranslation();

  const problems = [
    {
      icon: Calendar,
      title: t('problem.card1Title'),
      text: t('problem.card1Text'),
      testId: 'card-problem-deadline',
      gradient: 'from-red-500/10 to-orange-500/10',
      iconColor: 'text-red-500',
      iconBg: 'bg-red-500/10',
    },
    {
      icon: AlertTriangle,
      title: t('problem.card2Title'),
      text: t('problem.card2Text'),
      testId: 'card-problem-complexity',
      gradient: 'from-amber-500/10 to-yellow-500/10',
      iconColor: 'text-amber-500',
      iconBg: 'bg-amber-500/10',
    },
    {
      icon: TrendingDown,
      title: t('problem.card3Title'),
      text: t('problem.card3Text'),
      testId: 'card-problem-risk',
      gradient: 'from-orange-500/10 to-red-500/10',
      iconColor: 'text-orange-500',
      iconBg: 'bg-orange-500/10',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="w-full bg-gradient-to-b from-background to-muted/30 py-20 sm:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block rounded-full bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-600">
            ⚠️ Attention
          </span>
          <h2
            className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            data-testid="text-problem-title"
          >
            {t('problem.title')}
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl">
            {t('problem.subtitle')}
          </p>
        </motion.div>

        {/* Problem Cards */}
        <motion.div
          className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className={`group relative h-full overflow-hidden border-0 bg-gradient-to-br ${problem.gradient} shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                  data-testid={problem.testId}
                >
                  {/* Decorative corner */}
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/5" />
                  
                  <CardContent className="relative p-6 sm:p-8">
                    <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${problem.iconBg}`}>
                      <Icon className={`h-7 w-7 ${problem.iconColor}`} />
                    </div>
                    
                    <h3 className="mb-3 text-xl font-bold text-foreground">
                      {problem.title}
                    </h3>
                    
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {problem.text}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Urgency Banner */}
        <motion.div
          className="mt-12 rounded-2xl border border-red-200 bg-gradient-to-r from-red-50 to-orange-50 p-6 text-center dark:border-red-900/30 dark:from-red-950/30 dark:to-orange-950/30 sm:p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                <Calendar className="h-6 w-6 text-red-500" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground sm:text-3xl">1er janvier 2026</p>
                <p className="text-sm text-muted-foreground">Date limite d'entrée en vigueur</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
