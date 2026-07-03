import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Share2, Tag, CalendarDays } from 'lucide-react';

import { blogPosts } from '../data/blog';
import { SEO } from '../components/shared/SEO';

export const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  // Compute related articles (same category, excluding current)
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    const related = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug);
    if (related.length > 0) return related.slice(0, 2);
    // fallback: select any other posts
    return blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 bg-background">
        <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">Artigo não encontrado</h2>
        <p className="text-sm text-charcoal-light mb-8 max-w-sm">
          O artigo solicitado não está cadastrado em nosso blog ou foi removido.
        </p>
        <Link
          to="/blog"
          className="bg-primary hover:bg-sage-500 text-white font-medium py-3 px-8 rounded-full transition-all"
        >
          Voltar para o Blog
        </Link>
      </div>
    );
  }

  // Schema: Breadcrumb
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
        'name': 'Blog',
        'item': 'https://drahelenamendes.com.br/blog'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': post.title,
        'item': `https://drahelenamendes.com.br/blog/${post.slug}`
      }
    ]
  };

  // Schema: Blog Posting Article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.excerpt,
    'datePublished': '2026-06-28T08:00:00+03:00', // Mock iso matching text dates
    'author': {
      '@type': 'Person',
      'name': post.author,
      'jobTitle': 'Psicóloga Clínica'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Dra. Helena Mendes Psicologia',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://drahelenamendes.com.br/assets/logo.png'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://drahelenamendes.com.br/blog/${post.slug}`
    }
  };

  // Simple Paragraph / Heading renderer for basic Markdown in static content
  const renderedContent = post.content
    .trim()
    .split('\n\n')
    .map((block, index) => {
      if (block.startsWith('### ')) {
        return (
          <h3 key={index} className="font-serif text-2xl md:text-3xl font-semibold text-charcoal pt-6 pb-2">
            {block.replace('### ', '')}
          </h3>
        );
      }
      if (block.startsWith('* ') || block.startsWith('- ')) {
        const listItems = block.split('\n');
        return (
          <ul key={index} className="list-disc pl-6 space-y-2 text-charcoal-light font-light leading-relaxed my-4">
            {listItems.map((item, i) => (
              <li key={i}>{item.replace(/^[*-\s]+/, '')}</li>
            ))}
          </ul>
        );
      }
      return (
        <p key={index} className="text-base md:text-lg text-charcoal-light font-light leading-relaxed mb-6">
          {block}
        </p>
      );
    });

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonicalPath={`/blog/${post.slug}`}
        schemaJson={[breadcrumbSchema, articleSchema]}
      />

      <article className="pt-32 pb-20 bg-background text-charcoal">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          
          {/* Back button */}
          <div className="mb-8 text-left">
            <Link
              to="/blog"
              className="inline-flex items-center text-xs font-semibold tracking-wider uppercase text-primary hover:text-sage-600 transition-colors duration-300"
            >
              <ArrowLeft size={14} className="mr-2" />
              <span>Voltar ao Blog</span>
            </Link>
          </div>

          {/* Meta Info Header */}
          <div className="text-left space-y-4 mb-8">
            <span className="px-3.5 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-[10px] uppercase font-bold tracking-wider w-max inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-medium leading-[1.2] text-charcoal">
              {post.title}
            </h1>
            <p className="text-base md:text-xl text-muted-foreground font-light leading-relaxed italic">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-b border-sand-200/50 py-4 text-xs text-charcoal-light font-medium">
              <span className="flex items-center"><User size={14} className="mr-2 text-primary" /> Por {post.author}</span>
              <span className="flex items-center"><CalendarDays size={14} className="mr-2 text-primary" /> {post.date}</span>
              <span className="flex items-center"><Clock size={14} className="mr-2 text-primary" /> {post.readTime}</span>
            </div>
          </div>

          {/* Cover placeholder layout */}
          <div className={`w-full h-64 md:h-96 rounded-[2.5rem] bg-gradient-to-tr ${post.gradientFrom} ${post.gradientTo} border border-sand-200 mb-12 relative flex items-center justify-center overflow-hidden`}>
            <div className="absolute inset-0 opacity-[0.05]">
              <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50%" cy="50%" r="300" stroke="currentColor" strokeWidth="2" className="text-primary" />
                <circle cx="50%" cy="50%" r="200" stroke="currentColor" strokeWidth="1" className="text-accent" />
              </svg>
            </div>
            <Tag size={40} className="text-primary/20" />
          </div>

          {/* Content Body */}
          <div className="text-left prose prose-slate max-w-none mb-16">
            {renderedContent}
          </div>

          {/* Article Footer Tags & Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 border-t border-b border-sand-200/50 mb-16 gap-4 text-left">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted-foreground font-semibold mr-1">Tags:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-sand-100 rounded-lg text-xs font-light text-charcoal-light"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copiado para a área de transferência!');
              }}
              className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-primary hover:text-sage-600 transition-colors"
            >
              <Share2 size={14} />
              <span>Compartilhar Artigo</span>
            </button>
          </div>

          {/* Related Articles list section */}
          <div className="border-t border-sand-200/50 pt-12 text-left">
            <h3 className="font-serif text-2xl font-semibold text-charcoal mb-8">Artigos Relacionados</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  to={`/blog/${related.slug}`}
                  className="group flex flex-col space-y-3 p-6 bg-sand-50/50 hover:bg-white border border-sand-200/40 rounded-3xl hover:shadow-sm transition-all duration-300"
                >
                  <span className="text-[10px] uppercase font-bold tracking-wider text-accent">
                    {related.category}
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-charcoal group-hover:text-primary transition-colors duration-300">
                    {related.title}
                  </h4>
                  <p className="text-xs text-charcoal-light font-light leading-relaxed line-clamp-2">
                    {related.excerpt}
                  </p>
                  <span className="text-[10px] text-muted-foreground font-medium flex items-center pt-2">
                    <Clock size={10} className="mr-1" /> {related.readTime}
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </article>
    </>
  );
};
