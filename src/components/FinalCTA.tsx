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
        
        {/* Gigantic Black Typography */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[8.5rem] font-black tracking-[-0.05em] text-[#080808] uppercase font-display leading-[0.93] sm:leading-[0.9] max-w-5xl mx-auto mb-8 select-none">
          PRONTO PARA <br />
          COMEÇAR?
        </h2>

        {/* Small Subtle Text */}
        <p className="text-lg sm:text-2xl text-[#080808]/85 font-medium max-w-xl mx-auto mb-12">
          Seu próximo treino pode começar hoje. Sem improviso, com método.
        </p>

        {/* Big Solid Black CTA Button */}
        <div>
          <button
            type="button"
            id="final-cta-button"
            onClick={onOpenEnrollment}
            className="inline-flex items-center justify-center gap-3 px-10 sm:px-16 py-5 sm:py-6 rounded-full bg-[#080808] text-[#F5F5F0] text-sm sm:text-base font-black uppercase tracking-wider hover:bg-[#171717] hover:scale-104 active:scale-98 transition-all duration-200 shadow-2xl cursor-pointer group"
          >
            <span>COMEÇAR MEU PROGRAMA</span>
            <ArrowRight className="w-5 h-5 text-[#B8F23D] transition-transform duration-200 group-hover:translate-x-1.5" />
          </button>
        </div>

        {/* Editorial Footnote */}
        <div className="mt-14 flex items-center justify-center gap-4 text-xs font-mono text-[#080808]/70 uppercase tracking-wider">
          <span>VF / 30</span>
          <span>•</span>
          <span>30 DIAS DE PROTOCOLO</span>
          <span>•</span>
          <span>R$ 149 PAGAMENTO ÚNICO</span>
        </div>

      </div>
    </section>
  );
};
