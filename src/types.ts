export interface BenefitItem {
  id: string;
  num: string;
  title: string;
  tag: string;
  desc: string;
  impact: string;
  imageUrl: string;
}

export interface StepItem {
  num: string;
  day: string;
  action: string;
  headline: string;
  description: string;
  meta: string;
}

export interface TestimonialItem {
  id: string;
  num: string;
  name: string;
  age?: number;
  city: string;
  quote: string;
  subquote?: string;
  tag: string;
  avatarUrl?: string;
  program: string;
  consistency?: string;
  status?: string;
  badge?: string;
  featured?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface MilestoneItem {
  code: string;
  tag: string;
  title: string;
  desc: string;
  status: string;
}

export interface ProgramPrice {
  currency: string;
  amount: number;
  frequency: string;
  periodDays: number;
  note?: string;
}
