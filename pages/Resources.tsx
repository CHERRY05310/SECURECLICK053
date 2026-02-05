
import React from 'react';
import { Download, FileText, CheckCircle, ArrowRight, ShieldCheck, Bookmark, Search, Filter, TrendingUp, Zap } from 'lucide-react';
import { RESOURCES } from '../constants';

const Resources: React.FC = () => {
  return (
    <div className="space-y-16 pb-24">
      {/* Dynamic Header */}
      <div className="flex flex-col lg:flex-row justify-between items-end gap-10 stagger-in px-4">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 font-black text-[10px] uppercase tracking-widest">
             <Bookmark size={14} /> Intelligence Archive
          </div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter">Vault & <span className="shimmer-text">Toolkits.</span></h1>
          <p className="text-xl opacity-60 font-medium leading-relaxed">
            Essential playbooks, technical checklists, and security frameworks to reinforce your digital defensive architecture.
          </p>
        </div>
        
        <div className="flex gap-4 w-full lg:w-auto">
           <div className="relative flex-1 lg:w-80 group">
             <Search className="absolute left-5 top-1/2 -translate-y-1/2 opacity-30 group-focus-within:text-blue-500 transition-colors" size={20} />
             <input type="text" placeholder="Filter archive..." className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white dark:bg-white/5 border-2 border-slate-100 dark:border-white/10 outline-none focus:border-blue-500/50 font-bold transition-all shadow-xl" />
           </div>
           <button className="p-4 rounded-2xl bg-white dark:bg-white/5 border-2 border-slate-100 dark:border-white/10 hover:border-blue-500/30 transition-all shadow-xl">
             <Filter size={24} className="opacity-40" />
           </button>
        </div>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 stagger-in">
        {RESOURCES.map((res) => (
          <div key={res.id} className="group premium-card p-10 rounded-[3.5rem] glass-card transition-all duration-700">
            <div className={`w-16 h-16 rounded-[1.5rem] mb-8 flex items-center justify-center shadow-xl group-hover:rotate-12 transition-transform duration-500 ${
              res.type === 'pdf' ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 
              res.type === 'guide' ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20' : 
              'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
            }`}>
              {res.type === 'pdf' ? <FileText size={32} /> : 
               res.type === 'guide' ? <ShieldCheck size={32} /> : 
               <CheckCircle size={32} />}
            </div>
            
            <div className="space-y-4 mb-10">
              <span className="text-[10px] uppercase font-black tracking-[0.2em] opacity-30">{res.category} Intelligence</span>
              <h3 className="text-2xl font-black leading-tight tracking-tight group-hover:text-blue-500 transition-colors">{res.title}</h3>
              <p className="text-sm opacity-50 font-medium leading-relaxed">
                Comprehensive blueprint containing validated response protocols and field-tested security measures.
              </p>
            </div>

            <button className="relative w-full py-5 rounded-[1.5rem] bg-slate-50 dark:bg-[#020617] border border-slate-100 dark:border-white/5 group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-2xl transition-all duration-500 flex items-center justify-center gap-4 font-black text-xs uppercase tracking-[0.2em] overflow-hidden">
              <span className="relative z-10 flex items-center gap-3"><Download size={20} /> Deploy {res.type.toUpperCase()} Protocol</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
        ))}
      </div>

      {/* Modern Learning Tracker */}
      <section className="group p-16 rounded-[4.5rem] bg-[#020617] text-white flex flex-col lg:flex-row items-center gap-20 overflow-hidden relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700/20 via-indigo-900/10 to-transparent"></div>
        
        <div className="relative z-10 space-y-10 flex-1">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-blue-200">
             <TrendingUp size={14} /> Security Competency Score
          </div>
          <h2 className="text-5xl font-black tracking-tighter">Hardening Your <span className="shimmer-text">Neural Firewall.</span></h2>
          <p className="text-lg opacity-60 leading-relaxed font-medium max-w-lg">
            Every module you complete exponentially increases your resistance to social engineering attacks. Your journey to Master Guardian is 33% complete.
          </p>
          <div className="space-y-4">
             <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-black uppercase tracking-widest text-blue-400">Guardian Protocol Progress</span>
                <span className="text-2xl font-black">33%</span>
             </div>
             <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden p-1 border border-white/5">
               <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)] animate-pulse" style={{width: '33%'}} />
             </div>
          </div>
          <button className="group/btn flex items-center gap-4 text-blue-400 font-black text-sm uppercase tracking-[0.2em] hover:text-blue-300 transition-all">
            Initiate Next Sequence <ArrowRight size={24} className="group-hover/btn:translate-x-3 transition-transform" />
          </button>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-8">
          <div className="premium-card p-10 rounded-[3rem] glass border border-white/10 backdrop-blur-2xl space-y-6 w-56 text-center group hover:border-blue-500/40 transition-all">
             <div className="relative mx-auto w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 group-hover:rotate-12 transition-transform">
                <Bookmark size={32} />
             </div>
             <div>
               <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">Bookmarked</p>
               <p className="text-4xl font-black">08</p>
             </div>
          </div>
          <div className="premium-card p-10 rounded-[3rem] bg-blue-600/10 border border-blue-500/20 backdrop-blur-2xl space-y-6 w-56 text-center group hover:bg-blue-600/20 transition-all">
             <div className="relative mx-auto w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-xl shadow-blue-500/30">
                <Zap size={32} />
             </div>
             <div>
               <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">XP Earned</p>
               <p className="text-4xl font-black">1.2k</p>
             </div>
          </div>
        </div>

        {/* Abstract Deco */}
        <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      </section>
    </div>
  );
};

export default Resources;
