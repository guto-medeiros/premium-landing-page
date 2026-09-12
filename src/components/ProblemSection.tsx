import React from 'react';
import { ArrowRight, Compass, Shuffle, TrendingDown } from 'lucide-react';

interface ProblemSectionProps {
  onOpenEnrollment: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenEnrollment }) => {
  const painPoints = [
    {
      num: '01',
      title: 'VOCÊ CHEGA.',
      subtitle: 'Não sabe exatamente qual treino fazer.',
      desc: 'Fica na dúvida entre repetições aleatórias, vídeos que viu na internet ou uma ficha antiga que já não faz sentido para o seu momento.',
      icon: Compass,
    },
    {
      num: '02',
      title: 'VOCÊ IMPROVISA.',
      subtitle: 'Muda exercícios, volume e intensidade sem uma direção clara.',
      desc: 'Se o aparelho está ocupado, você troca por qualquer outro sem saber se está mantendo a intensidade correta ou apenas gastando energia.',
      icon: Shuffle,
    },
    {
      num: '03',
      title: 'VOCÊ DESANIMA.',
      subtitle: 'Porque fica difícil enxergar se todo aquele esforço está realmente levando a algum lugar.',
      desc: 'Você se esforça, vai com regularidade nas primeiras semanas, mas sem acompanhamento e ajustes, o progresso estagna e a motivação acaba.',
      icon: TrendingDown,
    },
  ];

  return (
    <section
      id="problema"
      className="py-24 sm:py-32 lg:py-40 bg-[#080808] text-[#F5F5F0] border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-white/10 text-[#A6A6A0] text-xs font-mono uppercase tracking-widest mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B8F23D]" />
          <span>DIAGNÓSTICO</span>
        </div>

        {/* Headline */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <h2 className="text-[clamp(2.75rem,6.5vw,5.5rem)] font-normal tracking-[0.01em] text-[#F5F5F0] leading-[0.88] uppercase font-heading break-words">
            TREINAR SEM PLANO É FÁCIL. <br />
            <span className="text-[#A6A6A0]/60">
              Difícil é saber se você está evoluindo.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#A6A6A0] font-normal leading-relaxed max-w-2xl font-sans">
            A maioria das pessoas não desiste da academia por falta de força de vontade, mas por cansar de treinar no improviso sem ver resultados consistentes.
          </p>
        </div>

        {/* 3 Situations Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-24">
          {painPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="p-8 sm:p-10 rounded-3xl bg-[#111111] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs font-mono text-[#A6A6A0]">
                    <span className="font-bold text-[#B8F23D]">{item.num}</span>
                    <Icon className="w-4 h-4 text-[#A6A6A0]" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-normal text-[#F5F5F0] tracking-[0.015em] font-heading mb-2 uppercase leading-[0.95] break-words">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[#F5F5F0]/90 mb-3 font-sans">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-[#A6A6A0] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Transition Moment */}
        <div className="p-8 sm:p-14 lg:p-16 rounded-3xl bg-[#111111] border border-white/15 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-8">
              <span className="text-xs font-mono font-bold tracking-widest text-[#B8F23D] uppercase block mb-4">
                A TRANSIÇÃO
              </span>

              <h3 className="text-[clamp(2.75rem,6.5vw,5.5rem)] font-normal tracking-[0.01em] text-[#F5F5F0] uppercase font-heading leading-[0.88] break-words">
                DIREÇÃO <br />
                <span className="text-[#B8F23D]">MUDA TUDO.</span>
              </h3>

              <p className="mt-6 text-base sm:text-lg text-[#A6A6A0] max-w-xl leading-relaxed font-sans">
                Quando você sabe qual carga erguer, quantas séries executar e como progredir a cada semana, o treino ganha propósito — e a consistência acontece.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10">
              <div className="space-y-3 text-xs sm:text-sm font-mono text-[#A6A6A0] mb-8">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#171717] border border-white/5">
                  <span className="text-red-400 font-bold">SEM PLANO:</span>
                  <span className="text-white/80">Improviso e dúvida</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#171717] border border-[#B8F23D]/30">
                  <span className="text-[#B8F23D] font-bold">COM VITTAFIT:</span>
                  <span className="text-[#F5F5F0] font-bold">Direção e acompanhamento</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenEnrollment}
                className="w-full btn-premium-primary py-4 px-6 rounded-full text-xs font-bold font-sans uppercase tracking-wider gap-2 cursor-pointer shadow-lg"
              >
                <span>COMEÇAR MEUS 30 DIAS →</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
