import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, ArrowRight } from 'lucide-react';
import ProjectCarousel from './ProjectCarousel';

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    setIsSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const steps = [
    { title: "01 Strategy", desc: "We define the technical landscape and business objectives before a single line of code is written." },
    { title: "02 Engineering", desc: "Our team builds high-performance infrastructure using modern, durable technical stacks." },
    { title: "03 Growth", desc: "Deployment is just the beginning. We optimize for conversion and measurable results." }
  ];

  const testimonials = [
    { text: "The technical rigour CodeCrafted brought to our e-commerce migration was transformative.", name: "Sarah J.", industry: "Fashion Retail" },
    { text: "Fast, reliable, and actually understood our business goals. Highly recommended.", name: "David M.", industry: "SaaS Founder" },
    { text: "A boutique feel with enterprise results. Our conversion rates increased by 40%.", name: "Lindiwe K.", industry: "FinTech" }
  ];

  const coreServices = [
    { title: 'Strategic UI/UX Design', desc: 'Interfaces engineered for psychology-driven user engagement and retention.' },
    { title: 'E-commerce Engineering', desc: 'Secure, high-velocity online stores optimized for maximum average order value.' },
    { title: 'Performance Optimization', desc: 'Sub-second load times that reduce bounce rates and improve SEO rankings.' },
    { title: 'Technical SEO', desc: 'Search performance rooted in clean code, metadata, and crawling efficiency.' },
    { title: 'Managed Infrastructure', desc: 'Ensuring your digital assets remain secure, updated, and performing optimally.' },
    { title: 'Custom Systems', desc: 'Bespoke booking engines, portals, and automations tailored to your business workflow.' },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section id="hero" className="bg-grid min-h-[90vh] flex items-center text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="space-y-12 max-w-5xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.4em] opacity-60">Est. 2019</p>
            <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
              WE BUILD DIGITAL <br /><span className="text-accent underline decoration-white/20 underline-offset-[12px]">INFRASTRUCTURE</span> THAT COMPOUNDS
            </h1>
            <div className="flex flex-col md:flex-row gap-12 pt-8">
              <p className="text-sm font-serif italic text-white/70 max-w-md leading-relaxed border-l-2 border-accent pl-6">
                CodeCrafted engineers high-performance websites and e-commerce systems for businesses that demand technical rigour and measurable growth.
              </p>
              <div className="flex gap-4 items-end">
                <a href="#portfolio" className="bg-accent text-white px-8 py-3 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:text-primary transition-all">
                  View Our Work →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Stats (About Section) */}
      <section id="about" className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent">The Firm</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase text-primary leading-tight">
                A Disciplined Approach to <br /> Digital Excellence.
              </h2>
              <p className="font-serif text-slate-600 leading-relaxed text-lg">
                Founded by Mhlengi Mathonsi, CodeCrafted manages digital assets for institutional partners, scaling businesses, and select personal brands. Our approach is rooted in technical rigour and a relentless focus on conversion results.
              </p>
              <div className="flex gap-16 pt-8 text-primary">
                 <div>
                    <p className="text-3xl font-black">100%</p>
                    <p className="text-[9px] uppercase font-bold text-slate-400 tracking-widest">Client retention</p>
                 </div>
                 <div>
                    <p className="text-3xl font-black">05+</p>
                    <p className="text-[9px] uppercase font-bold text-slate-400 tracking-widest">Years Expertise</p>
                 </div>
                 <div>
                    <p className="text-3xl font-black">50+</p>
                    <p className="text-[9px] uppercase font-bold text-slate-400 tracking-widest">Assets Launched</p>
                 </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-100 overflow-hidden border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                  alt="Strategy Meeting" 
                  className="w-full h-full object-cover grayscale opacity-70"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-8 shadow-2xl max-w-xs">
                 <p className="text-[10px] uppercase font-bold tracking-widest mb-2 opacity-60">Founder's Note</p>
                 <p className="font-serif italic text-xl leading-tight text-white">"We don't build websites; we build performance engines."</p>
                 <p className="text-[9px] font-bold uppercase mt-4 block">– Mhlengi Mathonsi</p>
              </div>
            </div>
        </div>
      </section>

      {/* The Methodology */}
      <section className="bg-secondary/30 py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-20">
          <div className="text-center space-y-4">
             <p className="text-[10px] font-bold uppercase tracking-widest text-accent">Strategic Process</p>
             <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase text-primary">A Three-Phase Engagement</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {steps.map((step) => (
              <div key={step.title} className="bg-white p-12 space-y-6">
                <h3 className="text-xl font-bold uppercase tracking-tight text-primary italic">{step.title}</h3>
                <p className="font-serif text-sm text-slate-500 leading-relaxed italic">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Works - Portfolio Carousel */}
      <ProjectCarousel />

      {/* Services Section */}
      <section className="bg-white py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent">Technical Pillars</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase text-primary leading-tight">
                Core Capabilities
              </h2>
            </div>
            <p className="text-sm font-serif text-slate-500 max-w-sm italic">
               Specialized solutions designed for high-value architectural challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white p-12 space-y-6 hover:bg-slate-50 transition-colors group"
              >
                <div className="text-accent/30 text-5xl font-mono group-hover:text-accent transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-primary">{service.title}</h3>
                <p className="font-serif text-sm text-slate-500 leading-relaxed italic">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-primary text-white py-32">
         <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-20">
            <div className="text-center space-y-4 text-white">
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent">Validation</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-tight">
                Partner Outcomes
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
               {testimonials.map(t => (
                 <div key={t.name} className="space-y-6">
                    <p className="font-serif italic text-lg leading-relaxed text-white/70">"{t.text}"</p>
                    <div className="border-l-2 border-accent pl-4">
                       <p className="font-bold text-xs uppercase tracking-widest">{t.name}</p>
                       <p className="text-[10px] uppercase text-accent font-bold mt-1 tracking-widest">{t.industry}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 md:px-8 py-32">
        <div className="bg-slate-50 p-12 md:p-24 relative overflow-hidden border border-gray-200">
          <div className="grid lg:grid-cols-2 gap-20 relative z-10 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent">Project Initiation</p>
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-primary">
                  Start A <br /><span className="text-accent underline decoration-primary/10 underline-offset-8">COMMUNICATION</span>
                </h2>
              </div>
              <p className="font-serif text-lg text-slate-500 max-w-md italic leading-relaxed">
                Connect with our team to discuss strategy, technical scope, and project potential.
              </p>
              <div className="flex flex-wrap gap-8 pt-6 border-t border-gray-200">
                 <div className="space-y-2">
                    <p className="text-[9px] uppercase font-bold tracking-widest text-accent">Secure Mail</p>
                    <a href="mailto:mathonsimhlengi8@gmail.com" className="font-bold text-sm text-primary hover:text-accent transition-colors underline decoration-primary/10 underline-offset-4">mathonsimhlengi8@gmail.com</a>
                 </div>
                 <div className="space-y-2">
                    <p className="text-[9px] uppercase font-bold tracking-widest text-accent">Direct Line</p>
                    <a href="tel:0662527664" className="font-bold text-sm text-primary hover:text-accent transition-colors underline decoration-primary/10 underline-offset-4">066 252 7664</a>
                 </div>
              </div>
            </div>

            <div className="space-y-8 bg-white p-10 border border-gray-200 shadow-xl relative">
              <form onSubmit={handleSubmit} className={`space-y-8 transition-opacity ${isSubmitted ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold uppercase tracking-widest opacity-40 text-primary">Full Name</label>
                    <input required name="name" type="text" className="w-full bg-transparent border-b border-primary/20 py-2 outline-none focus:border-accent transition-all text-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold uppercase tracking-widest opacity-40 text-primary">Corporate Email</label>
                    <input required name="email" type="email" className="w-full bg-transparent border-b border-primary/20 py-2 outline-none focus:border-accent transition-all text-sm" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-bold uppercase tracking-widest opacity-40 text-primary">Project Objectives</label>
                  <textarea required name="message" rows={3} className="w-full bg-transparent border-b border-primary/20 py-2 outline-none focus:border-accent transition-all text-sm resize-none"></textarea>
                </div>
                <button type="submit" className="bg-primary text-white px-10 py-5 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-accent transition-all w-full flex justify-between items-center group">
                  SUBMIT FOR REVIEW <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              
              {isSubmitted && (
                <div className="absolute inset-0 flex items-center justify-center p-10 text-center animate-in fade-in zoom-in duration-300">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                      <Send className="text-accent" size={32} />
                    </div>
                    <p className="text-xl font-bold text-primary">Your message has been sent!</p>
                    <p className="font-serif italic text-slate-500">We're reviewing it and will be in touch within 24 hours.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="text-center space-y-8 max-w-4xl mx-auto py-32 px-4">
         <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Ready to Start?</p>
            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter uppercase leading-[0.9]">
               TRANSFORM YOUR <br /> DIGITAL <span className="text-accent italic">INFRASTRUCTURE</span>
            </h2>
         </div>
         <p className="font-serif text-slate-500 italic text-xl max-w-2xl mx-auto">
            Skip the guesswork. Provide your project constraints and objectives for a hyper-specific engineering strategy.
         </p>
         <div className="flex flex-col md:flex-row gap-6 justify-center pt-8">
            <a href="#briefing" className="bg-primary text-white px-12 py-6 font-bold uppercase text-[11px] tracking-[0.3em] hover:bg-accent transition-all shadow-2xl">
               Request Strategic Briefing
            </a>
            <a href="#pricing" className="bg-white text-primary border-2 border-primary px-12 py-6 font-bold uppercase text-[11px] tracking-[0.3em] hover:bg-slate-50 transition-all">
               Review Pricing Models
            </a>
         </div>
      </section>
    </div>
  );
}
