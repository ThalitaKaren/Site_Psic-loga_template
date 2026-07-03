import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageSquare, ArrowUp } from 'lucide-react';
import { specialties } from '../../data/specialties';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-sand-100 border-t border-sand-200/50 pt-16 pb-8 text-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* About & CRP */}
        <div className="flex flex-col space-y-4">
          <Link to="/" onClick={handleScrollToTop} className="flex flex-col select-none">
            <span className="font-serif text-2xl font-semibold tracking-wide text-charcoal">
              Dra. Helena Mendes
            </span>
            <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium mt-0.5">
              Psicologia Clínica
            </span>
          </Link>
          <p className="text-sm text-charcoal-light leading-relaxed">
            Oferecendo um espaço seguro, ético e acolhedor fundamentado na ciência psicológica para guiar sua jornada de desenvolvimento emocional e bem-estar.
          </p>
          <div className="inline-block py-1.5 px-3 bg-white/60 border border-sand-200/50 rounded-md text-xs font-medium text-charcoal-light w-max">
            CRP 06/123456
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-serif text-lg font-semibold text-charcoal tracking-wide">Navegação</h4>
          <ul className="space-y-2 text-sm text-charcoal-light">
            <li>
              <Link to="/" onClick={handleScrollToTop} className="hover:text-primary transition-colors">Início</Link>
            </li>
            <li>
              <a href="#sobre" className="hover:text-primary transition-colors">Sobre Mim</a>
            </li>
            <li>
              <a href="#como-funciona" className="hover:text-primary transition-colors">Como Funciona</a>
            </li>
            <li>
              <a href="#faq" className="hover:text-primary transition-colors">Dúvidas Frequentes</a>
            </li>
            <li>
              <Link to="/blog" onClick={handleScrollToTop} className="hover:text-primary transition-colors">Artigos & Blog</Link>
            </li>
          </ul>
        </div>

        {/* Specialties */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-serif text-lg font-semibold text-charcoal tracking-wide">Áreas de Atuação</h4>
          <ul className="space-y-2 text-sm text-charcoal-light grid grid-cols-1 gap-1">
            {specialties.slice(0, 5).map((specialty) => (
              <li key={specialty.slug}>
                <Link
                  to={`/especialidade/${specialty.slug}`}
                  onClick={handleScrollToTop}
                  className="hover:text-primary transition-colors"
                >
                  Terapia para {specialty.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Address & Interactive Map placeholder */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-serif text-lg font-semibold text-charcoal tracking-wide">Contato & Local</h4>
          <ul className="space-y-3 text-sm text-charcoal-light">
            <li className="flex items-start space-x-2">
              <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
              <span>Av. Paulista, 1000 - Cj. 1205<br />Bela Vista, São Paulo - SP<br />CEP 01310-100</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={16} className="text-primary shrink-0" />
              <a href="tel:+5511999999999" className="hover:text-primary transition-colors">+55 (11) 99999-9999</a>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={16} className="text-primary shrink-0" />
              <a href="mailto:contato@drahelenamendes.com.br" className="hover:text-primary transition-colors">contato@drahelenamendes.com.br</a>
            </li>
          </ul>

          {/* Styled Minimal Map Visual Frame */}
          <div className="w-full h-24 rounded-lg overflow-hidden relative border border-sand-200 shadow-inner group">
            <div className="absolute inset-0 bg-sand-200/40 flex items-center justify-center p-3 select-none">
              <div className="text-center">
                <span className="text-[10px] uppercase tracking-wider text-accent font-semibold block mb-0.5">Consultório Presencial</span>
                <span className="text-[9px] text-charcoal-light font-medium flex items-center justify-center"><MapPin size={10} className="mr-1 text-primary" /> Metrô Trianon-Masp</span>
              </div>
            </div>
            {/* Interactive hover overlay */}
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center cursor-pointer"
            >
              <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-charcoal text-[10px] font-medium py-1 px-2 rounded shadow transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                Ver no Google Maps
              </span>
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-sand-200/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-charcoal-light">
        <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-4">
          <p>© {currentYear} Dra. Helena Mendes. Todos os direitos reservados.</p>
          <span className="hidden md:inline text-sand-300">|</span>
          <div className="flex space-x-3">
            <Link to="/politica-de-privacidade" onClick={handleScrollToTop} className="hover:text-primary transition-colors">Política de Privacidade</Link>
            <span>•</span>
            <span className="cursor-help hover:text-primary transition-colors" title="Lei Geral de Proteção de Dados">Conformidade LGPD</span>
          </div>
        </div>

        {/* Social Medias and Scroll-to-top */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:text-primary hover:shadow-sm transition-all" aria-label="Instagram">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:text-primary hover:shadow-sm transition-all" aria-label="LinkedIn">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:text-primary hover:shadow-sm transition-all" aria-label="WhatsApp">
              <MessageSquare size={16} />
            </a>
          </div>

          <button
            onClick={handleScrollToTop}
            className="p-2.5 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-full transition-all duration-300 shadow-sm"
            aria-label="Voltar ao Topo"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
