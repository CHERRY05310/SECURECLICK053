
import React, { useState } from 'react';
import { 
  Mail, Smartphone, Phone, QrCode, UserSearch, Video, Globe, 
  ChevronDown, Target, Brain, Gift, HelpCircle, Ghost, Shield, Eye, AlertCircle, TrendingUp,
  Zap, Trash2, DollarSign, Fingerprint, ShieldAlert, CheckCircle, Info, Activity, AlertTriangle, ListChecks,
  Search, ShieldCheck, ZapOff, Crosshair, Radio, ScanLine
} from 'lucide-react';
import { ATTACK_TYPES } from '../constants';
import { AttackType } from '../types';
import GlossaryTerm from '../components/GlossaryTerm';

const AttackTypes: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filter, setFilter] = useState('');

  const getAttackAnimation = (id: string) => {
    switch(id) {
      case 'phishing': return 'animate-glitch';
      case 'spear-phishing': return 'animate-radar';
      case 'whaling': return 'animate-border-spin';
      case 'pretexting': return 'animate-pulse-slow';
      case 'baiting': return 'animate-ripple';
      case 'quid-pro-quo': return 'animate-float';
      case 'tailgating': return 'animate-morph';
      case 'shoulder-surfing': return 'animate-scan';
      case 'dumpster-diving': return 'animate-spin-slow';
      case 'scareware': return 'animate-glow';
      case 'bec': return 'animate-shimmer';
      case 'ai-deepfake': return 'animate-glitch';
      default: return 'animate-pulse';
    }
  };

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Mail': return <Mail size={24} />;
      case 'Smartphone': return <Smartphone size={24} />;
      case 'Phone': return <Phone size={24} />;
      case 'QrCode': return <QrCode size={24} />;
      case 'UserSearch': return <UserSearch size={24} />;
      case 'Target': return <Target size={24} />;
      case 'Brain': return <Brain size={24} />;
      case 'Gift': return <Gift size={24} />;
      case 'HelpCircle': return <HelpCircle size={24} />;
      case 'Ghost': return <Ghost size={24} />;
      case 'Shield': return <Shield size={24} />;
      case 'Eye': return <Eye size={24} />;
      case 'Globe': return <Globe size={24} />;
      case 'Zap': return <Zap size={24} />;
      case 'Trash2': return <Trash2 size={24} />;
      case 'DollarSign': return <DollarSign size={24} />;
      case 'Video': return <Video size={24} />;
      default: return <Shield size={24} />;
    }
  };

  const renderAnimatedLogo = (attack: AttackType) => {
    const isExpanded = expandedId === attack.id;
    const baseColor = isExpanded ? 'text-white' : 'text-blue-500';
    
    return (
      <div className={`p-6 rounded-[2rem] transition-all duration-700 shadow-xl relative overflow-hidden flex items-center justify-center min-w-[80px] min-h-[80px] ${
        isExpanded ? 'bg-blue-600 scale-110' : 'bg-slate-100 dark:bg-white/10 group-hover:scale-110'
      }`}>
        {/* Core Icon with Primary Animation */}
        <div className={`relative z-10 ${getAttackAnimation(attack.id)} ${baseColor}`}>
          {getIcon(attack.icon)}
        </div>

        {/* Specialized Visual Effects Layers */}
        {attack.id === 'phishing' && (
          <>
            <div className="absolute inset-0 flex items-center justify-center opacity-30 animate-glitch text-red-500 translate-x-1 translate-y-1">
              {getIcon(attack.icon)}
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-30 animate-glitch text-cyan-500 -translate-x-1 -translate-y-1">
              {getIcon(attack.icon)}
            </div>
          </>
        )}

        {attack.id === 'spear-phishing' && (
          <div className="absolute inset-0 border-2 border-dashed border-current rounded-full animate-spin-slow opacity-20"></div>
        )}

        {attack.id === 'baiting' && (
          <>
            <div className="absolute inset-0 border-2 border-current rounded-full animate-ripple opacity-30" style={{ animationDelay: '0s' }}></div>
            <div className="absolute inset-0 border-2 border-current rounded-full animate-ripple opacity-20" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute inset-0 border-2 border-current rounded-full animate-ripple opacity-10" style={{ animationDelay: '1s' }}></div>
          </>
        )}

        {attack.id === 'shoulder-surfing' && (
          <div className="absolute inset-x-0 h-1 bg-current opacity-40 animate-scan"></div>
        )}

        {attack.id === 'scareware' && (
          <div className="absolute inset-0 bg-red-500/20 rounded-full animate-pulse-slow blur-md"></div>
        )}

        {attack.id === 'whaling' && (
          <div className="absolute inset-2 border-[3px] border-t-current border-transparent rounded-[1.5rem] animate-spin"></div>
        )}

        {attack.id === 'tailgating' && (
          <div className="absolute inset-0 flex items-center justify-center opacity-10 blur-[2px] animate-morph scale-150">
            <Ghost size={48} />
          </div>
        )}

        {attack.id === 'bec' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer"></div>
        )}

        {attack.id === 'pretexting' && (
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-12 h-12 bg-current opacity-5 rounded-full animate-pulse"></div>
           </div>
        )}

        {attack.id === 'ai-deepfake' && (
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 opacity-10 animate-glitch">
            <div className="border border-current"></div>
            <div className="border border-current"></div>
            <div className="border border-current"></div>
            <div className="border border-current"></div>
          </div>
        )}
      </div>
    );
  };

  const getSeverityColor = (severity: string) => {
    switch(severity) {
      case 'Critical': return 'bg-red-500 text-white';
      case 'High': return 'bg-orange-500 text-white';
      case 'Medium': return 'bg-yellow-500 text-black';
      case 'Low': return 'bg-blue-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const filteredAttacks = ATTACK_TYPES.filter(attack => 
    attack.title.toLowerCase().includes(filter.toLowerCase()) ||
    attack.definition.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="space-y-16 pb-24 max-w-7xl mx-auto px-4">
      {/* Dynamic Header Section */}
      <div className="text-center max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-6">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 font-black text-[10px] uppercase tracking-widest">
           <ShieldAlert size={14} /> Intelligence Registry
        </div>
        <h1 className="text-6xl lg:text-7xl font-black tracking-tighter leading-none">
          Threat <span className="shimmer-text">Catalog.</span>
        </h1>
        <p className="text-xl opacity-60 leading-relaxed font-medium">
          A definitive architectural breakdown of modern <GlossaryTerm term="Social Engineering" /> vectors. Use this repository to identify, analyze, and neutralize human-centric cyber threats.
        </p>

        {/* Filter Input */}
        <div className="relative max-w-2xl mx-auto group">
           <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none opacity-40 group-focus-within:text-blue-500 transition-colors">
             <Search size={24} />
           </div>
           <input 
            type="text" 
            placeholder="Search vector repository (e.g., Phishing, Deepfake)..." 
            className="w-full bg-white dark:bg-white/5 border-2 border-slate-100 dark:border-white/10 rounded-[3rem] py-6 pl-16 pr-8 outline-none focus:border-blue-500/50 transition-all font-bold text-lg shadow-2xl"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
           />
        </div>
      </div>

      {/* Grid of Attack Cards */}
      <div className="grid grid-cols-1 gap-12">
        {filteredAttacks.map((attack, idx) => (
          <div 
            key={attack.id}
            id={attack.id}
            className={`group relative overflow-hidden transition-all duration-700 rounded-[3.5rem] bg-white dark:bg-white/[0.02] border-2 animate-in fade-in slide-in-from-bottom-10 shadow-2xl ${
              expandedId === attack.id 
                ? 'border-blue-500/30 ring-4 ring-blue-500/5' 
                : 'border-transparent dark:border-white/5 hover:border-slate-200 dark:hover:border-white/10'
            }`}
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Header / Summary View */}
            <div 
              className="p-10 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-10"
              onClick={() => setExpandedId(expandedId === attack.id ? null : attack.id)}
            >
              <div className="flex items-center gap-8">
                {renderAnimatedLogo(attack)}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-4">
                    <h3 className="text-3xl font-black tracking-tight">{attack.title}</h3>
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${getSeverityColor(attack.severity)}`}>
                      {attack.severity} Risk
                    </span>
                  </div>
                  <p className="text-lg opacity-50 font-medium max-w-2xl leading-relaxed">{attack.definition}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="hidden md:flex flex-col items-end">
                   <span className="text-[10px] font-black uppercase tracking-widest opacity-30">Complexity</span>
                   <span className="text-sm font-bold">{attack.complexity}</span>
                </div>
                <div className={`p-4 rounded-full transition-all duration-500 ${expandedId === attack.id ? 'bg-blue-500/10 text-blue-500 rotate-180' : 'bg-slate-100 dark:bg-white/5 opacity-40'}`}>
                  <ChevronDown size={24} />
                </div>
              </div>
            </div>

            {/* Expanded Detailed View */}
            <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
              expandedId === attack.id ? 'max-h-[3000px] border-t border-slate-100 dark:border-white/5' : 'max-h-0'
            }`}>
              <div className="p-10 lg:p-16 space-y-16">
                
                {/* Structural Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  {/* Left Column: Flow & Mechanics */}
                  <div className="space-y-12">
                    <section className="space-y-6">
                      <h4 className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-blue-500">
                        <Activity size={18} /> Attack Execution Flow
                      </h4>
                      <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-black/20 border border-slate-100 dark:border-white/5 relative">
                        <p className="text-lg leading-relaxed font-medium opacity-80">{attack.howItWorks}</p>
                        <div className="absolute top-0 right-0 p-6 opacity-[0.03]"><Brain size={80} /></div>
                      </div>
                    </section>

                    <section className="space-y-6">
                      <h4 className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-purple-500">
                        <Zap size={18} /> Exploitation Techniques
                      </h4>
                      <ul className="grid grid-cols-1 gap-4">
                        {attack.techniques.map((tech, i) => (
                          <li key={i} className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-purple-500/20 transition-all group/li">
                             <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0 group-hover/li:scale-150 transition-transform"></div>
                             <p className="text-sm font-medium opacity-70 leading-relaxed">{tech}</p>
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="space-y-6">
                      <h4 className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-red-500">
                        <AlertTriangle size={18} /> Identification Red Flags
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {attack.redFlags.map((flag, i) => (
                          <div key={i} className="flex gap-4 p-5 rounded-2xl bg-red-500/5 border border-red-500/10">
                            <ShieldAlert className="text-red-500 shrink-0" size={18} />
                            <p className="text-xs font-bold leading-relaxed">{flag}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>

                  {/* Right Column: Context & Defense */}
                  <div className="space-y-12">
                    <section className="space-y-6">
                      <h4 className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-emerald-500">
                        <CheckCircle size={18} /> Real-World Scenarios
                      </h4>
                      <div className="space-y-4">
                        {attack.examples.map((ex, i) => (
                          <div key={i} className="group p-6 rounded-[2rem] bg-emerald-500/5 border border-emerald-500/10 hover:bg-emerald-500/10 transition-all flex gap-5">
                             <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-xs shrink-0">0{i+1}</div>
                             <p className="text-sm font-medium leading-relaxed italic opacity-80">"{ex}"</p>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section className="space-y-6">
                      <h4 className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-amber-500">
                        <Brain size={18} /> Psychological Triggers
                      </h4>
                      <div className="flex flex-wrap gap-3">
                         {attack.psychology.map((psych, i) => (
                           <span key={i} className="px-5 py-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-black uppercase tracking-widest border border-amber-500/20">
                             {psych}
                           </span>
                         ))}
                      </div>
                    </section>

                    <section className="space-y-6">
                      <h4 className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-blue-500">
                        <ShieldCheck size={18} /> Hardening & Prevention
                      </h4>
                      <div className="p-8 rounded-[2.5rem] bg-blue-600 text-white shadow-xl shadow-blue-500/20 relative overflow-hidden group/prev">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                        <ul className="relative z-10 space-y-4">
                           {attack.prevention.map((prev, i) => (
                             <li key={i} className="flex gap-4 items-start">
                               <div className="p-1 rounded bg-white text-blue-600 mt-1"><ListChecks size={12} /></div>
                               <p className="text-sm font-bold leading-relaxed">{prev}</p>
                             </li>
                           ))}
                        </ul>
                        <Shield size={100} className="absolute bottom-[-20px] right-[-20px] opacity-10 group-hover/prev:scale-125 transition-transform duration-1000" />
                      </div>
                    </section>
                  </div>
                </div>

                {/* Impact Summary Section */}
                <div className="p-10 lg:p-12 rounded-[3.5rem] bg-slate-900 text-white flex flex-col md:flex-row items-center gap-12 border border-white/5 relative overflow-hidden group/impact">
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 via-transparent to-transparent opacity-50"></div>
                  <div className="shrink-0 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 group-hover/impact:rotate-6 transition-transform">
                     <TrendingUp size={48} className="text-red-500" />
                  </div>
                  <div className="space-y-4 flex-1">
                     <h5 className="text-2xl font-black tracking-tight">Post-Breach Impact Analysis</h5>
                     <p className="text-lg opacity-60 leading-relaxed font-medium">{attack.impactDescription}</p>
                     <div className="flex gap-6 pt-2">
                        <div className="flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                           <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Financial Integrity Risk</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                           <span className="text-[10px] font-black uppercase tracking-widest opacity-40">PII Disclosure Risk</span>
                        </div>
                     </div>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Background Accent Lines */}
            <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none group-hover:scale-150 transition-transform duration-1000">
               <Fingerprint size={200} />
            </div>
          </div>
        ))}
      </div>

      {/* Global Defense Strategy Footer */}
      <section className="relative p-16 rounded-[4rem] bg-slate-950 text-white overflow-hidden shadow-2xl border border-white/5 animate-in fade-in slide-in-from-bottom-12">
         <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-transparent"></div>
         <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
            <div className="shrink-0 p-10 rounded-[3rem] bg-blue-600 text-white shadow-2xl shadow-blue-500/30 animate-float">
               <Shield size={64} />
            </div>
            <div className="space-y-4 flex-1">
               <h2 className="text-4xl lg:text-5xl font-black tracking-tighter">Stay Vigilant. Stay <span className="shimmer-text">Neural.</span></h2>
               <p className="text-xl opacity-60 leading-relaxed font-medium max-w-3xl">
                 Attack vectors evolve hourly. Our AI neural engines constantly crawl the dark web and global threat feeds to update this registry. Check back often to stay synchronized with the latest security protocols.
               </p>
            </div>
            <div className="flex flex-col gap-3">
               <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-blue-400">Database v2.48</div>
               <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-emerald-400">Sync: Dec 2024</div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default AttackTypes;
