# SRMS - Smart Reporting and Management System

**Akıllı Raporlama ve Yönetim Sistemi**  
Landing page for the SRMS graduation project by Team Vexra, Atılım University.

## About

SRMS is an AI-powered infrastructure reporting and management system designed for university campuses, municipalities, and organized residential areas. Users report issues via a mobile app with a single photo; a two-stage AI pipeline classifies the problem and routes it automatically to the responsible unit.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Font:** Inter (Google Fonts)

## Project Structure

```
landing/
├── app/
│   ├── page.tsx          # Main page (all sections)
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── sections/         # Hero, Problem, HowItWorks, ProductShowcase,
│   │                     # DemoShowcase, Features, AIPipeline,
│   │                     # ApplicationAreas, Team, References, Footer
│   └── ui/               # Navbar, SectionWrapper, Badge
├── lib/
│   ├── data.ts           # All content data
│   └── animations.ts     # Framer Motion variants
└── public/               # Images and video assets
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Team

| Name | Initials |
|------|----------|
| Ahmet Efe Bayav | AEB |
| Barış Özpulat | BÖ |
| Utku Oğul Bolat | UOB |
| Ünal Namdar | ÜN |
| Tuna Alan | TA |
| Arda Başdere | AB |

**Supervisor:** Asst. Prof. Dr. Arda SEZEN  
**University:** Atılım Üniversitesi  
**Course:** CMPE/ISE/SE 494 - Graduation Project (2025–26)
