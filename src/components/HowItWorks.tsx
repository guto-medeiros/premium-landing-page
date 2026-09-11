import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenEnrollment: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenEnrollment }) => {
  const steps = [
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

  return (
    <section
      id="como-funciona"
      className="py-24 sm:py-32 lg:py-40 bg-[#111111] border-b border-white/10 relative overflow-hidden text-[#F5F5F0]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Editorial Subheader */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 mb-16 border-b border-white/10">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#B8F23D] uppercase block mb-3">
              JORNADA DOS 30 DIAS // PROCESSO
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F5F0] tracking-[-0.04em] uppercase font-display leading-[1.05] sm:leading-[0.95]">
              OBJETIVO <span className="text-white/30">→</span> PLANO <br className="hidden sm:block" />
              <span className="text-white/30 sm:hidden">→</span> TREINO <span className="text-white/30">→</span> <span className="text-[#B8F23D]">EVOLUÇÃO</span>
            </h2>
          </div>

          <div className="text-left lg:text-right max-w-sm">
            <p className="text-base text-[#A6A6A0] leading-relaxed font-normal">
              Um caminho linear, claro e sem burocracias. Cada etapa tem hora marcada para acontecer no seu ciclo.
            </p>
          </div>
        </div>

        {/* Continuous Horizontal Journey Grid on Desktop */}
        <div className="relative">
          {/* Subtle connecting rail */}
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-px bg-white/10 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#171717] border border-white/10 hover:border-[#B8F23D]/50 transition-all duration-300 group shadow-lg"
              >
                <div>
                  {/* Step Header with Monospace Day Marker */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                    <span className="font-mono text-xs font-black px-2.5 py-1 rounded-sm bg-[#080808] border border-white/10 text-[#F5F5F0] group-hover:border-[#B8F23D] group-hover:text-[#B8F23D] transition-colors">
                      {step.day}
                    </span>
                    <span className="font-mono text-2xl font-black text-[#B8F23D]">
                      {step.num}
                    </span>
                  </div>

                  {/* Flow Action Tag: OBJETIVO, PLANO, TREINO, EVOLUÇÃO */}
                  <div className="flex items-center gap-1.5 mb-2 text-xs font-mono font-extrabold text-[#F5F5F0] uppercase tracking-widest">
                    <span>{step.action}</span>
                    {idx < 3 ? <span className="text-white/30">→</span> : <span className="text-[#B8F23D] font-black">★</span>}
                  </div>

                  <h3 className="text-xl font-extrabold text-[#F5F5F0] tracking-tight mb-3">
                    {step.headline}
                  </h3>

                  <p className="text-sm text-[#A6A6A0] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#A6A6A0] uppercase">
                  <span>{step.meta}</span>
                  <span className="font-bold text-[#B8F23D]">FASE 0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner Prompt */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#B8F23D]" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#A6A6A0]">
              PROGRAMA 100% ONLINE E ASSÍNCRONO
            </span>
          </div>

          <button
            type="button"
            onClick={onOpenEnrollment}
            className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-[#B8F23D] hover:text-[#c6f94a] transition-all cursor-pointer"
          >
            <span>Iniciar no Day 01</span>
            <ArrowRight className="w-4 h-4 text-[#B8F23D]" />
          </button>
        </div>

      </div>
    </section>
  );
};
