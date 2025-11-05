# Peppol Light Landing Page - Design Guidelines

## Design Approach
**Reference-Based + Utility Focus**: Professional SaaS landing page targeting Belgian SMEs, prioritizing trust, clarity, and conversion. Draw inspiration from compliance-focused SaaS products (Stripe for trust signals, Intercom for clean layouts).

## Color System
- **Primary**: #1F4E78 (professional blue)
- **Accent**: #FF9800 (action orange - CTAs only)
- **Text**: #2C3E50 (dark gray)
- **Backgrounds**: #FFFFFF (white) + #F8F9FA (light gray alternating sections)
- **Style**: Rounded corners (8-12px), soft shadows, professional polish

## Typography
- **Font Family**: Inter or Poppins via Google Fonts
- **Hierarchy**:
  - Hero title: Bold, 48-64px desktop / 32-40px mobile
  - Section titles: Bold, 32-40px desktop / 24-28px mobile
  - Body: Regular, 16-18px
  - Buttons: Bold, 16-18px
- **Line height**: 1.5-1.6 for readability

## Layout System
- **Spacing Units**: Tailwind's 4, 8, 12, 16, 20, 24 (consistent vertical rhythm)
- **Container**: Max-width 1280px, centered with padding
- **Section Padding**: py-16 to py-24 on desktop, py-12 on mobile
- **Grid**: 3-column for cards on desktop, stack to single column on mobile

## Page Structure & Components

### 1. Header
- Logo text "⚡ Peppol Light" (left)
- Language selector (FR/NL/EN) buttons (top right)
- Clean, minimal, sticky on scroll

### 2. Hero Section (Full viewport focus)
- **Layout**: Centered content, no background image
- **Headline**: Bold, attention-grabbing in primary color
- **Subtitle**: Clear explanation of value proposition
- **CTA Button**: Large orange button (smooth scroll to form), minimum 48px height
- **Background**: Clean white or subtle gradient

### 3. Problem Section
- **3 Cards Layout**: Grid with icons, horizontal on desktop
- **Icons**: Use Heroicons (calendar, puzzle, alert)
- **Card Style**: White background, soft shadow, 16px padding, rounded corners
- **Emphasis**: Urgency of January 1, 2026 deadline

### 4. Solution Section
- **3-Step Process**: Numbered steps (1️⃣ 2️⃣ 3️⃣)
- **Visual Flow**: Left-to-right progression on desktop, vertical on mobile
- **Icons**: Upload, check/shield, download icons
- **Background**: Light gray (#F8F9FA) to differentiate from Problem section

### 5. Trust Indicators
- **4 Badges**: Horizontal row with checkmarks (✅)
- **Style**: Minimal, icon + text, evenly spaced
- **Purpose**: Build credibility (EN 16931 compliant, Belgian compatibility, trilingual, data hosting)

### 6. Form Section (Critical for conversion)
- **Title**: Emphasize scarcity ("First 50 businesses")
- **Tally.so Embed**: Full-width iframe, auto-height, transparent background
- **Trust Text**: Below form, small gray text reassuring privacy
- **Background**: White to draw focus
- **CTA Target**: This section is scroll-to destination from hero button

### 7. FAQ Section
- **3 Questions**: Expandable/collapsible accordions
- **Style**: Border-bottom separators, chevron icons for expand/collapse
- **Content**: Address objections (not a replacement, truly free, timeline)
- **Interaction**: Smooth expand/collapse animation

### 8. Footer
- **Content**: "Made with ❤️ in Belgium | RapideAgency"
- **Contact**: Email link (contact@peppollight.be)
- **Style**: Centered, dark gray text on light background, modest padding

## Responsive Behavior
- **Mobile-First**: All sections stack vertically below 768px
- **Touch Targets**: Minimum 44px height for all interactive elements
- **Language Selector**: Accessible dropdown or button group on mobile
- **Form**: Full-width on mobile, max 600px centered on desktop

## Multilingual UX
- **Language Toggle**: Prominent in header, changes entire page instantly
- **Persistence**: Store preference in localStorage
- **Visual Feedback**: Active language highlighted in selector
- **Content**: All sections translate seamlessly (i18next implementation)

## Conversion Optimization
- **Above Fold**: Hero CTA visible without scrolling
- **Visual Hierarchy**: Clear path from problem → solution → action (form)
- **Scarcity**: "First 50" messaging throughout
- **Trust Building**: Compliance badges, Belgian focus, privacy assurance
- **Friction Reduction**: No payment required, simple email collection

## Animation & Interactions
- **Minimal**: Smooth scroll to form, FAQ expand/collapse, hover states on buttons
- **Performance**: Fast loading, no heavy animations
- **Accessibility**: Keyboard navigation, focus states, screen reader friendly