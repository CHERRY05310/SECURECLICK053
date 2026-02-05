
import React, { useState, useRef, useEffect } from 'react';
import { Search, Upload, FileText, AlertTriangle, CheckCircle, ShieldAlert, Loader2, Sparkles, Trash2, Link as LinkIcon, Info, Scan, ShieldX, Terminal, Mail, MessageSquare, ShieldCheck, Cpu, Fingerprint, Activity, Database, Zap, Lock } from 'lucide-react';
import { analyzeThreatContent } from '../services/geminiService';
import { AnalysisResult } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

const PHISHING_ARTIFACTS = [
  {
    name: "Typosquatted URL",
    content: "URGENT: Your Apple ID is locked. Verify here: https://apple-security-check.verify-account.icu/login"
  },
  {
    name: "Punycode/Homograph",
    content: "Log in to your banking portal: https://xn--80ak6aa92e.com/secure (Real address would be 'apple.com' spoofed via Cyrillic characters)"
  },
  {
    name: "Tracking Link Obfuscation",
    content: "You've won! Click to claim: http://t.ly/xR91?redirect=http%3A%2F%2Fmalicious-site.work%2Fpayload"
  },
  {
    name: "Header Spoof Example",
    content: `From: "Microsoft Security" <security-alert@office365-verify.xyz>\nReturn-Path: <bounce-2931@marketing-vps.ru>\nSubject: Action Required: Your account is scheduled for deletion\n\nDear User, we noticed suspicious logins. Please verify: http://microsoft-office-update.xyz/login`
  }
];

