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
    tag: 'CAOS → DIREÇÃO',
    title: 'Diagnóstico & Direção',
    desc: 'Fim dos treinos aleatórios. Avaliação inicial completa e entrega da estratégia sob medida.',
    status: 'START',
  },
  {
    code: '07 / 30',
    tag: 'ADAPTAÇÃO',
    title: 'Primeira Quebra de Inércia',
    desc: 'Primeira semana de execução com checagem de cargas, postura e alinhamento de rotina.',
    status: 'RITMO',
  },
  {
    code: '15 / 30',
    tag: 'CONSISTÊNCIA',
    title: 'Ajuste Fino de Meio de Ciclo',
    desc: 'O treino deixa de ser esforço mental e passa a ser rotina consolidada com ajustes precisos.',
    status: 'PIVOT',
  },
  {
    code: '21 / 30',
    tag: 'HABITUALIDADE',
    title: 'Autonomia & Domínio',
    desc: 'A resistência psicológica desaparece. O corpo responde à progressão de volume.',
    status: 'HÁBITO',
  },
  {
    code: '30 / 30',
    tag: 'EVOLUÇÃO',
    title: 'Nova Rotina Instalada',
    desc: 'Resultados mensuráveis, condicionamento elevado e clareza para manter a consistência.',
    status: 'RESULTADO',
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    id: 'b-1',
    num: '01',
    title: 'TREINO PERSONALIZADO',
    tag: 'INDIVIDUALIDADE BIOLÓGICA',
    desc: 'Nada de fichas genéricas de gaveta. O treino é construído exclusivamente para sua rotina, nível atual de condicionamento, limitações articulares e equipamentos disponíveis.',
    impact: 'Máxima eficiência por minuto investido',
    imageUrl: '/images/benefit-1.webp',
  },
  {
    id: 'b-2',
    num: '02',
    title: 'ACOMPANHAMENTO',
    tag: 'SUPORTE DIRETO E SEMANAL',
    desc: 'Você não fica sozinho com dúvidas. Tem canal direto para enviar vídeos de execução, tirar dúvidas sobre cadência ou ajustar a frequência conforme sua semana.',
    impact: 'Segurança técnica e motivação sustentada',
    imageUrl: '/images/benefit-2.webp',
  },
  {
    id: 'b-3',
    num: '03',
    title: 'AJUSTES',
    tag: 'PROGRESSÃO DE CARGAS & VOLUME',
    desc: 'O corpo se adapta rápido. A cada ciclo de 7 a 10 dias, analisamos a sua resposta ao estímulo e recalculamos pesos, repetições e densidade para evitar platôs.',
    impact: 'Evolução ininterrupta semana a semana',
    imageUrl: '/images/benefit-3.webp',
  },
  {
    id: 'b-4',
    num: '04',
    title: 'CLAREZA',
    tag: 'PREVISIBILIDADE & FOCO',
    desc: 'Você entra na academia sabendo exatamente a primeira série, o tempo de descanso no cronômetro e qual exercício fechará o dia. Sem hesitação, sem perda de tempo.',
    impact: 'Fim da incerteza mental antes de treinar',
    imageUrl: '/images/benefit-4.webp',
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    num: '01',
    day: 'DAY 01',
    action: 'OBJETIVO',
    headline: 'Avaliação & Anamnese',
    description: 'Você preenche nosso questionário aprofundado sobre rotina, objetivos, dores e disponibilidade de tempo.',
    meta: 'Etapa Inicial',
  },
  {
    num: '02',
    day: 'DAY 07',
    action: 'PLANO',
    headline: 'Estratégia Sob Medida',
    description: 'Receba seu planejamento estruturado com divisão de grupos musculares, séries, repetições e orientações em vídeo.',
    meta: 'Até 48h úteis',
  },
  {
    num: '03',
    day: 'DAY 15',
    action: 'TREINO',
    headline: 'Execução & Suporte Ativo',
    description: 'Você treina com total segurança. Qualquer dúvida sobre movimento ou desconforto é ajustada diretamente pelo suporte.',
    meta: 'Ajuste Fino',
  },
  {
    num: '04',
    day: 'DAY 30',
    action: 'EVOLUÇÃO',
    headline: 'Métricas & Consolidação',
    description: 'Checagem final de evolução de cargas, tônus muscular e bem-estar. Sua nova rotina está instalada.',
    meta: 'Ciclo Concluído',
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
    subquote: 'Eliminei a ansiedade de ficar rodando pela sala procurando equipamento livre. Se o aparelho está ocupado, o plano já me dá a substituição imediata.',
    tag: 'CONSISTÊNCIA & FOCO',
    avatarUrl: '/images/testimonial-marina.webp',
    program: '30 DAYS',
    consistency: '+38%',
    status: 'CONCLUÍDO',
    badge: 'ESTUDO DE CASO',
    featured: true,
  },
  {
    id: 'lucas',
    num: '02',
    tag: 'SUPORTE TÉCNICO',
    program: 'PROGRAM 30 DAYS',
    quote: '"O acompanhamento fez toda a diferença. Quando tive dificuldade com um exercício, consegui orientação rápida e adaptei sem parar meu ritmo."',
    name: 'LUCAS, 31 ANOS',
    city: 'BELO HORIZONTE, MG',
    badge: 'ZERO LESÕES',
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
