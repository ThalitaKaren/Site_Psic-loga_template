import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Como funciona o primeiro contato e as sessões de terapia?',
    answer: 'O primeiro contato serve para esclarecer dúvidas administrativas e de agenda. Na primeira sessão (anamnese), conversamos sobre o seu histórico de vida e as principais queixas que levaram você a buscar apoio. A partir disso, definimos de forma conjunta os objetivos terapêuticos e o plano de ação personalizado.'
  },
  {
    question: 'Quanto tempo dura cada sessão e a terapia como um todo?',
    answer: 'Cada sessão de psicoterapia individual tem duração padrão de 50 minutos. A duração total do tratamento varia amplamente para cada indivíduo, dependendo da complexidade das demandas apresentadas, da adesão às tarefas propostas fora da sessão e da evolução pessoal. A alta terapêutica é discutida e planejada em comum acordo.'
  },
  {
    question: 'As sessões online possuem a mesma eficácia que as presenciais?',
    answer: 'Sim, pesquisas científicas contemporâneas comprovam que a psicoterapia online possui taxas de eficácia idênticas à modalidade presencial para distúrbios de ansiedade, depressão e estresse. O atendimento online é realizado por meio de uma plataforma de videoconferência criptografada que garante sigilo absoluto e conformidade ética.'
  },
  {
    question: 'O consultório aceita convênios médicos (planos de saúde)?',
    answer: 'Trabalhamos exclusivamente no formato particular (atendimento direto). No entanto, fornecemos recibos e relatórios detalhados com toda a documentação necessária para que você possa solicitar o reembolso integral ou parcial junto ao seu convênio médico, conforme as regras do seu plano de saúde.'
  },
  {
    question: 'Como faço para agendar a primeira sessão?',
    answer: 'Para agendar, basta preencher o formulário de contato abaixo ou clicar no botão flutuante do WhatsApp. Nós responderemos rapidamente enviando as datas disponíveis e auxiliando no agendamento seguro da sua consulta.'
  }
];

export const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-sand-50/50 scroll-mt-16 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent">Perguntas Frequentes</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-charcoal">
            Dúvidas comuns sobre o processo
          </h2>
          <div className="h-[2px] w-20 bg-primary/40 rounded mx-auto mt-2" />
        </div>

        {/* Accordions Wrapper */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white border border-sand-200/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {/* Accordion Toggle Header button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary/20 group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-4">
                    <HelpCircle size={18} className={`shrink-0 transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-sand-300'}`} />
                    <span className="font-serif text-base md:text-lg font-semibold text-charcoal group-hover:text-primary transition-colors duration-300">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={`p-1.5 rounded-full ${isOpen ? 'bg-primary/10 text-primary' : 'bg-sand-50 text-charcoal-light'}`}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                {/* Animated Body Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-sand-100 text-sm md:text-base text-charcoal-light font-light leading-relaxed text-left">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
