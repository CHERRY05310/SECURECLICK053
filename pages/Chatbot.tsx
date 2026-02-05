import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, Bot, User as UserIcon, Loader2, Sparkles, Info, RefreshCw, 
  Globe, Brain, Zap, ExternalLink, ShieldCheck, Activity, Terminal, 
  Shield, Cpu, Lock, ChevronRight, AlertCircle, X, Search, MessageSquare, 
  FileText, ShieldAlert, Gavel, MousePointer2 
} from 'lucide-react';
import { getChatResponse, ChatMode } from '../services/geminiService';
import { ChatMessage } from '../types';

interface MessageWithSources extends ChatMessage {
  sources?: { title: string; uri: string }[];
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<MessageWithSources[]>([
    { 
      role: 'model', 
      text: 'Identity verified. SAFECLICK Tactical AI Assistant initialized.\n\nI am your Chief Intelligence Mentor. I am synchronized with global threat feeds to provide forensic-grade analysis on social engineering, cyber laws, and defensive protocols.\n\n**Awaiting tactical query.**' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<ChatMode>('lite');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const QUICK_COMMANDS = [
    { label: "Analyze a Scenario", icon: <Brain size={14}/>, query: "I want to analyze a potential social engineering scenario I encountered." },
    { label: "Legal Advice", icon: <Gavel size={14}/>, query: "What are the legal steps to take if I'm a victim of a UPI fraud in India?" },
    { label: "Red Flags Guide", icon: <ShieldAlert size={14}/>, query: "Can you provide a tactical breakdown of red flags in phishing emails?" },
    { label: "MFA Hardening", icon: <Lock size={14}/>, query: "How can I harden my accounts against MFA fatigue and bypass attacks?" }
  ];

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(scrollToBottom, [messages, isLoading]);

  const handleSend = async (customQuery?: string) => {
    const queryToUse = customQuery || input;
    if (!queryToUse.trim() || isLoading) return;
    
    const userMsg = queryToUse;
    const newMessages = [...messages, { role: 'user', text: userMsg } as MessageWithSources];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);
    
    try {
      const result = await getChatResponse(newMessages, mode);
      setMessages([...newMessages, { role: 'model', text: result.text, sources: result.sources }]);
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { 
        role: 'model', 
        text: "Tactical communication failure. Neural link interrupted. Re-synchronize with core intelligence or verify credentials." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-12rem)] flex flex-col lg:flex-row bg-white dark:bg-[#020617] rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-3xl overflow-hidden relative transition-all duration-700">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,#3b82f6_0%,transparent_100%)]"></div>
      
      {/* Sidebar: Tactical Status */}
      <aside className="hidden lg:flex w-80 flex-col border-r border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01] p-10 space-y-10">
        <div className="space-y-6">
           <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-xl shadow-blue-500/20">
                <Shield size={20} />
              </div>
              <h3 className="font-black text-sm uppercase tracking-widest">Tactical Profile</h3>
           </div>
           
           <div className="space-y-4">
              <div className="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm group hover:border-blue-500/30 transition-all cursor-default">
                 <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">Operation Mode</p>
                 <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full animate-pulse ${mode === 'thinking' ? 'bg-purple-500' : 'bg-blue-500'}`}></span>
                    <span className={`text-xs font-black uppercase ${mode === 'thinking' ? 'text-purple-500' : 'text-blue-500'}`}>
                      {mode === 'thinking' ? 'Chief Analyst' : mode === 'search' ? 'OSINT Intelligence' : 'Lite Mentor'}
                    </span>
                 </div>
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm">
                 <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">Uplink Integrity</p>
                 <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="text-xs font-black uppercase opacity-70">Secured & Encrypted</span>
                 </div>
              </div>
           </div>
        </div>

        <div className="space-y-6">
           <h3 className="font-black text-[10px] uppercase tracking-[0.2em] opacity-30 px-2">Sub-System Telemetry</h3>
           <div className="space-y-3">
              {[
                { label: 'Neural Scraping', icon: <Cpu size={14}/>, status: 'Active' },
                { label: 'Risk Modeling', icon: <Terminal size={14}/>, status: 'Ready' },
                { label: 'Credential Guard', icon: <ShieldCheck size={14}/>, status: 'Active' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10">
                   <div className="flex items-center gap-3">
                      <div className="text-blue-500">{item.icon}</div>
                      <span className="text-[10px] font-bold opacity-60">{item.label}</span>
                   </div>
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                </div>
              ))}
           </div>
        </div>

        <div className="mt-auto p-6 rounded-3xl bg-slate-900 text-white shadow-2xl space-y-4 border border-white/5 group hover:border-blue-500/40 transition-all cursor-default">
           <div className="flex items-center gap-2 text-blue-400">
              <Sparkles size={14} className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest">Mentor Insight</span>
           </div>
           <p className="text-[10px] font-medium leading-relaxed opacity-60 italic">
             "For complex scenarios requiring deep behavioral reasoning, engage the 'Analyst' mode. This allocates maximum heuristic cycles to your query."
           </p>
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 flex flex-col relative">
        {/* Header */}
        <div className="p-8 flex flex-col md:flex-row gap-6 items-center justify-between border-b border-slate-100 dark:border-white/5 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-3xl z-10">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative p-4 bg-slate-900 rounded-3xl text-blue-500 border border-white/5 shadow-2xl transition-transform hover:rotate-6">
                <Bot size={32} />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 border-4 border-white dark:border-[#020617] rounded-full"></div>
            </div>
            <div>
              <h2 className="font-black text-2xl tracking-tight leading-none">SafeChat Mentor</h2>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30 mt-2">Tactical Intelligence Hub: ALFA-VINC</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex bg-slate-100 dark:bg-white/5 p-1.5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-inner">
              {[
                { id: 'lite', label: 'Lite', icon: <Zap size={14} /> },
                { id: 'search', label: 'OSINT', icon: <Globe size={14} /> },
                { id: 'thinking', label: 'Analyst', icon: <Brain size={14} /> }
              ].map((t) => (
                <button 
                  key={t.id}
                  onClick={() => setMode(t.id as any)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-xl transition-all relative ${
                    mode === t.id 
                      ? 'bg-white dark:bg-slate-800 text-blue-600 shadow-xl' 
                      : 'opacity-40 hover:opacity-100'
                  }`}
                >
                  {t.icon}
                  <span className="text-[10px] font-black uppercase tracking-widest">{t.label}</span>
                </button>
              ))}
            </div>

