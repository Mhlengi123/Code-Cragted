import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_PROMPT = `
You are the AI Digital Strategist for CodeCrafted, a boutique engineering and web development firm founded by Mhlengi Mathonsi.
Your goal is to answer client questions professionally, authoritatively, and concisely.

Context about CodeCrafted:
- Slogan: Strategic Global Digital Asset Management.
- Founder: Mhlengi Mathonsi.
- Core Philosophy: We don't build websites; we build performance engines. Focus on technical rigour and measurable growth.
- Services: Strategic UI/UX, E-commerce Marketplace Engineering, Performance Optimization (sub-second load times), Technical SEO, Managed Infrastructure, and Custom Systems (booking engines, portals).
- Pricing (One-time): 
    - Basic Business: R2,500 – R4,500
    - Professional / E-commerce: R6,500 – R12,000
    - Custom Web Application: R15,000+
- Maintenance Plans:
    - Basic Care: R850/mo
    - Pro Care: R1,500/mo
    - Business Care: R2,800/mo

Guidelines:
1. Always be professional, technical yet accessible, and helpful.
2. If the user asks about starting a project, strongly recommend our "Strategic Briefing" (available at #briefing).
3. If you don't know an answer, suggest contacting Mhlengi directly at mathonsimhlengi8@gmail.com or via WhatsApp at +27 66 252 7664.
4. Keep responses relatively short (under 3 sentences unless complex).
5. Use "we" and "our team".
`;

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Welcome to CodeCrafted. I'm your AI Strategist. How can I assist with your project objectives today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show greeting popup after 3 seconds if chat is not open
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowGreeting(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: `System Instruction: ${SYSTEM_PROMPT}` }] },
          ...messages.map(m => ({
            role: m.role === 'bot' ? 'model' : 'user',
            parts: [{ text: m.text }]
          })),
          { role: 'user', parts: [{ text: userMessage }] }
        ],
      });

      const botText = response.text || "I apologize, but I encountered a technical variance. Please reach out to our team directly.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Technical error in communication channel. Please use our direct line or email for urgent inquiries." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed bottom-24 right-8 z-[200]">
        <AnimatePresence>
          {showGreeting && !isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10, x: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className="absolute bottom-20 right-0 w-48 bg-white p-4 shadow-2xl border border-slate-100 rounded-xl rounded-br-none"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setShowGreeting(false); }}
                className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <X size={10} />
              </button>
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                  <Sparkles size={10} /> AI Strategist
                </p>
                <p className="text-[11px] font-serif italic text-slate-600 leading-tight">
                  Need help with your technical objectives?
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowGreeting(false);
          }}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group ${isOpen ? 'bg-primary text-white scale-90' : 'bg-accent text-white hover:scale-110'}`}
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-accent border-2 border-white"></span>
            </span>
          )}
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-40 right-8 w-[90vw] md:w-[400px] h-[500px] bg-white z-[200] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 flex flex-col overflow-hidden rounded-2xl"
          >
            {/* Header */}
            <div className="bg-primary p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Bot className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest leading-none">AI Strategist</h3>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-white/50 flex items-center gap-1 mt-1">
                    <Sparkles size={8} /> Strategic Context Powered
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center ${m.role === 'user' ? 'bg-primary text-white' : 'bg-white border border-slate-100 text-accent'}`}>
                      {m.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`p-4 text-xs font-serif leading-relaxed ${m.role === 'user' ? 'bg-primary text-white' : 'bg-white text-slate-600 border border-slate-100 shadow-sm'} italic`}>
                      {m.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                   <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center">
                        <Loader2 size={14} className="text-accent animate-spin" />
                      </div>
                      <div className="bg-white border border-slate-100 p-4 space-y-2">
                         <div className="h-2 w-12 bg-slate-100 animate-pulse rounded" />
                         <div className="h-2 w-24 bg-slate-100 animate-pulse rounded" />
                      </div>
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about project strategy..."
                className="flex-1 bg-slate-50 border-0 border-b border-slate-100 p-3 text-xs font-serif focus:ring-0 focus:border-accent transition-all italic"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-10 h-10 bg-primary text-white flex items-center justify-center hover:bg-accent transition-all disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
