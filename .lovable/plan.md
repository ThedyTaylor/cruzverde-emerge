

# Zona Franca Industrial Cruz Verde — Corporate Bilingual Website

## Overview
A premium, conversion-focused corporate website for an industrial free zone project in the Dominican Republic. Fully bilingual (ES/EN), designed to attract international investors, logistics companies, and nearshoring operations.

## Design System
- **Colors**: Dark navy blue (`#0A1628`), white, light gray (`#F4F6F8`), accent green (`#2ECC71`)
- **Typography**: Inter (clean, modern sans-serif)
- **Style**: Corporate, premium, clean with smooth scroll animations and fade-in effects
- **Layout**: Mobile-first responsive, sticky header

## Architecture
- **Language Context**: React context for ES/EN toggle, with all strings in a translations object
- **Single-page**: Smooth scroll between sections with sticky nav
- **Components**: Modular section components for each content block

## Sections (in order)

### 1. Sticky Header + Language Switcher
- Logo/brand name on the left, nav links center, ES/EN toggle top-right
- Transparent on hero, solid on scroll

### 2. Hero Section
- Full-viewport with dark overlay on a high-quality aerial industrial background image (from Unsplash)
- Large headline, subtitle, two CTA buttons ("Request Information" + "View Location")
- Subtle parallax or fade-in animation

### 3. About the Project
- Two-column layout: text left, image/illustration right
- Clear description of Cruz Verde as a next-gen industrial park

### 4. Key Advantages (6 icons)
- Grid of 6 cards with Lucide icons: Strategic Location, FTZ Regime, Tax Incentives, Build-to-Suit, Expansion Capacity, Near Ports/Highways
- Clean card design with hover effects

### 5. Strategic Value
- Three highlight cards: Early Entry Advantage, High Appreciation Potential, Anchor Tenant Incentives
- Numbers/stats styling for impact

### 6. Comparison Section
- Subtle comparison table: Cruz Verde vs Las Américas, Santiago, PIISA
- Positioning Cruz Verde as "New opportunity vs saturated markets"

### 7. Master Plan / Development Phases
- Visual phase diagram: Phase 1 (Available), Phase 2 (Expansion)
- Stylized plot layout visualization
- Infrastructure highlights

### 8. Target Industries
- 5 industry cards with icons: Logistics/3PL, Cold Storage, Light Manufacturing, E-commerce Fulfillment, Nearshoring
- Clean grid layout

### 9. Location Section
- Embedded Google Maps iframe showing Dominican Republic location
- Connectivity highlights (ports, highways, airports)

### 10. Investment CTA Section
- Dark background, bold headline, prominent "Contact Now" button

### 11. Contact Form
- Fields: Name, Email, Company, Phone, Message
- Clean form with validation using toast notifications on submit

### 12. Footer
- Links, contact info, copyright

## Extra Features
- **WhatsApp floating button**: Fixed bottom-right corner
- **Smooth scroll animations**: Intersection Observer-based fade-in for each section
- **SEO**: Proper meta tags, semantic HTML

## File Structure
- `src/contexts/LanguageContext.tsx` — language state + translations
- `src/components/Header.tsx` — sticky nav + language toggle
- `src/components/HeroSection.tsx`
- `src/components/AboutSection.tsx`
- `src/components/AdvantagesSection.tsx`
- `src/components/StrategicValueSection.tsx`
- `src/components/ComparisonSection.tsx`
- `src/components/MasterPlanSection.tsx`
- `src/components/IndustriesSection.tsx`
- `src/components/LocationSection.tsx`
- `src/components/InvestmentCTA.tsx`
- `src/components/ContactForm.tsx`
- `src/components/Footer.tsx`
- `src/components/WhatsAppButton.tsx`
- `src/hooks/useScrollAnimation.ts`
- `src/pages/Index.tsx` — assembles all sections

