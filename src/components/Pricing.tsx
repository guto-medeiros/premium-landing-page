import React from 'react';
import { ArrowRight, Check, ShieldCheck, Zap } from 'lucide-react';
import { PROGRAM_INCLUSIONS, PROGRAM_PRICE } from '../data';

interface PricingProps {
  onOpenEnrollment: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenEnrollment }) => {
  return (
    <section
      id="oferta"
      className="py-28 sm:py-36 lg:py-44 bg-[#111111] border-b border-white/10 relative overflow-hidden text-[#F5F5F0]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Asymmetric Culminating Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Monumental Typography & Program Manifesto (7 cols) */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#171717] border border-white/10 text-[#B8F23D] text-[10px] font-mono uppercase tracking-widest font-bold mb-6">
              <span>PROGRAMA OFICIAL</span>
              <span>•</span>
              <span>VITTAFIT / 30</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-[#F5F5F0] tracking-[-0.045em] uppercase font-display leading-[0.93] mb-8">
              30 DIAS PARA <br />
              COLOCAR SEU TREINO <br />
              <span className="text-[#B8F23D]">
                NOS TRILHOS.
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-[#A6A6A0] font-normal leading-relaxed max-w-xl mb-10">
              O investimento mais inteligente que você pode fazer pelo seu corpo este ano: trocar a tentativa e erro por um método que gera consistência real.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-white/10 text-xs font-mono text-[#A6A6A0]">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#B8F23D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#F5F5F0] block uppercase">GARANTIA DE 7 DIAS</span>
                  <span>Se o planejamento não atender sua expectativa, devolvemos 100%.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Zap className="w-4 h-4 text-[#B8F23D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#F5F5F0] block uppercase">ENTREGA RÁPIDA</span>
                  <span>Envio da sua ficha personalizada em até 48 horas úteis após a avaliação.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right: High-Contrast Dark Offer Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="p-7 sm:p-10 lg:p-12 rounded-3xl bg-[#171717] border border-white/15 shadow-2xl relative overflow-hidden">
              
              {/* Corner Badge */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#A6A6A0] uppercase font-bold block">
                    EDITION // 2026
                  </span>
                  <span className="text-xl font-black font-display text-[#F5F5F0] tracking-tight">
                    VITTAFIT / 30
                  </span>
                </div>

                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#080808] border border-white/10 text-[#B8F23D]">
                  VF / 30
                </span>
              </div>

              {/* Inclusions List */}
              <div className="space-y-4 mb-10">
                <span className="text-xs font-mono font-bold tracking-widest text-[#B8F23D] uppercase block mb-3">
                  ESTÁ INCLUSO NO PROGRAMA
                </span>

                {PROGRAM_INCLUSIONS.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm sm:text-base font-semibold text-[#F5F5F0]">
                    <div className="w-5 h-5 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#B8F23D] stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Price Callout */}
              <div className="pt-8 border-t border-white/10 mb-8">
                <span className="text-xs font-mono text-[#A6A6A0] uppercase tracking-wider block mb-1">
                  VALOR DO PROGRAMA COMPLETO
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl sm:text-6xl font-black font-mono tracking-tight text-[#F5F5F0]">
                    {PROGRAM_PRICE.currency} {PROGRAM_PRICE.amount}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#A6A6A0] uppercase">
                    {PROGRAM_PRICE.frequency}
                  </span>
                </div>
                <p className="text-xs text-[#A6A6A0]/60 font-mono mt-2">
                  {PROGRAM_PRICE.note}
                </p>
              </div>

              {/* Action Button: Vibrant Accent CTA */}
              <button
                type="button"
                id="pricing-cta-button"
                onClick={onOpenEnrollment}
                className="w-full btn-premium-primary py-5 px-6 rounded-full text-sm font-black uppercase tracking-wider gap-3 cursor-pointer group shadow-2xl"
              >
                <span>COMEÇAR OS 30 DIAS</span>
                <ArrowRight className="w-4 h-4 text-[#080808] transition-transform duration-200 group-hover:translate-x-1.5" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
