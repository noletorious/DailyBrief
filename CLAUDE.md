# DailyBrief

## Mission

A personalized daily briefing app that surfaces actionable content — build ideas, interview prep, quotes, stock news, and a curated infinite scroll — and learns user interests over time through interaction tracking.

---

## Features

### Build Ideas
Suggests project ideas with high return / low effort. Each idea has a dropdown with: **Interested**, **Not Interested**, **Done**. Opening the brief without interacting = **Seen**. App infers preferences from history and the user's resume.

### Interview Prep
Big-tech interview questions (Google, Tesla, Robinhood, etc.) tailored to user's resume. User answers first, then sees a good sample answer.

### Quote of the Day
Single daily quote — motivational, cosmic, or practical.

### Stonks
- Portfolio tracker: add/edit/delete positions (ticker, shares, avg cost per share); display as chart
- News feed: tickers user owns + relevant world/industry news

### Healthy Infinite Scroll
Topic-filtered content feed. Users pick topics (with starter suggestions); filter UI stays minimal. Falls back to a curated default list when no filter is selected. Content sourced from external APIs or internal database.

### Interest Inference
User provides resume at onboarding. App tracks interactions (interested / not interested / seen / done) per brief item and infers preferences over time.

---

## Tech Stack

- **Frontend:** Vite + React 18 + TypeScript
- **Styling:** Tailwind CSS 4.0 + shadcn/ui
- **Animations:** Motion.dev (post-MVP)
- **Auth / DB:** Supabase (Auth + Postgres + Realtime)
- **ORM:** Prisma
- **Payments:** Stripe (post-MVP)
- **Testing:** Vitest + React Testing Library

---

## Layout

Left sidebar: logo at top, nav buttons (Brief, Stonks, Scroll, Profile), user settings button at bottom. Clicking user settings opens a modal with profile info and theme toggle. Main content area fills the rest. Sidebar collapses to hamburger on mobile. All components built with shadcn/ui.

---

## Routes

| Route | Description |
|---|---|
| `/login` | Email/password auth via Supabase |
| `/signup` | Registration with validation |
| `/forgot-password` | Password reset flow |
| `/dashboard` | Protected landing — daily brief |
| `/dashboard/stonks` | Portfolio + news |
| `/dashboard/scroll` | Infinite scroll feed |
| `/dashboard/profile` | Edit name, email, avatar |
| `/dashboard/billing` | Plan display + Stripe portal (post-MVP) |

---

## Database Schema

```prisma
model User {
  id            String    @id @default(uuid())
  email         String    @unique
  name          String?
  avatarUrl     String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  stripeCustomerId       String?   @unique
  stripeSubscriptionId   String?
  stripePriceId          String?
  stripeCurrentPeriodEnd DateTime?

  subscription  Subscription?
}

model Subscription {
  id        String   @id @default(uuid())
  userId    String   @unique
  user      User     @relation(fields: [userId], references: [id])
  status    String   // active, canceled, past_due, etc.
  planName  String   // "Pro", "Enterprise", etc.
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

Additional models (BriefItem, StockPosition, UserInteraction) added per feature.

---

## Guardrails

- **RLS mandatory** — every Supabase table has row-level security; users access only their own data
- **Type safety** — no `any` without an explanatory comment; use Prisma-generated types throughout
- **Stripe webhooks** — always verify signature; never trust client-side subscription status; handlers must be idempotent
- **No `.env` in git** — use `.env.example` as the committed template
- **shadcn/ui for all UI** — no custom component libraries; co-locate styles with Tailwind
- **Small components** — one responsibility each; no premature abstractions

---

## Environment Variables

```bash
# Supabase
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Stripe
VITE_STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# Database
DATABASE_URL=
```

---

## Session Continuity

- **CONTEXT.md** — update at end of each session: what was done, blockers, next steps
- **MEMORY.md** (`.claude/projects/…/memory/`) — persistent facts: API keys needed, decisions made, patterns confirmed
