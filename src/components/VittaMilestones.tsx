import React from 'react';
import { VITTA_MILESTONES } from '../data';

export const VittaMilestones: React.FC = () => {
  return (
    <section
      id="jornada"
      className="py-20 sm:py-28 lg:py-36 bg-[#111111] border-b border-white/10 relative overflow-hidden text-[#F5F5F0]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header with Monospace Label */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs bg-[#171717] border border-white/10 text-[#B8F23D] text-[10px] font-mono uppercase tracking-widest font-bold mb-3">
              <span>VF / 30</span>
              <span>•</span>
              <span>CONCEITO CENTRAL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F5F0] tracking-tight uppercase font-display">
              30 DIAS. <span className="text-[#B8F23D]">UMA NOVA ROTINA.</span>
            </h2>
          </div>

          <div className="text-right hidden md:block font-mono text-xs text-[#A6A6A0] uppercase tracking-wider">
            <span>TRANSFORMAÇÃO ESTRUTURADA</span>
            <span className="block text-[#F5F5F0] font-bold mt-1">CAOS → DIREÇÃO → CONSISTÊNCIA → EVOLUÇÃO</span>
          </div>
        </div>

        {/* 5-Step Editorial Timeline Spread in Dark Surface */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6 pt-4">
          {VITTA_MILESTONES.map((m, index) => (
            <div
              key={m.code}
              className="flex flex-col justify-between p-6 rounded-2xl bg-[#171717] border border-white/10 hover:border-[#B8F23D]/60 transition-all duration-300 group shadow-lg"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-black tracking-wider text-[#F5F5F0] bg-[#080808] border border-white/10 px-2.5 py-1 rounded-sm group-hover:border-[#B8F23D] group-hover:text-[#B8F23D] transition-colors">
                    {m.code}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A6A6A0] font-bold">
                    {m.status}
                  </span>
                </div>

                <span className="text-[11px] font-mono uppercase font-bold text-[#B8F23D] tracking-wider block mb-2">
                  {m.tag}
                </span>

                <h3 className="text-lg font-extrabold text-[#F5F5F0] tracking-tight mb-3 group-hover:text-[#B8F23D] transition-colors">
                  {m.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A6A6A0] leading-relaxed">
                  {m.desc}
                </p>
              </div>

              {/* Progress Line */}
              <div className="mt-8 pt-4 border-t border-white/10">
                <div className="w-full bg-[#080808] h-1 rounded-full overflow-hidden">
                  <div
                    className="bg-[#B8F23D] h-full rounded-full transition-all duration-500 opacity-70 group-hover:opacity-100"
                    style={{ width: `${((index + 1) / 5) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Typographic Poster Statement: TREINE. AJUSTE. EVOLUA. */}
        <div className="mt-20 pt-16 border-t border-white/10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[-0.04em] text-[#F5F5F0] uppercase font-display leading-[0.95]">
                <span>TREINE.</span> <br />
                <span className="text-[#A6A6A0]/40 hover:text-[#F5F5F0] transition-colors">AJUSTE.</span> <br />
                <span className="text-[#F5F5F0] underline decoration-[#B8F23D] decoration-4 sm:decoration-8 underline-offset-8">
                  EVOLUA.
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-end lg:border-l lg:border-white/10 lg:pl-10">
              <span className="text-xs font-mono font-bold tracking-widest text-[#B8F23D] uppercase block mb-3">
                MANIFESTO VITTAFIT®
              </span>
              <p className="text-base sm:text-lg text-[#A6A6A0] leading-relaxed font-normal">
                Você não precisa de 2 horas por dia ou de treinos exaustivos que te deixam quebrado. Você precisa de método, progressão controlada e supervisão para os ajustes certos.
              </p>
              <div className="mt-6 flex items-center gap-3 font-mono text-xs text-[#A6A6A0]">
                <span className="w-2 h-2 rounded-full bg-[#B8F23D]" />
                <span>CICLO OFICIAL DE 30 DIAS</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
