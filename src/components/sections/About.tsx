import React from 'react';
import { Award, BookOpen, GraduationCap, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const milestones = [
    {
      icon: <GraduationCap className="text-primary" size={24} />,
      title: 'Formação Acadêmica',
      description: 'Graduada em Psicologia pela Universidade de São Paulo (USP), com foco em Psicologia Clínica e Abordagens Baseadas em Evidências.'
    },
    {
      icon: <Award className="text-primary" size={24} />,
      title: 'Especializações',
      description: 'Pós-graduada em Terapia Cognitivo-Comportamental (TCC) pelo Hospital Israelita Albert Einstein e formação complementar em ACT (Terapia de Aceitação e Compromisso).'
    },
    {
      icon: <BookOpen className="text-primary" size={24} />,
      title: 'Atualização Contínua',
      description: 'Membro ativo da SBPC (Sociedade Brasileira de Psicologia Cognitiva), participando anualmente de congressos e supervisões clínicas.'
    }
  ];

  const stats = [
    { number: '10+', label: 'Anos de Experiência' },
    { number: '1.200+', label: 'Pacientes Atendidos' },
    { number: '50+', label: 'Cursos & Extensões' },
    { number: '8.000+', label: 'Horas Clínicas' }
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-white overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Biography Text & Stats */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent">Dra. Helena Mendes</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-charcoal">
                Trajetória pautada na ética, escuta e ciência
              </h2>
              <div className="h-[2px] w-20 bg-primary/40 rounded mt-2" />
            </div>

            <div className="space-y-6 text-charcoal-light font-light leading-relaxed">
              <p>
                Acredito que a psicoterapia não se trata de dar respostas prontas, mas de construir, de forma conjunta, um caminho de reflexão e autodescoberta. Minha missão é proporcionar um espaço livre de julgamentos, onde você possa depositar suas vulnerabilidades com a segurança de um respaldo científico robusto.
              </p>
              <p>
                Ao longo de mais de uma década de dedicação exclusiva à prática clínica, especializei-me no tratamento de distúrbios de ansiedade, esgotamento profissional (Burnout), luto e fortalecimento da autoestima. Através do referencial cognitivo-comportamental, trago ferramentas concretas e adaptadas a cada singularidade.
              </p>
            </div>

            {/* Stats Counter Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-sand-50 border border-sand-200/50 p-5 rounded-2xl text-center"
                >
                  <span className="block text-2xl md:text-3xl font-serif font-bold text-primary mb-1">
                    {stat.number}
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline & Credentials Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-sand-50/60 border border-sand-200/40 p-8 rounded-[2rem] relative">
              <div className="absolute top-6 right-6 opacity-10">
                <Clock size={80} className="text-primary" />
              </div>
              
              <h3 className="font-serif text-2xl font-semibold text-charcoal mb-6 border-b border-sand-200 pb-3">
                Qualificação Técnica
              </h3>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex space-x-4 items-start"
                  >
                    <div className="p-3 bg-white rounded-xl shadow-sm border border-sand-200/50 shrink-0">
                      {milestone.icon}
                    </div>
                    <div className="text-left">
                      <h4 className="font-serif text-lg font-semibold text-charcoal">
                        {milestone.title}
                      </h4>
                      <p className="text-sm text-charcoal-light font-light mt-1 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
