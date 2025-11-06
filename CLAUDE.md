# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern corporate website for 喜都科技（吉林省）有限公司 (Xidu Technology), built as a React SPA with TypeScript. It's a production-ready showcase website for a software development company offering AI development, SaaS, ERP, mini-programs, and game development services.

**Tech Stack**: React 18.3.1 + TypeScript + Vite 6.3.5 + Tailwind CSS v4.1.3 + Radix UI primitives

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (Vite on default port, typically 5173)
npm run dev

# Build for production
npm run build

# Build for GitHub Pages deployment
npm run build:github
```

## Architecture

### Core Structure

```
src/
├── App.tsx                    # Main app component
├── main.tsx                   # Entry point
├── index.css                  # Compiled Tailwind (1800+ lines)
├── components/
│   ├── Header.tsx             # Navigation with scroll effects
│   ├── Hero.tsx               # Animated hero section (Motion/Framer Motion)
│   ├── Services.tsx           # Services showcase
│   ├── Portfolio.tsx          # Case studies
│   ├── Testimonial.tsx        # Customer testimonials
│   ├── CTA.tsx                # Call-to-action section
│   ├── Footer.tsx             # Site footer
│   ├── ContactDialog.tsx      # Contact modal
│   ├── figma/
│   │   └── ImageWithFallback.tsx
│   └── ui/                    # shadcn/ui component library (60+ components)
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       └── [many more...]
├── styles/
│   └── globals.css            # Global styles with CSS custom properties
├── assets/logo/
│   └── xidu_tech.png
└── utils/
    └── env-example.ts         # Environment variable usage examples
```

### Architecture Pattern

- **Component-based architecture** with compositional patterns
- **Radix UI primitives** for accessibility (40+ components)
- **Class Variance Authority (CVA)** for component variants
- **Utility-first CSS** with Tailwind CSS
- **Motion (Framer Motion)** for animations
- **Path aliases**: '@' maps to ./src (see vite.config.ts:60)

### Key Libraries

- **React Router DOM** 7.9.5 - routing capabilities
- **React Hook Form** 7.55.0 - form handling
- **Lucide React** - icon library
- **Embla Carousel** - carousels
- **Recharts** 2.15.2 - data visualization
- **next-themes** - dark/light theme support
- **Sonner** - toast notifications

## Build Configuration

**Vite Config** (vite.config.ts):
- React SWC plugin for fast builds
- Path aliases for all dependencies (see lines 22-60)
- Environment-aware builds with `loadEnv`
- Base path configuration for GitHub Pages
- Source maps enabled for GitHub Pages builds
- Build output: `dist/` directory

**Environment Variables** (see README.md and vite.config.ts:74-76):
- `VITE_GITHUB_PAGES` - enables GitHub Pages mode
- `VITE_BASE_PATH` - custom base path for non-root repos
- `VITE_API_URL` - API endpoint configuration
- Built-time constants: `__APP_ENV__`, `__GITHUB_PAGES__`

## Deployment

**GitHub Pages** is configured via `.github/workflows/deploy.yml`:
- Automatically deploys on push to main/master
- Uses Node.js 20 LTS
- Runs `npm run build:github` for deployment
- **Important**: Update `base` path in vite.config.ts:14 if repo is not at root domain

## Styling System

- **Tailwind CSS v4.1.3** (latest version)
- **Dark theme primary** (#0B0B0D) with gradient accents
- **Inter + Noto Sans SC fonts** (Chinese support)
- Extensive **CSS custom properties** for theming
- Responsive design with md:, lg: breakpoints

## Key Notes

- **No testing framework** - Jest/Vitest not configured
- **No linting** - ESLint/Prettier not configured
- **Chinese documentation** in README.md
- **VitePress** documentation site in `.vitepress/`
- **Assets**: Logo in `src/assets/logo/`, WeChat QR in `public/` and `src/`

## Environment Setup

See environment configuration examples in:
- `src/utils/env-example.ts` - code usage examples
- `.env.example` - template for local environment variables
- `.env.github` - GitHub Pages configuration

Access environment variables in code via:
```javascript
import.meta.env.VITE_API_URL
__APP_ENV__        // built-time constant
__GITHUB_PAGES__   // built-time constant
```

## Component Development

When adding new components:
- Use **shadcn/ui** patterns from `src/components/ui/`
- Leverage **Radix UI primitives** for accessibility
- Use **class-variance-authority** for component variants
- Follow **utility-first** Tailwind CSS approach
- Access via path alias: `import Button from '@/components/ui/button'`
