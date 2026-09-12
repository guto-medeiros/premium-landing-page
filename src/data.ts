import { BenefitItem, StepItem, TestimonialItem, FaqItem, MilestoneItem, ProgramPrice } from './types';

export const PROGRAM_PRICE: ProgramPrice = {
  currency: 'R$',
  amount: 149,
  frequency: 'PAGAMENTO ÚNICO',
  periodDays: 30,
  note: 'Sem mensalidades automáticas ou cobranças surpresa.',
};

export const PROGRAM_INCLUSIONS: string[] = [
  'Avaliação inicial',
  'Treino personalizado',
  'Orientações',
  'Acompanhamento semanal',
  'Ajustes',
  'Suporte online',
];

export const VITTA_MILESTONES: MilestoneItem[] = [
  {
    code: '01 / 30',
    tag: 'CAOS',
    title: 'Diagnóstico & Alinhamento',
    desc: 'Avaliação inicial para mapear sua rotina, histórico e limitações. Fim da indecisão ao pisar na academia.',
    status: 'CAOS',
  },
  {
    code: '07 / 30',
    tag: 'DIREÇÃO',
    title: 'Primeira Quebra de Inércia',
    desc: 'Primeira semana de execução com checagem de cargas, postura e alinhamento de rotina.',
    status: 'DIREÇÃO',
  },
  {
    code: '15 / 30',
    tag: 'CONSISTÊNCIA',
    title: 'Consolidação de Hábito',
    desc: 'O treino deixa de ser esforço mental e passa a ser rotina com ajustes semanais de progressão.',
    status: 'CONSISTÊNCIA',
  },
  {
    code: '21 / 30',
    tag: 'EVOLUÇÃO',
    title: 'Autonomia & Ritmo',
    desc: 'A resistência mental desaparece. A execução ganha precisão e as cargas evoluem com método.',
    status: 'EVOLUÇÃO',
  },
  {
    code: '30 / 30',
    tag: 'NOVA ROTINA',
    title: 'Rotina Consolidada',
    desc: '30 dias completados com direcionamento claro, consistência construída e autonomia mantida.',
    status: 'NOVA ROTINA',
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    id: 'b-1',
    num: '01',
    title: 'TREINO PERSONALIZADO',
    tag: 'PARE DE IMPROVISAR',
    desc: 'Você sabe exatamente o que fazer quando chegar à academia.',
    impact: 'Treino estruturado para sua realidade',
    imageUrl: '/images/benefit-1.webp',
  },
  {
    id: 'b-2',
    num: '02',
    title: 'ACOMPANHAMENTO',
    tag: 'ORIENTAÇÃO SEMANAL',
    desc: 'Você não precisa descobrir sozinho se está no caminho certo.',
    impact: 'Evolução guiada com checkpoints regulares',
    imageUrl: '/images/benefit-2.webp',
  },
  {
    id: 'b-3',
    num: '03',
    title: 'AJUSTES',
    tag: 'ADAPTAÇÃO CONTÍNUA',
    desc: 'Sua rotina muda. Seu plano acompanha.',
    impact: 'Adaptação contínua sem perder o foco',
    imageUrl: '/images/benefit-3.webp',
  },
  {
    id: 'b-4',
    num: '04',
    title: 'CLAREZA',
    tag: 'PROPÓSITO EM CADA SÉRIE',
    desc: 'Saiba por que está treinando.',
    impact: 'Cada etapa aproxima você do seu objetivo',
    imageUrl: '/images/benefit-4.webp',
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    num: '01',
    day: 'ETAPA 01',
    action: 'OBJETIVO',
    headline: 'Defina seu objetivo',
    description: 'Entenda onde você está e onde quer chegar com uma avaliação clara da sua rotina e histórico.',
    meta: 'Avaliação inicial',
  },
  {
    num: '02',
    day: 'ETAPA 02',
    action: 'PLANO',
    headline: 'Receba seu plano',
    description: 'Um planejamento pensado para sua rotina, com divisão de exercícios, séries e orientações práticas.',
    meta: 'Até 48h úteis',
  },
  {
    num: '03',
    day: 'ETAPA 03',
    action: 'DIREÇÃO',
    headline: 'Treine com direção',
    description: 'Execute seu treino e acompanhe seu progresso sabendo o que fazer em cada sessão.',
    meta: 'Suporte contínuo',
  },
  {
    num: '04',
    day: 'ETAPA 04',
    action: 'EVOLUÇÃO',
    headline: 'Ajuste e evolua',
    description: 'Use o acompanhamento para tomar melhores decisões, revisar cargas e consolidar o hábito.',
    meta: 'Consolidação',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'marina',
    num: '01',
    name: 'MARINA',
    age: 27,
    city: 'SÃO PAULO, SP',
    quote: '«Antes eu chegava na academia e fazia o que lembrava. Agora sei exatamente o que preciso fazer.»',
    subquote: 'Com o plano organizado e orientações claras para substituir equipamentos cheios, parei de perder tempo e construí regularidade.',
    tag: 'CONSISTÊNCIA & CLAREZA',
    avatarUrl: '/images/testimonial-marina.webp',
    program: '30 DAYS',
    consistency: '4X POR SEMANA',
    status: 'CONCLUÍDO',
    badge: 'ROTINA CONSOLIDADA',
    featured: true,
  },
  {
    id: 'lucas',
    num: '02',
    tag: 'SUPORTE & ORIENTAÇÃO',
    program: 'PROGRAM 30 DAYS',
    quote: '"O acompanhamento fez toda a diferença. Quando tive dúvida sobre a execução de um exercício, recebi orientação rápida e continuei com segurança."',
    name: 'LUCAS, 31 ANOS',
    city: 'BELO HORIZONTE, MG',
    badge: 'MAIS SEGURANÇA',
  },
  {
    id: 'rafael',
    num: '03',
    tag: 'ROTINA CONSOLIDADA',
    program: 'PROGRAM 30 DAYS',
    quote: '"O mais importante para mim foi conseguir manter uma rotina consistente. Ficou muito mais simples quando eu tinha um plano traçado."',
    name: 'RAFAEL, 24 ANOS',
    city: 'CURITIBA, PR',
    badge: '4X POR SEMANA',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Preciso frequentar academia?',
    answer: 'Não necessariamente. O planejamento é adaptado à sua estrutura e disponibilidade, seja em academia convencional, na academia do condomínio ou com treinos funcionais.',
  },
  {
    id: 'faq-2',
    question: 'O treino é realmente personalizado?',
    answer: 'Sim. O planejamento considera seus objetivos, histórico de treinos, limitações, tempo disponível e todas as informações fornecidas na avaliação inicial.',
  },
  {
    id: 'faq-3',
    question: 'Como funciona o acompanhamento?',
    answer: 'Você tem checkpoints semanais para reportar sua evolução e tirar dúvidas sobre execução ou cargas, além de canal direto para ajustes quando necessário.',
  },
  {
    id: 'faq-4',
    question: 'Posso treinar em casa?',
    answer: 'Sim. Caso prefira ou precise treinar em casa, o programa é montado considerando os equipamentos que você já tem ou utilizando o peso corporal.',
  },
  {
    id: 'faq-5',
    question: 'Quanto tempo dura o programa?',
    answer: 'O ciclo inicial tem duração de 30 dias. É o período ideal para construir consistência, aprender a executar com método e sentir a evolução na prática.',
  },
  {
    id: 'faq-6',
    question: 'Quando começo?',
    answer: 'Imediatamente após a confirmação. Você preenche a avaliação inicial e seu planejamento personalizado é entregue em até 48 horas úteis para você iniciar.',
  },
];
