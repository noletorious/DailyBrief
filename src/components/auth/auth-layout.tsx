import React from 'react'

const BRIEF_ITEMS = [
  '💡 Project ideas with high return',
  '🎯 Big-tech interview prep',
  '📈 Your portfolio at a glance',
  '✨ A daily quote to stay sharp',
  '🌐 Curated content, your way',
]

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Branding panel — desktop only */}
      <div
        className="hidden md:flex md:w-1/2 lg:w-[45%] flex-col justify-between p-12 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, hsl(222 22% 10%) 0%, hsl(225 25% 14%) 60%, hsl(38 50% 16%) 100%)',
        }}
      >
        {/* Decorative orb */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, oklch(0.72 0.16 65) 0%, transparent 70%)',
            transform: 'translate(30%, -30%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, oklch(0.65 0.12 185) 0%, transparent 70%)',
            transform: 'translate(-30%, 30%)',
          }}
        />

        {/* Logo */}
        <div className="relative flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center">
            <span className="font-heading font-bold text-primary-foreground text-sm">DB</span>
          </div>
          <span className="font-heading font-semibold text-xl text-foreground">DailyBrief</span>
        </div>

        {/* Tagline */}
        <div className="relative space-y-6">
          <blockquote className="space-y-3">
            <p className="font-heading text-3xl font-semibold leading-tight text-foreground">
              Your day,<br />
              <span className="text-primary">briefed</span>.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              A curated daily feed of ideas, prep questions, market moves,
              and content — shaped by your interests.
            </p>
          </blockquote>

          <ul className="space-y-2.5">
            {BRIEF_ITEMS.map(item => (
              <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom note */}
        <p className="relative text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} DailyBrief
        </p>
      </div>

      {/* Form panel */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 sm:px-12">
        {/* Mobile logo */}
        <div className="md:hidden flex items-center gap-2.5 mb-10">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-heading font-bold text-primary-foreground text-xs">DB</span>
          </div>
          <span className="font-heading font-semibold text-lg text-foreground">DailyBrief</span>
        </div>
        {children}
      </div>
    </div>
  )
}
