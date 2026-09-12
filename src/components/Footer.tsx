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
              className="inline-flex items-center gap-2.5 text-4xl sm:text-5xl font-normal font-heading tracking-[0.02em] uppercase text-[#F5F5F0] mb-4 select-none group leading-none"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#B8F23D] transition-transform duration-300 group-hover:scale-125" />
              <span>VITTAFIT</span>
              <span className="text-[10px] font-mono tracking-widest text-[#B8F23D] bg-white/5 border border-white/10 px-2 py-0.5 rounded-xs ml-2">
                VF / 30
              </span>
            </a>

            <p className="text-lg sm:text-xl font-bold text-[#F5F5F0] tracking-tight font-sans">
              Treine com direção. Evolua com consistência.
            </p>
            <p className="text-sm text-[#A6A6A0] mt-2 leading-relaxed font-normal font-sans">
              Metodologia de treino e acompanhamento individual para criar consistência real e autonomia na sua rotina.
            </p>
          </div>

          {/* Navigation & Essential Links */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm font-sans font-medium text-[#A6A6A0]">
              <a href="#problema" className="hover:text-[#B8F23D] transition-colors py-1">
                Método
              </a>
              <a href="#beneficios" className="hover:text-[#B8F23D] transition-colors py-1">
                Benefícios
              </a>
              <a href="#como-funciona" className="hover:text-[#B8F23D] transition-colors py-1">
                Processo
              </a>
              <a href="#depoimentos" className="hover:text-[#B8F23D] transition-colors py-1">
                Depoimentos
              </a>
              <a href="#oferta" className="hover:text-[#B8F23D] transition-colors py-1">
                Programa
              </a>
              <a href="#faq" className="hover:text-[#B8F23D] transition-colors py-1">
                FAQ
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#A6A6A0]/60">
              <a href="#" className="hover:text-[#F5F5F0] transition-colors">Privacidade</a>
              <span>•</span>
              <a href="#" className="hover:text-[#F5F5F0] transition-colors">Termos de Uso</a>
              <span>•</span>
              <a href="mailto:contato@vittafit.com" className="hover:text-[#F5F5F0] transition-colors">contato@vittafit.com</a>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[#F5F5F0] hover:text-[#080808] hover:bg-[#B8F23D] px-4 py-2.5 rounded-full border border-white/15 transition-all cursor-pointer"
              aria-label="Voltar ao topo da página"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Technical Strip: Sober ending */}
        <div className="pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#A6A6A0]/60 font-mono">
          <p>© 2026 VittaFit. Projeto conceitual desenvolvido para portfólio.</p>
          <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#A6A6A0]/50">
            <span>CICLO 30 DIAS</span>
            <span>•</span>
            <span>ACOMPANHAMENTO ONLINE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