            <button 
              onClick={() => setMessages([messages[0]])} 
              className="p-3.5 hover:bg-red-500/10 hover:text-red-500 rounded-2xl transition-all group"
              title="Purge Intel Buffer"
            >
              <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-700" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-10 space-y-10 scrollbar-hide bg-slate-50/20 dark:bg-transparent">
          {messages.map((msg, i) => (
            <div key={i} className={`flex items-start gap-6 animate-in slide-in-from-bottom-4 duration-500 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`shrink-0 p-4 rounded-2xl shadow-xl transition-transform hover:scale-110 ${
                msg.role === 'model' 
                  ? 'bg-slate-900 text-blue-500 border border-white/5' 
                  : 'bg-blue-600 text-white shadow-blue-500/20'
              }`}>
                {msg.role === 'model' ? <Bot size={24} /> : <UserIcon size={24} />}
              </div>
              
              <div className={`max-w-[85%] space-y-4 ${msg.role === 'user' ? 'text-right' : ''}`}>
                <div className={`p-8 rounded-[2.5rem] shadow-2xl text-lg leading-relaxed font-medium transition-all group/msg ${
                  msg.role === 'model' 
                    ? 'bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 text-slate-800 dark:text-slate-200' 
                    : 'bg-blue-600 text-white rounded-tr-none'
                }`}>
                   <div className="prose dark:prose-invert max-w-none whitespace-pre-wrap font-sans text-base md:text-lg">
                      {msg.text}
                   </div>
                   
                   {msg.sources && msg.sources.length > 0 && (
                     <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5">
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4 flex items-center gap-2">
                           <Globe size={12} /> OSINT Verification Sources:
                        </p>
                        <div className="flex flex-wrap gap-2">
                           {msg.sources.map((s, idx) => (
                             <a 
                               key={idx} 
                               href={s.uri} 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/10 text-[10px] font-bold flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-all shadow-sm"
                             >
                               {s.title} <ExternalLink size={10} />
                             </a>
                           ))}
                        </div>
                     </div>
                   )}
                </div>
                <div className={`flex items-center gap-3 px-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-20">
                    {msg.role === 'model' ? 'Verified Intelligence Dossier' : 'Authorized Access Agent'} • {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                  <Activity size={10} className="opacity-10 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex items-start gap-6 animate-pulse">
              <div className="shrink-0 p-4 rounded-2xl bg-slate-900 text-blue-500 border border-white/5">
                <Bot size={24} />
              </div>
              <div className="p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 w-64 space-y-4">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce delay-150"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce delay-300"></div>
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-40">
                  {mode === 'thinking' ? 'Performing Forensic Reasoning...' : 'Accessing Intelligence Modules...'}
                </p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-8 border-t border-slate-100 dark:border-white/5 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-3xl space-y-6">
          
          {/* Quick Commands */}
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
             {QUICK_COMMANDS.map((cmd, i) => (
               <button 
                key={i}
                onClick={() => handleSend(cmd.query)}
                className="flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-blue-500/40 hover:bg-white dark:hover:bg-white/10 transition-all text-[10px] font-black uppercase tracking-widest shadow-sm group"
               >
                 <span className="text-blue-500 group-hover:scale-125 transition-transform">{cmd.icon}</span>
                 {cmd.label}
               </button>
             ))}
          </div>

          <div className="max-w-4xl mx-auto relative group">
            <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-[2.5rem] opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center gap-4 bg-white dark:bg-white/5 border-2 border-slate-100 dark:border-white/10 rounded-[2.5rem] p-3 shadow-2xl focus-within:border-blue-500/40 transition-all">
               <div className="p-4 text-slate-300 flex items-center justify-center">
                  <MessageSquare size={24} />
               </div>
               <input 
                 type="text" 
                 placeholder="Input tactical query or threat artifact..." 
                 className="flex-1 bg-transparent border-none outline-none font-bold text-lg py-4 placeholder:opacity-30"
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 onKeyDown={(e) => e.key === 'Enter' && handleSend()}
               />
               <button 
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="p-5 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-500/20 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all group/send"
               >
                 {isLoading ? <Loader2 className="animate-spin" size={24} /> : <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
               </button>
            </div>
            <div className="flex justify-center gap-12 mt-4 opacity-40">
               <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-green-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest">TLS 1.3 Encryption Active</span>
               </div>
               <div className="flex items-center gap-2">
                  <Lock size={14} className="text-blue-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Zero-Persistence Analysis</span>
               </div>
               <div className="hidden sm:flex items-center gap-2">
                  <Activity size={14} className="text-indigo-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Latency: 0.14ms</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;