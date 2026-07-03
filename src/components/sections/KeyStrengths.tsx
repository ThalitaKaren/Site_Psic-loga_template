import React from 'react';
import { Heart, Headphones, Video, Scale, Shield, Lock } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export const KeyStrengths: React.FC = () => {
  const strengths = [
    {
      icon: <Heart className="text-primary" size={28} />,
      title: 'Atendimento Humanizado',
      description: 'Cada indivíduo é visto de forma singular, com respeito às suas dores, tempo de maturação e objetivos pessoais.'
    },
    {
      icon: <Headphones className="text-primary" size={28} />,
      title: 'Escuta Acolhedora',
      description: 'Uma escuta ativa livre de julgamentos ou pressões, proporcionando alívio imediato no desabafo.'
    },
    {
      icon: <Video className="text-primary" size={28} />,
      title: 'Online & Presencial',
      description: 'Flexibilidade de horários com sessões presenciais em São Paulo ou consultas online seguras por videoconferência.'
    },
    {
      icon: <Scale className="text-primary" size={28} />,
      title: 'Ética Profissional',
      description: 'Alinhamento rigoroso com as diretrizes do Conselho Federal de Psicologia e a ciência psicológica.'
    },
    {
      icon: <Shield className="text-primary" size={28} />,
      title: 'Ambiente Seguro',
      description: 'Consultório acolhedor projetado para transmitir paz e tranquilidade durante as consultas presenciais.'
    },
    {
      icon: <Lock className="text-primary" size={28} />,
      title: 'Sigilo Absoluto',
      description: 'Sua privacidade é prioridade. Todos os atendimentos são protegidos por sigilo profissional irrestrito.'
    }
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };


  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-sand-100/30 to-background overflow-hidden relative">
      
      {/* Background Soft Blobs */}
      <div className="absolute top-1/2 left-[-10%] w-[35vw] h-[35vw] rounded-full bg-accent/5 blur-[80px] -z-10" />
      <div className="absolute top-1/3 right-[-10%] w-[30vw] h-[30vw] rounded-full bg-primary/5 blur-[60px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Header Text */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent">Pilares do Meu Trabalho</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-charcoal">
            Diferenciais de um acompanhamento premium
          </h2>
          <div className="h-[2px] w-20 bg-primary/40 rounded mx-auto mt-2" />
          <p className="text-charcoal-light font-light text-sm md:text-base max-w-xl mx-auto">
            O atendimento é desenhado com foco no conforto e na segurança do paciente, assegurando uma experiência fluida e de alto valor terapêutico.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="glassmorphism p-8 rounded-[2rem] text-left hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Wrapper */}
                <div className="p-4 bg-white/80 rounded-2xl w-max border border-sand-200/50 shadow-sm mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  {strength.icon}
                </div>
                
                {/* Text Content */}
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3 group-hover:text-primary transition-colors duration-300">
                  {strength.title}
                </h3>
                
                <p className="text-sm text-charcoal-light font-light leading-relaxed">
                  {strength.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
