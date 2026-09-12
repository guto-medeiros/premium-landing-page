import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onOpenEnrollment: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenEnrollment }) => {
  return (
    <section
      id="cta-final"
      className="py-28 sm:py-40 lg:py-52 bg-[#B8F23D] text-[#080808] relative overflow-hidden"
    >
      {/* Background Micro Coordinates */}
      <div className="absolute top-10 left-10 text-[11px] font-mono text-[#080808]/50 uppercase tracking-widest hidden sm:block">
        VITTAFIT® // SEASON 2026 // START PROTOCOL
      </div>
      <div className="absolute top-10 right-10 text-[11px] font-mono text-[#080808]/50 uppercase tracking-widest hidden sm:block">
        DAY 01 / 30
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        
        {/* Emotional and simple conclusion headline */}
        <h2 className="text-[clamp(3.25rem,8.5vw,7.5rem)] font-normal tracking-[0.01em] text-[#080808] uppercase font-heading leading-[0.85] max-w-5xl mx-auto mb-6 select-none break-words">
          PRONTO PARA <br />
          TREINAR COM DIREÇÃO?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-[#080808]/85 font-normal max-w-xl mx-auto mb-10 font-sans">
          Transforme os próximos 30 dias em uma rotina que você realmente consiga manter.
        </p>

        {/* Value Reinforcement Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12 max-w-2xl mx-auto">
          {['30 DIAS DE CICLO', 'ACOMPANHAMENTO INDIVIDUAL', 'AJUSTES SEMANAIS', 'GARANTIA TOTAL DE 7 DIAS'].map((tag) => (
            <span
              key={tag}
              className="px-3.5 py-1.5 rounded-full bg-[#080808]/10 text-[#080808] font-mono text-xs font-bold uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Big Solid Black CTA Button */}
        <div>
          <button
            type="button"
            id="final-cta-button"
            onClick={onOpenEnrollment}
            className="inline-flex items-center justify-center gap-3 px-10 sm:px-16 py-5 sm:py-6 rounded-full bg-[#080808] text-[#F5F5F0] text-sm sm:text-base font-bold font-sans uppercase tracking-wider hover:bg-[#171717] hover:scale-104 active:scale-98 transition-all duration-200 shadow-2xl cursor-pointer group"
          >
            <span>COMEÇAR MEUS 30 DIAS →</span>
            <ArrowRight className="w-5 h-5 text-[#B8F23D] transition-transform duration-200 group-hover:translate-x-1.5" />
          </button>
        </div>

        {/* Microtext Scarcity */}
        <p className="mt-6 text-xs sm:text-sm font-mono text-[#080808]/75 font-medium">
          Vagas limitadas para manter a qualidade do acompanhamento individual.
        </p>

      </div>
    </section>
  );
};
