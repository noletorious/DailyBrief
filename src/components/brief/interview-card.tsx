import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import type { InterviewQuestion } from '@/types/brief'
import { cn } from '@/lib/utils'

const DIFF_COLORS = { easy: 'accent', medium: 'default', hard: 'destructive' } as const
const CATEGORY_LABELS = {
  behavioral: 'Behavioral',
  technical: 'Technical',
  'system-design': 'System Design',
}

interface InterviewCardProps {
  question: InterviewQuestion
}

export function InterviewCard({ question }: InterviewCardProps) {
  const [open, setOpen] = useState(false)
  const [answered, setAnswered] = useState(false)

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className="flex flex-col gap-1.5 min-w-0 flex-1">
            <div className="flex items-center flex-wrap gap-1.5">
              <Badge variant="secondary">{question.company}</Badge>
              <Badge variant="outline">{CATEGORY_LABELS[question.category]}</Badge>
              <Badge variant={DIFF_COLORS[question.difficulty]}>{question.difficulty}</Badge>
            </div>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {question.role}
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm font-medium text-foreground leading-relaxed">
          {question.question}
        </p>

        {!answered ? (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setAnswered(true)}
          >
            I've answered — show sample
          </Button>
        ) : (
          <Collapsible open={open} onOpenChange={setOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1.5 text-primary hover:text-primary">
                {open ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                {open ? 'Hide' : 'See'} sample answer
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className={cn(
                "mt-3 p-4 rounded-lg bg-muted border-l-2 border-primary",
                "text-sm text-muted-foreground leading-relaxed"
              )}>
                {question.sampleAnswer}
              </div>
            </CollapsibleContent>
          </Collapsible>
        )}
      </CardContent>
    </Card>
  )
}
