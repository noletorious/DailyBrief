import { ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { StockNewsItem } from '@/types/stonks'
import { cn } from '@/lib/utils'

const SENTIMENT_COLORS = {
  positive: 'gain',
  negative: 'loss',
  neutral: 'secondary',
} as const

interface NewsFeedProps {
  items: StockNewsItem[]
}

export function NewsFeed({ items }: NewsFeedProps) {
  return (
    <div className="space-y-0 rounded-xl border border-border overflow-hidden">
      {items.map((item, i) => (
        <div
          key={item.id}
          className={cn(
            "flex items-start gap-4 px-4 py-4 hover:bg-secondary/30 transition-colors",
            i < items.length - 1 && "border-b border-border/50"
          )}
        >
          <div className="flex-1 min-w-0 space-y-1.5">
            <a
              href={item.url}
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors leading-snug"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
              <ExternalLink className="inline-block ml-1 h-3 w-3 opacity-50" />
            </a>
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
              {item.summary}
            </p>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] text-muted-foreground font-medium">{item.source}</span>
              <span className="text-[10px] text-muted-foreground/50">·</span>
              <span className="text-[10px] text-muted-foreground">{item.publishedAt}</span>
              {item.relatedTickers.slice(0, 3).map(t => (
                <Badge key={t} variant="outline" className="text-[10px] font-mono px-1.5 py-0">
                  {t}
                </Badge>
              ))}
              <Badge variant={SENTIMENT_COLORS[item.sentiment]} className="text-[10px]">
                {item.sentiment}
              </Badge>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
