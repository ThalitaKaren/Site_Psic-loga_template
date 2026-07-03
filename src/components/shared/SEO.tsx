import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  schemaJson?: Record<string, any> | Record<string, any>[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '',
  ogType = 'website',
  ogImage = 'https://drahelenamendes.com.br/assets/og-image.jpg', // placeholder base URL
  schemaJson
}) => {
  const siteUrl = 'https://drahelenamendes.com.br';
  const fullUrl = `${siteUrl}${canonicalPath}`;
  const displayTitle = `${title} | Dra. Helena Mendes - Psicologia Clínica`;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{displayTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={displayTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Dra. Helena Mendes Psicologia" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={displayTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Language Alternates */}
      <meta name="robots" content="index, follow" />

      {/* Structured Data (Schema.org JSON-LD) */}
      {schemaJson && (
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      )}
    </Helmet>
  );
};

// Generates the standard Person Schema for the Psychologist
export const getPersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://drahelenamendes.com.br/#person',
  'name': 'Helena Mendes',
  'jobTitle': 'Psicóloga Clínica',
  'telephone': '+55 (11) 99999-9999',
  'url': 'https://drahelenamendes.com.br',
  'sameAs': [
    'https://www.instagram.com/dra.helenamendes',
    'https://www.linkedin.com/in/helenamendes'
  ],
  'description': 'Psicóloga clínica graduada pela USP, especializada em Terapia Cognitivo-Comportamental e gestão de ansiedade, depressão e burnout.',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Av. Paulista, 1000 - Bela Vista',
    'addressLocality': 'São Paulo',
    'addressRegion': 'SP',
    'postalCode': '01310-100',
    'addressCountry': 'BR'
  }
});

// Generates the Medical Business Schema for local SEO search results
export const getMedicalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': 'https://drahelenamendes.com.br/#clinic',
  'name': 'Consultório de Psicologia Dra. Helena Mendes',
  'image': 'https://drahelenamendes.com.br/assets/og-image.jpg',
  'telePhone': '+55 (11) 99999-9999',
  'url': 'https://drahelenamendes.com.br',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Av. Paulista, 1000 - Bela Vista',
    'addressLocality': 'São Paulo',
    'addressRegion': 'SP',
    'postalCode': '01310-100',
    'addressCountry': 'BR'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': -23.5614,
    'longitude': -46.6559
  },
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      'opens': '08:00',
      'closes': '20:00'
    }
  ],
  'medicalSpecialty': 'PsychiatricRatingScale', // Closest general standard medical category
  'priceRange': '$$$'
});
