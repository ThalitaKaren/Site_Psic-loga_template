import React from 'react';
import { SEO, getPersonSchema, getMedicalBusinessSchema } from '../components/shared/SEO';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { KeyStrengths } from '../components/sections/KeyStrengths';
import { SpecialtiesGrid } from '../components/sections/SpecialtiesGrid';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQSection } from '../components/sections/FAQSection';
import { CTA } from '../components/sections/CTA';

export const Home: React.FC = () => {
  const pageSchema = [getPersonSchema(), getMedicalBusinessSchema()];

  return (
    <>
      <SEO
        title="Espaço de Acolhimento e Psicoterapia"
        description="Dra. Helena Mendes - Psicóloga clínica USP, especializada em TCC. Atendimento humanizado presencial em São Paulo e online para ansiedade, depressão e burnout."
        canonicalPath="/"
        schemaJson={pageSchema}
      />
      
      {/* Sections rendering */}
      <Hero />
      <About />
      <KeyStrengths />
      <SpecialtiesGrid />
      <HowItWorks />
      <Testimonials />
      <FAQSection />
      <CTA />
    </>
  );
};
