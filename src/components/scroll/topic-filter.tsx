import { cn } from '@/lib/utils'
import type { ScrollTopic } from '@/types/scroll'

interface TopicFilterProps {
  topics: ScrollTopic[]
  activeTopic: string | null
  onToggle: (topicId: string) => void
}

export function TopicFilter({ topics, activeTopic, onToggle }: TopicFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onToggle('all')}
        className={cn(
          "px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-150",
          activeTopic === null
            ? "bg-primary border-primary text-primary-foreground"
            : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground bg-transparent"
        )}
      >
        All
      </button>
      {topics.map(topic => (
        <button
          key={topic.id}
          onClick={() => onToggle(topic.id)}
          className={cn(
            "px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-150",
            activeTopic === topic.id
              ? "bg-primary border-primary text-primary-foreground"
              : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground bg-transparent"
          )}
        >
          {topic.label}
        </button>
      ))}
    </div>
  )
}
