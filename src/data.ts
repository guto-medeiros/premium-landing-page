import { BenefitItem, StepItem, TestimonialItem, FaqItem, MilestoneItem } from './types';

export const PROGRAM_PRICE = {
  currency: 'R$',
  amount: 149,
  frequency: 'Pagamento único',
  periodDays: 30,
};

export const PROGRAM_INCLUSIONS = [
  'Avaliação inicial completa',
  'Treino personalizado para sua rotina',
  'Orientações detalhadas de execução',
  'Acompanhamento semanal com especialista',
  'Ajustes no planejamento conforme sua evolução',
  'Suporte online contínuo para dúvidas',
];

export const VITTA_MILESTONES: MilestoneItem[] = [
  {
    day: '01 / 30',
    phase: 'Começo',
    label: 'Clareza & Direção',
    description: 'Avaliação detalhada, entrega do plano sob medida e fim do treino no escuro.',
  },
  {
    day: '15 / 30',
    phase: 'Consistência',
    label: 'Rotina & Ajustes',
    description: 'Primeira checagem de adaptação, refinamento de cargas e ritmo consolidado.',
  },
  {
    day: '30 / 30',
    phase: 'Evolução',
    label: 'Resultado & Autonomia',
    description: 'Análise de métricas, comparação de progresso e base sólida para seguir evoluindo.',
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    id: 'benefit-1',
    number: '01',
    title: 'Treino personalizado',
    subtitle: 'Feito para o seu objetivo',
    description: 'Seu treino é estruturado de acordo com seu nível, rotina, disponibilidade e objetivo.',
  },
  {
    id: 'benefit-2',
    number: '02',
    title: 'Acompanhamento',
    subtitle: 'Você não fica sozinho',
    description: 'Receba orientação durante o programa e tire suas dúvidas sempre que precisar.',
  },
  {
    id: 'benefit-3',
    number: '03',
    title: 'Ajustes',
    subtitle: 'Seu treino acompanha sua evolução',
    description: 'Conforme você evolui, seu planejamento também pode ser ajustado.',
  },
  {
    id: 'benefit-4',
    number: '04',
    title: 'Clareza',
    subtitle: 'Saiba exatamente o que fazer',
    description: 'Chega de chegar à academia sem saber qual exercício fazer ou como organizar seu treino.',
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Conte seu objetivo',
    description: 'Você responde algumas perguntas sobre sua rotina, experiência e o que deseja alcançar.',
    durationBadge: 'Etapa inicial',
  },
  {
    number: '02',
    title: 'Receba seu plano',
    description: 'Nossa equipe analisa suas informações e prepara seu planejamento personalizado.',
    durationBadge: 'Até 48h úteis',
  },
  {
    number: '03',
    title: 'Comece a treinar',
    description: 'Você recebe todas as orientações necessárias para começar.',
    durationBadge: 'Acesso imediato',
  },
  {
    number: '04',
    title: 'Acompanhe sua evolução',
    description: 'Durante os 30 dias, você recebe acompanhamento e ajustes quando necessário.',
    durationBadge: '30 dias juntos',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Marina',
    age: 27,
    role: 'Designer Gráfica',
    city: 'São Paulo, SP',
    quote: 'Antes eu chegava na academia e fazia o que lembrava. Agora sei exatamente o que preciso fazer em cada treino.',
    tag: 'Foco & Organização',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    statHighlight: '+38% consistência',
  },
  {
    id: 'test-2',
    name: 'Lucas',
    age: 31,
    role: 'Engenheiro de Software',
    city: 'Belo Horizonte, MG',
    quote: 'O acompanhamento fez toda a diferença. Quando tive dificuldade com um exercício, consegui orientação e adaptei o treino.',
    tag: 'Orientação Técnica',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    statHighlight: 'Zero lesões / dor no ombro',
  },
  {
    id: 'test-3',
    name: 'Rafael',
    age: 24,
    role: 'Advogado',
    city: 'Curitiba, PR',
    quote: 'O mais importante para mim foi conseguir manter uma rotina. Ficou muito mais fácil quando eu tinha um plano.',
    tag: 'Rotina Consolidada',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    statHighlight: '4x por semana sem falhar',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Preciso frequentar academia?',
    answer: 'Não necessariamente. O planejamento pode ser adaptado de acordo com sua estrutura e disponibilidade, seja em academia convencional, espaço de condomínio ou treinos funcionais.',
  },
  {
    id: 'faq-2',
    question: 'O treino é realmente personalizado?',
    answer: 'Sim. O planejamento considera seus objetivos, experiência prévia, rotina semanal, histórico de lesões e todas as informações detalhadas fornecidas na avaliação inicial.',
  },
  {
    id: 'faq-3',
    question: 'Como funciona o acompanhamento?',
    answer: 'Você recebe orientações estruturadas e pode entrar em contato durante todo o período do programa de 30 dias para tirar dúvidas de execução, reportar sensação de esforço e receber os ajustes necessários.',
  },
  {
    id: 'faq-4',
    question: 'Posso treinar em casa?',
    answer: 'Sim. Dependendo dos seus objetivos e equipamentos disponíveis (elásticos, halteres ou mesmo peso corporal), o planejamento é 100% desenhado para o seu ambiente.',
  },
  {
    id: 'faq-5',
    question: 'Quanto tempo dura o programa?',
    answer: 'O programa inicial tem duração de 30 dias. É o período ideal para estabelecer consistência, aprender a executar com método e observar as primeiras transformações reais.',
  },
  {
    id: 'faq-6',
    question: 'Quando começo?',
    answer: 'Após a confirmação da contratação e preenchimento da avaliação inicial, seu planejamento personalizado é preparado e entregue em até 48 horas úteis.',
  },
];
