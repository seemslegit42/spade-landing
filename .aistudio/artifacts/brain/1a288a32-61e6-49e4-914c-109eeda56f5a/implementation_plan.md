# Implementation Plan: Spade Sentry Landing Page (Updated)

## Overview
A high-impact, audacious, satirical landing page designed to entertain and intrigue business owners, positioning Spade Sentry as the superior, cost-effective alternative to "Sona".

## Implementation Strategy (Plan A Refined)
- **Design System**: Roman Glassmorphism (Surface: #121317, Primary: #6A0DAD, Secondary: #20B2AA, Tertiary: #3EB991), Comfortaa (Headlines), Lexend (Body).
- **Core Structural Components**:
    - **Disclaimer**: Mandatory prominent legal disclaimer above the fold.
    - **Hero**: "Flip the Narrative" dashboard comparing Sona vs. Spade.
    - **Audio Matrix**: Interactive "Hear the Difference" table/grid.
    - **Pricing Demolition**: Comparative table highlighting the "$2.99" vs. "~10 free calls" model.
    - **Feature Grid**: Satirical feature comparison.
    - **Testimonial Section**: "Real-world" satirical endorsements.
    - **Interactive Demo**: "Call the Pushover" CTA section.
- **Legal Compliance**:
    - Adherence to Nominative Fair Use, First Amendment Parody Protections, and Lanham Act § 43(a) (no fabrications).
    - Prominent legal disclaimer included.

## Implementation Details
1. **Components**:
    - `components/legal-disclaimer.tsx`
    - `components/hero-section.tsx`
    - `components/audio-comparison.tsx`
    - `components/pricing-demolition.tsx`
    - `components/feature-parody.tsx`
    - `components/testimonial-section.tsx`
    - `components/demo-cta.tsx`
2. **Page**: `app/page.tsx` integrating all components.
3. **Styling**: `app/globals.css` using Roman Glassmorphism tokens.
4. **Verification**: `compile_applet`, `lint_applet`.

## Next Steps
1. Create components and main page structure.
2. Apply design system tokens.
3. Implement interactive demo CTA and audio mock UI.
4. Run lint/compilation checks.
