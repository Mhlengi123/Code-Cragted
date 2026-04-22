import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight, X, ExternalLink, ShieldCheck, Zap, Target } from 'lucide-react';
import { PROJECTS, Project } from '../constants';

export default function ProjectCarousel() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === selectedCategory);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleCloseModal = () => {
    if (currentIndex === filteredProjects.length - 1) {
      setCurrentIndex(0);
    }
    setSelectedProject(null);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  useEffect(() => {
    if (!isPaused && filteredProjects.length > 1 && !selectedProject) {
      timeoutRef.current = setTimeout(nextSlide, 5000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, isPaused, filteredProjects.length, selectedProject]);

  return (
    <section id="portfolio" className="py-32 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Selected Case Studies</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-primary leading-[0.9]">
              Engineering <br /> <span className="text-accent underline decoration-slate-200 underline-offset-8">Outcomes</span>
            </h2>
          </div>
          <p className="text-sm font-serif text-slate-500 max-w-sm italic leading-relaxed">
             A rotation of technical infrastructure built for performance, conversion, and long-term stability.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 border-b border-gray-100 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 border transition-all ${
                selectedCategory === cat 
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/10' 
                  : 'bg-transparent text-slate-400 border-gray-100 hover:border-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div 
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Carousel Container */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-slate-50 border border-gray-200">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCategory}-${currentIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="absolute inset-0 grid md:grid-cols-2"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden group/img">
                  <img 
                    src={filteredProjects[currentIndex].image} 
                    alt={filteredProjects[currentIndex].title}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-40" />
                </div>

                {/* Content Section */}
                <div className="p-12 md:p-16 flex flex-col justify-center space-y-8 bg-white selection:bg-accent selection:text-white">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                       <span className="text-[9px] font-bold uppercase tracking-widest text-accent bg-accent/5 px-2 py-0.5 border border-accent/10">{filteredProjects[currentIndex].category}</span>
                       <div className="h-px w-8 bg-gray-200" />
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black text-primary tracking-tighter uppercase leading-none">
                      {filteredProjects[currentIndex].title}
                    </h3>
                    <p className="text-sm font-serif text-slate-500 italic leading-relaxed max-w-md">
                      {filteredProjects[currentIndex].description}
                    </p>
                  </div>

                  <div className="space-y-2 border-l-2 border-accent pl-6 bg-slate-50 p-6">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">Verifiable Result</p>
                    <p className="text-xl font-bold text-primary tracking-tight italic">
                      "{filteredProjects[currentIndex].result}"
                    </p>
                  </div>

                  <div className="pt-4">
                    <button 
                      onClick={() => setSelectedProject(filteredProjects[currentIndex])}
                      className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-accent transition-all group"
                    >
                      View Case Study <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          {filteredProjects.length > 1 && (
            <>
              <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-6">
                <button 
                  onClick={prevSlide}
                  className="p-4 bg-white border border-gray-200 text-primary hover:bg-primary hover:text-white transition-all shadow-xl"
                >
                  <ChevronLeft size={20} />
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-6">
                <button 
                  onClick={nextSlide}
                  className="p-4 bg-white border border-gray-200 text-primary hover:bg-primary hover:text-white transition-all shadow-xl"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </>
          )}
        </div>

        {/* Indicators */}
        {filteredProjects.length > 1 && (
          <div className="flex justify-center items-center gap-4">
            <div className="text-[10px] font-bold text-slate-400 tabular-nums">
              {String(currentIndex + 1).padStart(2, '0')} / {String(filteredProjects.length).padStart(2, '0')}
            </div>
            <div className="flex gap-2">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${currentIndex === index ? 'w-8 bg-accent' : 'w-2 bg-gray-200'}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-primary/95 backdrop-blur-sm z-[100] cursor-zoom-out"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-20 bg-white z-[101] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={handleCloseModal}
                className="absolute top-6 right-6 p-2 bg-slate-50 text-primary hover:bg-accent hover:text-white transition-all z-[102]"
              >
                <X size={24} />
              </button>

              {/* Modal Image Area */}
              <div className="md:w-1/2 h-64 md:h-full relative overflow-hidden">
                 <img 
                   src={selectedProject.image} 
                   alt={selectedProject.title}
                   className="w-full h-full object-cover grayscale opacity-90"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent md:hidden" />
              </div>

              {/* Modal Content Area */}
              <div className="md:w-1/2 p-8 md:p-16 overflow-y-auto flex flex-col justify-between selection:bg-accent selection:text-white">
                 <div className="space-y-12">
                    <div className="space-y-4">
                       <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">{selectedProject.category}</p>
                       <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter uppercase leading-[0.9]">
                         {selectedProject.title}
                       </h2>
                    </div>

                    <div className="space-y-6">
                       <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-2">Technical Infrastructure</h4>
                       <p className="font-serif text-lg text-slate-600 leading-relaxed italic">
                         {selectedProject.description}
                       </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                       <div className="space-y-3">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-accent flex items-center gap-2 italic">
                            <Target size={12} /> Strategic Result
                          </p>
                          <p className="text-xl font-bold text-primary tracking-tight italic underline decoration-accent/20 underline-offset-4">{selectedProject.result}</p>
                       </div>
                       <div className="space-y-3">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                             <ShieldCheck size={12} /> Tech Stack
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.tags.map(tag => (
                              <span key={tag} className="text-[9px] font-bold uppercase tracking-tighter bg-slate-50 px-2 py-1 border border-slate-100">{tag}</span>
                            ))}
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="pt-12 mt-12 border-t border-slate-100 flex flex-col md:flex-row gap-6 items-center">
                    <a 
                      href={selectedProject.link === '#' ? '#briefing' : selectedProject.link}
                      onClick={() => selectedProject.link === '#' && handleCloseModal()}
                      className="bg-primary text-white px-10 py-5 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-accent transition-all w-full md:w-auto text-center flex items-center justify-center gap-3 group"
                    >
                      Project Consultation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 italic">
                       * Technical specifications available upon strategic engagement.
                    </p>
                 </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}