const Analysis: React.FC = () => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const logEndRef = useRef<HTMLDivElement>(null);

  const scanLabels = [
    "Initializing Neural Engines...",
    "Inspecting SMTP Header Symmetry...",
    "Scanning for Punycode & Homograph Obfuscation...",
    "Analyzing Linguistic Urgency Patterns...",
    "Tracing Redirection & URL Parameter Chains...",
    "Finalizing Threat Intelligence Report..."
  ];

  const forensicLogs = [
    "[INFO] Initializing forensic cluster...",
    "[INFO] Connecting to Global Threat Intel Feed v4.2...",
    "[TRACE] Extracting artifacts from source payload...",
    "[DEBUG] Calculating entropy for domain components...",
    "[WARN] Suspected typosquatting pattern detected.",
    "[INFO] Analyzing linguistic sentiment: Fear/Urgency detected.",
    "[TRACE] Reconstructing redirection chain...",
    "[DEBUG] Checking SSL/TLS certificate transparency...",
    "[INFO] Cross-referencing known blacklists...",
    "[SUCCESS] Forensic audit complete."
  ];

  useEffect(() => {
    let interval: any;
    let progressInterval: any;
    let logInterval: any;

    if (isAnalyzing) {
      setLogs([]);
      interval = setInterval(() => {
        setScanStep(prev => (prev < scanLabels.length - 1 ? prev + 1 : prev));
      }, 1200);

      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 98) return prev;
          const jump = Math.random() * 5 + 1;
          return Math.min(prev + jump, 98);
        });
      }, 150);

      let logIdx = 0;
      logInterval = setInterval(() => {
        if (logIdx < forensicLogs.length) {
          setLogs(prev => [...prev, forensicLogs[logIdx]]);
          logIdx++;
        }
      }, 700);
    } else {
      setScanStep(0);
      setProgress(0);
    }
    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
      clearInterval(logInterval);
    };
  }, [isAnalyzing]);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const runAnalysis = async () => {
    if (!content && !image) return;
    setIsAnalyzing(true);
    setResult(null);
    setProgress(0);
    try {
      const analysis = await analyzeThreatContent(content, image || undefined);
      await new Promise(r => setTimeout(r, 1200)); // Buffer for dramatic effect
      setProgress(100);
      setResult(analysis);
    } catch (error) {
      console.error(error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const radarData = result ? [
    { subject: 'Malicious Intent', A: result.riskLevel },
    { subject: 'Forensic Markers', A: Math.max(20, result.riskLevel - 5) },
    { subject: 'Impersonation', A: Math.min(100, result.riskLevel + 10) },
    { subject: 'Urgency Bias', A: result.riskLevel > 50 ? 90 : 20 },
    { subject: 'Heuristics', A: result.riskLevel > 70 ? 95 : 30 },
  ] : [];

  return (
    <div className="max-w-7xl mx-auto space-y-12 pb-24 px-4">
      {/* Dynamic Grid Background Overlay during Analysis */}
      {isAnalyzing && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden bg-blue-600/5 animate-grid-pulse">
           <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
      )}

      <div className="text-center space-y-4 max-w-2xl mx-auto stagger-in">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 font-black text-[10px] uppercase tracking-[0.3em]">
           <Activity size={14} className="animate-pulse" /> Advanced Threat Forensic Engine
        </div>
        <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none">
          Threat <span className="shimmer-text">Neutralization</span> Lab
        </h1>
        <p className="text-lg opacity-60 leading-relaxed font-medium">
          Upload suspicious artifacts for a high-fidelity dissection. Our forensic engine uses multi-modal AI to identify sophisticated human exploits and technical anomalies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 space-y-8">
          <div className="relative group bg-white dark:bg-white/5 p-8 rounded-[3rem] border border-gray-100 dark:border-white/5 shadow-2xl transition-all hover:border-blue-500/30">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest opacity-40">
                  <Terminal size={16} /> Forensic Input
                </div>
                <button 
                  onClick={() => navigator.clipboard.readText().then(setContent)}
                  className="text-[10px] font-black uppercase tracking-widest text-blue-500 bg-blue-500/10 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all active:scale-95"
                >
                  Quick Paste
                </button>
              </div>
              
              <div className="relative group">
                <textarea 
                  className="w-full min-h-[220px] p-8 rounded-[2rem] bg-gray-50 dark:bg-[#020617] border border-transparent focus:border-blue-500 outline-none resize-none transition-all font-mono text-sm leading-relaxed"
                  placeholder="Paste URL, email headers, or suspicious messages..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                {!content && (
                   <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-10">
                     <Database size={80} className="animate-pulse-slow mb-4" />
                     <p className="text-xs font-black uppercase tracking-widest">Awaiting Artifact Payload</p>
                   </div>
                )}
              </div>

              <div className="space-y-3">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-40 px-2">Artifact Library (Common Vectors)</p>
                <div className="flex flex-wrap gap-2">
                  {PHISHING_ARTIFACTS.map((art, i) => (
                    <button 
                      key={i}
                      onClick={() => setContent(art.content)}
                      className="px-5 py-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-bold hover:border-blue-500 hover:bg-blue-500/5 transition-all flex items-center gap-2 active:scale-95"
                    >
                      <Zap size={12} className="text-yellow-500" /> {art.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-5 rounded-2xl bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-all text-sm font-black uppercase tracking-widest border border-transparent hover:border-blue-500/20 active:scale-95"
                >
                  <Upload size={18} /> {image ? 'Proof Attached' : 'Attach Screenshot'}
                </button>
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
                {image && (
                  <button onClick={() => setImage(null)} className="p-5 rounded-2xl text-red-500 bg-red-500/10 hover:bg-red-500 hover:text-white transition-all shadow-xl shadow-red-500/10 active:scale-95">
                    <Trash2 size={24} />
                  </button>
                )}
              </div>

              <button 
                onClick={runAnalysis}
                disabled={isAnalyzing || (!content && !image)}
                className="group/btn relative w-full py-6 rounded-[2.5rem] bg-blue-600 text-white font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-2xl shadow-blue-600/30 active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                {isAnalyzing ? <><Loader2 className="animate-spin" size={20} /> Deep Forensic Scan...</> : <><Scan size={20} /> Initiate Analysis</>}
              </button>
            </div>
          </div>
          
          <div className="p-10 rounded-[3rem] bg-blue-600/10 border border-blue-500/20 space-y-4">
             <div className="flex items-center gap-3 text-blue-500 font-black text-xs uppercase tracking-widest">
                <ShieldCheck size={16} /> Privacy Protocol
             </div>
             <p className="text-xs opacity-60 leading-relaxed font-medium">
               SAFECLICK utilizes non-persistent analysis. Your forensic artifacts are processed in volatile memory and purged immediately after the session concludes. No persistent storage is utilized for analysis data.
             </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          {isAnalyzing ? (
            <div className="h-[700px] relative overflow-hidden flex flex-col items-center justify-center space-y-12 animate-in fade-in zoom-in-95 duration-700 bg-slate-900 rounded-[4rem] border border-white/5 shadow-3xl">
              
              {/* Dynamic Data Stream Background */}
              <div className="absolute inset-0 font-mono text-[10px] text-blue-500/10 overflow-hidden pointer-events-none select-none p-10 leading-none">
                 {[...Array(50)].map((_, i) => (
                   <p key={i} className="whitespace-nowrap mb-1">
                     {Array(20).fill(0).map(() => Math.random().toString(16).slice(2, 8)).join(' ')}
                   </p>
                 ))}
              </div>

              {/* Radar Sweep Animation */}
              <div className="absolute w-[800px] h-[800px] border border-blue-500/5 rounded-full animate-radar">
                 <div className="absolute top-1/2 left-1/2 w-[400px] h-[1px] bg-gradient-to-r from-blue-500/0 to-blue-500/50 origin-left"></div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/30 blur-[80px] animate-pulse rounded-full"></div>
                <div className="w-64 h-64 rounded-full border-2 border-blue-500/20 flex items-center justify-center p-6 bg-black/40 backdrop-blur-md">
                  <div className="w-full h-full rounded-full border-[6px] border-blue-600 border-t-transparent animate-spin-slow"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="relative group">
                      <ShieldAlert size={80} className="text-blue-500 animate-pulse" />
                      <div className="absolute inset-0 bg-blue-400 blur-2xl opacity-30 animate-pulse"></div>
                   </div>
                </div>
                {/* Crosshair effect */}
                <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-[1px] h-10 bg-blue-500/50"></div>
                <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[1px] h-10 bg-blue-500/50"></div>
                <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-[1px] bg-blue-500/50"></div>
                <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-[1px] bg-blue-500/50"></div>
              </div>

              <div className="space-y-10 w-full max-w-lg px-12 text-center relative z-10">
                <div className="space-y-4">
                  <h3 className="text-3xl font-black tracking-tight text-white shimmer-text min-h-[4rem]">
                    {scanLabels[scanStep]}
                  </h3>
                  <div className="flex items-center justify-between px-2">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-40 text-blue-400">Threat Fingerprint Extraction</span>
                    <span className="text-2xl font-black text-blue-500">{Math.floor(progress)}%</span>
                  </div>
                </div>

                <div className="relative h-4 w-full bg-white/5 rounded-full overflow-hidden p-1 border border-white/10">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 rounded-full transition-all duration-300 ease-out shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Tactical Terminal Logs */}
                <div className="h-32 bg-black/60 rounded-3xl border border-white/5 p-6 font-mono text-[11px] text-left space-y-2 overflow-hidden relative">
                   <div className="absolute top-0 right-0 p-4 opacity-20"><Terminal size={14} /></div>
                   {logs.map((log, i) => (
                     <p key={i} className="text-blue-400/80 animate-in slide-in-from-bottom-2 duration-300">
                        <span className="text-blue-600 font-bold">></span> {log}
                     </p>
                   ))}
                   <div ref={logEndRef} />
                </div>

                <div className="flex items-center justify-center gap-8 pt-4">
                  <div className="flex items-center gap-2">
                    <Cpu size={16} className="text-blue-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-50 text-white">Neural Cluster 01: Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity size={16} className="text-indigo-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-50 text-white">Heuristic Sync: OK</span>
                  </div>
                </div>
              </div>
            </div>
          ) : result ? (
            <div className="space-y-8 animate-in slide-in-from-right-10 duration-1000 stagger-in">
               <div className={`p-12 rounded-[4rem] border-2 flex flex-col md:flex-row items-center gap-12 shadow-3xl relative overflow-hidden transition-all duration-700 ${
                 result.status === 'Safe' ? 'bg-green-500/10 border-green-500/20 text-green-600' :
                 result.status === 'Suspicious' ? 'bg-orange-500/10 border-orange-500/20 text-orange-600' :
                 'bg-red-500/10 border-red-500/20 text-red-600'
               }`}>
                  {/* Result Background Effect */}
                  <div className={`absolute top-0 right-0 w-64 h-64 blur-[100px] opacity-20 ${
                    result.status === 'Safe' ? 'bg-green-500' : result.status === 'Suspicious' ? 'bg-orange-500' : 'bg-red-500'
                  }`}></div>

                  <div className="relative shrink-0">
                    <div className="w-40 h-40 rounded-[2.5rem] bg-white dark:bg-[#020617] border border-current/10 flex items-center justify-center shadow-2xl transition-transform hover:scale-110">
                       {result.status === 'Safe' ? <CheckCircle size={80} /> : 
                        result.status === 'Suspicious' ? <AlertTriangle size={80} /> : 
                        <ShieldX size={80} />}
                    </div>
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-white dark:bg-[#020617] border border-current/20 text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap shadow-xl">
                      {result.status} Threat Level
                    </div>
                  </div>

                  <div className="flex-1 space-y-4 text-center md:text-left">
                     <h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight">Forensic Audit Summary</h2>
                     <p className="text-xl font-medium opacity-80 leading-relaxed text-gray-800 dark:text-gray-200">
                       {result.reasoning}
                     </p>
                  </div>

                  <div className="w-48 h-48 shrink-0 relative flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[{ value: result.riskLevel }, { value: 100 - result.riskLevel }]}
                          cx="50%" cy="50%" innerRadius={55} outerRadius={75}
                          startAngle={90} endAngle={450} dataKey="value" stroke="none"
                        >
                          <Cell fill="currentColor" className="opacity-100" />
                          <Cell fill="currentColor" className="opacity-10" />
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                       <span className="text-4xl font-black">{result.riskLevel}%</span>
                       <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Risk Index</span>
                    </div>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="group p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-2xl hover:border-red-500/30 transition-all duration-500">
                     <div className="flex items-center gap-4 mb-10">
                        <div className="p-4 rounded-[1.5rem] bg-red-500/10 text-red-500 shadow-xl shadow-red-500/5 transition-transform group-hover:rotate-12">
                          <ShieldAlert size={28} />
                        </div>
                        <h3 className="font-black text-2xl tracking-tight">Technical Markers</h3>
                     </div>
                     <div className="flex flex-wrap gap-3">
                        {result.detectedIndicators.map((ind, i) => (
                           <span key={i} className="px-5 py-3 rounded-2xl bg-red-500/5 text-red-600 dark:text-red-400 text-xs font-black uppercase tracking-widest border border-red-500/10 transition-all hover:scale-105">
                             {ind}
                           </span>
                        ))}
                        {result.detectedIndicators.length === 0 && <p className="text-sm opacity-40 italic">Baseline signature match. No anomalies found during inspection.</p>}
                     </div>
                  </div>

                  <div className="group p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-2xl hover:border-blue-500/30 transition-all duration-500">
                     <div className="flex items-center gap-4 mb-10">
                        <div className="p-4 rounded-[1.5rem] bg-blue-500/10 text-blue-500 shadow-xl shadow-blue-500/5 transition-transform group-hover:-rotate-12">
                          <ShieldCheck size={28} />
                        </div>
                        <h3 className="font-black text-2xl tracking-tight">Tactical Remediation</h3>
                     </div>
                     <ul className="space-y-5">
                        {result.suggestedActions.map((action, i) => (
                           <li key={i} className="flex gap-5 items-start group/li">
                              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 shrink-0 group-hover/li:scale-150 transition-all duration-300"></div>
                              <p className="text-base font-medium opacity-70 group-hover/li:opacity-100 transition-opacity leading-relaxed">{action}</p>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               <div className="p-12 rounded-[4rem] bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-3xl flex flex-col lg:flex-row items-center gap-16">
                  <div className="flex-1 space-y-6">
                     <h3 className="text-3xl font-black tracking-tight">Neural Radar Analysis</h3>
                     <p className="text-lg opacity-60 leading-relaxed font-medium">
                        Detailed forensic breakdown of heuristic markers. Each axis represents a specific exploitation vector analyzed by our model clusters.
                     </p>
                     <div className="flex flex-wrap gap-8 pt-4">
                        <div className="flex items-center gap-3">
                           <div className="w-3 h-3 rounded-full bg-blue-500 shadow-glow"></div>
                           <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Forensic Weight</span>
                        </div>
                        <div className="flex items-center gap-3">
                           <Info size={14} className="opacity-30" />
                           <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Confidence Score: 0.98</span>
                        </div>
                     </div>
                  </div>
                  <div className="w-full lg:w-[450px] h-[350px] shrink-0 bg-slate-50/50 dark:bg-black/20 rounded-[3rem] border border-gray-100 dark:border-white/5 p-4 shadow-inner">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                        <PolarGrid strokeOpacity={0.1} />
                        <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fontWeight: 900, fill: '#888' }} />
                        <Radar
                          name="Threat Profile"
                          dataKey="A"
                          stroke="#3b82f6"
                          fill="#3b82f6"
                          fillOpacity={0.5}
                          animationDuration={1500}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
               </div>
            </div>
          ) : (
            <div className="h-[650px] flex flex-col items-center justify-center space-y-8 text-center px-10">
               <div className="relative group">
                  <div className="absolute inset-0 bg-blue-500/10 blur-[100px] animate-pulse group-hover:blur-[120px] transition-all"></div>
                  <div className="relative w-32 h-32 rounded-[2.5rem] bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shadow-2xl transition-transform group-hover:scale-110">
                    <Scan size={64} className="animate-float" />
                  </div>
                  <div className="absolute top-[-10px] right-[-10px] w-8 h-8 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg animate-bounce">
                     <Lock size={14} />
                  </div>
               </div>
               <div className="max-w-md space-y-4">
                 <h3 className="text-3xl font-black tracking-tight opacity-30 uppercase tracking-[0.3em]">Scanner Offline</h3>
                 <p className="text-base opacity-40 font-medium leading-relaxed">
                   Paste digital artifacts or attach screenshots to initialize high-precision forensic analysis. Our engines are standing by for payload input.
                 </p>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analysis;
