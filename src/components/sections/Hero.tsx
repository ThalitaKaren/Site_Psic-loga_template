import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[95vh] flex items-center bg-gradient-to-b from-sand-50 to-background overflow-hidden pt-24 pb-12 md:py-20">
      
      {/* Organic Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-sage-50/40 blur-[80px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-sand-200/30 blur-[60px] -z-10 pointer-events-none" />

      {/* Subtle organic lines */}
      <div className="absolute inset-0 opacity-[0.03] -z-10 pointer-events-none">
        <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,200 Q200,400 400,200 T900,400 T1400,200" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <path d="M-50,250 Q250,450 450,250 T950,450 T1450,250" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-4"
          >
            <div className="inline-flex items-center space-x-2 py-1 px-3 bg-sage-100 text-sage-600 rounded-full text-xs font-semibold tracking-wider uppercase">
              <span>Atendimento Online & Presencial</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.1] text-charcoal tracking-tight">
              Um espaço seguro para compreender sua <span className="italic text-primary">história</span> e construir novos caminhos.
            </h1>
            
            <p className="text-base md:text-lg text-charcoal-light leading-relaxed max-w-xl font-sans font-light">
              Ofereço um processo terapêutico humanizado e fundamentado na ciência para ajudar você a decifrar a ansiedade, superar o esgotamento profissional e reatar a conexão com seu bem-estar interno.
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <button
              onClick={() => handleScroll('agendamento')}
              className="bg-primary hover:bg-sage-500 text-white font-medium py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group text-sm md:text-base"
            >
              <Calendar size={18} />
              <span>Agendar Consulta</span>
            </button>
            
            <button
              onClick={() => handleScroll('especialidades')}
              className="bg-white hover:bg-sand-100 text-charcoal font-medium py-3.5 px-8 rounded-full border border-sand-200/80 shadow-sm hover:shadow transition-all duration-300 flex items-center justify-center space-x-2 group text-sm md:text-base"
            >
              <span>Conheça Meu Trabalho</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Quality Indicator trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center space-x-8 pt-4 border-t border-sand-200/50 w-max"
          >
            <div>
              <span className="block text-2xl font-serif font-semibold text-charcoal">10+ Anos</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Prática Clínica</span>
            </div>
            <div className="h-8 w-[1px] bg-sand-200" />
            <div>
              <span className="block text-2xl font-serif font-semibold text-charcoal">1.200+</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Vidas Apoiadas</span>
            </div>
            <div className="h-8 w-[1px] bg-sand-200" />
            <div>
              <span className="block text-2xl font-serif font-semibold text-charcoal">CBT / ACT</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Abordagem Científica</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Image Collage */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative w-full max-w-[400px] lg:max-w-none aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl z-10 border-[6px] border-white"
          >
            <img
              src="/psychologist_portrait.png"
              alt="Dra. Helena Mendes - Psicóloga Clínica"
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Soft dark visual vignette border overlay */}
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]" />
          </motion.div>

          {/* Aesthetic design element: gold-accent textured block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl bg-accent/10 -z-0 pointer-events-none border border-accent/20"
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="absolute -top-6 -left-6 w-36 h-36 rounded-[2.5rem] border-2 border-primary/20 -z-0 pointer-events-none"
          />
        </div>

      </div>
    </section>
  );
};
