# DailyBrief

A personalized daily briefing app. Feed yourself actionable content — project ideas, big-tech interview prep, stock news, a curated infinite scroll — and teach it your interests over time.

## Tech Stack

- **Frontend:** Vite + React 18 + TypeScript
- **Styling:** Tailwind CSS 4.0 + shadcn/ui
- **Auth/DB:** Supabase
- **ORM:** Prisma
- **Payments:** Stripe (coming soon)

## Prerequisites

- Node.js 20+
- A [Supabase](https://supabase.com) project (free tier works)
- A [Stripe](https://stripe.com) account (for payments, optional for now)

## Setup

```bash
git clone https://github.com/noletorious/DailyBrief.git
cd DailyBrief
npm install
cp .env.example .env
```

Fill in `.env` with your Supabase and Stripe keys.

## Run dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (backend only) |
| `VITE_STRIPE_PUBLIC_KEY` | Stripe publishable key |
| `STRIPE_SECRET_KEY` | Stripe secret key (backend only) |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret |
| `DATABASE_URL` | Prisma connection string (from Supabase) |

## Database

Apply the Prisma schema to your Supabase project:

```bash
npx prisma generate
npx prisma db push
```

Then apply the RLS policies in `supabase/migrations/001_rls_policies.sql` via the Supabase SQL editor.

## Build

```bash
npm run build
```

## Test

```bash
npm test
```
