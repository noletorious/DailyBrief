import { cn } from '@/lib/utils'
import type { StockPosition } from '@/types/stonks'

interface PortfolioTableProps {
  positions: StockPosition[]
}

export function PortfolioTable({ positions }: PortfolioTableProps) {
  const totalValue = positions.reduce((sum, p) => sum + p.currentPrice * p.shares, 0)
  const totalCost = positions.reduce((sum, p) => sum + p.avgCost * p.shares, 0)
  const totalGain = totalValue - totalCost
  const totalGainPct = (totalGain / totalCost) * 100

  return (
    <div className="space-y-3">
      {/* Summary row */}
      <div className="flex items-center justify-between px-1">
        <span className="text-sm text-muted-foreground">Portfolio value</span>
        <div className="text-right">
          <span className="font-heading font-semibold text-foreground font-mono">
            ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
          <span className={cn(
            "ml-2 text-xs font-mono font-medium",
            totalGain >= 0 ? 'text-gain' : 'text-loss'
          )}>
            {totalGain >= 0 ? '+' : ''}{totalGainPct.toFixed(2)}%
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/40 border-b border-border">
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Ticker</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden sm:table-cell">Shares</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden sm:table-cell">Avg Cost</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Price</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">P/L</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">Value</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((pos, i) => {
              const cost = pos.avgCost * pos.shares
              const value = pos.currentPrice * pos.shares
              const gain = value - cost
              const gainPct = (gain / cost) * 100
              const isGain = gain >= 0

              return (
                <tr
                  key={pos.id}
                  className={cn(
                    "border-b border-border/50 transition-colors hover:bg-secondary/30",
                    i === positions.length - 1 && "border-0"
                  )}
                >
                  <td className="px-4 py-3">
                    <div>
                      <span className="font-mono font-semibold text-foreground">{pos.ticker}</span>
                      <span className="block text-xs text-muted-foreground truncate max-w-[100px]">{pos.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-muted-foreground hidden sm:table-cell">
                    {pos.shares}
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-muted-foreground hidden sm:table-cell">
                    ${pos.avgCost.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 text-right font-mono font-medium text-foreground">
                    ${pos.currentPrice.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className={cn("font-mono text-xs font-semibold", isGain ? 'text-gain' : 'text-loss')}>
                      {isGain ? '+' : ''}{gainPct.toFixed(2)}%
                    </div>
                    <div className={cn("text-[10px] font-mono", isGain ? 'text-gain' : 'text-loss')}>
                      {isGain ? '+' : ''}${gain.toFixed(2)}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-foreground hidden md:table-cell">
                    ${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
