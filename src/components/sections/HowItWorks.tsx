import React from 'react';
import { motion } from 'framer-motion';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Primeiro Contato',
      description: 'Envie uma mensagem pelo WhatsApp ou formulário. Esclarecemos suas dúvidas iniciais sobre horários, valores e dinâmica de sessões.'
    },
    {
      number: '02',
      title: 'Agendamento',
      description: 'Definimos o melhor dia e horário na agenda, podendo ser consultas semanais no formato presencial ou online.'
    },
    {
      number: '03',
      title: 'Primeira Sessão',
      description: 'Uma sessão de acolhimento para você contar sua história, mapearmos as principais queixas e iniciarmos o planejamento terapêutico.'
    },
    {
      number: '04',
      title: 'Processo Terapêutico',
      description: 'Sessões regulares focadas em compreender seus gatilhos mentais, resgatar valores de vida e aplicar técnicas práticas.'
    },
    {
      number: '05',
      title: 'Desenvolvimento',
      description: 'Fase de consolidação dos aprendizados. Você ganha autonomia sobre a gestão de sua ansiedade e reestrutura seus hábitos.'
    },
    {
      number: '06',
      title: 'Alta Terapêutica',
      description: 'Momento em que o paciente atingiu seus objetivos, desenvolveu autorregulação emocional e está pronto para seguir com segurança.'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-sand-50/50 scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent">Jornada Terapêutica</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-charcoal">
            Como funciona o processo de terapia?
          </h2>
          <div className="h-[2px] w-20 bg-primary/40 rounded mx-auto mt-2" />
          <p className="text-charcoal-light font-light text-sm md:text-base max-w-xl mx-auto">
            Um passo a passo planejado com cuidado e baseado em etapas estruturadas para garantir o seu acolhimento e evolução.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[45px] left-[5%] right-[5%] h-[2px] bg-sand-200/80 -z-10" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left group"
              >
                {/* Number Circle Indicator */}
                <div className="w-[90px] h-[90px] rounded-full bg-white border-2 border-sand-200 flex items-center justify-center font-serif text-2xl font-bold text-accent shadow-sm group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300 mb-6 shrink-0 relative">
                  {step.number}
                  {/* Subtle inner pulse wrapper for current active milestone concept */}
                  <div className="absolute inset-2 rounded-full border border-sand-100" />
                </div>

                {/* Card Title & Content */}
                <div className="space-y-2 max-w-[240px] md:max-w-none">
                  <h3 className="font-serif text-lg font-semibold text-charcoal group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-charcoal-light font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
