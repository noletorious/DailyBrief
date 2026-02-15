export interface StockPosition {
  id: string
  ticker: string
  name: string
  shares: number
  avgCost: number
  currentPrice: number
}

export interface StockNewsItem {
  id: string
  title: string
  summary: string
  source: string
  url: string
  relatedTickers: string[]
  publishedAt: string
  sentiment: 'positive' | 'negative' | 'neutral'
}
