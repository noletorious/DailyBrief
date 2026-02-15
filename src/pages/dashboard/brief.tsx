import { useAuth } from '@/hooks/use-auth'
import { mockBuildIdeas, mockInterviewQuestions, mockQuote } from '@/data/mock-brief'
import { BuildIdeaCard } from '@/components/brief/build-idea-card'
import { InterviewCard } from '@/components/brief/interview-card'
import { QuoteCard } from '@/components/brief/quote-card'

function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 17) return 'Good afternoon'
  return 'Good evening'
}

const DATE_OPTS: Intl.DateTimeFormatOptions = {
  weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
}

export default function BriefPage() {
  const { user } = useAuth()
  const name = user?.user_metadata?.name || user?.email?.split('@')[0] || 'there'
  const today = new Date().toLocaleDateString('en-US', DATE_OPTS)

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="text-xs text-muted-foreground font-mono mb-1">{today}</p>
        <h1 className="font-heading text-3xl font-bold text-foreground">
          {getGreeting()}, <span className="text-primary capitalize">{name}</span>
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">Here's your brief for today.</p>
      </div>

      {/* Quote */}
      <section>
        <p className="brief-section-heading">Quote of the Day</p>
        <QuoteCard quote={mockQuote} />
      </section>

      {/* Build Ideas */}
      <section>
        <p className="brief-section-heading">Build Ideas</p>
        <div className="space-y-3">
          {mockBuildIdeas.map(idea => (
            <BuildIdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      </section>

      {/* Interview Prep */}
      <section>
        <p className="brief-section-heading">Interview Prep</p>
        <div className="space-y-3">
          {mockInterviewQuestions.map(q => (
            <InterviewCard key={q.id} question={q} />
          ))}
        </div>
      </section>
    </div>
  )
}
