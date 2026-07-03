import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Início', to: '/', type: 'route' },
    { label: 'Sobre Mim', to: 'sobre', type: 'scroll' },
    { label: 'Especialidades', to: 'especialidades', type: 'scroll' },
    { label: 'Como Funciona', to: 'como-funciona', type: 'scroll' },
    { label: 'Perguntas Frequentes', to: 'faq', type: 'scroll' },
    { label: 'Blog', to: '/blog', type: 'route' }
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    setIsOpen(false);
    if (link.type === 'scroll') {
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation and then scroll
        setTimeout(() => {
          const element = document.getElementById(link.to);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(link.to);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-sand-200/50 py-3 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col select-none group"
          >
            <span className="font-serif text-xl md:text-2xl font-semibold tracking-wide text-charcoal group-hover:text-primary transition-colors duration-300">
              Dra. Helena Mendes
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-accent font-medium mt-0.5">
              Psicologia Clínica
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className={`text-sm tracking-wide font-medium relative py-1 hover:text-primary transition-colors duration-300 ${
                  (link.type === 'route' && location.pathname === link.to) ||
                  (link.type === 'scroll' && location.pathname === '/' && location.hash === `#${link.to}`)
                    ? 'text-primary'
                    : 'text-charcoal-light'
                }`}
              >
                {link.label}
                {link.type === 'route' && location.pathname === link.to && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => {
                const element = document.getElementById('agendamento');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary hover:bg-sage-500 text-white text-sm font-medium tracking-wide py-2.5 px-6 rounded-full transition-all duration-300 shadow-sm hover:shadow-md flex items-center space-x-2 group"
            >
              <span>Agendar Consulta</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-charcoal hover:text-primary transition-colors focus:outline-none"
            aria-label={isOpen ? 'Fechar Menu' : 'Abrir Menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[60px] z-40 bg-background/95 backdrop-blur-lg flex flex-col p-8 border-t border-sand-200/50 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col space-y-6 text-center my-auto">
              {navLinks.map((link, idx) => (
                <motion.button
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="text-lg font-serif tracking-wide py-2 text-charcoal hover:text-primary border-b border-sand-100 hover:border-primary/30 transition-all duration-300"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => {
                  setIsOpen(false);
                  setTimeout(() => {
                    const element = document.getElementById('agendamento');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-primary hover:bg-sage-500 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 w-full flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>Agendar Consulta</span>
                <ArrowRight size={16} />
              </motion.button>
            </nav>
            <div className="mt-auto pt-8 border-t border-sand-200/50 text-center text-xs text-muted-foreground flex flex-col space-y-2">
              <p>Dra. Helena Mendes • CRP 06/123456</p>
              <p>Av. Paulista, 1000 - São Paulo, SP</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
