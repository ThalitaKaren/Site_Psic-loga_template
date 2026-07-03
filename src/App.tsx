import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { PageLayout } from './components/layout/PageLayout';
import { Home } from './pages/Home';
import { SpecialtyDetail } from './pages/SpecialtyDetail';
import { BlogList } from './pages/BlogList';
import { BlogDetail } from './pages/BlogDetail';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

// Import local CSS (our Tailwind styles loaded in index.css)
import './App.css'; 

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <PageLayout>
          <Routes>
            {/* Core Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/especialidade/:slug" element={<SpecialtyDetail />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
            
            {/* Fallback Redirection to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
