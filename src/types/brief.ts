export interface BuildIdea {
  id: string
  title: string
  description: string
  effort: 'low' | 'medium' | 'high'
  impact: 'low' | 'medium' | 'high'
  tags: string[]
  searchVolume?: string
}

export interface InterviewQuestion {
  id: string
  company: string
  role: string
  question: string
  sampleAnswer: string
  difficulty: 'easy' | 'medium' | 'hard'
  category: 'behavioral' | 'technical' | 'system-design'
}

export interface Quote {
  id: string
  text: string
  author: string
  category: 'motivational' | 'cosmic' | 'practical'
}

export type BriefInteraction = 'interested' | 'not_interested' | 'seen' | 'done'
