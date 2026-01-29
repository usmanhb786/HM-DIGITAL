
import React, { useState } from 'react';
import SEO from '../components/SEO';
import { BUSINESS_INFO, SERVICES } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call to Firebase
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <SEO title="Contact Us" description="Get in touch with HM Digital Solutions for a quote on web, SEO, and design projects." />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-extrabold mb-6">Let's Build Something <span className="text-cyan-500">Great</span></h1>
            <p className="text-slate-500 text-lg">Send us a message and we'll get back to you within 24 hours.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-[2rem] border border-transparent transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-400">Name</label>
                    <input 
                      required
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-400">Phone</label>
                    <input 
                      required
                      type="tel"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+92 322..."
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-400">Email Address</label>
                  <input 
                    required
                    type="email"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-400">Service Required</label>
                  <select 
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-400">Message</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button 
                  disabled={status === 'loading'}
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all transform hover:scale-[1.01] active:scale-95 flex items-center justify-center shadow-lg shadow-cyan-500/10 ${status === 'loading' ? 'bg-slate-400 cursor-not-allowed' : 'bg-slate-900 hover:bg-slate-800'}`}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <p className="text-green-600 text-center font-semibold animate-bounce">✓ Message sent successfully!</p>
                )}
              </form>
            </div>

            {/* Info & Map */}
            <div className="space-y-12">
              <div className="space-y-6">
                {[
                  { icon: "📍", title: "Our Studio", text: BUSINESS_INFO.address, color: "bg-cyan-100 text-cyan-600" },
                  { icon: "📧", title: "Email Us", text: BUSINESS_INFO.email, color: "bg-purple-100 text-purple-600" },
                  { icon: "📱", title: "Direct Connect", text: `WhatsApp: ${BUSINESS_INFO.whatsapp}`, color: "bg-green-100 text-green-600" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-6 p-6 bg-slate-50 rounded-3xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.15)] group hover:bg-white">
                    <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110`}>{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 group-hover:text-slate-900 transition-colors">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Embedded Map */}
              <div className="w-full h-80 bg-slate-200 rounded-[2rem] overflow-hidden border border-transparent transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.5367364112365!2d74.2764103753518!3d31.503932774212555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919036a1603cc3d%3A0x633619934661858c!2sAzam%20Garden%20Multan%20Rd%2C%20Lahore!5e0!3m2!1sen!2s!4v1714570000000!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
