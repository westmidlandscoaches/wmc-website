# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static output), TypeScript strict mode, npm, React islands via @astrojs/react (Framer Motion only), modern native CSS. Established prior to this init in [W8 implementation foundation]; not a stack decision made during this session.

## Users

Primary visitor: a person organising private passenger transport for a real journey — primarily corporate/business travel, airport groups, private groups/events, or recurring/contract transport. They need to understand the available Cars, Minibuses and Coaches, gain confidence the journey will be properly organised, and request a bespoke quotation.

## Product Purpose

West Midlands Coaches organises private passenger transport (chauffeur-driven cars, minibuses, and coaches) across Birmingham and the West Midlands. The site exists to let a visitor inspect the real fleet, understand the service model, and submit a bespoke quote request carrying journey/vehicle context through. Success is a well-informed, confident quote request — not an instant booking.

## Positioning

WMC combines an 11-vehicle, company-owned, multi-category fleet (Cars, Minibuses, Coaches) with a journey-first service model: organising the journey, not just supplying a vehicle. The website must make the real fleet inspectable, preserve journey/vehicle context into the quote request, and build "Journey Confidence" through professional organisation — not generic luxury or low-price claims.

## Operating Context

- Driver-operated only; no self-drive hire.
- Bespoke quotation model — no instant booking, no fixed/published pricing.
- Primary market: Birmingham and the West Midlands.

## Capabilities and Constraints

- Fleet: exactly 11 WMC-owned vehicles across Cars, Minibuses, and Coaches. No invented vehicle counts, models, capacities, or amenities beyond what is confirmed.
- No self-drive; all hire is driver-operated.
- Pricing is bespoke/quote-based only; do not imply fixed pricing or instant checkout.
- No accessibility, safety, or guarantee claims beyond what is explicitly confirmed.
- Undecided/open: exact fleet vehicle list, specifications, and imagery are not yet supplied — future work must not fabricate these.

## Brand Commitments

- Approved WMC Gold/Silver logo must be preserved exactly — never redrawn, recoloured, or recreated in typography. (WMC Silver hex is separately pending governance verification — see [tokens.css](src/styles/tokens.css).)
- Source Sans 3 is the only communication typeface, self-hosted, weights 400/500/600/700 only.
- Authentic WMC fleet photography is the primary visual material once supplied; no stock/generic luxury imagery.
- Visual tone: premium through spacing, proportion, photography, and restraint — editorial, transport-led, operationally credible.
- Explicitly avoid: SaaS-template patterns, casino/nightclub black-gold styling, racing/supercar styling, generic limousine-template look, and generic AI-generated UI clichés (equal 3-card grids, glassmorphism, glow, purple/blue gradients, etc.).

## Evidence on Hand

- No real fleet photography in the project yet — future work must not invent or substitute stock vehicle imagery.
- No approved logo asset files present in `public/brand/` yet — `BrandLogo` component is ready but must not be given a placeholder/fake asset.
- No accreditations, reviews, testimonials, or customer statistics are confirmed — none exist in the project and none should be fabricated.

## Product Principles

1. Organise the journey, not just supply the vehicle — service model and copy should reflect journey-first thinking, not vehicle rental framing.
2. Real fleet, real confidence — every fleet claim must trace to the 11 confirmed WMC-owned vehicles; never invent specifications.
3. Bespoke, not instant — the quote flow is consultative; never simulate fixed pricing or instant booking.
4. Premium via restraint — proportion, whitespace, typography, and photography carry the premium feel, not decoration or generic luxury signalling.
5. Brand assets are fixed points — the Gold/Silver logo and Source Sans 3 typography are non-negotiable and must never be recreated or substituted.

## Accessibility & Inclusion

No product-specific accessibility requirement has been established beyond the WCAG-aligned foundation already implemented (see [BaseLayout.astro](src/layouts/BaseLayout.astro), [global.css](src/styles/global.css)).
