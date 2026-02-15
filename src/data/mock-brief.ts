import type { BuildIdea, InterviewQuestion, Quote } from '@/types/brief'

export const mockBuildIdeas: BuildIdea[] = [
  {
    id: 'idea-1',
    title: 'Browser Extension for Salary Transparency',
    description: 'A Chrome/Firefox extension that overlays Glassdoor/Levels.fyi salary data when browsing job postings on LinkedIn, Indeed, or company career pages. People are constantly searching for this and there is no seamless overlay tool.',
    effort: 'low',
    impact: 'high',
    tags: ['browser extension', 'HR tech', 'data scraping'],
    searchVolume: '~40k/mo',
  },
  {
    id: 'idea-2',
    title: 'AI Receipt Splitter',
    description: 'Snap a photo of a restaurant bill, the app reads it with OCR, lets each person select their items, and auto-calculates split with tip. Venmo/CashApp deep link to pay. Simple enough for a weekend build with high viral potential.',
    effort: 'low',
    impact: 'high',
    tags: ['mobile', 'OCR', 'fintech', 'social'],
    searchVolume: '~25k/mo',
  },
  {
    id: 'idea-3',
    title: 'Changelog as a Service',
    description: 'SaaS tool that auto-generates beautiful, public-facing changelogs from GitHub commits + PR descriptions. Connect your repo, it surfaces a widget you embed in your app. Competitors exist but none are beautifully designed for dev teams.',
    effort: 'medium',
    impact: 'high',
    tags: ['dev tools', 'SaaS', 'GitHub API'],
    searchVolume: '~15k/mo',
  },
]

export const mockInterviewQuestions: InterviewQuestion[] = [
  {
    id: 'q-1',
    company: 'Google',
    role: 'Senior Frontend Engineer',
    question: 'Tell me about a time you had to make a significant architectural decision. What was the tradeoff, and how did you decide?',
    sampleAnswer: 'Strong answers include: (1) a concrete project with real stakes, (2) a clear description of 2-3 options considered, (3) the criteria used to evaluate (performance, maintainability, team skill, timeline), (4) what you chose and why, (5) the outcome and what you would do differently. Avoid vague answers — be specific about the tech.',
    difficulty: 'medium',
    category: 'behavioral',
  },
  {
    id: 'q-2',
    company: 'Tesla',
    role: 'Software Engineer',
    question: 'Design a real-time telemetry dashboard for 10,000 concurrent vehicles streaming sensor data.',
    sampleAnswer: 'Cover: WebSocket vs SSE for real-time delivery, Kafka for ingestion at scale, time-series DB (InfluxDB/TimescaleDB) for storage, aggregation tier to reduce frontend load, React with virtualized rendering for the UI, alerting logic for anomalies, graceful degradation when data is stale. Show you think about both backend scale and frontend performance.',
    difficulty: 'hard',
    category: 'system-design',
  },
  {
    id: 'q-3',
    company: 'Robinhood',
    role: 'Frontend Engineer',
    question: 'How would you optimize a React app that renders a 10,000-row financial data table in real-time?',
    sampleAnswer: 'Key points: (1) Virtual scrolling (react-window or react-virtual) to render only visible rows, (2) Memoization with React.memo and useMemo to avoid re-renders, (3) Web Workers for heavy computations off the main thread, (4) WebSocket connection management to batch updates, (5) Consider a canvas-based renderer (AG Grid Enterprise) for extreme performance.',
    difficulty: 'hard',
    category: 'technical',
  },
]

export const mockQuote: Quote = {
  id: 'q-today',
  text: 'The secret of getting ahead is getting started. The secret of getting started is breaking your complex, overwhelming tasks into small manageable tasks, and then starting on the first one.',
  author: 'Mark Twain',
  category: 'practical',
}
