import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, Loader2 } from 'lucide-react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'profile' | 'contact' | 'checkout' | 'success';

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<Step>('profile');
  const [objective, setObjective] = useState('Hipertrofia & Força');
  const [location, setLocation] = useState('Academia convencional');
  const [frequency, setFrequency] = useState('4x por semana');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setStep('profile');
      setIsLoading(false);
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validateContact = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Informe seu nome';
    if (!email.trim() || !email.includes('@')) newErrors.email = 'Informe um e-mail válido';
    if (!phone.trim() || phone.length < 9) newErrors.phone = 'Informe seu telefone / WhatsApp';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextToCheckout = () => {
    if (validateContact()) {
      setStep('checkout');
    }
  };

  const handleSimulatePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('success');
    }, 1500);
  };

  return (
    <div
      id="enrollment-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080808]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        id="enrollment-modal-container"
        className="relative w-full max-w-xl bg-[#111111] border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-[#F5F5F0]"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#171717]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B8F23D]" />
            <span className="text-sm font-extrabold text-[#F5F5F0] tracking-tight">
              VittaFit
            </span>
            <span className="text-xs text-[#A6A6A0] font-mono">• Programa 30 Dias</span>
          </div>

          <button
            type="button"
            id="modal-close-button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#A6A6A0] hover:text-[#F5F5F0] transition-colors cursor-pointer"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {step === 'profile' && (
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#B8F23D] uppercase block mb-2">
                PASSO 01 / 03 • SEU PERFIL
              </span>
              <h3 id="modal-title" className="text-2xl font-extrabold text-[#F5F5F0] tracking-tight mb-2">
                Qual é o seu objetivo principal?
              </h3>
              <p className="text-sm text-[#A6A6A0] mb-6">
                Usamos essas informações preliminares para direcionar sua avaliação inicial.
              </p>

              {/* Objectives */}
              <div className="space-y-2.5 mb-6">
                {[
                  'Hipertrofia & Força',
                  'Emagrecimento & Definição',
                  'Condicionamento & Saúde',
                  'Retomada consistente de rotina',
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setObjective(item)}
                    className={`w-full text-left p-3.5 rounded-xl border text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                      objective === item
                        ? 'border-[#B8F23D] bg-[#171717] text-[#B8F23D]'
                        : 'border-white/10 bg-[#171717]/60 hover:border-white/30 text-[#F5F5F0]'
                    }`}
                  >
                    <span>{item}</span>
                    {objective === item && <Check className="w-4 h-4 text-[#B8F23D]" />}
                  </button>
                ))}
              </div>

              {/* Location choice */}
              <div className="mb-6">
                <label className="block text-xs font-mono font-semibold uppercase text-[#A6A6A0] mb-2">
                  Onde você vai treinar?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Academia convencional', 'Em casa / condomínio'].map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => setLocation(loc)}
                      className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                        location === loc
                          ? 'border-[#B8F23D] bg-[#171717] text-[#B8F23D]'
                          : 'border-white/10 bg-[#171717]/60 hover:border-white/30 text-[#F5F5F0]'
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Frequency */}
              <div className="mb-8">
                <label className="block text-xs font-mono font-semibold uppercase text-[#A6A6A0] mb-2">
                  Frequência estimada de treino
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['3x por semana', '4x por semana', '5x por semana'].map((freq) => (
                    <button
                      key={freq}
                      type="button"
                      onClick={() => setFrequency(freq)}
                      className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                        frequency === freq
                          ? 'border-[#B8F23D] bg-[#171717] text-[#B8F23D]'
                          : 'border-white/10 bg-[#171717]/60 hover:border-white/30 text-[#F5F5F0]'
                      }`}
                    >
                      {freq}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep('contact')}
                className="w-full btn-premium-primary py-4 px-6 rounded-full font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xl"
              >
                <span>Avançar para contato</span>
                <ArrowRight className="w-4 h-4 text-[#080808]" />
              </button>
            </div>
          )}

          {step === 'contact' && (
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#B8F23D] uppercase block mb-2">
                PASSO 02 / 03 • SEUS DADOS
              </span>
              <h3 className="text-2xl font-extrabold text-[#F5F5F0] tracking-tight mb-2">
                Onde você quer receber seu plano?
              </h3>
              <p className="text-sm text-[#A6A6A0] mb-6">
                Seu acompanhamento semanal e avaliações serão enviados diretamente por esses canais.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-xs font-medium text-[#F5F5F0] mb-1.5">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex.: Mariana Costa"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#171717] text-[#F5F5F0] text-sm focus:border-[#B8F23D] focus:outline-hidden"
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#F5F5F0] mb-1.5">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="mariana@exemplo.com"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#171717] text-[#F5F5F0] text-sm focus:border-[#B8F23D] focus:outline-hidden"
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#F5F5F0] mb-1.5">
                    WhatsApp (com DDD)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 98765-4321"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#171717] text-[#F5F5F0] text-sm focus:border-[#B8F23D] focus:outline-hidden"
                  />
                  {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep('profile')}
                  className="py-3.5 px-5 rounded-full font-semibold text-xs border border-white/15 text-[#A6A6A0] hover:text-[#F5F5F0] hover:bg-[#171717] transition-colors cursor-pointer"
                >
                  Voltar
                </button>
                <button
                  type="button"
                  onClick={handleNextToCheckout}
                  className="flex-1 btn-premium-primary py-4 px-6 rounded-full font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                >
                  <span>Ir para confirmação</span>
                  <ArrowRight className="w-4 h-4 text-[#080808]" />
                </button>
              </div>
            </div>
          )}

          {step === 'checkout' && (
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#B8F23D] uppercase block mb-2">
                PASSO 03 / 03 • CONFIRMAÇÃO
              </span>
              <h3 className="text-2xl font-extrabold text-[#F5F5F0] tracking-tight mb-2">
                Resumo da Contratação
              </h3>
              <p className="text-sm text-[#A6A6A0] mb-6">
                Confirme os dados para ativar o seu programa de 30 dias.
              </p>

              {/* Summary Card */}
              <div className="p-5 rounded-2xl bg-[#171717] border border-white/10 mb-6 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div>
                    <h4 className="text-sm font-bold text-[#F5F5F0]">Programa VittaFit (30 dias)</h4>
                    <p className="text-xs text-[#A6A6A0]">Acompanhamento personalizado • Online</p>
                  </div>
                  <span className="text-lg font-bold font-mono text-[#B8F23D]">
                    R$ 149
                  </span>
                </div>

                <div className="text-xs text-[#A6A6A0] space-y-1">
                  <p><span className="font-semibold text-[#F5F5F0]">Atleta:</span> {name || 'Mariana Costa'}</p>
                  <p><span className="font-semibold text-[#F5F5F0]">Objetivo:</span> {objective} ({frequency})</p>
                  <p><span className="font-semibold text-[#F5F5F0]">Local:</span> {location}</p>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="mb-6">
                <label className="block text-xs font-mono font-semibold uppercase text-[#A6A6A0] mb-2">
                  Forma de Pagamento (Demonstrativa)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                      paymentMethod === 'pix'
                        ? 'border-[#B8F23D] bg-[#080808] text-[#B8F23D]'
                        : 'border-white/10 bg-[#171717] text-[#A6A6A0]'
                    }`}
                  >
                    PIX Instantâneo
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-[#B8F23D] bg-[#080808] text-[#B8F23D]'
                        : 'border-white/10 bg-[#171717] text-[#A6A6A0]'
                    }`}
                  >
                    Cartão de Crédito
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep('contact')}
                  disabled={isLoading}
                  className="py-3.5 px-5 rounded-full font-semibold text-xs border border-white/15 text-[#A6A6A0] hover:text-[#F5F5F0] hover:bg-[#171717] transition-colors cursor-pointer"
                >
                  Voltar
                </button>
                <button
                  type="button"
                  id="simulate-enrollment-button"
                  onClick={handleSimulatePayment}
                  disabled={isLoading}
                  className="flex-1 btn-premium-primary py-4 px-6 rounded-full font-bold text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 shadow-xl"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#080808]" />
                      <span>Ativando programa...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirmar e Ativar Programa</span>
                      <ArrowRight className="w-4 h-4 text-[#080808]" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-[#A6A6A0]/60 mt-4 font-mono">
                Ambiente seguro demonstrativo • Sem cobrança real
              </p>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-[#B8F23D] text-[#080808] flex items-center justify-center mx-auto mb-5 shadow-2xl">
                <Check className="w-8 h-8 stroke-[2.5]" />
              </div>

              <span className="text-xs font-mono font-bold tracking-widest text-[#B8F23D] uppercase block mb-2">
                CONFIRMAÇÃO CONCLUÍDA
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F0] tracking-tight mb-3">
                Bem-vindo à VittaFit!
              </h3>

              <p className="text-base text-[#A6A6A0] max-w-md mx-auto mb-8">
                Seu programa de 30 dias foi ativado. Você já pode dar o primeiro passo para treinar com propósito e direção.
              </p>

              {/* Next Steps Box */}
              <div className="text-left bg-[#171717] border border-white/10 rounded-2xl p-5 mb-8 space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase text-[#B8F23D] tracking-wider">
                  Próximos passos imediatos:
                </h4>
                <div className="space-y-2 text-xs text-[#A6A6A0]">
                  <div className="flex items-start gap-2">
                    <span className="font-mono font-bold text-[#F5F5F0]">1.</span>
                    <span>Enviamos o formulário detalhado de anamnese no seu e-mail e WhatsApp.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono font-bold text-[#F5F5F0]">2.</span>
                    <span>Nossa equipe preparará sua planilha personalizada em até 48 horas úteis.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono font-bold text-[#F5F5F0]">3.</span>
                    <span>Acompanhamento semanal e canal direto via WhatsApp liberados.</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full btn-premium-primary py-4 px-6 rounded-full font-bold text-sm cursor-pointer shadow-xl"
              >
                Concluir e voltar à página
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
