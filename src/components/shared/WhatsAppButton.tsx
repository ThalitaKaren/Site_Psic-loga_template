import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = '5511999999999';
  const welcomeMessage = encodeURIComponent(
    'Olá, Dra. Helena. Gostaria de entender melhor sobre o processo terapêutico e verificar a disponibilidade de horários para agendamento de consulta.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${welcomeMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
      aria-label="Fale comigo no WhatsApp"
    >
      {/* Wave effect rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none scale-105 pointer-events-none" />
      
      {/* Icon */}
      <MessageCircle size={24} className="relative z-10 fill-current" />
      
      {/* Hover Tooltip */}
      <span className="absolute right-14 bg-white text-charcoal text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-sand-200">
        Falar com Dra. Helena
      </span>
    </motion.a>
  );
};
