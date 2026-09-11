import React from 'react';
import { Activity, BarChart3, CheckCircle2 } from 'lucide-react';

export const ProgressSection: React.FC = () => {
  return (
    <section
      id="progresso"
      className="py-28 sm:py-36 lg:py-48 bg-[#080808] border-b border-white/10 relative overflow-hidden text-[#F5F5F0]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#171717] border border-white/10 text-[#B8F23D] text-[10px] font-mono uppercase tracking-widest font-bold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8F23D]" />
              <span>TELEMETRIA DE TREINO // SISTEMA PROPRIETÁRIO</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F5F5F0] tracking-tight uppercase font-display">
              30 DIAS.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#A6A6A0] max-w-md font-normal leading-relaxed">
            Acompanhe o que realmente move o ponteiro: regularidade semanal, aumento progressivo de carga e precisão biomecânica.
          </p>
        </div>

        {/* The Visually Gigantic "30" Monument with Superimposed Elements */}
        <div className="relative py-16 sm:py-24 my-6 rounded-3xl bg-[#111111] border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Gigantic "30" occupying a significant part of the screen */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
            <span className="text-[32vw] lg:text-[25rem] xl:text-[30rem] font-black tracking-tighter leading-none text-[#171717] font-display opacity-90 scale-110">
              30
            </span>
          </div>

          {/* Superimposed Editorial Nodes (01 COMEÇO, 15 CONSISTÊNCIA, 30 EVOLUÇÃO) */}
          <div className="relative z-10 px-6 sm:px-12 lg:px-16">
            
            <div className="flex items-center justify-between pb-6 mb-12 border-b border-white/10 text-xs font-mono text-[#A6A6A0] uppercase">
              <span className="font-bold text-[#F5F5F0] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B8F23D]" />
                VF / 30 CHECKPOINTS EM TEMPO REAL
              </span>
              <span className="text-[#B8F23D]">STATUS: ACTIVE</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">
              
              {/* Node 01: COMEÇO */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#171717]/85 backdrop-blur-md border border-white/10 hover:border-[#B8F23D]/40 transition-all duration-300 group">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-xs">
                  <span className="text-3xl sm:text-4xl font-black font-display text-[#F5F5F0] group-hover:text-[#B8F23D] transition-colors">
                    01
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#B8F23D] font-bold px-2 py-0.5 rounded-xs bg-[#080808] border border-white/10">
                    START
                  </span>
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B8F23D] font-bold block mb-1">
                  01 / 30
                </span>
                <h3 className="text-2xl font-black text-[#F5F5F0] uppercase font-display tracking-tight mb-2">
                  COMEÇO
                </h3>
                <p className="text-xs sm:text-sm text-[#A6A6A0] leading-relaxed">
                  Avaliação profunda, quebra do sedentarismo e primeiro desenho de rotina personalizado.
                </p>
              </div>

              {/* Node 15: CONSISTÊNCIA (Active Highlight) */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#171717]/95 backdrop-blur-md border border-[#B8F23D]/50 shadow-2xl relative group">
                <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#B8F23D] text-[#080808] text-[10px] font-mono uppercase tracking-widest font-black">
                  CHECKPOINT CHAVE
                </div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-xs">
                  <span className="text-3xl sm:text-4xl font-black font-display text-[#B8F23D]">
                    15
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#080808] font-black px-2 py-0.5 rounded-xs bg-[#B8F23D]">
                    PIVOT
                  </span>
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B8F23D] font-bold block mb-1">
                  15 / 30
                </span>
                <h3 className="text-2xl font-black text-[#F5F5F0] uppercase font-display tracking-tight mb-2">
                  CONSISTÊNCIA
                </h3>
                <p className="text-xs sm:text-sm text-[#A6A6A0] leading-relaxed">
                  O treino vira hábito. Ajuste de cargas, correção postural e fim da procrastinação mental.
                </p>
              </div>

              {/* Node 30: EVOLUÇÃO */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#171717]/85 backdrop-blur-md border border-white/10 hover:border-[#B8F23D]/40 transition-all duration-300 group">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-xs">
                  <span className="text-3xl sm:text-4xl font-black font-display text-[#F5F5F0] group-hover:text-[#B8F23D] transition-colors">
                    30
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#A6A6A0] font-bold px-2 py-0.5 rounded-xs bg-[#080808] border border-white/10">
                    TARGET
                  </span>
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B8F23D] font-bold block mb-1">
                  30 / 30
                </span>
                <h3 className="text-2xl font-black text-[#F5F5F0] uppercase font-display tracking-tight mb-2">
                  EVOLUÇÃO
                </h3>
                <p className="text-xs sm:text-sm text-[#A6A6A0] leading-relaxed">
                  Nova rotina instalada no piloto automático. Força aumentada, corpo transformado e autonomia total.
                </p>
              </div>

            </div>

            {/* Bottom Progress Bar */}
            <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A6A6A0]">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <span className="text-[10px] uppercase tracking-wider text-white/50">CICLO:</span>
                <div className="w-full sm:w-64 h-1.5 bg-[#080808] rounded-full overflow-hidden border border-white/10">
                  <div className="h-full bg-[#B8F23D] w-1/2 rounded-full" />
                </div>
                <span className="text-xs font-bold text-[#F5F5F0]">50%</span>
              </div>

              <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider">
                <span>FORMAT / 100% ONLINE</span>
                <span className="text-white/20">•</span>
                <span className="text-[#B8F23D]">VF-30 PROTOCOL</span>
              </div>
            </div>

          </div>

        </div>

        {/* 3 Demonstrative Performance Indicators in Dark Elevate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          
          {/* Metric 1 */}
          <div className="p-8 rounded-3xl bg-[#171717] text-[#F5F5F0] border border-white/10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#A6A6A0] mb-6">
                <span className="uppercase tracking-widest">MÉTRICA 01</span>
                <Activity className="w-4 h-4 text-[#B8F23D]" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#B8F23D] font-bold block mb-2">
                CONSISTÊNCIA
              </span>
              <div className="text-6xl sm:text-7xl font-black font-mono tracking-tight text-[#F5F5F0] mb-3">
                +24%
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#A6A6A0] leading-relaxed font-mono pt-6 border-t border-white/10">
              Aumento direto da taxa de frequência semanal sem quebras de ritmo.
            </p>
          </div>

          {/* Metric 2 */}
          <div className="p-8 rounded-3xl bg-[#111111] text-[#F5F5F0] border border-white/10 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#A6A6A0] mb-6">
                <span className="uppercase tracking-widest">MÉTRICA 02</span>
                <BarChart3 className="w-4 h-4 text-[#B8F23D]" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#A6A6A0] font-bold block mb-2">
                TREINOS
              </span>
              <div className="text-6xl sm:text-7xl font-black font-mono tracking-tight text-[#F5F5F0] mb-3">
                18
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#A6A6A0] leading-relaxed font-mono pt-6 border-t border-white/10">
              Sessões completadas com volume e intensidade calculados.
            </p>
          </div>

          {/* Metric 3 */}
          <div className="p-8 rounded-3xl bg-[#111111] text-[#F5F5F0] border border-white/10 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#A6A6A0] mb-6">
                <span className="uppercase tracking-widest">MÉTRICA 03</span>
                <CheckCircle2 className="w-4 h-4 text-[#B8F23D]" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#A6A6A0] font-bold block mb-2">
                ACOMPANHAMENTO
              </span>
              <div className="text-6xl sm:text-7xl font-black font-mono tracking-tight text-[#B8F23D] mb-3">
                100%
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#A6A6A0] leading-relaxed font-mono pt-6 border-t border-white/10">
              Dúvidas respondidas e ajustes semanais entregues na íntegra.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
