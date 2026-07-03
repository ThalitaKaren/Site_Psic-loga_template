import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  modality: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    text: 'Fazer terapia com a Dra. Helena foi um divisor de águas na minha vida. Eu convivia com uma ansiedade paralisante que sabotava meu trabalho e hoje consigo lidar com os desafios cotidianos de forma leve, focada e assertiva.',
    author: 'M. S.',
    modality: 'Paciente de Psicoterapia Online',
    rating: 5
  },
  {
    text: 'O acompanhamento durante a minha crise de Burnout foi crucial para que eu pudesse restabelecer limites na minha carreira, recuperar a saúde física e reencontrar o prazer na rotina profissional. Excelente profissional, extremamente ética e humana.',
    author: 'R. A.',
    modality: 'Paciente de Psicoterapia Presencial',
    rating: 5
  },
  {
    text: 'A escuta acolhedora e as intervenções pontuais da Helena me ajudaram a desarmar uma autocrítica severa e reestruturar minha autoestima. O espaço da sessão sempre foi um porto seguro para as minhas fragilidades.',
    author: 'A. C.',
    modality: 'Paciente de Psicoterapia Online',
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-charcoal">
            A experiência de quem já vivenciou o processo
          </h2>
          <div className="h-[2px] w-20 bg-primary/40 rounded mx-auto mt-2" />
        </div>

        {/* Embla Carousel Slider Wrapper */}
        <div className="relative bg-sand-50/60 border border-sand-200/40 rounded-[2.5rem] p-8 md:p-16 shadow-sm">
          
          {/* Quote Icon Background visual element */}
          <div className="absolute top-8 left-8 text-primary/10 select-none pointer-events-none">
            <Quote size={80} className="fill-current" />
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 px-4 flex flex-col justify-between text-left">
                  
                  {/* Testimonial Message Text */}
                  <blockquote className="font-serif text-lg md:text-2xl text-charcoal-light leading-relaxed italic mb-8 relative z-10">
                    "{testimonial.text}"
                  </blockquote>
                  
                  {/* Testimonial Author details */}
                  <div className="flex items-center justify-between border-t border-sand-200/50 pt-6">
                    <div>
                      <cite className="not-italic font-serif text-lg font-bold text-charcoal block">
                        {testimonial.author}
                      </cite>
                      <span className="text-xs text-muted-foreground tracking-wide block mt-0.5">
                        {testimonial.modality}
                      </span>
                    </div>

                    {/* Star ratings representation */}
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-accent text-lg">★</span>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Slider Arrows Navigation (Desktop and Mobile) */}
          <div className="flex justify-end items-center space-x-4 mt-8 md:mt-0 md:absolute md:bottom-16 md:right-16 z-20">
            <button
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className={`p-3 rounded-full border border-sand-200 bg-white shadow-sm hover:shadow transition-all duration-300 hover:text-primary ${
                !prevBtnEnabled ? 'opacity-40 cursor-not-allowed' : ''
              }`}
              aria-label="Depoimento Anterior"
            >
              <ArrowLeft size={16} />
            </button>
            
            <button
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className={`p-3 rounded-full border border-sand-200 bg-white shadow-sm hover:shadow transition-all duration-300 hover:text-primary ${
                !nextBtnEnabled ? 'opacity-40 cursor-not-allowed' : ''
              }`}
              aria-label="Próximo Depoimento"
            >
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Bullet dot navigation indicator */}
          <div className="flex justify-center space-x-2 mt-8 md:mt-0 md:absolute md:bottom-12 md:left-1/2 md:-translate-x-1/2">
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === selectedIndex ? 'w-6 bg-primary' : 'w-1.5 bg-sand-300 hover:bg-sand-400'
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
