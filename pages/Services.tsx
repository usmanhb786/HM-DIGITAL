
import React from 'react';
import SEO from '../components/SEO';
import { SERVICES, BUSINESS_INFO } from '../constants';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Our Services" 
        description="Explore our full range of digital solutions: Web Dev, SEO, Branding, and UI/UX design at HM Digital Solutions Lahore."
      />
      
      {/* Services Hero */}
      <section className="relative w-full pt-20 md:pt-24 lg:pt-32 bg-white overflow-hidden pb-12 md:pb-20 border-b border-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between min-h-[400px] md:min-h-[500px] gap-8 md:gap-16">
            
            <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col justify-center animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 text-cyan-600">
                  <span className="text-xl md:text-2xl">⚡</span>
                  <span className="font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs">
                    Comprehensive Expertise
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                  Solutions Tailored for <span className="text-cyan-500">Global Impact.</span>
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl text-slate-500 max-w-lg font-light leading-relaxed">
                  We combine strategy, design, and engineering to deliver digital products that stand out in a crowded marketplace.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-cyan-500 transition-all shadow-xl shadow-slate-200 transform hover:-translate-y-1">
                    Get a Custom Quote
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full md:w-5/12 lg:w-2/5 group">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(6,182,212,0.3)] border border-transparent group-hover:border-cyan-400/50 group-hover:-translate-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                  alt="Our Services Overview"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold uppercase tracking-widest text-slate-400 mb-4">The Service Suite</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Everything you need to build, scale, and dominate your niche in the digital world.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="group bg-white p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] relative overflow-hidden"
              >
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500 inline-block">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-slate-900 transition-colors">{service.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed group-hover:text-slate-600 transition-colors">{service.description}</p>
                <div className="w-full h-40 rounded-2xl overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <a href={BUSINESS_INFO.waLink} className="text-cyan-600 font-bold hover:text-cyan-700 inline-flex items-center group/link">
                  Consult Now <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Block */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Every Project is a New <br/> <span className="text-cyan-400">Masterpiece.</span></h2>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                We don't do cookie-cutter. Your business deserves a tailored strategy that reflects your unique vision and goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/contact" className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-105">Request a Quote</Link>
                <a href={BUSINESS_INFO.waLink} className="border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/5 transition-all">Quick WhatsApp Inquiry</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
