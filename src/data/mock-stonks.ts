import type { StockPosition, StockNewsItem } from '@/types/stonks'

export const mockPositions: StockPosition[] = [
  { id: 'p-1', ticker: 'AAPL', name: 'Apple Inc.', shares: 15, avgCost: 165.40, currentPrice: 189.30 },
  { id: 'p-2', ticker: 'TSLA', name: 'Tesla Inc.', shares: 8, avgCost: 240.00, currentPrice: 215.50 },
  { id: 'p-3', ticker: 'NVDA', name: 'NVIDIA Corp.', shares: 5, avgCost: 420.00, currentPrice: 875.40 },
  { id: 'p-4', ticker: 'GOOG', name: 'Alphabet Inc.', shares: 3, avgCost: 130.00, currentPrice: 168.20 },
  { id: 'p-5', ticker: 'AMZN', name: 'Amazon.com Inc.', shares: 6, avgCost: 178.00, currentPrice: 192.80 },
]

export const mockStockNews: StockNewsItem[] = [
  {
    id: 'n-1',
    title: 'Apple Vision Pro 2 reportedly entering mass production',
    summary: 'Supply chain sources indicate Apple has begun ramping production of its next-gen spatial computer, targeting a late-year launch.',
    source: 'The Verge',
    url: '#',
    relatedTickers: ['AAPL'],
    publishedAt: '2h ago',
    sentiment: 'positive',
  },
  {
    id: 'n-2',
    title: 'Tesla Cybertruck recall expanded to cover steering issue',
    summary: 'NHTSA has widened its investigation into the Cybertruck following reports of a power steering assist failure in cold weather conditions.',
    source: 'Reuters',
    url: '#',
    relatedTickers: ['TSLA'],
    publishedAt: '4h ago',
    sentiment: 'negative',
  },
  {
    id: 'n-3',
    title: 'NVIDIA announces next-gen Blackwell Ultra architecture',
    summary: 'Jensen Huang unveiled the successor to Blackwell, promising 3x throughput for AI inference workloads, aimed at data center deployments.',
    source: 'Ars Technica',
    url: '#',
    relatedTickers: ['NVDA'],
    publishedAt: '6h ago',
    sentiment: 'positive',
  },
  {
    id: 'n-4',
    title: 'Fed signals rate hold amid resilient labor market data',
    summary: 'Federal Reserve officials indicated they are in no rush to cut rates after January jobs report showed 256,000 new positions, above estimates.',
    source: 'Bloomberg',
    url: '#',
    relatedTickers: ['AAPL', 'GOOG', 'AMZN', 'TSLA', 'NVDA'],
    publishedAt: '8h ago',
    sentiment: 'neutral',
  },
]
