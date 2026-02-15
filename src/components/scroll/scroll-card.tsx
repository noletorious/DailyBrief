import { ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { ScrollItem } from '@/types/scroll'

interface ScrollCardProps {
  item: ScrollItem
}

const TOPIC_COLORS: Record<string, 'default' | 'accent' | 'secondary'> = {
  tech: 'default',
  design: 'accent',
  finance: 'secondary',
  ai: 'default',
  startups: 'secondary',
  career: 'accent',
}

export function ScrollCard({ item }: ScrollCardProps) {
  return (
    <div className="group py-5 border-b border-border/50 last:border-0">
      <div className="flex items-start gap-3">
        <div className="flex-1 min-w-0 space-y-1.5">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block font-medium text-foreground group-hover:text-primary transition-colors leading-snug text-sm"
          >
            {item.title}
            <ExternalLink className="inline-block ml-1 h-3 w-3 opacity-0 group-hover:opacity-50 transition-opacity" />
          </a>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {item.summary}
          </p>
          <div className="flex items-center gap-2 pt-0.5">
            <Badge variant={TOPIC_COLORS[item.topic] || 'secondary'} className="text-[10px]">
              {item.topic}
            </Badge>
            <span className="text-[10px] text-muted-foreground">{item.source}</span>
            <span className="text-[10px] text-muted-foreground/50">·</span>
            <span className="text-[10px] text-muted-foreground">{item.publishedAt}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
