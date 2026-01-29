
import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="About Us" 
        description="Learn about the journey and mission of HM Digital Solutions, a premium agency based in Lahore." 
      />
      
      {/* Replicated Hero Section from Homepage */}
      <section className="relative w-full pt-20 md:pt-24 lg:pt-32 bg-white overflow-hidden pb-12 md:pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between min-h-[500px] md:min-h-[600px] gap-8 md:gap-16">
            
            {/* LEFT: Text Layer */}
            <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col justify-center order-2 md:order-1">
              <div className="space-y-4 md:space-y-6 lg:space-y-8 animate-fade-in">
                
                <div className="flex items-center space-x-3 text-cyan-600">
                  <span className="text-xl md:text-2xl">🏛️</span>
                  <span className="font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs">
                    Our Legacy & Vision
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                  Pioneering <span className="text-cyan-500">Digital Mastery</span> from Lahore.
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl text-slate-500 max-w-lg font-light leading-relaxed">
                  HM Digital Solutions was born out of a passion for high-end digital craftsmanship. We've grown into a global partner for businesses seeking to redefine their online narrative.
                </p>
                
                <div className="grid grid-cols-2 gap-8 pt-4">
                  <div className="group transition-all duration-300">
                    <h4 className="text-4xl font-black text-cyan-500 group-hover:scale-110 origin-left transition-transform">5+</h4>
                    <p className="text-slate-500 text-sm font-medium">Years of Experience</p>
                  </div>
                  <div className="group transition-all duration-300">
                    <h4 className="text-4xl font-black text-purple-500 group-hover:scale-110 origin-left transition-transform">200+</h4>
                    <p className="text-slate-500 text-sm font-medium">Global Projects</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 md:pt-6">
                  <Link to="/contact" className="bg-slate-900 text-white px-8 py-3.5 md:py-4 rounded-full text-sm md:text-base font-bold hover:bg-cyan-500 transition-all transform hover:-translate-y-1 shadow-xl shadow-slate-200">
                    Join Our Journey
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT: Fixed Image (Matching Home Hero Style) */}
            <div className="w-full md:w-5/12 lg:w-2/5 flex items-center justify-center order-1 md:order-2 group">
              <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-full aspect-[4/5] overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-transparent transition-all duration-500 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] group-hover:-translate-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1200" 
                  alt="HM Digital Studio"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section with Glow Effect */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto p-12 bg-white rounded-[3rem] transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.15)]">
            <h2 className="text-3xl font-bold mb-8">The <span className="text-purple-500">HM</span> Standard</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              In the heart of Azam Garden, Lahore, we built a sanctuary for creativity and technical excellence. Our approach combines the traditional values of craftsmanship with the hyper-accelerated speed of modern digital trends.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Whether it's a high-performance web application or a global SEO strategy, we treat every pixel and every line of code as a testament to our dedication to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 uppercase tracking-widest">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { t: "Transparency", d: "We believe in honest communication and measurable results.", i: "💎" },
              { t: "Innovation", d: "Always staying ahead of the curve with the latest tech stacks.", i: "⚡" },
              { t: "Reliability", d: "Dedicated support that feels like an extension of your team.", i: "🤝" }
            ].map((v, i) => (
              <div key={i} className="group bg-slate-50 p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] text-center hover:bg-white">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl transform transition-transform group-hover:scale-110 group-hover:bg-cyan-50 shadow-sm">{v.i}</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-600 transition-colors">{v.t}</h3>
                <p className="text-slate-500 group-hover:text-slate-600 transition-colors">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
