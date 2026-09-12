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

            <h2 className="text-[clamp(3rem,7.5vw,6.5rem)] font-normal text-[#F5F5F0] tracking-[0.01em] uppercase font-heading leading-[0.85] mb-8 break-words">
              30 DIAS PARA <br />
              PARAR DE TREINAR <br />
              <span className="text-[#B8F23D]">
                NO IMPROVISO.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#A6A6A0] font-normal leading-relaxed max-w-xl mb-10 font-sans">
              Um plano personalizado, acompanhamento e ajustes para você construir uma rotina que consiga manter.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-white/10 text-xs font-mono text-[#A6A6A0]">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#B8F23D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#F5F5F0] block uppercase">GARANTIA DE 7 DIAS</span>
                  <span>7 dias incondicionais. Se não fizer sentido para sua rotina, o valor é devolvido integralmente.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Zap className="w-4 h-4 text-[#B8F23D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#F5F5F0] block uppercase">SUPORTE SEMANAL</span>
                  <span>Checkpoints a cada 7 dias para avaliar sua evolução e ajustar exercícios.</span>
                </div>
              </div>
            </div>

            {/* O que acontece logo após a confirmação */}
            <div className="mt-10 p-6 rounded-2xl bg-[#171717] border border-white/10">
              <h3 className="text-xl sm:text-2xl font-normal font-heading tracking-[0.015em] text-[#B8F23D] uppercase block mb-4 leading-tight break-words">
                O QUE ACONTECE APÓS A CONFIRMAÇÃO:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-[#A6A6A0]">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-[#F5F5F0] px-1.5 py-0.5 bg-[#080808] rounded-xs border border-white/10">1</span>
                  <span>Acesso imediato à plataforma</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-[#F5F5F0] px-1.5 py-0.5 bg-[#080808] rounded-xs border border-white/10">2</span>
                  <span>Questionário de rotina e objetivos</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-[#F5F5F0] px-1.5 py-0.5 bg-[#080808] rounded-xs border border-white/10">3</span>
                  <span>Entrega do seu plano em até 48h</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-[#B8F23D] px-1.5 py-0.5 bg-[#080808] rounded-xs border border-[#B8F23D]/30">4</span>
                  <span className="text-[#F5F5F0] font-bold">Início dos seus 30 dias</span>
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
                  <h3 className="text-3xl sm:text-4xl font-normal font-heading text-[#F5F5F0] tracking-[0.015em] uppercase leading-none break-words">
                    VITTAFIT / 30
                  </h3>
                </div>

                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#080808] border border-white/10 text-[#B8F23D]">
                  VF / 30
                </span>
              </div>

              {/* Inclusions List */}
              <div className="space-y-4 mb-10">
                <h4 className="text-xl sm:text-2xl font-normal font-heading tracking-[0.015em] text-[#B8F23D] uppercase block mb-4 leading-tight break-words">
                  ESTÁ INCLUSO NO PROGRAMA
                </h4>

                {PROGRAM_INCLUSIONS.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm sm:text-base font-normal text-[#F5F5F0] font-sans">
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
                  <span className="text-5xl sm:text-6xl font-normal font-heading tracking-normal text-[#F5F5F0]">
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
                className="w-full btn-premium-primary py-5 px-6 rounded-full text-sm font-bold font-sans uppercase tracking-wider gap-3 cursor-pointer group shadow-2xl"
              >
                <span>COMEÇAR MEUS 30 DIAS →</span>
                <ArrowRight className="w-4 h-4 text-[#080808] transition-transform duration-200 group-hover:translate-x-1.5" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
