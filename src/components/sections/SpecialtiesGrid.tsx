import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Heart, Activity, Users, Sparkles, Compass, Shield, Sun, ArrowRight } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { specialties } from '../../data/specialties';

// Custom Map for specific Lucide Icons used in Specialties data
export const getSpecialtyIcon = (name: string) => {
  switch (name) {
    case 'Brain': return <Brain size={24} className="text-primary" />;
    case 'Heart': return <Heart size={24} className="text-primary" />;
    case 'Activity': return <Activity size={24} className="text-primary" />;
    case 'Users': return <Users size={24} className="text-primary" />;
    case 'Sparkles': return <Sparkles size={24} className="text-primary" />;
    case 'Compass': return <Compass size={24} className="text-primary" />;
    case 'Shield': return <Shield size={24} className="text-primary" />;
    case 'Sun': return <Sun size={24} className="text-primary" />;
    default: return <Brain size={24} className="text-primary" />;
  }
};

export const SpecialtiesGrid: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };


  return (
    <section id="especialidades" className="py-20 md:py-28 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="text-left max-w-2xl">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent">Áreas de Atuação</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-charcoal mt-2">
              Apoio clínico especializado para o seu momento
            </h2>
            <div className="h-[2px] w-20 bg-primary/40 rounded mt-3" />
          </div>
          <p className="text-charcoal-light font-light text-left md:text-right max-w-sm text-sm leading-relaxed md:pb-1">
            Cada tratamento é adaptado para responder a demandas específicas com ferramentas validadas cientificamente.
          </p>
        </div>

        {/* Specialties Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {specialties.map((specialty) => (
            <motion.div
              key={specialty.slug}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-sand-50/50 hover:bg-white border border-sand-200/40 rounded-[2rem] p-8 text-left hover:shadow-md transition-all duration-300 flex flex-col justify-between h-[280px]"
            >
              <div>
                {/* Header Icon + Title */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-white border border-sand-200 rounded-xl shadow-sm">
                    {getSpecialtyIcon(specialty.iconName)}
                  </div>
                  <h3 className="font-serif text-lg md:text-xl font-semibold text-charcoal">
                    {specialty.title}
                  </h3>
                </div>
                
                {/* Short Description */}
                <p className="text-sm text-charcoal-light font-light leading-relaxed line-clamp-3">
                  {specialty.shortDescription}
                </p>
              </div>

              {/* Bottom Action Link */}
              <div className="pt-4 border-t border-sand-200/30 flex justify-end">
                <Link
                  to={`/especialidade/${specialty.slug}`}
                  onClick={handleScrollToTop}
                  className="inline-flex items-center text-xs font-semibold tracking-wider uppercase text-primary hover:text-sage-600 transition-colors duration-300 group"
                >
                  <span className="mr-2">Saber mais</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
