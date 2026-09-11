export interface BenefitItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  durationBadge?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  age: number;
  role: string;
  city: string;
  quote: string;
  tag: string;
  avatarUrl: string;
  statHighlight?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface MilestoneItem {
  day: string;
  phase: string;
  label: string;
  description: string;
}
