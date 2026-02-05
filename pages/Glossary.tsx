
import React, { useState } from 'react';
import { Search, Hash, Book, Shield, Brain, Gavel, MousePointer2 } from 'lucide-react';
import { GLOSSARY_TERMS } from '../constants';
import { GlossaryItem } from '../types';

const Glossary: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(GLOSSARY_TERMS.map(item => item.category)));

  const filteredTerms = GLOSSARY_TERMS.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(search.toLowerCase()) || 
                          item.definition.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory ? item.category === activeCategory : true;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => a.term.localeCompare(b.term));

  const getCategoryIcon = (cat: string) => {
    switch(cat) {
      case 'Technical': return <Shield size={16} />;
      case 'Behavioral': return <Brain size={16} />;
      case 'Legal': return <Gavel size={16} />;
      default: return <Book size={16} />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-16 pb-24">
      <div className="text-center max-w-4xl mx-auto space-y-8 animate-in fade-in">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 font-black text-[10px] uppercase tracking-widest">
           <Hash size={14} /> Knowledge Lexicon
        </div>
        <h1 className="text-6xl lg:text-7xl font-black tracking-tighter">
          Security <span className="shimmer-text">Glossary.</span>
        </h1>
        <p className="text-xl opacity-60 font-medium leading-relaxed">
          Master the terminology of the digital defense world. A comprehensive dictionary for social engineering tactics, technical protocols, and legal frameworks.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="relative w-full max-w-xl group">
             <Search className="absolute left-6 top-1/2 -translate-y-1/2 opacity-30 group-focus-within:text-blue-500 transition-colors" size={24} />
             <input 
              type="text" 
              placeholder="Search terms or definitions..." 
              className="w-full bg-white dark:bg-white/5 border-2 border-slate-100 dark:border-white/10 rounded-[3rem] py-6 pl-16 pr-8 outline-none focus:border-blue-500/50 transition-all font-bold text-lg shadow-2xl"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
             />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <button 
            onClick={() => setActiveCategory(null)}
            className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${!activeCategory ? 'bg-blue-600 text-white shadow-xl' : 'bg-slate-100 dark:bg-white/5 opacity-50 hover:opacity-100'}`}
          >
            All Categories
          </button>
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-blue-600 text-white shadow-xl' : 'bg-slate-100 dark:bg-white/5 opacity-50 hover:opacity-100'}`}
            >
              {getCategoryIcon(cat)} {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-in">
        {filteredTerms.map((item) => (
          <div key={item.id} className="group premium-card p-10 rounded-[3rem] glass-card border border-transparent hover:border-blue-500/20 transition-all duration-500 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 bg-blue-500/5 px-3 py-1.5 rounded-full border border-blue-500/10">
                   {item.category}
                </span>
              </div>
              <h3 className="text-3xl font-black tracking-tight group-hover:text-blue-500 transition-colors">{item.term}</h3>
              <p className="text-lg opacity-60 font-medium leading-relaxed italic">
                "{item.definition}"
              </p>
            </div>
            
            <div className="mt-10 pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="text-[10px] font-black uppercase tracking-widest opacity-30 flex items-center gap-2">
                 <MousePointer2 size={12} /> Click for more intel
               </span>
            </div>
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-24 space-y-6 opacity-40">
           <Search size={64} className="mx-auto" />
           <p className="text-2xl font-black">No terms found matching your query.</p>
        </div>
      )}
    </div>
  );
};

export default Glossary;
