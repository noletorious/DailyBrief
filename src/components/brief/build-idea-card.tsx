import { useState } from 'react'
import { MoreHorizontal, Star, ThumbsDown, CheckCircle, Eye } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import type { BuildIdea, BriefInteraction } from '@/types/brief'
import { cn } from '@/lib/utils'

const EFFORT_COLORS = {
  low: 'accent',
  medium: 'secondary',
  high: 'destructive',
} as const

const IMPACT_COLORS = {
  low: 'secondary',
  medium: 'default',
  high: 'accent',
} as const

interface BuildIdeaCardProps {
  idea: BuildIdea
}

export function BuildIdeaCard({ idea }: BuildIdeaCardProps) {
  const [interaction, setInteraction] = useState<BriefInteraction | null>(null)

  const statusLabel: Record<BriefInteraction, string> = {
    interested: 'Interested',
    not_interested: 'Not interested',
    seen: 'Seen',
    done: 'Done',
  }

  return (
    <Card className={cn(
      'transition-all duration-200',
      interaction === 'not_interested' && 'opacity-40',
      interaction === 'done' && 'border-accent/40',
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-base leading-snug">{idea.title}</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="shrink-0 h-7 w-7 -mt-0.5">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuItem onClick={() => setInteraction('interested')}>
                <Star className="h-4 w-4 text-primary" /> Interested
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setInteraction('not_interested')}>
                <ThumbsDown className="h-4 w-4" /> Not interested
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setInteraction('done')}>
                <CheckCircle className="h-4 w-4 text-accent" /> Done
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setInteraction('seen')}>
                <Eye className="h-4 w-4" /> Mark seen
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground leading-relaxed">{idea.description}</p>

        <div className="flex flex-wrap gap-1.5">
          <Badge variant={EFFORT_COLORS[idea.effort]}>
            {idea.effort} effort
          </Badge>
          <Badge variant={IMPACT_COLORS[idea.impact]}>
            {idea.impact} impact
          </Badge>
          {idea.searchVolume && (
            <Badge variant="outline" className="font-mono text-[10px]">
              {idea.searchVolume}
            </Badge>
          )}
          {idea.tags.map(tag => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>

        {interaction && (
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            Marked as: <span className="text-foreground font-medium">{statusLabel[interaction]}</span>
          </p>
        )}
      </CardContent>
    </Card>
  )
}
