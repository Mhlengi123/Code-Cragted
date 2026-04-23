import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, ChevronRight, Target, Clock, Zap, Shield, FileText } from 'lucide-react';

export default function Briefing() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'E-commerce',
    budgetRange: 'R15,000 - R30,000',
    timeline: 'Immediate (1-2 months)',
    description: '',
    objectives: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email body
    const body = `
Strategic Briefing Request
------------------------
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Project Type: ${formData.projectType}
Budget Range: ${formData.budgetRange}
Timeline: ${formData.timeline}

Objectives & Infrastructure Requirements:
${formData.objectives}

Message:
${formData.description}
    `.trim();

    const subject = `Strategic Briefing Request: ${formData.projectType} - ${formData.company || formData.name}`;
    const mailtoLink = `mailto:mathonsimhlengi8@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Trigger email client
    window.location.href = mailtoLink;
    
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projectTypes = [
    'E-commerce Marketplace',
    'Custom Booking Engines',
    'FinTech / Dashboard',
    'SaaS / Product Development',
    'Corporate Headquarters',
    'Technical Maintenance'
  ];

  const budgetRanges = [
    'R2,500 - R6,500',
    'R6,500 - R15,000',
    'R15,000 - R30,000',
    'R30,000 - R60,000',
    'R60,000+'
  ];

  if (submitted) {
    return (
      <div className="pt-40 pb-32 max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white border border-slate-100 p-12 md:p-24 text-center space-y-8 shadow-2xl max-w-3xl mx-auto"
        >
          <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="text-accent" size={48} />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-primary tracking-tighter uppercase">Briefing Received</h2>
            <p className="font-serif text-slate-500 italic text-xl">
              Our engineering team is reviewing your requirements. We will prepare a preliminary strategy and reach out within 24 hours.
            </p>
          </div>
          <div className="pt-8">
            <a 
              href="#home"
              className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-accent transition-all"
            >
              Return Home <ChevronRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-20 max-w-7xl mx-auto px-4 md:px-8 space-y-24">
      <div className="max-w-4xl space-y-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Strategic Onboarding</p>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-primary uppercase leading-[0.9]">
          REQUEST <br /> <span className="text-accent underline decoration-slate-200 underline-offset-8">BRIEFING</span>
        </h1>
        <p className="font-serif text-slate-500 text-xl italic pt-6 leading-relaxed">
          Provide the technical constraints and business objectives for your project. This data allows us to bypass generalities and present a concrete engineering strategy in our first meeting.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <form onSubmit={handleSubmit} className="space-y-12 bg-white border border-slate-100 p-8 md:p-12 shadow-xl">
            {/* Identity Group */}
            <div className="space-y-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-slate-100 pb-4 flex items-center gap-2">
                <Shield size={14} className="text-accent" /> Part 01: Client Identity
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                   <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Principal Name</label>
                   <input 
                     required
                     type="text" 
                     className="w-full bg-slate-50 border-0 border-b-2 border-slate-100 p-4 focus:ring-0 focus:border-accent transition-colors font-serif"
                     placeholder="Mhlengi Mathonsi"
                     onChange={(e) => setFormData({...formData, name: e.target.value})}
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Communication Channel (Email)</label>
                   <input 
                     required
                     type="email" 
                     className="w-full bg-slate-50 border-0 border-b-2 border-slate-100 p-4 focus:ring-0 focus:border-accent transition-colors font-serif"
                     placeholder="principal@company.com"
                     onChange={(e) => setFormData({...formData, email: e.target.value})}
                   />
                </div>
              </div>
            </div>

            {/* Scope Group */}
            <div className="space-y-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-slate-100 pb-4 flex items-center gap-2">
                <Target size={14} className="text-accent" /> Part 02: Technical Scope
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                   <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Asset Category</label>
                   <select 
                     className="w-full bg-slate-50 border-0 border-b-2 border-slate-100 p-4 focus:ring-0 focus:border-accent transition-colors font-serif appearance-none"
                     onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                   >
                     {projectTypes.map(type => <option key={type} value={type}>{type}</option>)}
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Capital Pool (Budget)</label>
                   <select 
                     className="w-full bg-slate-50 border-0 border-b-2 border-slate-100 p-4 focus:ring-0 focus:border-accent transition-colors font-serif appearance-none"
                     onChange={(e) => setFormData({...formData, budgetRange: e.target.value})}
                   >
                     {budgetRanges.map(range => <option key={range} value={range}>{range}</option>)}
                   </select>
                </div>
              </div>
              <div className="space-y-2">
                 <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Core Objectives & Infrastructure Requirements</label>
                 <textarea 
                   required
                   rows={6}
                   className="w-full bg-slate-50 border-0 border-b-2 border-slate-100 p-4 focus:ring-0 focus:border-accent transition-colors font-serif resize-none"
                   placeholder="Describe the problem we are solving. What are the key performance indicators for this project?"
                   onChange={(e) => setFormData({...formData, objectives: e.target.value})}
                 />
              </div>
            </div>

            <div className="pt-8">
               <button 
                 type="submit"
                 className="w-full md:w-auto bg-primary text-white px-12 py-6 font-bold uppercase text-[11px] tracking-[0.3em] hover:bg-accent transition-all flex items-center justify-center gap-4 group"
               >
                 SUBMIT STRATEGIC BRIEF <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </button>
            </div>
          </form>
        </div>

        <aside className="lg:col-span-4 space-y-8">
           <div className="bg-primary p-12 text-white space-y-8">
              <h3 className="text-xl font-black uppercase tracking-tighter italic border-b border-white/10 pb-6">What Happens Next?</h3>
              
              <div className="space-y-8 text-white/70">
                 <div className="flex gap-6">
                    <div className="w-10 h-10 bg-accent/20 flex-shrink-0 flex items-center justify-center text-accent font-bold italic">01</div>
                    <div className="space-y-2">
                       <p className="text-[10px] font-bold uppercase tracking-widest text-white">Technical Audit</p>
                       <p className="text-xs font-serif italic">We analyze your requirements against current technical standards and market competitors.</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <div className="w-10 h-10 bg-accent/20 flex-shrink-0 flex items-center justify-center text-accent font-bold italic">02</div>
                    <div className="space-y-2">
                       <p className="text-[10px] font-bold uppercase tracking-widest text-white">Strategic Roadmap</p>
                       <p className="text-xs font-serif italic">A custom engineering plan is drafted detailing timelines, tech-stack, and ROI projections.</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <div className="w-10 h-10 bg-accent/20 flex-shrink-0 flex items-center justify-center text-accent font-bold italic">03</div>
                    <div className="space-y-2">
                       <p className="text-[10px] font-bold uppercase tracking-widest text-white">Alignment Call</p>
                       <p className="text-xs font-serif italic">We meet to refine the strategy and discuss the capital arrangement for the engagement.</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="p-12 border border-slate-100 space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent flex items-center gap-2">
                <Zap size={12} /> Rapid Deployment
              </p>
              <p className="text-sm font-serif text-slate-500 italic leading-relaxed">
                Projects with clear briefs tend to reach production 30% faster than those without.
              </p>
           </div>
        </aside>
      </div>
    </div>
  );
}
