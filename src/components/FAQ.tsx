import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-24 sm:py-32 lg:py-40 bg-[#080808] border-b border-white/10 text-[#F5F5F0]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#171717] border border-white/10 text-[#B8F23D] text-[10px] font-mono uppercase tracking-widest font-bold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8F23D]" />
              <span>TRANSPARÊNCIA TOTAL</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-[#F5F5F0] tracking-tight uppercase font-display leading-[0.95] mb-6">
              DÚVIDAS <br />
              <span className="text-[#B8F23D]">FREQUENTES.</span>
            </h2>

            <p className="text-base text-[#A6A6A0] font-normal leading-relaxed max-w-sm mb-8">
              Tudo o que você precisa saber antes de iniciar seus 30 dias de acompanhamento.
            </p>

            <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-3 text-xs font-mono text-[#A6A6A0]">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>CANAL DE DÚVIDAS</span>
                <span className="font-bold text-[#F5F5F0]">SUPORTE DIRETO</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>TEMPO DE RESPOSTA</span>
                <span className="font-bold text-[#F5F5F0]">DIÁRIO</span>
              </div>
              <div className="flex justify-between">
                <span>GARANTIA</span>
                <span className="font-bold text-[#B8F23D]">7 DIAS INCONDICIONAIS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Dark Accordion (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-y border-white/10">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openId === item.id;
              const formattedIdx = String(idx + 1).padStart(2, '0');
              return (
                <div key={item.id} className="py-7 sm:py-8 transition-colors">
                  <button
                    type="button"
                    id={`faq-btn-${item.id}`}
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    className="w-full flex items-start justify-between text-left gap-6 group cursor-pointer focus:outline-hidden select-none"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono text-xs font-bold text-[#A6A6A0]/40 pt-1 group-hover:text-[#B8F23D] transition-colors">
                        {formattedIdx}
                      </span>
                      <span className="text-lg sm:text-xl font-black text-[#F5F5F0] tracking-tight group-hover:text-[#B8F23D] transition-colors">
                        {item.question}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                        isOpen
                          ? 'bg-[#B8F23D] text-[#080808]'
                          : 'bg-[#171717] border border-white/10 text-[#A6A6A0] group-hover:border-white/30'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-panel-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${item.id}`}
                      className="pt-4 pl-8 sm:pl-11 pr-8 text-sm sm:text-base text-[#A6A6A0] leading-relaxed animate-in fade-in-50 duration-200"
                    >
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
