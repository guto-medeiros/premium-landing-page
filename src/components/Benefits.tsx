import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BENEFITS } from '../data';

export const Benefits: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

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

            <h2 className="text-[clamp(2.75rem,6.5vw,5.5rem)] font-normal text-[#F5F5F0] tracking-[0.01em] uppercase font-heading leading-[0.88] mb-8 break-words">
              O QUE MUDA <br />
              NOS PRÓXIMOS <br />
              <span className="text-[#B8F23D]">
                30 DIAS?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#A6A6A0] leading-relaxed max-w-sm font-normal mb-8 font-sans">
              Não é sobre passar horas a mais se cansando. É sobre ter um plano claro, acompanhamento semanal e ajustes que funcionam para a sua rotina.
            </p>

            {/* Program Structure Details */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3 text-xs font-mono text-[#A6A6A0]">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>DURAÇÃO DO CICLO</span>
                <span className="font-bold text-[#F5F5F0]">30 DIAS</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>CHECKPOINTS</span>
                <span className="font-bold text-[#F5F5F0]">SEMANAIS</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>FORMATO</span>
                <span className="font-bold text-[#F5F5F0]">ONLINE</span>
              </div>
              <div className="flex justify-between">
                <span>DIRECIONAMENTO</span>
                <span className="font-bold text-[#B8F23D]">INDIVIDUAL</span>
              </div>
            </div>
          </div>

          {/* Right / Interactive Editorial Benefits Sequence (7 cols) */}
          <div className="lg:col-span-7 space-y-4 min-w-0">
            {BENEFITS.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={item.id}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isActive}
                  onClick={() => setActiveIdx(activeIdx === idx ? -1 : idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveIdx(activeIdx === idx ? -1 : idx);
                    }
                  }}
                  className={`w-full overflow-hidden p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-300 cursor-pointer select-none focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B8F23D] ${
                    isActive
                      ? 'bg-[#171717] border-[#B8F23D]/50 shadow-2xl'
                      : 'bg-[#111111] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 sm:gap-4 w-full min-w-0">
                    <div className="flex items-start gap-3 sm:gap-5 min-w-0 flex-1">
                      <span
                        className={`font-mono text-2xl sm:text-3xl lg:text-4xl font-black shrink-0 pt-0.5 transition-colors ${
                          isActive ? 'text-[#B8F23D]' : 'text-[#A6A6A0]/40'
                        }`}
                      >
                        {item.num}
                      </span>

                      <div className="min-w-0 flex-1">
                        <span className={`text-[10px] sm:text-xs font-mono tracking-widest uppercase block font-bold mb-1 transition-colors truncate ${
                          isActive ? 'text-[#B8F23D]' : 'text-[#A6A6A0]/60'
                        }`}>
                          {item.tag}
                        </span>
                        <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-normal tracking-[0.015em] uppercase font-heading leading-[0.92] transition-colors break-words ${
                          isActive ? 'text-[#F5F5F0]' : 'text-[#F5F5F0]/85'
                        }`}>
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full shrink-0 flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-[#B8F23D] text-[#080808] rotate-45'
                          : 'bg-[#171717] border border-white/10 text-[#A6A6A0]'
                      }`}
                      aria-hidden="true"
                    >
                      <ArrowUpRight className="w-4 h-4 shrink-0" />
                    </div>
                  </div>

                  {/* Expanded Content with Safe Containment */}
                  {isActive && (
                    <div className="mt-5 pt-5 sm:mt-6 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between min-w-0 w-full animate-in fade-in-50 duration-200">
                      <div className="flex-1 min-w-0 space-y-3.5">
                        <p className="text-sm sm:text-base text-[#F5F5F0] font-normal leading-relaxed break-words font-sans">
                          «{item.desc}»
                        </p>
                        <div className="inline-flex flex-wrap items-center gap-2 text-xs font-mono text-[#A6A6A0] bg-[#080808] border border-white/10 px-3 py-1.5 rounded-lg max-w-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B8F23D] shrink-0" />
                          <span className="break-words">
                            IMPACTO: <strong className="text-[#B8F23D] font-bold">{item.impact}</strong>
                          </span>
                        </div>
                      </div>

                      <div className="w-full sm:w-36 md:w-44 aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-[#080808] border border-white/10 shrink-0">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover grayscale contrast-125 brightness-90"
                          loading="lazy"
                          width="600"
                          height="450"
                        />
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
