
import React, { useState } from 'react';
import { Info, X } from 'lucide-react';
import { GLOSSARY_TERMS } from '../constants';

interface GlossaryTermProps {
  term: string;
  children?: React.ReactNode;
}

const GlossaryTerm: React.FC<GlossaryTermProps> = ({ term, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const glossaryItem = GLOSSARY_TERMS.find(item => item.term.toLowerCase() === term.toLowerCase());

  if (!glossaryItem) return <>{children || term}</>;

  return (
    <span className="relative inline-block group">
      <button 
        onClick={() => setIsOpen(true)}
        className="underline decoration-blue-500/30 decoration-2 underline-offset-4 hover:decoration-blue-500 transition-all font-bold text-blue-600 dark:text-blue-400 cursor-help"
      >
        {children || term}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
          <div className="relative w-full max-w-md bg-white dark:bg-[#0a192f] rounded-[2.5rem] border border-blue-500/20 shadow-2xl p-8 stagger-in">
            <div className="flex justify-between items-start mb-6">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 opacity-60">Glossary Intelligence</span>
                <h4 className="text-2xl font-black tracking-tight">{glossaryItem.term}</h4>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-all"><X size={20}/></button>
            </div>
            
            <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10 mb-6">
              <p className="text-lg font-medium opacity-80 leading-relaxed italic">
                "{glossaryItem.definition}"
              </p>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 w-fit">
              <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Category:</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">{glossaryItem.category}</span>
            </div>
          </div>
        </div>
      )}
    </span>
  );
};

export default GlossaryTerm;
