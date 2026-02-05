
import React, { useState } from 'react';
import { Gavel, Scale, FileWarning, AlertCircle, ExternalLink, Download, Shield, Book, Info, ShieldAlert, CheckCircle, ChevronRight, Activity, Zap, Landmark, Fingerprint, Lock, ShieldCheck, Search, DollarSign, Trash2 } from 'lucide-react';
import { LAWS } from '../constants';
import GlossaryTerm from '../components/GlossaryTerm';

const Legal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'IT_ACT' | 'IPC' | 'DPDP'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLaws = LAWS.filter(law => {
    const matchesTab = activeTab === 'ALL' || law.category === activeTab;
    const matchesSearch = law.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          law.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          law.sections.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-red-500/10 text-red-500 border-red-500/20';
      case 'High': return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      case 'Medium': return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
      case 'Low': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      default: return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'IT_ACT': return 'text-blue-500';
      case 'IPC': return 'text-purple-500';
      case 'DPDP': return 'text-emerald-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="space-y-16 max-w-7xl mx-auto pb-24">
      {/* Hero / Overview Section */}
      <section className="relative overflow-hidden p-12 lg:p-20 rounded-[4rem] bg-[#020617] text-white shadow-3xl stagger-in border border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-transparent to-indigo-900/40"></div>
        <div className="absolute top-[-50px] right-[-50px] opacity-10 rotate-12 pointer-events-none">
          <Scale size={300} />
        </div>
        
        <div className="relative z-10 max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass border border-white/10 text-[11px] font-black uppercase tracking-[0.3em] text-red-400">
             <Landmark size={14} /> Cyber Jurisdiction Intelligence
          </div>
          <h1 className="text-6xl lg:text-7xl font-black tracking-tighter leading-none">
            Legal <span className="shimmer-text">Frameworks.</span>
          </h1>
          <p className="text-xl lg:text-2xl opacity-70 font-medium leading-relaxed">
            India leverages three critical pillars of law—the <GlossaryTerm term="IT Act" /> (2000), the <GlossaryTerm term="IPC" /> (1860), and the modern <GlossaryTerm term="DPDP Act" /> (2023)—to neutralize social engineering and digital fraud.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
             <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-2">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Primary Regulator</p>
                <p className="text-lg font-black">Ministry of IT (MeitY)</p>
             </div>
             <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-2">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Main Act</p>
                <p className="text-lg font-black">IT Act, 2000</p>
             </div>
             <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-2">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Privacy Focus</p>
                <p className="text-lg font-black">DPDP Act, 2023</p>
             </div>
          </div>
        </div>
      </section>

      {/* Navigation & Search */}
      <div className="flex flex-col lg:flex-row gap-8 justify-between items-center sticky top-24 z-20 px-4">
        <div className="flex bg-white dark:bg-white/5 p-2 rounded-[2.5rem] border border-slate-100 dark:border-white/10 shadow-2xl backdrop-blur-3xl">
          {[
            { id: 'ALL', label: 'All Frameworks' },
            { id: 'IT_ACT', label: 'IT Act (Cyber)' },
            { id: 'IPC', label: 'IPC (Penal)' },
            { id: 'DPDP', label: 'DPDP (Privacy)' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                activeTab === tab.id ? 'bg-red-600 text-white shadow-xl' : 'opacity-40 hover:opacity-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-96 group">
           <Search className="absolute left-6 top-1/2 -translate-y-1/2 opacity-30 group-focus-within:text-red-500 transition-colors" size={20} />
           <input 
            type="text" 
            placeholder="Search legal sections..." 
            className="w-full bg-white dark:bg-white/5 border-2 border-slate-100 dark:border-white/10 rounded-full py-4 pl-14 pr-6 outline-none focus:border-red-500/40 transition-all font-bold shadow-xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
           />
        </div>
      </div>

      {/* Laws Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 stagger-in px-4">
        {filteredLaws.map((law) => (
          <div key={law.id} className="group premium-card p-10 lg:p-12 rounded-[3.5rem] bg-white dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 shadow-2xl hover:border-red-500/20 transition-all duration-500">
            <div className="flex justify-between items-start mb-8">
              <div className="space-y-2">
                 <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${getCategoryColor(law.category)}`}>
                       {law.actName.replace(', 2000', '')}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-white/10"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{law.sections.join(' • ')}</span>
                 </div>
                 <h3 className="text-3xl font-black tracking-tight group-hover:text-red-600 transition-colors">{law.title}</h3>
              </div>
              <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${getSeverityBadge(law.severity)}`}>
                 {law.severity} Severity
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-black/20 border border-slate-100 dark:border-white/5 group-hover:border-red-500/10 transition-all">
                <p className="text-lg opacity-70 leading-relaxed font-medium">
                  {law.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="p-6 rounded-3xl bg-red-600 text-white shadow-xl shadow-red-600/10 space-y-3 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><Scale size={48} /></div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Legal Punishment</p>
                    <p className="text-sm font-bold leading-relaxed">{law.punishment}</p>
                 </div>
                 <div className="p-6 rounded-3xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-3">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Forensic Example</p>
                    <p className="text-sm opacity-60 font-medium leading-relaxed italic">"{law.example || 'General cyber exploitation scenario.'}"</p>
                 </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-white/5">
                 <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-red-600 hover:gap-4 transition-all">
                    Full Document Access <ChevronRight size={14} />
                 </button>
                 <div className="flex gap-4">
                    <Activity size={18} className="opacity-10" />
                    <Fingerprint size={18} className="opacity-10" />
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Global Reporting & Rights Module */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 px-4">
        {/* Reporting Block */}
        <div className="lg:col-span-8 p-12 lg:p-16 rounded-[4.5rem] bg-red-600 text-white space-y-12 shadow-3xl shadow-red-600/20 relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
           <div className="absolute bottom-[-50px] left-[-50px] opacity-10 rotate-[-12deg] pointer-events-none">
             <ShieldAlert size={400} />
           </div>

           <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
              <div className="shrink-0 p-10 rounded-[3rem] bg-white text-red-600 shadow-2xl animate-float">
                 <ShieldAlert size={64} />
              </div>
              <div className="space-y-6 flex-1 text-center md:text-left">
                 <h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-none">Instant Legal <br />Mobilization.</h2>
                 <p className="text-xl opacity-80 font-medium leading-relaxed max-w-lg">
                    If targeted by fraud, your first 2 hours are the "Golden Period" for asset recovery. Every second counts.
                 </p>
                 <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                    <a href="https://cybercrime.gov.in" target="_blank" className="px-10 py-5 bg-white text-red-600 rounded-[1.5rem] font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-3">
                       <ExternalLink size={16} /> National Cyber Portal
                    </a>
                    <div className="px-10 py-5 bg-black/20 border border-white/20 rounded-[1.5rem] font-black text-center">
                       <p className="text-[10px] opacity-40 uppercase tracking-widest mb-1">Financial Helpline</p>
                       <p className="text-2xl tracking-tighter">1930</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Rights & Docs Block */}
        <div className="lg:col-span-4 p-12 rounded-[4rem] bg-white dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 shadow-2xl space-y-10">
           <div className="space-y-2">
              <h3 className="text-2xl font-black tracking-tight flex items-center gap-4">
                 <Gavel className="text-red-500" /> User Rights
              </h3>
              <p className="text-sm opacity-50 font-medium">Statutory rights under Indian Cyber Law.</p>
           </div>
           
           <div className="space-y-4">
              {/* Fix: Directly use icons from the lucide-react library */}
              {[
                { label: 'Right to Data Privacy', icon: <Lock size={16}/> },
                { label: 'Right to Forget', icon: <Trash2 size={16}/> },
                { label: 'Right to Legal Remedy', icon: <Gavel size={16}/> },
                { label: 'Right to Compensation', icon: <DollarSign size={16}/> }
              ].map((right, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-all border border-transparent hover:border-red-500/20 group">
                   <div className="p-2 rounded-lg bg-red-500/10 text-red-500">{right.icon}</div>
                   <span className="text-sm font-bold opacity-70 group-hover:opacity-100">{right.label}</span>
                </div>
              ))}
           </div>

           <div className="space-y-4 pt-4">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-30">Legal Dossiers</p>
              <button className="w-full flex items-center justify-between p-5 rounded-2xl bg-slate-900 text-white hover:bg-black transition-all group">
                 <div className="flex items-center gap-4">
                    <Download size={20} className="text-red-500" />
                    <span className="text-xs font-black uppercase tracking-widest">IT Act Full Guide</span>
                 </div>
                 <span className="text-[10px] opacity-40">2.4MB</span>
              </button>
           </div>
        </div>
      </section>

      {/* Footer / Disclaimer */}
      <footer className="text-center px-10 py-12 border-t border-slate-100 dark:border-white/5 opacity-40 space-y-4">
         <div className="flex items-center justify-center gap-4">
            <ShieldCheck size={24} />
            <p className="text-xs font-bold uppercase tracking-[0.3em]">SAFECLICK Legal Repository v2.0</p>
         </div>
         <p className="text-xs max-w-2xl mx-auto leading-relaxed">
            Legal data provided is for awareness only. Laws are subject to amendment. Always consult with authorized legal counsel and use official portals for formal complaints.
         </p>
      </footer>
    </div>
  );
};

export default Legal;
