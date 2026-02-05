
import React, { useState } from 'react';
import { 
  Search, Brain, ShieldAlert, Zap, HeartPulse, ShieldCheck, 
  TrendingDown, Target, Info, Sparkles, AlertCircle, BookOpen, 
  ChevronRight, MousePointer2, Activity, Globe, Lock, ChevronDown, CheckCircle2,
  X, Mail, Phone, Globe as GlobeIcon
} from 'lucide-react';
import { INTEL_LIBRARY, SIMULATIONS } from '../constants';
import { AwarenessSection, SimulationModule, SimulationOption } from '../types';
import GlossaryTerm from '../components/GlossaryTerm';

const Awareness: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeModule, setActiveModule] = useState<AwarenessSection | null>(null);
  const [activeSimulation, setActiveSimulation] = useState<SimulationModule | null>(null);
  const [selectedOption, setSelectedOption] = useState<SimulationOption | null>(null);

  const getIcon = (iconName: string, size = 24) => {
    switch(iconName) {
      case 'Brain': return <Brain size={size} />;
      case 'Activity': return <Activity size={size} />;
      case 'Globe': return <Globe size={size} />;
      case 'Lock': return <Lock size={size} />;
      case 'ShieldCheck': return <ShieldCheck size={size} />;
      default: return <BookOpen size={size} />;
    }
  };

  const filteredModules = INTEL_LIBRARY.filter(m => 
    m.title.toLowerCase().includes(search.toLowerCase()) || 
    m.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-24 pb-24 max-w-7xl mx-auto px-4">
      {/* Immersive Header */}
      <header className="text-center max-w-4xl mx-auto space-y-8 stagger-in">
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 font-black text-[10px] uppercase tracking-[0.3em]">
           <BookOpen size={16} /> Intel Intelligence Base v2.0
        </div>
        <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none">
          Intel <span className="shimmer-text">Library.</span>
        </h1>
        <p className="text-xl lg:text-2xl opacity-60 max-w-3xl mx-auto leading-relaxed font-medium">
          The final frontier of cybersecurity is not silicon—it's the human mind. Explore our tactical repository of behavioral intelligence.
        </p>
        
        <div className="relative mt-12 group max-w-2xl mx-auto">
          <div className="absolute inset-0 bg-blue-500/10 blur-3xl opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
          <div className="relative">
            <Search className="absolute left-7 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={28} />
            <input 
              type="text" 
              placeholder="Search intelligence dossiers..." 
              className="w-full bg-white dark:bg-white/5 border-2 border-slate-100 dark:border-white/10 rounded-[3rem] py-7 pl-20 pr-10 outline-none focus:border-blue-500/50 transition-all shadow-2xl font-bold text-xl"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Interactive Simulation Lab Section */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight flex items-center gap-4">
              <span className="p-3 bg-blue-600/10 rounded-2xl text-blue-500"><Zap /></span> Neural Training Lab
            </h2>
            <p className="text-lg opacity-60 font-medium max-w-lg">
              Test your threat detection instincts in live-simulated scenarios. Practice spotting red flags before it costs you.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="px-6 py-3 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> 03 Modules Available
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SIMULATIONS.map((sim) => (
            <div 
              key={sim.id}
              onClick={() => {
                setActiveSimulation(sim);
                setSelectedOption(null);
              }}
              className="group relative overflow-hidden p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-blue-500/30 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-blue-500/5"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="p-5 rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {sim.type === 'email' ? <Mail /> : sim.type === 'vishing' ? <Phone /> : <GlobeIcon />}
                </div>
                <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-slate-100 dark:bg-white/10 opacity-60">
                  {sim.difficulty}
                </span>
              </div>
              <h3 className="text-2xl font-black tracking-tight mb-4 group-hover:text-blue-500 transition-colors leading-tight">{sim.title}</h3>
              <p className="text-sm opacity-50 font-medium leading-relaxed mb-8">{sim.scenario}</p>
              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 group-hover:gap-4 transition-all">
                Initiate Simulation <ChevronRight size={14} />
              </button>
              
              {/* Background Accent */}
              <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none group-hover:scale-150 transition-all duration-1000">
                <Target size={120} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intel Modules Grid */}
      <section className="space-y-12">
        <h2 className="text-4xl lg:text-5xl font-black tracking-tight flex items-center gap-4 px-4">
          <span className="p-3 bg-blue-600/10 rounded-2xl text-blue-500"><BookOpen /></span> Knowledge Dossiers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 stagger-in">
          {filteredModules.map((module, i) => (
            <div 
              key={module.id} 
              onClick={() => setActiveModule(module)}
              className="group premium-card p-12 rounded-[4rem] glass-card transition-all duration-700 cursor-pointer border border-transparent hover:border-blue-500/20 flex flex-col justify-between min-h-[400px]"
            >
              <div>
                <div className={`mb-10 p-8 rounded-[2.5rem] bg-${module.color}-500/10 text-${module.color}-500 w-fit group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-xl`}>
                  {getIcon(module.icon, 40)}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30 mb-4 block">Field Dossier 0{i+1}</span>
                <h3 className="text-3xl font-black tracking-tight mb-4 group-hover:text-blue-500 transition-colors">{module.title}</h3>
                <p className="opacity-60 leading-relaxed font-medium text-lg">{module.description}</p>
              </div>
              
              <div className="mt-12 pt-8 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-blue-500 flex items-center gap-2 group-hover:gap-4 transition-all">
                  Open Report <ChevronRight size={16} />
                </span>
                <MousePointer2 size={20} className="opacity-0 group-hover:opacity-20 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Simulation Modal */}
      {activeSimulation && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 lg:p-12 animate-in fade-in duration-500">
           <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-3xl" onClick={() => setActiveSimulation(null)}></div>
           
           <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#020617] rounded-[4rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row">
              {/* Scenario Side */}
              <div className="lg:w-3/5 p-10 lg:p-16 space-y-10 bg-slate-50 dark:bg-white/[0.02] border-r border-white/5">
                <div className="flex justify-between items-start">
                   <div className="space-y-2">
                     <span className="px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-600 text-white shadow-lg">Simulation Phase 01</span>
                     <h2 className="text-4xl font-black tracking-tight">{activeSimulation.title}</h2>
                     <p className="text-lg opacity-60 font-medium">{activeSimulation.scenario}</p>
                   </div>
                   <button onClick={() => setActiveSimulation(null)} className="lg:hidden p-3 rounded-2xl bg-white dark:bg-white/5"><X /></button>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-[3rem] opacity-30"></div>
                  <div className="relative" dangerouslySetInnerHTML={{ __html: activeSimulation.content }} />
                </div>
              </div>

              {/* Interaction Side */}
              <div className="lg:w-2/5 p-10 lg:p-16 flex flex-col justify-between space-y-12">
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <Brain className="text-blue-500" size={24} />
                    <h3 className="text-xl font-black tracking-tight">How do you react?</h3>
                  </div>

                  <div className="space-y-4">
                    {activeSimulation.options.map((opt) => (
                      <button 
                        key={opt.id}
                        disabled={selectedOption !== null}
                        onClick={() => setSelectedOption(opt)}
                        className={`w-full p-6 rounded-3xl border-2 text-left transition-all duration-300 font-bold ${
                          selectedOption?.id === opt.id 
                            ? opt.isCorrect ? 'bg-green-500/10 border-green-500 text-green-600' : 'bg-red-500/10 border-red-500 text-red-600'
                            : 'bg-white dark:bg-white/5 border-slate-100 dark:border-white/10 hover:border-blue-500/40 hover:bg-slate-50 dark:hover:bg-white/[0.05]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm">{opt.text}</span>
                          {selectedOption?.id === opt.id && (opt.isCorrect ? <CheckCircle2 /> : <ShieldAlert />)}
                        </div>
                      </button>
                    ))}
                  </div>

                  {selectedOption && (
                    <div className={`p-8 rounded-3xl border animate-in zoom-in-95 duration-500 ${selectedOption.isCorrect ? 'bg-green-500/5 border-green-500/20' : 'bg-red-500/5 border-red-500/20'}`}>
                      <h4 className={`text-sm font-black uppercase tracking-widest mb-3 ${selectedOption.isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                        {selectedOption.isCorrect ? 'Intelligence Insight' : 'Defense Breach Identified'}
                      </h4>
                      <p className="text-sm font-medium leading-relaxed opacity-80">{selectedOption.feedback}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <button 
                    onClick={() => setActiveSimulation(null)}
                    className="w-full py-5 rounded-2xl bg-blue-600 text-white font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:-translate-y-1 transition-all"
                  >
                    Finish Simulation
                  </button>
                  <button className="w-full text-xs font-black uppercase tracking-widest opacity-30 hover:opacity-100 transition-opacity">
                    Report Technical Issue
                  </button>
                </div>
              </div>
              
              <button 
                onClick={() => setActiveSimulation(null)} 
                className="hidden lg:flex absolute top-10 right-10 p-4 rounded-3xl bg-slate-100 dark:bg-white/5 hover:bg-red-500 hover:text-white transition-all group"
              >
                <X size={24} className="group-hover:rotate-90 transition-transform" />
              </button>
           </div>
        </div>
      )}

      {/* Intel Module Modal */}
      {activeModule && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 lg:p-12 animate-in fade-in duration-500">
           <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-3xl" onClick={() => setActiveModule(null)}></div>
           
           <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#020617] rounded-[4rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] stagger-in">
              <div className="sticky top-0 z-20 p-10 lg:p-16 flex justify-between items-start bg-inherit border-b border-white/5 backdrop-blur-md">
                 <div className="flex gap-10 items-center">
                    <div className={`p-8 rounded-[2.5rem] bg-${activeModule.color}-500/10 text-${activeModule.color}-500 shadow-2xl animate-float`}>
                       {getIcon(activeModule.icon, 48)}
                    </div>
                    <div className="space-y-2">
                       <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">Behavioral Intelligence Hub</p>
                       <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">{activeModule.title}</h2>
                       <p className="text-xl opacity-60 font-medium">{activeModule.subtitle}</p>
                    </div>
                 </div>
                 <button 
                  onClick={() => setActiveModule(null)}
                  className="p-4 rounded-3xl bg-slate-100 dark:bg-white/5 hover:bg-red-500 hover:text-white transition-all group"
                 >
                    <X size={32} className="group-hover:rotate-90 transition-transform" />
                 </button>
              </div>

              <div className="p-10 lg:p-16 space-y-20">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {activeModule.details.map((detail, idx) => (
                       <div key={idx} className="space-y-6 group/detail">
                          <h4 className="flex items-center gap-4 text-sm font-black uppercase tracking-[0.2em] text-blue-500">
                             <Activity size={20} /> {detail.heading}
                          </h4>
                          <div className="p-10 rounded-[3rem] bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 group-hover/detail:border-blue-500/30 transition-all duration-500">
                             <p className="text-xl leading-relaxed font-medium opacity-80">
                               {idx === 0 && activeModule.id === 'intro' ? (
                                 <>A system can be secure, encrypted, and updated, but one careless human action can destroy everything. Attackers don’t need to crack a 256-bit encryption key if they can simply ask an employee for their <GlossaryTerm term="PII">password or PII</GlossaryTerm>.</>
                               ) : detail.body}
                             </p>
                             {detail.points && (
                                <ul className="mt-8 space-y-4">
                                   {detail.points.map((p, i) => (
                                      <li key={i} className="flex gap-4 items-start">
                                         <div className="p-1 rounded-full bg-blue-500 text-white mt-1.5"><CheckCircle2 size={14} /></div>
                                         <span className="text-lg opacity-60 font-bold">{p}</span>
                                      </li>
                                   ))}
                                </ul>
                             )}
                          </div>
                       </div>
                    ))}
                 </div>

                 <div className="p-12 lg:p-16 rounded-[4rem] bg-slate-900 text-white overflow-hidden relative group/takeaway">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-transparent"></div>
                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                       <div className="shrink-0 p-10 rounded-[3rem] bg-blue-600 text-white shadow-2xl animate-pulse">
                          <Target size={64} />
                       </div>
                       <div className="flex-1 space-y-8">
                          <h3 className="text-3xl font-black tracking-tight">Executive Takeaways</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                             {activeModule.takeaways.map((take, i) => (
                                <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-all">
                                   <div className="w-10 h-10 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 font-black text-xs">0{i+1}</div>
                                   <p className="text-sm font-black uppercase tracking-widest">{take}</p>
                                </div>
                             ))}
                          </div>
                       </div>
                    </div>
                    <ShieldCheck size={200} className="absolute bottom-[-50px] right-[-50px] opacity-[0.03] group-hover/takeaway:scale-125 transition-transform duration-1000" />
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* Educational Mindset Section */}
      <section className="group relative p-16 lg:p-24 rounded-[5rem] bg-gradient-to-tr from-emerald-600 to-teal-800 text-white overflow-hidden shadow-2xl transition-all duration-700">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute top-[-50px] right-[-50px] p-24 opacity-10 group-hover:scale-150 transition-transform duration-1000 rotate-12">
          <ShieldCheck size={400} />
        </div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass border border-white/20 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-100">
               <Zap size={16} /> Awareness Protocol Active
            </div>
            <h2 className="text-5xl lg:text-7xl font-black italic tracking-tighter leading-tight">"The Mind is the Ultimate Firewall."</h2>
            <p className="text-xl lg:text-2xl opacity-80 leading-relaxed font-medium">
              Real safety is not about the tools you use, but the consciousness you maintain. Training your brain to pause is the most effective security control ever discovered.
            </p>
            <div className="pt-6">
               <button className="px-12 py-6 bg-white text-emerald-800 rounded-[2rem] font-black text-sm uppercase tracking-[0.3em] shadow-2xl hover:-translate-y-2 transition-all active:scale-95 group/btn flex items-center gap-4">
                  Initiate Mental Drill <ChevronRight size={24} className="group-hover/btn:translate-x-2 transition-transform" />
               </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
             {[
               { label: 'Verify Source', value: '100%', desc: 'Identity confirmation success' },
               { label: 'Urgency Bias', value: '0.2s', desc: 'Typical pause before action' },
               { label: 'Fear Resistance', value: 'High', desc: 'Heuristic mental stability' },
               { label: 'Data Defense', value: 'Elite', desc: 'PII protection proficiency' }
             ].map((stat, idx) => (
               <div key={idx} className="p-8 rounded-[3rem] glass border border-white/10 space-y-4 text-center hover:bg-white/10 transition-all">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-40">{stat.label}</p>
                  <p className="text-4xl font-black">{stat.value}</p>
                  <p className="text-xs opacity-50 font-medium">{stat.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Awareness;
