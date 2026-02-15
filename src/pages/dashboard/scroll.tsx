import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { TopicFilter } from '@/components/scroll/topic-filter'
import { ScrollCard } from '@/components/scroll/scroll-card'
import { scrollTopics, mockScrollItems } from '@/data/mock-scroll'

export default function ScrollPage() {
  const [activeTopic, setActiveTopic] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState(5)

  const filtered = activeTopic
    ? mockScrollItems.filter(item => item.topic === activeTopic)
    : mockScrollItems

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const handleToggle = (topicId: string) => {
    if (topicId === 'all') {
      setActiveTopic(null)
    } else {
      setActiveTopic(prev => prev === topicId ? null : topicId)
    }
    setVisibleCount(5)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold text-foreground">Scroll</h1>
        <p className="mt-1 text-sm text-muted-foreground">Curated content by topic.</p>
      </div>

      <TopicFilter
        topics={scrollTopics}
        activeTopic={activeTopic}
        onToggle={handleToggle}
      />

      <div>
        {visible.length === 0 ? (
          <p className="text-sm text-muted-foreground py-8 text-center">
            No content for this topic yet.
          </p>
        ) : (
          <>
            <div>
              {visible.map(item => (
                <ScrollCard key={item.id} item={item} />
              ))}
            </div>
            {hasMore && (
              <div className="pt-6 text-center">
                <Button
                  variant="outline"
                  onClick={() => setVisibleCount(c => c + 5)}
                >
                  Load more
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
