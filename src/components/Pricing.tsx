import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Info, ShieldCheck, Mail, MessageCircle, X, ArrowRight, FileText, Settings, Shield } from 'lucide-react';
import { ONE_TIME_PLANS, MAINTENANCE_PLANS, PricingPlan } from '../constants';

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  const handleChoosePlan = (plan: PricingPlan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="pt-40 pb-20 max-w-7xl mx-auto px-4 md:px-8 space-y-24">
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Pricing Architecture</p>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-primary uppercase leading-[0.9]">
          STRATEGIC <br /> <span className="text-accent underline decoration-slate-200 underline-offset-8">ENGAGEMENT</span>
        </h1>
        <p className="font-serif text-slate-500 text-xl italic pt-6 max-w-2xl mx-auto">
          Transparent structures designed for capital efficiency and long-term digital growth. No hidden variables.
        </p>
      </div>

      {/* One-Time Builds */}
      <section className="space-y-12">
        <div className="grid lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {ONE_TIME_PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`p-12 transition-all flex flex-col bg-white hover:bg-slate-50 ${
                index === 1 ? 'relative z-10 shadow-2xl scale-105 border border-accent/20' : ''
              }`}
            >
              <div className="space-y-8 flex-1">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">{plan.name}</span>
                    {index === 1 && <span className="bg-accent text-[9px] px-2 py-0.5 text-white font-bold tracking-widest">STRATEGIC</span>}
                  </div>
                  <div className="text-5xl font-black tracking-tighter text-primary">{plan.price.split(' ')[0]}</div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Initial Capital Commitment</p>
                </div>
                <div className="h-px bg-gray-100" />
                <ul className="space-y-4">
                  {plan.features.map(feature => (
                    <li key={feature.text} className="flex flex-col gap-1">
                      <div className="flex items-start gap-3 text-xs font-serif text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        {feature.text}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleChoosePlan(plan)}
                className={`mt-12 w-full py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all border ${
                  index === 1 ? 'bg-primary text-white hover:bg-accent border-primary' : 'bg-transparent text-primary hover:bg-primary hover:text-white border-primary/20'
                }`}
              >
                View Project Details
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="space-y-12">
        <div className="flex items-center gap-6">
           <h2 className="text-2xl font-black uppercase tracking-tighter text-primary italic">Continuous Value Management</h2>
           <div className="h-px bg-gray-200 flex-1 opacity-50" />
        </div>
        <div className="grid lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {MAINTENANCE_PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-12 bg-white flex flex-col gap-8 hover:bg-slate-50 transition-colors"
            >
              <div className="space-y-4">
                 <h3 className="text-sm font-bold uppercase tracking-widest text-primary">{plan.name}</h3>
                 <div className="text-2xl font-black tracking-tighter text-accent">{plan.price}</div>
              </div>
              <ul className="space-y-3 flex-1">
                {plan.features.map(feature => (
                  <li key={feature.text} className="text-xs font-serif text-slate-500 italic flex gap-2">
                    <span className="text-accent">/</span> {feature.text}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleChoosePlan(plan)}
                className="w-full border border-gray-200 py-3 text-[10px] font-bold uppercase tracking-widest hover:border-primary transition-all"
              >
                View Maintenance Details
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPlan(null)}
              className="fixed inset-0 bg-primary/90 backdrop-blur-md z-[100] cursor-zoom-out"
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl bg-white z-[101] overflow-hidden shadow-2xl flex flex-col border border-slate-100"
            >
              <button 
                onClick={() => setSelectedPlan(null)}
                className="absolute top-6 right-6 p-2 text-primary hover:text-accent transition-colors z-[102]"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12 space-y-12">
                 <div className="space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Engagement Specifications</p>
                    <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tighter uppercase leading-none italic">
                      {selectedPlan.name}
                    </h2>
                    <div className="text-2xl font-bold text-slate-400 font-serif italic">{selectedPlan.price}</div>
                 </div>

                 <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                       <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary border-b border-slate-100 pb-2 flex items-center gap-2">
                         <FileText size={14} className="text-accent" /> Strategic Deliverables
                       </h4>
                       <ul className="space-y-6">
                          {selectedPlan.features.map(f => (
                            <li key={f.text} className="space-y-1">
                               <div className="text-[11px] font-bold text-primary flex gap-3">
                                  <Check size={12} className="text-accent mt-0.5 flex-shrink-0" />
                                  {f.text}
                               </div>
                               <p className="pl-6 text-[10px] font-serif text-slate-400 leading-relaxed italic">{f.detail}</p>
                            </li>
                          ))}
                       </ul>
                    </div>
                    <div className="space-y-6">
                       <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary border-b border-slate-100 pb-2 flex items-center gap-2">
                         <Shield size={14} className="text-accent" /> Engagement Terms
                       </h4>
                       <div className="space-y-4">
                          <div className="p-4 bg-slate-50 border border-slate-100 space-y-2">
                             <p className="text-[9px] font-bold uppercase text-primary">Technical Setup</p>
                             <p className="text-[10px] font-serif text-slate-500 italic">Deployment on secure, high-performance infrastructure with post-launch technical support.</p>
                          </div>
                          <div className="p-4 bg-slate-50 border border-slate-100 space-y-2">
                             <p className="text-[9px] font-bold uppercase text-primary">Ownership</p>
                             <p className="text-[10px] font-serif text-slate-500 italic">100% intellectual property transfer upon final project settlement.</p>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row gap-6 items-center">
                    <a 
                      href="#briefing"
                      onClick={() => setSelectedPlan(null)}
                      className="bg-primary text-white px-10 py-5 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-accent transition-all w-full md:w-auto text-center flex items-center justify-center gap-3 group"
                    >
                      REQUEST BRIEFING <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 italic max-w-xs">
                       * Custom requirements may adjust the final capital arrangement.
                    </p>
                 </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Trust Bar */}
      <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 py-20">
         <div className="bg-white p-16 space-y-6">
            <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3">
               <Mail className="text-accent" /> Electronic Mail
            </h3>
            <p className="font-serif text-slate-500 italic leading-relaxed">Engage directly via our secure communication channel for formal project briefs and inquiries.</p>
            <a href="mailto:mathonsimhlengi8@gmail.com" className="text-lg font-bold text-primary hover:text-accent transition-colors block border-b-2 border-accent/10 w-fit">mathonsimhlengi8@gmail.com</a>
         </div>
         <div className="bg-white p-16 space-y-6">
            <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3">
               <MessageCircle className="text-accent" /> Instant Comms
            </h3>
            <p className="font-serif text-slate-500 italic leading-relaxed">For rapid technical alignment and preliminary discussions, our direct line is available.</p>
            <a href="https://wa.me/27662527664" className="text-lg font-bold text-primary hover:text-accent transition-colors block border-b-2 border-accent/10 w-fit">+27 66 252 7664</a>
         </div>
      </div>
    </div>
  );
}
