import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronDown, Check, HelpCircle, Calendar, MessageSquare } from 'lucide-react';
import { specialties } from '../data/specialties';
import { SEO } from '../components/shared/SEO';
import { getSpecialtyIcon } from '../components/sections/SpecialtiesGrid';

export const SpecialtyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const specialty = specialties.find((s) => s.slug === slug);
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  if (!specialty) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 bg-background">
        <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">Especialidade não encontrada</h2>
        <p className="text-sm text-charcoal-light mb-8 max-w-sm">
          A página clínica solicitada não existe ou foi movida. Por favor, retorne à página inicial.
        </p>
        <Link
          to="/"
          className="bg-primary hover:bg-sage-500 text-white font-medium py-3 px-8 rounded-full transition-all"
        >
          Voltar para o Início
        </Link>
      </div>
    );
  }

  // Schema: Breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Início',
        'item': 'https://drahelenamendes.com.br'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Especialidades',
        'item': 'https://drahelenamendes.com.br/#especialidades'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': `Terapia para ${specialty.title}`,
        'item': `https://drahelenamendes.com.br/especialidade/${specialty.slug}`
      }
    ]
  };

  // Schema: FAQ page (if FAQs exist)
  const faqSchema = specialty.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': specialty.faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  } : undefined;

  const pageSchemas = faqSchema ? [breadcrumbSchema, faqSchema] : [breadcrumbSchema];

  return (
    <>
      <SEO
        title={`Terapia para ${specialty.title}`}
        description={`Entenda como funciona o tratamento clínico para ${specialty.title}. Sintomas, diagnóstico terapêutico e acolhimento com Dra. Helena Mendes.`}
        canonicalPath={`/especialidade/${specialty.slug}`}
        schemaJson={pageSchemas}
      />

      <article className="pt-32 pb-20 bg-background text-charcoal">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          
          {/* Back Button */}
          <div className="mb-8 text-left">
            <Link
              to="/"
              className="inline-flex items-center text-xs font-semibold tracking-wider uppercase text-primary hover:text-sage-600 transition-colors duration-300"
            >
              <ArrowLeft size={14} className="mr-2" />
              <span>Voltar ao início</span>
            </Link>
          </div>

          {/* Title Header Section */}
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 pb-8 border-b border-sand-200/50 mb-12 text-left">
            <div className="p-4 bg-white border border-sand-200 rounded-2xl shadow-sm shrink-0 w-max">
              {getSpecialtyIcon(specialty.iconName)}
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Área de Tratamento</span>
              <h1 className="text-3xl md:text-5xl font-serif font-medium text-charcoal mt-1">
                Psicoterapia para {specialty.title}
              </h1>
            </div>
          </div>

          {/* Long Description */}
          <div className="space-y-6 text-left mb-12">
            <h3 className="font-serif text-2xl font-semibold text-charcoal">Compreendendo a Demanda</h3>
            <p className="text-base md:text-lg text-charcoal-light font-light leading-relaxed">
              {specialty.longDescription}
            </p>
          </div>

          {/* Symptoms List (Two columns) */}
          <div className="bg-sand-50/60 border border-sand-200/40 rounded-[2.5rem] p-8 md:p-12 mb-12 text-left">
            <h3 className="font-serif text-2xl font-semibold text-charcoal mb-6">Sinais & Sintomas Comuns</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specialty.symptoms.map((symptom, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                  <div className="p-1 bg-primary/10 rounded-full text-primary shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How treatment works & When to seek help */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mb-16">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-semibold text-charcoal">Quando procurar ajuda?</h3>
              <p className="text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                {specialty.whenToSeekHelp}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-semibold text-charcoal">Como funciona a terapia?</h3>
              <p className="text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                {specialty.howTherapyWorks}
              </p>
            </div>
          </div>

          {/* Specific FAQs Accordion */}
          {specialty.faqs.length > 0 && (
            <div className="mb-16 text-left border-t border-sand-200/50 pt-12">
              <h3 className="font-serif text-2xl font-semibold text-charcoal mb-8">Dúvidas frequentes sobre {specialty.title}</h3>
              <div className="space-y-4">
                {specialty.faqs.map((faq, idx) => {
                  const isOpen = openFAQIndex === idx;
                  return (
                    <div key={idx} className="bg-white border border-sand-200/40 rounded-xl overflow-hidden shadow-sm">
                      <button
                        onClick={() => setOpenFAQIndex(isOpen ? null : idx)}
                        className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                      >
                        <span className="font-serif text-base font-semibold text-charcoal flex items-center">
                          <HelpCircle size={16} className="text-primary mr-3 shrink-0" />
                          {faq.question}
                        </span>
                        <ChevronDown size={16} className={`text-charcoal-light transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="px-5 pb-5 pt-0 border-t border-sand-100 text-sm text-charcoal-light font-light leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="bg-sand-50 border border-sand-200/50 rounded-[2rem] p-8 md:p-12 text-center space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal">
              Deseja iniciar seu acompanhamento?
            </h3>
            <p className="text-sm md:text-base text-charcoal-light font-light max-w-lg mx-auto leading-relaxed">
              Marque uma consulta inicial para podermos analisar seu caso de perto e traçar o melhor plano psicoterapêutico para você.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/#agendamento"
                className="bg-primary hover:bg-sage-500 text-white font-medium py-3 px-8 rounded-full shadow transition-all duration-300 flex items-center justify-center space-x-2 text-sm uppercase tracking-wider w-full sm:w-auto"
              >
                <Calendar size={16} />
                <span>Formulário de Contato</span>
              </Link>
              <a
                href={`https://wa.me/5511999999999?text=${encodeURIComponent(`Olá, Dra. Helena. Gostaria de tirar dúvidas sobre a terapia para ${specialty.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-sand-100 text-charcoal border border-sand-200 font-medium py-3 px-8 rounded-full shadow-sm transition-all duration-300 flex items-center justify-center space-x-2 text-sm uppercase tracking-wider w-full sm:w-auto"
              >
                <MessageSquare size={16} className="text-[#25D366]" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </article>
    </>
  );
};
