import { useTranslation } from 'react-i18next';
import { FileSearch, Gauge, AlertCircle, FileSpreadsheet } from 'lucide-react';
import { motion } from 'framer-motion';

export function BenefitsSection() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: FileSearch,
      title: t('benefits.item1Title'),
      text: t('benefits.item1Text'),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      iconColor: 'text-blue-500',
    },
    {
      icon: Gauge,
      title: t('benefits.item2Title'),
      text: t('benefits.item2Text'),
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      iconColor: 'text-green-500',
    },
    {
      icon: AlertCircle,
      title: t('benefits.item3Title'),
      text: t('benefits.item3Text'),
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-500/10',
      iconColor: 'text-amber-500',
    },
    {
      icon: FileSpreadsheet,
      title: t('benefits.item4Title'),
      text: t('benefits.item4Text'),
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      iconColor: 'text-purple-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="w-full bg-background py-20 sm:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            ✨ La solution
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t('benefits.title')}
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl">
            {t('benefits.subtitle')}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative flex h-full flex-col rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all duration-300 hover:border-border hover:shadow-md sm:p-8">
                  {/* Icon */}
                  <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl ${benefit.bgColor} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className={`h-7 w-7 ${benefit.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {benefit.text}
                  </p>

                  {/* Decorative gradient line */}
                  <div className={`absolute bottom-0 left-6 right-6 h-1 rounded-full bg-gradient-to-r ${benefit.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

