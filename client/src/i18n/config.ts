import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      header: {
        logo: 'Peppol Light',
      },
      hero: {
        title: 'La facturation électronique arrive en 2026. Êtes-vous prêt ?',
        subtitle: 'Toutes les entreprises belges devront utiliser Peppol dès janvier 2026. Peppol Light vous prépare en 5 minutes.',
        cta: 'Rejoindre la liste d\'attente (gratuit) →',
      },
      problem: {
        title: 'Pourquoi Peppol devient obligatoire ?',
        card1Title: 'Échéance légale',
        card1Text: '1er janvier 2026 : toutes les factures entre entreprises belges devront être électroniques via Peppol.',
        card2Title: 'Complexité technique',
        card2Text: 'Le format UBL/XML, les certificats et l\'enregistrement Access Point sont complexes pour les PME.',
        card3Title: 'Risque de non-conformité',
        card3Text: 'Les factures non conformes seront rejetées. Risque de retards de paiement et d\'amendes.',
      },
      solution: {
        title: 'Comment Peppol Light vous aide',
        step1Title: 'Déposez votre facture',
        step1Text: 'Déposez votre facture PDF ou Excel actuelle',
        step2Title: 'Vérification instantanée',
        step2Text: 'Notre IA vérifie 8 critères Peppol et vous donne un score 0-100%',
        step3Title: 'Fichier conforme',
        step3Text: 'Téléchargez votre facture au format UBL/XML prête pour Peppol',
      },
      trust: {
        badge1: 'Conforme norme EN 16931',
        badge2: 'Compatible logiciels belges',
        badge3: 'Support trilingue FR/NL/EN',
        badge4: 'Données hébergées en Belgique',
      },
      form: {
        title: 'Rejoignez les 50 premières entreprises (accès gratuit à vie)',
        subtitle: 'Aucune carte bancaire requise. Vos données ne seront jamais partagées.',
      },
      faq: {
        title: 'Questions fréquentes',
        q1: 'Peppol Light remplace-t-il mon logiciel comptable ?',
        a1: 'Non. Peppol Light vous PRÉPARE à Peppol. Ensuite, vous utilisez votre logiciel habituel.',
        q2: 'C\'est vraiment gratuit ?',
        a2: 'Oui ! Les 50 premiers inscrits auront accès GRATUIT À VIE (1 facture/mois).',
        q3: 'Quand sera disponible la version finale ?',
        a3: 'La bêta privée (pour les 50 premiers inscrits) commence en Janvier 2026. La version finale est prévue juste après, début Février 2026.',
      },
      footer: {
        made: 'Made in Belgium | RapideAgency',
        contact: 'Contact: contact@peppollight.be',
      },
    },
  },
  nl: {
    translation: {
      header: {
        logo: 'Peppol Light',
      },
      hero: {
        title: 'Elektronische facturatie komt eraan in 2026. Ben je klaar?',
        subtitle: 'Alle Belgische bedrijven moeten Peppol gebruiken vanaf januari 2026. Peppol Light bereidt je voor in 5 minuten.',
        cta: 'Word lid van de wachtlijst (gratis) →',
      },
      problem: {
        title: 'Waarom wordt Peppol verplicht?',
        card1Title: 'Wettelijke deadline',
        card1Text: '1 januari 2026: alle facturen tussen Belgische bedrijven moeten elektronisch zijn via Peppol.',
        card2Title: 'Technische complexiteit',
        card2Text: 'Het UBL/XML-formaat, certificaten en Access Point-registratie zijn complex voor KMO\'s.',
        card3Title: 'Niet-nalevingsrisico',
        card3Text: 'Niet-conforme facturen worden geweigerd. Risico op betalingsachterstanden en boetes.',
      },
      solution: {
        title: 'Hoe Peppol Light u helpt',
        step1Title: 'Upload je factuur',
        step1Text: 'Upload je huidige PDF- of Excel-factuur',
        step2Title: 'Onmiddellijke controle',
        step2Text: 'Onze AI controleert 8 Peppol-criteria en geeft je een score van 0-100%',
        step3Title: 'Conform bestand',
        step3Text: 'Download je factuur in UBL/XML-formaat klaar voor Peppol',
      },
      trust: {
        badge1: 'Voldoet aan EN 16931',
        badge2: 'Compatibel met Belgische software',
        badge3: 'Drietalige ondersteuning',
        badge4: 'Gegevens gehost in België',
      },
      form: {
        title: 'Sluit je aan bij de eerste 50 bedrijven (gratis toegang voor altijd)',
        subtitle: 'Geen creditcard vereist. Je gegevens worden nooit gedeeld.',
      },
      faq: {
        title: 'Veelgestelde vragen',
        q1: 'Vervangt Peppol Light mijn boekhoudprogramma?',
        a1: 'Nee. Peppol Light BEREIDT je voor op Peppol. Daarna gebruik je je gebruikelijke software.',
        q2: 'Is het echt gratis?',
        a2: 'Ja! De eerste 50 inschrijvingen krijgen GRATIS LEVENSLANGE toegang (1 factuur/maand).',
        q3: 'Wanneer is de definitieve versie beschikbaar?',
        a3: 'De privé-bèta (voor de eerste 50 aanmeldingen) start in Januari 2026. De definitieve versie staat gepland voor begin Februari 2026.',
      },
      footer: {
        made: 'Made in Belgium | RapideAgency',
        contact: 'Contact: contact@peppollight.be',
      },
    },
  },
  en: {
    translation: {
      header: {
        logo: 'Peppol Light',
      },
      hero: {
        title: 'Electronic invoicing is coming in 2026. Are you ready?',
        subtitle: 'All Belgian businesses must use Peppol from January 2026. Peppol Light prepares you in 5 minutes.',
        cta: 'Join the waiting list (free) →',
      },
      problem: {
        title: 'Why is Peppol becoming mandatory?',
        card1Title: 'Legal Deadline',
        card1Text: 'January 1, 2026: all invoices between Belgian businesses must be electronic via Peppol.',
        card2Title: 'Technical Complexity',
        card2Text: 'UBL/XML format, certificates and Access Point registration are complex for SMEs.',
        card3Title: 'Non-Compliance Risk',
        card3Text: 'Non-compliant invoices will be rejected. Risk of payment delays and fines.',
      },
      solution: {
        title: 'How Peppol Light helps you',
        step1Title: 'Upload your invoice',
        step1Text: 'Upload your current PDF or Excel invoice',
        step2Title: 'Instant check',
        step2Text: 'Our AI checks 8 Peppol criteria and gives you a 0-100% score',
        step3Title: 'Compliant file',
        step3Text: 'Download your invoice in UBL/XML format ready for Peppol',
      },
      trust: {
        badge1: 'EN 16931 Compliant',
        badge2: 'Compatible with Belgian software',
        badge3: 'Trilingual support',
        badge4: 'Data hosted in Belgium',
      },
      form: {
        title: 'Join the first 50 businesses (free access for life)',
        subtitle: 'No credit card required. Your data will never be shared.',
      },
      faq: {
        title: 'Frequently Asked Questions',
        q1: 'Does Peppol Light replace my accounting software?',
        a1: 'No. Peppol Light PREPARES you for Peppol. Then you use your usual software.',
        q2: 'Is it really free?',
        a2: 'Yes! The first 50 sign-ups get FREE LIFETIME access (1 invoice/month).',
        q3: 'When will the final version be available?',
        a3: 'The private beta (for the first 50 sign-ups) begins in January 2026. The final version is scheduled right after, in early February 2026.',
      },
      footer: {
        made: 'Made in Belgium | RapideAgency',
        contact: 'Contact: contact@peppollight.be',
      },
    },
  },
};

const savedLanguage = localStorage.getItem('peppolLightLanguage') || 'fr';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
