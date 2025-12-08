import { useTranslation } from 'react-i18next';
import { Shield, Globe, Headphones, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function TrustSection() {
  const { t } = useTranslation();

  const badges = [
    { 
      icon: Shield,
      text: t('trust.badge1'), 
      testId: 'badge-en16931',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    { 
      icon: Globe,
      text: t('trust.badge2'), 
      testId: 'badge-compatible',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    { 
      icon: Headphones,
      text: t('trust.badge3'), 
      testId: 'badge-trilingual',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    { 
      icon: MapPin,
      text: t('trust.badge4'), 
      testId: 'badge-belgian',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="w-full bg-gradient-to-b from-background to-muted/20 py-16 sm:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex items-center gap-4 rounded-xl border border-border/50 bg-card p-5 shadow-sm transition-all duration-300 hover:border-border hover:shadow-md"
                data-testid={badge.testId}
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${badge.bgColor} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`h-6 w-6 ${badge.color}`} />
                </div>
                <span className="text-sm font-medium text-foreground sm:text-base">
                  {badge.text}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
