
import React, { useState, useCallback } from 'react';
import SEO from '../components/SEO';
import { GoogleGenAI } from "@google/genai";

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'hm804') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid security key. Please try again.');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Fix: Cast the array-like FileList to File[] to ensure 'file' is properly typed as File (which extends Blob).
      (Array.from(files) as File[]).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImages(prev => [reader.result as string, ...prev].slice(0, 12));
        };
        // This now correctly identifies 'file' as a Blob.
        reader.readAsDataURL(file);
      });
    }
  };

  const generateAIText = async () => {
    if (!aiPrompt) return;
    setIsGenerating(true);
    try {
      // Always initialize GoogleGenAI with a named apiKey parameter right before usage.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      // Using 'gemini-3-flash-preview' for basic text tasks as per model guidelines.
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Generate a professional, high-end portfolio project description for: ${aiPrompt}. Focus on results and craftsmanship.`,
        config: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95
        }
      });
      // Use .text property directly (not a method).
      setAiResponse(response.text || 'No response from AI');
    } catch (err) {
      setAiResponse('Connection error. Verify your environment API_KEY.');
    } finally {
      setIsGenerating(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
        <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30 border border-transparent">
          <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">HM</div>
          <h2 className="text-2xl font-bold text-center mb-2">Admin Dashboard</h2>
          <p className="text-slate-400 text-sm text-center mb-8">Secure access for HM Digital Team</p>
          <form onSubmit={handleLogin} className="space-y-6">
            <input 
              type="password" 
              placeholder="Enter Security Key" 
              className="w-full px-5 py-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-center tracking-widest"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg active:scale-95">Verify & Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <SEO title="Admin Console" description="Backend management for HM Digital Solutions assets and content." />
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">Control <span className="text-cyan-500">Center</span></h1>
            <p className="text-slate-500">Welcome back. Manage your digital assets and copy.</p>
          </div>
          <button onClick={() => setIsAuthenticated(false)} className="px-6 py-2 bg-white border border-slate-200 rounded-full text-slate-500 hover:text-red-500 hover:border-red-100 transition-all font-medium text-sm shadow-sm">Sign Out Safely</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.15)]">
              <h3 className="text-xl font-bold mb-6">Asset Manager</h3>
              
              <label className="block border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center hover:border-cyan-400 transition-all cursor-pointer group bg-slate-50/50">
                <input type="file" multiple className="hidden" onChange={handleFileUpload} accept="image/*" />
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📂</div>
                <p className="text-slate-500 group-hover:text-slate-900 transition-colors font-medium">Drag & drop project images</p>
                <p className="text-slate-400 text-xs mt-2 italic">Support: JPG, PNG, WEBP (Max 5MB)</p>
              </label>

              <div className="mt-10">
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Recent Uploads</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {previewImages.map((src, i) => (
                    <div key={i} className="aspect-square bg-slate-100 rounded-xl overflow-hidden relative group border border-slate-100">
                      <img src={src} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-xs font-bold">READY</span>
                      </div>
                    </div>
                  ))}
                  {[1,2,3,4].slice(0, 4 - Math.min(4, previewImages.length)).map(i => (
                    <div key={`ph-${i}`} className="aspect-square bg-slate-50 rounded-xl border border-dashed border-slate-200 flex items-center justify-center text-slate-300">
                      <span className="text-2xl">🖼️</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">✨</span> Gemini Copywriter
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">Instantly generate high-converting project summaries for the portfolio.</p>
              
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Project Title..." 
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white outline-none focus:bg-white/20 transition-all placeholder-slate-500"
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                />
                <button 
                  onClick={generateAIText}
                  disabled={isGenerating}
                  className="w-full py-4 bg-cyan-500 rounded-xl font-bold hover:bg-cyan-400 transition-all disabled:opacity-50 shadow-lg shadow-cyan-500/20 active:scale-95"
                >
                  {isGenerating ? 'Drafting...' : 'Generate Copy'}
                </button>
              </div>

              {aiResponse && (
                <div className="mt-6 p-5 bg-white/5 rounded-2xl border border-white/10 text-sm leading-relaxed max-h-60 overflow-y-auto custom-scrollbar italic text-cyan-50">
                  {aiResponse}
                </div>
              )}
            </div>

            <div className="bg-white p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.15)]">
              <h3 className="text-lg font-bold mb-4">Quick Insights</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl group hover:bg-cyan-50 transition-colors border border-transparent hover:border-cyan-100">
                  <span className="text-slate-500 text-sm group-hover:text-cyan-600 transition-colors">Pending Leads</span>
                  <span className="font-bold text-slate-900 group-hover:text-cyan-700">12</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl group hover:bg-purple-50 transition-colors border border-transparent hover:border-purple-100">
                  <span className="text-slate-500 text-sm group-hover:text-purple-600 transition-colors">Avg. CTR</span>
                  <span className="font-bold text-slate-900 group-hover:text-purple-700">4.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
