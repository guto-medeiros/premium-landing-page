import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface BenefitSystemItem {
  id: string;
  num: string;
  title: string;
  tag: string;
  desc: string;
  impact: string;
  imageUrl: string;
}

export const Benefits: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const benefits: BenefitSystemItem[] = [
    {
      id: 'b-1',
      num: '01',
      title: 'TREINO PERSONALIZADO',
      tag: 'INDIVIDUALIDADE BIOLÓGICA',
      desc: 'Nada de fichas genéricas de gaveta. O treino é construído exclusivamente para sua rotina, nível atual de condicionamento, limitações articulares e equipamentos disponíveis.',
      impact: 'Máxima eficiência por minuto investido',
      imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'b-2',
      num: '02',
      title: 'ACOMPANHAMENTO',
      tag: 'SUPORTE DIRETO E SEMANAL',
      desc: 'Você não fica sozinho com dúvidas. Tem canal direto para enviar vídeos de execução, tirar dúvidas sobre cadência ou ajustar a frequência conforme sua semana.',
      impact: 'Segurança técnica e motivação sustentada',
      imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'b-3',
      num: '03',
      title: 'AJUSTES',
      tag: 'PROGRESSÃO DE CARGAS & VOLUME',
      desc: 'O corpo se adapta rápido. A cada ciclo de 7 a 10 dias, analisamos a sua resposta ao estímulo e recalculamos pesos, repetições e densidade para evitar platôs.',
      impact: 'Evolução ininterrupta semana a semana',
      imageUrl: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'b-4',
      num: '04',
      title: 'CLAREZA',
      tag: 'PREVISIBILIDADE & FOCO',
      desc: 'Você entra na academia sabendo exatamente a primeira série, o tempo de descanso no cronômetro e qual exercício fechará o dia. Sem hesitação, sem perda de tempo.',
      impact: 'Fim da incerteza mental antes de treinar',
      imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section
      id="beneficios"
      className="py-24 sm:py-32 lg:py-40 bg-[#080808] border-b border-white/10 relative text-[#F5F5F0]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left / Editorial Headline (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#171717] border border-white/10 text-[#B8F23D] text-[11px] font-mono uppercase tracking-widest font-bold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8F23D]" />
              <span>SISTEMA DE 4 PILARES</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F5F5F0] tracking-[-0.04em] uppercase font-display leading-[0.94] mb-8">
              O QUE MUDA <br />
              NOS PRÓXIMOS <br />
              <span className="text-[#B8F23D]">
                30 DIAS?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#A6A6A0] leading-relaxed max-w-sm font-normal mb-8">
              Não é sobre passar horas a mais se cansando. É sobre ter um sistema inteligente, claro e supervisionado trabalhando a seu favor.
            </p>

            {/* Micro Metadata Technical Card */}
            <div className="p-5 rounded-2xl bg-[#111111] border border-white/10 space-y-3 text-xs font-mono text-[#A6A6A0]">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>METODOLOGIA</span>
                <span className="font-bold text-[#F5F5F0]">VITTA PROTOCOL</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>DURAÇÃO DO CICLO</span>
                <span className="font-bold text-[#F5F5F0]">30 DIAS</span>
              </div>
              <div className="flex justify-between">
                <span>TAXA DE ADERÊNCIA</span>
                <span className="font-bold text-[#B8F23D]">+94%</span>
              </div>
            </div>
          </div>

          {/* Right / Interactive Editorial Benefits Sequence (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {benefits.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={item.id}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isActive}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveIdx(idx);
                    }
                  }}
                  className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer select-none focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8F23D] ${
                    isActive
                      ? 'bg-[#171717] border-[#B8F23D]/50 shadow-2xl'
                      : 'bg-[#111111] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span
                        className={`font-mono text-3xl sm:text-4xl font-black transition-colors ${
                          isActive ? 'text-[#B8F23D]' : 'text-[#A6A6A0]/40'
                        }`}
                      >
                        {item.num}
                      </span>

                      <div>
                        <span className={`text-[10px] font-mono tracking-widest uppercase block font-bold mb-1 transition-colors ${
                          isActive ? 'text-[#B8F23D]' : 'text-[#A6A6A0]/60'
                        }`}>
                          {item.tag}
                        </span>
                        <h3 className={`text-xl sm:text-2xl font-black tracking-tight uppercase font-display transition-colors ${
                          isActive ? 'text-[#F5F5F0]' : 'text-[#F5F5F0]/80'
                        }`}>
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-[#B8F23D] text-[#080808] rotate-45'
                          : 'bg-[#171717] border border-white/10 text-[#A6A6A0]'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Expanded Content with Smooth Reveal */}
                  {isActive && (
                    <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-12 gap-6 animate-in fade-in-50 duration-200">
                      <div className="sm:col-span-8 space-y-4">
                        <p className="text-sm sm:text-base text-[#A6A6A0] leading-relaxed">
                          {item.desc}
                        </p>
                        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F5F5F0] bg-[#080808] border border-white/10 px-3 py-1.5 rounded-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B8F23D]" />
                          <span>IMPACTO: <span className="text-[#B8F23D]">{item.impact}</span></span>
                        </div>
                      </div>

                      <div className="sm:col-span-4">
                        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#080808] border border-white/10">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full object-cover grayscale contrast-125 brightness-90"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
