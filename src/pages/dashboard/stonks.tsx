import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip'
import { PortfolioTable } from '@/components/stonks/portfolio-table'
import { NewsFeed } from '@/components/stonks/news-feed'
import { mockPositions, mockStockNews } from '@/data/mock-stonks'

export default function StonksPage() {
  return (
    <TooltipProvider>
      <div className="space-y-10">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-heading text-3xl font-bold text-foreground">Stonks</h1>
            <p className="mt-1 text-sm text-muted-foreground">Your portfolio and market news.</p>
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1.5 opacity-50 cursor-not-allowed">
                <Plus className="h-3.5 w-3.5" /> Add position
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Portfolio editing coming soon</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <section>
          <p className="brief-section-heading">Portfolio</p>
          <PortfolioTable positions={mockPositions} />
        </section>

        <section>
          <p className="brief-section-heading">News</p>
          <NewsFeed items={mockStockNews} />
        </section>
      </div>
    </TooltipProvider>
  )
}
