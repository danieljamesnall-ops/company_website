# Intel Global

A modern rebuild of [intelglobal.net](https://www.intelglobal.net/) — business and technology services with a premium design.

Built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## Documentation

- **[Setup & run on any device](docs/SETUP.md)** — Full install guide for macOS, Windows, and Linux

---

## Table of contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment variables](#environment-variables)
- [Running the app](#running-the-app)
- [Available commands](#available-commands)
- [Pages & routes](#pages--routes)
- [Project structure](#project-structure)
- [Customization](#customization)
- [Contact form API](#contact-form-api)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

---

## Features

- **Business model** aligned with intelglobal.net: consulting, web development, business support
- **Pages**: Home, Services, About, Why Us, Contact, Privacy, Terms
- **Contact form** with validation, inquiry reference IDs (`INQ-*`), and optional email notifications
- **Premium UI**: Navy/gold theme, glass cards, animations, fully responsive
- **SEO**: Sitemap, robots.txt, JSON-LD structured data, Open Graph metadata
- **UX**: FAQ accordion, cookie consent, scroll-to-top, custom 404, loading state
- **Security**: HTTP headers, input validation with Zod
- **Redirects** from legacy ed-tech URLs (`/shop`, `/courses`, etc.) to current pages

---

## Prerequisites

Install these before running the project:

| Software | Version | Required | Notes |
|----------|---------|----------|-------|
| **Node.js** | 18.18+ or 20+ | Yes | [nodejs.org](https://nodejs.org) — use LTS |
| **npm** | 9+ | Yes | Bundled with Node.js |
| **Git** | Latest | No | Only if cloning from a repository |
| **Resend account** | — | No | Only for live contact-form emails |

### Install Node.js

See **[docs/SETUP.md](docs/SETUP.md)** for step-by-step instructions on macOS, Windows, and Linux.

Quick option: download the LTS installer from [https://nodejs.org](https://nodejs.org).

### Verify installation

```bash
node -v   # e.g. v20.x.x or v22.x.x
npm -v    # e.g. 10.x.x
```

---

## Installation

### 1. Get the project

If you already have the folder:

```bash
cd /path/to/intelglobal
```

Or clone from Git:

```bash
git clone <your-repo-url>
cd intelglobal
```

### 2. Install dependencies

```bash
npm install
```

This installs Next.js, React, Tailwind, Framer Motion, and all other dependencies listed in `package.json`.

### 3. Configure environment (recommended)

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values (see [Environment variables](#environment-variables)).

---

## Environment variables

Copy `.env.example` to `.env.local` and set:

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production | Public site URL for SEO and metadata |
| `RESEND_API_KEY` | Optional | API key from [Resend](https://resend.com) for sending emails |
| `EMAIL_FROM` | Optional | Sender address (must be verified in Resend) |
| `NOTIFICATION_EMAIL` | Optional | Inbox that receives new contact inquiries |

**Local development example**

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=re_your_key_here
EMAIL_FROM=Intel Global <noreply@yourdomain.com>
NOTIFICATION_EMAIL=contact@intelglobal.net
```

> The site runs without Resend. The contact form UI works locally, but email delivery requires a valid `RESEND_API_KEY`.

Restart the dev server after changing `.env.local`.

---

## Running the app

### Development (recommended for local work)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

The dev server supports hot reload — changes to code update automatically.

### Production build (local test)

```bash
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000)

Use this to verify the app behaves correctly before deploying.

### Stop the server

Press `Ctrl + C` in the terminal.

### Run on a different port

```bash
npm run dev -- -p 3001
```

---

## Available commands

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Create optimized production build |
| `npm start` | Run production server (after `build`) |
| `npm run lint` | Run ESLint |

---

## Pages & routes

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, services preview, FAQ, contact CTA |
| `/services` | Technology consulting, website development, business support |
| `/about` | Company overview |
| `/why-us` | Why choose Intel Global |
| `/contact` | Contact form and company details |
| `/privacy` | Privacy policy |
| `/terms` | Terms & conditions |
| `/api/contact` | POST endpoint for contact form submissions |
| `/sitemap.xml` | Auto-generated sitemap |
| `/robots.txt` | Search engine directives |

**Legacy redirects** (from old ed-tech site):

| Old URL | Redirects to |
|---------|--------------|
| `/shop`, `/placement`, `/courses/*` | `/services` |
| `/study-abroad` | `/about` |
| `/pay`, `/cart`, `/checkout` | `/contact` |
| `/refund-policy` | `/terms` |

---

## Project structure

```
intelglobal/
├── src/
│   ├── app/                    # Next.js App Router pages & API
│   │   ├── api/contact/        # Contact form API route
│   │   ├── about/
│   │   ├── contact/
│   │   ├── services/
│   │   ├── why-us/
│   │   ├── privacy/
│   │   ├── terms/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── contact/            # Contact form
│   │   ├── home/               # Homepage sections
│   │   ├── layout/             # Header, footer, top bar
│   │   ├── seo/                # JSON-LD structured data
│   │   ├── shared/             # Reusable page components
│   │   └── ui/                 # Buttons, logo, badges
│   └── lib/
│       ├── data/
│       │   ├── site.ts         # Site config, nav, FAQs
│       │   └── services.ts     # Service definitions
│       ├── email.ts            # Resend email helpers
│       └── utils.ts
├── public/                     # Static assets
├── .env.example                # Environment variable template
├── next.config.ts              # Redirects & security headers
├── package.json
└── README.md
```

---

## Customization

### Company details

Edit `src/lib/data/site.ts`:

- Company name, tagline, description
- Email addresses (`contact@`, `info@`)
- Phone number
- Physical address
- Social media URLs (Facebook, LinkedIn)

### Services

Edit `src/lib/data/services.ts`:

- Service titles, descriptions, features
- Section anchor IDs (`#consulting`, `#web`, `#support`)

### Logo

The SVG logo lives in `src/components/ui/logo.tsx`. Replace or update the SVG paths, or swap in an image component if you have a brand asset.

### Styling

Global theme tokens and utilities are in `src/app/globals.css` (navy/gold palette, glass effects).

---

## Contact form API

**Endpoint:** `POST /api/contact`

**Request body (JSON)**

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+1 555 123 4567",
  "type": "consulting",
  "subject": "Website Inquiry — Technology Consulting",
  "message": "I need help with our tech stack."
}
```

**`type` values:** `general` | `consulting` | `web` | `support`

**Success response**

```json
{
  "success": true,
  "inquiryId": "INQ-ABC123",
  "message": "Thank you! Our team will respond within 24 hours."
}
```

When Resend is configured, the API sends:

1. A notification email to `NOTIFICATION_EMAIL`
2. A confirmation email to the submitter

---

## Deployment

### Vercel (recommended)

1. Push the project to GitHub, GitLab, or Bitbucket
2. Sign in at [vercel.com](https://vercel.com)
3. **Import** the repository
4. Add environment variables from `.env.example`
5. Deploy — Vercel detects Next.js automatically

Set `NEXT_PUBLIC_SITE_URL` to your production domain (e.g. `https://www.intelglobal.net`).

### Other platforms

Any Node.js host that supports Next.js works:

```bash
npm run build
npm start
```

Ensure `NEXT_PUBLIC_SITE_URL` and email env vars are set in the host's dashboard.

---

## Troubleshooting

### Port 3000 already in use

See [docs/SETUP.md — Troubleshooting](docs/SETUP.md#troubleshooting) for macOS, Windows, and Linux fixes.

### `next: command not found`

Run `npm install` first — dependencies are missing.

### `npm install` fails

- Confirm Node.js is 18.18 or newer: `node -v`
- Clear cache and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors after pulling updates

```bash
rm -rf node_modules .next
npm install
npm run build
```

### Contact form returns 500

- Check that `RESEND_API_KEY` is set in `.env.local`
- Verify `EMAIL_FROM` uses a domain verified in Resend
- Restart the dev server after env changes

### Styles or pages look broken

Hard-refresh the browser (`Cmd + Shift + R` on Mac, `Ctrl + Shift + R` on Windows) or clear the `.next` cache and restart:

```bash
rm -rf .next
npm run dev
```

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| Email | Resend (optional) |

---

## License

Private project. All rights reserved.
