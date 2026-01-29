
import React, { useState, useEffect, useCallback } from 'react';
import { SERVICES } from '../constants';

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const nextSlide = useCallback(() => {
    setIsChanging(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === SERVICES.length - 1 ? 0 : prev + 1));
      setIsChanging(false);
    }, 500);
  }, []);

  const prevSlide = () => {
    setIsChanging(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? SERVICES.length - 1 : prev - 1));
      setIsChanging(false);
    }, 500);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrent((prev) => (prev === SERVICES.length - 1 ? 0 : prev + 1));
        setIsChanging(false);
      }, 500);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const activeService = SERVICES[current];

  return (
    <section className="relative w-full pt-20 md:pt-24 lg:pt-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[500px] md:min-h-[600px] gap-8 md:gap-16">
          
          {/* LEFT: Clean Typography Layer */}
          <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col justify-center order-2 md:order-1">
            <div className={`space-y-4 md:space-y-6 lg:space-y-8 transition-all duration-1000 ease-out ${isChanging ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              
              <div className="flex items-center space-x-3 text-cyan-600">
                <span className="text-xl md:text-2xl">{activeService.icon}</span>
                <span className="font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs">
                  Premium Solutions
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                {activeService.title.split(' ').map((word, i, arr) => (
                  <span key={i} className={i === arr.length - 1 ? "text-cyan-500" : ""}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-slate-500 max-w-lg font-light leading-relaxed">
                {activeService.description}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4 md:pt-6">
                <a href="#services" className="bg-slate-900 text-white px-8 py-3.5 md:py-4 rounded-full text-sm md:text-base font-bold hover:bg-cyan-500 transition-all transform hover:-translate-y-1 shadow-xl shadow-slate-200">
                  Explore Now
                </a>
                <a href="#contact" className="bg-white text-slate-500 px-8 py-3.5 md:py-4 rounded-full text-sm md:text-base font-bold border border-slate-100 hover:border-cyan-200 hover:text-cyan-600 transition-all">
                  Get a Quote
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Refined Smaller Image Carousel */}
          <div className="w-full md:w-5/12 lg:w-2/5 flex items-center justify-center order-1 md:order-2">
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-full aspect-square overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50">
              <div 
                className="flex h-full slider-transition" 
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {SERVICES.map((service, idx) => (
                  <div key={idx} className="min-w-full h-full relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${current === idx ? 'scale-110 opacity-100' : 'scale-100 opacity-20'}`}
                      loading="lazy"
                    />
                    {/* Soft Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/5 to-transparent"></div>
                  </div>
                ))}
              </div>

              {/* Minimal Navigation Buttons (Overlayed on image for compact look) */}
              <div className="absolute bottom-6 right-6 flex space-x-2 z-20 hidden md:flex">
                <button 
                  onClick={prevSlide} 
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-white/20 hover:bg-white text-slate-800 transition-all shadow-sm"
                  aria-label="Previous"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button 
                  onClick={nextSlide} 
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-white/20 hover:bg-white text-slate-800 transition-all shadow-sm"
                  aria-label="Next"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Bottom Indicators */}
        <div className="flex justify-start items-center space-x-2 py-12">
          {SERVICES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1 rounded-full transition-all duration-500 ${current === idx ? 'bg-cyan-500 w-12' : 'bg-slate-100 w-4 hover:bg-slate-200'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
