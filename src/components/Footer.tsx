import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="site-footer"
      className="bg-[#050505] text-[#F5F5F0] pt-20 pb-16 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Brand & Narrative */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 pb-16 border-b border-white/10">
          
          <div className="max-w-md">
            <a
              href="#"
              className="inline-flex items-center gap-2.5 text-2xl font-black tracking-tight text-[#F5F5F0] mb-4 select-none group"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#B8F23D] transition-transform duration-300 group-hover:scale-125" />
              <span className="tracking-[-0.04em]">VITTAFIT®</span>
              <span className="text-[10px] font-mono tracking-widest text-[#B8F23D] bg-white/5 border border-white/10 px-2 py-0.5 rounded-xs ml-2">
                VF / 30
              </span>
            </a>

            <p className="text-xl font-bold text-[#F5F5F0] tracking-tight">
              30 dias. Uma nova rotina.
            </p>
            <p className="text-sm text-[#A6A6A0] mt-2 leading-relaxed font-normal">
              Acompanhamento fitness online sob medida para quem busca clareza de método, consistência diária e evolução contínua.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-mono uppercase tracking-wider text-[#A6A6A0]">
            <a href="#problema" className="hover:text-[#B8F23D] transition-colors py-1">
              Direção
            </a>
            <a href="#jornada" className="hover:text-[#B8F23D] transition-colors py-1">
              Jornada
            </a>
            <a href="#beneficios" className="hover:text-[#B8F23D] transition-colors py-1">
              Benefícios
            </a>
            <a href="#como-funciona" className="hover:text-[#B8F23D] transition-colors py-1">
              Processo
            </a>
            <a href="#progresso" className="hover:text-[#B8F23D] transition-colors py-1">
              Progresso
            </a>
            <a href="#depoimentos" className="hover:text-[#B8F23D] transition-colors py-1">
              Depoimentos
            </a>
            <a href="#oferta" className="hover:text-[#B8F23D] transition-colors py-1">
              Oferta
            </a>
            <a href="#faq" className="hover:text-[#B8F23D] transition-colors py-1">
              FAQ
            </a>
          </div>

          {/* Scroll to Top Button */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#F5F5F0] hover:text-[#080808] hover:bg-[#B8F23D] px-4 py-2.5 rounded-full border border-white/15 transition-all cursor-pointer"
              aria-label="Voltar ao topo da página"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Technical Strip: Cinematic Ending */}
        <div className="pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#A6A6A0]/60 font-mono">
          <p>© 2026 VittaFit. Projeto demonstrativo desenvolvido para portfólio.</p>
          <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#A6A6A0]/50">
            <span>FORMAT / ONLINE</span>
            <span>•</span>
            <span>PROGRAM / 30 DAYS</span>
            <span>•</span>
            <span>STATUS / ACTIVE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
