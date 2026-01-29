
import React from 'react';
import SEO from '../components/SEO';
import HeroSlider from '../components/HeroSlider';
import { SERVICES, PORTFOLIO, BUSINESS_INFO } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Modern Digital Solutions in Lahore" 
        description="Premium web development, SEO, and UI/UX services for businesses globally. HM Digital Solutions delivers excellence."
      />
      
      <HeroSlider />

      {/* Services Grid Preview */}
      <section id="services" className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 cursor-default">
              <span>Digital Excellence</span>
              <span className="text-cyan-500 mx-2">&</span>
              <span>Craftsmanship</span>
            </h2>
            <p className="text-slate-500 text-lg">
              We don't just build, we engineer experiences that drive growth and visibility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service) => (
              <div 
                key={service.id} 
                className="group bg-slate-50 p-10 rounded-3xl transition-all duration-500 hover:bg-white hover:-translate-y-2 border border-transparent hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] relative overflow-hidden"
              >
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500 inline-block">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-slate-900 transition-colors">{service.title}</h3>
                <p className="text-slate-500 mb-6 leading-relaxed group-hover:text-slate-600 transition-colors">{service.description}</p>
                <Link to="/services" className="text-cyan-600 font-bold hover:text-cyan-700 inline-flex items-center group/link">
                  Learn More <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-16 uppercase tracking-widest">Our Blueprint</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { n: "01", t: "Strategize", d: "Understanding your vision and market landscape." },
              { n: "02", t: "Design", d: "Crafting a unique visual language and prototype." },
              { n: "03", t: "Engineer", d: "High-performance code with scalability in mind." },
              { n: "04", t: "Launch", d: "Deploying and optimizing for peak performance." }
            ].map((item, idx) => (
              <div key={idx} className="relative group p-10 bg-white rounded-3xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]">
                <div className="absolute top-6 right-8 text-6xl font-black text-slate-100 transition-colors duration-500 group-hover:text-slate-300 select-none">
                  {item.n}
                </div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-4">{item.t}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Grid */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold mb-4">Portfolio <span className="text-purple-500">Highlights</span></h2>
              <p className="text-slate-500">A showcase of our recent endeavors in the digital realm.</p>
            </div>
            <Link to="/services" className="bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-slate-800 transition-colors">View All Services</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO.slice(0, 3).map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-3xl bg-slate-50 aspect-[4/3] transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-cyan-500 to-purple-600 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">Ready to Transform Your <br/> Digital Presence?</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl shadow-cyan-900/20">Get Started Today</Link>
            <a href={BUSINESS_INFO.waLink} className="bg-slate-900/30 backdrop-blur-md border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
