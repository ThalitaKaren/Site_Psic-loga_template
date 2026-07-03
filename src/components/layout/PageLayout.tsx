import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { LenisScroll } from './LenisScroll';
import { WhatsAppButton } from '../shared/WhatsAppButton';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20 selection:text-foreground text-foreground">
      {/* Smooth scroll core */}
      <LenisScroll />

      {/* Global Navigation Header */}
      <Header />

      {/* Primary Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Conversion Booster Floating WhatsApp */}
      <WhatsAppButton />
    </div>
  );
};
