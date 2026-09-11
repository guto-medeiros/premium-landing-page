import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section
      id="depoimentos"
      className="py-24 sm:py-36 lg:py-44 bg-[#111111] border-b border-white/10 relative overflow-hidden text-[#F5F5F0]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-16 border-b border-white/10">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#B8F23D] uppercase block mb-3">
              EXPERIÊNCIAS REAIS // HISTÓRIAS DE CICLO
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F5F0] tracking-tight uppercase font-display">
              QUEM TEM PLANO, <br />
              <span className="text-[#B8F23D]">TREINA DIFERENTE.</span>
            </h2>
          </div>

          <div className="text-right hidden md:block text-xs font-mono text-[#A6A6A0] uppercase tracking-wider">
            <span>AVALIAÇÕES DE QUEM COMPLETOU OS 30 DIAS</span>
            <span className="block font-bold text-[#F5F5F0] mt-0.5">VF ALUMNI PROTOCOL</span>
          </div>
        </div>

        {/* Hero Editorial Lead Testimonial (Spans Wide Space on Dark Elevated Card) */}
        <div className="p-8 sm:p-14 lg:p-18 rounded-3xl bg-[#171717] border border-white/10 shadow-2xl mb-16 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Massive Pull Quote (8 cols) */}
            <div className="lg:col-span-8">
              <div className="text-xs font-mono font-bold tracking-widest text-[#A6A6A0] uppercase mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B8F23D]" />
                <span>DEPOIMENTO EM DESTAQUE // 01</span>
              </div>

              <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#F5F5F0] leading-[1.14] tracking-tight font-display">
                «Antes eu chegava na academia e fazia o que lembrava. Agora sei exatamente o que preciso fazer.»
              </blockquote>

              <p className="mt-6 text-base text-[#A6A6A0] font-normal leading-relaxed">
                "Eliminei a ansiedade de ficar rodando pela sala procurando equipamento livre. Se o aparelho está ocupado, o plano já me dá a substituição imediata."
              </p>
            </div>

            {/* Author Attribution Card (4 cols) */}
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
                  alt="Marina, aluna VittaFit"
                  className="w-16 h-16 rounded-full object-cover grayscale contrast-125 border border-white/10"
                  loading="lazy"
                />

                <div>
                  <h3 className="text-lg font-black text-[#F5F5F0] uppercase tracking-tight">
                    MARINA
                  </h3>
                  <p className="text-xs font-mono text-[#A6A6A0] mt-0.5">
                    27 ANOS / SÃO PAULO, SP
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-1.5 text-xs font-mono text-[#A6A6A0]">
                  <div className="flex justify-between">
                    <span>PROGRAM</span>
                    <span className="font-bold text-[#F5F5F0]">30 DAYS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CONSISTÊNCIA</span>
                    <span className="font-bold text-[#B8F23D]">+38%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>STATUS</span>
                    <span className="font-bold text-[#080808] bg-[#B8F23D] px-1.5 rounded-xs">CONCLUÍDO</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Secondary Testimonials (Generous Asymmetric Space) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Testimonial 2: Lucas */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#171717] border border-white/10 flex flex-col justify-between hover:border-[#B8F23D]/40 transition-colors duration-300">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#A6A6A0] mb-6">
                <span>02 / SUPORTE TÉCNICO</span>
                <span className="text-[#B8F23D]">PROGRAM 30 DAYS</span>
              </div>

              <blockquote className="text-xl sm:text-2xl font-bold text-[#F5F5F0] leading-snug tracking-tight mb-6">
                "O acompanhamento fez toda a diferença. Quando tive dificuldade com um exercício, consegui orientação rápida e adaptei sem parar meu ritmo."
              </blockquote>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-extrabold text-[#F5F5F0] uppercase tracking-wider">
                  LUCAS, 31 ANOS
                </h4>
                <p className="text-xs font-mono text-[#A6A6A0]">
                  BELO HORIZONTE, MG
                </p>
              </div>
              <span className="text-xs font-mono text-[#B8F23D] font-bold bg-[#080808] px-2.5 py-1 rounded-sm border border-white/10">
                ZERO LESÕES
              </span>
            </div>
          </div>

          {/* Testimonial 3: Rafael */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#171717] border border-white/10 flex flex-col justify-between hover:border-[#B8F23D]/40 transition-colors duration-300">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#A6A6A0] mb-6">
                <span>03 / ROTINA CONSOLIDADA</span>
                <span className="text-[#B8F23D]">PROGRAM 30 DAYS</span>
              </div>

              <blockquote className="text-xl sm:text-2xl font-bold text-[#F5F5F0] leading-snug tracking-tight mb-6">
                "O mais importante para mim foi conseguir manter uma rotina consistente. Ficou muito mais simples quando eu tinha um plano traçado."
              </blockquote>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-extrabold text-[#F5F5F0] uppercase tracking-wider">
                  RAFAEL, 24 ANOS
                </h4>
                <p className="text-xs font-mono text-[#A6A6A0]">
                  CURITIBA, PR
                </p>
              </div>
              <span className="text-xs font-mono text-[#B8F23D] font-bold bg-[#080808] px-2.5 py-1 rounded-sm border border-white/10">
                4X POR SEMANA
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
