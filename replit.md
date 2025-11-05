# Peppol Light - Landing Page

## Overview
A modern, professional trilingual (FR/NL/EN) landing page for Peppol Light, a SaaS helping Belgian SMEs prepare for mandatory Peppol e-invoicing starting January 1, 2026.

**Goal**: Phase 0 Market Validation - Collect 50 emails in 7 days from Belgian businesses

## Project Architecture

### Tech Stack
- **Frontend**: React 18+ with Vite
- **Styling**: Tailwind CSS (mobile-first responsive)
- **Internationalization**: i18next and react-i18next
- **Form**: Embedded Tally.so iframe
- **Typography**: Inter & Poppins (via Google Fonts)

### Color Palette
- **Primary Blue**: #1F4E78 (professional, trustworthy)
- **Accent Orange**: #FF9800 (CTAs and action elements)
- **Text**: #2C3E50 (dark gray)
- **Backgrounds**: White (#FFFFFF) + Light Gray (#F8F9FA) alternating sections

### Key Features
1. **Trilingual Support**: Seamless language switching (FR/NL/EN) with localStorage persistence
2. **Hero Section**: Compelling above-the-fold headline and CTA with smooth scroll
3. **Problem Cards**: 3 cards explaining why Peppol is mandatory (deadline, complexity, risk)
4. **Solution Steps**: 3-step process showing how Peppol Light helps
5. **Trust Badges**: 4 compliance indicators (EN 16931, Belgian compatible, trilingual, data hosting)
6. **Waitlist Form**: Embedded Tally.so form for email collection
7. **FAQ Accordion**: 3 expandable questions addressing objections
8. **Responsive Design**: Mobile-first with perfect touch targets (min 44px)

### Page Structure
- Header (sticky with logo + language selector)
- Hero Section (white background)
- Problem Section (white background with 3 cards)
- Solution Section (light gray background with 3 steps)
- Trust Indicators (4 badges)
- Form Section (white background, scroll target)
- FAQ Section (light gray background, accordion)
- Footer (contact info)

### Recent Changes
- **2025-01-05**: Initial implementation
  - Set up i18next with complete FR/NL/EN translations
  - Configured design tokens (custom orange-accent color, light-gray-bg)
  - Built all React components with exceptional visual polish
  - Added SEO meta tags for better search visibility
  - Implemented Tally.so iframe integration with dynamic height

### User Preferences
- Professional, conversion-focused design
- Emphasis on trust and compliance
- Scarcity messaging ("First 50 businesses")
- Belgian market focus

## Development

### Running the Application
```bash
npm run dev
```
The application will be available at port 5000.

### Language Management
Languages are managed via i18next with configuration in `client/src/i18n/config.ts`. 
User's language preference is stored in localStorage under the key `peppolLightLanguage`.

### Form Integration
The Tally.so waitlist form is embedded using an iframe with:
- Auto-height adjustment
- Transparent background
- Left alignment
- Hidden title

## File Structure
```
client/
├── src/
│   ├── components/
│   │   ├── Header.tsx (sticky header with language switcher)
│   │   ├── HeroSection.tsx (main headline + CTA)
│   │   ├── ProblemSection.tsx (3 problem cards)
│   │   ├── SolutionSection.tsx (3-step process)
│   │   ├── TrustSection.tsx (4 trust badges)
│   │   ├── FormSection.tsx (Tally.so embed)
│   │   ├── FAQSection.tsx (accordion with 3 questions)
│   │   └── Footer.tsx (contact info)
│   ├── i18n/
│   │   └── config.ts (i18next setup with all translations)
│   ├── pages/
│   │   └── Home.tsx (main landing page)
│   └── App.tsx (root component with routing)
```

## Conversion Optimization Features
- Above-the-fold CTA visible without scrolling
- Smooth scroll to form on CTA click
- Scarcity messaging throughout
- Trust-building compliance badges
- Privacy reassurance text
- Mobile-optimized touch targets
- Fast loading with minimal animations
