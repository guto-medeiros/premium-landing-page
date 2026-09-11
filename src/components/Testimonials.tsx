import React from 'react';
import { TESTIMONIALS } from '../data';

export const Testimonials: React.FC = () => {
  const [featured, ...secondary] = TESTIMONIALS;

  return (
    <section
      id="depoimentos"
      className="py-24 sm:py-36 lg:py-44 bg-[#111111] border-b border-white/10 relative overflow-hidden text-[#F5F5F0]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-16 border-b border-white/10">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#B8F23D] uppercase block mb-3">
              EXPERIÊNCIAS REAIS // HISTÓRIAS DE CICLO
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F5F0] tracking-tight uppercase font-display">
              QUEM TEM PLANO, <br />
              <span className="text-[#B8F23D]">TREINA DIFERENTE.</span>
            </h2>
          </div>

          <div className="text-right hidden md:block text-xs font-mono text-[#A6A6A0] uppercase tracking-wider">
            <span>AVALIAÇÕES DE QUEM COMPLETOU OS 30 DIAS</span>
            <span className="block font-bold text-[#F5F5F0] mt-0.5">VF ALUMNI PROTOCOL</span>
          </div>
        </div>

        {/* Hero Editorial Lead Testimonial (Spans Wide Space on Dark Elevated Card) */}
        {featured && (
          <div className="p-8 sm:p-14 lg:p-18 rounded-3xl bg-[#171717] border border-white/10 shadow-2xl mb-16 relative">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Massive Pull Quote (8 cols) */}
              <div className="lg:col-span-8">
                <div className="text-xs font-mono font-bold tracking-widest text-[#A6A6A0] uppercase mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B8F23D]" />
                  <span>DEPOIMENTO EM DESTAQUE // {featured.num}</span>
                </div>

                <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#F5F5F0] leading-[1.14] tracking-tight font-display">
                  {featured.quote}
                </blockquote>

                {featured.subquote && (
                  <p className="mt-6 text-base text-[#A6A6A0] font-normal leading-relaxed">
                    "{featured.subquote}"
                  </p>
                )}
              </div>

              {/* Author Attribution Card (4 cols) */}
              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  {featured.avatarUrl && (
                    <img
                      src={featured.avatarUrl}
                      alt={`${featured.name}, aluna VittaFit`}
                      className="w-16 h-16 rounded-full object-cover grayscale contrast-125 border border-white/10"
                      loading="lazy"
                      width="64"
                      height="64"
                    />
                  )}

                  <div>
                    <h3 className="text-lg font-black text-[#F5F5F0] uppercase tracking-tight">
                      {featured.name}
                    </h3>
                    <p className="text-xs font-mono text-[#A6A6A0] mt-0.5">
                      {featured.age} ANOS / {featured.city}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 space-y-1.5 text-xs font-mono text-[#A6A6A0]">
                    <div className="flex justify-between">
                      <span>PROGRAM</span>
                      <span className="font-bold text-[#F5F5F0]">{featured.program}</span>
                    </div>
                    {featured.consistency && (
                      <div className="flex justify-between">
                        <span>CONSISTÊNCIA</span>
                        <span className="font-bold text-[#B8F23D]">{featured.consistency}</span>
                      </div>
                    )}
                    {featured.status && (
                      <div className="flex justify-between">
                        <span>STATUS</span>
                        <span className="font-bold text-[#080808] bg-[#B8F23D] px-1.5 rounded-xs">{featured.status}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Secondary Testimonials (Generous Asymmetric Space) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {secondary.map((item) => (
            <div
              key={item.id}
              className="p-8 sm:p-10 rounded-3xl bg-[#171717] border border-white/10 flex flex-col justify-between hover:border-[#B8F23D]/40 transition-colors duration-300"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#A6A6A0] mb-6">
                  <span>{item.num} / {item.tag}</span>
                  <span className="text-[#B8F23D]">{item.program}</span>
                </div>

                <blockquote className="text-xl sm:text-2xl font-bold text-[#F5F5F0] leading-snug tracking-tight mb-6">
                  {item.quote}
                </blockquote>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-[#F5F5F0] uppercase tracking-wider">
                    {item.name}
                  </h4>
                  <p className="text-xs font-mono text-[#A6A6A0]">
                    {item.city}
                  </p>
                </div>
                {item.badge && (
                  <span className="text-xs font-mono text-[#B8F23D] font-bold bg-[#080808] px-2.5 py-1 rounded-sm border border-white/10">
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
