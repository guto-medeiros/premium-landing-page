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
              <span>ACOMPANHAMENTO DE EVOLUÇÃO</span>
            </div>
            <h2 className="text-[clamp(2.75rem,6.5vw,5.5rem)] font-normal text-[#F5F5F0] tracking-[0.01em] uppercase font-heading leading-[0.88] break-words">
              30 DIAS.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#A6A6A0] max-w-md font-normal leading-relaxed font-sans">
            Acompanhe o que realmente importa: regularidade semanal, evolução de carga e consolidação de uma rotina com direção.
          </p>
        </div>

        {/* The Visually Gigantic "30" Monument with Superimposed Elements */}
        <div className="relative py-16 sm:py-24 my-6 rounded-3xl bg-[#111111] border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Gigantic "30" occupying a significant part of the screen */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
            <span className="text-[clamp(8rem,25vw,22rem)] font-normal tracking-tight leading-none text-[#171717] font-heading opacity-90 select-none">
              30
            </span>
          </div>

          {/* Superimposed Editorial Nodes (01 COMEÇO, 15 CONSISTÊNCIA, 30 EVOLUÇÃO) */}
          <div className="relative z-10 px-6 sm:px-12 lg:px-16">
            
            <div className="flex items-center justify-between pb-6 mb-12 border-b border-white/10 text-xs font-mono text-[#A6A6A0] uppercase">
              <span className="font-bold text-[#F5F5F0] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B8F23D]" />
                VF / 30 • CHECKPOINTS DO CICLO
              </span>
              <span className="text-[#B8F23D]">ACOMPANHAMENTO SEMANAL</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">
              
              {/* Node 01: COMEÇO */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#171717]/85 backdrop-blur-md border border-white/10 hover:border-[#B8F23D]/40 transition-all duration-300 group">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-xs">
                  <span className="text-3xl sm:text-4xl font-normal font-heading text-[#F5F5F0] group-hover:text-[#B8F23D] transition-colors">
                    01
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#B8F23D] font-bold px-2 py-0.5 rounded-xs bg-[#080808] border border-white/10">
                    DIAGNÓSTICO
                  </span>
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B8F23D] font-bold block mb-1">
                  01 / 30
                </span>
                <h3 className="text-3xl sm:text-4xl font-normal text-[#F5F5F0] uppercase font-heading tracking-[0.015em] mb-2 leading-[0.92] break-words">
                  COMEÇO
                </h3>
                <p className="text-xs sm:text-sm text-[#A6A6A0] leading-relaxed font-sans">
                  Avaliação inicial, quebra da inércia e primeiro plano estruturado para a sua realidade.
                </p>
              </div>

              {/* Node 15: CONSISTÊNCIA */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#171717]/95 backdrop-blur-md border border-[#B8F23D]/50 shadow-2xl relative group">
                <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#B8F23D] text-[#080808] text-[10px] font-mono uppercase tracking-widest font-black">
                  CHECKPOINT CHAVE
                </div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-xs">
                  <span className="text-3xl sm:text-4xl font-normal font-heading text-[#B8F23D]">
                    15
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#080808] font-black px-2 py-0.5 rounded-xs bg-[#B8F23D]">
                    AJUSTE
                  </span>
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B8F23D] font-bold block mb-1">
                  15 / 30
                </span>
                <h3 className="text-3xl sm:text-4xl font-normal text-[#F5F5F0] uppercase font-heading tracking-[0.015em] mb-2 leading-[0.92] break-words">
                  CONSISTÊNCIA
                </h3>
                <p className="text-xs sm:text-sm text-[#A6A6A0] leading-relaxed font-sans">
                  O treino ganha ritmo regular. Ajustes de cargas, correções e consolidação do hábito.
                </p>
              </div>

              {/* Node 30: EVOLUÇÃO */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#171717]/85 backdrop-blur-md border border-white/10 hover:border-[#B8F23D]/40 transition-all duration-300 group">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-xs">
                  <span className="text-3xl sm:text-4xl font-normal font-heading text-[#F5F5F0] group-hover:text-[#B8F23D] transition-colors">
                    30
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#A6A6A0] font-bold px-2 py-0.5 rounded-xs bg-[#080808] border border-white/10">
                    CONSOLIDAÇÃO
                  </span>
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B8F23D] font-bold block mb-1">
                  30 / 30
                </span>
                <h3 className="text-3xl sm:text-4xl font-normal text-[#F5F5F0] uppercase font-heading tracking-[0.015em] mb-2 leading-[0.92] break-words">
                  NOVA ROTINA
                </h3>
                <p className="text-xs sm:text-sm text-[#A6A6A0] leading-relaxed font-sans">
                  30 dias completados com direção clara, força em evolução e autonomia construída para seguir.
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
                <span className="text-xs font-bold text-[#F5F5F0]">15 / 30 DIAS</span>
              </div>

              <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider">
                <span>FORMATO ONLINE</span>
                <span className="text-white/20">•</span>
                <span className="text-[#B8F23D]">ACOMPANHAMENTO INDIVIDUAL</span>
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
                <span className="uppercase tracking-widest">INDICADOR 01</span>
                <Activity className="w-4 h-4 text-[#B8F23D]" />
              </div>
              <h4 className="text-xl sm:text-2xl font-normal font-heading uppercase tracking-[0.015em] text-[#B8F23D] block mb-2 leading-none">
                ADERÊNCIA MÉDIA
              </h4>
              <div className="text-6xl sm:text-7xl font-normal font-heading tracking-normal text-[#F5F5F0] mb-3">
                87%
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#A6A6A0] leading-relaxed font-sans pt-6 border-t border-white/10">
              Taxa consistente de treinos executados ao longo do ciclo de 30 dias.
            </p>
          </div>

          {/* Metric 2 */}
          <div className="p-8 rounded-3xl bg-[#111111] text-[#F5F5F0] border border-white/10 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#A6A6A0] mb-6">
                <span className="uppercase tracking-widest">INDICADOR 02</span>
                <BarChart3 className="w-4 h-4 text-[#B8F23D]" />
              </div>
              <h4 className="text-xl sm:text-2xl font-normal font-heading uppercase tracking-[0.015em] text-[#F5F5F0] block mb-2 leading-none">
                SESSÕES CONCLUÍDAS
              </h4>
              <div className="text-6xl sm:text-7xl font-normal font-heading tracking-normal text-[#F5F5F0] mb-3">
                24
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#A6A6A0] leading-relaxed font-sans pt-6 border-t border-white/10">
              Treinos realizados com volume, cargas e descanso pré-definidos.
            </p>
          </div>

          {/* Metric 3 */}
          <div className="p-8 rounded-3xl bg-[#111111] text-[#F5F5F0] border border-white/10 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#A6A6A0] mb-6">
                <span className="uppercase tracking-widest">INDICADOR 03</span>
                <CheckCircle2 className="w-4 h-4 text-[#B8F23D]" />
              </div>
              <h4 className="text-xl sm:text-2xl font-normal font-heading uppercase tracking-[0.015em] text-[#B8F23D] block mb-2 leading-none">
                CHECKPOINTS
              </h4>
              <div className="text-6xl sm:text-7xl font-normal font-heading tracking-normal text-[#B8F23D] mb-3">
                4
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#A6A6A0] leading-relaxed font-sans pt-6 border-t border-white/10">
              Ajustes semanais entregues para adequar a progressão de cargas.
            </p>
          </div>

        </div>

        {/* Discreta indicação demonstrativa */}
        <p className="mt-8 text-center text-xs font-mono text-[#A6A6A0]/60">
          * Interface demonstrativa do acompanhamento de evolução do programa.
        </p>

      </div>
    </section>
  );
};
