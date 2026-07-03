import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Phone, Mail, Calendar, MessageSquare, CheckCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { specialties } from '../../data/specialties';

// Zod validation schema for Brazilian locales
const appointmentSchema = z.object({
  name: z.string().min(3, { message: 'O nome precisa ter pelo menos 3 caracteres' }),
  email: z.string().email({ message: 'Insira um endereço de e-mail válido' }),
  phone: z.string().min(10, { message: 'Insira um telefone válido com DDD (ex: 11999999999)' }),
  specialty: z.string().min(1, { message: 'Selecione uma especialidade de interesse' }),
  period: z.string().min(1, { message: 'Selecione o período de preferência' }),
  message: z.string().optional()
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

export const CTA: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      specialty: '',
      period: '',
      message: ''
    }
  });

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    // Log data for testing purposes (real clinic dashboard API integration endpoint placeholder)
    console.log('Agendamento solicitado:', data);
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };


  const whatsAppNumber = '5511999999999';
  const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
    'Olá, Dra. Helena. Gostaria de agendar uma consulta.'
  )}`;

  return (
    <section id="agendamento" className="py-20 md:py-28 bg-white scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left: Emotional & Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-8">
            <div className="space-y-6">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent">Dê o Primeiro Passo</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-charcoal leading-tight">
                Iniciar a terapia é uma escolha ativa de autocuidado
              </h2>
              <div className="h-[2px] w-20 bg-primary/40 rounded mt-2" />
              <p className="text-charcoal-light font-light leading-relaxed">
                Olhar para dentro de forma sincera exige coragem. Ofereço um ambiente estruturado sob a ética profissional e a ciência psicológica para acolher suas dores e construir novos horizontes.
              </p>
            </div>

            <div className="space-y-6 border-t border-sand-200/50 pt-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-sand-50 rounded-xl border border-sand-200/50">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">Telefone & WhatsApp</span>
                  <a href="tel:+5511999999999" className="text-base font-serif font-bold text-charcoal hover:text-primary transition-colors">
                    +55 (11) 99999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-sand-50 rounded-xl border border-sand-200/50">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">E-mail para Contato</span>
                  <a href="mailto:contato@drahelenamendes.com.br" className="text-base font-serif font-bold text-charcoal hover:text-primary transition-colors">
                    contato@drahelenamendes.com.br
                  </a>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp conversion */}
            <div className="bg-sand-50/60 border border-sand-200/40 p-6 rounded-2xl">
              <h4 className="font-serif font-semibold text-charcoal mb-2">Prefere contato direto?</h4>
              <p className="text-xs text-charcoal-light font-light mb-4">
                Clique no botão abaixo para iniciar uma conversa agora mesmo no WhatsApp e agendar sua sessão.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#1ebd57] text-white py-2.5 px-6 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 w-full justify-center shadow-sm"
              >
                <MessageSquare size={16} />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right: Booking Form Container */}
          <div className="lg:col-span-7 bg-sand-50/60 border border-sand-200/40 rounded-[2.5rem] p-8 md:p-12 shadow-sm flex flex-col justify-center relative min-h-[500px]">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="booking-form"
                  onSubmit={handleSubmit(onSubmit)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 text-left"
                >
                  <h3 className="font-serif text-2xl font-semibold text-charcoal mb-4 flex items-center">
                    <Calendar className="mr-2.5 text-primary" size={22} />
                    Solicitar Agendamento
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-charcoal-light uppercase tracking-wider">Nome Completo</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Ex: João Silva"
                        {...register('name')}
                        className={`w-full px-4 py-3 bg-white border rounded-xl text-sm font-light focus:outline-none focus:ring-1 focus:ring-primary ${
                          errors.name ? 'border-red-400' : 'border-sand-200'
                        }`}
                      />
                      {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-charcoal-light uppercase tracking-wider">E-mail</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Ex: joao@email.com"
                        {...register('email')}
                        className={`w-full px-4 py-3 bg-white border rounded-xl text-sm font-light focus:outline-none focus:ring-1 focus:ring-primary ${
                          errors.email ? 'border-red-400' : 'border-sand-200'
                        }`}
                      />
                      {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold text-charcoal-light uppercase tracking-wider">WhatsApp com DDD</label>
                      <input
                        id="phone"
                        type="text"
                        placeholder="Ex: 11999999999"
                        {...register('phone')}
                        className={`w-full px-4 py-3 bg-white border rounded-xl text-sm font-light focus:outline-none focus:ring-1 focus:ring-primary ${
                          errors.phone ? 'border-red-400' : 'border-sand-200'
                        }`}
                      />
                      {errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
                    </div>

                    {/* Specialty dropdown */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="specialty" className="text-xs font-semibold text-charcoal-light uppercase tracking-wider">Interesse Principal</label>
                      <select
                        id="specialty"
                        {...register('specialty')}
                        className={`w-full px-4 py-3 bg-white border rounded-xl text-sm font-light focus:outline-none focus:ring-1 focus:ring-primary appearance-none ${
                          errors.specialty ? 'border-red-400' : 'border-sand-200'
                        }`}
                      >
                        <option value="">Selecione uma área...</option>
                        {specialties.map((specialty) => (
                          <option key={specialty.slug} value={specialty.title}>
                            Terapia para {specialty.title}
                          </option>
                        ))}
                        <option value="Outro / Não listado">Outro motivo</option>
                      </select>
                      {errors.specialty && <span className="text-xs text-red-500">{errors.specialty.message}</span>}
                    </div>
                  </div>

                  {/* Period preference */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="period" className="text-xs font-semibold text-charcoal-light uppercase tracking-wider">Período de Preferência</label>
                    <select
                      id="period"
                      {...register('period')}
                      className={`w-full px-4 py-3 bg-white border rounded-xl text-sm font-light focus:outline-none focus:ring-1 focus:ring-primary appearance-none ${
                        errors.period ? 'border-red-400' : 'border-sand-200'
                      }`}
                    >
                      <option value="">Selecione o período...</option>
                      <option value="Manhã (08h às 12h)">Manhã (08h às 12h)</option>
                      <option value="Tarde (12h às 18h)">Tarde (12h às 18h)</option>
                      <option value="Noite (18h às 20h)">Noite (18h às 20h)</option>
                    </select>
                    {errors.period && <span className="text-xs text-red-500">{errors.period.message}</span>}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-charcoal-light uppercase tracking-wider">Informações Adicionais (Opcional)</label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Conte resumidamente seu objetivo ou dúvidas..."
                      {...register('message')}
                      className="w-full px-4 py-3 bg-white border border-sand-200 rounded-xl text-sm font-light focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-sage-500 text-white font-medium py-3.5 px-8 rounded-full shadow-md transition-all duration-300 flex items-center justify-center space-x-2 text-sm uppercase tracking-wider disabled:opacity-75 disabled:cursor-not-allowed pt-4"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={16} />
                        <span>Processando...</span>
                      </>
                    ) : (
                      <span>Enviar Solicitação</span>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="booking-success"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="text-center space-y-6 max-w-md mx-auto"
                >
                  <div className="inline-flex p-4 bg-primary/10 rounded-full text-primary">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-charcoal">Solicitação Enviada!</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed font-light">
                    Obrigada pelo contato. Eu ou meu suporte administrativo responderemos em até 24 horas úteis por e-mail ou WhatsApp para finalizar o agendamento seguro da sua primeira consulta.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-semibold uppercase tracking-wider text-primary hover:text-sage-600 transition-colors border border-primary/20 hover:border-primary/50 py-2 px-6 rounded-full"
                  >
                    Voltar ao Formulário
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
