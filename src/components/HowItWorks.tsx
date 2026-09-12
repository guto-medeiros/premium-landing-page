import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data';

interface HowItWorksProps {
  onOpenEnrollment: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenEnrollment }) => {
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
              COMO FUNCIONA
            </span>
            <h2 className="text-[clamp(2.75rem,6.5vw,5.5rem)] font-normal text-[#F5F5F0] tracking-[0.01em] uppercase font-heading leading-[0.88] break-words">
              DO PRIMEIRO TREINO <br />
              <span className="text-[#B8F23D]">À PRIMEIRA EVOLUÇÃO.</span>
            </h2>
          </div>

          <div className="text-left lg:text-right max-w-sm">
            <p className="text-base text-[#A6A6A0] leading-relaxed font-normal font-sans">
              Um caminho linear, claro e sem burocracias. Cada etapa foi desenhada para transformar intenção em consistência real.
            </p>
          </div>
        </div>

        {/* Continuous Horizontal Journey Grid on Desktop */}
        <div className="relative">
          {/* Subtle connecting rail */}
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-px bg-white/10 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
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

                  <h3 className="text-2xl sm:text-3xl font-normal text-[#F5F5F0] tracking-[0.015em] font-heading uppercase leading-[0.95] mb-3 break-words">
                    {step.headline}
                  </h3>

                  <p className="text-sm text-[#A6A6A0] leading-relaxed font-sans">
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
              PROGRAMA 100% ONLINE E PERSONALIZADO
            </span>
          </div>

          <button
            type="button"
            onClick={onOpenEnrollment}
            className="btn-premium-primary px-8 py-3.5 rounded-full text-xs font-bold font-sans uppercase tracking-wider gap-2 cursor-pointer shadow-lg"
          >
            <span>COMEÇAR MEUS 30 DIAS →</span>
          </button>
        </div>

      </div>
    </section>
  );
};
