# Current State

## Last Session Summary

Built the full app shell from scratch:

- ✅ Vite + React 18 + TypeScript scaffolded
- ✅ Tailwind CSS 4.0 design system (Midnight Observatory theme: near-black navy, amber/gold primary, teal accent)
- ✅ shadcn/ui components written: button, input, label, card, badge, dialog, sheet, avatar, dropdown-menu, scroll-area, tooltip, skeleton, textarea, collapsible, select, separator
- ✅ Auth flow: login, signup, forgot-password with Supabase Auth (gracefully handles missing keys)
- ✅ Auth guard bypassed for dev — `ProtectedRoute` passes through without login (re-enable when Supabase keys are ready)
- ✅ Sidebar nav (logo, Brief/Stonks/Scroll/Profile, user settings) + mobile hamburger
- ✅ Dashboard pages with mock data: Brief, Stonks, Scroll, Profile, Billing
- ✅ Settings modal: user info, theme toggle (dark/light), sign out
- ✅ `npm run build` passes cleanly

## Active Blockers

- No Supabase keys provided yet — app renders/builds but auth fails with a console error
- No Stripe integration — billing page shows "Coming soon"

## Needed API Keys

To activate auth, add to `.env`:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
DATABASE_URL=postgresql://...
```

## Next Steps

1. **Connect Supabase** — user provides keys, test login/signup end-to-end
2. **Prisma + RLS** — run `npx prisma db push` and apply `supabase/migrations/001_rls_policies.sql`
3. **Profile save** — wire `handleSave` in `src/pages/dashboard/profile.tsx` to `supabase.auth.updateUser()`
4. **Stock positions** — add/edit/delete UI for portfolio (currently mock data only)
5. **Real content APIs** — replace mock data with actual sources (build ideas via AI, quotes via API, news via NewsAPI/Alpaca)
6. **Stripe** — add Stripe checkout session API endpoint + webhook handler

## Open Questions

- Which Supabase region? (affects latency)
- Should the Scroll feed use an external news API (NewsAPI, HackerNews) or internal curated content?
- Should portfolio positions be editable inline or via a modal form?
