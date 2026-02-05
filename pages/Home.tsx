
import React from 'react';
import { Shield, Lock, AlertTriangle, ChevronRight, Activity, Users, Globe, ArrowUpRight, CheckCircle2, Zap, Target, MousePointer2, Sparkles, Brain, ShieldCheck, Fingerprint } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-24 max-w-7xl mx-auto px-4">
      {/* Premium Re-imagined Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden rounded-[4rem] lg:rounded-[6rem] p-10 lg:p-24 stagger-in">
        {/* Advanced Background Layers */}
        <div className="absolute inset-0 bg-[#020617]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-indigo-900/40"></div>
        
        {/* Animated Mesh / Particles */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)] animate-pulse-slow"></div>
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: '#6366f1', stopOpacity: 0.1 }} />
              </linearGradient>
            </defs>
            <path d="M0,500 C200,400 300,600 500,500 C700,400 800,600 1000,500 L1000,1000 L0,1000 Z" fill="url(#grad1)" className="animate-morph opacity-30" />
          </svg>
        </div>

        {/* Floating Security Icons */}
        <div className="absolute top-20 left-20 text-blue-500/10 animate-float hidden lg:block">
          <Shield size={120} />
        </div>
        <div className="absolute bottom-20 right-20 text-indigo-500/10 animate-float-delayed hidden lg:block">
          <Lock size={100} />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl space-y-12">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass border border-white/10 animate-in fade-in zoom-in duration-1000">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-200 drop-shadow-glow">THINK BEFORE CLICK</span>
          </div>

          {/* Headline - Updated with requested text */}
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-[8.5rem] font-black tracking-tighter leading-[0.85] text-white uppercase">
              Stay Digitally <br />
              <span className="shimmer-text italic">Secure.</span>
            </h1>
            <p className="text-xl lg:text-3xl text-blue-100/60 max-w-3xl mx-auto leading-relaxed font-medium">
              Human psychology is the final exploit. SAFECLICK builds the first neural firewall against sophisticated social engineering threats.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link to="/awareness" className="group/btn relative px-12 py-6 bg-blue-600 text-white rounded-[2.5rem] font-black text-xs uppercase tracking-[0.3em] flex items-center gap-4 transition-all shadow-[0_20px_60px_-15px_rgba(59,130,246,0.6)] hover:-translate-y-2 active:scale-95 overflow-hidden">
              <span className="relative z-10">Explore Intel Library</span>
              <ChevronRight size={18} className="group-hover/btn:translate-x-2 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
            </Link>
            
            <Link to="/analysis" className="px-12 py-6 bg-white/5 backdrop-blur-3xl border border-white/10 text-white rounded-[2.5rem] font-black text-xs uppercase tracking-[0.3em] flex items-center gap-4 hover:bg-white/10 transition-all hover:-translate-y-2 active:scale-95 group">
              <Zap size={18} className="group-hover:text-yellow-400 transition-colors" /> Start Threat Scan
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
             {[
               { icon: <ShieldCheck size={18}/>, text: 'Verified Intel' },
               { icon: <Brain size={18}/>, text: 'Psychology Focused' },
               { icon: <Globe size={18}/>, text: 'Global Defense' },
               { icon: <Activity size={18}/>, text: 'AI Monitored' }
             ].map((item, i) => (
               <div key={i} className="flex items-center justify-center gap-2">
                 {item.icon}
                 <span className="text-[10px] font-black uppercase tracking-widest">{item.text}</span>
               </div>
             ))}
          </div>
        </div>

        {/* Animated Scanning Line */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20 animate-scan"></div>
      </section>

      {/* Dynamic Security Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 stagger-in">
        {[
          { label: 'Threats Deflected', value: '142,803', icon: <Fingerprint />, trend: '+22%', color: 'blue', desc: 'Real-time neural intervention stats' },
          { label: 'Active Guardians', value: '2.4M', icon: <Users />, trend: 'Live', color: 'indigo', desc: 'Protected users across the globe' },
          { label: 'Detection Speed', value: '0.04ms', icon: <Zap />, trend: 'Elite', color: 'emerald', desc: 'Zero-delay heuristic processing' },
        ].map((stat, idx) => (
          <div key={idx} className="group premium-card p-12 rounded-[4rem] glass-card transition-all border border-transparent hover:border-blue-500/20">
            <div className="flex justify-between items-start mb-10">
              <div className={`p-5 rounded-2xl bg-${stat.color}-500/10 text-${stat.color}-500 border border-${stat.color}-500/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                {stat.icon}
              </div>
              <div className="px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 text-[10px] font-black tracking-[0.2em] uppercase flex items-center gap-2 opacity-60">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span> {stat.trend}
              </div>
            </div>
            <h3 className="text-5xl font-black tracking-tighter mb-2 group-hover:text-blue-500 transition-colors">{stat.value}</h3>
            <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.3em] mb-4">{stat.label}</p>
            <p className="text-sm font-medium opacity-50 leading-relaxed">{stat.desc}</p>
          </div>
        ))}
      </div>

      {/* Intelligence Dashboard - Tactical Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-12 stagger-in">
          <div className="flex items-center justify-between px-4">
            <div className="space-y-2">
              <h2 className="text-4xl font-black tracking-tight flex items-center gap-5">
                <span className="p-3 bg-orange-500/10 rounded-2xl text-orange-500 shadow-lg"><Target /></span> Intelligence Hub
              </h2>
              <p className="text-sm opacity-50 font-medium">Real-time repository of emerging exploitation tactics.</p>
            </div>
            <Link to="/attacks" className="group flex items-center gap-2 text-blue-500 font-bold text-xs uppercase tracking-widest hover:underline">
              Exploit Registry <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { title: "Deepfake Voice Protocol", desc: "Attackers utilizing real-time AI voice cloning for smishing.", level: "Critical", icon: <Activity className="text-red-500" /> },
              { title: "Typosquatting Surge", desc: "Mass deployment of .zip and .mov domains for payload delivery.", level: "High", icon: <Globe className="text-blue-500" /> },
              { title: "Punycode Obfuscation", desc: "New homograph characters identified in banking login clones.", level: "Moderate", icon: <Lock className="text-indigo-500" /> },
              { title: "DGA Domain Rotations", desc: "Automated rotation of 5k domains every 24h for C2 servers.", level: "High", icon: <Zap className="text-yellow-500" /> }
            ].map((news, i) => (
              <div key={i} className="group p-10 rounded-[4rem] bg-white dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 hover:border-blue-500/40 hover:shadow-2xl transition-all duration-700 flex flex-col">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 group-hover:bg-blue-600/10 group-hover:text-blue-500 transition-all">
                      {news.icon}
                    </div>
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      news.level === 'Critical' ? 'bg-red-500 text-white shadow-lg' : 'bg-slate-100 dark:bg-white/10 opacity-60'
                    }`}>
                      {news.level}
                    </span>
                  </div>
                  <h4 className="text-2xl font-black tracking-tight leading-tight group-hover:text-blue-500 transition-colors">{news.title}</h4>
                  <p className="text-sm opacity-50 leading-relaxed font-medium">{news.desc}</p>
                </div>
                <div className="pt-10 mt-auto flex justify-between items-center border-t border-slate-100 dark:border-white/5">
                   <button className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 hover:text-blue-600 transition-colors flex items-center gap-2 group-hover:gap-4 transition-all">
                     Analyze Impact <ChevronRight size={14} />
                   </button>
                   <MousePointer2 size={16} className="opacity-0 group-hover:opacity-20 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Widgets - Sentinel Activity */}
        <div className="lg:col-span-4 space-y-12 stagger-in">
          <div className="space-y-2 px-4">
            <h2 className="text-4xl font-black tracking-tight flex items-center gap-5">
              <span className="p-3 bg-green-500/10 rounded-2xl text-green-500"><Shield /></span> Sentinel Feed
            </h2>
            <p className="text-sm opacity-50 font-medium">Global system synchronization logs.</p>
          </div>

          <div className="space-y-6">
            {[
              { title: "Heuristic scan completed", time: "2m ago", status: "SECURE" },
              { title: "Typosquatting detected", time: "14m ago", status: "BLOCKED" },
              { title: "Punycode redirect trace", time: "45m ago", status: "ANALYZED" },
              { title: "Global sync finished", time: "1h ago", status: "SYNCED" }
            ].map((log, i) => (
              <div key={i} className="flex items-center gap-6 p-8 rounded-[3rem] glass border border-slate-100 dark:border-white/5 group hover:border-blue-500/30 transition-all cursor-default">
                <div className="relative">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-slate-100 dark:bg-white/5 flex items-center justify-center text-blue-500 group-hover:rotate-12 transition-transform shadow-inner">
                    <Activity size={28} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-glow"></div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-black text-xs text-blue-500 tracking-widest">{log.status}</h4>
                    <span className="text-[10px] font-bold opacity-30">{log.time}</span>
                  </div>
                  <p className="text-sm font-bold opacity-60 leading-tight">{log.title}</p>
                </div>
              </div>
            ))}
            
            <div className="relative overflow-hidden mt-12 p-12 rounded-[5rem] bg-gradient-to-tr from-blue-700 to-indigo-800 text-white space-y-8 shadow-3xl group/elite">
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover/elite:scale-150 transition-transform duration-1000"><Target size={150} /></div>
              <h3 className="text-3xl font-black leading-tight tracking-tight">Elite Analyst <br />Access.</h3>
              <p className="text-sm opacity-70 leading-relaxed font-medium">
                Unlock high-priority threat reports and community intelligence tools.
              </p>
              <button className="relative w-full py-6 bg-white text-blue-700 rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] shadow-2xl hover:-translate-y-1 transition-all active:scale-95 group overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-3"><Sparkles size={16} /> Upgrade Protocol</span>
                <div className="absolute inset-0 bg-slate-100 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
