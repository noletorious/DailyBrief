import type { Quote } from '@/types/brief'

interface QuoteCardProps {
  quote: Quote
}

export function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <div
      className="relative rounded-xl border border-primary/20 overflow-hidden p-8"
      style={{
        background: 'linear-gradient(135deg, oklch(0.17 0.02 255) 0%, oklch(0.19 0.04 55 / 0.3) 100%)',
      }}
    >
      {/* Decorative quote mark */}
      <span
        className="absolute top-4 left-6 font-heading text-7xl text-primary/10 leading-none select-none pointer-events-none"
        aria-hidden
      >
        "
      </span>

      <blockquote className="relative space-y-4">
        <p className="font-heading text-lg sm:text-xl font-medium text-foreground leading-relaxed">
          {quote.text}
        </p>
        <footer className="text-sm text-primary font-medium">
          — {quote.author}
        </footer>
      </blockquote>
    </div>
  )
}
