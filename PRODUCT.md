# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: prospective and existing patients in Suwon Jangan-gu / Songjuk-dong (North Suwon) considering dental treatment — natural tooth preservation, implants, impacted wisdom tooth extraction, cavity/prosthetic treatment, or TMJ care — who value a careful diagnosis and an explained treatment plan over a fast upsell.

Secondary (confirmed real audience, not incidental SEO): English-speaking / foreign residents near the clinic. Future work should not assume a Korean-only visitor and may need English-facing content or wayfinding.

## Product Purpose

Marketing and information site for 수원세브란스치과의원 (Suwon Severance Dental Clinic), a real single-location dental clinic. It builds trust in the chief director's credentials and treatment philosophy, explains services/safety systems/equipment/clinic space, and gives location, hours, and contact paths. Success is a visitor understanding the clinic's credibility and approach and then acting — calling, visiting, or using the floating quick-consultation menu.

## Positioning

Chief director 이현민 combines Yonsei University Dental College training, Severance Hospital (신촌세브란스병원) clinical residency, and department-head experience at general/university hospitals. The site's differentiating mechanism: natural-tooth preservation is checked first, implants/oral surgery follow only when needed, and exam findings plus treatment options are explained before a plan is decided — diagnosis-and-explain-first, not implant-first.

## Operating Context

Single physical clinic: 경수대로 969 한국메디컬빌딩 2층, 수원시 장안구, 경기도. Weekly hours: Mon/Wed/Thu/Fri/Tue 09:30–13:00 and 14:00–18:30 or 20:30 depending on day, Sat 09:30–14:00, closed Sunday (see `ClinicJsonLd.tsx` for the authoritative schedule). Naver Map integration for directions. Current structure: a multi-section homepage (hero, affiliations carousel, services, doctor profile, clean/safety system, clinical philosophy, equipment, interior, quick consultation, contact) plus standalone `/about`, `/services` (+ `/services/[slug]` detail pages), `/doctors`, and `/contact` routes.

## Capabilities and Constraints

- Real services offered: 자연치아 보존, 신경치료/재신경치료, 임플란트(뼈이식 포함), 매복 사랑니 발치, 구강외과, 충치치료, 보철치료, 턱관절 진료.
- A clinical-cases section exists in code (`ClinicalCasesSection.tsx`) but is deliberately disabled pending real case content — do not re-enable or populate it with fabricated cases.
- The production domain is currently a temporary placeholder (`suwonsevrance.vercel.app`, marked in code as temporary); the real domain is undecided — don't bake assumptions about the final URL into new work.
- No formal accessibility certification or standard is required (confirmed); general accessibility good practice is sufficient.

## Brand Commitments

- Clinic name: 수원세브란스치과 / 수원세브란스치과의원. Yonsei University affiliation and the Yonsei mark are genuine, binding credentials, not decorative.
- Chief director 이현민's real name, photo, and listed credentials (education, career, academic activities) are binding facts, not placeholder content.

## Evidence on Hand

- Doctor profile photo, Yonsei logo/mark, and clinic exterior/interior photos already exist under `/public/images`.
- No testimonials, awards, before/after cases, or press are on hand beyond what's already in the code (confirmed). Future design or content work must not fabricate any of these.

## Product Principles

1. Diagnosis and explanation come before any treatment recommendation — never compress or skip the "explain the findings, then decide" framing for speed.
2. Natural-tooth preservation is the default lens; implants and oral surgery are the fallback path, not the headline.
3. Credibility rests on specific, verifiable institutions (Yonsei, Severance, named hospitals) — never soften into generic "expert dentist" claims.
4. English-speaking / foreign patients are a real secondary audience; don't design or write copy as if only Korean-speaking locals will visit.
5. Ship only confirmed-real evidence — no fabricated case studies, testimonials, or proof points.

## Accessibility & Inclusion

No formal certification or standard (e.g. KWCAG, WCAG AA) is required; general accessibility good practice applies.
