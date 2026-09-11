import React from 'react';
import { ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface ProblemSectionProps {
  onOpenEnrollment: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenEnrollment }) => {
  return (
    <section
      id="problema"
      className="py-28 sm:py-36 lg:py-44 bg-[#080808] text-[#F5F5F0] border-b border-white/10 relative overflow-hidden"
    >
      {/* Background Architectural Watermark */}
      <div className="absolute top-12 right-12 text-[11px] font-mono text-[#A6A6A0]/40 uppercase tracking-widest hidden md:block">
        VF / 30 // CONFRONTAÇÃO DE ROTINA
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#171717] border border-white/10 text-[#A6A6A0] text-[11px] font-mono uppercase tracking-widest mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
          <span>O DIAGNÓSTICO DO CICLO VICIOSO</span>
        </div>

        {/* Phase 1: Massive Headline Transition */}
        <div className="max-w-5xl mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[-0.045em] text-[#F5F5F0] leading-[0.93] uppercase font-display">
            TREINAR SEM PLANO <br />
            <span className="text-[#A6A6A0]/40 transition-colors">
              É SÓ REPETIR.
            </span>
          </h2>

          <p className="mt-8 text-xl sm:text-2xl text-[#A6A6A0] font-normal leading-relaxed max-w-2xl">
            Treinos aleatórios, falta de planejamento e ausência de acompanhamento fazem você perder tempo, esforço e motivação.
          </p>
        </div>

        {/* The Stark Transition Moment: Dramatic Contrast Highlight Box */}
        <div className="my-14 sm:my-24 p-8 sm:p-14 lg:p-16 rounded-3xl bg-[#111111] border border-white/10 relative overflow-hidden shadow-2xl">
          
          {/* Subtle Accent Glow Corner */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#B8F23D]/5 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#B8F23D] uppercase mb-5">
                <span className="w-2 h-2 rounded-full bg-[#B8F23D]" />
                <span>A VIRADA DE CHAVE // METODOLOGIA VF-30</span>
              </div>

              <h3 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-[#F5F5F0] uppercase font-display leading-[0.96]">
                DIREÇÃO <br />
                <span className="text-[#B8F23D]">MUDA TUDO.</span>
              </h3>

              <p className="mt-6 text-base sm:text-xl text-[#A6A6A0] max-w-xl leading-relaxed">
                Quando você sabe qual carga erguer, quantas séries executar e o que esperar de cada semana, o treino deixa de ser uma dúvida cansativa e se torna uma série contínua de pequenas vitórias diárias.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10">
              <div className="space-y-4 text-xs sm:text-sm font-mono text-[#A6A6A0]">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#171717] border border-white/5">
                  <span className="text-red-400 font-bold">IMPROVISO:</span>
                  <span className="text-white/80">Cansaço sem métricas</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#171717] border border-white/5">
                  <span className="text-[#B8F23D] font-bold">MÉTODO:</span>
                  <span className="text-white/80">Progressão calculada</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#171717] border border-[#B8F23D]/30">
                  <span className="text-[#B8F23D] font-bold">30 DIAS:</span>
                  <span className="text-[#F5F5F0] font-bold">Rotina consolidada</span>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={onOpenEnrollment}
                  className="w-full btn-premium-primary py-4 px-6 rounded-full text-xs font-black uppercase tracking-wider gap-2 cursor-pointer shadow-lg"
                >
                  <span>Mudar minha rotina</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#080808]" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Editorial 2-Column Realism Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 pt-8 border-t border-white/10">
          <div className="p-8 rounded-3xl bg-[#111111] border border-white/10 space-y-4">
            <span className="font-mono text-xs font-bold text-red-400 uppercase tracking-widest flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>O CICLO DA INCERTEZA</span>
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-[#F5F5F0] tracking-tight">
              Ir à academia no improviso custa caro
            </h4>
            <p className="text-sm sm:text-base text-[#A6A6A0] leading-relaxed">
              Você gasta tempo se deslocando, muda de aparelho porque não sabe o que substituir, e após meses de esforço a balança e o espelho continuam os mesmos. O cansaço vem da frustração, não do treino.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#111111] border border-white/10 space-y-4">
            <span className="font-mono text-xs font-bold text-[#B8F23D] uppercase tracking-widest flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>O MÉTODO VITTAFIT</span>
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-[#F5F5F0] tracking-tight">
              Ordem, estratégia e acompanhamento
            </h4>
            <p className="text-sm sm:text-base text-[#A6A6A0] leading-relaxed">
              A cada dia de treino, sua ficha está na palma da mão com orientações precisas de execução, tempo de descanso e cadência. Se a rotina apertar ou surgir um imprevisto, o plano se adapta a você.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
