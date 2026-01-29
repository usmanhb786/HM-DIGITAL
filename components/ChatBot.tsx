
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { BUSINESS_INFO, SERVICES } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const SUGGESTIONS = [
  "Web Development Services",
  "SEO Packages",
  "Get a Quote",
  "Where are you located?"
];

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm your HM Digital assistant. I can help you with web design, SEO, or branding questions. What's on your mind?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (userText: string) => {
    if (!userText.trim() || isTyping) return;

    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemInstruction = `
        You are the official AI representative for HM Digital Solutions, a premium digital agency in Lahore.
        Business Details:
        - Address: ${BUSINESS_INFO.address}
        - Services: ${SERVICES.map(s => s.title).join(', ')}
        - Core Mission: High-end digital craftsmanship for global clients.
        
        Guidelines:
        1. Tone: Premium, professional, encouraging, and slightly minimalist.
        2. Language: English only.
        3. Lead Gen: If the user is interested in a service, encourage them to use the WhatsApp link (${BUSINESS_INFO.whatsapp}) or fill out our contact form.
        4. Pricing: We don't list prices here. Say "Every project is unique. Let's discuss your requirements to provide a tailored quote."
        5. Length: Keep answers concise (max 2-3 sentences).
        6. Competitors: Never mention them. Focus only on HM's excellence.
      `;

      // Using the recommended 'gemini-3-flash-preview' model for Q&A tasks.
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userText,
        config: {
          systemInstruction: systemInstruction, // System instruction belongs in config.
          temperature: 0.8,
          topK: 40,
          topP: 0.95,
        }
      });

      // Directly access .text property.
      const aiText = response.text || "I'm having a bit of a creative block. Could you try rephrasing or contact us on WhatsApp?";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("ChatBot Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Service is temporarily busy. Please message us on WhatsApp at +923225700804 for instant support." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-28 right-6 z-[101]">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[340px] sm:w-[400px] h-[550px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden border border-slate-100 animate-fade-in">
          {/* Header */}
          <div className="bg-slate-900 p-6 text-white">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-cyan-500 rounded-2xl flex items-center justify-center font-bold text-sm">HM</div>
                <div>
                  <h3 className="font-bold text-sm">Digital Help Center</h3>
                  <p className="text-[10px] text-cyan-400 font-medium uppercase tracking-wider">Online Support Agent</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform duration-300">
                <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4 bg-slate-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-5 py-3.5 rounded-2xl text-[13px] sm:text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-slate-900 text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white px-5 py-3.5 rounded-2xl shadow-sm border border-slate-100 rounded-tl-none flex space-x-1.5">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Suggestions */}
          {!isTyping && messages.length < 5 && (
            <div className="px-6 py-2 flex flex-wrap gap-2 bg-slate-50/50">
              {SUGGESTIONS.map((s, i) => (
                <button 
                  key={i} 
                  onClick={() => handleSendMessage(s)}
                  className="text-[11px] font-medium bg-white border border-slate-200 px-3 py-1.5 rounded-full hover:border-cyan-500 hover:text-cyan-600 transition-all"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(input); }} 
            className="p-5 bg-white border-t border-slate-100 flex items-center space-x-3"
          >
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow bg-slate-100 border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
            />
            <button 
              type="submit"
              disabled={!input.trim() || isTyping}
              className="bg-cyan-500 text-white p-3.5 rounded-2xl hover:bg-slate-900 disabled:opacity-50 transition-all transform active:scale-90 shadow-lg shadow-cyan-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
            </button>
          </form>
        </div>
      )}

      {/* Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 transform ${isOpen ? 'bg-white text-slate-900 rotate-180 scale-90' : 'bg-slate-900 text-white hover:scale-110'}`}
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        ) : (
          <div className="relative">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 18v-6a9 9 0 0118 0v6" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12v.01" />
              <circle cx="12" cy="12" r="1" fill="currentColor" />
            </svg>
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse"></span>
          </div>
        )}
      </button>
    </div>
  );
};

export default ChatBot;
