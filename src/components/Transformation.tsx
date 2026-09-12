import React from 'react';
import { ArrowRight } from 'lucide-react';

interface TransformationProps {
  onOpenEnrollment: () => void;
}

export const Transformation: React.FC<TransformationProps> = ({ onOpenEnrollment }) => {
  return (
    <section
      id="grande-momento"
      className="py-28 sm:py-40 lg:py-48 bg-[#050505] text-[#F5F5F0] relative overflow-hidden border-b border-white/10"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="max-w-7xl mx-auto h-full px-6 sm:px-8 lg:px-12 grid grid-cols-4 lg:grid-cols-12 gap-6 border-x border-white/5">
          <div className="col-span-1 border-r border-white/5 h-full hidden lg:block" />
          <div className="col-span-6 border-r border-white/5 h-full hidden lg:block" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Marker Strip */}
        <div className="flex items-center justify-between pb-8 mb-12 sm:mb-16 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs sm:text-sm font-black px-3 py-1 rounded-sm bg-[#171717] border border-white/15 text-[#B8F23D]">
              15 / 30
            </span>
            <span className="font-mono text-xs text-[#A6A6A0] tracking-widest uppercase">
              MEIO DE CICLO • CONSISTÊNCIA EM CONSTRUÇÃO
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 font-mono text-[11px] text-[#A6A6A0] uppercase tracking-widest">
            <span>ACOMPANHAMENTO SEMANAL</span>
            <span className="text-white/20">•</span>
            <span className="text-[#B8F23D]">PROGRAMA ONLINE</span>
          </div>
        </div>

        {/* Cinematic Asymmetrical Transformation Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 relative z-20">
            <h2 className="text-[clamp(3.5rem,8.5vw,7.5rem)] font-normal tracking-[0.01em] text-[#F5F5F0] uppercase font-heading leading-[0.85] select-none break-words">
              MENOS <br />
              <span className="text-[#A6A6A0]/40">DÚVIDA.</span> <br />
              <span className="mt-2 block">
                <span className="text-[#F5F5F0]">MAIS </span> <br />
                <span className="text-[#B8F23D] tracking-[0.01em]">CONSISTÊNCIA.</span>
              </span>
            </h2>

            <p className="mt-10 text-base sm:text-lg text-[#A6A6A0] max-w-xl font-normal leading-relaxed font-sans">
              A evolução deixa de depender apenas da motivação diária. Com um plano claro e suporte semanal, você constrói uma rotina que realmente consegue manter.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                type="button"
                id="transformation-cta-button"
                onClick={onOpenEnrollment}
                className="btn-premium-primary px-8 sm:px-10 py-4.5 sm:py-5 rounded-full text-xs sm:text-sm font-bold font-sans uppercase tracking-wider gap-3 cursor-pointer group shadow-2xl"
              >
                <span>COMEÇAR MEUS 30 DIAS →</span>
              </button>

              <span className="font-mono text-xs text-[#A6A6A0]">
                Vagas limitadas para garantir o acompanhamento individual.
              </span>
            </div>
          </div>

          {/* High-Fashion Athletic Photography (5 cols) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 z-10">
            <div className="absolute -inset-4 rounded-3xl bg-[#111111] border border-white/5 -z-10 transform -rotate-1 hidden sm:block" />

            <div className="aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden bg-[#111111] border border-white/10 shadow-2xl relative group">
              <img
                src="/images/transformation-800.webp"
                srcSet="/images/transformation-480.webp 480w, /images/transformation-800.webp 800w, /images/transformation-1200.webp 1200w"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                alt="Atleta focado durante treino estruturado VittaFit"
                className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:scale-104 transition-transform duration-700"
                loading="lazy"
                width="800"
                height="1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90" />

              {/* Minimalist overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#080808]/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-[10px] text-[#B8F23D] uppercase tracking-wider block font-bold">
                    VITTAFIT / 30
                  </span>
                  <span className="text-[#F5F5F0] font-semibold mt-0.5 block">
                    Treino com propósito e acompanhamento.
                  </span>
                </div>
                <div className="text-right pl-3 border-l border-white/10">
                  <span className="text-lg font-black font-mono text-[#B8F23D]">15</span>
                  <span className="text-[10px] text-white/40 block">/ 30 DIAS</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
