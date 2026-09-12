import React from 'react';
import { ArrowRight, CornerDownRight } from 'lucide-react';

interface HeroProps {
  onOpenEnrollment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrollment }) => {
  return (
    <section
      id="hero-cinematografico"
      className="relative min-h-[95vh] lg:min-h-screen pt-28 sm:pt-36 lg:pt-38 pb-14 bg-[#080808] border-b border-white/10 flex flex-col justify-between overflow-hidden"
    >
      {/* Cinematic Large Fitness Photography (Occupying 60-70% of the visual stage) */}
      <div className="absolute top-0 right-0 w-full lg:w-[68%] h-full pointer-events-none z-0 overflow-hidden">
        <img
          src="/images/hero-1200.webp"
          srcSet="/images/hero-640.webp 640w, /images/hero-1200.webp 1200w, /images/hero-1800.webp 1800w"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 68vw"
          alt="Atleta em preparação mental de alto rendimento — VittaFit"
          className="w-full h-full object-cover object-center filter contrast-[1.18] brightness-[0.72] grayscale-[30%] scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
          fetchPriority="high"
          width="1800"
          height="1200"
        />

        {/* Sophisticated Dark Integration Gradients */}
        {/* Left feathering to integrate with the #080808 text canvas */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/85 via-40% to-transparent" />
        {/* Top edge shadow for header readability */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#080808] via-[#080808]/70 to-transparent" />
        {/* Bottom edge shadow */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#080808] via-[#080808]/90 to-transparent" />
        {/* Cinematic subtle film grain vignette */}
        <div className="absolute inset-0 bg-[#080808]/20 mix-blend-multiply" />
      </div>

      {/* Editorial Architectural Hairline Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-25 z-0">
        <div className="max-w-7xl mx-auto h-full px-6 sm:px-8 lg:px-12 grid grid-cols-4 lg:grid-cols-12 gap-6 border-x border-white/10">
          <div className="col-span-1 border-r border-white/5 h-full hidden lg:block" />
          <div className="col-span-7 border-r border-white/5 h-full hidden lg:block" />
        </div>
      </div>

      {/* Top Editorial Metadata Strip */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 mb-6 sm:mb-10">
        <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-6 text-[11px] font-mono tracking-widest text-[#A6A6A0] uppercase border-b border-white/10 pb-3">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#B8F23D]" />
            <span className="font-bold text-[#F5F5F0]">VITTAFIT / 30</span>
            <span className="text-white/20">•</span>
            <span>PROGRAMA ONLINE</span>
          </div>

          <div className="hidden sm:flex items-center gap-6">
            <span className="text-[#A6A6A0]">PLANEJAMENTO PERSONALIZADO</span>
            <span className="text-white/20">•</span>
            <span className="text-[#B8F23D]">ACOMPANHAMENTO SEMANAL</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="bg-[#171717] text-[#B8F23D] border border-white/15 px-2.5 py-0.5 rounded-xs font-bold text-[10px]">
              30 DIAS
            </span>
            <span className="font-semibold text-[#F5F5F0]">NOVA ROTINA</span>
          </div>
        </div>
      </div>

      {/* Main Cinematic Stage: Asymmetric Typographic Monument & Overlays */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 flex-grow flex flex-col justify-center">
        
        {/* Massive Background Graphic Wordmark */}
        <div className="select-none pointer-events-none absolute -top-12 sm:-top-16 left-0 right-0 max-w-full opacity-[0.03] overflow-hidden -z-0">
          <span className="text-[20vw] font-black tracking-tighter leading-none block whitespace-nowrap font-display text-white">
            VITTAFIT
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end relative z-10">
          
          {/* Left / Typographic Monument (8 cols partially overlapping photography) */}
          <div className="lg:col-span-8 flex flex-col justify-end">
            
            {/* 1. Kicker: VITTAFIT / 30 */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <CornerDownRight className="w-4 h-4 text-[#B8F23D]" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#B8F23D]">
                VITTAFIT / 30
              </span>
            </div>

            {/* 2. Monumental Headline: SEU TREINO PRECISA DE DIREÇÃO. */}
            <h1 className="text-[clamp(3.5rem,9.5vw,8.25rem)] font-normal tracking-[0.01em] text-[#F5F5F0] leading-[0.85] sm:leading-[0.82] mb-6 sm:mb-8 uppercase font-heading break-words">
              SEU TREINO <br />
              PRECISA DE <br />
              <span className="text-[#B8F23D] tracking-[0.01em]">
                DIREÇÃO.
              </span>
            </h1>

            {/* 3. Subheadline */}
            <p className="text-base sm:text-xl text-[#A6A6A0] font-normal leading-relaxed max-w-xl mb-8 sm:mb-10 font-sans">
              Planejamento personalizado, acompanhamento contínuo e ajustes semanais para transformar treino improvisado em uma rotina que você consegue manter.
            </p>

            {/* 4. CTA Group & Contextual Link */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-3">
              <button
                type="button"
                id="hero-cta-button"
                onClick={onOpenEnrollment}
                className="btn-premium-primary px-8 sm:px-10 py-4 sm:py-5 rounded-full text-sm sm:text-base font-bold font-sans uppercase tracking-wider gap-3 cursor-pointer group shadow-2xl"
              >
                <span>COMEÇAR MEUS 30 DIAS →</span>
              </button>

              <a
                href="#jornada"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-[#A6A6A0] hover:text-[#B8F23D] transition-colors py-2 px-1 uppercase tracking-wider"
              >
                <span>CONHECER O MÉTODO</span>
                <span className="text-xs text-[#B8F23D]">↓</span>
              </a>
            </div>

            {/* 5. Microcopy abaixo do CTA */}
            <p className="text-xs sm:text-sm font-mono text-[#A6A6A0] mb-8 sm:mb-10">
              Avaliação inicial • Plano personalizado • Acompanhamento semanal
            </p>

            {/* Technical Campaign Tags */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-[11px] font-mono text-[#A6A6A0]">
              <div>
                <span className="block text-[#A6A6A0]/50 text-[9px] uppercase">DURAÇÃO</span>
                <span className="font-bold text-[#F5F5F0]">30 DIAS</span>
              </div>
              <div>
                <span className="block text-[#A6A6A0]/50 text-[9px] uppercase">FORMATO</span>
                <span className="font-bold text-[#F5F5F0]">ONLINE</span>
              </div>
              <div>
                <span className="block text-[#A6A6A0]/50 text-[9px] uppercase">MÉTODO</span>
                <span className="font-bold text-[#B8F23D]">PERSONALIZADO</span>
              </div>
              <div>
                <span className="block text-[#A6A6A0]/50 text-[9px] uppercase">OBJETIVO</span>
                <span className="font-bold text-[#F5F5F0]">ROTINA SUSTENTÁVEL</span>
              </div>
            </div>

          </div>

          {/* Right / Program Overview Card (4 cols) */}
          <div className="lg:col-span-4 relative mt-2 lg:mt-0">
            <div className="p-6 rounded-3xl bg-[#111111]/90 backdrop-blur-xl border border-white/15 text-[#F5F5F0] shadow-2xl">
              
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B8F23D]" />
                  <span className="text-[10px] font-mono tracking-widest text-[#B8F23D] uppercase font-bold">
                    VITTAFIT / 30
                  </span>
                </div>
                <span className="text-[10px] font-mono text-white/50 uppercase">
                  PROGRAMA ONLINE
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-[#A6A6A0] uppercase block">
                    FOCO DO CICLO
                  </span>
                  <h3 className="text-xl sm:text-2xl font-normal font-heading uppercase text-[#F5F5F0] tracking-[0.015em] leading-[0.95] mt-1 break-words">
                    Construção de Consistência Real
                  </h3>
                  <p className="text-xs text-[#A6A6A0] mt-1 leading-relaxed">
                    Sem fichas genéricas. Cada série planejada para a sua rotina e seu objetivo.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
                  <div className="p-3 rounded-2xl bg-[#171717] border border-white/5">
                    <span className="text-lg font-black font-mono text-[#B8F23D]">7 DIAS</span>
                    <span className="block text-[9px] font-mono text-[#A6A6A0] uppercase mt-0.5">AJUSTES SEMANAIS</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#171717] border border-white/5">
                    <span className="text-lg font-black font-mono text-[#F5F5F0]">DIRETO</span>
                    <span className="block text-[9px] font-mono text-[#A6A6A0] uppercase mt-0.5">SUPORTE ONLINE</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Bottom Continuous Scrolling Narrative Strip */}
      <div className="w-full border-t border-white/10 mt-10 pt-4 relative z-10 overflow-hidden bg-[#080808]">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-[11px] font-mono uppercase tracking-widest text-[#A6A6A0]">
          <span className="hidden sm:inline-block">CAOS → DIREÇÃO → CONSISTÊNCIA → EVOLUÇÃO</span>
          <span className="font-bold text-[#F5F5F0]">
            O CONCEITO CENTRAL: <span className="text-[#B8F23D]">30 DIAS. UMA NOVA ROTINA.</span>
          </span>
          <span className="hidden md:inline-block text-[#B8F23D]">ROLAR PARA EXPLORAR ↓</span>
        </div>
      </div>

    </section>
  );
};
