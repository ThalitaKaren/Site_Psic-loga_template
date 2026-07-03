import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { blogPosts } from '../data/blog';
import { SEO } from '../components/shared/SEO';

export const BlogList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Extract all categories dynamically
  const categories = useMemo(() => {
    const list = new Set(blogPosts.map((post) => post.category));
    return ['Todos', ...Array.from(list)];
  }, []);

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

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
        'name': 'Artigos & Blog',
        'item': 'https://drahelenamendes.com.br/blog'
      }
    ]
  };

  return (
    <>
      <SEO
        title="Artigos & Blog"
        description="Acesse reflexões, artigos e orientações sobre saúde mental, ansiedade, burnout e relacionamentos da Dra. Helena Mendes."
        canonicalPath="/blog"
        schemaJson={breadcrumbSchema}
      />

      <div className="pt-32 pb-24 bg-background text-charcoal min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header Title */}
          <div className="text-left max-w-2xl mb-12">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent">Conhecimento Compartilhado</span>
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-charcoal mt-2">
              Reflexões sobre a mente e o bem-estar
            </h1>
            <div className="h-[2px] w-20 bg-primary/40 rounded mt-3" />
            <p className="text-charcoal-light font-light text-sm md:text-base leading-relaxed mt-4">
              Artigos produzidos com embasamento clínico para trazer clareza a suas dinâmicas internas e apoiar sua jornada diária.
            </p>
          </div>

          {/* Search & Category Filter bar */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center pb-8 border-b border-sand-200/50 mb-12">
            
            {/* Category Buttons Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-white text-charcoal-light border border-sand-200/60 hover:bg-sand-100/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Input bar */}
            <div className="relative w-full md:max-w-xs shrink-0">
              <input
                type="text"
                placeholder="Pesquisar artigos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-sand-200 rounded-full text-xs font-light focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
              />
              <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            </div>

          </div>

          {/* Articles Cards Grid */}
          <AnimatePresence mode="popLayout">
            {filteredPosts.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {filteredPosts.map((post) => (
                  <motion.article
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    key={post.slug}
                    className="bg-white border border-sand-200/40 rounded-[2.5rem] overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group"
                  >
                    
                    {/* Visual Card Cover gradient (acting as image placeholder) */}
                    <div className={`w-full h-48 bg-gradient-to-br ${post.gradientFrom} ${post.gradientTo} relative p-6 flex flex-col justify-end overflow-hidden border-b border-sand-100`}>
                      {/* Flowing background waves inside placeholders */}
                      <div className="absolute inset-0 opacity-10 -z-0">
                        <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M-10,50 Q100,100 200,50 T400,100 T600,50" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
                        </svg>
                      </div>
                      <span className="relative z-10 px-3 py-1 bg-white/80 backdrop-blur-sm border border-sand-200/50 rounded-full text-[10px] uppercase font-bold tracking-wider text-primary w-max">
                        {post.category}
                      </span>
                    </div>

                    {/* Card Content body */}
                    <div className="p-8 flex-grow flex flex-col justify-between text-left">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground font-medium">
                          <span className="flex items-center"><Calendar size={12} className="mr-1.5" /> {post.date}</span>
                          <span className="flex items-center"><Clock size={12} className="mr-1.5" /> {post.readTime}</span>
                        </div>
                        <h2 className="font-serif text-2xl font-semibold text-charcoal group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-sm text-charcoal-light font-light leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Card Bottom CTA link */}
                      <div className="pt-6 mt-6 border-t border-sand-100 flex items-center justify-between">
                        <span className="text-[11px] font-medium text-muted-foreground">Por {post.author}</span>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center text-xs font-semibold tracking-wider uppercase text-primary group-hover:text-sage-600 transition-colors duration-300"
                        >
                          <span className="mr-2">Ler Artigo</span>
                          <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>

                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-sand-50/40 rounded-3xl border border-dashed border-sand-300"
              >
                <p className="text-charcoal-light font-light text-base">
                  Nenhum artigo encontrado correspondente aos termos de busca.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('Todos');
                  }}
                  className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary hover:underline"
                >
                  Limpar filtros
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </>
  );
};
